/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Lato'", "sans-serif"],
        display: ["'Black Ops One'", "sans-serif"],
        voice: ["'Vollkorn'", "serif"],
      },
      colors: {
        primary: "#FFD400",
        secondary: "#3482B9",
        positive: "#49C04A",
        negative: "#D03930",
        neutral: "#AAA",
        light: "#ABE0F9",
        muted: "#EAEAEA",
        hotpink: "#FC8BA4",
        black: "#333",
        white: "#FFF",
        gray: "#CCC",
        dark: "#666",
        shadow: "rgba(0, 0, 0, 0.4)",
      },
      spacing: {
        board: "1072.16px",
      },
    },
  },
  plugins: [require("daisyui")],
};
