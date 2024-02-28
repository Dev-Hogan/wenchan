/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: 'rgb(var(--color-theme) / <alpha-value>)',
        'theme-10': 'rgb(var(--color-theme-10) / <alpha-value>)',
        'theme-15': 'rgb(var(--color-theme-15) / <alpha-value>)',
        'theme-20': 'rgb(var(--color-theme-20) / <alpha-value>)',
        'theme-40': 'rgb(var(--color-theme-40) / <alpha-value>)',
        'theme-60': 'rgb(var(--color-theme-60) / <alpha-value>)',
        'theme-80': 'rgb(var(--color-theme-80) / <alpha-value>)',

        light: 'rgb(var(--color-light-1) / <alpha-value>)',
        'light-2': 'rgb(var(--color-light-2) / <alpha-value>)',
        'light-3': 'rgb(var(--color-light-3) / <alpha-value>)',
        'light-4': 'rgb(var(--color-light-4) / <alpha-value>)',
        'light-5': 'rgb(var(--color-light-5) / <alpha-value>)',
        'light-6': 'rgb(var(--color-light-6) / <alpha-value>)',
        'light-7': 'rgb(var(--color-light-7) / <alpha-value>)',

        base: 'rgb(var(--color-base) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        link: 'rgb(var(--color-link) / <alpha-value>)',
        tag: 'rgb(var(--color-tag) / <alpha-value>)',
        delete: 'rgb(var(--color-delete) / <alpha-value>)',
        iconsel: 'rgb(var(--color-iconsel) / <alpha-value>)',
        masked: 'rgb(var(--color-masked) / <alpha-value>)'
      },
      spacing: {
        1: '2px',
        2: '4px',
        3: '6px',
        4: '8px',
        5: '10px',
        6: '12px',
        7: '14px',
        8: '16px',
        9: '18px'
      },
      borderRadius: {
        s: '4px',
        m: '8px'
      },
      fontSize: {
        s: '11px',
        m: '13px'
      }
    }
  },
  plugins: []
}
