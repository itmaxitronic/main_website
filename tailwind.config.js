/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy:   { 950: '#081426', 900: '#0D2340', 800: '#13315A', 700: '#1B3A63' },
        steel:  { 300: '#C3D0E3', 400: '#93A7C4', 500: '#6B7F9E' },
        amber:  { brand: '#FFB224', brandDark: '#E69500' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"IBM Plex Sans Arabic"', 'sans-serif'],
        body:    ['Inter', '"IBM Plex Sans Arabic"', 'sans-serif'],
      },
    },
  },
};
