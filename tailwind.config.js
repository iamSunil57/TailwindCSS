/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    // "./index.html", //Specifically include your root index.html
    "./*.{html,js}", //To include all file with html and js extension
    //Somewhere it just works with '*.{html,js}' if files are in root directory
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "serif"],
      },
      animation: {
        rotating: "rotating 5s linear infinite",
      },
      keyframes: {
        rotating: {
          " 0% ": { transform: "rotate(0.0deg)" },
          " 25% ": { transform: "rotate(90deg)" },
          " 50% ": { transform: "rotate(180deg)" },
          " 75% ": { transform: "rotate(270deg)" },
          " 100% ": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
