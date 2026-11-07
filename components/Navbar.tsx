"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Copy, Shield, Menu, X, Cpu, LifeBuoy, Laptop, BookOpen, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0f12]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo - Fixed size, no wrapping */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 shrink-0 rounded-xl overflow-hidden shadow-glow">
            <Image
              src="/app-icon.png"
              alt="Copy Limitless Icon"
              width={40}
              height={40}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors whitespace-nowrap">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-mono uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30 px-1.5 py-0.5 rounded whitespace-nowrap hidden sm:inline-block">
              macOS Native
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 2xl:gap-8 text-sm font-medium text-slate-300">
          <Link
            href="/#how-it-works"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>How It Works</span>
          </Link>
          <Link
            href="/#features"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            Features
          </Link>
          <Link
            href="/#mac-lineup"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Laptop className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mac Lineup</span>
          </Link>
          <Link
            href="/support/"
            className={`transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              pathname?.includes("/support")
                ? "text-cyan-400 font-semibold"
                : "hover:text-cyan-400"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>User Guide</span>
          </Link>
          <Link
            href="/privacy/"
            className={`transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              pathname?.includes("/privacy")
                ? "text-cyan-400 font-semibold"
                : "hover:text-cyan-400"
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Privacy</span>
          </Link>
        </nav>

        {/* Right Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/support/"
            className="hidden sm:flex px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:border-cyan-400/40 rounded-lg transition-all items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <LifeBuoy className="w-3.5 h-3.5 text-cyan-400" />
            <span>Support &amp; Guide</span>
          </Link>

          {/* Mobile / Tablet Menu Toggle (visible on < xl) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white focus:outline-none rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#15181e]/98 backdrop-blur-2xl border-b border-white/10 px-5 pt-3 pb-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 flex items-center gap-2.5 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>How It Works (3 Steps)</span>
            </Link>
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              Features Overview
            </Link>
            <Link
              href="/#mac-lineup"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 flex items-center gap-2.5 transition-colors"
            >
              <Laptop className="w-4 h-4 text-cyan-400" />
              <span>Mac Lineup Compatibility</span>
            </Link>
            <Link
              href="/#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              <span>Comparison Matrix</span>
            </Link>
            <div className="pt-2 border-t border-white/10 flex flex-col space-y-2">
              <Link
                href="/support/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg flex items-center gap-2.5 transition-colors ${
                  pathname?.includes("/support")
                    ? "bg-blue-500/20 text-cyan-300 font-semibold"
                    : "text-slate-200 hover:text-cyan-400 hover:bg-white/5"
                }`}
              >
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>User Guide &amp; Shortcuts</span>
              </Link>
              <Link
                href="/privacy/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg flex items-center gap-2.5 transition-colors ${
                  pathname?.includes("/privacy")
                    ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                    : "text-slate-200 hover:text-emerald-400 hover:bg-white/5"
                }`}
              >
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Privacy Policy</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
