/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#FAFAF8',
        'brand-surface': '#FFFFFF',
        'brand-dark': '#0D0D0D',
        'brand-dark-surface': '#1A1A1A',
        'brand-dark-accent': '#262626',
        'brand-text': '#1A1A1A',
        'brand-muted': '#6B6B6B',
        'brand-accent': '#1DB976',
        'brand-accent-light': '#E6F7F0',
        'brand-accent-warm': '#C4956A',
        'brand-border': '#E5E5E0',
        'brand-border-dark': '#333333',
      },
      fontFamily: {
        'serif': ['"Instrument Serif"', 'serif'],
        'sans': ['"Neue Haas Display"', 'DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
