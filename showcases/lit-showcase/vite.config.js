import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
	base: `${process.env.BASE_URL ?? ''}/lit-showcase`,
	resolve: {
		alias: {
			'@db-ui/lit-components': fileURLToPath(
				new URL('../../output/lit/', import.meta.url)
			)
		}
	}
});
