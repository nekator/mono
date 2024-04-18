import {
	ClickEvent,
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	IconProps,
	InitializedState,
	NavigationBackButtonProps,
	WidthProps
} from '../../shared/model';

export interface DBNavigationItemDefaultProps {
	/**
	 * Indicator for active navigation item (bold font).
	 */
	active?: boolean;

	/**
	 * If the attribute is set the item acts like a button with a sub-navigation
	 */

	areaPopup?: boolean;

	/**
	 * The disabled attribute can be set to [keep a user from clicking on the item](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled).
	 */
	disabled?: boolean;

	/**
	 * React-specific property to pass in a slot for sub-navigation
	 */

	subNavigation?: unknown;

	/**
	 * This is for mobile navigation only, if it is set the sub-navigation is a static overlay
	 */
	subNavigationExpanded?: boolean;
}

export type DBNavigationItemProps = DBNavigationItemDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLButtonElement> &
	IconProps &
	WidthProps &
	NavigationBackButtonProps;

export interface DBNavigationItemDefaultState {
	handleBackClick: (event: ClickEvent<HTMLButtonElement>) => void;
	hasAreaPopup: boolean;
	isSubNavigationExpanded: boolean;
	subNavigationId: string;

	/**
	 * Internal state property to show/hide sub-navigation button
	 */
	hasSubNavigation?: boolean;
	subNavigation?: HTMLMenuElement;
	tryInitSubNavigationHandling: () => void;
	addMouseListeners: () => void;
	onMouseMove: (event: MouseEvent) => void;
	tryUpdateSubNavigationOffset: () => void;
	updateSubNavigationState: () => void;
	// cacheSafeTriangleData: () => void;
	triangleData?: {
		itemRect: DOMRect;
		parentElementWidth: number;
		subNavigationHeight: number;
		padding: number;
	};
	outsideVX: null | string;
	outsideVY: null | string;
}

export type DBNavigationItemState = DBNavigationItemDefaultState &
	ClickEventState<HTMLButtonElement> &
	GlobalState &
	InitializedState;
