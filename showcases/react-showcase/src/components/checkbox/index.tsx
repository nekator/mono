import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DBCheckbox } from '../../../../../output/react/src';
import {
	COLOR_CONST,
	INVALID_INPUT_BACKGROUNDS
} from '../../../../../packages/components/src/shared/constants';
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
	const [searchParameters] = useSearchParams();
	const [backgroundWarning, setBackgroundWarning] = useState<boolean>(false);

	useEffect(() => {
		setBackgroundWarning(
			(searchParameters.has(COLOR_CONST) &&
				Boolean(
					INVALID_INPUT_BACKGROUNDS.some((iBg) =>
						iBg.includes(searchParameters.get(COLOR_CONST) ?? '')
					)
				)) ||
				false
		);
	}, [searchParameters]);

	return (
		<DefaultComponent
			title={'DBCheckbox'}
			variants={variants}
			description={
				<>
					{backgroundWarning && (
						<strong>
							This background is not working with inputs! Please
							use light colors as background.
						</strong>
					)}
				</>
			}></DefaultComponent>
	);
};

export default CheckboxComponent;
