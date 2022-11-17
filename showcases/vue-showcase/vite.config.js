import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { resolve } from 'path';
const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'~@db-ui': resolve(projectRootDir, 'node_modules/@db-ui')
		}
	}
});
