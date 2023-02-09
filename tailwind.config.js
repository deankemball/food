/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#111111",
      accent: "#d8b4fe",
      light: "#f9fafb",
      alert: "#ff475a",
    },
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
  safelist: ["-translate-x-1/3", "translate-0", "translate-x-1/3"],
};
