import sys
from bs4 import BeautifulSoup
import re

html_path = "/Users/vedranbrdar/.gemini/antigravity-ide/brain/e8b4711c-8f69-4a61-bf9e-df42bb875b1c/.system_generated/steps/12/content.md"
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

print("=== HEADINGS ===")
for h in soup.find_all(re.compile('^h[1-6]$')):
    text = h.get_text(strip=True)
    if text:
        print(f"{h.name}: {text}")

print("\n=== PARAGRAPHS ===")
for p in soup.find_all('p'):
    text = p.get_text(strip=True)
    if text:
        print(text)

print("\n=== IMAGES (Background) ===")
# Background images in style tags or inline styles
for div in soup.find_all('div', style=True):
    style = div['style']
    if 'background-image' in style:
        print(style)

print("\n=== IMAGES (img tags) ===")
for img in soup.find_all('img'):
    src = img.get('src')
    if src and 'uploads' in src:
        print(src)

