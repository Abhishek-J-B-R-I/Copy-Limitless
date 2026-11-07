"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Pin,
  FileText,
  Link as LinkIcon,
  Image as ImageIcon,
  FileCode,
  Code2,
  Trash2,
  FileDown,
  CheckSquare,
  Square,
  Lock,
  ExternalLink,
  Sparkles,
  Command,
  CheckCircle2,
} from "lucide-react";

interface MockItem {
  id: string;
  type: "text" | "image" | "code" | "link" | "snippet";
  title: string;
  preview: string;
  sourceApp: string;
  timeAgo: string;
  isPinned: boolean;
  byteSize: string;
  copyCount: number;
  encrypted: boolean;
  codeLanguage?: string;
  imageDimensions?: string;
}

const INITIAL_MOCK_ITEMS: MockItem[] = [
  {
    id: "item-1",
    type: "image",
    title: "Design System Palette — v2.4.png",
    preview: "Image (1.2 MB • 2560×1600 Retina Preview)",
    sourceApp: "Figma",
    timeAgo: "Just now",
    isPinned: true,
    byteSize: "1.2 MB",
    copyCount: 1,
    encrypted: true,
    imageDimensions: "2560 × 1600",
  },
  {
    id: "item-2",
    type: "code",
    title: "formatCurrency.ts — Utility helper",
    preview:
      "export function formatCurrency(amount: number): string {\n  return new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD'\n  }).format(amount);\n}",
    sourceApp: "VS Code",
    timeAgo: "4m ago",
    isPinned: true,
    byteSize: "174 bytes",
    copyCount: 4,
    encrypted: true,
    codeLanguage: "TypeScript",
  },
  {
    id: "item-3",
    type: "snippet",
    title: "Customer Welcome Template",
    preview:
      "Hello {name},\n\nWelcome to our platform! Thank you for joining on {date}.\nPlease let us know if you have any questions getting started.\n\nBest regards,\nCustomer Success Team",
    sourceApp: "Snippets Library",
    timeAgo: "22m ago",
    isPinned: false,
    byteSize: "210 bytes",
    copyCount: 8,
    encrypted: true,
  },
  {
    id: "item-4",
    type: "link",
    title: "https://developer.apple.com/macos/",
    preview: "https://developer.apple.com/macos/",
    sourceApp: "Safari",
    timeAgo: "55m ago",
    isPinned: false,
    byteSize: "36 bytes",
    copyCount: 2,
    encrypted: true,
  },
  {
    id: "item-5",
    type: "text",
    title: "Team Sync Agenda Notes",
    preview:
      "Meeting Agenda:\n1. Review quarterly product roadmap\n2. Design system polish & accessibility review\n3. Release timeline for version 1.0",
    sourceApp: "Notes",
    timeAgo: "1h ago",
    isPinned: false,
    byteSize: "148 bytes",
    copyCount: 1,
    encrypted: true,
  },
  {
    id: "item-6",
    type: "code",
    title: "Brand Accent Gradient",
    preview: "background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);",
    sourceApp: "Color Palette",
    timeAgo: "2h ago",
    isPinned: false,
    byteSize: "68 bytes",
    copyCount: 5,
    encrypted: true,
    codeLanguage: "CSS",
  },
];

