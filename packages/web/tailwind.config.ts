import type { Config } from 'tailwindcss'

const config: Config = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#000000',
        secondary: '#111111',
        button: '#FFFFFF',
      },
      textColor: {
        primary: '#FFFFFF',
        secondary: '#4CAFFF',
      },
      borderColor: {
        primary: '#333333',
        secondary: '#FFFFFF',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
