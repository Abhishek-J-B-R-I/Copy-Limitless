"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cpu, ShieldCheck, Zap, Sparkles, Command, ArrowRight, Laptop, LifeBuoy } from "lucide-react";
import { siteConfig, getAssetPath } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows & Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* App Icon Showcase */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-purple-600/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0e1117] flex items-center justify-center p-2">
              <Image
                src={getAssetPath("/app-icon.png")}
                alt="Copy Limitless App Icon"
                width={112}
                height={112}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* Release Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-8 hover:border-cyan-500/40 transition-all duration-300">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-300">
            Copy Limitless v1.0 • Universal macOS App (M1/M2/M3/M4 &amp; Intel)
          </span>
          <span className="text-xs text-cyan-400 font-semibold flex items-center">
            New: ⌘⇧3 Auto-Capture →
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]">
          The Native, Encrypted{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            macOS Clipboard Manager
          </span>{" "}
          Built for Power Users.
        </h1>

        {/* Subtitle with Entire Mac Lineup callout */}
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
          Lightning-fast clipboard history, snippet template expansion, and automatic{" "}
          <span className="text-slate-200 font-medium font-mono">⌘⇧3</span> Retina screenshot
          capture. Engineered 100% offline in Swift with hardware-backed{" "}
          <span className="text-slate-200 font-medium">AES-256-GCM encryption</span>, SQLite FTS5,
          and zero telemetry. Built for the entire Mac lineup running macOS.
        </p>

        {/* Mac Lineup Chips Row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <span className="text-slate-500 mr-1 flex items-center gap-1">
            <Laptop className="w-3.5 h-3.5 text-cyan-400" />
            Runs natively on:
          </span>
          {["MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio", "Mac Pro"].map((mac, idx) => (
            <Link
              key={idx}
              href="/#mac-lineup"
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:text-white transition-colors"
            >
              {mac}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/support/"
            className="px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-glow hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3 group"
          >
            <LifeBuoy className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span>Support &amp; User Guide</span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="#features"
            className="px-6 py-4 rounded-xl text-base font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 flex items-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>Explore Features</span>
          </a>
        </div>

        {/* Keystroke Callout */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400">
          <span>Global trigger shortcut:</span>
          <kbd className="px-2 py-1 bg-white/10 border border-white/15 rounded text-white font-semibold flex items-center gap-1 shadow-sm">
            <Command className="w-3 h-3" />
            <span>⇧</span>
            <span>V</span>
          </kbd>
          <span className="text-slate-500">•</span>
          <span>Instant Full Screenshot to Clipboard:</span>
          <kbd className="px-2 py-1 bg-white/10 border border-white/15 rounded text-white font-semibold flex items-center gap-1 shadow-sm">
            <Command className="w-3 h-3" />
            <span>⇧</span>
            <span>3</span>
          </kbd>
        </div>

        {/* Engineering Metrics Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase">Search Speed</span>
            </div>
            <div className="text-2xl font-bold text-white">&lt; 40 ms</div>
            <p className="text-xs text-slate-400 mt-1">Instant search-as-you-type</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase">Privacy</span>
            </div>
            <div className="text-2xl font-bold text-white">0% Cloud</div>
            <p className="text-xs text-slate-400 mt-1">100% offline, zero network requests</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase">Retina Opt</span>
            </div>
            <div className="text-2xl font-bold text-white">22MB → 2MB</div>
            <p className="text-xs text-slate-400 mt-1">Direct PNG pipeline for ⌘⇧3 captures</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase">Memory Footprint</span>
            </div>
            <div className="text-2xl font-bold text-white">&lt; 30 MB</div>
            <p className="text-xs text-slate-400 mt-1">Pure SwiftUI &amp; AppKit native binary</p>
          </div>
        </div>
      </div>
    </section>
  );
}
