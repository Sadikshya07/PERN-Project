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
        gray: "#f6f6f6",
      },
    },
  },
  plugins: [],
}
