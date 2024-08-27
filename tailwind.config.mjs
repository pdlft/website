/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				foreground: "#FAF5E1",
				primary: "#FF6E1F",
				light: "#F5E5C4",
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
}
