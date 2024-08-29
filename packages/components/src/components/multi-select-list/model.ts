import {
GlobalProps,
GlobalState } from '../../shared/model';

export interface DBMultiSelectListDefaultProps {
}

export type DBMultiSelectListProps =
	DBMultiSelectListDefaultProps  &
	GlobalProps
	;

export interface DBMultiSelectListDefaultState {}

export type DBMultiSelectListState =
	DBMultiSelectListDefaultState &
	GlobalState
	;
