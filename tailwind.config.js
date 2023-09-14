/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require('daisyui')],
  theme: {
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: ["light", "corporate"],
  },
};