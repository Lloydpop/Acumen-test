/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav_color: "#9999BC",
        text_color: "#566BA0",
        secondary: "#EA8D51",
      },
    },
  },
  plugins: [],
};
