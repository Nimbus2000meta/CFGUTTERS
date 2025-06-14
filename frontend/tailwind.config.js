/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#1e3a8a', // Primary brand color - dark navy blue
          600: '#1e40af',
          700: '#1d4ed8',
          800: '#1e2656',
          900: '#0f172a', // Very dark navy
        },
        secondary: {
          50: '#e6f7f2',
          100: '#ccefe6',
          200: '#99dfcc',
          300: '#66cfb3',
          400: '#33bf99',
          500: '#00af80', // Secondary accent color
          600: '#008c66',
          700: '#00694d',
          800: '#004633',
          900: '#00231a',
        },
        neutral: {
          850: '#1a1a1a', // Near black
          50: '#f9f9f9', // Off-white
        },
        accent: {
          orange: '#ff6b35', // CTA highlight
          blue: '#1e3a8a', // Secondary highlight - dark navy
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem', // 72px
        '8xl': '6rem',   // 96px
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 40px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-overlay': 'linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(0, 175, 128, 0.8))',
      },
      backdropFilter: {
        'blur-sm': 'blur(12px)',
        'blur-md': 'blur(16px)',
        'blur-lg': 'blur(24px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};