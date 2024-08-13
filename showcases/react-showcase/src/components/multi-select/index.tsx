import { DBMultiSelect } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/multi-select.json';
import type { DBMultiSelectProps } from '../../../../../output/react/src/components/multi-select/model';
import { getVariants } from '../data';
import { useState } from 'react';

const getMultiSelect = ({
	children,
	message,
	variant,
	value,
	required,
	options,
	placeholder
}: DBMultiSelectProps) => {
	const [mValue, setValue] = useState<string[] | undefined>(value);
	return (
		<form>
			<DBMultiSelect
				label={children}
				options={options}
				variant={variant}
				message={message}
				required={required}
				placeholder={placeholder}
				selectAllLabel="Select all"
				deSelectAllLabel="Deselect all"
				searchLabel="Search"
				noOptionsText="No matching filter"
				value={mValue}
				onChange={(val) => setValue(val)}
			/>
		</form>
	);
};

const MultiSelectComponent = () => {
	return (
		<DefaultComponent
			title="DBMultiSelect"
			variants={getVariants(
				defaultComponentVariants,
				getMultiSelect
			)}></DefaultComponent>
	);
};

export default MultiSelectComponent;
