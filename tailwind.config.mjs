/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [
		require('daisyui')
	],
	daisyui: {
		themes:[{
			light:{
				...require("daisyui/src/theming/themes")["light"],
				primary: "#6535CD"
			}
		},{
			dark: {
				...require("daisyui/src/theming/themes")["dark"],
				primary: "#6535CD"
			}
		}]
	},
}
