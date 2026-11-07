"use client";

import React from "react";
import { Laptop, Cpu, BatteryCharging, Keyboard, ShieldAlert, Zap, Monitor, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const macFeatures = [
    {
      icon: Cpu,
      title: "Built for Apple Silicon & Intel",
      description:
        "Runs natively on all modern Macs, including M1, M2, M3, and M4 Apple Silicon as well as Intel-based Macs. Enjoy blazing-fast speed and instant responsiveness.",
      metric: "Universal Mac App",
    },
    {
      icon: BatteryCharging,
      title: "Battery & Thermal Optimization",
      description:
        "Engineered to sip battery life. Operates at virtually zero CPU (<0.01%) while idle and automatically pauses when your Mac sleeps or your screen turns off.",
      metric: "<0.01% Idle CPU",
    },
    {
      icon: Keyboard,
      title: "Global Keyboard Shortcut (⌘⇧V)",
      description:
        "Summon your clipboard instantly with ⌘⇧V from any app, full-screen space, or external monitor. It reliably appears right where you are working.",
      metric: "Global ⌘⇧V",
    },
    {
      icon: Monitor,
      title: "Clean Menu Bar App (Zero Dock Clutter)",
      description:
        "Runs discreetly in your Mac's top menu bar without cluttering your Dock. It stays ready in background memory and opens in a fraction of a second.",
      metric: "Menu Bar Only",
    },
    {
      icon: ShieldAlert,
      title: "Automatic Password Protection",
      description:
        "Pre-configured to automatically ignore passwords or tokens copied from 1Password, Bitwarden, Apple Keychain Access, or private browsing windows.",
      metric: "Zero Leakage",
    },
    {
      icon: Zap,
      title: "Keyboard-First Workflow",
      description:
        "Navigate entirely without touching your trackpad: Arrow keys to browse, Return to auto-paste, ⌘1-9 for quick paste, and Esc to dismiss.",
      metric: "100% Keyboard",
    },
  ];

  return (
    <section id="native-mac" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>macOS Native Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered Specifically for Mac Users
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Built to feel right at home on macOS Sonoma and Sequoia across the entire Mac lineup.
            Experience a clipboard manager that is fast, quiet, and battery-friendly.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {macFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                      {feat.metric}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
