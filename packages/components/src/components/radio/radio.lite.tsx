import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBRadioProps, DBRadioState } from './model';
import { cls, uuid } from '../../utils';
import { ChangeEvent, InteractionEvent } from '../../shared/model';
import { handleFrameworkEvent } from '../../utils/form-components';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBRadio(props: DBRadioProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBRadioState>({
		initialized: false,
		_id: 'radio-' + uuid(),
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			handleFrameworkEvent(this, event, 'checked');
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
		state._id = props.id ?? state._id;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (props.checked && state.initialized && document && state._id) {
			const radioElement = document?.getElementById(
				state._id
			) as HTMLInputElement;
			if (radioElement) {
				if (props.checked != undefined) {
					radioElement.checked = true;
				}
			}
		}
	}, [state.initialized, props.checked]);

	return (
		<label
			data-size={props.size}
			data-variant={props.variant}
			class={cls('db-radio', props.className)}
			htmlFor={state._id}>
			<input
				aria-invalid={props.customValidity === 'invalid'}
				data-custom-validity={props.customValidity}
				ref={ref}
				type="radio"
				id={state._id}
				name={props.name}
				checked={props.checked}
				disabled={props.disabled}
				aria-describedby={props.describedbyid}
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
			/>
			<Show when={props.label}>
				<span>{props.label}</span>
			</Show>
			{props.children}
		</label>
	);
}
