/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#577de0",
        "regal-blue-dark": "#4e71c9",
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
      fontSize:{
        '7.5xl':'5rem'
      },
      height: {
        '128': '34rem',
        '127': '29rem',
        '126': '24rem',
      }
    },
  },
  plugins: [],
};
