/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,html}"],

  theme: {
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FD5631",
        primaryHover: "#FD370C",
        accent: "#5D3CF2",
        success: "#07C98B",
        danger: "#F23C49",
        warning: "#FDBC31",
        info: "#3C76F2",
      },

      boxShadow: {
        small:
          "0px 4px 12px 0px rgba(31, 27, 45, 0.08), 0px 2px 2px -2px rgba(31, 27, 45, 0.08)",
        default:
          "0px 4px 16px 0px rgba(31, 27, 45, 0.12), 0px 2px 8px -4px rgba(31, 27, 45, 0.12)",
        large:
          "0px 8px 16px 0px rgba(31, 27, 45, 0.16), 0px 4px 12px -6px rgba(31, 27, 45, 0.20)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
