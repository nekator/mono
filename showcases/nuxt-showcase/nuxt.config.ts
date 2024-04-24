// https://nuxt.com/docs/api/configuration/nuxt-config

// import { getRoutes } from './src/utils/navigation-items';
// console.log('getRoutes', getRoutes());

export default defineNuxtConfig({
	devtools: { enabled: true },
	generate: {
		routes: ['/'] // GetRoutes().map((route) => route.path)
	},
	app: {
		baseURL: '/nuxt-showcase/'
	},
	imports: {
		autoImport: false
	},
	devServer: {
		port: 4000
	},
	vite: {
		base: `/nuxt-showcase/`,
		build: {
			outDir: '../../build-showcases/nuxt-showcase',
			emptyOutDir: true
		}
	},
	nitro: {
		output: {
			dir: '../../build-showcases/nuxt-showcase',
			publicDir: '../../build-showcases/nuxt-showcase'
		}
	}
});
