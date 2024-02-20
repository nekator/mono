import {
	CardProps,
	ClickEventProps,
	ClickEventState,
	SemanticProps,
	GlobalProps,
	GlobalState,
	IconProps,
	InnerCloseButtonProps,
	LinkProps
} from '../../shared/model';

export interface DBAlertDefaultProps {
	/**
	 * The arialive attribute will lead to that the screenreader interrupts immediately
	 * and reads out the notification if set to "assertive", while it will wait for the
	 * user's idleness when set to "polite", compare to [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
	 */
	ariaLive?: 'assertive' | 'polite' | 'off' | undefined;
	/**
	 * The behaviour attribute shows/hides the close button on the top right.
	 */
	behaviour?: 'closable' | 'permanent';
	/**
	 * The headline attribute changes the text of the bold headline.
	 */
	headline?: string;
	/**
	 * The link attribute changes the props of the link (only available when using slotLink).
	 */
	link?: LinkProps;

	/**
	 * The type attribute changes the styling of the alert.
	 * The inline alert has a box-shadow and rounded corners (similar to card).
	 */
	type?: 'alert' | 'inline';
}

export type DBAlertProps = DBAlertDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLButtonElement> &
	IconProps &
	CardProps &
	SemanticProps &
	InnerCloseButtonProps;

export interface DBAlertDefaultState {}

export type DBAlertState = DBAlertDefaultState &
	GlobalState &
	ClickEventState<HTMLButtonElement>;
