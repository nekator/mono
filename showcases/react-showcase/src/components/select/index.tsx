import { useState } from 'react';
import { DBSelect } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/select.json';
import type { DBSelectProps } from '../../../../../output/react/src/components/select/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getSelect = ({
	children,
	label,
	options,
	icon,
	message,
	disabled,
	value,
	required,
	variant
}: DBSelectProps) => {
	const [mValue, setValue] = useState<string>(value);
	return (
		<DBSelect
			label={label}
			placeholder={children}
			options={options}
			disabled={disabled}
			variant={variant}
			icon={icon}
			value={mValue}
			onChange={(event) => {
				setValue(event.target.value);
			}}
			message={message}
			required={required}>
			{children}
		</DBSelect>
	);
};

const SelectComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBSelect"
			variants={getVariants(
				defaultComponentVariants,
				getSelect,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default SelectComponent;
