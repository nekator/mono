module.exports = {
	files: 'src/**',
	targets: ['angular', 'vue', 'lit', 'webcomponent', 'react'],
	dest: '../../output',
	options: {
		angular: {
			typescript: true,
			standalone: true,
			visuallyIgnoreHostElement: false
		},
		lit: {
			typescript: true,
			useShadowDom: false
		},
		react: {
			typescript: true
		},
		vue: {
			typescript: true
		},
		webcomponent: {
			experimental: {
				attributeChangedCallback(test, json) {
					const properties =
						json?.meta?.useMetadata?.component?.properties?.map(
							(prop) => prop.name.toLowerCase()
						) || [];
					return (
						'const foundProp = this.componentProps.find(prop=> prop.toLowerCase() === name);\n' +
						"if (newValue === 'false') {\n" +
						'\t\t\tdelete this.props[foundProp];\n' +
						'\t\t} else {\n' +
						'\t\t\tthis.props[foundProp] = newValue;\n' +
						'\t\t}' +
						'    this.update();' +
						'}' +
						'static get observedAttributes() {\n' +
						`    return ${JSON.stringify(properties)};`
					);
				}
			}
		}
	}
};
