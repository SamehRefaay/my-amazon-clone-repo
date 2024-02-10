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
			keyframes: {
				moveBgtoLeft: {
					'0%': {
						transform: 'translateX(-100%)',
					},
					'80%': {
						transform: 'translateX(-50%)',
					},
					'100%': {
						transform: 'translateX(0%)',
					},
				},
			},
			animation: {
				fromLeftToRight: 'moveBgtoLeft 5s ease-in-out ',
			},
		},
	},
	plugins: [require('tailwind-gradient-mask-image')],
};
