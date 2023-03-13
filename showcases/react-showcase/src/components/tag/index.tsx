import { DBTag } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import type { DefaultComponentVariants } from '../data';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Basic',
				example: <DBTag editlabel="Edit label" />,
				code: '<DBTag editlabel="Edit label" description="Description" />'
			},
			{
				name: 'Information',
				example: <DBTag editlabel="Edit label" variant="information" />,
				code: '<DBTag editlabel="Edit label" description="Description" variant="information"/>'
			},
			{
				name: 'Warning',
				example: <DBTag editlabel="Edit label" variant="warning" />,
				code: '<DBTag editlabel="Edit label" description="Description" variant="warning"/>'
			},
			{
				name: 'Critical',
				example: <DBTag editlabel="Edit label" variant="critical" />,
				code: '<DBTag editlabel="Edit label" description="Description" variant="critical"/>'
			},
			{
				name: 'Success',
				example: <DBTag editlabel="Edit label" variant="success" />,
				code: '<DBTag editlabel="Edit label" description="Description" variant="success"/>'
			}
		]
	},
	{
		name: 'States',
		examples: [
			{ name: 'Default', example: <DBTag>Tag Label</DBTag> },
			{
				name: 'Inactive',
				example: (
					<DBTag disabled type="check">
						Text
					</DBTag>
				),
				code: '<DBTag disabled/>Text</DBTag>'
			},
			{
				name: 'Disabled',
				example: <DBTag disabled>Text</DBTag>,
				code: '<DBTag disabled/>Text</DBTag>'
			}
		]
	},
	{
		name: 'Content',
		examples: [
			{ name: 'Default (Text)', example: <DBTag>Tag Label</DBTag> }
		]
	},
	{
		name: 'Behavior',
		examples: [
			{ name: 'Default (Text)', example: <DBTag>Tag Label</DBTag> },
			{
				name: 'Selectable',
				example: <DBTag behavior="check">Tag Label</DBTag>
			}
		]
	}
];

const TagComponent = () => {
	return (
		<DefaultComponent
			title={'DBTag'}
			variants={variants}></DefaultComponent>
	);
};

export default TagComponent;
