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
        "slide-in-bottom": "slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "fade-in": "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both"
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          to: {
            opacity: "1"
          }
        },
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(1000px)",
            opacity: "0"
          },
          to: {
            transform: "translateY(0)",
            opacity: "1"
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