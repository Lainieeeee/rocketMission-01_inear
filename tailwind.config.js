/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {

      // colors
      colors: {
        black: "#000000",   // 編輯
        dark:  "#404040",   // 編輯
        primary: "#2B2B2B", // 編輯
        silver: "#ACACAC",  // 編輯
      },

    },
  },
  plugins: [],
}

