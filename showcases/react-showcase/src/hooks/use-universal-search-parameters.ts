import { useSearchParams } from 'react-router-dom';
import {
	useSearchParams as useSearchParamsNext,
	useRouter as useRouterNext,
	usePathname as usePathnameNext
} from 'next/navigation';

const useUniversalSearchParameters = (): [
	URLSearchParams,
	(params: Record<string, string>) => void
] => {
	const nextRouter =
		process.env.NEXT_SHOWCASE_VARIANT === 'next'
			? useRouterNext()
			: undefined;
	const nextPathName =
		process.env.NEXT_SHOWCASE_VARIANT === 'next'
			? usePathnameNext()
			: undefined;

	const [searchParameters, _setSearchParameters] =
		process.env.NEXT_SHOWCASE_VARIANT === 'next'
			? [useSearchParamsNext()]
			: useSearchParams();

	const setSearchParameters = (params: Record<string, string>) => {
		if (typeof window !== 'undefined') {
			const currentParams = new URLSearchParams(
				window.location.href.split('?')[1]
			);
			currentParams.sort();
			const newParams = new URLSearchParams(params);
			newParams.sort();

			if (currentParams.toString() === newParams.toString()) {
				return;
			}
		}

		if (_setSearchParameters) {
			_setSearchParameters(params);
		} else if (nextPathName) {
			nextRouter?.push(
				`${nextPathName}?${new URLSearchParams(params).toString()}`
			);
		}
	};

	return [searchParameters, setSearchParameters];
};

export default useUniversalSearchParameters;
