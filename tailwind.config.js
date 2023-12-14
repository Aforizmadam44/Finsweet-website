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
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
