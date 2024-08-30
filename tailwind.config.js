/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./js/*.js"],
  theme: {
    container: {
       center: true,
    },
    extend: {
       colors: {
          secondary: "#f0f0f0",
          black: "#212529",
       },
       keyframes: {
       shimmer: {
          '100' : {transform: 'translateX(100%)'}
       }
       }
    },
 },
 plugins: [],
};


