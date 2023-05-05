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
	/**
	 * The interactive attribute changes the tag from a span to a checkbox.
	 */
	interactive?: boolean;
	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean;
	/**
	 * If "removeButton" attribute is set this function will be called when user clicks cancel button inside the tag.
	 */
	onRemove?: () => void;
	/**
	 * The overflow attribute sets a max-width and longer text will be dotted.
	 */
	overflow?: boolean;
	/**
	 * The removeButton attribute shows the cancel button.
	 */
	removeButton?: boolean | string;
	/**
	 * The strong attribute changes the font-size of the label to bold.
	 */
	strong?: boolean;
	/**
	 * If "interactive" is set to true, you can pass a value to the checkbox input.
	 */
	value?: string;
}

export type DBTagProps = DBTagDefaultProps &
	GlobalProps &
	ChangeEventProps &
	FormProps &
	FormCheckProps &
	IconProps &
	DefaultVariantProps;

export interface DBTagDefaultState {
	getRemoveButtonText?: () => string;
	getTabIndex?: () => number | null;
	handleRemove?: () => void;
}

export type DBTagState = DBTagDefaultState &
	GlobalState &
	ChangeEventState &
	FormState &
	FormCheckState &
	IconState;
