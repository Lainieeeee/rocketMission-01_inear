/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {

      // colors
      colors: {
        black: "#000000", // 編輯
        dark:  "#404040", // 編輯
      },

    },
  },
  plugins: [],
}

