import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DBBrand, DBButton, DBHeader, DBPage } from '../../../output/react/src';
import useQuery from './hooks/use-query';
import MetaNavigation from './meta-navigation';
import Navigation from './navigation';

const App = () => {
	const [density, setDensity, color, setColor, pageName, fullscreen] =
		useQuery();

	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	if (pageName ?? fullscreen) {
		return (
			<div data-density={density} className={`db-${color}`}>
				<Outlet />
			</div>
		);
	}

	return (
		<DBPage
			variant="fixed"
			documentOverflow="auto"
			fadeIn
			header={
				<DBHeader
					drawerOpen={drawerOpen}
					onToggle={setDrawerOpen}
					brand={<DBBrand>Showcase</DBBrand>}
					metaNavigation={
						<MetaNavigation
							onColorChange={setColor}
							onDensityChange={setDensity}
						/>
					}
					primaryAction={
						/* TODO: Use DBSearchBar in future */
						<DBButton
							icon="magnifying_glass"
							variant="ghost"
							noText>
							Search
						</DBButton>
					}
					secondaryAction={
						<>
							<DBButton icon="user" variant="ghost" noText>
								Profile
							</DBButton>
							<DBButton icon="bell" variant="ghost" noText>
								Notification
							</DBButton>
							<DBButton
								icon="question_mark_circle"
								variant="ghost"
								noText>
								Help
							</DBButton>
						</>
					}>
					<Navigation />
				</DBHeader>
			}>
			<div data-density={density} className={`db-${color}`}>
				<Outlet />
			</div>
		</DBPage>
	);
};

export default App;
