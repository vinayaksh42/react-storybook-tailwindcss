module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: '#2F61BF',
      grey400: '#A1A1AA',
      grey300: '#D4D4D8',
      grey600: '#52525B',
      grey700: '#3F3F46',
      hr: '#52525B',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
