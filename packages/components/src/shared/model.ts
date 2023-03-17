export type GlobalProps = {
	id?: string;
	title?: string;
	stylePath?: string;
	className?: string;
	children?: any;
};

export type GlobalState = {
	stylePath?: string;
};

export type DefaultVariantProps =
	| 'adaptive'
	| 'critical'
	| 'informational'
	| 'warning'
	| 'successful';

export const DefaultVariantsIcon: any = {
	critical: 'error',
	// TODO: 'error-triangle' will change to 'warning' soon
	warning: 'error-triangle',
	successful: 'check-circle',
	informational: 'info'
};

export type IconProps = {
	icon?: string; // TODO: Add correct icon strings here
};

export type IconState = {
	iconVisible: (icon: string) => boolean;
};

export type FormProps = {
	label?: string;
	disabled?: boolean;
	required?: boolean;
	value?: any;
	name?: string;
};

export type FormState = {
	_id?: string;
	_isValid?: boolean | undefined;
	_value?: any;
};

export type GlobalTextProps = {
	placeholder?: string;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
};

export type ImageProps = {
	imgAlt?: string;
	imgSrc?: string;
	imgHeight?: number;
	imgWidth?: number;
};

export type LinkProps = {
	current?:
		| boolean
		| 'time'
		| 'true'
		| 'false'
		| 'date'
		| 'page'
		| 'step'
		| 'location'
		| undefined;
	disabled?: boolean;
	href?: string;
	hreflang?: string;
	label?: string;
	target?: '_self' | '_blank' | '_parent' | '_top';
	rel?: string;
	role?: string;
	referrerpolicy?:
		| 'no-referrer'
		| 'no-referrer-when-downgrade'
		| 'origin'
		| 'origin-when-cross-origin'
		| 'same-origin'
		| 'strict-origin'
		| 'strict-origin-when-cross-origin'
		| 'unsafe-url';
	selected?: boolean;
};

export type ClickEventProps = {
	onClick?: (event: Event) => void;
};

export type ClickEventState = {
	handleClick: (event: Event) => void;
};

export type ChangeEventProps = {
	change?: (event: Event) => void;
	onChange?: (event: Event) => void;
};

export type ChangeEventState = {
	handleChange: (event: Event) => void;
};

export type FocusEventProps = {
	blur?: (event: Event) => void;
	onBlur?: (event: Event) => void;
	focus?: (event: Event) => void;
	onFocus?: (event: Event) => void;
};

export type FocusEventState = {
	handleBlur: (event: Event) => void;
	handleFocus: (event: Event) => void;
};

export type ValidEventProps = {
	validityChange?: (valid: boolean) => void;
};

export type NestedRefComponentType = { getFormRef?: () => { current?: any } };
