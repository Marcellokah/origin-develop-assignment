/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F8F9FA",
        secondary: "#495057",
        tertiary: "#DDBEA9"
      }
    }
  },
  plugins: [],
};