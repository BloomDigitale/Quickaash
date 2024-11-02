/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,css}", 
    "./index.html",
  ],
  theme: {
    fontFamily: {
      'satoshi': 'Satoshi-Regular, Satoshi-Medium, Satoshi-Bold',
    },

    extend: {
      backgroundImage: {
        'background-form1': "url('../images/form1.png')",
        'background-form2': "url('../images/form2.png')",
        'background-form3': "url('../images/form3.png')",
        'background-form4': "url('../images/form4.png')",
      }
    },
  },

 
  plugins: [],
}

