import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DBBrand, DBButton, DBHeader, DBPage } from '../../../output/react/src';
import useQuery from './hooks/use-query';
import MetaNavigation from './meta-navigation';
import Navigation from './navigation';

const App = () => {
	const [tonality, setTonality, color, setColor, pageName, fullscreen] =
		useQuery();

	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	if (pageName || fullscreen) {
		return (
			<div className={`db-ui-${tonality} db-${color}`}>
				<Outlet />
			</div>
		);
	}

	return (
		<DBPage
			type="fixedHeaderFooter"
			fadeIn
			slotHeader={
				<DBHeader
					drawerOpen={drawerOpen}
					onToggle={setDrawerOpen}
					slotBrand={
						<DBBrand title="React Showcase" anchorChildren>
							Showcase
						</DBBrand>
					}
					slotMetaNavigation={
						<MetaNavigation
							onColorChange={setColor}
							onTonalityChange={setTonality}
						/>
					}
					slotCallToAction={
						/* TODO: Use DBSearchBar in future */
						<DBButton icon="search" variant="ghost" noText>
							Search
						</DBButton>
					}
					slotActionBar={
						<>
							<DBButton icon="account" variant="ghost" noText>
								Profile
							</DBButton>
							<DBButton icon="alert" variant="ghost" noText>
								Notification
							</DBButton>
							<DBButton icon="help" variant="ghost" noText>
								Help
							</DBButton>
						</>
					}>
					<Navigation />
				</DBHeader>
			}>
			<div className={`db-ui-${tonality} db-${color}`}>
				<Outlet />
			</div>
		</DBPage>
	);
};

export default App;
