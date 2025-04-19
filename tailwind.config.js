/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { Primary: "#F5B400", secondary: "#1C1C20" },
      backgroundImage: { hero: "url('/src/assets/images/hero.jpg')" },
    },
  },
  plugins: [],
};
