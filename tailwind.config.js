/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#003014",
        secondary: "#F2F2F2",
        light: {
          100: "#F9F9F9",
          200: "#E5E5E5",
          300: "#D1D1D1",
        },
        dark: {
          100: "#1A1A1A",
          200: "#333333",
          300: "#4D4D4D",
        },
        accent: "#AB8BFF",
      },
    },
  },
  plugins: [],
};
