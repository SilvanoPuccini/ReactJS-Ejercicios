/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js_ejercicio_*.html",
    "./src/js/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "neon-cyan": "#38f9ff",
        "neon-pink": "#ff4fd8",
        "space-blue": "#0b1026",
        "space-purple": "#1e144d"
      },
      boxShadow: {
        glow: "0 0 25px rgba(56, 249, 255, 0.25)",
        neon: "0 0 35px rgba(255, 79, 216, 0.35)"
      }
    }
  },
  plugins: []
};
