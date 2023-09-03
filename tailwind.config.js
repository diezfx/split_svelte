/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#ebf2ff',
          '100': '#dae8ff',
          '200': '#bdd3ff',
          '300': '#95b6ff',
          '400': '#6b8aff',
          '500': '#4961ff',
          '600': '#2935ff',
          '700': '#1a21e0',
          '800': '#1b23b8',
          '900': '#1f2890',
          '950': '#121554',
        },

      }
    }
  },
  darkMode: 'class',
  plugins: [require('flowbite/plugin')]
};