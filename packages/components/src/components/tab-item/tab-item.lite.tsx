import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import type { DBTabItemProps, DBTabItemState } from './model';
import { cls } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';
import { ChangeEvent } from '../../shared/model';
import { handleFrameworkEvent } from '../../utils/form-components';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTabItem(props: DBTabItemProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabItemState>({
		_id: DEFAULT_ID,
		initialized: false,
		_selected: false,
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			// We have different ts types in different frameworks, so we need to use any here
			state._selected = (event.target as any)?.['checked'];

			handleFrameworkEvent(this, event, 'checked');
		}
	});

	onMount(() => {
		state.initialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (props.active && state.initialized && ref) {
			ref.click();
			state.initialized = false;
		}
	}, [ref, state.initialized]);

	return (
		<li className={cls('db-tab-item', props.className)} role="none">
			<label
				htmlFor={state._id}
				data-icon={props.icon}
				data-icon-after={props.iconAfter}
				data-no-text={props.noText}>
				<input
					disabled={props.disabled}
					aria-selected={state._selected}
					ref={ref}
					type="radio"
					role="tab"
					id={state._id}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						state.handleChange(event)
					}
				/>

				<Show when={props.label}>{props.label}</Show>
				{props.children}
			</label>
		</li>
	);
}
