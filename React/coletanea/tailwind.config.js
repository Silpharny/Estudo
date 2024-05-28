/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F6511D',
        'green': '#05F5B5',
        'yellow': '#F5EB36'
      }
    },
  },
  plugins: [],
}