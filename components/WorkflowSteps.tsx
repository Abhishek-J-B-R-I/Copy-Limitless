"use client";

import React from "react";
import Link from "next/link";
import {
  Copy,
  Search,
  CornerDownLeft,
  Command,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Camera,
  Layers,
  FileCode,
  CheckCircle2,
} from "lucide-react";

export default function WorkflowSteps() {
  const steps = [
    {
      number: "01",
      badge: "Step 1 • Background Capture",
      title: "Copy Anything",
      shortcut: (
        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
          <kbd className="px-2 py-1 rounded bg-white/10 border border-white/15 text-white font-bold shadow-sm">
            ⌘
          </kbd>
          <span className="text-slate-500">+</span>
          <kbd className="px-2 py-1 rounded bg-white/10 border border-white/15 text-white font-bold shadow-sm">
            C
          </kbd>
        </div>
      ),
      description:
        "Work normally across any Mac app—text, links, images, code, and screenshots are saved automatically.",
      icon: Copy,
      color: "from-blue-600/20 to-blue-500/5",
      border: "border-blue-500/30 group-hover:border-blue-400/60",
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      highlights: [
        {
          icon: Layers,
          text: "Works seamlessly across Safari, Xcode, Slack, VS Code, Notes, and all your Mac apps.",
        },
        {
          icon: Camera,
          text: "Screenshots taken with ⌘⇧3 or ⌘⇧4 are automatically detected and added to history.",
        },
        {
          icon: ShieldCheck,
          text: "Sensitive passwords from 1Password, Bitwarden, and Keychain are automatically ignored.",
        },
      ],
    },
    {
      number: "02",
      badge: "Step 2 • Global Search",
      title: "Open & Find",
      shortcut: (
        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
          <kbd className="px-2 py-1 rounded bg-white/10 border border-white/15 text-white font-bold shadow-sm">
            ⌘
          </kbd>
          <span className="text-slate-500">+</span>
          <kbd className="px-2 py-1 rounded bg-white/10 border border-white/15 text-white font-bold shadow-sm">
            ⇧
          </kbd>
          <span className="text-slate-500">+</span>
          <kbd className="px-2 py-1 rounded bg-white/10 border border-white/15 text-white font-bold shadow-sm">
            V
          </kbd>
        </div>
      ),
      description:
        "Summon the floating launcher from anywhere, search in milliseconds, or filter by category.",
      icon: Search,
      color: "from-cyan-600/20 to-cyan-500/5",
      border: "border-cyan-500/30 group-hover:border-cyan-400/60",
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      highlights: [
        {
          icon: Command,
          text: "Global floating launcher appears instantly over any full-screen app or desktop space.",
        },
        {
          icon: Zap,
          text: "Instant search-as-you-type finds clips, code snippets, or links in under 40 milliseconds.",
        },
        {
          icon: Layers,
          text: "One-click category tabs for Text, Links, Images, Code, and dynamic Snippet templates.",
        },
      ],
    },
    {
      number: "03",
      badge: "Step 3 • Auto-Paste",
      title: "Paste Instantly",
      shortcut: (
        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
          <kbd className="px-2.5 py-1 rounded bg-white/10 border border-white/15 text-white font-bold shadow-sm flex items-center gap-1">
            <CornerDownLeft className="w-3 h-3 text-cyan-400" />
            <span>Return</span>
          </kbd>
        </div>
      ),
      description:
        "Press Return to paste directly into your active window, edit text in place, or expand custom snippets.",
      icon: CornerDownLeft,
      color: "from-indigo-600/20 to-indigo-500/5",
      border: "border-indigo-500/30 group-hover:border-indigo-400/60",
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      highlights: [
        {
          icon: Zap,
          text: "Auto-pastes directly at your active cursor with zero manual switching.",
        },
        {
          icon: CheckCircle2,
          text: "Press Shift + Return to paste clean text with formatting and tracking links removed.",
        },
        {
          icon: FileCode,
          text: "Expand dynamic snippet templates with real-time {date}, {time}, and text variables.",
        },
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#0a0c0f] border-t border-b border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple &amp; Intuitive Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How Copy Limitless Works in 3 Easy Steps
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Designed to stay completely out of your way until the exact moment you need it.
            Master your entire clipboard in three effortless keystrokes.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`p-7 sm:p-8 rounded-2xl bg-gradient-to-b ${step.color} bg-[#0e1117] border ${step.border} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-macWindow flex flex-col justify-between group relative`}
              >
                <div>
                  {/* Top Bar with Number, Badge, and Shortcut */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-3xl font-black font-mono text-white/30 group-hover:text-cyan-400/80 transition-colors">
                      {step.number}
                    </span>
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${step.accent}`}>
                      {step.badge}
                    </span>
                  </div>

                  {/* Title and Shortcut */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{step.title}</span>
                    </h3>
                    {step.shortcut}
                  </div>

                  {/* Main Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {step.description}
                  </p>

                  {/* Highlight Bullets */}
                  <ul className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-400">
                    {step.highlights.map((item, hIdx) => {
                      const HIcon = item.icon;
                      return (
                        <li key={hIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <HIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-slate-300">{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-slate-400">Ready in background</span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Step {step.number} →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pro Tip Callout Card */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-cyan-950/40 border border-white/10 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Power User Shortcut: Quick-Paste Top 9 Items
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘ + 1</kbd> through <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘ + 9</kbd> in the launcher to instantly paste any of your most recent clips in one keystroke.
              </p>
            </div>
          </div>

          <Link
            href="/support/#shortcuts"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-cyan-400/40 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>View All Keyboard Shortcuts</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}

