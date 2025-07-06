// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: '#efc603',
        cyber: {
          blue: {
            DEFAULT: '#00eaff', // bright neon blue
            dark: '#0a192f',   // deep navy blue
            light: '#1e2a3a',  // lighter blue for backgrounds
          },
          black: {
            DEFAULT: '#0a0a0a', // true black
            soft: '#18181b',    // soft black for backgrounds
          },
        },
        // Optionally override Tailwind's default colors for a more cyber look
        background: '#0a0a0a',
        primary: '#00eaff',
        secondary: '#1e2a3a',
        accent: '#0a192f',
      },
      keyframes: {
        typing: {
          '0%, 100%': {width: '0%'},
          '30%, 70%': {width: '100%'},
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
