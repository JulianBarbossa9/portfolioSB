/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg' : '#262626',
        'gray-1': '#BCB4B4',
        'deep-dark': '#1E1E1E',
        'gray-2': '#363636',
      },
      fontFamily: {
        'roboto' : ['Roboto Mono', 'monospace']
      },
      backgroundColor: {
        'custom-color': '#262626',
      },
    },
  },
  plugins: [],
  purge: ['./src/**/*.jsx'],
}

