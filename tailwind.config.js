/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const { SPACING, COLOR_SYSTEM } = require("./tailwind.constant");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hexagon": "url('/img/bg-hexagon.svg')",
      },
      fontFamily: {
        "noto-sans-jp": ["var(--font-noto-sans-jp)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        ...colors,
        ...COLOR_SYSTEM,
      },
      spacing: {
        ...SPACING,
      },
      fontSize: {
        "xs-10": ["1rem", "1.2rem"],
        xs: ["1.2rem", "1.6rem"],
        sm: ["1.4rem", "2rem"],
        base: ["1.6rem", "2.3rem"],
        lg: ["1.8rem", "2.6rem"],
        xl: ["2rem", "2.4rem"],
        "2xl": ["2.4rem", "3.2rem"],
        "3xl": ["3rem", "3.6rem"],
        "4xl": ["3.6rem", "4rem"],
        "5xl": ["4.8rem", 1],
        "6xl": ["6rem", 1],
        "7xl": ["7.2rem", 1],
        "8xl": ["9.6rem", 1],
        "9xl": ["12.8rem", 1],
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "794px",
        lg: "1240px",
        xl: "1652px",
      },
      borderRadius: {
        sm: ".2rem",
        DEFAULT: ".4rem",
        md: ".6rem",
        lg: ".8rem",
        xl: "1.2rem",
        "2xl": "1.6rem",
        "3xl": "2.4rem",
      },
    },
  },
  plugins: [],
};
