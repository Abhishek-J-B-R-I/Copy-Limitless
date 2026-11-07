/**
 * Copy Limitless - Global Site Configuration
 * 
 * Edit your contact email, owner name, copyright, and URLs here.
 * Changes made here will reflect across the landing page, support page,
 * privacy policy, and global footer.
 */

export const siteConfig = {
  name: "Copy Limitless",
  tagline: "The Native, Encrypted macOS Clipboard Manager Built for Power Users",
  description:
    "Private, lightning-fast, 100% offline macOS clipboard history manager. Features hardware AES-256-GCM encryption, automatic ⌘⇧3 Retina screenshot capture, FTS5 instant search (<40ms), snippet templating, and zero telemetry. Engineered natively in Swift for Apple Silicon and Intel.",
  
  // App Store Connect Developer & Contact Info
  // 👉 Change this to your preferred support email address:
  supportEmail: "wesupportyou8@gmail.com",
  // 👉 Change this to your legal name or entity:
  ownerName: "Abhishek JBR",
  
  // Production Domain (use your custom domain or deployment URL)
  domain: "https://copylimitless.app",

  // App Store Connect Submission URLs
  appStoreUrls: {
    marketing: "https://copylimitless.app",
    support: "https://copylimitless.app/support",
    privacy: "https://copylimitless.app/privacy",
  },

  // Mandatory Apple App Store Copyright & Trademark Notices
  copyrightYear: "2026",
  get copyrightNotice() {
    return `© ${this.copyrightYear} ${this.ownerName}. All rights reserved. Copy Limitless is built natively for macOS.`;
  },
  appleDisclaimer: "Mac, macOS, MacBook, and iMac are trademarks of Apple Inc., registered in the U.S. and other countries.",
  
  // Supported Apple Hardware Lineup
  macLineup: [
    { name: "MacBook Air", category: "Laptops", chip: "M1 / M2 / M3", highlight: "Ultra-low battery draw (<0.01% idle CPU)" },
    { name: "MacBook Pro", category: "Laptops", chip: "M1 / M2 / M3 / M4 (Pro / Max)", highlight: "High-density Retina multi-buffer pipeline" },
    { name: "iMac", category: "All-in-One", chip: "M1 / M3 / M4 4.5K Retina", highlight: "Seamless multi-space desktop workflow" },
    { name: "Mac mini", category: "Desktops", chip: "M1 / M2 / M4 (Pro)", highlight: "Compact powerhouse with multi-display hotkey routing" },
    { name: "Mac Studio", category: "Workstations", chip: "M1 / M2 Max & Ultra", highlight: "Instant FTS5 queries across 50,000+ items" },
    { name: "Mac Pro", category: "Workstations", chip: "M2 Ultra / Intel Xeon", highlight: "Native Universal binary with zero Rosetta overhead" },
  ],

  // Keyboard Shortcuts Reference
  shortcuts: [
    {
      keys: ["⌘", "⇧", "V"],
      label: "⌘ + ⇧ + V",
      title: "Global Floating Launcher",
      description: "Instantly brings up the Copy Limitless HUD overlay from any application, full-screen space, or external monitor.",
      badge: "Primary Hotkey",
    },
    {
      keys: ["Return"],
      label: "Return",
      title: "Instant Auto-Paste",
      description: "Directly pastes the selected clipboard item at your active cursor location via macOS Accessibility simulation.",
      badge: "Fastest",
    },
    {
      keys: ["⇧", "Return"],
      label: "Shift + Return",
      title: "Paste as Plain Text",
      description: "Strips all rich formatting, fonts, HTML styles, and colors, pasting only pure unformatted UTF-8 text.",
      badge: "Formatting Fix",
    },
    {
      keys: ["⌘", "1...9"],
      label: "⌘ + 1 to ⌘ + 9",
      title: "Quick-Paste Top 9 Items",
      description: "Directly pastes items 1 through 9 with a single keystroke without navigating with arrow keys.",
      badge: "Power User",
    },
    {
      keys: ["⌘", "P"],
      label: "⌘ + P",
      title: "Pin / Unpin Item",
      description: "Pins essential snippets or references to the top so they are never purged or overwritten by clipboard rotation.",
      badge: "Favorites",
    },
    {
      keys: ["⌘", "E"],
      label: "⌘ + E",
      title: "In-Place Text Editor",
      description: "Opens the built-in inline editor to modify snippet text, trim whitespace, or tweak code before pasting.",
      badge: "Quick Edit",
    },
    {
      keys: ["⌘", "⌫"],
      label: "⌘ + Backspace",
      title: "Delete Selected Item",
      description: "Immediately removes the selected item from your local encrypted SQLite history database.",
      badge: "Cleanup",
    },
    {
      keys: ["⌘", "⇧", "3"],
      label: "⌘ + ⇧ + 3 / 4",
      title: "Automatic Screenshot Capture",
      description: "Automatically detects newly saved Retina screenshots, optimizes their size, and prepares them for immediate paste.",
      badge: "Auto Ingest",
    },
  ],
};

