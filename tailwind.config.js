/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF3A43',
        'dark-gray': '#686868',
        'black-text': '#1e1e1e',
        'light-gray': '#525252',
        'input-color': '#e9e9e9',
      },
    },
  },
  plugins: [],
}
