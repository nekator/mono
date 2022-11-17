/** @type {import('next').NextConfig} */

const packageJSON = require('./package.json');
const transpiledPackages = Object.keys(packageJSON.dependencies).filter((it) =>
	it.includes('@db-ui')
);

const withTM = require('next-transpile-modules')(transpiledPackages);

module.exports = withTM();
