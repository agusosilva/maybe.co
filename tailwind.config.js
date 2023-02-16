/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem',
      },
    },
    extend: {
      colors:{
        'back-black':'#16161A',
        'borders-black':'#4B4F55',
        'back-black-medium':'#2C2D32',

      },
      fontFamily:{
        'ME Regular':"'Monument Extended Regular', sans-serif",
        'ME UltraBold':"'Monument Extended UltraBold', sans-serif",
        'Inter':"'Inter', sans-serif",
    }
    },
  },
  plugins: [],
}
