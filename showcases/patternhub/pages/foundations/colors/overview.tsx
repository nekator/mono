import { useState } from 'react';
import DefaultPage from '../../../components/default-page';
import { COLORS } from '../../../../../packages/components/src/shared/constants';
import { DBInput } from '../../../../../output/react/src';

const ColorOverview = () => {
	const [search, setSearch] = useState<string>('');
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
				{COLORS.map((color) => (
					<div className={`db-${color}`}>{color}</div>
				))}
			</div>
		</DefaultPage>
	);
};

export default ColorOverview;
