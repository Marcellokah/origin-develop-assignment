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
        paragraph: "#6C757D"        
      }
    }
  },
  plugins: [],
};