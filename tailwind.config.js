/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // for Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // for Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // example light/dark palette
        primary: {
          light: "#3b82f6", // blue-500
          dark: "#1e40af",  // blue-900
        },
        background: {
          light: "#ffffff",
          dark: "#1f2937", // gray-800
        },
        text: {
          light: "#111827", // gray-900
          dark: "#f3f4f6",  // gray-100
        },
      },
    },
  },
  darkMode: "class", // enable class-based dark mode
  plugins: [],
};