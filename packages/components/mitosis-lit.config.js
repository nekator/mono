module.exports = {
	files: 'src/**',
	targets: ['lit'],
	dest: '../../output/tmp',
	options: {
		lit: {
			typescript: true,
			useShadowDom: true
		}
	}
};
