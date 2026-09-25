# Rentala Sruthi — Engineering Portfolio

An editorial, high-contrast minimalist portfolio website designed for **Rentala Sruthi**, AI/ML Engineer & Full-Stack Developer.

Inspired by top-tier creative and engineering design agency portfolios, featuring a dual-tone Warm Sand (`#EAE6DF`) and Deep Charcoal (`#121212`) aesthetic with bold editorial display typography, real-time telemetry details, and interactive architecture breakdowns.

---

## 🎨 Design Philosophy & Color Palette

- **Editorial Foundations**: Inspired by high-end design agency portfolios combining brutalist precision with refined editorial typography.
- **Color System**:
  - Primary Background (Light): Warm Sand / Off-White (`#EAE6DF`)
  - Secondary Background (Dark Contrast): Deep Charcoal / Almost Black (`#121212`)
  - Container / Card Light: Clean Paper White (`#FFFFFF` / `#F7F5F0`)
  - Typography Primary: Dark Slate Black (`#161616`)
  - Accent / Signal: Warm Terracotta (`#C85A32`) & Status Emerald (`#10B981`)
- **Typography**:
  - Headers: **Syne** (bold, high-impact uppercase) paired with **Playfair Display** (editorial italic accents)
  - Body: **Plus Jakarta Sans** (clean, accessible modern sans-serif)
  - Metadata & Telemetry: **JetBrains Mono**

---

## 🚀 Features

1. **Profile & Hero Section**:
   - Live Indian Standard Time (IST) clock with seconds ticker.
   - Status badge indicating open availability for full-time and contract roles.
   - Geographic coordinates for Hyderabad, India (`17.3850° N, 78.4867° E`).
   - One-click copy email button with animated toast feedback.

2. **Selected Work (6 Featured Engineering Projects)**:
   - **Farm Memory**: AI Voice Assistant for Indian Farmers (*VoiceforBharat Challenge*) — WebRTC, LiveKit Agents, Groq Llama 3.3, Deepgram STT, Murf Falcon TTS.
   - **SmartBundle AI**: Intelligent Retail & Cross-Selling Engine (*Demux 3.0*) — Next.js, React, TypeScript, Python REST API.
   - **BugTrace**: Android Device Telemetry & Automated Bug Detection (*iQOO Hackathon*) — Android, FastAPI, SQLite, Wi-Fi.
   - **Industrial Intelligence**: AI-Powered Document Q&A System (*ET AI Hackathon 2.0*) — Python, Streamlit, Google Gemini API, PyPDF.
   - **PyroSentinel GIS**: Geospatial Fire Monitoring Prototype (*SIH 2026*) — GIS spatial analysis, satellite hotspot tracking.
   - **PriceDrop**: Full-Stack E-Commerce with Scheduled Price Decay (*Web2Cart Challenge*) — React, Vite, FastAPI, SQLite.
   - Filterable tabs: `All [6]`, `AI & GenAI [2]`, `Full-Stack [2]`, `Systems & Telemetry [2]`.
   - Interactive deep-dive modal displaying executive summary, architecture data pipelines, and technical highlights.

3. **Technical Matrix**:
   - 4 architectural pillars:
     1. AI / ML & GenAI
     2. Core Languages & Foundations
     3. Frameworks & Backend
     4. Cloud & Infrastructure

4. **Achievements & Hackathon Timeline**:
   - Competitive milestones (Turing Cup Rank 79, Google Big Code Round 1, Capgemini Brand Quest, The Great AppSec CTF Finalist).
   - Hackathons attended tag showcase.
   - Verified certifications (Anthropic AI Fluency, Google DeepMind AI Foundations, AWS Educate GenAI, NPTEL Knowledge Representation).

5. **Contact & Collaboration Section**:
   - Direct mailto client trigger with pre-filled subject and structured inquiry templates.
   - Direct links to GitHub (`sruthi-r-22`) and LinkedIn (`sruthi-rentala`).
   - Responsive mobile navigation drawer with touch gestures.

---

## 💻 Local Preview & Development

You can open and preview this site using any local web server or by double-clicking `index.html`:

### Option A: Using Python (Built-in)
```bash
python -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

### Option B: Using Node.js / npx
```bash
npx serve .
```

### Option C: VS Code Live Server
Right-click on `index.html` and choose **"Open with Live Server"**.

---

## 🌐 Deploy to GitHub Pages

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```
2. Push to your GitHub repository:
   ```bash
   git remote add origin https://github.com/sruthi-r-22/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository settings, navigate to **Pages** &rarr; select **Deploy from a branch (`main`)** &rarr; Save. Your portfolio will be live in seconds!
