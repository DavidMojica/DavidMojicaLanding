import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        britanica: ['britanica', 'sans-serif']
      },
      fontWeight:{
        extralight:'200',
        light:'300',
        normal:'400',
        bold:'700',
        bolder:'900',
      },
      colors:{
        primary:'#050A10',
        secondary: '#6B7D90',
        tertiary: '#D5E0EC',
        bgdarkless: '#08121D',
        bgdark:'#0D1B2A',
        muted: '#EAEFF5'
      },
      spacing:{
        HiddenSidebar: '400px',
        '1/5':'20%',
        '22': '5.5rem',
        '68': '17rem',
        '90': '22.5rem',
        '124': '31rem',
        '136': '34rem'
      },
      borderRadius: {
        '100': '100px',
        '200': '200px'
      }
    },
    
  },
  plugins: [],
};
export default config;
