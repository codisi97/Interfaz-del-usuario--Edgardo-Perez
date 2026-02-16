/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
    customRed: {
      150: "#ffe5e5",
      340: "#ff9a9a",
      530: "#ff4d4d",
      720: "#cc1f1f",
      910: "#4a0505",
    },
   },
   spacing: {
  72: "25rem",
   },
   screens: {
  "apple-watch": "352px",
  },
 },

  
  },
  plugins: [],
};

