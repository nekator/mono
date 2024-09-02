import { useState } from 'react';
import type { AppProps } from 'next/app';
import { DBBrand, DBButton, DBHeader, DBPage } from '../../../output/react/src';
import useQuery from '../../react-showcase/src/hooks/use-query';
import MetaNavigation from '../../react-showcase/src/meta-navigation';
import Navigation from '../../react-showcase/src/navigation';
import '../styles/global.scss';
import '../../showcase-styles.css';

const App = ({ Component, pageProps }: AppProps) => {
	const [density, setDensity, color, setColor, pageName, fullscreen] =
		useQuery();

	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	if (pageName ?? fullscreen) {
		return (
			<div className={`db-density-${density} db-${color}`}>
				<Component {...pageProps} />
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
			<div className={`db-density-${density} db-${color}`}>
				<Component {...pageProps} />
			</div>
		</DBPage>
	);
};

export default App;
