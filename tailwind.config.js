const plugin = require("tailwindcss/plugin");

/**
 * Clamp utility function for fluid typography
 * clamp(MIN_VALUE, FLUID_VALUE, MAX_VALUE)
 */
fontSizeClamp = (min, max) => {
	return `clamp(${min}rem, ${max * 1.25}vw, ${max}rem)`;
};

module.exports = {
	content: [
		"./_includes/**/*.html", // Include includes directory
		"./_layouts/**/*.html", // Include layouts directory
	],
	theme: {
		screens: {
			"-sm": { max: "599px" },
			sm: "600px",
			"-md": { max: "767px" },
			md: "768px",
			"-tablet": { max: "899px" },
			tablet: "900px",
			"-lg": { max: "1023px" },
			lg: "1024px",
			"-xl": { max: "1219px" },
			xl: "1220px",
			"-2xl": { max: "1599px" },
			"2xl": "1600px",
		},
		fontFamily: {
			pinyon: ['"Pinyon Script"'],
			playfair: ['"Playfair Display"'],
		},
		extend: {
			fontSize: {
				h1: fontSizeClamp(2.25, 3), // 36px - 48px
				h2: fontSizeClamp(1.5, 2.25), // 24px - 36px
				h3: fontSizeClamp(1.25, 2), // 20px - 32px
				h4: fontSizeClamp(1.125, 1.5), // 18px - 24px

				body: fontSizeClamp(1, 1.25), // 16px - 20px
				micro: fontSizeClamp(0.875, 1), // 12px - 14px
			},
			colors: {
				inherit: "inherit",
				transparent: "transparent",
				current: "currentColor",
				white: "#fff",
				black: "#000",
				brown: {
					DEFAULT: "#80471c",
					light: "#997950",
				},
			},
			maxWidth: {
				400: "100rem", //1600px
			},
			height: {
				"hero-desktop": "calc(100vh - 81px)",
				"hero-mobile": "calc(100vh - 44px)",
				84: "21rem", // 336px
			},
			minHeight: {
				200: "50rem", // 800px
				150: "37.5rem", // 600px
			},
		},
	},
	output: {
		path: "./assets/css",
		filename: "styles.css",
	},
	plugins: [
		require("@tailwindcss/typography"),
		plugin(function ({ addBase, theme }) {
			addBase({
				"body, p": {
					fontFamily: theme("fontFamily.playfair"),
					fontSize: theme("fontSize.body"),
				},
				"h1, .h1": {
					fontFamily: theme("fontFamily.pinyon"),
					fontSize: theme("fontSize.h1"),
					lineHeight: "1.1",
				},
				"h2, .h2": {
					fontFamily: theme("fontFamily.pinyon"),
					fontSize: theme("fontSize.h2"),
					lineHeight: "1.15",
				},
				"h3, .h3": {
					fontFamily: theme("fontFamily.pinyon"),
					fontSize: theme("fontSize.h3"),
					lineHeight: "1.2",
				},
				"h4, .h4": {
					fontFamily: theme("fontFamily.pinyon"),
					fontSize: theme("fontSize.h4"),
					lineHeight: "1.2",
				},
			});
		}),
	],
};
