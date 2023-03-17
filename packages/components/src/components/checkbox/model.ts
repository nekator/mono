import {
	FocusEventProps,
	FocusEventState,
	GlobalTextProps,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	FormProps,
	FormState
} from '../../shared/model';

export interface DBCheckboxDefaultProps {
	checked?: boolean;
	describedbyid?: string;
	invalid?: boolean;
	size?: 'small';
	value?: any;
}

export type DBCheckboxProps = DBCheckboxDefaultProps &
	GlobalProps &
	GlobalTextProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps &
	FormProps;

export type DBCheckboxDefaultState = {
	_value?: any;
	initialized: boolean;
	_checked: boolean;
};

export type DBCheckboxState = DBCheckboxDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState;
