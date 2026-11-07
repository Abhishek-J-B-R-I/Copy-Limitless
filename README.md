# Copy Limitless — Official Product Website & System Architecture

A modern, high-performance static website for **Copy Limitless** (the native, hardware-encrypted macOS clipboard manager).

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, pre-rendered to 100% static HTML with comprehensive SEO, OpenGraph metadata, and Schema.org JSON-LD structured data.

---

## 🌟 Sections & Highlights

1. **Hero**: High-impact Apple-style dark design, live metrics (<40ms search, 0% cloud, 22MB -> 2MB Retina PNG, <30MB RAM).
2. **Interactive UI Simulator**: Live functional mockup of the `⌘⇧V` launcher window with real-time search, category filtering, multi-select batch export/delete, and encrypted preview pane.
3. **Deep System Design & Architecture**: Interactive multi-tab engineering breakdown:
   - **Full System Topology**: 5-tier isolated architectural layers from macOS Kernel to Presentation.
   - **⌘⇧3 Screenshot Pipeline**: DispatchSource kernel file descriptor watcher, Retina PNG compression, zero-delay pasteboard injection.
   - **Zero-Query Ingestion**: 50ms polling with 25ms adaptive burst windows and in-memory atomic exclusion sets.
   - **Hardware AES-256-GCM & Keychain**: 256-bit symmetric key lifecycle, 12-byte nonce, 16-byte GCM authentication tag.
   - **SQLite3 FTS5 Search Engine**: Porter tokenization, 40ms debouncing, WAL concurrent read/write isolation.
   - **Synchronized Auto-Paste**: AXIsProcessTrusted pre-flight, focus tracking, 20ms settle window, synthetic `⌘V` via `CGEventPost`.
4. **How It Works on MacBooks**: Apple Silicon M-series tuning, Carbon Event HotKey (⌘⇧V), zero-dock LSUIElement, all-day battery optimization.
5. **Feature Suite**: Deep dive into all 8 core features.
6. **Comparison Matrix**: Side-by-side comparison against Maccy, Paste ($14.99/yr), Raycast, and Alfred.
7. **Productivity ROI Calculator**: Interactive sliders calculating annual hours saved, context switches prevented, and keystrokes eliminated.
8. **Interactive FAQ**: Searchable accordion answering privacy, technical, and macOS integration questions.

---

## 🚀 Development & Build Commands

### Install Dependencies
```bash
npm install
```

### Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build Production Static Export (SSG)
```bash
npm run build
```
This generates the standalone static distribution in the `out/` folder.

### Preview Static Production Build
```bash
npx serve out
# or
python3 -m http.server 8080 -d out
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📁 Project Structure

```
copy-limitless-website/
├── app/
│   ├── globals.css              # Glassmorphism, animations, custom scrollbars
│   ├── layout.tsx               # SEO Metadata, OpenGraph, JSON-LD Schema
│   └── page.tsx                 # Main single-page application layout
├── components/
│   ├── Navbar.tsx               # Glassmorphic top navigation with mobile drawer
│   ├── Hero.tsx                 # Hero section with headline and metrics
│   ├── InteractiveSimulator.tsx # Functional simulated Copy Limitless ⌘⇧V window
│   ├── ArchitectureDiagram.tsx  # Interactive 5-tab System Design visualizer
│   ├── HowItWorks.tsx           # MacBook hardware tuning and OS integration
│   ├── FeaturesGrid.tsx         # Comprehensive feature breakdown
│   ├── ComparisonTable.tsx      # Head-to-head comparison table
│   ├── ProductivityCalculator.tsx # Interactive ROI time-saved calculator
│   ├── FAQ.tsx                  # Searchable FAQ accordion
│   └── Footer.tsx               # Pre-footer CTA, specifications, and links
├── next.config.mjs              # Static export configuration (output: 'export')
├── package.json                 # Dependencies and build scripts
├── postcss.config.mjs           # PostCSS Tailwind config
├── tailwind.config.ts           # Apple-inspired custom dark theme
└── tsconfig.json                # Strict TypeScript configuration
```

