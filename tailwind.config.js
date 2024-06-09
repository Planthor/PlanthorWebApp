/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'blue': {
          100: "#DAECFF",
          200: "#b6daff",
          400: "#3399FF",
          500: "#007FFF",
          600: "#0072E5",
          900: "#003A75",
        }
      }
    },
  },
  plugins: [],
}