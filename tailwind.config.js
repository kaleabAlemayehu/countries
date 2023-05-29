/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondaryColor: "#3F5C78",
        primaryColor: "#34495E",
      },
    },
  },
  plugins: [],
};
