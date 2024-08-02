/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-200": "#EDEDED",
        "secondary-300": "#A6A6A6"
      }
    },
  },
  plugins: [],
}