/** @type {import('tailwindcss').Config} */
import colors from './src/assets/theme/colors';
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        serif: 'serif',
      },
      height: {
        screen: '100dvh',
      },
      fontSize: {
        heading: '3.1rem',
        'sub-heading': '1rem',
        paragraph: '10px',
      },
      colors: {
        ...colors,
      },
      backdropBlur: {
        '2px': '2px',
      },
      keyframes: {
        moveBanner: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-40%)' },
        },
      },
      animation: { 'move-banner': 'moveBanner 10s linear infinite' },
    },
  },
  plugins: [],
};
