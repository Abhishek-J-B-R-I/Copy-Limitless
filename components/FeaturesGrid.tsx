"use client";

import React from "react";
import {
  Camera,
  CheckSquare,
  Lock,
  Search,
  FileCode,
  ShieldAlert,
  Sparkles,
  Link2Off,
  Database,
  ArrowRight,
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Camera,
      tag: "Breakthrough Feature",
      title: "Automatic ⌘⇧3 Retina Screenshot Capture",
      description:
        "Press ⌘⇧3 or ⌘⇧4 as normal. Copy Limitless detects the capture in real-time, extracts the Retina image, writes it to the clipboard, and adds it to your history. Press ⌘V anywhere to paste immediately.",
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      icon: CheckSquare,
      tag: "Power User Control",
      title: "Multi-Select, Bulk Export & Delete",
      description:
        "Select multiple clips with ⌘-click, ⇧-click, or 'Select All'. Export your selected clips as JSON or plain text (.txt) files, or bulk delete with a clean confirmation prompt.",
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Lock,
      tag: "Zero-Knowledge Security",
      title: "Hardware AES-256 Encryption",
      description:
        "Every text snippet, image, and link is encrypted at rest using industry-standard AES-256. Your master key is securely stored in your local macOS Keychain.",
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Search,
      tag: "<40ms Latency",
      title: "Instant Search-as-You-Type",
      description:
        "Fast search-as-you-type across your entire clipboard history. Smart keyword matching helps you locate text, URLs, code snippets, or images in under 40 milliseconds.",
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: FileCode,
      tag: "Productivity Booster",
      title: "Snippet Templates & Dynamic Variables",
      description:
        "Save boilerplate code, client responses, and documentation snippets. Dynamically interpolate {date}, {time}, and {clipboard} variables on-the-fly when pasting.",
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: ShieldAlert,
      tag: "Automatic Protection",
      title: "Sensitive Data Redaction & Luhn Check",
      description:
        "Automatically identifies credit card numbers (validated via Luhn algorithm), AWS/GitHub API tokens, and passwords. Redacts previews and offers auto-skip privacy mode.",
      accent: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
    {
      icon: Link2Off,
      tag: "Clean Sharing",
      title: "URL Tracking Parameter Stripper",
      description:
        "Automatically strips intrusive tracking queries (utm_source, fbclid, gclid, igshid, ref) from copied links, keeping your shared URLs clean, private, and readable.",
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: Database,
      tag: "Self-Sovereign Data",
      title: "Automated History Pruning & Retention",
      description:
        "Set history retention limits from 100 to 5,000 clips, or keep unlimited history with automatic 30-day retention policies. Pinned items are never deleted.",
      accent: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    },
  ];

  return (
    <section id="features" className="py-24 relative bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Feature Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered Without Compromise
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Every feature in Copy Limitless was built to solve real developer and creator workflows.
            Zero cloud leaks, zero web-view bloat, 100% native performance.
          </p>
        </div>

        {/* 2-Column Responsive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group hover:shadow-glow"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded border font-medium ${feat.accent}`}>
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{feat.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

