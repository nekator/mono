import {
	onInit,
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useStore,
	useRef
} from '@builder.io/mitosis';
import { DBCheckboxState, DBCheckboxProps } from './model';
import { uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBCheckbox(props: DBCheckboxProps) {
	const checkboxInputRef = useRef<HTMLInputElement>(null);
	const state = useStore<DBCheckboxState>({
		initialized: false,
		mId: DEFAULT_ID,
		_isValid: undefined,
		_value: '',
		_checked: false,
		_label: 'LABEL SHOULD BE SET',

		handleChange: (event) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			// using controlled components for react forces us to using state for value
			state._value = event.target.value;
			state._checked = event.target.checked;

			if (checkboxInputRef?.validity?.valid != state._isValid) {
				state._isValid = checkboxInputRef?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!checkboxInputRef?.validity?.valid);
				}
			}
		},
		handleBlur: (event) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event) => {
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
		state.mId = props.id ? props.id : 'checkbox-' + uuid();

		if (props.value) {
			state._value = props.value;
		}

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		if (props.label) {
			state._label = props.label;
		}
	});

	onUpdate(() => {
		if (props.checked && state.initialized && document && state.mId) {
			const radioElement = document?.getElementById(state.mId);
			if (radioElement) {
				radioElement.click();
				state.initialized = false;
			}
		}
	}, [state.initialized]);

	return (
		<>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<input
				ref={checkboxInputRef}
				type="checkbox"
				class={
					'db-checkbox' +
					(props.className ? ' ' + props.className : '')
				}
				id={state.mId}
				name={props.name}
				checked={state._checked}
				disabled={props.disabled}
				value={state._value}
				aria-labelledby={state.mId + '-label'}
				aria-describedby={props.describedbyid}
				aria-invalid={props.invalid}
				data-size={props.size}
				required={props.required}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}
			/>
			<label
				htmlFor={state.mId}
				aria-hidden="true"
				id={state.mId + '-label'}>
				{state._label}
			</label>
		</>
	);
}
