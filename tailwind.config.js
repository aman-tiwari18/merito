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
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

    },
    animation :{
      fade : 'slide_down_out_in_1s_ease_in_out'
    }
  },
  plugins: [],
}