import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#0ea5e9', // sky-500
          'primary-content': '#e0f2fe', // sky-100
          secondary: '#0f172a', // slate-900
          'secondary-content': '#f1f5f9', // slate-100
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#0ea5e9', // sky-500
          'primary-content': '#e0f2fe', // sky-100
          secondary: '#f1f5f9', // slate-100
          'secondary-content': '#0f172a', // slate-900
        },
      },
    ],
  },
}

export default config
