/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      minWidth: {
        '1/2': '50%',
        '3/4': '75%',
        btn: '120px',
      },
      minHeight: {
        '1/2': '50%',
        '3/4': '75%',
        btn: '120px',
      },
      fontSize: {
        homepage: '50px',
      },
      keyframes: {
        wiggle: {
          '0%, 7%': { transform: "rotateZ(0)" },
          '15%': { transform: 'rotatez(-15deg)' },
          '20%': { transform: 'rotatez(10deg)' },
          '25%': { transform: 'rotatez(-10deg)' },
          '30%': { transform: 'rotatez(6deg)' },
          '35%': { transform: 'rotatez(-4deg)' },
          '40%, 100%': { transform: 'rotatez(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s linear',
      },
    },
  },
  plugins: [],
};
