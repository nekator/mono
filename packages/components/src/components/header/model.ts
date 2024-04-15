import {
	GlobalProps,
	GlobalState,
	InitializedState,
	NavigationBehaviourState,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export interface DBHeaderDefaultProps {
	brand?: unknown;
	metaNavigation?: unknown;
	callToAction?: unknown;
	actionBar?: unknown;
	drawerOpen?: boolean;

	/**
	 * Forces the header to use mobile layout for desktop as well.
	 * You should only use this setting if you really can't provide a smaller navigation.
	 * Overwrite size of the drawer with '--db-drawer-max-width: xxx'
	 */
	forceMobile?: boolean;

	/**
	 * This attribute sets the label for the burger menu button for mobile headers.
	 */

	burgerMenuLabel?: string;
}

export type DBHeaderProps = DBHeaderDefaultProps &
	GlobalProps &
	ToggleEventProps;

export interface DBHeaderDefaultState {
	forcedToMobile?: boolean;
}

export type DBHeaderState = DBHeaderDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement> &
	InitializedState &
	NavigationBehaviourState;
