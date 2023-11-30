import {
	CardProps,
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState,
	ImageProps,
	SpacingProps
} from '../../shared/model';

export type DBCardDefaultProps = {
	/**
	 * Makes the card interactive (clickable).
	 */
	variant?: 'default' | 'interactive';
};

export type DBCardProps = DBCardDefaultProps &
	GlobalProps &
	ClickEventProps<HTMLElement> &
	ImageProps &
	CardProps &
	SpacingProps;

export type DBCardDefaultState = {};

export type DBCardState = DBCardDefaultState &
	GlobalState &
	ClickEventState<HTMLElement>;
