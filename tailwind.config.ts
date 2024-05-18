import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        smm: '320px',
      },
      backgroundImage: {
        'footer-bg': 'url(../assets/bg_footer.jpg)',
        'auth-bg': 'url(../assets/bg_auth.jpg)',
        'notFound-bg':
          'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
        'gradient-blue':
          'linear-gradient(to bottom, var(--gradient-blue), var(--gradient-transparent, rgba(255, 255, 255, 0)))',
        'gradient-ctt-immobile':
          'linear-gradient(175.71deg, #35373f 0, #535662 124.03%)',
      },
      borderRadius: {
        primary: '30% 0% 30% 0% / 30% 0% 30% 0%',
        secondary: '31% 0% 0% 0% / 21% 0% 0% 0%',
        notFound: '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
      fontSize: {
        title: 'clamp(1.4rem, 0.3043rem + 3.4783vw, 3rem);',
      },
      bg: {
        default: '#273444',
      },
      colors: {
        default: '#e2e8f0',
        gray: '#6b7280',
      },
      boxShadow: {
        custom: '0px 0px 10px 2px rgba(0,0,0,0.12)',
        blue: '0px 0px 10px 2px rgb(218,241,246)',
        zinc: '0px 0px 1px 1px #ced4da',
      },
      gridTemplateColumns: {
        footerp: 'repeat(3, minmax(50px, 1fr));',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      margin: {
        1.5: '10px',
      },
    },
    keyframes: {
      pulse: {
        '0%': { 'box-shadow': '0 0 0 0 rgba(37, 211, 101, 0.75)' },
        '100%': { 'box-shadow': '0 0 0 15px rgba(255, 255, 255, 0)' },
      },

      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      pulse: 'pulse 1.5s ease infinite',
      spin: 'spin 1.5s linear infinite',
    },
  },
  plugins: [],
};
export default config;
