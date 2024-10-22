/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backblue:'#111B2C',
        boxblue:'#1B263B',
      },
      borderColor:{
        colorborder:'',
      },
      boxShadow:{
        GR:' 0px 5px 10px 0px #58C900'
      }
    },
  },
  plugins: [],
}

