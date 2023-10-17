/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: '#ae73c1',
				light: '#1adc2d',
				lightFrom: '#051937',
				lightTo: '#7a359f',
				dark: '#cd2128',
				darkFrom: '#000000',
				darkTo: '#2b2440',
				solo: '#ffff00'
			},
			borderColor: {
				purple: '#ae73c1',
				light: '#1adc2d',
				dark: '#cd2128',
				solo: '#ffff00'
			},
			boxShadow: {
				light: '0px 0px 16px 2px #1adc2d',
				dark: '0px 0px 16px 2px #cd2128',
				solo: '0px 0px 16px 2px #ffff00',
				pagination: '0px 0px 6px 2px #ffff00'
			},
			fill: {
				light: '#1adc2d',
				dark: '#cd2128',
				solo: '#ffff00'
			}
		}
	},
	plugins: []
}
