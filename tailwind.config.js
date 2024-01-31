/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
        fontFamily:{
            'exo': ["'Exo 2', sans-serif"],
            'jost':["'Jost', sans-serif"],
        },
        colors: {
            orange: '#FF782D',
            gray: '#555555',
            lightgray: '#EAEAEA',
            footer: '#F5F5F5',
        },
        fontWeight: {
            med: '550',
    }
    }
  },
  plugins: [],
}

