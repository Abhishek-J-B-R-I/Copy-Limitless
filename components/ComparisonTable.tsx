"use client";

import React from "react";
import { Check, X, Shield, Sparkles } from "lucide-react";

export default function ComparisonTable() {
  const criteria = [
    {
      feature: "Cloud & Privacy Protection",
      limitless: "100% Local / Zero Cloud",
      maccy: "100% Local",
      paste: "Cloud Sync (iCloud/Server)",
      raycast: "Cloud Account Sync",
    },
    {
      feature: "Hardware AES-256-GCM Encryption",
      limitless: true,
      maccy: false,
      paste: false,
      raycast: false,
    },
    {
      feature: "Auto ⌘⇧3 Screenshot Capture",
      limitless: true,
      maccy: false,
      paste: false,
      raycast: false,
    },
    {
      feature: "Snippet Templates ({date}, {time}, {clip})",
      limitless: true,
      maccy: false,
      paste: false,
      raycast: true,
    },
    {
      feature: "Multi-Select Bulk Export & Delete",
      limitless: true,
      maccy: false,
      paste: true,
      raycast: false,
    },
    {
      feature: "Instant Search-as-you-type (<40ms)",
      limitless: true,
      maccy: false,
      paste: false,
      raycast: true,
    },
    {
      feature: "Memory Footprint",
      limitless: "< 30 MB RAM",
      maccy: "~ 35 MB RAM",
      paste: "~ 140 MB RAM",
      raycast: "~ 180 MB RAM",
    },
    {
      feature: "Automatic URL Tracking Stripper",
      limitless: true,
      maccy: false,
      paste: false,
      raycast: false,
    },
  ];

  return (
    <section id="comparison" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Head-to-Head Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Choose Copy Limitless?
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            See how Copy Limitless compares to popular alternatives like Maccy, Paste, and Raycast.
            Built natively for privacy, speed, and seamless macOS integration.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-2xl glass-panel border border-white/10 shadow-macWindow">
          <table className="w-full text-left text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10 bg-[#12151b]">
                <th className="py-4 px-6 text-xs font-mono uppercase text-slate-400 font-semibold">
                  Capability / Spec
                </th>
                <th className="py-4 px-6 text-xs font-mono uppercase text-cyan-400 font-bold bg-blue-600/10 border-x border-cyan-500/20">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Copy Limitless</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-xs font-mono uppercase text-slate-400 font-semibold">
                  Maccy
                </th>
                <th className="py-4 px-6 text-xs font-mono uppercase text-slate-400 font-semibold">
                  Paste
                </th>
                <th className="py-4 px-6 text-xs font-mono uppercase text-slate-400 font-semibold">
                  Raycast
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {criteria.map((item, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-white/[0.02] transition-colors ${
                    idx % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"
                  }`}
                >
                  <td className="py-4 px-6 font-medium text-slate-200">{item.feature}</td>

                  {/* Copy Limitless Column (Highlighted) */}
                  <td className="py-4 px-6 bg-blue-600/[0.08] border-x border-cyan-500/20 font-semibold text-white">
                    {typeof item.limitless === "boolean" ? (
                      item.limitless ? (
                        <div className="flex items-center gap-1.5 text-cyan-400">
                          <Check className="w-5 h-5 stroke-[2.5]" />
                          <span className="text-xs font-mono">Yes</span>
                        </div>
                      ) : (
                        <X className="w-5 h-5 text-slate-500" />
                      )
                    ) : (
                      <span className="text-cyan-300 font-mono text-xs">{item.limitless}</span>
                    )}
                  </td>

                  {/* Maccy */}
                  <td className="py-4 px-6 text-slate-400">
                    {typeof item.maccy === "boolean" ? (
                      item.maccy ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600" />
                      )
                    ) : (
                      <span className="font-mono text-xs">{item.maccy}</span>
                    )}
                  </td>

                  {/* Paste */}
                  <td className="py-4 px-6 text-slate-400">
                    {typeof item.paste === "boolean" ? (
                      item.paste ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600" />
                      )
                    ) : (
                      <span className="font-mono text-xs">{item.paste}</span>
                    )}
                  </td>

                  {/* Raycast */}
                  <td className="py-4 px-6 text-slate-400">
                    {typeof item.raycast === "boolean" ? (
                      item.raycast ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600" />
                      )
                    ) : (
                      <span className="font-mono text-xs">{item.raycast}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

