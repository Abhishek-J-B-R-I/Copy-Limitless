"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, getAssetPath } from "@/lib/siteConfig";
import {
  LifeBuoy,
  Mail,
  Copy,
  Check,
  Search,
  ChevronDown,
  Keyboard,
  Shield,
  HelpCircle,
  Send,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface TroubleshootingItem {
  id: string;
  category: "permissions" | "privacy" | "screenshots" | "passwords" | "storage";
  question: string;
  answer: string | React.ReactNode;
}

const TROUBLESHOOTING_LIST: TroubleshootingItem[] = [
  {
    id: "accessibility",
    category: "permissions",
    question: "How do I enable Auto-Paste directly to my cursor?",
    answer: (
      <div className="space-y-3">
        <p>
          When you select a clipboard item in Copy Limitless and press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">Return</kbd>, 
          the app simulates a synthetic <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘ + V</kbd> keystroke directly into your active window (Xcode, Slack, Safari, Cursor, VS Code, Notes, etc.).
        </p>
        <p>
          To enable this instant pasting functionality, macOS requires Accessibility authorization:
        </p>
        <ol className="list-decimal list-inside space-y-1.5 text-slate-300 pl-2">
          <li>Open macOS <strong>System Settings</strong> (from the Apple menu).</li>
          <li>Navigate to <strong>Privacy &amp; Security</strong> → <strong>Accessibility</strong>.</li>
          <li>Click the toggle switch next to <strong>Copy Limitless</strong> to turn it <strong>ON</strong>.</li>
          <li>If prompted, authenticate with your Mac password or Touch ID.</li>
        </ol>
        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
          <strong>Privacy Note:</strong> Copy Limitless uses Accessibility solely to dispatch the paste shortcut into your frontmost application. It never monitors background typing, logs passwords, or intercepts other keystrokes.
        </div>
      </div>
    ),
  },
  {
    id: "storage",
    category: "privacy",
    question: "Where is my clipboard data stored and is it encrypted?",
    answer: (
      <div className="space-y-3">
        <p>
          <strong>100% of your clipboard data remains exclusively on your local Mac.</strong> Copy Limitless has zero cloud servers, zero analytics trackers, and zero telemetry pings.
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
          <li>
            <strong>Hardware AES-256-GCM Encryption:</strong> All items (rich text, code blocks, URLs, and image binaries) are encrypted using Apple&apos;s native CryptoKit framework with AES-256 in Galois/Counter Mode.
          </li>
          <li>
            <strong>macOS Keychain Integration:</strong> The 256-bit cryptographic master key is generated locally on your Mac on initial launch and stored directly in your secure macOS Keychain protected by system-level hardware access control.
          </li>
          <li>
            <strong>App Sandbox Storage:</strong> The encrypted SQLite3 database resides locally inside the secure macOS sandboxed application container, isolated from unauthorized third-party apps.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "screenshots",
    category: "screenshots",
    question: "How does Automatic Screenshot Capture work?",
    answer: (
      <div className="space-y-3">
        <p>
          Whenever you take a screenshot using standard macOS shortcuts—such as <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘ + ⇧ + 3</kbd> (full screen) or <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘ + ⇧ + 4</kbd> (selected area)—macOS writes the image file to your designated screenshot folder (default: <code className="text-cyan-300">~/Desktop</code>).
        </p>
        <p>
          Copy Limitless features an intelligent, low-overhead kernel filesystem monitor that detects when the screenshot file finishes writing. It reads the image, converts raw uncompressed bitmaps into an optimized Retina PNG (reducing file size from ~22 MB down to ~2 MB with zero visual quality loss), writes it to the system pasteboard, and saves it into your encrypted history. You can immediately press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘ + V</kbd> to paste it anywhere!
        </p>
      </div>
    ),
  },
  {
    id: "passwords",
    category: "passwords",
    question: "Does Copy Limitless ignore passwords and sensitive credentials?",
    answer: (
      <div className="space-y-3">
        <p>
          <strong>Yes, absolutely.</strong> Protecting sensitive credentials is a core pillar of Copy Limitless:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
          <li>
            <strong>Password Manager Exclusion:</strong> Built-in detection automatically filters out any clipboard events originating from <strong>1Password, Bitwarden, Apple Keychain Access, KeePassXC, Dashlane, and LastPass</strong>.
          </li>
          <li>
            <strong>Concealed Pasteboard Types:</strong> The app honors macOS pasteboard confidentiality markers, including <code className="text-cyan-300">org.nspasteboard.ConcealedType</code>, <code className="text-cyan-300">org.nspasteboard.AutoGeneratedType</code>, and custom vendor masks.
          </li>
          <li>
            <strong>Immediate Memory Drop:</strong> Confidential items are discarded immediately in memory without ever being written to the database or displayed in your history list.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "backup",
    category: "storage",
    question: "How do I backup, export, or delete my clipboard history?",
    answer: (
      <div className="space-y-3">
        <p>
          You have complete sovereignty over your data with several granular management options:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
          <li>
            <strong>Delete Single Item:</strong> Highlight any item in the launcher and press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘ + ⌫</kbd> (Backspace).
          </li>
          <li>
            <strong>Multi-Select &amp; Bulk Delete:</strong> Press the &quot;Select Multiple&quot; button (or hold <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⇧</kbd> while clicking items) to choose multiple entries, then click &quot;Delete Selected&quot; with confirmation.
          </li>
          <li>
            <strong>Clear Unpinned History:</strong> From the menu bar icon or Preferences, you can wipe all unpinned items while preserving your pinned snippets and templates.
          </li>
          <li>
            <strong>Export for Backup:</strong> Export your clipboard items at any time into structured JSON or plain text (.txt) files for easy backup and migration.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "requirements",
    category: "permissions",
    question: "What are the minimum system requirements for Copy Limitless?",
    answer: (
      <div className="space-y-3">
        <p>
          Copy Limitless is compiled natively for modern macOS versions:
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
          <li><strong>Operating System:</strong> macOS 14.0 Sonoma or macOS 15.0 Sequoia (and future releases).</li>
          <li><strong>Mac Compatibility:</strong> Universal Mac app supporting both Apple Silicon (M1, M2, M3, M4, Pro, Max, Ultra) and Intel 64-bit processors.</li>
          <li><strong>Memory &amp; Storage:</strong> Consumes less than 30 MB of active RAM and takes up approximately 15 MB of disk space.</li>
        </ul>
      </div>
    ),
  },
];

export default function SupportContent() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openAccordion, setOpenAccordion] = useState<string | null>("accessibility");

  // Feedback Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [issueType, setIssueType] = useState<"Bug Report" | "Feature Request" | "General Help">("General Help");
  const [formMessage, setFormMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(siteConfig.supportEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail || !formMessage) return;

    const subject = encodeURIComponent(`[${issueType}] Support Request from ${formName || "Copy Limitless User"}`);
    const body = encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail}\nCategory: ${issueType}\n\nIssue Description:\n${formMessage}\n\n---\nmacOS Version: \nMac Model: `
    );

    window.location.href = `mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const filteredTroubleshooting = TROUBLESHOOTING_LIST.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-cyan-500/20 blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-[#0e1117] flex items-center justify-center p-1.5">
              <Image
                src={getAssetPath("/app-icon.png")}
                alt="Copy Limitless App Icon"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono mb-4">
          <LifeBuoy className="w-3.5 h-3.5" />
          <span>Copy Limitless Help Center</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Support &amp; Troubleshooting
        </h1>
        <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
          Find instant answers to common questions, explore the keyboard shortcuts guide,
          or reach out directly to the developer for dedicated assistance.
        </p>
      </div>

      {/* Quick Contact Card & Email Direct Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {/* Direct Contact Card */}
        <div className="lg:col-span-1 p-8 rounded-2xl glass-panel-elevated border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px] mb-6 flex items-center justify-center">
              <div className="w-full h-full bg-[#15181e] rounded-[11px] flex items-center justify-center">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Direct Developer Contact
            </span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-3">
              Need Personalized Help?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Have an issue, feature request, or feedback? Send an email directly to the developer.
              We respond to every inquiry promptly.
            </p>

            {/* Email Box */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 mb-6">
              <span className="text-[11px] font-mono text-slate-400 block">Official Support Email:</span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-xs sm:text-sm font-mono font-medium text-cyan-300 hover:text-white transition-colors truncate"
                >
                  {siteConfig.supportEmail}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <span className="text-[10px] font-mono text-emerald-400 block animate-in fade-in">
                  ✓ Copied to clipboard!
                </span>
              )}
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Typically responds within 24 hours</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Direct communication with app engineer</span>
            </div>
          </div>
        </div>

        {/* In-Page Support & Feedback Form */}
        <div className="lg:col-span-2 p-8 sm:p-10 rounded-2xl glass-panel border border-white/10 shadow-2xl relative">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Send a Support Message</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fill out this form to open a pre-filled support ticket in your default email client.
              </p>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-slate-400 border border-white/10 hidden sm:block">
              Quick Form
            </span>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Mail Client Triggered!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your default email application should have opened with your inquiry pre-filled. If it didn&apos;t open automatically, you can directly email us at:
              </p>
              <p className="font-mono text-cyan-400 text-sm font-semibold select-all">
                {siteConfig.supportEmail}
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="text-xs text-slate-400 hover:text-white underline pt-2 cursor-pointer"
              >
                Submit another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name-input" className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. John Appleseed"
                    className="w-full bg-[#15181e] text-white placeholder-slate-500 text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-cyan-500/60"
                  />
                </div>
                <div>
                  <label htmlFor="email-input" className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full bg-[#15181e] text-white placeholder-slate-500 text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-cyan-500/60"
                  />
                </div>
              </div>

              <div>
                <span className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                  Issue Category
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(["Bug Report", "Feature Request", "General Help"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setIssueType(type)}
                      className={`py-2 px-3 text-xs font-mono rounded-lg border transition-all text-center cursor-pointer ${
                        issueType === type
                          ? "bg-blue-600/30 text-cyan-300 border-cyan-500/50 font-semibold"
                          : "bg-white/[0.02] text-slate-400 border-white/10 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message-input" className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-medium">
                  Message / Issue Details <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="message-input"
                  required
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Please describe your question, the behavior you observed, or your macOS version..."
                  className="w-full bg-[#15181e] text-white placeholder-slate-500 text-xs sm:text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-cyan-500/60 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-slate-500">
                  Clicking submit will launch your Mac&apos;s email client with this ticket pre-filled.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-glow transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Support Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Quick Start Guide Section */}
      <section id="quick-start" className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quick Start in 3 Easy Steps</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Getting Started with Copy Limitless
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm">
            Up and running in under 60 seconds with zero configuration required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-2xl font-mono font-bold text-cyan-400 mb-3 block">01</span>
              <h3 className="text-base font-bold text-white mb-2">Launch in Menu Bar</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Open Copy Limitless. It sits unobtrusively in your macOS menu bar with zero dock clutter and initiates encrypted local storage.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>No account or cloud sync needed</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-2xl font-mono font-bold text-blue-400 mb-3 block">02</span>
              <h3 className="text-base font-bold text-white mb-2">Grant Accessibility</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Allow Accessibility permissions in System Settings so Copy Limitless can synthesize ⌘+V to auto-paste directly at your active cursor.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>100% optional, enables auto-paste</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-2xl font-mono font-bold text-purple-400 mb-3 block">03</span>
              <h3 className="text-base font-bold text-white mb-2">Press ⌘ + ⇧ + V Anywhere</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Trigger the floating HUD overlay from any space or full-screen app. Search with sub-40ms FTS5 speed, pin favorites, and paste instantly.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              <span>Sub-40ms instant response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts Guide Section */}
      <section id="shortcuts" className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Keyboard className="w-3.5 h-3.5" />
            <span>Command-First Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Keyboard Shortcuts Reference
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm">
            Master the speed of Copy Limitless without lifting your hands from the keyboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.shortcuts.map((shortcut, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    {shortcut.keys.map((k, kIdx) => (
                      <kbd
                        key={kIdx}
                        className="px-2 py-1 bg-white/10 border border-white/15 rounded text-white font-mono text-xs font-semibold shadow-sm group-hover:border-cyan-500/50 transition-colors"
                      >
                        {k}
                      </kbd>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                    {shortcut.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{shortcut.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{shortcut.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Troubleshooting & FAQs Section */}
      <section id="faq" className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>macOS App Review &amp; User Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions &amp; Troubleshooting
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm">
            Clear answers to privacy, encryption, screenshot auto-capture, and macOS system permissions.
          </p>

          {/* Search Box */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter troubleshooting questions..."
              className="w-full bg-[#15181e] text-white placeholder-slate-500 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredTroubleshooting.map((item) => {
            const isOpen = openAccordion === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl glass-panel border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenAccordion(isOpen ? null : item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 pt-2 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredTroubleshooting.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No matching troubleshooting topics found. Try searching for &quot;permissions&quot;, &quot;encryption&quot;, or &quot;screenshot&quot;, or email us at{" "}
              <a href={`mailto:${siteConfig.supportEmail}`} className="text-cyan-400 underline">
                {siteConfig.supportEmail}
              </a>
              .
            </div>
          )}
        </div>
      </section>

      {/* Privacy & App Review Quick Links Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 via-slate-900/40 to-cyan-900/20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-emerald-400">
            <Shield className="w-4 h-4" />
            <span>Zero Telemetry Guarantee</span>
          </div>
          <h3 className="text-lg font-bold text-white">Looking for our complete Privacy Policy?</h3>
          <p className="text-xs text-slate-400">
            Learn more about our local-only encrypted storage, Apple Keychain keys, and zero-data-collection policy.
          </p>
        </div>
        <Link
          href="/privacy/"
          className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-cyan-400/40 transition-all flex items-center gap-2 shrink-0 group"
        >
          <span>Read Full Privacy Policy</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

