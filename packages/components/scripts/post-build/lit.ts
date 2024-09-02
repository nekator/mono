import components from './components';
import { runReplacements } from '../utils';

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;
	for (const component of components) {
		const componentName = component.name;
		const file = `../../${outputFolder}/lit/src/components/${componentName}/${componentName}.ts`;
		let replacements = [
			{
				from: /props/g,
				to: 'this'
			},
			{
				from: 'class={',
				to: 'class=${'
			},
			{
				from: /if \(ref/g,
				to: 'if (this.ref'
			},
			{
				from: /ref\./g,
				to: 'this.ref.'
			},
			{
				from: /ref\?\./g,
				to: 'this.ref?.'
			},
			{
				from: 'connectedCallback() {',
				to: 'connectedCallback() {\n' + 'super.connectedCallback();'
			},
			{
				from: '${this.children}',
				to: '<slot></slot>'
			},
			{
				from: 'LitElement {',
				to: 'LitElement {\nstatic styles = getGlobalStyleSheets();'
			},
			{
				from: '} from "../../utils"',
				to: ', getGlobalStyleSheets } from "../../utils"'
			},
			{
				from: 'lit/decorators',
				to: 'lit/decorators.js'
			}
		];

		runReplacements(replacements, component, 'lit', file);
	}
};
