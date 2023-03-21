/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'brand1': "url('./assets/brand1.webp')",
        'brand2': "url('./assets/brand2.webp')",

      }
    },
  },
  plugins: [],
}