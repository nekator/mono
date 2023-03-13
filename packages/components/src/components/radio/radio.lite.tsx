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
	// This is used as forwardRef
	let component = useRef<HTMLInputElement>(null);
	const state = useStore<DBRadioState>({
		_id: DEFAULT_ID,
		_label: '',
		_checked: false,
		_isValid: undefined,

		handleChange: (event) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			state._checked = event.target.checked;

			if (component?.validity?.valid != state._isValid) {
				state._isValid = component?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!component?.validity?.valid);
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

		if (props.checked && component) {
			component.click();
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
				ref={component}
				type="radio"
				class={
					'db-radio' + (props.className ? ' ' + props.className : '')
				}
				id={state._id}
				name={props.name}
				disabled={props.disabled}
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
