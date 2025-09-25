module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./src/assets/**/*.html"],

  theme: {
    extend: {
      colors: {
        primary: "#FF7A3D", // warm orange
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    styled: true,
    base: true,
    utils: true,
  },
};
