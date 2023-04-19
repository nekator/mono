import { DBCheckbox } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { getVariants } from '../data';
import defaultComponentVariants from '../../../../shared/checkbox';
import { type DBCheckboxProps } from '../../../../../output/react/src/components/checkbox/model';
import type { DefaultComponentExample } from '../../../../shared/default-component-data';

const defaultLabelText = 'Label';

const getCheckbox = ({
	label,
	size,
	name,
	checked,
	invalid,
	required,
	children,
	disabled,
	indeterminate
}: DBCheckboxProps) => (
	<DBCheckbox
		label={label}
		size={size}
		name={name}
		checked={checked}
		invalid={invalid}
		required={required}
		disabled={disabled}
		indeterminate={indeterminate}>
		{children}
	</DBCheckbox>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getCheckbox({ children: exampleName, name: 'States' }),
			code: '<DBCheckbox name="States">Label</DBCheckbox>'
		},
		{
			example: getCheckbox({
				children: exampleName,
				disabled: true,
				name: 'States'
			}),
			code: '<DBCheckbox disabled name="States">Label</DBCheckbox>'
		},
		{
			example: getCheckbox({
				children: exampleName,
				disabled: true,
				checked: true,
				name: 'States'
			}),
			code: '<DBCheckbox disabled checked name="States">Label</DBCheckbox>'
		},
		{
			example: getCheckbox({
				children: exampleName,
				required: true,
				name: 'States'
			}),
			code: '<DBCheckbox required name="States">Label</DBCheckbox>'
		},
		{
			example: getCheckbox({
				children: exampleName,
				checked: true,
				name: 'States'
			}),
			code: '<DBCheckbox checked name="States">Label</DBCheckbox>'
		},
		{
			example: getCheckbox({
				children: exampleName,
				indeterminate: true,
				name: 'States'
			}),
			code: '<DBCheckbox indeterminate name="States">Label</DBCheckbox>'
		},
		{
			example: getCheckbox({
				children: exampleName,
				invalid: true,
				name: 'States'
			}),
			code: '<DBCheckbox invalid name="States">Label</DBCheckbox>'
		}
	],
	[
		{
			example: getCheckbox({ children: exampleName, name: 'Size' }),
			code: '<DBCheckbox name="Size">Label</DBCheckbox>'
		},
		{
			example: getCheckbox({
				children: exampleName,
				name: 'Size',
				size: 'small'
			}),
			code: '<DBCheckbox size="small" name="Size">Label</DBCheckbox>'
		}
	]
];

const CheckboxComponent = () => {
	return (
		<DefaultComponent
			title={'DBCheckbox'}
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default CheckboxComponent;
