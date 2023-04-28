import {
	onMount,
	Show,
	useMetadata,
	useStore,
	useRef,
	onUpdate
} from '@builder.io/mitosis';
import { DBButton } from '../button';
import { uuid } from '../../utils';
import { DBTagState, DBTagProps } from './model';
import { DEFAULT_ID } from '../../shared/constants';
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		isFormComponent: true,
		properties: []
	}
});

const DEFAULT_VALUES = {
	removeButtonText: 'Remove Tag'
};

export default function DBTag(props: DBTagProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBTagState>({
		initialized: false,
		_id: DEFAULT_ID,
		_checked: false,
		_isValid: undefined,
		handleChange: (event: any) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			state._checked = event.target?.checked;
		},
		iconVisible: (icon?: string) => {
			return Boolean(icon && icon !== '_' && icon !== 'none');
		},
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		},
		getTabIndex: () => {
			if (props.disabled) {
				return null;
			}

			return props.tabIndex ?? 0;
		},
		handleRemove: () => {
			if (props.onRemove) {
				props.onRemove();
			}
		},
		getRemoveButtonText: () => {
			if (props.removeButton) {
				if (typeof props.removeButton === 'string') {
					return props.removeButton;
				}

				return DEFAULT_VALUES.removeButtonText;
			}

			return '';
		}
	});

	onMount(() => {
		state.initialized = true;
		state._id = props.id ? props.id : 'tag-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	onUpdate(() => {
		if (props.checked && state.initialized && document && state._id) {
			const checkElement = document?.getElementById(
				state._id
			) as HTMLInputElement;
			if (checkElement) {
				checkElement.checked = true;
				state.initialized = false;
			}
		}
	}, [state.initialized]);

	return (
		<div
			ref={component}
			class={state.getClassNames('db-tag', props.className)}
			tabIndex={state.getTabIndex()}
			data-interactive={props.interactive}
			data-disabled={props.disabled}
			data-variant={props.variant}
			data-strong={props.strong}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<Show when={props.interactive}>
				<input
					id={state._id}
					type="checkbox"
					checked={props.checked}
					value={props.value}
					disabled={props.disabled}
					onChange={(event) => state.handleChange(event)}
				/>
			</Show>
			<label
				class={state.getClassNames('tag-label', {
					'is-icon-text-replace':
						state.iconVisible(props.icon) && props.noText
				})}
				htmlFor={props.interactive ? state._id : null}
				data-icon={props.icon}
				data-overflow={props.overflow}>
				<Show when={props.label}>
					<span>{props.label}</span>
				</Show>
				{props.children}
			</label>

			<Show when={props.removeButton}>
				<DBButton
					onClick={() => state.handleRemove()}
					icon="close"
					size="small"
					noText
					variant="text"
					title={state.getRemoveButtonText()}>
					{state.getRemoveButtonText()}
				</DBButton>
			</Show>
		</div>
	);
}
