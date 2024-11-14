import {
	GlobalProps,
	GlobalState,
	TextProps,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export type DBAccordionItemDefaultProps = {
	/**
	 * Initial state for the accordion item
	 */
	defaultOpen?: boolean;
	/**
	 * The disabled attribute can be set to keep a user from clicking on the element.
	 */
	disabled?: boolean;
	/**
	 * Title of the accordion-item as slot
	 */
	headline?: unknown;
	/**
	 * Title of the accordion-item as plain text
	 */
	headlinePlain?: string;
	/**
	 * Set details name for exclusive accordions, see https://chromestatus.com/feature/6710427028815872
	 */
	name?: string;
};

export type DBAccordionItemProps = DBAccordionItemDefaultProps &
	GlobalProps &
	ToggleEventProps &
	TextProps;

export type DBAccordionItemDefaultState = {
	_open: boolean;
};

export type DBAccordionItemState = DBAccordionItemDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement>;
