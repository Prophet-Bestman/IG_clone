module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBtn: "#0095F6",
        primaryBtnHover: "#1196f7",
        text: "#262626",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
