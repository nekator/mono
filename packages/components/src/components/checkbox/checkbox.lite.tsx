import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { DBCheckboxProps, DBCheckboxState } from './model';
import { cls, delay, hasVoiceOver, uuid } from '../../utils';
import {
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import { ChangeEvent, InteractionEvent } from '../../shared/model';
import { handleFrameworkEvent } from '../../utils/form-components';
import DBInfotext from '../infotext/infotext.lite';

useMetadata({});

export default function DBCheckbox(props: DBCheckboxProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBCheckboxState>({
		initialized: false,
		_id: undefined,
		_messageId: undefined,
		_validMessageId: undefined,
		_invalidMessageId: undefined,
		_descByIds: '',
		_voiceOverFallback: '',
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			useTarget({
				angular: () => handleFrameworkEvent(this, event, 'checked'),
				vue: () => handleFrameworkEvent(this, event, 'checked')
			});

			/* For a11y reasons we need to map the correct message with the checkbox */
			if (!ref?.validity.valid || props.customValidity === 'invalid') {
				state._descByIds = state._invalidMessageId;
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						props.invalidMessage ??
						ref?.validationMessage ??
						DEFAULT_INVALID_MESSAGE;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
			} else if (
				props.customValidity === 'valid' ||
				(ref?.validity.valid && props.required)
			) {
				state._descByIds = state._validMessageId;
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						props.validMessage ?? DEFAULT_VALID_MESSAGE;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
			} else if (props.message) {
				state._descByIds = state._messageId;
			} else {
				state._descByIds = '';
			}
		},
		handleBlur: (event: InteractionEvent<HTMLInputElement>) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLInputElement>) => {
			if (props.onFocus) {
				props.onFocus(event);
			}

			if (props.focus) {
				props.focus(event);
			}
		}
	});

	onMount(() => {
		state.initialized = true;
		const mId = props.id ?? `checkbox-${uuid()}`;
		state._id = mId;
		state._messageId = mId + DEFAULT_MESSAGE_ID_SUFFIX;
		state._validMessageId = mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
		state._invalidMessageId = mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
	});

	onUpdate(() => {
		if (state._id) {
			const messageId = state._id + DEFAULT_MESSAGE_ID_SUFFIX;
			state._messageId = messageId;
			state._validMessageId = state._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state._invalidMessageId =
				state._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;

			if (props.message) {
				state._descByIds = messageId;
			}
		}
	}, [state._id]);

	onUpdate(() => {
		if (state.initialized && document && state._id) {
			const checkboxElement = document?.getElementById(
				state._id
			) as HTMLInputElement;
			if (checkboxElement) {
				// in angular this must be set via native element
				if (props.checked != undefined) {
					checkboxElement.checked = props.checked;
				}

				if (props.indeterminate !== undefined) {
					// When indeterminate is set, the value of the checked prop only impacts the form submitted values.
					// It has no accessibility or UX implications. (https://mui.com/material-ui/react-checkbox/)
					checkboxElement.indeterminate = props.indeterminate;
				}

				state.initialized = false;
			}
		}
	}, [state.initialized, props.indeterminate, props.checked]);
	// jscpd:ignore-end

	return (
		<div
			class={cls('db-checkbox', props.className)}
			data-size={props.size}
			data-variant={props.variant}>
			<label htmlFor={state._id}>
				<input
					aria-invalid={props.customValidity === 'invalid'}
					data-custom-validity={props.customValidity}
					ref={ref}
					type="checkbox"
					id={state._id}
					name={props.name}
					checked={props.checked}
					disabled={props.disabled}
					value={props.value}
					required={props.required}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						state.handleChange(event)
					}
					onBlur={(event: InteractionEvent<HTMLInputElement>) =>
						state.handleBlur(event)
					}
					onFocus={(event: InteractionEvent<HTMLInputElement>) =>
						state.handleFocus(event)
					}
					aria-describedby={state._descByIds}
				/>
				<Show when={props.label}>
					<span>{props.label}</span>
				</Show>
				{props.children}
			</label>

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
					ref?.validationMessage ??
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
