import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1F3A",
          DEFAULT: "#1A3A5C",
          medium: "#1E6FA5",
          light: "#E8F1F8",
        },
        signal: {
          momentum: "#1B6B4E",
          "momentum-bg": "#EBF5F0",
          opportunity: "#1A5A8B",
          "opportunity-bg": "#E8F1F8",
          risk: "#8B1E3F",
          "risk-bg": "#F5E8ED",
          action: "#7A4A00",
          "action-bg": "#FDF3E3",
        },
        evidence: {
          official: "#1B6B4E",
          "official-bg": "#EBF5F0",
          modeled: "#1A5A8B",
          "modeled-bg": "#E8F1F8",
          illustrative: "#7A4A00",
          "illustrative-bg": "#FDF3E3",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
