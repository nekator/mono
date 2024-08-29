import {
	ClickEventProps,
	GlobalProps,
	GlobalState,
	RequiredProps
} from '../../shared/model';

export const SelectedTypeList = ['amount', 'text', 'tag'] as const;
export type SelectedTypeType = (typeof SelectedTypeList)[number];

export interface DBMultiSelectFormFieldDefaultProps {
	selectedType?: SelectedTypeType;
	getAmountText?: (amount: number) => string;
}

export type DBMultiSelectFormFieldProps = DBMultiSelectFormFieldDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLElement> &
	RequiredProps;

export interface DBMultiSelectFormFieldDefaultState {}

export type DBMultiSelectFormFieldState = DBMultiSelectFormFieldDefaultState &
	GlobalState;
