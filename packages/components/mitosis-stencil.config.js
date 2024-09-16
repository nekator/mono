module.exports = {
	files: 'src/**',
	exclude: [
		'**/accordion/**',
		'**/accordion-item/**',
		'**/checkbox/**',
		'**/input/**',
		'**/select/**',
		'**/switch/**',
		'**/textarea/**',
		'**/navigation-item/**',
		'**/popover/**',
		'**/header/**'
	],
	targets: ['stencil'],
	dest: '../../output/tmp',
	options: {
		stencil: {
			typescript: true
		}
	}
};
