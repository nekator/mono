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

export interface DBRadioDefaultProps {
	id?: string;
	name?: string;
	label?: string;
	checked?: boolean;
	disabled?: boolean;
	value?: any;
	required?: boolean;
	describedbyid?: string;
	invalid?: boolean;
	size?: string;
}

export type DBRadioProps = DBRadioDefaultProps &
	GlobalProps &
	GlobalTextProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps;

export type DBRadioDefaultState = {
	mId?: string;
	_isValid: boolean | undefined;
	_value: any;
	_checked: boolean;
	_label: string;
};

export type DBRadioState = DBRadioDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState;
