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
    },
  },
  plugins: [],
}
export default config
