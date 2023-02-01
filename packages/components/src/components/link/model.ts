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
	target?: '_self' | '_blank' | '_parent' | '_top';
	current?: string;
	size?: string;
	variant?: string;
	content?: 'external' | 'internal';
	referrerpolicy?:
		| 'no-referrer'
		| 'no-referrer-when-downgrade'
		| 'origin'
		| 'origin-when-cross-origin'
		| 'same-origin'
		| 'strict-origin'
		| 'strict-origin-when-cross-origin'
		| 'unsafe-url';
}

export type DBLinkProps = DBLinkDefaultProps & GlobalProps & ClickEventProps;

export interface DBLinkDefaultState {
	_content: string;
}

export type DBLinkState = DBLinkDefaultState & GlobalState & ClickEventState;
