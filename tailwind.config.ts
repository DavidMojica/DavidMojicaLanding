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
        blue_dark:'#0D1B2A'
      }
    },
    
  },
  plugins: [],
};
export default config;
