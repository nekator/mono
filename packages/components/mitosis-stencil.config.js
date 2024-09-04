module.exports = {
	files: 'src/**',
	exclude: [
		'**/accordion/**',
		'**/checkbox/**',
		'**/input/**',
		'**/select/**',
		'**/switch/**',
		'**/textarea/**',
		'**/navigation-item/**',
		'**/popover/**'
	],
	targets: ['stencil'],
	dest: '../../output/tmp',
	options: {
		stencil: {
			typescript: true
		}
	}
};
