import {
	GlobalTextProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	DefaultVariantProps,
	FormProps,
	FormState
} from '../../shared/model';

export interface DBTagDefaultProps {
	variant?: DefaultVariantProps;
	iconBefore?: string;
	value?: string;
	type?: string;
	behavior?: string;
}

export type DBTagProps = DBTagDefaultProps &
	GlobalProps &
	GlobalTextProps &
	ChangeEventProps &
	FormProps;

export interface DBTagDefaultState {
	_id?: string;
	_editlabel?: string;
	_value?: any;
}

export type DBTagState = DBTagDefaultState &
	GlobalState &
	ChangeEventState &
	FormState;
