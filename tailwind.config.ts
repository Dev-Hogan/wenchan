import type { Config } from 'tailwindcss'
const sidebar = '#fafafa'
export const error = '#F55A35'
const border = '#f1f1f1'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        sidebar,
        error,
        primary: '#25cad2'
      },
      backgroundColor: {
        sidebar,
        default: '#fafafa',
        test: '#F55A35'
      },
      borderColor: {
        border,
        jj: '#F55A35'
      }
    }
  },

  plugins: []
}
export default config
