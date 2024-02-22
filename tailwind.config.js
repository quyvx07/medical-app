/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const COLOR_SYSTEM = {
  "ds-primary": {
    300: "#FFCC21",
    400: "#FF963C",
    500: "#EA6C00",
  },
  "ds-secondary": "#8FE9D0",
  "ds-dark": {
    500: "#414141",
    600: "#2E2E2E",
  },
  "ds-gray": "#777777",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "noto-sans-jp": ["var(--font-noto-sans-jp)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        ...colors,
        ...COLOR_SYSTEM,
      },
    },
  },
  plugins: [],
};
