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
        textwhite:'#FFFFFF',
        bordercolor:'58C900',
      },
    },
  },
  plugins: [],
}

