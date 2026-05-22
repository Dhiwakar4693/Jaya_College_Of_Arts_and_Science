import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jaya: {
          cyan: "#00B4D8",
          blue: "#0077B6",
          navy: "#023E8A",
          orange: "#FF6B35",
          gold: "#FFB703",
          light: "#CAF0F8",
          cream: "#F8FAFC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 180, 216, 0.15), transparent)",
        "mesh-light":
          "linear-gradient(135deg, #F8FAFC 0%, #E0F7FA 50%, #FFF8F0 100%)",
      },
      boxShadow: {
        premium:
          "0 4px 24px -4px rgba(0, 119, 182, 0.08), 0 8px 48px -8px rgba(0, 180, 216, 0.12)",
        glow: "0 0 40px rgba(0, 180, 216, 0.25)",
        "glow-orange": "0 0 40px rgba(255, 107, 53, 0.2)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
