module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '940px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
        antonio: ['Antonio'],
      },
      letterSpacing: {
        widest: '.3em',
      }
    },
  },
  plugins: [],
}
