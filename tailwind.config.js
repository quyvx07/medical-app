/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
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
        hexagon: "url('/img/bg-hexagon.svg')",
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
        "xs-5": ["0.5rem", "0.7rem"],
        "xs-10": ["1rem", "1.2rem"],
        "xs-11": ["1.1rem", "1.6rem"],
        xs: ["1.2rem", "2rem"],
        sm: ["1.4rem", "2rem"],
        "sm-15": ["1.5rem", "1.8rem"],
        base: ["1.6rem", "2.3rem"],
        lg: ["1.8rem", "2.2rem"],
        xl: ["2rem", "2.4rem"],
        "xl-22": ["2.2rem", "2.7rem"],
        "2xl": ["2.4rem", "3.2rem"],
        "2xl-25": ["2.5rem", "3rem"],
        "3xl": ["3rem", "3.6rem"],
        "4xl": ["3.6rem", "4rem"],
        "5xl": ["4.8rem", 1],
        "6xl": ["6rem", 1],
        "7xl": ["7.2rem", 1],
        "8xl": ["9.6rem", 1],
        "9xl": ["12.8rem", 1],
      },
      screens: {
        "xs-max": { max: "480px" },
        "sm-max": { max: "640px" },
        "md-max": { max: "768px" },
        "lg-max": { max: "1024px" },
        "xl-max": { max: "1280px" },
        xs: "480px",
        sm: { min: "481px", max: "640px" },
        md: { min: "641px", max: "768px" },
        lg: { min: "769px", max: "1024px" },
        xl: { min: "1025px", max: "1280px" },
        "2xl": { max: "1281px" },
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
  daisyui: {
    themes: [
      {
        light: {
          "--main-background": "#ffffff",
        },
      },
    ],
  },
  plugins: [daisyui, require("tailwind-scrollbar")],
};
