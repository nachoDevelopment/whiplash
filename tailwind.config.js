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
