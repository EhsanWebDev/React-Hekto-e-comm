module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "hekto-pink": {
          DEFAULT: "#FB2E86"
        },
        "hekto-red": {
          DEFAULT: "#FB2448"
        },
        "hekto-blue": {
          DEFAULT: "#2F1AC4",
          dark: '#151875',
          light: '#3F509E',
        },
        "hekto-purple": {
          DEFAULT: "#7E33E0",
          light: '#E0D3F5'
        },
      },
      fontFamily: {
        jose: 'Josefin Sans',
        lato: 'Lato'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
