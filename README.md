<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1SbX4q-DAyh7U9FbCBZtDy8b4MzdTWkqj

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. (Optional for real data) Copy `.env.local.example` to `.env.local` and set `GEMINI_API_KEY` to your Gemini API key. If you don't set a key, a local mock dataset will be used so you can still run and view the UI.
3. Run the app:
   `npm run dev`

Note: If `GEMINI_API_KEY` is not set the app will use generated mock movie data from `services/mockData.ts` so the UI remains functional for local development.

---

## Docker (multi-stage build) 🚢

You can build a production image with a multi-stage Dockerfile and serve the static site with nginx.

Build (optionally pass your Gemini key at build time to include real data):

```
# pass GEMINI_API_KEY at build-time (optional)
docker build -t netflix-clone-app --build-arg GEMINI_API_KEY=your_gemini_api_key_here .
```

Run locally:

```
docker run -d -p 8080:80 --name netflix-clone-app netflix-clone-app
# Open http://localhost:8080
```

Or use docker-compose (set GEMINI_API_KEY in your shell or in an env file):

```
GEMINI_API_KEY=your_gemini_key docker compose up --build
```

Notes:
- The app reads `GEMINI_API_KEY` at build-time, so to change the key you must rebuild the image.
- If you don't pass a key, the app will serve the mock dataset so the UI works without external credentials.

