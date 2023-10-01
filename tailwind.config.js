import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./{pages,renderer,components,src}/**/*.{html,js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				ppneue: ['"PPNeueMontreal"', ..._fontFamily.sans],
			},
			fontWeight: {
				thin: 100,
				normal: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/container-queries"),
	],
};
