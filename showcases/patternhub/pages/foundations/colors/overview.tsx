import { useEffect, useState } from 'react';
import DefaultPage from '../../../components/default-page';
import { COLORS } from '../../../components/src/shared/constants';
import {
	DBSwitch,
	DBTabs,
	DBTabList,
	DBTabItem,
	DBTabPanel,
	DBSection,
	DBIcon
} from '../../../components/src';
import CopyClipboardButton from '../../../components/copy-clipboard-button';
import checkerboard from '../../../assets/images/checkerboard.png';

type ColorsGridProps = {
	showCheckerboard?: boolean;
	variant: 'class' | 'data-attribute';
	enableDarkMode?: boolean;
	onColorClick?: (color: string) => void;
	selectedColor?: string;
};

type CurrentColor = {
	current: string;
	speaking: string;
};

const allCurrentColorVariables: CurrentColor[] = [
	{
		current: '--db-current-color-bg-transparent-full-enabled ',
		speaking: '--db-%COLOR%-bg-transparent-full-enabled'
	},
	{
		current: '--db-current-color-bg-transparent-semi-enabled ',
		speaking: '--db-%COLOR%-bg-transparent-semi-enabled'
	},
	{
		current: '--db-current-color-bg-transparent-hover ',
		speaking: '--db-%COLOR%-bg-transparent-hover'
	},
	{
		current: '--db-current-color-bg-transparent-pressed ',
		speaking: '--db-%COLOR%-bg-transparent-pressed'
	},
	{
		current: '--db-current-color-enabled ',
		speaking: '--db-%COLOR%-on-bg-enabled'
	},
	{
		current: '--db-current-color-icon ',
		speaking: '--db-%COLOR%-on-bg-enabled'
	},
	{
		current: '--db-current-color-hover ',
		speaking: '--db-%COLOR%-on-bg-hover'
	},
	{
		current: '--db-current-color-pressed ',
		speaking: '--db-%COLOR%-on-bg-pressed'
	},
	{
		current: '--db-current-color-bg-lvl-1-enabled ',
		speaking: '--db-%COLOR%-bg-lvl-1-enabled'
	},
	{
		current: '--db-current-color-bg-lvl-2-enabled ',
		speaking: '--db-%COLOR%-bg-lvl-2-enabled'
	},
	{
		current: '--db-current-color-bg-lvl-3-enabled ',
		speaking: '--db-%COLOR%-bg-lvl-3-enabled'
	},
	{
		current: '--db-current-color-contrast-low-enabled ',
		speaking: '--db-%COLOR%-contrast-low-enabled'
	},
	{ current: '--db-current-color-border ', speaking: '--db-%COLOR%-border' },
	{
		current: '--db-current-color-bg-lvl-1-hover ',
		speaking: '--db-%COLOR%-bg-lvl-1-hover'
	},
	{
		current: '--db-current-color-bg-lvl-1-pressed ',
		speaking: '--db-%COLOR%-bg-lvl-1-pressed'
	},
	{
		current: '--db-current-color-bg-lvl-2-hover ',
		speaking: '--db-%COLOR%-bg-lvl-2-hover'
	},
	{
		current: '--db-current-color-bg-lvl-2-pressed ',
		speaking: '--db-%COLOR%-bg-lvl-2-pressed'
	},
	{
		current: '--db-current-color-bg-lvl-3-hover ',
		speaking: '--db-%COLOR%-bg-lvl-3-hover'
	},
	{
		current: '--db-current-color-bg-lvl-3-pressed ',
		speaking: '--db-%COLOR%-bg-lvl-3-pressed'
	},
	{
		current: '--db-current-color-on-contrast-enabled ',
		speaking: '--db-%COLOR%-on-contrast-enabled'
	},
	{
		current: '--db-current-color-contrast-high-enabled ',
		speaking: '--db-%COLOR%-contrast-high-enabled'
	},
	{
		current: '--db-current-color-contrast-high-hover ',
		speaking: '--db-%COLOR%-contrast-high-hover'
	},
	{
		current: '--db-current-color-contrast-high-pressed ',
		speaking: '--db-%COLOR%-contrast-high-pressed'
	}
];

const ColorsGrid = ({
	showCheckerboard,
	variant,
	enableDarkMode,
	onColorClick,
	selectedColor
}: ColorsGridProps) => {
	const getText = (color: string) =>
		variant === 'class' ? `db-${color}` : `[data-color="${color}"]`;
	const getAttributes = (color: string) =>
		variant === 'class'
			? { className: `db-${color}` }
			: { 'data-color': color };

	const _onColorClick = (color: string) => {
		if (onColorClick) {
			onColorClick(color);
		}
	};

	return (
		<div
			className="color-overview-container db-font-size-sm"
			data-color-scheme={enableDarkMode ? 'dark' : 'light'}>
			<span
				style={{
					backgroundImage: showCheckerboard
						? `url(${checkerboard.src})`
						: 'none'
				}}
			/>{' '}
			{COLORS.map((color, index) => (
				<div
					{...getAttributes(color)}
					onClick={() => {
						_onColorClick(color);
					}}>
					{selectedColor === color && <DBIcon icon="check" />}
					<span>{getText(color)}</span>
					<CopyClipboardButton
						name={`copy-button-${index}`}
						copyText={getText(color)}>
						Copied to clipboard
					</CopyClipboardButton>
				</div>
			))}
		</div>
	);
};

