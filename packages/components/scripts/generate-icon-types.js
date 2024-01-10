/*
 * This script can be used to update the icon type for all components using icons.
 */

const FS = require('node:fs');

const foundationAssetsPath = '../foundations/assets/icons/functional/images';

const generateIconTypes = () => {
	try {
		const allIcons = [];
		const icons = FS.readdirSync(foundationAssetsPath)
			.reduce((previousValue, currentValue) => {
				const path_string = `${foundationAssetsPath}/${currentValue}`;

				if (
					currentValue.includes('.svg') ||
					!FS.lstatSync(path_string).isDirectory()
				) {
					return previousValue;
				}

				let iconPaths = FS.readdirSync(path_string);

				if (
					iconPaths.filter(
						(path) => path === 'inverted' || path === 'regular'
					).length === 2
				) {
					return [
						...previousValue,
						`// Directory: ${currentValue}-inverted`,
						...FS.readdirSync(
							`${foundationAssetsPath}/${currentValue}/inverted`
						),
						`// Directory: ${currentValue}-regular`,
						...FS.readdirSync(
							`${foundationAssetsPath}/${currentValue}/regular`
						)
					];
				}

				return [
					...previousValue,
					`// Directory: ${currentValue}`,
					...iconPaths
				];
			}, [])
			.filter(
				(icon) =>
					(!icon.includes('_solid') && icon.includes('_24')) ||
					icon.startsWith('//')
			)
			.map((icon) =>
				icon
					.replace('db_ic_', '')
					.replace('_24.svg', '')
					.replace(/-/g, '_')
			)
			.map((icon) => {
				if (icon.startsWith('//')) {
					return icon;
				}

				allIcons.push(icon);

				return `| '${icon}'`;
			});

		const generatedDisclaimer =
			'/* This file was generated by packages/components/scripts/generate-icon-types.js */\n';
		const iconTypes = `${generatedDisclaimer}export type IconTypes = string \n ${icons.join(
			'\n'
		)}`;
		const allIconsFile = `${generatedDisclaimer}export const ALL_ICONS: string[] = ${JSON.stringify(
			allIcons
		)};`;
		FS.writeFileSync('./src/shared/icon-types.ts', iconTypes);
		FS.writeFileSync('./src/shared/all-icons.ts', allIconsFile);
	} catch (e) {
		console.log(e);
	}
};

generateIconTypes();