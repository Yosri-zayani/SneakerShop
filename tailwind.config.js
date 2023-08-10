/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      opacity:{
        'focus':'0.4',
        'hover':'0.6',
        'focusLight':'1.6',
        'hoverLight' :'1.4',
      },
      colors: {
        'Lightgrayishblue': '#f7f8fd',
      },
      fontFamily: {
        'Kumbh Sanst': ['"Kumbh Sans"'],
      },
    },
  },
  plugins: [],
}

