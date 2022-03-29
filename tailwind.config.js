module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#201715',
          background: '#FAFAFA',
          button: '#9C4626',
          cta: '#618CAC',
          softGrey: '#C4C4C4',
        },
      },
    },
    fontFamily: {
      primary: 'Work Sans, serif',
      secondary: 'Architects Daughter, serif',
      tertiary: 'Poppins, serif',
      urban: 'Urbanist, sans-serif',
    },
  },
  plugins: [],
}
