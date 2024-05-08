import { useRouter } from 'next/router';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	NavigationItem
} from '../../react-showcase/src/utils/navigation-item';
import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

export interface DBPage {
	path: string;
	component: any;
}

export interface DBPagePath {
	params: {
		slug: string[];
	};
}

export const getStaticPaths = (async () => {
	const sortedNavigationItems = getSortedNavigationItems(
		NAVIGATION_ITEMS
	) as NavigationItem[];

	const paths = sortedNavigationItems.reduce(
		(accumulator: DBPagePath[], { path, component, subNavigation }) => {
			if (subNavigation) {
				subNavigation.forEach((subNavItem) => {
					if (!subNavItem.component) return;
					accumulator.push({
						params: { slug: [path, subNavItem.path] }
					});
				});
			}

			if (component) {
				accumulator.push({ params: { slug: [path] } });
			}

			return accumulator;
		},
		[]
	);

	console.log('PATHS', JSON.stringify(paths));

	return {
		paths,
		fallback: false
	};
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
	console.log('context', context);
	return { props: { test: 'test' } };
}) satisfies GetStaticProps<{ test: string }>;

export default function Home({
	test
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter();
	const sortedNavigationItems = getSortedNavigationItems(
		NAVIGATION_ITEMS
	) as NavigationItem[];

	const routes: DBPage[] = sortedNavigationItems.reduce(
		(accumulator: DBPage[], { path, component, subNavigation }) => {
			if (subNavigation) {
				subNavigation.forEach((subNavItem) => {
					if (!subNavItem.component) return;
					accumulator.push({
						path: `${path}/${subNavItem.path}`,
						component: subNavItem.component
					});
				});
			}

			if (component) {
				accumulator.push({ path, component });
			}

			return accumulator;
		},
		[]
	);

	const slug = router.query.slug ?? '';
	const currentPath = Array.isArray(slug) ? slug.join('/') : slug;
	const currentPage = routes.find(({ path }) => path === currentPath);

	return <div>{currentPage && currentPage.component}</div>;
}
