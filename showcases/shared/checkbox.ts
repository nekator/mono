import { type DefaultComponentVariants } from './default-component-data';

const defaultComponentVariants: DefaultComponentVariants[] = [
	{
		name: 'States',
		examples: [
			{
				name: 'Default'
			},
			{
				name: 'Disabled'
			},
			{
				name: 'Disabled checked'
			},
			{
				name: 'Required'
			},
			{
				name: 'Checked'
			},
			{
				name: 'Indeterminate'
			},
			{
				name: 'Invalid'
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{ name: 'Default' },
			{
				name: 'Small'
			}
		]
	}
];

export default defaultComponentVariants;
