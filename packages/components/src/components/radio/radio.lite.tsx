import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBRadioProps, DBRadioState } from './model';
import { uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBRadio(props: DBRadioProps) {
	const radioInputRef = useRef<HTMLInputElement>(null);
	const state = useStore<DBRadioState>({
		_id: DEFAULT_ID,
		_checked: false,

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

			if (radioInputRef?.validity?.valid != state._isValid) {
				state._isValid = radioInputRef?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!radioInputRef?.validity?.valid);
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
		state._id = props.id ? props.id : 'radio-' + uuid();

		if (props.value) {
			state._value = props.value;
		}

		if (props.checked) {
			radioInputRef?.click();
		}

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		if (props.label) {
			state._label = props.label;
		}
	});

	return (
		<>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<input
				ref={radioInputRef}
				type="radio"
				class={
					'db-radio' + (props.className ? ' ' + props.className : '')
				}
				id={state._id}
				name={props.name}
				disabled={props.disabled}
				value={state._value}
				aria-labelledby={state._id + '-label'}
				aria-describedby={props.describedbyid}
				aria-invalid={props.invalid}
				data-size={props.size}
				required={props.required}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}
			/>
			<label
				htmlFor={state._id}
				aria-hidden="true"
				id={state._id + '-label'}>
				{state._label}
				{props.children}
			</label>
		</>
	);
}
