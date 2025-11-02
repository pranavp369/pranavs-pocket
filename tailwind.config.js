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
        rougescript: ['var(--font-rougescript)'],
      },
      typography: {
        pocket: {
          css: {
            color: "#f0f0f0",
            h1: { color: "#fb7185" },
            a: { color: "#93c5fd" },
          },
        },
        about: {
          css: {
            color: "#d1fae5",
            h1: { color: "#34d399" },
            p: { color: "#a7f3d0" },
            a: { color: "#6ee7b7" },
          },
        },
        projects: {
          css: {
            color: "#f5d0fe",
            h1: { color: "#d946ef" },
            a: { color: "#e879f9" },
          },
        },
        photography: {
          css: {
            color: "#e0f2fe",
            h1: { color: "#38bdf8" },
            p: { color: "#bae6fd" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}