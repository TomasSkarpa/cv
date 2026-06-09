# Bata Figurine Generation

GitHub: https://github.com/TomasSkarpa/batamdc-figurine-generation

## Tagline

Bata Figurine Generation with Gemini AI

Generate collectible shoemaker figurines from photos using Google Gemini AI, with QR code sharing and image hosting for prints.

## Description

Take a photo or upload an image to generate a shoemaker collectible figurine using Google's Gemini AI. Share results via QR code, ImgBB, or AirDrop. Great for printing out.

Built for the Leaders of Tomorrow Program Bata Group 2025 and the LOT Conference in Prague. Part of the same Baťa event footprint as Bata Children's Program volunteering and Zlín Film Festival stand work. Attendees could step into a 1940s Bata shoemaker theme and take home a printed photo of themselves as a 1/7 scale figurine.

## Usage

1. Run the app with `python app.py` (http://localhost:8080).
2. Open the web interface in a browser.
3. Upload a photo or use the camera.
4. AI processing generates the figurine image via Google Gemini.
5. View before-and-after comparison.
6. QR code generated for sharing the result.

## Technical stack

Python 3.x

Flask (web framework)

google-genai (Google Gemini AI image generation)

requests (API calls)

qrcode (QR code generation)

Pillow (image processing)

HTML (frontend)

Languages: HTML 69.8%, Python 30.2%

## Prerequisites

Google Gemini API key with image generation access

ImgBB API key for image hosting

config.py with GEMINI_API_KEY and IMGBB_API_KEY

Supported formats: JPG, PNG, GIF, BMP

## Role

Software Engineer @ Bata Group. Built the Python activity and provided technical support at the LOT Conference (second year attending).

## Continue reading

Projects · CV · Professional approach
