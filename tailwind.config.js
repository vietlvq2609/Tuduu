/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '1/2': '50%',
        '3/4': "75%",
        'btn': "120px"
      },
      minHeight: {
        '1/2': '50%',
        '3/4': "75%",
        'btn': "120px"
      },
      fontSize: {
        'homepage': '50px'
      }
    },
  },
  plugins: [],
}