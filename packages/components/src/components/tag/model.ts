import {
	GlobalTextProps,
	ChangeEventState,
	ChangeEventProps,
	GlobalProps,
	GlobalState,
	DefaultVariantProps,
	FormProps,
	FormState,
	IconProps,
	IconState,
	FormCheckProps,
	FormCheckState
} from '../../shared/model';

export interface DBTagDefaultProps {
	interactive?: boolean;
	label?: string;
	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean;
	onRemove?: () => void;
	overflow?: boolean;
	strong?: boolean;
	tabIndex?: number;
	value?: string;
	removeButton?: boolean | string;
}

export type DBTagProps = DBTagDefaultProps &
	GlobalProps &
	GlobalTextProps &
	ChangeEventProps &
	FormProps &
	FormCheckProps &
	IconProps &
	DefaultVariantProps;

export interface DBTagDefaultState {
	getTabIndex?: () => number | null;
	handleRemove?: () => void;
	getRemoveButtonText?: () => string;
}

export type DBTagState = DBTagDefaultState &
	GlobalState &
	ChangeEventState &
	FormState &
	FormCheckState &
	IconState;
