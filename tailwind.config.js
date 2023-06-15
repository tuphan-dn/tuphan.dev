/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui/src/theming/themes')

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/container-queries'), require('daisyui')],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2400px',
      },
      containers: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2400px',
      },
    },
  },
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
