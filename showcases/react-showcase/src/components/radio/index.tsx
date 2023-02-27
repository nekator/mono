import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DBRadio } from '../../../../../output/react/src';
import { COLOR_CONST } from '../../../../../packages/components/src/shared/constants';
import DefaultComponent, { type DefaultComponentVariants } from '../index';

const defaultLabelText = 'Label';

const variants: DefaultComponentVariants[] = [
	{
		name: 'States',
		examples: [
			{ name: 'Default', example: <DBRadio label={defaultLabelText} /> },
			{
				name: 'checked',
				example: <DBRadio label={defaultLabelText} checked={true} />
			},
			{
				name: 'Invalid',
				example: <DBRadio label={defaultLabelText} invalid={true} />
			},
			{
				name: 'Disabled',
				example: <DBRadio label={defaultLabelText} disabled />
			},
			{
				name: 'Required',
				example: <DBRadio label={defaultLabelText} required />
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
