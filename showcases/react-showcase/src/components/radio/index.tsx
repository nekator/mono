import { DBRadio } from '../../../../../output/react/src';
import DefaultComponent, { type DefaultComponentVariants } from '../index';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variants',
		examples: [
			{ name: 'Default', example: <DBRadio label="Label" /> },
			{
				name: 'Disabled',
				example: <DBRadio label="Label" disabled={true} />
			},
			{
				name: 'Required',
				example: <DBRadio label="Label" required={true} />
			}
		]
	},
	{
		name: 'States',
		examples: [
			{ name: 'Default', example: <DBRadio label="Label" /> },
			{
				name: 'Checked',
				example: <DBRadio label="Label" checked={true} />
			},
			{
				name: 'Invalid',
				example: <DBRadio label="Label" invalid={true} />
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{ name: 'Default', example: <DBRadio label="Label" /> },
			{
				name: 'Small',
				example: <DBRadio label="Label" size="small" />
			}
		]
	}
];

const RadioComponent = () => {
	return (
		<DefaultComponent
			title={'DBRadio'}
			variants={variants}></DefaultComponent>
	);
};

export default RadioComponent;
