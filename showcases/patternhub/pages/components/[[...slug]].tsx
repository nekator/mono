import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { componentChildren, NavigationItem } from '../../data/routes';
import DefaultPage from '../../components/default-page';

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
	// eslint-disable-next-line unicorn/no-array-reduce
	const paths = componentChildren.reduce(
		(accumulator: DBPagePath[], { path, component, subNavigation }) => {
			if (subNavigation) {
				for (const subNavItem of subNavigation) {
					if (!subNavItem.component || !subNavItem.name) continue;
					accumulator = [
						...accumulator,
						{
							params: { slug: [subNavItem.name] }
						},
						{
							params: { slug: [subNavItem.name, 'overview'] }
						}
					];
				}
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

export const getStaticProps = (async (context) => {
	return { props: {} };
}) satisfies GetStaticProps<{}>;

export default function Home() {
	const router = useRouter();
	const currentSlug = router.query.slug;
	const currentComponentName = Array.isArray(currentSlug)
		? currentSlug[0]
		: currentSlug;

	let component: ReactElement | undefined = undefined;

	// eslint-disable-next-line unicorn/no-array-reduce
	for (const componentChild of componentChildren) {
		if (!componentChild.subNavigation) continue;

		for (const subNavItem of componentChild.subNavigation) {
			if (
				subNavItem.name === currentComponentName &&
				subNavItem.component
			) {
				component = subNavItem.component;
				break;
			}
		}

		if (component) break;
	}

	return <DefaultPage>{component}</DefaultPage>;
}
