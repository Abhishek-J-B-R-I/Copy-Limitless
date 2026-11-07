import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Copy Limitless — The Native, Encrypted macOS Clipboard Manager Built for Power Users",
    template: "%s | Copy Limitless",
  },
  description: siteConfig.description,
  keywords: [
    "macOS clipboard manager",
    "Copy Limitless",
    "mac clipboard history",
    "private clipboard mac",
    "AES-256 encrypted clipboard",
    "screenshot to clipboard mac",
    "cmd shift 3 clipboard",
    "FTS5 full text search",
    "swift macos app",
    "macbook productivity tools",
    "MacBook Air clipboard",
    "MacBook Pro clipboard",
    "iMac clipboard manager",
    "Mac mini clipboard manager",
    "Mac Studio clipboard manager",
    "Mac Pro clipboard manager",
    "offline clipboard manager",
    "apple silicon clipboard",
  ],
  authors: [{ name: siteConfig.ownerName, url: siteConfig.domain }],
  creator: siteConfig.ownerName,
  publisher: siteConfig.name,
  icons: {
    icon: [
      { url: "/app-icon.png", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/app-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    title: "Copy Limitless — The Native, Encrypted macOS Clipboard Manager",
    description:
      "Engineered for Apple Silicon and Intel Macs. 100% local encrypted storage, automatic ⌘⇧3 screenshot capture, and instantaneous ⌘⇧V launcher.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "Copy Limitless App Icon",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Copy Limitless — The Native, Encrypted macOS Clipboard Manager",
    description:
      "Private, ultra-fast macOS clipboard manager. Local encryption, ⌘⇧3 screenshot capture, and zero telemetry.",
    images: ["/app-icon.png"],
  },
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        "url": siteConfig.domain,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": {
          "@type": "Organization",
          "name": siteConfig.name,
          "logo": {
            "@type": "ImageObject",
            "url": `${siteConfig.domain}/app-icon.png`,
          },
        },
      },
      {
        "@type": "SoftwareApplication",
        "name": siteConfig.name,
        "operatingSystem": "macOS 14.0 or later (Sonoma & Sequoia, Universal Apple Silicon & Intel)",
        "applicationCategory": "UtilitiesApplication",
        "description": siteConfig.description,
        "featureList": [
          "Universal compatibility across MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Mac Pro",
          "Automatic macOS screenshot (⌘⇧3 / ⌘⇧4) capture to clipboard with Retina PNG optimization",
          "AES-256 hardware encryption backed by macOS Keychain master key",
          "Instant search-as-you-type in <40ms",
          "Multi-select clipboard items for bulk export (JSON / plain text) and deletion",
          "Snippet templating with dynamic variables ({date}, {time}, {clipboard})",
          "Zero telemetry, 100% offline, zero cloud servers",
          "Native Mac app with instant global hotkey (⌘⇧V)",
          "App exclusions for 1Password, Bitwarden, and private browsing",
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does Copy Limitless handle full screenshots taken with ⌘⇧3?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Whenever you take a screenshot on your Mac with ⌘⇧3 or ⌘⇧4, Copy Limitless automatically captures it, optimizes it for crisp Retina display quality with a compact file size, and adds it directly to your clipboard and history for instant pasting.",
            },
          },
          {
            "@type": "Question",
            "name": "Is my clipboard data private and encrypted?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every clipboard item payload is encrypted using hardware-accelerated AES-256 encryption. The master encryption key is generated locally and stored securely in your macOS Keychain. There are zero cloud servers, zero analytics, and zero network calls.",
            },
          },
          {
            "@type": "Question",
            "name": "How does Copy Limitless achieve sub-millisecond search performance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Copy Limitless features an ultra-fast local search engine. Search queries are processed in under 40 milliseconds directly on your Mac for instantaneous search-as-you-type results.",
            },
          },
          {
            "@type": "Question",
            "name": "Which Mac models are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Copy Limitless is compiled as a Universal 2 binary and runs natively on the entire Mac lineup: MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Mac Pro running macOS 14 Sonoma or macOS 15 Sequoia (Apple Silicon M1/M2/M3/M4 and Intel).",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-mac-dark text-slate-100 antialiased selection:bg-mac-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
