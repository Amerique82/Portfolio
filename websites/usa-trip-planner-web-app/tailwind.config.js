/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef1ff', 100: '#dde3ff', 200: '#b3bcff', 300: '#8090ff',
          400: '#4d5ec8', 500: '#1a2d8a', 600: '#132070', 700: '#0e1858',
          800: '#0c1251', 900: '#0a1045',
        },
        accent: { 400: '#fb923c', 500: '#f97316', 600: '#ea580c' },
        sand: '#f5f0e8',
      },
      fontFamily: {
        heading: ['Trebuchet MS', 'sans-serif'],
        body: ['Calibri', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
