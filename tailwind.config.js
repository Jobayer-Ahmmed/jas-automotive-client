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
        textColor:"#d6d0c1",
  
      },
      spacing: {
        xPadding: "60px",
        myMargin: "70px",
        mtMargin: "30px",
      },

      fontFamily: {
        
      }


    },
  },
  plugins: [require("daisyui")],
}
