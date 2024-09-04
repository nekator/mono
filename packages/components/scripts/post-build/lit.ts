import components, { Overwrite } from './components';
import { runReplacements, transformToUpperComponentName } from '../utils';
import { replaceInFileSync } from 'replace-in-file';

const changeFile = (upperComponentName: string, input: string) => {
	return input
		.split('\n')
		.map((line) => {
			let preLine = '';
			if (line.includes('@property()')) {
				if (line.includes('children')) {
					return '';
				}
				if (line.includes('className')) {
					preLine = '@property() class: string;\n';
				}

				return (
					preLine +
					line.replace(
						'any',
						`${upperComponentName}Props["${line.replace('@property() ', '').replace(': any;', '').trim()}"]`
					)
				);
			}

			return line;
		})
		.join('\n');
};

/**
 * Lit uses some internal defaults for blur and focus event, we need to remove our own props
 * @param replacements
 */
const addLitBlurFocusWorkaround = (
	upperComponentName: string,
	replacements: Overwrite[]
) => {
	replacements.push({
		from: `@property() blur: ${upperComponentName}Props["blur"];`,
		to: ''
	});
	replacements.push({
		from: `@property() focus: ${upperComponentName}Props["focus"];`,
		to: ''
	});
	replacements.push({
		from: '    if (this.blur) {\n' + '      this.blur(event);\n' + '    }',
		to: ''
	});
	replacements.push({
		from:
			'    if (this.focus) {\n' + '      this.focus(event);\n' + '    }',
		to: ''
	});
};

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	for (const component of components) {
		const componentName = component.name;
		const file = `../../${outputFolder}/lit/src/components/${componentName}/${componentName}.ts`;
		const upperComponentName = `DB${transformToUpperComponentName(component.name)}`;
		replaceInFileSync({
			files: file,
			processor: (input: string) => changeFile(upperComponentName, input)
		});

		let replacements: Overwrite[] = [
			{
				from: /props/g,
				to: 'this'
			},
			{
				from: 'class={',
				to: 'class=${'
			},
			{
				from: 'this.className',
				to: 'this.className, this.class'
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
				from: 'connectedCallback() {',
				to: 'connectedCallback() {\n' + 'super.connectedCallback();'
			},
			// Default web-component behaviour
			{
				from: '${this.children}',
				to: '<slot></slot>'
			},
			/**
			 * We include the global style sheets loading
			 */
			{
				from: 'LitElement {',
				to: 'LitElement {\nstatic styles = getGlobalStyleSheets();'
			},
			{
				from: '} from "../../utils"',
				to: ', getGlobalStyleSheets } from "../../utils"'
			},
			// Workaround for mitosis not generating imports with `.js` ending
			{
				from: 'lit/decorators',
				to: 'lit/decorators.js'
			},
			// Set a default for icon otherwise our css selector will be triggered with [data-icon]
			{
				from: /\$\{this\.icon}/g,
				to: '${this.icon || "none"}'
			},
			{
				from: /\$\{this\.iconAfter}/g,
				to: '${this.iconAfter || "none"}'
			},
			// wired issue from mitosis -> investigation required
			{
				from: /my-slot/g,
				to: 'slot'
			},
			// wired issue from mitosis -> investigation required
			{
				from: /<my-fragment >/g,
				to: ''
			},
			{
				from: /<\/my-fragment>/g,
				to: ''
			}
		];

		addLitBlurFocusWorkaround(upperComponentName, replacements);

		runReplacements(replacements, component, 'lit', file);
	}
};
