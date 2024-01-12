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
        iden1: "#8758FF",
        iden2: "#BDCBFF",
        iden3: "#CFBDFF",
        pvColor: "#84cb9f",
        pvColor2: "#76b5c5",
        pvColor3: "#f7e7ce",
        pvColor4: "#aaaaaa",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Varsayılan padding değeri
          sm: "2rem", // Küçük ekranlarda padding
          lg: "4rem", // Büyük ekranlarda padding
          xl: "5rem", // Extra-large ekranlarda padding
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
