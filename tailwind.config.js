/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        favorite:'#030d33',
      },
      fontFamily:{
        Roboto: ["roboto"]
      }
    },
  },
  plugins: [],
}

