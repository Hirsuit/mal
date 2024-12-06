module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,png,jpeg,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};