/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //this configuration modification is important otherwise toggle will not work
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [],
}