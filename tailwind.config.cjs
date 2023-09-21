/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#495057",
        secondary: "#212529",
        tertiary: "#DDBEA9",
        background: "#F8F9FA",
        buttons_bg: "#5E5E5E0D",
        paragraph: "#6C757D",
        border: "#C4C4C4",
      }
    }
  },
  plugins: [],
};