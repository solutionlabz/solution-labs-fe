/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
   theme: {
    extend: {
      backgroundImage: {
        "ebube": "url('src/assets/ebube.svg')",
        "ssebube": "url('src/assets/ssebube.svg')",
      },
      fontFamily: {
      skmodern: 'SkModernist',
      },
    }
  },
  plugins: [],
}