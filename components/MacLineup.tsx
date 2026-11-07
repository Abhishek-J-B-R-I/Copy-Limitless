"use client";

import React from "react";
import { Laptop, Monitor, Cpu, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function MacLineup() {
  const lineup = [
    {
      name: "MacBook Air",
      subtitle: "13-inch & 15-inch",
      chip: "M1 • M2 • M3",
      icon: Laptop,
      highlight: "Battery Preservation",
      description:
        "Tuned for fanless operation. Uses adaptive dispatch timers that drop to <0.01% CPU when idle and halt completely on lid closure to preserve all-day battery life.",
      specs: ["<0.01% Idle CPU", "Fanless Tuning", "Zero Phantom Drain"],
      color: "from-blue-500/20 to-cyan-500/10",
      borderColor: "hover:border-blue-500/40",
      tag: "Ultraportable",
    },
    {
      name: "MacBook Pro",
      subtitle: "14-inch & 16-inch",
      chip: "M1/M2/M3/M4 Pro & Max",
      icon: Laptop,
      highlight: "ProMotion 120Hz & HDR",
      description:
        "Engineered for 120Hz ProMotion displays. Floating HUD window activates in <12ms with smooth hardware-accelerated rendering and instant multi-gigabyte screenshot handling.",
      specs: ["120Hz ProMotion Sync", "Liquid Retina XDR", "Retina PNG Pipeline"],
      color: "from-cyan-500/20 to-blue-500/10",
      borderColor: "hover:border-cyan-500/40",
      tag: "Pro Workflows",
    },
    {
      name: "iMac",
      subtitle: "24-inch 4.5K Retina",
      chip: "M1 • M3 • M4",
      icon: Monitor,
      highlight: "All-in-One Desktop",
      description:
        "Optimized for 4.5K Retina resolution. Crisp typography rendering across macOS Spaces and Stage Manager, keeping daily desk workflows organized and uncluttered.",
      specs: ["4.5K Retina Display", "Stage Manager Ready", "Multi-Space Support"],
      color: "from-purple-500/20 to-pink-500/10",
      borderColor: "hover:border-purple-500/40",
      tag: "Creative Desks",
    },
    {
      name: "Mac mini",
      subtitle: "Compact Powerhouse",
      chip: "M1 • M2 • M4 (Pro)",
      icon: Cpu,
      highlight: "Multi-Display Setups",
      description:
        "Global shortcut engine ensures ⌘⇧V triggers instantly across multiple external displays and full-screen spaces.",
      specs: ["Multi-Monitor HotKey", "Zero Menu Clutter", "Low Memory Footprint"],
      color: "from-emerald-500/20 to-teal-500/10",
      borderColor: "hover:border-emerald-500/40",
      tag: "Developer Dock",
    },
    {
      name: "Mac Studio",
      subtitle: "Unified Memory Champion",
      chip: "M1/M2 Max & Ultra",
      icon: Cpu,
      highlight: "Massive History DB",
      description:
        "Leverages ultra-fast unified memory to search through 50,000+ clipboard items, images, and snippets in under 40 milliseconds.",
      specs: ["50k+ History Items", "Sub-40ms Search", "Fast Memory"],
      color: "from-amber-500/20 to-orange-500/10",
      borderColor: "hover:border-amber-500/40",
      tag: "Powerhouse",
    },
    {
      name: "Mac Pro",
      subtitle: "Modular Workstation",
      chip: "M2 Ultra & Intel Xeon",
      icon: Cpu,
      highlight: "Universal Mac App",
      description:
        "Compiled natively as a Universal Mac app. Runs at maximum speed on Apple Silicon and Intel Mac Pro workstations with zero translation lag.",
      specs: ["Universal Mac App", "Native Performance", "Enterprise Grade"],
      color: "from-indigo-500/20 to-purple-500/10",
      borderColor: "hover:border-indigo-500/40",
      tag: "Workstation",
    },
  ];

  return (
    <section id="mac-lineup" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Universal Mac Support</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for the Entire Mac Lineup
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Whether you carry a featherweight MacBook Air or run production on a Mac Studio,
            Copy Limitless delivers instantaneous performance, zero battery drain, and native Apple Silicon acceleration.
          </p>

          {/* Compatibility Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              macOS 14 Sonoma
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              macOS 15 Sequoia
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Apple Silicon (M1/M2/M3/M4)
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              Intel Core &amp; Xeon
            </span>
          </div>
        </div>

        {/* 6 Mac Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lineup.map((mac, idx) => {
            const Icon = mac.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl bg-gradient-to-b ${mac.color} glass-panel border border-white/10 ${mac.borderColor} transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-semibold">
                        {mac.tag}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {mac.chip}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {mac.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mb-3">
                    {mac.subtitle} • {mac.highlight}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {mac.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {mac.specs.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Apple Store Review Compliance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#15181e]/80 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Mac App Store Ready &amp; Apple Sandboxed
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Complies with strict macOS App Sandbox guidelines, Apple CryptoKit standards, and hardened runtime requirements.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
              Hardened Runtime
            </span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
              App Sandbox Enabled
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

