/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				mainBlue: '#000F27',
				secondBlue: 'rgba(0, 15, 39, 0.7)',
				mainGreen: '#82A81C',
				mainBg: '#ECE8E1',
				mainWhite: '#FFFFFF'
			}
		}
	},
	plugins: []
};
