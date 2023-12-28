/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'adt-green': '#2f7f59',

        'theme-shade-1': '#dad7cd',
        'theme-shade-2': '#a3b18a', //->aqua
        'theme-shade-3': '#588157', //->gold
        'theme-shade-4': '#3a5a40', //->orange
        'theme-shade-5': '#344e41', //-
      },
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
        'ibm-sans': ['IBM Plex Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

