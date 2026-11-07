"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Copy, Shield, ArrowUp, Sparkles, Terminal, LifeBuoy, FileText, Laptop, ExternalLink, Mail } from "lucide-react";
import { siteConfig, getAssetPath } from "@/lib/siteConfig";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#08090b] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-Footer Call to Action Box */}
        <div className="rounded-3xl bg-gradient-to-tr from-blue-900/30 via-slate-900/40 to-cyan-900/30 border border-white/10 p-8 sm:p-14 mb-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>macOS 14 Sonoma &amp; macOS 15 Sequoia Ready</span>
          </span>

          <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-2xl mx-auto">
            Experience Native Mac Productivity
          </h3>
          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Private, encrypted clipboard history and productivity suite designed natively for modern Mac workstations and laptops.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/support/"
              className="px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-glow transition-all flex items-center gap-2 group"
            >
              <LifeBuoy className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span>Support &amp; User Guide</span>
            </Link>
            <Link
              href="/privacy/"
              className="px-6 py-4 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Privacy Policy</span>
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-500">
            <span>Universal Binary (Apple Silicon &amp; Intel)</span>
            <span>•</span>
            <span>Zero Telemetry</span>
            <span>•</span>
            <span>AES-256 Keychain</span>
            <span>•</span>
            <span>Supports macOS 14+</span>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 shadow-sm">
                <Image
                  src={getAssetPath("/app-icon.png")}
                  alt="Copy Limitless Icon"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The native, privacy-first clipboard manager and productivity suite for Mac.
              Zero cloud sync, hardware AES-256-GCM encryption, automatic ⌘⇧3 screenshot capture,
              and sub-40ms FTS5 search.
            </p>
            <div className="space-y-1.5 pt-1">
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% Offline • Zero Telemetry • 100% Local</span>
              </div>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Support: </span>
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="text-cyan-400 hover:underline"
                >
                  {siteConfig.supportEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Product & Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white font-semibold mb-4 tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-cyan-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-cyan-400 transition-colors">
                  Features Overview
                </Link>
              </li>
              <li>
                <Link href="/#mac-lineup" className="hover:text-cyan-400 transition-colors">
                  Mac Lineup Compatibility
                </Link>
              </li>
              <li>
                <Link href="/#comparison" className="hover:text-cyan-400 transition-colors">
                  Comparison Matrix
                </Link>
              </li>
            </ul>
          </div>

          {/* User Guide & Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white font-semibold mb-4 tracking-wider">
              User Guide
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/#how-it-works" className="hover:text-cyan-400 transition-colors">
                  3-Step Quick Start
                </Link>
              </li>
              <li>
                <Link href="/support/#shortcuts" className="hover:text-cyan-400 transition-colors">
                  Keyboard Shortcuts Guide
                </Link>
              </li>
              <li>
                <Link href="/support/#permissions" className="hover:text-cyan-400 transition-colors">
                  macOS Permissions Setup
                </Link>
              </li>
              <li>
                <Link href="/#calculator" className="hover:text-cyan-400 transition-colors">
                  Productivity Calculator
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-cyan-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal (Apple App Store Mandatories) */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white font-semibold mb-4 tracking-wider">
              App Store &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <Link
                  href="/support/"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-cyan-300 font-semibold"
                >
                  <LifeBuoy className="w-3.5 h-3.5" />
                  Support &amp; Troubleshooting
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy/"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-emerald-300 font-semibold"
                >
                  <Shield className="w-3.5 h-3.5" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/support/#shortcuts" className="hover:text-cyan-400 transition-colors">
                  Keyboard Shortcuts Guide
                </Link>
              </li>
              <li>
                <Link href="/support/#permissions" className="hover:text-cyan-400 transition-colors">
                  macOS Permissions Guide
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.supportEmail}?subject=Copy%20Limitless%20Support%20Inquiry`}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <span>Email Developer</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Apple Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-slate-400">
              {siteConfig.copyrightNotice}
            </p>
            <p className="text-[11px] text-slate-500">
              {siteConfig.appleDisclaimer}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy/" className="hover:text-cyan-400 transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/support/" className="hover:text-cyan-400 transition-colors">
              Support
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
