import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"~@db-ui": resolve(projectRootDir, "node_modules/@db-ui")
		}
	}
});
