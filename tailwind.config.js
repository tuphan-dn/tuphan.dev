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
          primary: '#2B86FF',
          secondary: '#FFA42B',
        },
      },
      {
        dark: {
          ...daisyui['[data-theme=dark]'],
          primary: '#2B86FF',
          secondary: '#FFA42B',
        },
      },
    ],
  },
}
