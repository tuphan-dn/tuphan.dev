/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui/src/theming/themes')

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-home': "url(/panel_light.jpg')",
        'dark-home': "url('/panel_dark.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyui['[data-theme=light]'],
          primary: '#2B86FF',
          'primary-content': '#ffffff',
          secondary: '#FFA42B',
          'secondary-content': '#000000',
        },
      },
      {
        dark: {
          ...daisyui['[data-theme=dark]'],
          primary: '#2B86FF',
          'primary-content': '#ffffff',
          secondary: '#FFA42B',
          'secondary-content': '#000000',
        },
      },
    ],
  },
}
