/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fair: ['Playfair Display', 'sans-serif']
      },
      animation: {
        'bounce-up-down': 'bounceUpDown 2s infinite'
      },
      keyframes: {
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' }
        }
      }
    }
  },
  plugins: []
}
