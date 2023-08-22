import type * as tailwindcss from 'tailwindcss'

const config: tailwindcss.Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
    colors:{
      'mainGreen': '#86C725',
      'secondBlue': '#212737'
    }
  },
  plugins: [],
}
export default config
