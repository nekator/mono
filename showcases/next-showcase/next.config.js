/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: `/next-showcase`,
	distDir: '../../build-showcases/next-showcase',
	transpilePackages: ['../react-showcase/', '@db-ui'],
	env: {
		NEXT_SHOWCASE_VARIANT: 'next'
	}
};

module.exports = nextConfig;
