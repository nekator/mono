import components, { Overwrite } from './components';
import { runReplacements, transformToUpperComponentName } from '../utils';
import { replaceInFileSync } from 'replace-in-file';
import { writeFileSync, existsSync } from 'node:fs';

const enableCustomElementsAttributePassing = (componentName: string) =>
	'componentDidLoad() {\n' +
	`\tenableCustomElementAttributePassing(ref, "db-${componentName}")`;

const changeFile = (
	componentName: string,
	upperComponentName: string,
	input: string
) => {
	let resolvedInput = input;
	if (resolvedInput.includes('componentDidLoad')) {
		resolvedInput = resolvedInput.replace(
			'componentDidLoad() {',
			enableCustomElementsAttributePassing(componentName)
		);
	} else {
		resolvedInput = resolvedInput.replace(
			'render() {',
			enableCustomElementsAttributePassing(componentName) +
				'}\n' +
				'render() {'
		);
	}

	return resolvedInput
		.split('\n')
		.map((line) => {
			if (line.includes('@Prop()')) {
				let option = '';
				if (line.includes('children')) {
					return '';
				}

				if (line.includes('className')) {
					option = '{attribute: "classname"}';
				}

				return line
					.replace('@Prop()', `@Prop(${option})`)
					.replace(
						'any',
						`${upperComponentName}Props["${line.replace(`@Prop() `, '').replace(': any;', '').trim()}"]`
					);
			}

			return line;
		})
		.join('\n');
};

const replaceIndexFile = (
	file: string,
	componentName: string,
	upperComponentName: string
) => {
	const replacement = `import { ${upperComponentName} } from './${componentName}';

export default ${upperComponentName};`;

	if (existsSync(file)) {
		writeFileSync(file, replacement);
	}
};

const runTempReplacement = (rootFile: string) => {
	const replacements: Overwrite[] = [
		'checkbox',
		'input',
		'switch',
		'select',
		'textarea',
		'navigation-item',
		'accordion',
		'accordion-item',
		'popover',
		'header'
	].map((component) => ({
		from: `export * from './components/${component}';`,
		to: ''
	}));
	for (const { from, to } of replacements) {
		replaceInFileSync({
			files: rootFile,
			from,
			to
		});
	}
};

const updateNestedComponents = (input: string, rootComponentName: string) => {
	const filteredComponents: string[] = components
		.filter((nComp) => nComp.name !== rootComponentName)
		.map((comp) => comp.name);

	return input
		.split('\n')
		.map((line) => {
			const foundNestedImport = filteredComponents.find((component) =>
				line.includes(`../${component}`)
			);
			if (foundNestedImport) {
				return '';
			}

			const foundNestedComponent = filteredComponents.find(
				(component) => {
					const upperComponent = `DB${transformToUpperComponentName(component)}`;
					return (
						line.includes(`${upperComponent}>`) ||
						line.includes(`<${upperComponent}`)
					);
				}
			);
			if (foundNestedComponent) {
				return line.replace(
					`DB${transformToUpperComponentName(foundNestedComponent)}`,
					`db-${foundNestedComponent}`
				);
			}

			return line;
		})
		.join('\n');
};

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	for (const component of components) {
		const componentName = component.name;
		const file = `../../${outputFolder}/stencil/src/components/${componentName}/${componentName}.tsx`;
		const indexFile = `../../${outputFolder}/stencil/src/components/${componentName}/index.ts`;
		const rootFile = `../../${outputFolder}/stencil/src/index.ts`;
		const upperComponentName = `DB${transformToUpperComponentName(component.name)}`;

		replaceInFileSync({
			files: file,
			processor: (input: string) =>
				changeFile(componentName, upperComponentName, input)
		});

		let replacements: Overwrite[] = [
			{
				from: /props/g,
				to: 'this'
			},
			{
				from: /Slot/g,
				to: 'slot'
			},
			{
				from: /\{this.children}/g,
				to: '<slot></slot>'
			},
			{
				from: /this.children/g,
				to: '<slot></slot>'
			},
			{
				from: 'export default class',
				to: 'export class'
			},
			{
				from: '@Prop',
				to: 'private ref!: HTMLElement;\n\t@Prop'
			},
			{
				from: /ref\?\./g,
				to: 'this.ref?.'
			},
			{
				from: /ref\./g,
				to: 'this.ref.'
			},
			{
				from: /&& ref/g,
				to: '&& this.ref'
			},
			{
				from: /\(ref/g,
				to: '(this.ref'
			},
			{
				from: /\(!ref/g,
				to: '(!this.ref'
			},
			{
				from: /ref,/g,
				to: 'this.ref,'
			},
			{
				from: /this.this/g,
				to: 'this'
			},
			{
				from: /for=/g,
				to: 'htmlFor='
			},
			{
				from: /<>/g,
				to: '<Fragment>'
			},
			{
				from: /<\/>/g,
				to: '</Fragment>'
			},
			{
				from: '} from "../../utils"',
				to: ', enableCustomElementAttributePassing } from "../../utils"'
			}
		];

		runTempReplacement(rootFile);

		replaceIndexFile(indexFile, componentName, upperComponentName);
		replaceInFileSync({
			files: file,
			processor(input) {
				return updateNestedComponents(input, componentName);
			}
		});

		runReplacements(replacements, component, 'stencil', file);
	}
};
