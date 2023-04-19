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
	FormState,
	FormCheckProps
} from '../../shared/model';

export interface DBRadioDefaultProps {
	describedbyid?: string;
	invalid?: boolean;
	size?: 'small';
}

export type DBRadioProps = DBRadioDefaultProps &
	GlobalProps &
	GlobalTextProps &
	ChangeEventProps &
	FocusEventProps &
	ValidEventProps &
	FormProps &
	FormCheckProps;

export type DBRadioDefaultState = {
	initialized: boolean;
	_checked: boolean;
};

export type DBRadioState = DBRadioDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState;
