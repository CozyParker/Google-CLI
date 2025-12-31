/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563eb",
          foreground: "#f8fafc"
        },
        muted: {
          DEFAULT: "#f8fafc",
          foreground: "#475569"
        }
      },
      borderRadius: {
        xl: "1rem"
      }
    }
  },
  plugins: []
};
