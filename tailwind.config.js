/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-fwd-left": "slide-in-fwd-left 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-out-left": "slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both"
      },
      keyframes: {
        "slide-out-left": {
          "0%": {
            transform: "translateX(0)",
            opacity: "1"
          },
          to: {
            transform: "translateX(-1000px)",
            opacity: "0",
            display: "none"
          }
        },
        "slide-in-fwd-left": {
          "0%": {
            transform: "translateZ(-1400px) translateX(-1000px)",
            opacity: "0"
          },
          to: {
            transform: "translateZ(0) translateX(0)",
            opacity: "1"
          }
        }
      }
    },
  },
  plugins: [],
}