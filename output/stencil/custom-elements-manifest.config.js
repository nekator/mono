import { generateVsCodeCustomElementData } from 'custom-element-vs-code-integration';
import { getTsProgram } from 'cem-plugin-expanded-types';
import { resolveTypesPlugin } from './scripts/resolveTypes.js';
import { generateJetBrainsWebTypes } from 'custom-element-jet-brains-integration';
import { writeFileSync } from 'node:fs';
import { customElementsManifestToMarkdown } from '@custom-elements-manifest/to-markdown';

const outdir = './dist';

const vsCodeOptions = {
	outdir,
	cssFileName: null
};

const intellijOptions = {
	outdir,
	excludeCss: true,
	referenceTemplate: (name, tag) => ({
		name: 'Documentation',
		url: `https://db-ui.github.io/mono/review/main/components/${tag.replace('db-', '')}/properties`
	})
};

export default {
	globs: ['src'],
	outdir,
	stencil: true,
	overrideModuleCreation: ({ ts, globs }) => {
		const program = getTsProgram(ts, globs);
		const sourceFiles = program.getSourceFiles();
		const filteredFiles = [];

		// Wired issue .filter() didn't work
		sourceFiles.forEach((sf) => {
			if (sf.fileName.includes('node_modules')) {
				return false;
			}
			const foundGlob = globs.find((glob) => sf.fileName.includes(glob));
			if (foundGlob) {
				filteredFiles.push(sf);
			}
		});
		return filteredFiles;
	},
	plugins: [
		resolveTypesPlugin(({ customElementsManifest }) => {
			writeFileSync(
				`${outdir}/custom-elements.md`,
				customElementsManifestToMarkdown(customElementsManifest, {
					private: 'hidden',
					omitDeclarations: [
						'mixins',
						'variables',
						'functions',
						'exports'
					],
					omitSections: ['attributes', 'methods']
				})
			);
			generateVsCodeCustomElementData(
				customElementsManifest,
				vsCodeOptions
			);
			generateJetBrainsWebTypes(customElementsManifest, intellijOptions);
		})
	]
};
