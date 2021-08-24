module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: '#2F61BF',
      grey400: '#A1A1AA',
      grey300: '#D4D4D8',
      grey600: '#52525B',
      grey700: '#3F3F46',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
