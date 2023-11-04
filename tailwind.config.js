/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        darkSlateGrey: 'hsl(234, 29%, 20%)',
        charcoalGrey: 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontSize: {
        '16': '16px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans'],
      },
      fontWeight: {
        '400': '400',
        '700': '700',
      },
    },
  },
  plugins: [],
}

