const { default: figmaAngular } = require('../../plugins/out/figma/angular');

module.exports = {
	typescript: true,
	standalone: true,
	visuallyIgnoreHostElement: false,
	importMapper: (component, theImport, importedValues, componentsUsed) => {
		const { defaultImport } = importedValues;
		const { path } = theImport;

		if (componentsUsed.includes(defaultImport)) {
			return `import { ${defaultImport} } from '${path}';`;
		}

		return undefined;
	},
	plugins: [figmaAngular]
};
