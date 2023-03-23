import { type DefaultComponentVariants } from './default-component-data';

const defaultComponentVariants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Basic'
			},
			{
				name: 'Information'
			},
			{
				name: 'Warning'
			},
			{
				name: 'Critical'
			},
			{
				name: 'Success'
			}
		]
	},
	{
		name: 'States',
		examples: [
			{ name: 'Default' },
			{
				name: 'Inactive'
			},
			{
				name: 'Disabled'
			}
		]
	},
	{
		name: 'Content',
		examples: [{ name: 'Default (Text)' }]
	},
	{
		name: 'Behavior',
		examples: [
			{ name: 'Default (Text)' },
			{
				name: 'Selectable'
			}
		]
	}
];

export default defaultComponentVariants;
