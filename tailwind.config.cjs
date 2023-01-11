/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#081229",
          90: "#191D3A",
        },
        secondary: {
          100: "#ec5990",
        },
      },
    },
  },
  plugins: [],
};
