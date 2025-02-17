/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      gridTemplateColumns: {
        'music': '43% 25% 11% 12% 9%',
        'music-small': '50% 27% 23%'
      },
      colors: {
        'lime': '#04D361',

        'lilac': '#8854e4',
        'lilac-light': '#9164FA',
        'lilac-border': '#9F75FF',

        'aPurple': '#41286f',
        'aPurple-light': '#52299e',
        'aPurple-border': '#553e80',

        'light-gray': '#E6E8EB',

        'font-dark': '#494D4B',
      },
      gradientColorStopPositions: {
        99: '99%'
      },
    },
  },
  plugins: [],
}