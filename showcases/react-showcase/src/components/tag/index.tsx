import { DBTag } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/tag';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import { type DBTagProps } from '../../../../../output/react/src/components/tag/model';
import { getVariants } from '../../utils';

const getTag = ({ children }: DBTagProps) => <DBTag>{children}</DBTag>;

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[{ example: getTag({ children: exampleName }) }]
];

const TagComponent = () => {
	return (
		<DefaultComponent
			title="DBTag"
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default TagComponent;
