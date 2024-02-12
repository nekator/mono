const { components } = require('./components');
const { runReplacements } = require('../utils');

module.exports = (tmp) => {
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
				from: /@property\(\)/g,
				to: '@property({ noAccessor: true})'
			},
			{
				from: 'LitElement {',
				to: 'LitElement {\nstatic styles = getGlobalStyleSheets();'
			},
			{
				from: '} from "../../utils"',
				to: ', getGlobalStyleSheets } from "../../utils"'
			}
		];

		runReplacements(replacements, component, 'lit', file);
	}
};