export default function InteractiveSimulator() {
  const [items, setItems] = useState<MockItem[]>(INITIAL_MOCK_ITEMS);
  const [selectedId, setSelectedId] = useState<string>("item-1");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [hudMessage, setHudMessage] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All", icon: Sparkles },
    { id: "pinned", label: "Pinned", icon: Pin },
    { id: "snippets", label: "Snippets", icon: FileText },
    { id: "text", label: "Text", icon: FileText },
    { id: "links", label: "Links", icon: LinkIcon },
    { id: "image", label: "Images", icon: ImageIcon },
    { id: "code", label: "Code", icon: FileCode },
  ];

  // Filtering
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (activeCategory === "pinned" && !item.isPinned) return false;
      if (activeCategory === "snippets" && item.type !== "snippet") return false;
      if (activeCategory === "text" && item.type !== "text") return false;
      if (activeCategory === "links" && item.type !== "link") return false;
      if (activeCategory === "image" && item.type !== "image") return false;
      if (activeCategory === "code" && item.type !== "code") return false;

      // Search filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.preview.toLowerCase().includes(q) ||
        item.sourceApp.toLowerCase().includes(q)
      );
    });
  }, [items, activeCategory, searchQuery]);

  const selectedItem = items.find((i) => i.id === selectedId) || items[0];

  const triggerHud = (msg: string) => {
    setHudMessage(msg);
    setTimeout(() => {
      setHudMessage(null);
    }, 2500);
  };

  const handleToggleSelect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
  };

  const handleSelectAll = () => {
    if (selectedIds.size === filteredItems.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredItems.map((i) => i.id)));
    }
  };

  const handleDeleteSelected = () => {
    const nextItems = items.filter((i) => !selectedIds.has(i.id));
    setItems(nextItems);
    triggerHud(`Deleted ${selectedIds.size} clipboard items`);
    setSelectedIds(new Set());
    setIsSelectionMode(false);
    if (nextItems.length > 0) {
      setSelectedId(nextItems[0].id);
    }
  };

  const handleExportSelected = () => {
    triggerHud(`Exported ${selectedIds.size} items to JSON file`);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Interactive UI Simulator
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience the ⌘⇧V Launcher in Real-Time
          </h3>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Try searching, category filters, multi-select export, and previewing encrypted clipboard
            payloads just as you would on your Mac.
          </p>
        </div>

        {/* Mac Window Container */}
        <div className="relative rounded-2xl glass-panel-elevated shadow-macWindow overflow-hidden border border-white/10 max-w-5xl mx-auto">
          {/* Mac Window Header / Titlebar */}
          <div className="h-12 bg-[#12151b] border-b border-white/10 px-4 flex items-center justify-between select-none">
            {/* Traffic Lights */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40" />
              <span className="ml-3 text-xs font-medium text-slate-400 font-mono">
                Copy Limitless — ⌘⇧V
              </span>
            </div>

            {/* Quick Actions in Header */}
            <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="hidden sm:inline-flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                <Lock className="w-3 h-3 text-emerald-400" /> AES-256 Locked
              </span>
              <button
                onClick={() => {
                  setIsSelectionMode(!isSelectionMode);
                  if (isSelectionMode) setSelectedIds(new Set());
                }}
                className={`px-2.5 py-1 rounded transition-colors text-xs font-sans ${
                  isSelectionMode
                    ? "bg-blue-600 text-white font-medium"
                    : "bg-white/5 hover:bg-white/10 text-slate-300"
                }`}
              >
                {isSelectionMode ? "Done Selecting" : "Select Multiple"}
              </button>
            </div>
          </div>

          {/* Search Bar & Header */}
          <div className="p-4 bg-[#15181e] border-b border-white/10">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search encrypted clipboard history, snippets, apps (e.g. 'Figma', 'TypeScript', 'Welcome')..."
                className="w-full bg-[#1e232b] text-white placeholder-slate-500 text-sm pl-10 pr-24 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-all font-sans"
              />
              <div className="absolute right-3 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                <kbd className="px-1.5 py-0.5 bg-black/40 rounded border border-white/10">⏎ Paste</kbd>
                <kbd className="px-1.5 py-0.5 bg-black/40 rounded border border-white/10">esc</kbd>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 no-scrollbar text-xs">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all font-medium ${
                      active
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selection Action Bar (when isSelectionMode is active) */}
          {isSelectionMode && (
            <div className="bg-blue-950/40 border-b border-blue-500/20 px-4 py-2 flex items-center justify-between text-xs animate-in fade-in duration-200">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleSelectAll}
                  className="flex items-center gap-1.5 text-blue-300 hover:text-white font-medium"
                >
                  {selectedIds.size === filteredItems.length ? (
                    <CheckSquare className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Square className="w-4 h-4 text-blue-400" />
                  )}
                  <span>
                    {selectedIds.size === filteredItems.length ? "Deselect All" : "Select All"}
                  </span>
                </button>
                <span className="text-slate-400 font-mono">
                  {selectedIds.size} of {filteredItems.length} selected
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportSelected}
                  disabled={selectedIds.size === 0}
                  className="px-2.5 py-1 bg-white/10 hover:bg-white/20 disabled:opacity-40 rounded text-slate-200 font-medium flex items-center gap-1.5 transition-colors"
                >
                  <FileDown className="w-3 h-3 text-cyan-400" />
                  <span>Export ({selectedIds.size})</span>
                </button>
                <button
                  onClick={handleDeleteSelected}
                  disabled={selectedIds.size === 0}
                  className="px-2.5 py-1 bg-red-600/80 hover:bg-red-600 disabled:opacity-40 rounded text-white font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Delete ({selectedIds.size})</span>
                </button>
              </div>
            </div>
          )}

          {/* Main Content Pane: Left List + Right Preview */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] max-h-[460px]">
            {/* Left Items Column */}
            <div className="md:col-span-7 border-r border-white/10 overflow-y-auto divide-y divide-white/5 bg-[#101317]">
              {filteredItems.length === 0 ? (
                <div className="p-12 text-center text-slate-500 text-sm">
                  No matching clips found for &quot;{searchQuery}&quot;
                </div>
              ) : (
                filteredItems.map((item) => {
                  const isSelected = item.id === selectedId;
                  const isChecked = selectedIds.has(item.id);

                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      className={`p-3.5 flex items-start gap-3 cursor-pointer transition-all ${
                        isSelected
                          ? "bg-blue-600/20 border-l-4 border-blue-500 text-white"
                          : "hover:bg-white/[0.03] text-slate-300"
                      }`}
                    >
                      {/* Checkbox in selection mode */}
                      {isSelectionMode && (
                        <button
                          onClick={(e) => handleToggleSelect(item.id, e)}
                          className="mt-0.5 text-slate-400 hover:text-white"
                        >
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-blue-400" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-500" />
                          )}
                        </button>
                      )}

                      {/* Icon */}
                      <div className="mt-0.5 w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                        {item.type === "image" && <ImageIcon className="w-4 h-4 text-purple-400" />}
                        {item.type === "code" && <Code2 className="w-4 h-4 text-amber-400" />}
                        {item.type === "snippet" && <FileText className="w-4 h-4 text-cyan-400" />}
                        {item.type === "link" && <LinkIcon className="w-4 h-4 text-blue-400" />}
                        {item.type === "text" && <FileText className="w-4 h-4 text-slate-400" />}
                      </div>

                      {/* Content Preview */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                          <span className="font-medium text-slate-300 flex items-center gap-1.5 truncate">
                            {item.sourceApp}
                            {item.isPinned && <Pin className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />}
                          </span>
                          <span className="shrink-0 font-mono text-[10px]">{item.timeAgo}</span>
                        </div>
                        <p className="text-xs font-normal text-slate-200 line-clamp-2 leading-relaxed whitespace-pre-line">
                          {item.preview}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Right Preview Pane */}
            <div className="md:col-span-5 p-5 bg-[#14181f] flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" /> Decrypted Item Preview
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">
                    {selectedItem.byteSize}
                  </span>
                </div>

                {/* Body Preview */}
                <div className="mt-4 space-y-3">
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {selectedItem.sourceApp}
                  </div>

                  {selectedItem.type === "image" ? (
                    <div className="rounded-xl border border-white/10 overflow-hidden bg-black/40 p-4 text-center">
                      <div className="w-full h-32 rounded-lg bg-gradient-to-tr from-purple-900/40 via-blue-900/30 to-cyan-900/40 border border-white/10 flex flex-col items-center justify-center p-3 relative group">
                        <ImageIcon className="w-8 h-8 text-cyan-400 mb-2" />
                        <span className="text-xs font-mono font-medium text-slate-200">
                          {selectedItem.imageDimensions} Image Preview
                        </span>
                        <span className="text-[10px] text-emerald-400 font-mono mt-1">
                          Encrypted in Local SQLite Database
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>Format: PNG</span>
                        <span>Color: Display P3</span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 font-mono text-xs text-slate-200 whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
                      {selectedItem.preview}
                    </div>
                  )}

                  {/* Encryption & Hash Badges */}
                  <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      AES-256-GCM
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      SHA-256 Validated
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                      Copied {selectedItem.copyCount}x
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Paste Controls */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => triggerHud(`Copied to clipboard (Press ⌘V to paste)`)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-glow transition-all flex items-center justify-center gap-1.5"
                >
                  <Command className="w-3.5 h-3.5" />
                  <span>Paste to Active App</span>
                </button>
                <button
                  onClick={() => triggerHud(`Cleaned formatting and copied to clipboard`)}
                  className="py-2 px-3 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                  title="Paste Plain Text without formatting"
                >
                  Plain Text
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating HUD Notification Simulator */}
        {hudMessage && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#1e232b]/95 border border-white/20 shadow-2xl backdrop-blur-xl text-white text-xs font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{hudMessage}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
