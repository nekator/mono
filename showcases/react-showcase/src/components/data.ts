import type { FunctionComponent, ReactElement } from 'react';
import type { DefaultComponentVariants } from '../../../shared/default-component-data';

export const getVariants = (
	defaultComponentVariants: DefaultComponentVariants[],
	getExample: (properties: any) => ReactElement,
	codeSlots?: Record<string, FunctionComponent>
): DefaultComponentVariants[] =>
	defaultComponentVariants.map((variant, variantIndex) => ({
		...variant,
		SlotCode: codeSlots?.[variant.name.replaceAll(' ', '')],
		examples: variant.examples.map((example, exampleIndex) => ({
			...example,
			example: getExample({
				...example.props,
				id: example.props?.id ?? example.name,
				children: example.props?.children ?? example.name
			})
		}))
	}));
