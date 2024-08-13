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
import { cls, uuid } from '../../utils';
import { DBSelect } from '../select';
import { DBButton } from '../button';
import {
	DEFAULT_CLOSE_BUTTON,
	DEFAULT_LABEL,
	DEFAULT_MESSAGE
} from '../../shared/constants';
import { DBInput } from '../input';
import { ChangeEvent } from '../../shared/model';
import { DBInfotext } from '../infotext';
import { DBTooltip } from '../tooltip';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBMultiSelect(props: DBMultiSelectProps) {
	// This is used as forwardRef
	const ref = useRef<HTMLDivElement>(null);
	const selectRef = useRef<HTMLSelectElement>(null);
	const detailsRef = useRef<HTMLDetailsElement>(null);
	const selectAllRef = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMultiSelectState>({
		_id: 'multi-select-' + uuid(),
		initialized: false,
		headerEnabled: false,
		searchEnabled: false,
		amountOptions: 0,
		_values: [],
		_options: [],
		getOptionLabel: (option: MultiSelectOptionType) => {
			return option.label ?? option.value?.toString();
		},
		getOptionChecked: (option: MultiSelectOptionType) => {
			if (state._values && state._values.includes) {
				return state._values?.includes(option.value);
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
				state._values = state._values?.filter((v) => v !== value);
			} else {
				state._values = [...state._values, value];
			}
		},
		handleSelectAll: () => {
			if (state._values?.length === state.amountOptions) {
				state._values = [];
			} else {
				state._values = props.options
					? props.options.reduce((previousValue, currentValue) => {
							const values =
								currentValue.options &&
								currentValue.options.length !== 0
									? currentValue.options.map(
											(opt) => opt.value
										)
									: [currentValue.value];
							return [...previousValue, ...values];
						}, [])
					: [];
			}
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
			if (props.onSearch) {
				props.onSearch(event);
			} else {
				const filterText = (event.target as HTMLInputElement).value;
				state._options =
					!props.options || !filterText || filterText.length === 0
						? props.options
						: props.options.filter(
								(option) =>
									state
										.getOptionLabel(option)
										.toLowerCase()
										.includes(filterText.toLowerCase()) ||
									(option.options &&
										option.options.some((innerOption) =>
											state
												.getOptionLabel(innerOption)
												.toLowerCase()
												.includes(
													filterText.toLowerCase()
												)
										))
							);
			}
		},
		getSelectAllLabel: () => {
			if (state.amountOptions === state._values?.length) {
				return (
					props.deSelectAllLabel ??
					props.selectAllLabel ??
					DEFAULT_LABEL
				);
			} else {
				return props.selectAllLabel ?? DEFAULT_LABEL;
			}
		}
	});
	// jscpd:ignore-end

	onMount(() => {
		state._id = props.id || state._id;
		state.initialized = true;
	});

	onUpdate(() => {
		if (state.initialized && selectRef) {
			// We hide the select for screen readers it is only for sending the form
			selectRef.setAttribute('aria-hidden', 'true');
		}
	}, [state.initialized, selectRef]);

	onUpdate(() => {
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
			props.onChange &&
			props.value !== undefined &&
			props.value !== state._values
		) {
			//props.onChange(state._values);
			console.log(state._values);
		}
	}, [state._values, props.value, props.onChange]);

	onUpdate(() => {
		if (props.value !== undefined && props.value !== state._values) {
			state._values = props.value ?? [];
			console.log(props.value, state._values);
		}
	}, [props.value, state._values]);

	onUpdate(() => {
		if (selectAllRef) {
			if (state._values?.length === 0) {
				selectAllRef.indeterminate = false;
				selectAllRef.checked = false;
			} else if (state._values?.length === state.amountOptions) {
				selectAllRef.indeterminate = false;
				selectAllRef.checked = true;
			} else {
				selectAllRef.indeterminate = true;
			}
		}
	}, [state._values, state.amountOptions]);

	onUpdate(() => {
		state._options = props.options;
		state.amountOptions = props.options
			? props.options.reduce(
					(
						previousValue: number,
						currentValue: MultiSelectOptionType
					) => {
						const amount =
							currentValue.options &&
							currentValue.options?.length > 0
								? currentValue.options.length
								: 1;
						return previousValue + amount;
					},
					0
				)
			: 0;
	}, [props.options]);

	return (
		<div
			ref={ref}
			id={state._id}
			class={cls('db-multi-select', props.className)}>
			<DBSelect
				ref={selectRef}
				id={state._id + 'hidden-select'}
				label={props.label}
				variant={props.variant}
				options={props.options}
				customValidity={props.customValidity}
				required={props.required}
				disabled={props.disabled}
				name={props.name}
				multiple
				value={state._values}
				autocomplete={props.autocomplete}
				message={props.message}
				validMessage={props.validMessage}
				invalidMessage={props.invalidMessage}
			/>
			<details ref={detailsRef}>
				<summary
					onClick={() => state.handleToggleOpen()}
					id={state._id + '-placeholder'}>
					<span>{props.placeholder ?? props.label}</span>
				</summary>
				<article className="db-card" data-spacing="none">
					<header
						data-enable-header={state.headerEnabled}
						data-enable-search={state.searchEnabled}>
						<div className="db-checkbox">
							<label htmlFor={state._id + '-select-all'}>
								{/*We set a form name based on id for not sending checkboxes to a wrapping form */}
								<input
									ref={selectAllRef}
									id={state._id + '-select-all'}
									form={state._id}
									type="checkbox"
									name={props.name}
									value="select-all"
									onChange={() => {
										state.handleSelectAll();
									}}
								/>
								{state.getSelectAllLabel()}
								<Show when={state.searchEnabled}>
									<DBTooltip placement="top-start">
										{state.getSelectAllLabel()}
									</DBTooltip>
								</Show>
							</label>
						</div>
						<DBInput
							type="search"
							variant="floating"
							label={props.searchLabel ?? DEFAULT_LABEL}
							placeholder={props.searchPlaceholder}
							onChange={(
								event: ChangeEvent<HTMLInputElement>
							) => {
								state.handleSearch(event);
							}}
						/>
						<DBButton
							id={props.closeButtonId}
							icon="cross"
							variant="ghost"
							type="button"
							noText
							onClick={() => state.handleClose('close')}>
							{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
							<DBTooltip placement="top-start">
								{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
							</DBTooltip>
						</DBButton>
					</header>

					<section>
						<Show when={state._options.length === 0}>
							<DBInfotext semantic="warning">
								{props.noOptionsText ?? DEFAULT_MESSAGE}
							</DBInfotext>
						</Show>
						<ul>
							<For each={state._options}>
								{(option: MultiSelectOptionType) => (
									<Fragment key={option.value.toString()}>
										<Show when={option.options}>
											<li>
												<span>
													{state.getOptionLabel(
														option
													)}
												</span>
											</li>

											<For each={option.options}>
												{(
													optgroupOption: MultiSelectOptionType
												) => (
													<li
														key={optgroupOption.value.toString()}
														className="db-checkbox">
														<label
															htmlFor={
																state._id +
																optgroupOption.value
															}>
															{/*We set a form name based on id for not sending checkboxes to a wrapping form */}
															<input
																id={
																	state._id +
																	optgroupOption.value
																}
																form={state._id}
																type="checkbox"
																name={
																	props.name
																}
																checked={state.getOptionChecked(
																	optgroupOption.value
																)}
																disabled={
																	optgroupOption.disabled
																}
																value={
																	optgroupOption.value
																}
																onChange={() => {
																	state.handleSelect(
																		optgroupOption.value
																	);
																}}
															/>
															{state.getOptionLabel(
																optgroupOption
															)}
														</label>
													</li>
												)}
											</For>
										</Show>
										<Show when={!option.options}>
											<li className="db-checkbox">
												<label
													htmlFor={
														state._id + option.value
													}>
													{/*We set a form name based on id for not sending checkboxes to a wrapping form */}
													<input
														id={
															state._id +
															option.value
														}
														form={state._id}
														type="checkbox"
														name={props.name}
														checked={state.getOptionChecked(
															option.value
														)}
														disabled={
															option.disabled
														}
														value={option.value}
														onChange={() => {
															state.handleSelect(
																option.value
															);
														}}
													/>
													{state.getOptionLabel(
														option
													)}
												</label>
											</li>
										</Show>
									</Fragment>
								)}
							</For>
						</ul>
					</section>
				</article>
			</details>
		</div>
	);
}
