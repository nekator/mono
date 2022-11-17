import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';
const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	resolve: {
		alias: {
			'~@db-ui': resolve(projectRootDir, 'node_modules/@db-ui')
		}
	},
	esbuild: {
		loader: 'jsx',
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
			},
		},
	},
});
