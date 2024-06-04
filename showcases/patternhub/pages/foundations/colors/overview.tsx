import { useEffect, useState } from 'react';
import DefaultPage from '../../../components/default-page';
import { COLORS } from '../../../components/src/shared/constants';
import { DBInput, DBButton, DBTooltip } from '../../../components/src';
import CopyClipboardButton from '../../../components/copy-clipboard-button';

const ColorOverview = () => {
	const [search, setSearch] = useState<string>('');
	// Const [copiedIndex, setCopiedIndex] = useState<number>(-1);
	//
	// const onCopyButtonClick = (
	// 	event: React.MouseEvent<HTMLButtonElement>,
	// 	index: number
	// ) => {
	// 	const label = (
	// 		event.target as HTMLButtonElement
	// 	).parentElement?.querySelector('span');
	// 	if (label?.textContent && typeof navigator !== 'undefined') {
	// 		setCopiedIndex(index);
	// 		navigator.clipboard.writeText(label.textContent);
	// 	}
	// };
	//
	// useEffect(() => {
	// 	let timeoutId: NodeJS.Timeout | undefined;
	//
	// 	if (copiedIndex > -1) {
	// 		timeoutId = setTimeout(() => {
	// 			setCopiedIndex(-1);
	// 		}, 1500);
	// 	}
	//
	// 	return () => clearTimeout(timeoutId);
	// }, [copiedIndex]);

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
			<div className="color-overview-container">
				{COLORS.map((color, index) => (
					<div className={`db-${color}`}>
						<span>db-{color}</span>
						<CopyClipboardButton
							name={`copy-button-${index}`}
							copyText={`db-${color}`}>
							Copied to clipboard
						</CopyClipboardButton>
					</div>
				))}
			</div>
		</DefaultPage>
	);
};

export default ColorOverview;
