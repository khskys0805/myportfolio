// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				romanticPink: "#ffb8be",
				hotpink: "#f82268",
				bgpink: "#fe899b",
				lightpink: "#FFE5F3",
				coolpink: "#f19ad3",
				lightyellow: "#fffcde",
				brown: "#9E2A2F",
			},
			fontFamily: {
				"rix-inoo": ["RixInooAriDuriR", "sans-serif"],
				tangs: ["TTTtangsbudaejjigaeB", "sans-serif"],
				health: ["HealthsetBambooStd", "sans-serif"],
			},
		},
	},
	plugins: [],
};
