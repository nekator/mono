import {
	FocusEventProps,
	FocusEventState,
	GlobalTextProps,
	ValidEventProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export interface DBCheckboxDefaultProps {
	id?: string;
	name?: string;
	label?: string;
	checked?: boolean;
	disabled?: boolean;
	value?: any;
	required?: boolean;
	describedbyid?: string;
	invalid?: boolean;
	size?: 'small';
}

export type DBCheckboxProps = DBCheckboxDefaultProps &
	GlobalProps &
	GlobalTextProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps;

export type DBCheckboxDefaultState = {
	mId?: string;
	_isValid: boolean | undefined;
	_value: any;
	_checked: boolean;
	_label: string;
};

export type DBCheckboxState = DBCheckboxDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState;
