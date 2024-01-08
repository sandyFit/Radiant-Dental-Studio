/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      midnight: '#07224A',
      spaceCadet: '#1D345D', // Petroleum blue
      azure: '#0084FF', // vibrant blue
      spanishBlue: '#53B4DE', // jade blue
      oceanBlue: '#F0F6FF', 
      whiteBlue: '#E3EDFC', // white blueish
      fairBlue: '#CDDFFA',
      lightBlue: '#6B8ECD', // light blue
      white: '#F2F2F2',
      white2: '#F2F6FC',
      white3: '#E3EDFC',
      transparent: 'transparent',

    },

    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    }
  },
  plugins: [],
}

