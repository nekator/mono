import { useEffect, useState } from 'react';
import DefaultPage from '../../../components/default-page';
import { COLORS } from '../../../components/src/shared/constants';
import {
	DBInput,
	DBSwitch,
	DBTabs,
	DBTabList,
	DBTabItem,
	DBTabPanel
} from '../../../components/src';
import CopyClipboardButton from '../../../components/copy-clipboard-button';
import checkerboard from '../../../assets/images/checkerboard.png';

type ColorsGridProps = {
	showCheckerboard?: boolean;
	variant: 'class' | 'data-attribute';
};

const ColorsGrid = ({ showCheckerboard, variant }: ColorsGridProps) => {
	const getText = (color: string) =>
		variant === 'class' ? `db-${color}` : `[data-color="${color}"]`;
	const getAttributes = (color: string) =>
		variant === 'class'
			? { className: `db-${color}` }
			: { 'data-color': color };

	return (
		<div
			className="color-overview-container db-font-size-sm"
			style={{
				backgroundImage: showCheckerboard
					? `url(${checkerboard.src})`
					: 'none'
			}}>
			{COLORS.map((color, index) => (
				<div {...getAttributes(color)}>
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
	const [search, setSearch] = useState<string>('');
	const [showCheckerboard, setShowCheckerboard] = useState<boolean>(false);
	// Const [displayVariant, setDisplayVariant] = useState<
	// 	'classes' | 'data-attributes'
	// >('classes');

	return (
		<DefaultPage>
			<h1>Color Overview</h1>
			<search>
				<DBInput
					label="Search"
					type="search"
					onChange={(event) => {
						setSearch(event.target.value);
					}}
				/>
			</search>
			<h2>Overview</h2>
			<DBSwitch
				checked={showCheckerboard}
				onChange={(event) => {
					setShowCheckerboard(event.target.checked);
				}}>
				Show checkerboard to visualise transparencies
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
					/>
				</DBTabPanel>
				<DBTabPanel>
					<ColorsGrid
						variant="data-attribute"
						showCheckerboard={showCheckerboard}
					/>
					<div
						className="color-overview-container db-font-size-sm"
						style={{
							backgroundImage: showCheckerboard
								? `url(${checkerboard.src})`
								: 'none'
						}}>
						{COLORS.map((color, index) => (
							<div data-color={`${color}`}>
								<span>[data-color="{color}"]</span>
								<CopyClipboardButton
									name={`copy-button-${index}`}
									copyText={`[data-color="${color}-bg-lvl-2"]`}>
									Copied to clipboard
								</CopyClipboardButton>
							</div>
						))}
					</div>
				</DBTabPanel>
			</DBTabs>
		</DefaultPage>
	);
};

export default ColorOverview;
