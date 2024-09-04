import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	IconProps,
	SizeProps,
	SizeType,
	WidthProps
} from '../../shared/model';

export const ButtonVariantList = [
	'outlined',
	'brand',
	'filled',
	'ghost'
] as const;
export type ButtonVariantType = (typeof ButtonVariantList)[number];

export const ButtonTypeList = ['button', 'reset', 'submit'] as const;
export type ButtonTypeType = (typeof ButtonTypeList)[number];

export const ButtonStateList = ['static', 'loading'] as const;
export type ButtonStateType = (typeof ButtonStateList)[number];

export type DBButtonDefaultProps = {
	/**
	 * If the button controls a grouping of other elements, the ariaexpanded state [indicates whether the controlled grouping is currently expanded or collapsed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded).
	 */
	ariaexpanded?: boolean;

	/**
	 * Defines the button as a toggle button. The value of [ariapressed describes the state of the button](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed).
	 */
	ariapressed?: boolean;

	/**
	 * The disabled attribute can be set to [keep a user from clicking on the button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled).
	 */
	disabled?: boolean;

	/**
	 * Define the text next to the icon specified via the icon Property to get hidden.
	 */
	noText?: boolean; // We had to rename this to noText because web-components uses a regex and always finds "icon" instead of "onlyIcon"

	/**
	 * The label represents the [aria-label attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) value of the button
	 */
	label?: string;

	/**
	 * The name attribute specifies a [name attributes value](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#name) for the button.
	 */
	name?: string;

	/**
	 * The type attribute specifies the [type of button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type).
	 */
	type?: ButtonTypeType;

	/**
	 * The value attribute specifies an initial [value for the button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#value).
	 */
	value?: string;

	/**
	 * Show loading progress inside button.
	 */
	state?: ButtonStateType;

	/**
	 * Variant of the button. Use only 1 primary button on a page as CTA otherwise use one of the adaptive buttons.
	 */
	variant?: ButtonVariantType | string;
};

export type DBButtonProps = DBButtonDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLButtonElement> &
	IconProps &
	WidthProps &
	SizeProps;

export type DBButtonDefaultState = {};

export type DBButtonState = DBButtonDefaultState &
	GlobalState &
	ClickEventState<HTMLButtonElement>;
