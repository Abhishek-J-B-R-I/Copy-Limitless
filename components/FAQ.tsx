"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Shield, Search } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  category: "privacy" | "screenshots" | "performance" | "features";
}

const FAQ_DATA: FAQItem[] = [
  {
    category: "screenshots",
    q: "How does the automatic ⌘⇧3 screenshot capture work?",
    a: "Whenever you take a screenshot on your Mac (using ⌘⇧3 for full screen or ⌘⇧4 for a selection), Copy Limitless automatically detects the new capture. It optimizes the image for crisp display quality while keeping the file size small, saves it directly to your clipboard, and adds it to your history. You can immediately press ⌘V in any application to paste it.",
  },
  {
    category: "privacy",
    q: "Does Copy Limitless send any data to external cloud servers?",
    a: "Zero. Copy Limitless is 100% offline with zero analytics, zero crash-reporting pings, and zero network capabilities. All data stays entirely on your local Mac's SSD inside an encrypted database.",
  },
  {
    category: "privacy",
    q: "How is my clipboard data kept private and secure?",
    a: "Copy Limitless uses industry-standard AES-256 encryption—the same trusted security standard used by modern operating systems and banking apps. Your encryption key is stored securely in your Mac's built-in Keychain and never leaves your device. Everything stays 100% local on your Mac with zero cloud servers.",
  },
  {
    category: "performance",
    q: "How does Copy Limitless optimize high-resolution Retina screenshots?",
    a: "Retina Mac displays produce large image streams. Copy Limitless features an optimized image pipeline that automatically captures screenshots into high-fidelity compressed PNG representations (~2 MB) with zero visual quality loss, ensuring blazing performance and minimal memory usage.",
  },
  {
    category: "features",
    q: "How do snippet templates with dynamic variables work?",
    a: "In the Snippets tab, you can define reusable text templates containing dynamic variables like {date}, {time}, and {clipboard}. When you paste a snippet, Copy Limitless automatically interpolates these placeholders with current values in real-time.",
  },
  {
    category: "features",
    q: "How does multi-select, bulk export, and bulk delete work?",
    a: "In the launcher (⌘⇧V), click 'Select Multiple' or hold ⌘/⇧ while selecting items. You can choose all matching items to export them into JSON or plain text (.txt) files for easy backup, or delete them in one click with a clear confirmation prompt.",
  },
  {
    category: "performance",
    q: "What is the memory and battery footprint on MacBooks?",
    a: "Copy Limitless is built natively for macOS and operates exceptionally light—using less than 30 MB of memory. It uses virtually zero CPU when idle (<0.01%) and automatically pauses when your Mac sleeps, preserving all-day battery life.",
  },
  {
    category: "privacy",
    q: "What happens when I copy passwords from 1Password or Bitwarden?",
    a: "Copy Limitless automatically detects and excludes popular password managers (such as 1Password, Bitwarden, KeePassXC, and Apple Keychain). Sensitive credentials and passwords are never recorded in your clipboard history.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [filter, setFilter] = useState("");

  const filteredFaqs = FAQ_DATA.filter(
    (item) =>
      item.q.toLowerCase().includes(filter.toLowerCase()) ||
      item.a.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Detailed answers regarding privacy, encryption, screenshot auto-capture, and macOS
            system integration.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filter questions (e.g. 'encryption', 'screenshot')..."
              className="w-full bg-[#15181e] text-white placeholder-slate-500 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl glass-panel border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

