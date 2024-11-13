import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { DBTextareaProps, DBTextareaState } from './model';
import DBInfotext from '../infotext/infotext.lite';
import { cls, delay, hasVoiceOver, uuid } from '../../utils';
import {
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_LABEL,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_PLACEHOLDER,
	DEFAULT_PLACEHOLDER_ID_SUFFIX,
	DEFAULT_ROWS,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import { ChangeEvent, InputEvent, InteractionEvent } from '../../shared/model';
import {
	handleFrameworkEvent,
	messageVisible
} from '../../utils/form-components';

useMetadata({});

export default function DBTextarea(props: DBTextareaProps) {
	const ref = useRef<HTMLTextAreaElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTextareaState>({
		_id: undefined,
		_messageId: undefined,
		_validMessageId: undefined,
		_invalidMessageId: undefined,
		// Workaround for Vue output: TS for Vue would think that it could be a function, and by this we clarify that it's a string
		_descByIds: '',
		_value: '',
		_voiceOverFallback: '',
		handleInput: (event: InputEvent<HTMLTextAreaElement>) => {
			if (props.onInput) {
				props.onInput(event);
			}

			if (props.input) {
				props.input(event);
			}
		},
		handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}
			useTarget({
				angular: () => handleFrameworkEvent(this, event),
				vue: () => handleFrameworkEvent(this, event)
			});

			/* For a11y reasons we need to map the correct message with the textarea */
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
				(ref?.validity.valid &&
					(props.required || props.minLength || props.maxLength))
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
		handleBlur: (event: InteractionEvent<HTMLTextAreaElement>) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLTextAreaElement>) => {
			if (props.onFocus) {
				props.onFocus(event);
			}

			if (props.focus) {
				props.focus(event);
			}
		}
	});

	onMount(() => {
		const mId = props.id ?? `textarea-${uuid()}`;
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
		state._value = props.value;
	}, [props.value]);

	return (
		<div
			class={cls('db-textarea', props.className)}
			data-variant={props.variant}>
			<label htmlFor={state._id}>{props.label ?? DEFAULT_LABEL}</label>

			<textarea
				aria-invalid={props.customValidity === 'invalid'}
				data-custom-validity={props.customValidity}
				ref={ref}
				id={state._id}
				data-resize={props.resize}
				disabled={props.disabled}
				required={props.required}
				readOnly={props.readOnly}
				form={props.form}
				maxLength={props.maxLength}
				minLength={props.minLength}
				name={props.name}
				wrap={props.wrap}
				spellcheck={props.spellCheck}
				autocomplete={props.autocomplete}
				onInput={(event: ChangeEvent<HTMLTextAreaElement>) =>
					state.handleInput(event)
				}
				onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
					state.handleChange(event)
				}
				onBlur={(event: InteractionEvent<HTMLTextAreaElement>) =>
					state.handleBlur(event)
				}
				onFocus={(event: InteractionEvent<HTMLTextAreaElement>) =>
					state.handleFocus(event)
				}
				value={props.value ?? state._value}
				aria-describedby={state._descByIds}
				placeholder={props.placeholder ?? DEFAULT_PLACEHOLDER}
				rows={props.rows ?? DEFAULT_ROWS}
				cols={props.cols}
			/>

			<Show when={messageVisible(props.message, props.showMessage)}>
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
	// jscpd:ignore-end
}
