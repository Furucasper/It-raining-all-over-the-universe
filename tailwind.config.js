/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs:'8px',
      sm:'10px',
      base:'12px',
      lg:'14px',
      xl:'16px'
    },
    extend: {
      fontFamily: {
        season: ["mali", "season", "cursive"],
      },
    },
  },
  plugins: [],
}
