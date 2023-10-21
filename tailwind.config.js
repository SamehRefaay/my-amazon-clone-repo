/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				'primary-blue': '#232f3e',
				'karamel-light': '#febd69',
				'karamel-dark': '#f09104',
			},
		},
	},
	plugins: [require('tailwind-gradient-mask-image')],
};
