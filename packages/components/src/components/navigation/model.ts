import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBNavigationDefaultProps {
	labelledBy?: string;
}

export type DBNavigationProps = DBNavigationDefaultProps & GlobalProps;

export interface DBNavigationDefaultState {}

export type DBNavigationState = DBNavigationDefaultState & GlobalState;
