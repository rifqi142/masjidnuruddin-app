/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
          20: "#d6d6d6",
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
          90: "#AE9C4C",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/pattern-bg.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
