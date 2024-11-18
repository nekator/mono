import FS from 'node:fs';
import {
	getCodeByFramework,
	getComponentName,
	transformToUpperComponentName
} from './utils.js';

const sharedPath = '../shared';

const generateExampleJSX = () => {
	const webTypes = JSON.parse(
		FS.readFileSync(
			'./../../output/stencil/dist/web-types.json',
			'utf8'
		).toString()
	);
	const elements = webTypes?.contributions?.html?.elements;
	const imports = [];
	const examples = [];
	for (const { name } of elements) {
		const componentName = getComponentName(name);
		imports.push(`DB${transformToUpperComponentName(componentName)}`);
		const path = `${sharedPath}/${componentName}.json`;
		if (FS.existsSync(path)) {
			const variants = JSON.parse(FS.readFileSync(path, 'utf8'));

			for (const variant of variants) {
				for (const example of variant.examples) {
					const code = getCodeByFramework(
						componentName,
						'react',
						example,
						true,
						variant.children
					);
					examples.push(
						`"${componentName}${variant.name}${
							example.name
						}":renderToString(${code.slice(0, code.length)})`
					);
				}
			}
		}
	}

	if (!FS.existsSync('./scripts/generated')) {
		FS.mkdirSync('./scripts/generated');
	}

	FS.writeFileSync(
		`./scripts/generated/index.jsx`,
		"import { renderToString } from 'react-dom/server';\n" +
			"import React from 'react';\n" +
			`import {${imports.join(',')}} from '../../../../output/react/src';\n\n` +
			`export const allExamples = {${examples.join(',\n')}}`
	);
};

generateExampleJSX();
