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
			// Trans function not being checked in .ts and .tsx files, because it causes SyntaxErrors. Preferably, typescript code should be transpiled to javascript before running i18next-scanner
			extensions: [".js", ".jsx"],
		},
		lngs: ["en", "pt"],
		ns: [
			"Header", "FootballMatchCard", "RankingDisplay",
			"AboutLeague", "LeagueStadiums", "CompetitionFormat",
			"GetToKnowThem", "WhoIsWelcomeToJoin", 
			"EventsView", "LeagueView", "TeamsView", "FanClubView", "TicketsView", 
			"TicketsForm", "Footer"
		],
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