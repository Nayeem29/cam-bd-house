module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    mytheme: {
      primary: "#a991f7",
      secondary: "#f6d860",
      accent: "#37cdbe",
      neutral: "#3d4451"
    },
  },
  plugins: [require("daisyui")],
}
