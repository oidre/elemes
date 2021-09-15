module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#8BAC3E',
        'primary-light': '#A4B441',
        category: {
          1: '#EFFBEB',
          2: '#E6F3F5',
          3: '#EAEEFA',
          4: '#F9EEF3',
          5: '#F3F7D9',
        },
      },
      backgroundImage: {
        'card-pattern': "url('/images/card-pattern.svg')",
      },
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
