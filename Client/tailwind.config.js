/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js, ts, vue, jsx}", 
    "./src/**/*"
  ],
  theme: {
    extend: {
      colors: {
        primary : '#9DF578',
        primaryLight: '#C9F8D2',
        primaryBold : '#33860F',
        gray :'rgb(51 65 85)',
      }
    },
  },
  plugins: [],
}

