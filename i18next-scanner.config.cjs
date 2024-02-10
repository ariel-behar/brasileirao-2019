module.exports = {
	input: [
		"src/**/*.{js,jsx,ts,tsx}",
		// Use ! to filter out files or directories
		"!src/**/*.spec.{js,jsx,ts,tsx}",
		"!i18n/**",
		"!**/node_modules/**",
	],
	output: "./",
	options: {
		compatibilityJSON: "v3",
		debug: true,
		func: {
			list: ["i18next.t", "i18n.t", "t"],
			extensions: [".js", ".jsx", ".ts", ".tsx"],
		},
		trans: {
			extensions: [".js", ".jsx", ".ts", ".tsx"],
		},
		lngs: ["en", "pt"],
		ns: ["Header", "FootballMatchCard"],
		defaultLng: "en",
		defaultNs: "translation",
		resource: {
			loadPath: "public/locales/{{lng}}/{{ns}}.json",
			savePath: "public/locales/{{lng}}/{{ns}}.json",
			jsonIndent: 4,
			lineEnding: '\n',
		},
		nsSeparator: ':',
		keySeparator: '.',
		interpolation: {
			prefix: '{{',
			suffix: '}}'
		}
	},
};