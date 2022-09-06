/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        ecffBrown: "#810102",
        ecffSecondary: "#F3F1E7",
        footerBackgroundColor: "#590000",
        footerBackgroundColorDark: "#450000",
        textblack: "#242829",
        copyrightTextColor: "#D7D7D7",
      },
      height: {
        '128': '32rem',
        '150': '50rem',
      },
      width:{
        '102': '28rem',
      },
      blur: {
        xs: '2px',
      },
      backdropOpacity: {
        1: '.0001',
      }
    },
  },
  plugins: [],
}
