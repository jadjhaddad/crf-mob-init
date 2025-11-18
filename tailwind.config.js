const colors = require("./resources/colors/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        regular: ['Karla-Regular'],
        medium: ['Karla-Medium'],
        semibold: ['Karla-SemiBold'],
        bold: ['Karla-Bold'],
        light: ['Karla-Light'],
        italic: ['Karla-Italic'],
      },
    },
  },
  plugins: [],
};
