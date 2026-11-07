import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mac: {
          dark: "#0d0f12",
          card: "#15181e",
          border: "#242933",
          accent: "#3b82f6",
          accentHover: "#2563eb",
          cyan: "#06b6d4",
          purple: "#8b5cf6",
          emerald: "#10b981",
          amber: "#f59e0b",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "SF Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "Courier New",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(59, 130, 246, 0.25)",
        glowCyan: "0 0 35px -5px rgba(6, 182, 212, 0.25)",
        glowPurple: "0 0 35px -5px rgba(139, 92, 246, 0.25)",
        macWindow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;

