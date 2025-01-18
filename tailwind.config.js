/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'bower': ["Bower"],
    },
    extend: {
      animation: {
        'smoothBg': 'smoothBg 60s linear infinite',
      },
      keyframes: {
        smoothBg: {
          'from': {
            backgroundPosition: '50% 50%, 50% 50%'
          },
          'to': {
            backgroundPosition: '350% 50%, 350% 50%'
          }
        }
      }
    }
    
  },
  plugins: [],
}