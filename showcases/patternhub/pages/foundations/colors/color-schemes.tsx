import { type ReactNode, useState } from 'react';
import DefaultPage from '../../../components/default-page';
import { DBButton, DBTag, DBCard } from '../../../components/src';
import { SEMANTICS } from '../../../components/src/shared/constants';

const colors = ['neutral', ...SEMANTICS];

export const ColorSchemePreview = ({ children }: { children?: ReactNode }) => {
	const [colorScheme, setColorScheme] = useState<string>('light');

	return (
		<div
			className="color-schemes-container"
			data-color-scheme={colorScheme}>
			<p>This container changes based on the state.</p>
			<DBTag semantic="informational" emphasis="strong">
				{colorScheme}
			</DBTag>
			<DBButton
				icon={colorScheme === 'light' ? 'moon' : 'sun'}
				onClick={() => {
					setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
				}}>
				Click me for {colorScheme === 'light' ? 'dark' : 'light'}
				-mode
			</DBButton>
			{children}
		</div>
	);
};

const ColorOverview = () => {
	return (
		<DefaultPage>
			<h1>Color Schemes</h1>
			<p>
				The adaptive colour system ensures that all colours are
				displayed in their corresponding negative variant in{' '}
				<b>dark mode</b>. As in light mode, the colour levels are
				automatically selected so that a sufficiently high contrast is
				maintained for accessibility.
			</p>
			<p>
				You can use <code>data-color-scheme="light"</code> or{' '}
				<code>data-color-scheme="dark"</code> to force a
				container/component to keep the selected color-scheme:
			</p>
			<ColorSchemePreview>
				<section data-color-scheme="light">
					<h2>Permanent Light</h2>
					<p>I'll be always light independent from parent</p>
				</section>
				<section data-color-scheme="dark">
					<h2>Permanent Dark</h2>
					<p>I'll be always dark independent from parent</p>
				</section>
			</ColorSchemePreview>
		</DefaultPage>
	);
};

export default ColorOverview;
