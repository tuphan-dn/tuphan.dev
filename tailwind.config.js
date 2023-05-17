/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui/src/colors/themes')

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyui['[data-theme=light]'],
          primary: '#1bf1bb',
          secondary: '#4f3cc9',
        },
      },
      {
        dark: {
          ...daisyui['[data-theme=dark]'],
          primary: '#1bf1bb',
          secondary: '#4f3cc9',
        },
      },
    ],
  },
}
