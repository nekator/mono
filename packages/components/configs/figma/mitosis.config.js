const angular = require('../angular');
const { default: figmaAngular } = require('../../plugins/out/figma/angular');

module.exports = {
	files: 'src/**/figma/*',
	targets: ['angular'],
	dest: '../../output',
	options: {
		angular
	},
	commonOptions: {
		plugins: [figmaAngular]
	}
};
