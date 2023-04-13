/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {

    extend: {
      colors: {
        'electric-indigo': '#1B0929',
        'highlight-menu-custom': '#4b226bbf',
        'highlight-menu-custom-2': '#4b226b',
        'gray-custom-1': '#888888',
        'gray-custom-2': '#D9D9D9'
      },
    },
  },
  plugins: [],
}

