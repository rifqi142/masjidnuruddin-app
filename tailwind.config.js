/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    ".src/pages/**/*.{js,jsx}",
    ".src/components/**/*.{js,jsx}",
    ".src//app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        green: {
          10: "#C5FCEE",
          15: "#009855",
          20: "#4EAF9B",
          25: "#047C6A",
          30: "#007A68",
          50: "#00716D",
          70: "#00676D",
          90: "#145C6A",
          100: "#255262",
          120: "#2F4858",
        },
        gray: {
          10: "#EEEEEE",
          15: "#f5f5f5",
          20: "#D3D3D3",
          25: "#8f8f8f",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        dark: {
          30: "#2B2B2B",
          50: "#222831",
          70: "#121413",
          100: "#000000",
        },
        orange: {
          25: "#FFA17A",
          50: "#FF814C",
        },
        blue: {
          70: "#021639",
        },
        yellow: {
          30: "#ffc720",
          50: "#F1EFBE",
          60: "#FFC107",
          70: "#F9CC6C",
          80: "#846d35",
          90: "#AE9C4C",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
