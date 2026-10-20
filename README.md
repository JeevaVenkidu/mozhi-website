# Mozhi Landing Page (`mozhi-website`)

> Official marketing and documentation website for **Mozhi** — the local-first prompt enhancer for Chromium browsers and ChatGPT.

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

---

## Overview

This repository contains the source code for the official landing page of **Mozhi** (மொழி — Tamil for language, speech, and expression). 

Mozhi is a browser extension designed to help users refine and structure rough prompts before submitting them to AI models like ChatGPT. It emphasizes **sovereign, local-first execution**:
- Run on-device token inference with **SmolLM2 360M** via WebGPU (with WebAssembly fallback) inside an isolated Web Worker — zero data leaves the machine.
- Or connect a private, user-configured OpenAI-compatible endpoint with your own API key.
- Never auto-submits, maintains human-in-the-loop review, and has zero tracking or telemetry.

> **Note on Repositories**: This repository (`mozhi-website`) hosts the marketing website and product documentation. The Mozhi browser extension itself is developed in the [Mozhi extension repository](https://github.com/JeevaVenkidu/Mozhi).

---

## Key Landing Page Sections

The landing page is implemented as an editorial single-page experience:

1. **Floating Island Navigation (`Navbar.tsx`)**: Quick access to workflow, interactive demo, enhancement modes, architecture comparison, privacy guarantees, FAQ, and installation.
2. **Hero Section (`Hero.tsx`)**: Value proposition, browser mockup previewing the extension popup, and primary CTAs.
3. **Workflow Walkthrough (`HowItWorks.tsx`)**: 3-step explanation of drafting, local/online refinement, and safe insertion into ChatGPT.
4. **Interactive Test Bench (`InteractivePlayground.tsx`)**: A live interactive sandbox letting visitors test real engineering scenarios across all 4 rewrite modes without installing the extension.
5. **Enhancement Modes Deep Dive (`ModesDeepDive.tsx`)**: Granular breakdown of each prompt mode:
   - *Typo & Grammar*: Pure mechanical fix, zero scope changes.
   - *Level 1 (Light)*: Voice-preserving clarity and pronoun resolution.
   - *Level 2 (Balanced)*: Structured organization, diagnostic requirements, and implied constraints.
   - *Level 3 (Advanced)*: Enterprise specification with persona, schema, and negative constraints.
6. **Dual-Engine Architecture Matrix (`LocalVsOnline.tsx`)**: Technical side-by-side comparison of local WebGPU inference vs. Bring-Your-Own-API endpoints.
7. **Privacy & Security (`PrivacySection.tsx`)**: Transparent data flow, storage keys, and zero-telemetry commitments.
8. **Frequently Asked Questions (`FaqSection.tsx`)**: Expandable accordion addressing memory footprint, model caching, and Ollama/vLLM integration.
9. **Installation CTA (`InstallSection.tsx`)**: Direct links to install from the Chrome Web Store (placeholder until published) and step-by-step developer instructions for loading unpacked builds.
10. **Typographic Footer (`Footer.tsx`)**: Brand monument, governance links, and copyright disclosures.

---

## Tech Stack & Architecture

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) using `@theme` CSS tokens in `src/app/globals.css`
- **Typography**: Google Fonts loaded via `next/font/google`:
  - `Geist` (Modern Sans)
  - `Geist Mono` (Technical Code & Accents)
  - `Instrument Serif` (Editorial Serif Headings & Monument)
- **Icons & Graphics**: Pure inline SVGs and mathematical SVG brand vectors — no heavy third-party icon packages.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) version **20.x** or higher (LTS recommended)
- `npm` (bundled with Node.js) or compatible package manager (`pnpm`, `yarn`, `bun`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JeevaVenkidu/mozhi-website.git
   cd mozhi-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the local development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## Build & Quality Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Starts the Next.js local development server (with Turbopack) |
| `npm run build` | Builds the optimized production bundle |
| `npm run start` | Starts the production server locally |
| `npm run lint` | Runs ESLint (`eslint-config-next`) across all TypeScript and React files |
| `npx tsc --noEmit` | Validates TypeScript types across the entire project |

---

## Environment Variables

**No environment variables or secret API keys are required** to develop, build, or deploy the landing page. All interactive elements (such as the Interactive Test Bench) run completely client-side using static mock scenarios.

---

## Deployment

The website can be deployed to any modern web hosting platform:

### Deploy on Vercel (Recommended)

1. Push your repository to GitHub.
2. Import the `mozhi-website` repository into [Vercel](https://vercel.com/new).
3. The default settings will automatically detect Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Click **Deploy**.

### Static Export / Alternative Hosting

If deploying as a fully static site (e.g. to GitHub Pages or Cloudflare Pages), you can enable `output: 'export'` in `next.config.ts` and run `npm run build` to generate an `out/` static bundle.

---

## Known Limitations

- **Interactive Test Bench**: The playground on the landing page showcases pre-computed transformations to give visitors instant feedback without requiring a 270MB WebGPU model download. For real on-device token generation, users should install the browser extension.
- **Store Listing Link**: The Chrome Web Store link currently uses a placeholder (`#`) until the extension review is completed by the Chrome Web Store team.

---

## Community & Contributing

Contributions, bug reports, and suggestions are welcome! Please review:
- [CONTRIBUTING.md](CONTRIBUTING.md) for local workflow and PR guidelines.
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community standards.
- [SECURITY.md](SECURITY.md) for reporting security vulnerabilities.
- [SUPPORT.md](SUPPORT.md) for support and questions.
- [CHANGELOG.md](CHANGELOG.md) for release history.

---

## License

This website codebase is open source under the [MIT License](LICENSE).

*The Mozhi name, logos, and wordmarks are brand assets reserved by Jeeva Venkidu.*
