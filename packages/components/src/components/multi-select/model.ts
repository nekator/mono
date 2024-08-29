import {
	ChangeEvent,
	CloseEventState,
	FormMessageProps,
	FormProps,
	FormState,
	GlobalProps,
	GlobalState,
	InitializedState,
	InnerCloseButtonProps
} from '../../shared/model';
import { DBSelectOptionType } from '../select/model';
import { DBMultiSelectHeaderLabelProps } from '../multi-select-header/model';
import { DBMultiSelectFormFieldDefaultProps } from '../multi-select-form-field/model';

export type MultiSelectOptionType = {
	/**
	 * Identifier for option
	 */
	id?: string;

	/**
	 * Disables this option
	 */
	disabled?: boolean;

	/**
	 * Selects this option
	 */
	selected?: boolean;

	/**
	 * If the value is different from the label you want to show to the user.
	 */
	label?: string;

	value?: string;

	isGroup?: boolean;
};

export const MultiSelectDisplayList = ['amount', 'text', 'tag'] as const;
export type MultiSelectDisplayType = (typeof MultiSelectDisplayList)[number];

export interface DBMultiSelectDefaultProps {
	/**
	 * Change the display type for values shown in multi select
	 */
	display?: MultiSelectDisplayType;
	/**
	 * Disable default click outside handling. Will force header with close button.
	 */
	enableClickOutside?: boolean;

	/**
	 * Forces header
	 */
	enableHeader?: boolean;
	/**
	 * Forces search in header.
	 */
	enableSearch?: boolean;
	/**
	 * Popover - hint if there are no options
	 */
	noOptionsText?: string;
	/**
	 * Popover - hint if data has to be loaded
	 */
	loadingText?: string;
	/**
	 * Popover - enable loading notification and spinner
	 */
	isLoading?: boolean;
	/**
	 * Popover - enable no options notification
	 */
	hasNoOptions?: boolean;

	/**
	 * You should pass in the options as an array.
	 */
	options?: MultiSelectOptionType[];

	value?: string[];

	onChange?: (value: string[]) => void;
}

export type DBMultiSelectProps = GlobalProps &
	InnerCloseButtonProps &
	DBMultiSelectHeaderLabelProps &
	Omit<FormProps, 'value'> &
	FormMessageProps &
	DBMultiSelectDefaultProps &
	DBMultiSelectFormFieldDefaultProps;

export interface DBMultiSelectDefaultState {
	_values?: string[];
	_options: MultiSelectOptionType[];
	_hasNoOptions: boolean;
	_labelId: string;
	_placeholderId: string;
	getOptionLabel: (option: MultiSelectOptionType) => string;
	getOptionChecked: (value: string) => boolean;
	headerEnabled: boolean;
	searchEnabled: boolean;
	amountOptions: number;
	handleSelect: (value: string) => void;
	handleSelectAll: () => void;
	handleToggleOpen: () => void;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	selectAllChecked: boolean;
	selectAllIndeterminate: boolean;
}

export type DBMultiSelectState = DBMultiSelectDefaultState &
	GlobalState &
	FormState &
	InitializedState &
	CloseEventState;
