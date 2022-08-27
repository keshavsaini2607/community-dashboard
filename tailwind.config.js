/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0445FE",
        "secondary": "#E3B799",
        "border": "#DDE1E5",
        "background": "#EFF0F6",
        "bgSecondary": "#C4DDFF",
        "textPrimary": "#4B7BE5"
      },
      fontFamily: {
        "Lato" : ['Lato', 'sans-serif'],
        "Aboreto" : ['Aboreto', 'cursive']
      }
    },
  },
  plugins: [],
}
