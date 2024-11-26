/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: "#1E40AF", // Custom Blue
          300: "#3B82F6", // Light Blue
        },
      },
    },
  },
  plugins: [],
}
