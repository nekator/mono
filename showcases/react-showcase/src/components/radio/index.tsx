import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DBRadio } from '../../../../../output/react/src';
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
			title={'DBRadio'}
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

export default RadioComponent;
