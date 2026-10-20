# Contributing to Mozhi Website

Thank you for your interest in contributing to the Mozhi website! We appreciate the community's help in improving documentation, fixing bugs, and enhancing the design.

As this project is maintained by an independent developer, contributions are kept lightweight, structured, and focused.

---

## Code of Conduct

All contributors and participants are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Local Development Workflow

### 1. Prerequisites

- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher (or `pnpm` / `yarn`)
- **Git**

### 2. Fork and Clone

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/[YOUR_GITHUB_USERNAME]/mozhi-website.git
   cd mozhi-website
   ```
3. Create a feature branch:
   ```bash
   git checkout -b feature/your-improvement-name
   ```

### 3. Install and Develop

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview your changes.

---

## Verification Before Submitting a PR

Before opening a pull request, please verify that your changes pass all local checks:

```bash
# 1. Check for linting errors
npm run lint

# 2. Check TypeScript types
npx tsc --noEmit

# 3. Verify production build succeeds
npm run build
```

---

## Contribution Guidelines

1. **Keep Aesthetics Intact**:
   - The Mozhi website follows an editorial, warm-minimalist aesthetic (warm stone `#FBFBF9`, charcoal `#141413`, surgical indigo `#5146E5`). Please avoid adding generic UI patterns, clashing colors, or unvetted external fonts/libraries.
2. **Zero Telemetry / Privacy**:
   - Do not add tracking pixels, analytics scripts, or cookies without explicit discussion.
3. **Keep Client Bundle Light**:
   - Prefer React Server Components by default.
   - Use Client Components (`"use client"`) only where interactive state is required.
   - Avoid importing heavy icon libraries; follow the existing pattern of clean, inline vector SVGs.
4. **Descriptive Pull Requests**:
   - Provide a concise summary of what changed and why.
   - If proposing visual changes, include before-and-after screenshots.

---

## Submitting a Pull Request

1. Commit your changes with clear, concise messages:
   ```bash
   git commit -m "fix: correct typo in FAQ section"
   ```
2. Push to your fork:
   ```bash
   git push origin feature/your-improvement-name
   ```
3. Open a Pull Request against the `main` branch of `JeevaVenkidu/mozhi-website`.
