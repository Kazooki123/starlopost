# core/core.py

import time
import requests
import sys, os
sys.path.append(os.path.abspath(os.path.join('..')))

from patterns.rules import block_ip

def analyze_website():
    """
    Placeholder for analyzing website data.
    """
    url = "https://starlopost.vercel.app"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            print(f"Analyzing data: {response.text}")
        else:
            print(f"Failed to fetch data from {url}")
    except requests.RequestException as e:
        print(f"Error fetching data: {e}")

if __name__ == "__main__":
    while True:
        analyze_website()
        time.sleep(5)
        malicious_ip = "192.168.1.100" # Changing this to a more logical code 
        block_ip(malicious_ip)
