export const getBasePath = () => {
	if (process?.env?.BASE_PATH) {
		return process.env.BASE_PATH;
	}

	if (typeof window !== 'undefined') {
		return window.env?.BASE_URL;
	}

	return '';
};
