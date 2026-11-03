import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          card: "var(--bg-card)",
        },
        border: {
          subtle: "var(--border-subtle)",
          prominent: "var(--border-prominent)",
        },
        content: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          terracotta: {
            DEFAULT: "var(--accent-terracotta)",
            hover: "var(--accent-terracotta-hover)",
            bg: "var(--accent-terracotta-bg)",
            text: "var(--accent-terracotta-text)",
          },
          coral: {
            DEFAULT: "var(--accent-coral)",
            bg: "var(--accent-coral-bg)",
            text: "var(--accent-coral-text)",
          },
          violet: {
            DEFAULT: "var(--accent-violet)",
            bg: "var(--accent-violet-bg)",
            text: "var(--accent-violet-text)",
          },
          yellow: {
            DEFAULT: "var(--accent-yellow)",
            bg: "var(--accent-yellow-bg)",
            text: "var(--accent-yellow-text)",
          },
          cyan: {
            DEFAULT: "var(--accent-cyan)",
            bg: "var(--accent-cyan-bg)",
          },
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        "pulse-slow": "pulseSlow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
