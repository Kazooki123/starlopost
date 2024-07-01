import axios from "axios";

const HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/Falconsai/nsfw_image_detection";

interface NSFWPrediction {
    label: string;
    score: number;
}

export async function detectNSFW(mediaUrl: string): Promise<boolean> {
    try {
        const imageResponse = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
        const imageData = Buffer.from(imageResponse.data, 'binary').toString('base64');

        const response = await axios.post(
            HUGGINGFACE_API_URL,
            { inputs: { image: imageData } },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const predictions: NSFWPrediction[] = response.data;

        const nsfwThreshold = 0.5;
        const isNSFW = predictions.some(pred => 
            pred.label.toLowerCase() === 'nsfw' && pred.score > nsfwThreshold
        );

        return isNSFW;
    } catch (error) {
        console.error('Error in NSFW detection:', error);
        throw error;
    }
}