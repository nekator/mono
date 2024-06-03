import DefaultPage from '../../../components/default-page';
import { DBInfotext } from '../../../components/src';

const ColorOverview = () => {
	return (
		<DefaultPage>
			<h1>Fonts-Sizes Overview</h1>
			<h2>Body</h2>
			<DBInfotext data-font-size="md" semantic="warning">
				Some font-sizes are the same for a specific device type. For
				example in mobile all&#20;<code>xl</code>&#20;sizes are the
				same.
			</DBInfotext>
			<div>
				{['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs'].map(
					(size) => (
						<p className={`db-font-size-${size}`}>
							I am size: <strong>{size}</strong>
						</p>
					)
				)}
			</div>
		</DefaultPage>
	);
};

export default ColorOverview;
