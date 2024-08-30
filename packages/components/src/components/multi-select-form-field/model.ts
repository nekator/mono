import { ClickEventProps, GlobalProps, GlobalState } from '../../shared/model';

export interface DBMultiSelectFormFieldDefaultProps {}

export type DBMultiSelectFormFieldProps = DBMultiSelectFormFieldDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLElement>;

export interface DBMultiSelectFormFieldDefaultState {}

export type DBMultiSelectFormFieldState = DBMultiSelectFormFieldDefaultState &
	GlobalState;
