/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#505050'
        },
        blue: {
          main: '#0B75FF',
          50: '#55BDC4'
        }
      }
    },
  },
  plugins: [],
}
