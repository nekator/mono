import { type FunctionComponent, type ReactElement } from 'react';
import { SubComponentProps } from '../../../shared/default-component-data';

export type BaseComponentProps = {
	slotCode?: Record<string, FunctionComponent>;
	subComponent?: ReactElement;
	isSubComponent?: boolean;
	componentName?: string;
};
