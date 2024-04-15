import { DBIcon, DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/icon.json';
import { type DBIconProps } from '../../../../../output/react/src/components/icon/model';
import { getVariants } from '../data';

const getIcon = ({ children }: DBIconProps) => (
	<>
		<DBInfotext icon="none" size="small" semantic="informational">
			{children}
		</DBInfotext>
		<DBIcon icon="user">{children}</DBIcon>
	</>
);

const IconComponent = () => {
	return (
		<DefaultComponent
			title={'DBIcon'}
			variants={getVariants(
				defaultComponentVariants,
				getIcon
			)}></DefaultComponent>
	);
};

export default IconComponent;
