/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'josef':["Josefin Sans", "sans-serif"],
        'lato':["Lato","sans-serif"]
      },
      colors: {
        primary: '#FB2E86',
        secondery: '#151875',
        paragraph: '#A9ACC6'
      },
      boxShadow: {
        topCategoryShadow: '-5px 8px 0px 0px #7F00FF',
        shadowArround: '5px 0px 20px 10px #F6F4FD'
      }
    },
  },
  plugins: [],
}