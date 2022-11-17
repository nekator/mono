const Components = require('./components');
const Frameworks = require('./framworks');
const Fse = require('fs-extra');

module.exports = () => {
	['scss', 'css'].forEach((fileEnding) => {
		Frameworks.forEach((framework) => {
			Components.forEach((component) => {
				Fse.copySync(
					`./src/components/${component.name}/${component.name}.${fileEnding}`,
					`./output/${
						framework === 'vue' ? `vue/vue3` : framework
					}/src/components/${component.name}/${
						component.name
					}.${fileEnding}`
				);
			});
		});
	});
};
