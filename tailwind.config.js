/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      filter: {
        brightness: "brightness(var(--brightness))",
      },
    },
  },
  plugins: [],
};
