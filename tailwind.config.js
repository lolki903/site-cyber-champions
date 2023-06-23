/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    screens :{
      'mobile': {'max': '735px'}
    },
    extend: {
      colors: {
        'acheter': '#F5BB2C',
        'backgroundlinear1': '#E8296233',
        'primary': '#0F1559',
        'rose':'#E82962',
        'vert':"#44DC4E",
        'bluebase':"#02BFFF",
        'red':'#E82962'
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
    'img':' 70%',
    'adress':' 120%',
    'img2':' 40%',
  },
  height:{
    'img':'494px',
  },
  padding:{
    'screen':'100vh',
    '0.75':'0.7rem',
  },
  },
  plugins: [],
}
}
