/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        protestGuerrilla:["Protest Guerrila", "sans-serif"],
        montserrat:["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ff8901",
        secondary: "#fb923c",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "4rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};