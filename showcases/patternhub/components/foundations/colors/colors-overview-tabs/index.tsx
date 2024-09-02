import { useState } from 'react';
import {
	DBSwitch,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from '../../../../../../output/react/src';
import ColorsGrid from '../colors-grid';
import { type ColorValue } from '../data';

const ColorsOverviewTabs = ({
	values,
	prefixClass,
	dataAttributeName
}: {
	values: ColorValue[];
	prefixClass: string;
	dataAttributeName: string;
}) => {
	const [showCheckerboard, setShowCheckerboard] = useState<boolean>(false);
	const [enableDarkMode, setEnableDarkMode] = useState<boolean>(false);

	return (
		<>
			<div className="color-overview-switches">
				<DBSwitch
					checked={showCheckerboard}
					onChange={(event) => {
						setShowCheckerboard(event.target.checked);
					}}>
					Show checkerboard
				</DBSwitch>
				<DBSwitch
					checked={enableDarkMode}
					onChange={(event) => {
						setEnableDarkMode(event.target.checked);
					}}>
					Preview dark mode
				</DBSwitch>
			</div>
			<DBTabs>
				<DBTabList>
					<DBTabItem>Classes</DBTabItem>
					<DBTabItem>Data Attributes</DBTabItem>
				</DBTabList>
				<DBTabPanel>
					<ColorsGrid
						variant="class"
						values={values}
						prefixClass={prefixClass}
						dataAttributeName={dataAttributeName}
						showCheckerboard={showCheckerboard}
						enableDarkMode={enableDarkMode}
					/>
				</DBTabPanel>
				<DBTabPanel>
					<ColorsGrid
						variant="dataAttribute"
						values={values}
						prefixClass={prefixClass}
						dataAttributeName={dataAttributeName}
						showCheckerboard={showCheckerboard}
						enableDarkMode={enableDarkMode}
					/>
				</DBTabPanel>
			</DBTabs>
		</>
	);
};

export default ColorsOverviewTabs;
