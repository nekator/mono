import {
	For,
	Fragment,
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import {
	DBMultiSelectProps,
	DBMultiSelectState,
	MultiSelectOptionType
} from './model';
import { cls, delay, hasVoiceOver, uuid } from '../../utils';
import {
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_LABEL,
	DEFAULT_LABEL_ID_SUFFIX,
	DEFAULT_MESSAGE,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_PLACEHOLDER_ID_SUFFIX,
	DEFAULT_REMOVE,
	DEFAULT_SELECT_ID_SUFFIX,
	DEFAULT_SELECTED,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import { ChangeEvent } from '../../shared/model';
import { DBMultiSelectList } from '../multi-select-list';
import { DBMultiSelectListItem } from '../multi-select-list-item';
import { DBMultiSelectDropdown } from '../multi-select-dropdown';
import { DBMultiSelectHeader } from '../multi-select-header';
import { DBNotification } from '../notification';
import { DBInfotext } from '../infotext';
import { DBMultiSelectFormField } from '../multi-select-form-field';
import { DBTag } from '../tag';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBMultiSelect(props: DBMultiSelectProps) {
	// This is used as forwardRef
	const ref = useRef<HTMLDivElement>(null);
	const detailsRef = useRef<HTMLDetailsElement>(null);
	const selectRef = useRef<HTMLSelectElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMultiSelectState>({
		_id: 'multi-select-' + uuid(),
		_selectId: this._id + DEFAULT_SELECT_ID_SUFFIX,
		_labelId: this._id + DEFAULT_LABEL_ID_SUFFIX,
		_messageId: this._id + DEFAULT_MESSAGE_ID_SUFFIX,
		_validMessageId: this._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX,
		_invalidMessageId: this._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
		_placeholderId: this._id + DEFAULT_PLACEHOLDER_ID_SUFFIX,
		// Workaround for Vue output: TS for Vue would think that it could be a function, and by this we clarify that it's a string
		_descByIds: '',
		_selectedLabels: '',
		initialized: false,
		_voiceOverFallback: '',
		_selectedOptions: [],
		headerEnabled: false,
		searchEnabled: false,
		amountOptions: 0,
		_values: [],
		_options: [],
		_hasNoOptions: false,
		getOptionLabel: (option: MultiSelectOptionType) => {
			return option.label ?? option.value?.toString();
		},
		getOptionChecked: (value: string) => {
			if (state._values && state._values.includes) {
				return state._values?.includes(value);
			}

			return false;
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClose: (event: 'close' | MouseEvent) => {
			if (detailsRef) {
				if (event === 'close') {
					detailsRef.open = false;
				} else {
					const target = event.target as HTMLElement;
					if (
						!(
							detailsRef.contains(target) ||
							target.id.includes(state._id)
						)
					) {
						detailsRef.open = false;
						document.removeEventListener(
							'click',
							state.handleClose
						);
					}
				}
			}
		},
		handleSelect: (value: string) => {
			if (state._values?.includes(value)) {
				state._values = state._values?.filter(
					(v: string) => v !== value
				);
			} else {
				state._values = [...state._values, value];
			}
			state._internalChangeTimestamp = new Date().getTime();
		},
		handleSelectAll: () => {
			if (state._values?.length === state.amountOptions) {
				state._values = [];
			} else {
				state._values = props.options
					? props.options
							.filter((option) => !option.isGroup)
							.map((option) => option.value)
					: [];
			}
			state._internalChangeTimestamp = new Date().getTime();
		},
		handleToggleOpen: () => {
			if (
				props.enableClickOutside === undefined ||
				props.enableClickOutside
			) {
				if (typeof window !== 'undefined') {
					if (detailsRef?.open) {
						document.removeEventListener(
							'click',
							state.handleClose
						);
					} else {
						document.addEventListener('click', state.handleClose);
					}
				}
			}
		},
		handleSearch: (event: ChangeEvent<HTMLInputElement>) => {
			const filterText = (event.target as HTMLInputElement).value;
			state._options =
				!props.options || !filterText || filterText.length === 0
					? props.options
					: props.options.filter(
							(option) =>
								!option.isGroup &&
								state
									.getOptionLabel(option)
									.toLowerCase()
									.includes(filterText.toLowerCase())
						);
		},
		selectAllChecked: false,
		selectAllIndeterminate: false
	});
	// jscpd:ignore-end

	onMount(() => {
		state._id = props.id || state._id;
		state.initialized = true;
	});

	onUpdate(() => {
		if (state._id && state.initialized) {
			const labelId = state._id + DEFAULT_LABEL_ID_SUFFIX;
			const selectId = state._id + DEFAULT_SELECT_ID_SUFFIX;
			const messageId = state._id + DEFAULT_MESSAGE_ID_SUFFIX;
			const validMessageId = state._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			const invalidMessageId =
				state._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
			const placeholderId = state._id + DEFAULT_PLACEHOLDER_ID_SUFFIX;
			state._labelId = labelId;
			state._selectId = selectId;
			state._messageId = messageId;
			state._validMessageId = validMessageId;
			state._invalidMessageId = invalidMessageId;
			state._placeholderId = placeholderId;

			if (props.message) {
				state._descByIds = `${labelId} ${messageId}`;
			} else {
				state._descByIds = `${labelId} ${placeholderId}`;
			}

			state.initialized = false;
		}
	}, [state._id, state.initialized]);

	onUpdate(() => {
		if (detailsRef) {
			const summaries = detailsRef.getElementsByTagName('summary');
			if (summaries && summaries.length > 0) {
				summaries[0].setAttribute('aria-describedby', state._descByIds);
			}
		}
	}, [detailsRef, state._descByIds]);

	onUpdate(() => {
		if (props.hasNoResults !== undefined) {
			state._hasNoOptions = props.hasNoResults;
		} else if (state._options) {
			state._hasNoOptions = state._options.length === 0;
		}
	}, [props.hasNoResults, state._options]);

	onUpdate(() => {
		// Enable header if
		// 1. User set it
		// 2. User disables click outside
		// 3. more than 5 options
		state.headerEnabled =
			props.enableHeader ||
			(props.enableClickOutside !== undefined &&
				!props.enableClickOutside) ||
			state.amountOptions > 5;
	}, [props.enableClickOutside, props.enableHeader, state.amountOptions]);

	onUpdate(() => {
		state.searchEnabled = props.enableSearch || state.amountOptions > 9;
	}, [props.enableSearch, state.amountOptions]);

	onUpdate(() => {
		if (
			props.onSelect &&
			(state._externalChangeTimestamp || state._internalChangeTimestamp)
		) {
			if (
				(state._internalChangeTimestamp &&
					!state._externalChangeTimestamp) ||
				state._internalChangeTimestamp > state._externalChangeTimestamp
			) {
				props.onSelect(state._values);
			}
		}
	}, [
		state._externalChangeTimestamp,
		state._internalChangeTimestamp,
		props.onSelect
	]);

	onUpdate(() => {
		state._values = props.values ?? [];
		state._externalChangeTimestamp = new Date().getTime();
	}, [props.values]);

	onUpdate(() => {
		/* For a11y reasons we need to map the correct message with the select */
		if (!selectRef?.validity.valid || props.customValidity === 'invalid') {
			state._validity = 'invalid';
			state._descByIds = state._invalidMessageId;
			if (hasVoiceOver()) {
				state._voiceOverFallback =
					props.invalidMessage ??
					selectRef?.validationMessage ??
					DEFAULT_INVALID_MESSAGE;
				delay(() => (state._voiceOverFallback = ''), 1000);
			}
		} else if (
			props.customValidity === 'valid' ||
			(selectRef?.validity.valid && props.required)
		) {
			state._validity = 'valid';
			state._descByIds = state._validMessageId;
			if (hasVoiceOver()) {
				state._voiceOverFallback =
					props.validMessage ?? DEFAULT_VALID_MESSAGE;
				delay(() => (state._voiceOverFallback = ''), 1000);
			}
		} else if (props.message) {
			state._validity = 'no-validation';
			state._descByIds = state._messageId;
		} else {
			state._validity = 'no-validation';
			state._descByIds = state._placeholderId;
		}
	}, [state._values]);

	onUpdate(() => {
		state._validity = props.customValidity;
	}, [props.customValidity]);

	onUpdate(() => {
		if (state._values?.length === 0) {
			state.selectAllChecked = false;
			state.selectAllIndeterminate = false;
		} else if (state._values?.length === state.amountOptions) {
			state.selectAllIndeterminate = false;
			state.selectAllChecked = true;
		} else if (state._values) {
			state.selectAllIndeterminate = true;
		}
	}, [state._values, state.amountOptions]);

	onUpdate(() => {
		state._options = props.options;
		state.amountOptions = props.options.filter(
			(option) => !option.isGroup
		).length;
	}, [props.options]);

	onUpdate(() => {
		if (state._options?.length > 0) {
			state._selectedOptions = state._options.filter(
				(option: MultiSelectOptionType) =>
					!option.isGroup && state._values.includes(option.value)
			);
		}
	}, [state._options, state._values]);

	onUpdate(() => {
		if (state._selectedOptions?.length > 0) {
			if (props.selectedType !== 'tag') {
				if (props.selectedType === 'amount') {
					state._selectedLabels = props.getAmountText
						? props.getAmountText(state._selectedOptions.length)
						: `${state._selectedOptions.length} ${DEFAULT_SELECTED}`;
				} else {
					state._selectedLabels = state._selectedOptions
						.map((option: MultiSelectOptionType) =>
							state.getOptionLabel(option)
						)
						.join(', ');
				}
			} else {
				state._selectedLabels = '';
			}
		} else {
			state._selectedLabels = '';
		}
	}, [state._selectedOptions, props.selectedType, props.getAmountText]);

	return (
		<div
			id={state._id}
			ref={ref}
			class={cls('db-multi-select', props.className)}
			aria-invalid={state._validity === 'invalid'}
			data-custom-validity={state._validity}
			data-width={props.width}
			data-variant={props.variant}
			data-required={props.required}
			data-selected-type={props.selectedType}
			data-wrapping={props.tagWrapping}
			data-header-enabled={state.headerEnabled}
			data-notification-enabled={state._hasNoOptions ?? props.isLoading}>
			<select
				id={state._selectId}
				ref={selectRef}
				multiple
				value={state._values}
				readOnly
				required={props.required}
				hidden>
				<For each={state._options}>
					{(option: MultiSelectOptionType) => (
						<Fragment key={option.value.toString()}>
							<option
								disabled={option.disabled}
								value={option.value}>
								{state.getOptionLabel(option)}
							</option>
						</Fragment>
					)}
				</For>
			</select>
			<label htmlFor={state._selectId} id={state._labelId}>
				{props.label ?? DEFAULT_LABEL}
			</label>
			<details ref={detailsRef}>
				{props.children}
				<Show when={props.options}>
					<DBMultiSelectFormField
						onClick={() => state.handleToggleOpen()}>
						<Show
							when={
								props.selectedType !== 'tag' &&
								state._selectedLabels?.length > 0
							}>
							<span>{state._selectedLabels}</span>
						</Show>
						<Show when={props.selectedType == 'tag'}>
							<div>
								<For each={state._selectedOptions}>
									{(option: MultiSelectOptionType) => (
										<DBTag
											removeButton={
												props.removeTagsText
													? props.removeTagsText(
															option
														)
													: `${DEFAULT_REMOVE} ${state.getOptionLabel(option)}`
											}
											onRemove={() =>
												state.handleSelect(option.value)
											}
											emphasis="strong"
											behaviour="removable">
											{state.getOptionLabel(option)}
										</DBTag>
									)}
								</For>
							</div>
						</Show>
					</DBMultiSelectFormField>
					<DBMultiSelectDropdown
						header={
							<DBMultiSelectHeader
								variant={
									state.searchEnabled ? 'search' : 'default'
								}
								closeButtonId={props.closeButtonId}
								closeButtonText={props.closeButtonText}
								deSelectAllLabel={props.deSelectAllLabel}
								searchLabel={props.searchLabel}
								searchPlaceholder={props.searchPlaceholder}
								selectAllLabel={props.selectAllLabel}
								checked={state.selectAllChecked}
								indeterminate={state.selectAllIndeterminate}
								onSelectAll={() => {
									state.handleSelectAll();
								}}
								onSearch={(
									event: ChangeEvent<HTMLInputElement>
								) => {
									state.handleSearch(event);
								}}
								onClose={() => {
									state.handleClose('close');
								}}
							/>
						}
						notification={
							<DBNotification
								behaviour="permanent"
								semantic={
									state._hasNoOptions
										? 'warning'
										: 'informational'
								}>
								{(state._hasNoOptions
									? props.noResultsText
									: props.loadingText) ?? DEFAULT_MESSAGE}
							</DBNotification>
						}>
						<Show when={!state.notificationEnabled}>
							<DBMultiSelectList>
								<For each={state._options}>
									{(option: MultiSelectOptionType) => (
										<Fragment key={option.value.toString()}>
											<DBMultiSelectListItem
												groupLabel={
													option.isGroup
														? state.getOptionLabel(
																option
															)
														: undefined
												}
												name={props.name}
												checked={state.getOptionChecked(
													option.value
												)}
												disabled={option.disabled}
												value={option.value}
												onChange={() => {
													state.handleSelect(
														option.value
													);
												}}>
												{state.getOptionLabel(option)}
											</DBMultiSelectListItem>
										</Fragment>
									)}
								</For>
							</DBMultiSelectList>
						</Show>
					</DBMultiSelectDropdown>
				</Show>
			</details>

			<span id={state._placeholderId}>
				{props.placeholder ?? props.label}
			</span>
			<Show when={props.message}>
				<DBInfotext
					size="small"
					icon={props.messageIcon}
					id={state._messageId}>
					{props.message}
				</DBInfotext>
			</Show>

			<DBInfotext
				id={state._validMessageId}
				size="small"
				semantic="successful">
				{props.validMessage ?? DEFAULT_VALID_MESSAGE}
			</DBInfotext>

			<DBInfotext
				id={state._invalidMessageId}
				size="small"
				semantic="critical">
				{props.invalidMessage ??
					selectRef?.validationMessage ??
					DEFAULT_INVALID_MESSAGE}
			</DBInfotext>

			{/* * https://www.davidmacd.com/blog/test-aria-describedby-errormessage-aria-live.html
			 * Currently VoiceOver isn't supporting changes from aria-describedby.
			 * This is an internal Fallback */}
			<span data-visually-hidden="true" role="status">
				{state._voiceOverFallback}
			</span>
		</div>
	);
}
