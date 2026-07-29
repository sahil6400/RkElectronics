

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A0E17",
          900: "#0E1420",
          800: "#161D2E",
          700: "#202A40",
          600: "#2E3A56",
        },
        copper: {
          50: "#FBF2EC",
          100: "#F4DFCC",
          300: "#E3AE83",
          400: "#D6935F",
          500: "#C77D4B",
          600: "#A9622F",
          700: "#824B25",
        },
        volt: {
          400: "#63E6A3",
          500: "#43CB86",
        },
        ink: {
          50: "#F5F6F8",
          100: "#E7E9ED",
          400: "#7C8394",
          600: "#4A5164",
          800: "#232838",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 2px 20px -4px rgba(14,20,32,0.08)",
        "card-hover": "0 12px 32px -8px rgba(199,125,75,0.28)",
        glow: "0 0 40px rgba(199,125,75,0.35)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(199,125,75,0.08), transparent)",
      },
      keyframes: {
        "trace-draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(67,203,134,0.5)" },
          "70%": { boxShadow: "0 0 0 14px rgba(67,203,134,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(67,203,134,0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "trace-draw": "trace-draw 2.2s ease-out forwards",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

module.exports = config;
