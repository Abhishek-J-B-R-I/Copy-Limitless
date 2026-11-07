import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupportContent from "@/components/SupportContent";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Support & Troubleshooting",
  description:
    "Official support center for Copy Limitless for macOS. Get help with Accessibility permissions, AES-256 encryption, ⌘⇧3 screenshot capture, keyboard shortcuts guide, and contact the developer directly.",
  alternates: {
    canonical: `${siteConfig.domain}/support/`,
  },
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-mac-dark text-slate-100 bg-grid relative selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main className="pt-32 pb-24 relative">
        {/* Ambient background glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        <SupportContent />
      </main>
      <Footer />
    </div>
  );
}
