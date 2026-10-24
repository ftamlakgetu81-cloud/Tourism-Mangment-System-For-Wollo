/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wolloGreen: '#1a5d38',
        wolloDarkGreen: '#0f3b23',
        wolloYellow: '#f59e0b',
        wolloLightBg: '#f8fafc',
      },
    },
  },
  plugins: [],
}