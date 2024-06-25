# nsfw_detect.py
"""
YOU SADLY NEED TO TRAIN THE MODEL FILE BY YOURSELF
"""

import torch
import torch.nn as nn
from torchvision import transforms, models
from PIL import Image
import sys

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

model = models.resnet18(pretrained=False)
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, 2)  # Binary classification (NSFW vs SFW)

model.load_state_dict(torch.load('models/nsfw_detector.pth'))
model.eval()

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
model = model.to(device)

def predict_image(image_path):
    
    image = Image.open(image_path)
    image = transform(image).unsqueeze(0)
    image = image.to(device)

    with torch.no_grad():
        outputs = model(image)
        _, predicted = torch.max(outputs.data, 1)

    return predicted.item()

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python nsfw_detect.py <image_path>")
        sys.exit(1)

    image_path = sys.argv[1]
    prediction = predict_image(image_path)

    if prediction == 0:
        print("This is SAFE")
    else:
        print("This is not SAFE")
