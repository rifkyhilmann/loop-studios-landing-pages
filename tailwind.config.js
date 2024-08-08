/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        darkGray: 'hsl(0, 0%, 55%)',
        veryDarkGray: 'hsl(0, 0%, 41%)',
      },
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}