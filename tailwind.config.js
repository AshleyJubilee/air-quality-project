/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./{html,js}", 
    './index.html'
  ],
  theme: {
    extend: {},
    container: {
      center: true
    }
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ['sunset', 'winter'],
    darkTheme: 'sunset'
  }
};

