import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, getAssetPath } from "@/lib/siteConfig";
import {
  Shield,
  Lock,
  ServerOff,
  Mail,
  LifeBuoy,
  Database,
  EyeOff,
  FolderLock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Copy Limitless Privacy Policy: 100% offline macOS clipboard manager with zero data collection, zero telemetry, local AES-256-GCM encryption, and macOS Keychain master key.",
  alternates: {
    canonical: `${siteConfig.domain}/privacy/`,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 7, 2026";

  return (
    <div className="min-h-screen bg-mac-dark text-slate-100 bg-grid relative selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 relative">
        {/* Background ambient glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-emerald-500/20 blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-[#0e1117] flex items-center justify-center p-1.5">
                  <Image
                    src={getAssetPath("/app-icon.png")}
                    alt="Copy Limitless App Icon"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>Apple App Store Privacy Statement</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Copy Limitless is architected from the ground up on one core principle: your clipboard data is personal, sacred, and belongs solely on your Mac.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-500">
              <span>Effective Date: {lastUpdated}</span>
              <span>•</span>
              <span>Product: Copy Limitless for macOS</span>
              <span>•</span>
              <span>Publisher: Copy Limitless</span>
            </div>
          </div>

          {/* Apple App Store Privacy Nutrition Highlight Box */}
          <div className="p-8 rounded-2xl bg-gradient-to-tr from-emerald-950/40 via-slate-900/60 to-blue-950/30 border border-emerald-500/30 shadow-2xl mb-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
                <Shield className="w-8 h-8" />
              </div>
              <div className="space-y-1 text-center md:text-left">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Apple App Store Privacy Nutrition Label
                </span>
                <h2 className="text-2xl font-bold text-white">
                  Data Not Collected
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The developer does not collect any data from this application. Copy Limitless does not track your identity, does not log your clipboard history on remote servers, does not use advertising identifiers, and has zero external telemetry pings.
                </p>
              </div>
            </div>

            {/* Quick Proof Matrix */}
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-emerald-400 font-bold text-lg font-mono">0 bytes</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Cloud Uploads</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-emerald-400 font-bold text-lg font-mono">0 trackers</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Analytics SDKs</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-emerald-400 font-bold text-lg font-mono">AES-256</div>
                <div className="text-[11px] text-slate-400 mt-0.5">CryptoKit At Rest</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-emerald-400 font-bold text-lg font-mono">100% Local</div>
                <div className="text-[11px] text-slate-400 mt-0.5">macOS Keychain</div>
              </div>
            </div>
          </div>

          {/* Privacy Policy Content Sections */}
          <div className="space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base">
            
            {/* 1. Core Commitment: Zero Data Collection */}
            <section className="p-7 rounded-2xl glass-panel border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ServerOff className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">1. Zero Data Collection &amp; Zero Transmission</h3>
              </div>
              <p>
                <strong>Copy Limitless does not collect, transmit, store, process, monetize, or sell any personal data, clipboard contents, analytics, or telemetry to any external servers.</strong>
              </p>
              <p>
                We do not maintain user accounts, require logins, or collect your email address, phone number, name, IP address, device serial number, or Mac hardware identifiers. There is no remote cloud server, database, or API associated with this application.
              </p>
            </section>

            {/* 2. 100% Local & Encrypted Storage */}
            <section className="p-7 rounded-2xl glass-panel border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">2. 100% Local &amp; Hardware-Encrypted Storage</h3>
              </div>
              <p>
                Every piece of information copied—including plain text, formatted code snippets, URLs, links, files, and Retina screenshots—remains strictly within your Mac&apos;s internal SSD:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                <li>
                  <strong>AES-256-GCM Hardware Encryption:</strong> Clipboard payload binaries are encrypted at rest using Apple&apos;s native <strong>CryptoKit</strong> framework with 256-bit Advanced Encryption Standard in Galois/Counter Mode (AES-256-GCM), complete with unique cryptographic nonces and authentication tags.
                </li>
                <li>
                  <strong>Keys Stored in macOS Keychain:</strong> The cryptographic master encryption key is generated locally on your Mac using hardware-grade entropy and stored exclusively in your personal macOS Keychain, guarded by system-level biometric and access control policies.
                </li>
                <li>
                  <strong>App Sandboxing:</strong> The local database is isolated inside Apple&apos;s secure App Sandbox container, preventing unauthorized third-party applications or external processes from accessing your records.
                </li>
              </ul>
            </section>

            {/* 3. System Permissions Explanation */}
            <section className="p-7 rounded-2xl glass-panel border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FolderLock className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">3. macOS System Permissions &amp; Strict Purpose</h3>
              </div>
              <p>
                To provide a seamless productivity experience on macOS, Copy Limitless requests the following system permissions. We disclose the exact purpose and strict limits of each:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>Accessibility Permission (<code className="text-xs font-mono text-cyan-300">AXUIElement</code> / <code className="text-xs font-mono text-cyan-300">CGEvent</code>)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 pl-4">
                    <strong>Sole Purpose:</strong> Used exclusively to simulate the standard <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘ + V</kbd> paste shortcut into your currently active application when you press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">Return</kbd> on a selected clipboard item.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 pl-4">
                    <strong>Strict Limits:</strong> Copy Limitless never monitors your general typing, never logs keystrokes, does not read screen contents of third-party applications, and does not alter input events.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Folder Access (User Screenshot Directory)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 pl-4">
                    <strong>Sole Purpose:</strong> If screenshot auto-capture is enabled, this permission allows a lightweight filesystem event observer to detect when a screenshot captured via <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘ + ⇧ + 3</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘ + ⇧ + 4</kbd> is saved to your configured directory (default: <code className="text-xs font-mono text-emerald-300">~/Desktop</code>), so it can be automatically added to your clipboard for instant pasting.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 pl-4">
                    <strong>Strict Limits:</strong> No other folders, personal documents, downloads, or photos are ever accessed, read, or modified.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Sensitive Data & Password Managers */}
            <section className="p-7 rounded-2xl glass-panel border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <EyeOff className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">4. Password Manager &amp; Sensitive Data Protection</h3>
              </div>
              <p>
                Copy Limitless features a built-in <strong>Sensitive Data Detection Engine</strong> engineered to safeguard your credentials:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
                <li>
                  Automatically identifies and excludes items copied from password managers, including <strong>1Password, Bitwarden, Apple Keychain Access, KeePassXC, Dashlane, and LastPass</strong>.
                </li>
                <li>
                  Honors standard macOS clipboard privacy markers, including <code className="text-cyan-300 font-mono text-xs">org.nspasteboard.ConcealedType</code> and <code className="text-cyan-300 font-mono text-xs">org.nspasteboard.AutoGeneratedType</code>.
                </li>
                <li>
                  Confidential entries are discarded instantaneously in memory and never touch persistent storage or disk caches.
                </li>
              </ul>
            </section>

            {/* 5. Third-Party Trackers & SDKs */}
            <section className="p-7 rounded-2xl glass-panel border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <ServerOff className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">5. Third-Party SDKs &amp; Trackers</h3>
              </div>
              <p>
                Copy Limitless contains <strong>ZERO third-party tracking frameworks, advertising libraries, or remote diagnostic beacons</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
                <li>No Google Analytics, Firebase, Mixpanel, Segment, or Amplitude.</li>
                <li>No Sentry, Bugsnag, or Crashlytics network reporting.</li>
                <li>No advertising SDKs or tracking pixels.</li>
              </ul>
              <p className="text-xs text-slate-400">
                The application binary is built purely using native Swift, AppKit, SwiftUI, and Apple CryptoKit frameworks with no unvetted external binary dependencies.
              </p>
            </section>

            {/* 6. User Sovereignty & Data Deletion */}
            <section className="p-7 rounded-2xl glass-panel border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">6. Your Data Rights &amp; Permanent Deletion</h3>
              </div>
              <p>
                You maintain 100% control over your data at all times:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
                <li><strong>Individual Deletion:</strong> Select any item and press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-xs">⌘ + ⌫</kbd> to delete it permanently.</li>
                <li><strong>Bulk Deletion:</strong> Use multi-select to delete selected batches with confirmation.</li>
                <li><strong>Wipe All Unpinned History:</strong> Flush old history at any time while retaining your pinned snippets.</li>
                <li><strong>Complete Purge:</strong> Uninstalling the application or clearing history from the app settings erases all encrypted records instantly and permanently from your Mac&apos;s storage.</li>
              </ul>
            </section>

            {/* 7. Children's Privacy */}
            <section className="p-7 rounded-2xl glass-panel border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white">7. Children&apos;s Privacy</h3>
              <p>
                Because Copy Limitless does not collect, transmit, or process any personal information from any user, it does not collect information from children under the age of 13 (or under any applicable legal age in any jurisdiction).
              </p>
            </section>

            {/* 8. Changes to this Policy */}
            <section className="p-7 rounded-2xl glass-panel border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white">8. Changes to this Privacy Policy</h3>
              <p>
                If we make any modifications to this Privacy Policy, the revised version will be published here with an updated &quot;Effective Date&quot;. Because the app operates 100% offline and possesses zero network connectivity, our commitment to zero data collection remains permanent.
              </p>
            </section>

            {/* 9. Contact Information */}
            <section className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 via-slate-900/40 to-cyan-900/20 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white">9. Questions &amp; Privacy Inquiries</h3>
              </div>
              <p>
                If you have questions, feedback, or concerns regarding this Privacy Policy or the security of Copy Limitless, please contact the developer directly:
              </p>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Support &amp; Privacy Contact</span>
                  <a
                    href={`mailto:${siteConfig.supportEmail}?subject=Copy%20Limitless%20Privacy%20Inquiry`}
                    className="text-base font-mono font-semibold text-cyan-300 hover:text-white transition-colors"
                  >
                    {siteConfig.supportEmail}
                  </a>
                </div>
                <Link
                  href="/support/"
                  className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-glow transition-all flex items-center gap-2"
                >
                  <LifeBuoy className="w-3.5 h-3.5" />
                  <span>Visit Support Center</span>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
