/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        marker: ['var(--font-marker)'],
        monoton: ['var(--font-monoton)'],
        rubikglitch: ['var(--font-rubikglitch)'],
        bungeeshade: ['var(--font-bungeeshade)'],
      },
    },
  },
  plugins: [],
}


