// const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './dist/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      height: {
        '128': '50rem',
      },
      width: {
        '128': '50rem',
      }
    },
  },
  plugins: [],
}
