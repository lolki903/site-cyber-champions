/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'acheter': '#F5BB2C',
        'backgroundlinear1': '#E8296233',
        'primary': '#0F1559',
        'rose':'#E82962',
        'vert':"#44DC4E"
    },
    fontFamily: {
      'sans':['Pally', 'sans-serif'],
      'serif':['Pally', 'serif'],
      'palmedium':['Pally', 'medium'],
      'palbold':['Pally', 'bold'],
  },
  lineHeight:{
    'extra-loose': '2.5',
    '19': '19px',
  },
  fontSize:{
    'labell': '11px',
    '3xs': '0.5rem',
    '4xs': '0.375rem',
  },
  width:{
    'img':' 668px',
    'adress':' 120%',
  },
  height:{
    'img':'494px',
  },
  plugins: [],
}
}
}
