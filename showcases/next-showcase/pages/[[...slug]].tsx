import { useRouter } from 'next/router';
import type {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType
} from 'next';
import React from 'react';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	type NavigationItem
} from '../../react-showcase/src/utils/navigation-item';

export type DBPage = {
	path: string;
	component: any;
};

export type DBPagePath = {
	params: {
		slug: string[];
	};
};

export const getStaticPaths = (async () => {
	const sortedNavigationItems = getSortedNavigationItems(
		NAVIGATION_ITEMS
	) as NavigationItem[];

	// eslint-disable-next-line unicorn/no-array-reduce
	const paths = sortedNavigationItems.reduce(
		(accumulator: DBPagePath[], { path, component, subNavigation }) => {
			if (subNavigation) {
				for (const subNavItem of subNavigation) {
					if (!subNavItem.component) continue;
					accumulator.push({
						params: { slug: [path, subNavItem.path] }
					});
				}
			}

			if (component) {
				accumulator.push({ params: { slug: [path] } });
			}

			return accumulator;
		},
		[]
	);

	return {
		paths,
		fallback: false
	};
}) satisfies GetStaticPaths;

// getStaticPaths (see above) requires getStaticProps so that next can be built, even if no props are passed at all, as is the case here
export const getStaticProps = (async (context) => {
	return { props: {} };
}) satisfies GetStaticProps<{}>;

export default function Home() {
	const router = useRouter();
	const sortedNavigationItems = getSortedNavigationItems(
		NAVIGATION_ITEMS
	) as NavigationItem[];

	// eslint-disable-next-line unicorn/no-array-reduce
	const routes: DBPage[] = sortedNavigationItems.reduce(
		(accumulator: DBPage[], { path, component, subNavigation }) => {
			if (subNavigation) {
				for (const subNavItem of subNavigation) {
					if (!subNavItem.component) continue;
					accumulator.push({
						path: `${path}/${subNavItem.path}`,
						component: subNavItem.component
					});
				}
			}

			if (component) {
				accumulator.push({ path, component });
			}

			return accumulator;
		},
		[]
	);

	const slug = router?.query?.slug || '';
	const currentPath = Array.isArray(slug) ? slug.join('/') : slug;
	const currentPage = routes.find(({ path }) => path === currentPath);

	return <div>{currentPage?.component}</div>;
}
