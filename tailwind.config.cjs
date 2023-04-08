/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animations: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        primary: "#808080",
        secondary: "#D3D3D3",
      },
      backgroundImage: {
        Main: "url('assets/mountain_river.jpg')",
        Signature: "url('assets/signature.jpeg')",
        Photographer: "url('assets/candid.jpeg')",
      },
    },
  },
  plugins: [],
};
