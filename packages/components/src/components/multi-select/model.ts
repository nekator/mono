import {
	ChangeEvent,
	CloseEventState,
	FormMessageProps,
	FormProps,
	GlobalProps,
	GlobalState,
	InitializedState,
	InnerCloseButtonProps
} from '../../shared/model';
import { DBSelectOptionType } from '../select/model';

export type MultiSelectOptionType = Omit<
	DBSelectOptionType,
	'selected' | 'value' | 'options'
> & {
	value: string;

	/**
	 * If you want to use optgroup you can nest options here.
	 */
	options?: MultiSelectOptionType[];
};

export const MultiSelectDisplayList = ['amount', 'text', 'tag'] as const;
export type MultiSelectDisplayType = (typeof MultiSelectDisplayList)[number];

export interface DBMultiSelectDefaultProps {
	/**
	 * Popover header - deselect all checkbox label
	 */
	deSelectAllLabel?: string;

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
	 * Popover header - search custom event handling (use this for performance reasons)
	 */
	onSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
	/**
	 * You should pass in the options as an array.
	 */
	options?: MultiSelectOptionType[];

	/**
	 * Popover header - search label
	 */
	searchLabel?: string;

	/**
	 * Popover header - search placeholder
	 */
	searchPlaceholder?: string;

	/**
	 * Popover header - select all checkbox label
	 */
	selectAllLabel?: string;

	value?: string[];

	onChange?: (value: string[]) => void;
}

export type DBMultiSelectProps = GlobalProps &
	Omit<FormProps, 'value'> &
	FormMessageProps &
	InnerCloseButtonProps &
	DBMultiSelectDefaultProps;

export interface DBMultiSelectDefaultState {
	_values?: string[];
	_options: MultiSelectOptionType[];
	getOptionLabel: (option: MultiSelectOptionType) => string;
	getOptionChecked: (option: MultiSelectOptionType) => boolean;
	getSelectAllLabel: () => string;
	headerEnabled: boolean;
	searchEnabled: boolean;
	amountOptions: number;
	handleSelect: (value: string) => void;
	handleSelectAll: () => void;
	handleToggleOpen: () => void;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type DBMultiSelectState = DBMultiSelectDefaultState &
	GlobalState &
	InitializedState &
	CloseEventState;
