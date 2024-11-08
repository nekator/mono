import * as esbuild from 'esbuild';

await esbuild.build({
	entryPoints: ['./plugins/figma/**'],
	bundle: true,
	outdir: 'plugins/out',
	outbase: './plugins',
	platform: 'node',
	allowOverwrite: true,
	format: 'cjs'
});
