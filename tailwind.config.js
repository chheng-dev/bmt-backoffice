/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'success': { DEFAULT: '#42BA96', '50': '#C8ECE1', '100': '#B9E6D9', '200': '#9BDBC8', '300': '#7DD1B8', '400': '#5FC6A7', '500': '#42BA96', '600': '#339175', '700': '#256753', '800': '#163E32', '900': '#071410' },
      }
    },
  },
  plugins: [],
}
