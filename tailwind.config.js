/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.{js,jsx,ts,tsx}",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#081A51",
        "light-white":'rgba(255,255,255,0.18)'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light'],
  },

}