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
        'music': '43% 30% 11% 10% 6%'
      },
      colors: {
        'lime': '#04D361',

        'lilac': '#8854e4',
        'lilac-light': '#9164FA',
        'lilac-border': '#9F75FF',

        'aPurple': '#41286f',
        'aPurple-light': '#52299e',
        'aPurple-border': '#553e80',

        'light-gray': '#f7f8fa',
      },
      gradientColorStopPositions: {
        99: '99%'
      },
    },
  },
  plugins: [],
}