/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#808080",
        secondary: "#D3D3D3",
      },
      backgroundImage: {
        Main: "url('assets/mountain_river.jpg')",
        Signature: "url('assets/signature.jpeg')",
      },
    },
  },
  plugins: [],
};
