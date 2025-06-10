/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CCFF',
          300: '#66B2FF',
          400: '#3399FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        secondary: {
          DEFAULT: '#00D4AA',
          50: '#E6FBF7',
          100: '#CCF7EF',
          200: '#99EFDF',
          300: '#66E7CF',
          400: '#33DFBF',
          500: '#00D4AA',
          600: '#00AA88',
          700: '#007F66',
          800: '#005544',
          900: '#002A22',
        },
        dark: {
          DEFAULT: '#0A0E27',
          50: '#E8E9EF',
          100: '#D1D3DF',
          200: '#A3A7BF',
          300: '#757B9F',
          400: '#474F7F',
          500: '#1A235F',
          600: '#151C4C',
          700: '#101539',
          800: '#0A0E26',
          900: '#050713',
        },
        light: {
          DEFAULT: '#F8F9FE',
          50: '#FFFFFF',
          100: '#F8F9FE',
          200: '#F1F3FD',
          300: '#EAEDFB',
          400: '#E3E7FA',
          500: '#DCE1F9',
          600: '#B0B4C7',
          700: '#848795',
          800: '#585A63',
          900: '#2C2D32',
        },
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};