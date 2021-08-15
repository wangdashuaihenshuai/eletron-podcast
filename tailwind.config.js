module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // caption uses the systemfont so it looks more native
      display: ['caption'],
      body: ['caption'],
    },
    extend: {
      colors: {
        primary: {
          100: '#590de3',
          200: '#590de3',
          300: '#590de3',
          400: '#590de3',
          500: '#590de3',
          600: '#590de3',
          700: '#590de3',
          800: '#590de3',
          900: '#590de3',
        },
      },
    },
  },
  variants: {
    outline: ['focus', 'hover'],
    border: ['focus', 'hover'],
  },
  plugins: [
  ]
}
