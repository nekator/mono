import {
	ClickEventProps,
	ClickEventState,
	GlobalProps,
	GlobalState
} from '../../shared/model';

export interface DBLinkDefaultProps {
	id?: string;
	href?: string;
	anchorLink?: string;
	title?: string;
	rel?: string;
	role?: string;
	disabled?: boolean;
	selected?: boolean;
	label?: string;
	hreflang?: string;
	target?: string;
	current?: string;
	size?: string;
	variant?: string;
	content?: string;
}

export type DBLinkProps = DBLinkDefaultProps & GlobalProps & ClickEventProps;

export interface DBLinkDefaultState {}

export type DBLinkState = DBLinkDefaultState & GlobalState & ClickEventState;
