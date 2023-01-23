/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'butler': ['Butler', 'sans-serif'],
        'grotest': ['HK Grotesk', 'sans-serif']
      },
      fontSize: {
        9: '9px',
        13: '0.813rem',
        28: '1.75rem',
        30: '1.875rem',
        40: '2.5rem',
        60: '3.75rem',
      },
      maxWidth: {
        '1440': '90rem',
        '400': '25rem'
      },
      colors: {
        'brand-black': '#111111',
        'brand-purple': '#878BFD',
        'brand-gray': '#f0f0f0',
      },
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        'girl-texture': "url('../image/')",
      },
      borderRadius: {
        '400': '25rem',
        'sm': '0.125rem',
      },
      spacing: {
        30: '1.875rem',
        // 400: "25rem",
        61: "3.75rem",
      },
      rotate: {
        'full': '360deg',
      }

    },


  },
  plugins: [],
}
