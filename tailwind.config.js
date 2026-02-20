/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#063aa4',
          50: '#e6eef8',
          100: '#ccddf1',
          200: '#99bbe3',
          300: '#4d7fd4',
          400: '#063aa4',
          500: '#063aa4',
          600: '#052e83',
          700: '#042362',
          800: '#031741',
          900: '#010c21',
        },
      },
      letterSpacing: {
        'heading': '-0.058em',
      },
      lineHeight: {
        'heading': '0.89',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}