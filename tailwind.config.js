/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./static/*.{html,js}", 
    './index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ['sunset', 'winter'],
    darkTheme: 'sunset'
  }
};

