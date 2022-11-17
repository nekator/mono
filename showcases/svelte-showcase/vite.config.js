import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			'~@db-ui': resolve(projectRootDir, 'node_modules/@db-ui')
		}
	}
});
