/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nutral': '#243647', 
        'secondary': '#192732',
      },
    },
  },
  plugins: [],
}

