import { DBCheckbox } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import type { DefaultComponentVariants } from '../data';

const defaultLabelText = 'Label';

const variants: DefaultComponentVariants[] = [
	{
		name: 'States',
		examples: [
			{
				name: 'Default',
				example: <DBCheckbox label={defaultLabelText} />
			},
			{
				name: 'checked',
				example: <DBCheckbox label={defaultLabelText} checked={true} />
			},
			{
				name: 'Invalid',
				example: <DBCheckbox label={defaultLabelText} invalid={true} />
			},
			{
				name: 'Disabled',
				example: <DBCheckbox label={defaultLabelText} disabled />
			},
			{
				name: 'Required',
				example: <DBCheckbox label={defaultLabelText} required />
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{ name: 'Default', example: <DBCheckbox label="Label" /> },
			{
				name: 'Small',
				example: <DBCheckbox label="Label" size="small" />
			}
		]
	}
];

const CheckboxComponent = () => {
	return (
		<DefaultComponent
			title={'DBCheckbox'}
			variants={variants}></DefaultComponent>
	);
};

export default CheckboxComponent;
