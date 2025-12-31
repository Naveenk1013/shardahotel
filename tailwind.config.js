/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxurious spiritual color palette
        primary: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        spiritual: {
          navy: '#0f172a',
          deepBlue: '#1e293b',
          royalBlue: '#334155',
          cream: '#fef3c7',
          pureWhite: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        // Existing
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',

        // New premium animations
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        // Existing
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },

        // New premium keyframes
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(250, 204, 21, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(250, 204, 21, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-spiritual': 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(250, 204, 21, 0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(99, 102, 241, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(250, 204, 21, 0.2) 0px, transparent 50%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'luxury': '0 20px 60px -12px rgba(15, 23, 42, 0.25), 0 10px 25px -5px rgba(15, 23, 42, 0.15)',
        'luxury-lg': '0 30px 80px -12px rgba(15, 23, 42, 0.35), 0 15px 35px -5px rgba(15, 23, 42, 0.2)',
        'gold': '0 10px 40px -8px rgba(250, 204, 21, 0.3)',
        'inner-luxury': 'inset 0 2px 4px 0 rgba(15, 23, 42, 0.06)',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
}
