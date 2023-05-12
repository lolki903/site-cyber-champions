/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'acheter': '#F5BB2C',
        'backgroundlinear1': '#E8296233',
        'primary': '#0F1559',
        'rose':'#E82962'
    },
    fontFamily: {
      'sans':['Pally', 'sans-serif'],
      'serif':['Pally', 'serif'],
      'palmedium':['Pally', 'medium'],
      'palbold':['Pally', 'bold'],
  },
  plugins: [],
}
}
}
