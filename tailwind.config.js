/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        twitterLight: "#8DC6F0",
        twitter: "#1DA1F2",
        twitterDark: "#0A6EA8",
        qiita: "#55C500",
      },
    },
  },
  darkMode: "class",
  plugins: [require("windy-radix-palette")],
};
