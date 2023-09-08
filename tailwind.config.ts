import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      'primary': '#3a7bfd',
      'light-gray': '#fafafa',
      'light-blueish': '#e4e5f1',
      'light-grayish': '#d2d3db',
      'dark-grayish': '#9394a5',
      'darker-grayish': '#484b6a',
      'dark-blue':'#161722',
      'dark-desat-blue': '#25273c',
      'light-gray-blue': '#cacde8',
      'light-gray-blue-hover': '#e4e5f1',
      'dark-grayish-blue': '#777a92',
      'darker-grayish-blue': '#4d4f66',
      'darker-blue-gray': '#393a4c',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontSize: {
      'text-base':'18px',
    },
    fontFamily: {
      sans: ['var(--font-josefin)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'header-img': "url('/bg-desktop-dark.jpg')",
      }
    }
  },
  plugins: [],
}
export default config
