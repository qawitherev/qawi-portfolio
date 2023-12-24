/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'adt-green': '#2f7f59',
      },
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
        'ibm-sans': ['IBM Plex Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

