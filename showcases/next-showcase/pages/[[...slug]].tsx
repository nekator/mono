import { useRouter } from 'next/router';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	NavigationItem
} from '../../react-showcase/src/utils/navigation-item';
import React from 'react';

export interface DBPage {
	path: string;
	component: any;
}

export default function Home() {
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
