import { useRouter } from 'next/router';
import Link from 'next/link';
import DefaultPage from '../default-page';
import { getAllNavigationItems, getBreadcrumb } from '../../data/routes';
import { DBCard, DBIcon } from '../../../../output/react/src';

const CardNavigation = () => {
	const router = useRouter();

	const navigationItemParent = getAllNavigationItems().find(
		(navItem) => navItem.path === router.asPath
	);

	return (
		<DefaultPage noNavigation>
			{navigationItemParent && (
				<div className="card-navigation">
					{navigationItemParent.subNavigation?.map(
						(navItem, index) => (
							<Link
								key={`navigation-card-${navItem.path}`}
								href={navItem.path ?? '/'}>
								<DBCard
									behaviour="interactive"
									spacing="medium">
									<small>{index + 1}.</small>
									<p>{navItem.label}</p>
									<DBIcon icon="arrow_right">Next</DBIcon>
								</DBCard>
							</Link>
						)
					)}
				</div>
			)}
		</DefaultPage>
	);
};

export default CardNavigation;
