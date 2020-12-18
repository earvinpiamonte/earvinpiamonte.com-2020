const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      green: colors.emerald,
      blue: colors.blue,
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