const ColorOverview = () => {
	// Const [search, setSearch] = useState<string>('');
	const [semanticColorName, setSemanticColorName] = useState<string>(
		COLORS[0].split('-bg-')[0]
	);
	const [semanticColorLevel, setSemanticColorLevel] = useState<string>(
		COLORS[0].split('-bg-')[1]
	);
	const [selectedSemanticBgColor, setSelectedSemanticBgColor] =
		useState<string>(COLORS[0]);
	const [showCheckerboard, setShowCheckerboard] = useState<boolean>(false);
	const [enableDarkMode, setEnableDarkMode] = useState<boolean>(false);
	const [currentColorVariables, setCurrentColorVariables] = useState<
		CurrentColor[]
	>(allCurrentColorVariables);

	// UseEffect(() => {
	// 	setTimeout(() => {
	// 		const currentColorsElement =
	// 			document.querySelector('#current-colors');
	//
	// 		if (currentColorsElement) {
	// 			setCurrentColorVariables(
	// 				currentColorVariables.map(({ current }) => {
	// 					const value =
	// 						getComputedStyle(
	// 							currentColorsElement
	// 						).getPropertyValue(current);
	//
	// 					return { current, value };
	// 				})
	// 			);
	// 		}
	// 	}, 100);
	// }, [selectedSemanticBgColor]);

	const onSemanticColorClick = (color: string) => {
		const semanticColorName = color.split('-bg-')[0];
		const semanticColorLevel = color.split('-bg-')[1];

		setSemanticColorName(semanticColorName);
		setSemanticColorLevel(semanticColorLevel);
		setSelectedSemanticBgColor(color);
	};

	const replaceColorPlaceholderByColor = (colorPlaceholder: string) => {
		return colorPlaceholder.replace('%COLOR%', semanticColorName);
	};

	return (
		<DefaultPage>
			<h1>Colors Overview</h1>
			{/* <search> */}
			{/*	<DBInput */}
			{/*		label="Search" */}
			{/*		type="search" */}
			{/*		onChange={(event) => { */}
			{/*			setSearch(event.target.value); */}
			{/*		}} */}
			{/*	/> */}
			{/* </search> */}
			<h2>Semantic Colors</h2>
			<p>
				The semantic colour set <b>neutral-bg-lvl-1</b> is applied to{' '}
				<code>:root</code> by default. Therefore, all texts and DB-UI
				components automatically and <b>adaptively</b> receive the
				correct, accessible (sufficient contrast) colors.
			</p>
			<DBSwitch
				checked={showCheckerboard}
				onChange={(event) => {
					setShowCheckerboard(event.target.checked);
				}}>
				Show checkerboard to visualise transparencies
			</DBSwitch>
			<br />
			<DBSwitch
				checked={enableDarkMode}
				onChange={(event) => {
					setEnableDarkMode(event.target.checked);
				}}>
				Enable dark mode
			</DBSwitch>

			<br />
			<DBTabs>
				<DBTabList>
					<DBTabItem>Classes</DBTabItem>
					<DBTabItem>Data Attributes</DBTabItem>
				</DBTabList>
				<DBTabPanel>
					<ColorsGrid
						variant="class"
						showCheckerboard={showCheckerboard}
						enableDarkMode={enableDarkMode}
						selectedColor={selectedSemanticBgColor}
						onColorClick={onSemanticColorClick}
					/>
				</DBTabPanel>
				<DBTabPanel>
					<ColorsGrid
						variant="data-attribute"
						showCheckerboard={showCheckerboard}
						enableDarkMode={enableDarkMode}
						selectedColor={selectedSemanticBgColor}
						onColorClick={onSemanticColorClick}
					/>
				</DBTabPanel>
			</DBTabs>
			<br />
			<DBSection
				id="current-colors"
				data-color-scheme={enableDarkMode ? 'dark' : 'light'}
				spacing="small">
				<h2>Speaking Colors</h2>
				<p>Farbe</p>
				<table className={`db-${selectedSemanticBgColor}`}>
					<tr>
						<th>Preview</th>
						<th>custom prop: Semantic Color</th>
						<th>custom prop: Speaking Color</th>
					</tr>
					<tr>
						<td
							style={{
								backgroundColor:
									'var(--db-current-color-bg-enabled)'
							}}></td>
						<td>
							<b>--db-current-color-bg-enabled</b>
						</td>
						<td>{`--db-current-color-bg-${semanticColorLevel}-enabled;`}</td>
					</tr>
					{currentColorVariables.map(({ current, speaking }) => (
						<tr>
							<td
								style={{
									backgroundColor: `var(${current})`
								}}></td>
							<td>
								<b>{current}</b>
							</td>
							<td>{replaceColorPlaceholderByColor(speaking)}</td>
						</tr>
					))}
				</table>
			</DBSection>
		</DefaultPage>
	);
};

export default ColorOverview;
