import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        cartom: '15px -12px 0px 0px rgba(0,0,0,1)',
        'cartom-dark': '15px -12px 0px 0px rgba(99, 102, 241, 0.5)',
      },
      keyframes: {
        'rotation-break': {
          '0%': { transform: 'rotate(0)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'rotation-break': 'rotation-break 3s ease-in-out infinite alternate',
        'rotation-break-reverse':
          'rotation-break 3s ease-in-out infinite alternate-reverse',
      },
    },
  },
  plugins: [],
}
export default config
