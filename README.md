# Copy Limitless — Official Website

The official product and support website for **Copy Limitless** (the native, privacy-first macOS clipboard manager and productivity suite).

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, pre-rendered to 100% static HTML with comprehensive SEO, OpenGraph metadata, and Schema.org JSON-LD structured data.

---

## 🌟 Pages & Key Sections

1. **Hero**: Modern Apple-style dark design featuring the official 3D app icon, release info, and live metrics (<40ms search, 0% cloud, <30MB RAM).
2. **Interactive UI Simulator**: Live functional mockup of the `⌘⇧V` launcher window with real-time search, category filtering, multi-select batch export/delete, and encrypted preview pane.
3. **How Copy Limitless Works in 3 Easy Steps**: Clean, user-focused workflow guide:
   - **Step 1: Copy Anything (`⌘ + C`)**: Auto-capture text, links, code, and ⌘⇧3/⌘⇧4 screenshots with password manager filtering.
   - **Step 2: Open & Find (`⌘ + ⇧ + V`)**: Global floating launcher with sub-40ms instant search and category filters.
   - **Step 3: Paste Instantly (`Return`)**: Auto-paste at active cursor, plain text paste (Shift+Return), and dynamic snippet expansion.
4. **Mac Lineup Compatibility**: Full compatibility across MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Mac Pro.
5. **Engineered Specifically for Mac Users**: All-day battery optimization, clean menu bar accessory, and keyboard-first workflow.
6. **Feature Suite**: Comprehensive feature breakdown (AES-256 encryption, Retina screenshot capture, snippet variables, URL tracking stripper).
7. **Comparison Matrix**: Side-by-side comparison against Maccy, Paste, and Raycast.
8. **Productivity ROI Calculator**: Interactive sliders calculating annual hours saved and focus time recovered.
9. **Interactive FAQ**: Searchable accordion answering privacy, technical, and macOS integration questions.
10. **Support & Troubleshooting Page (`/support`)**: Dedicated Apple App Store support center with contact card, direct mailto form, complete keyboard shortcuts guide, and troubleshooting accordions.
11. **Privacy Policy Page (`/privacy`)**: Apple App Store compliant privacy statement detailing zero data collection, local-only encrypted storage, and macOS system permissions.

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

