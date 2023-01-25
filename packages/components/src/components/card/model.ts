import {
	type ClickEventProps,
	type ClickEventState,
	type GlobalProps,
	type GlobalState
} from '../../shared/model';

export type DBCardDefaultProps = {
	colorVariant?: string;
	direction?: 'row' | 'column';
	imgAlt?: string;
	imgSrc?: string;
	imgHeight?: number | string;
	imgWidth?: number | string;
	variant?: 'full-width' | 'ia';
};

export type DBCardProps = DBCardDefaultProps & GlobalProps & ClickEventProps;

export type DBCardDefaultState = Record<string, unknown>;

export type DBCardState = DBCardDefaultState & GlobalState & ClickEventState;
