import spawn from 'cross-spawn';
import cpr from 'cpr';

const getComponentLibraryName = (framework) => {
	switch (framework) {
		case 'angular': {
			return '@db-ui/ngx-components';
		}

		case 'react': {
			return '@db-ui/react-components';
		}

		case 'vue': {
			return '@db-ui/v-components';
		}

		default: {
			return undefined;
		}
	}
};

/**
 *
 * @param values {{name: string, framework: string, styling: string, typing:string}}
 */
export const generateViteProject = (values) => {
	spawn.sync(
		'npm',
		[
			'create',
			'vite@latest',
			values.name,
			'--',
			'--template',
			`${values.framework}${values.typing === 'typescript' ? '-ts' : ''}`
		],
		{
			stdio: 'inherit'
		}
	);
};

/**
 *
 * @param values {{name: string, framework: string, styling: string, typing:string}}
 */
const generateProject = (values) => {
	if (values.name === 'angular') {
		// TODO: generate angular
	} else {
		generateViteProject(values);
	}

	spawn.sync(
		'npm',
		[
			'--prefix',
			`../${values.name}`,
			'install',
			getComponentLibraryName(values.framework),
			values.styling === 'scss' ? 'sass' : ''
			// TODO: Install db-ui eslint plugin
		],
		{
			stdio: 'inherit'
		}
	);

	cpr(
		`./templates/${values.framework}-${values.typing}-${values.styling}/src`,
		`../${values.name}/src`,
		{
			deleteFirst: true,
			overwrite: true,
			confirm: true
		}
	);
};

export default generateProject;
