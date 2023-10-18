/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        deepGray:"#252523",
  
      },
      spacing: {
        xPadding: "60px"
      },

      fontFamily: {
        
      }


    },
  },
  plugins: [require("daisyui")],
}
