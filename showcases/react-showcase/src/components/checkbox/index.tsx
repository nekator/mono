import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DBCheckbox } from '../../../../../output/react/src';
import { COLOR_CONST } from '../../../../../packages/components/src/shared/constants';
import DefaultComponent, { type DefaultComponentVariants } from '../index';

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
