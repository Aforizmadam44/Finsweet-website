/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D2130",
        white: "#FFFFFF",
        black: "#111111",
        rose: "#D798E126",
        violet: "#F0F2FE;",
      },
    },
  },
  plugins: [],
};
