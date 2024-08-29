import { GlobalProps, GlobalState } from '../../shared/model';

export interface DBMultiSelectDropdownDefaultProps {
	/**
	 * Slot for passing multi-select-dropdown-header
	 */
	header?: unknown;

	/**
	 * Slot for passing notification for errors or as loading information
	 */
	notification?: unknown;
}

export type DBMultiSelectDropdownProps = DBMultiSelectDropdownDefaultProps &
	GlobalProps;

export interface DBMultiSelectDropdownDefaultState {
	_placeholderId: string;}

export type DBMultiSelectDropdownState = DBMultiSelectDropdownDefaultState &
	GlobalState;
