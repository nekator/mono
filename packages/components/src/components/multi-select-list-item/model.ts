import {
	ChangeEventProps,
	ChangeEventState,
	FormCheckProps,
	FormProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export const MultiSelectListItemGroupLabelPositionList = [
	'bottom',
	'center'
] as const;
export type MultiSelectListItemGroupLabelPositionType =
	(typeof MultiSelectListItemGroupLabelPositionList)[number];

export interface DBMultiSelectListItemDefaultProps {
	groupLabel?: string;
	groupLabelPosition?: MultiSelectListItemGroupLabelPositionType;
}

export type DBMultiSelectListItemProps = DBMultiSelectListItemDefaultProps &
	GlobalProps &
	Omit<FormProps, 'customValidity' | 'form' | 'required'> &
	Omit<FormCheckProps, 'variant'> &
	ChangeEventProps<HTMLInputElement>;

export interface DBMultiSelectListItemDefaultState {}

export type DBMultiSelectListItemState = DBMultiSelectListItemDefaultState &
	ChangeEventState<HTMLInputElement> &
	GlobalState;
