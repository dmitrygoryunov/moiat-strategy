import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Restore Tailwind defaults — the DLS plugin replaces theme.colors entirely
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
    },
    extend: {
      colors: {
        // ── Semantic tokens mapped to DLS CSS variables (600 as basis) ──
        brand: {
          navy: "var(--color-aeblack-900)",      // #1B1D21
          DEFAULT: "var(--color-aeblack-700)",    // #3E4046
          medium: "var(--color-seablue-600)",     // #0090D4
          light: "var(--color-whitely-200)",      // #F7F7F7
          gold: "var(--color-aegold-600)",        // #92722A
        },
        signal: {
          momentum: "var(--color-aegreen-600)",
          "momentum-bg": "var(--color-aegreen-50)",
          opportunity: "var(--color-seablue-600)",
          "opportunity-bg": "var(--color-seablue-50)",
          risk: "var(--color-aered-600)",
          "risk-bg": "var(--color-aered-50)",
          action: "var(--color-camel-600)",
          "action-bg": "var(--color-camel-50)",
        },
        evidence: {
          official: "var(--color-aegreen-600)",
          "official-bg": "var(--color-aegreen-50)",
          modeled: "var(--color-seablue-600)",
          "modeled-bg": "var(--color-seablue-50)",
          illustrative: "var(--color-camel-600)",
          "illustrative-bg": "var(--color-camel-50)",
        },
        // ── Expose the full DLS palette for direct use ──
        aegold: {
          50: "var(--color-aegold-50)",
          100: "var(--color-aegold-100)",
          200: "var(--color-aegold-200)",
          300: "var(--color-aegold-300)",
          400: "var(--color-aegold-400)",
          500: "var(--color-aegold-500)",
          600: "var(--color-aegold-600)",
          700: "var(--color-aegold-700)",
          800: "var(--color-aegold-800)",
          900: "var(--color-aegold-900)",
          950: "var(--color-aegold-950)",
        },
        aeblack: {
          50: "var(--color-aeblack-50)",
          100: "var(--color-aeblack-100)",
          200: "var(--color-aeblack-200)",
          300: "var(--color-aeblack-300)",
          400: "var(--color-aeblack-400)",
          500: "var(--color-aeblack-500)",
          600: "var(--color-aeblack-600)",
          700: "var(--color-aeblack-700)",
          800: "var(--color-aeblack-800)",
          900: "var(--color-aeblack-900)",
          950: "var(--color-aeblack-950)",
        },
        seablue: {
          50: "var(--color-seablue-50)",
          600: "var(--color-seablue-600)",
          700: "var(--color-seablue-700)",
        },
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "sans-serif"],
        heading: ["Inter", "Helvetica Neue", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Roboto", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "sans-serif"],
      },
      fontSize: {
        // DLS responsive body sizes
        "body-base": ["1rem", { lineHeight: "1.5rem" }],         // 16px
        "body-lg": ["1.125rem", { lineHeight: "1.5rem" }],       // 18px
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@aegov/design-system"),
  ],
};

export default config;
