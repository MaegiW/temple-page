/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        // DEFAULT:'15px'
      },
    },
    screens: {
      sm: { 'max': '640px' },//mobile 

      md: { 'max': '768px' },//tablet

      lg: { 'max': '1024px' },//laptop

      xl: { 'max': '1280px' },//desktop
    },

    fontSize: {
      ss: ['14px'],
      sm: ['16px'],
      base: ['18px'],
      lg: ['20px'],
      xl: ['24px'],
      xll: ['30px'],
      sxll: ['36px'],

    },
    extend: {
      colors: {


      }
    },
  },
  plugins: [],
}
