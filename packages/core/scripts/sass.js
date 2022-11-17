/* Custom loader for sass because it is not working in a monorepo... */

const sass = require('sass');
const Url = require('url');
const Fs = require('fs');

const directoryToCompile = './src';
const relativePathToNodeModules = '../../';

const compile = (path) => {
	const result = sass.compile(path, {
		importers: [
			{
				findFileUrl(url) {
					if (/^[a-z]+:/i.test(url)) return null;
					const changedURl = new URL(
						url,
						Url.pathToFileURL(relativePathToNodeModules)
					);
					changedURl.pathname = changedURl.pathname.replace(
						'~',
						'node_modules/'
					);
					return changedURl;
				}
			}
		]
	});
	Fs.writeFileSync(path.replace('scss', 'css'), result.css, {
		encoding: 'utf-8'
	});
	return result;
};

const compileRecursive = (path) => {
	if (Fs.existsSync(path)) {
		const stats = Fs.lstatSync(path);
		if (stats.isDirectory()) {
			const filesBelowDirectory = Fs.readdirSync(path);
			filesBelowDirectory.forEach((filePath) => {
				compileRecursive(`${path}/${filePath}`);
			});
		} else if (stats.isFile() && path.endsWith('.scss')) {
			compile(path);
		}
	}
};

try {
	compileRecursive(directoryToCompile);
} catch (e) {
	console.error(e);
}
