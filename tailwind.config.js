/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D2130",
        lightBlue: "#3ACAF8 ",
        blue: "#373FFF",
        white: "#FFFFFF",
        black: "#111111",
        rose: "#D798E126",
        violet: "#F0F2FE;",
        softBlue: "#6b7cff",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
