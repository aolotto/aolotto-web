/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#6535CD',
				'primary-content': '#DEC9FF',
				'base-100': '#E2E2E2',
				'base-content': '#000000'
			},
		},
	},
	plugins: [],
}
