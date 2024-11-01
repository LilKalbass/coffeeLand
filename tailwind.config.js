/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px'
    },
    screens: {
      ph: '320px',
      pl: '460px',
      sm: '640px',
      tb: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1430px'
    },
    fontFamily: {
      primary: 'var(--font-cormorantUpright)',
      secondary: 'var(--font-openSans)'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#100e0e'
        },
        secondary: {
          DEFAULT: '#787f8a'
        },
        accent: {
          DEFAULT: '#c7a17a',
          hover: '#a08161'
        }
      },
      backgroundImage: {
        hero_overlay: 'url(/assets/hero/hero-overlay.png)',
        opening_hours: 'url(/assets/opening-hours/bg.png)',
        footer: 'url(/assets/footer/bg.png)'
      }
    },
  },
  plugins: [],
};
