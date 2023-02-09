/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: "#D8743A",
        blue: "#2E5F96",
        black: "#000000",
        offWhite: "#FCFCFC",
        green: "#429859",
        gray: "#f6f6f6",
        darkGray: "#e3e2e2",
      },
    },
  },
  plugins: [],
}
