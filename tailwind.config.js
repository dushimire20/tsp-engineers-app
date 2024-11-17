/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#000000",      
        "secondary-100": "#4B9FED",
        "secondary-200": "#ffffff"        
        
      },

      fontFamily: {
        inter: ["Inter", "Satoshi Variable"],
        montserrat: ["Montserrat", "sans-serif"],
        geist: ["geist"]
      },

      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
  
      },
    },

  },
  plugins: [],
}