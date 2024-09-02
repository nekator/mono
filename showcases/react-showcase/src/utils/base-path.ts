export const getBasePath = () => {
	if (process?.env?.BASE_PATH) {
		return process.env.BASE_PATH;
	}

	if (typeof window !== 'undefined') {
		// eslint-disable-next-line @typescript-eslint/dot-notation
		return window['env']?.BASE_URL;
	}

	return '';
};
