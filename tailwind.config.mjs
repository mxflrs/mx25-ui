/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				malinton: ['Malinton', 'sans-serif'],
			},
			colors: {
				'mx-dark': '#1E2028',
				'mx-blue': '#3D3E67',
				'mx-purple': '#904C6F',
				'mx-pink': '#FDBBFB',
				'mx-yellow': '#F0C8A8',
				'mx-lila': '#C1CCFA',
				'mx-sky': '#D9EAFF',
				'mx-light': '#FFF3E8'
			}
		},
	},
	plugins: [],
}
