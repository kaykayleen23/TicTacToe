/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        albert: ['Albert Sans'],
        barlow: ['Barlow']
      },
    },
  },
  plugins: [],
}

