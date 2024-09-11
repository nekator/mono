module.exports = {
	files: 'src/**',
	targets: ['angular', 'vue', 'react'],
	dest: '../../output',
	options: {
		react: {
			typescript: true
		},
		angular: {
			typescript: true,
			standalone: true,
			visuallyIgnoreHostElement: false
		},
		vue: {
			typescript: true
		}
	}
};
