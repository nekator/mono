import { type GlobalProps, type GlobalState } from '../../shared/model';

export type DBDividerDefaultProps = {
	margin?: 'none' | '_';
	variant?: 'horizontal' | 'vertical';
};

export type DBDividerProps = DBDividerDefaultProps & GlobalProps;

export type DBDividerDefaultState = Record<string, unknown>;

export type DBDividerState = DBDividerDefaultState & GlobalState;
