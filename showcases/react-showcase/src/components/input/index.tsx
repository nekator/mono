import {
	DBInput,
	type LabelVariantType,
	type ValueLabelType
} from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/input.json';
import { type DBInputProps } from '../../../../../output/react/src/components/input/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getDataList = (
	variant?: LabelVariantType
): string[] | ValueLabelType[] => {
	if (variant === 'floating') {
		return ['Test 1', 'Test 2'];
	}

	return [
		{ value: 'test1', label: 'Test 1' },
		{ value: 'test2', label: 'Test 2' }
	];
};

const getInput = ({
	label,
	value,
	type,
	minLength,
	required,
	disabled,
	iconAfter,
	icon,
	children,
	message,
	variant,
	readOnly,
	dataList
}: DBInputProps & { dataList: boolean }) => {
	return (
		<DBInput
			label={label}
			message={message}
			placeholder={children}
			variant={variant}
			defaultValue={value}
			type={type}
			minLength={minLength}
			required={required}
			disabled={disabled}
			readOnly={readOnly}
			iconAfter={iconAfter}
			icon={icon}
			dataList={dataList ? getDataList(variant) : undefined}
		/>
	);
};

const InputComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title={'DBInput'}
			variants={getVariants(
				defaultComponentVariants,
				getInput,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default InputComponent;
