"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Clock, Sparkles, TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";

export default function ProductivityCalculator() {
  const [copiesPerDay, setCopiesPerDay] = useState<number>(60);
  const [lostSearchMinutes, setLostSearchMinutes] = useState<number>(15);
  const [screenshotsPerWeek, setScreenshotsPerWeek] = useState<number>(25);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Consistent number formatting across server SSR and client hydration
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  // Calculations:
  // 1. Time saved from instant ⌘⇧V search vs re-typing / re-searching across apps:
  //    Average 8 seconds saved per copy operation when retrieving from history
  const copySecondsSavedDaily = copiesPerDay * 0.4 * 12; // 40% of copies are retrieved from history
  // 2. Direct search time saved (finding lost links/snippets):
  const searchSecondsSavedDaily = lostSearchMinutes * 60 * 0.75;
  // 3. Screenshot time saved (⌘⇧3 auto-copied instead of finder -> drag & drop):
  //    ~15 seconds saved per screenshot
  const screenshotSecondsSavedDaily = (screenshotsPerWeek / 5) * 15;

  const totalSecondsSavedDaily =
    copySecondsSavedDaily + searchSecondsSavedDaily + screenshotSecondsSavedDaily;
  const hoursSavedPerYear = Math.round((totalSecondsSavedDaily * 240) / 3600); // 240 working days
  const contextSwitchesPreventedYearly = Math.round(copiesPerDay * 0.4 * 240);
  const keystrokesSavedYearly = Math.round(copiesPerDay * 45 * 240);

  return (
    <section id="calculator" className="py-24 relative bg-[#090b0e] border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How Much Time Will Copy Limitless Save You?
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            See the tangible productivity boost gained by eliminating window tab switching,
            re-typing boilerplate code, and manually dragging desktop screenshots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Controls Column (Sliders) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-white/10 space-y-6">
            <div>
              <div className="flex items-center justify-between text-sm font-medium mb-2">
                <span className="text-white">Daily Copy / Paste Operations:</span>
                <span className="font-mono text-cyan-400 font-bold text-base">
                  {copiesPerDay} copies / day
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={copiesPerDay}
                onChange={(e) => setCopiesPerDay(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <p className="text-xs text-slate-400 mt-1">
                Typical developer or writer copies between 40 and 100 items daily.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between text-sm font-medium mb-2">
                <span className="text-white">Minutes Spent Searching for Lost Clips/Links:</span>
                <span className="font-mono text-emerald-400 font-bold text-base">
                  {lostSearchMinutes} mins / day
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="45"
                step="5"
                value={lostSearchMinutes}
                onChange={(e) => setLostSearchMinutes(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <p className="text-xs text-slate-400 mt-1">
                Navigating back to Slack, browser history, or old commits to find copied content.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between text-sm font-medium mb-2">
                <span className="text-white">Screenshots Captured Weekly (⌘⇧3 / ⌘⇧4):</span>
                <span className="font-mono text-purple-400 font-bold text-base">
                  {screenshotsPerWeek} screenshots / week
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={screenshotsPerWeek}
                onChange={(e) => setScreenshotsPerWeek(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <p className="text-xs text-slate-400 mt-1">
                Auto-copied directly to clipboard instead of manual Finder dragging.
              </p>
            </div>
          </div>

          {/* Right Metrics Result Box */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-purple-900/30 border border-cyan-500/30 shadow-glow relative">
            <div className="absolute top-4 right-4">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>

            <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
              Annual Productivity Gains
            </span>

            <div className="mt-4">
              <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                +{hoursSavedPerYear} <span className="text-2xl font-bold text-cyan-400">hours</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 font-medium">
                Equivalent to ~{Math.round((hoursSavedPerYear / 40) * 10) / 10} full work weeks of
                recovered focus time per year!
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Context Switches Prevented:</span>
                <span
                  suppressHydrationWarning
                  className="font-mono font-bold text-white text-sm"
                >
                  {formatNumber(contextSwitchesPreventedYearly)} / yr
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Boilerplate Keystrokes Eliminated:</span>
                <span
                  suppressHydrationWarning
                  className="font-mono font-bold text-white text-sm"
                >
                  ~{formatNumber(keystrokesSavedYearly)} keys
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Retina Screenshot Capture:</span>
                <span className="font-mono font-bold text-emerald-400 text-sm">100% Automatic</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/support/#shortcuts"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-glow transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Time-Saving Shortcuts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
