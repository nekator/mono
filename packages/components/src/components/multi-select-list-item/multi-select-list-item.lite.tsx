import { Show, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import {
	DBMultiSelectListItemProps,
	DBMultiSelectListItemState
} from './model';
import { cls, uuid } from '../../utils';
import { ChangeEvent } from '../../shared/model';
import { handleFrameworkEvent } from '../../utils/form-components';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBMultiSelectListItem(
	props: DBMultiSelectListItemProps
) {
	// This is used as forwardRef
	const ref = useRef<HTMLLIElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMultiSelectListItemState>({
		_id: 'multi-select-list-item' + uuid(),

		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}
			handleFrameworkEvent(this, event, 'checked');
		}
	});
	// jscpd:ignore-end

	return (
		<li
			ref={ref}
			id={props.id}
			class={cls('db-multi-select-list-item', props.className, {
				'db-checkbox': !props.groupLabel
			})}>
			<Show when={props.groupLabel}>
				<span
					data-group-label-position={
						props.groupLabel && props.groupLabelPosition
					}>
					{props.groupLabel}
				</span>
			</Show>
			<Show when={!props.groupLabel}>
				<label htmlFor={state._id + props.value}>
					<input
						id={state._id + props.value}
						type="checkbox"
						name={props.name}
						checked={props.checked}
						disabled={props.disabled}
						value={props.value}
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							state.handleChange(event)
						}
					/>
					<Show when={props.label}>{props.label}</Show>
					<Show when={!props.label}>{props.children}</Show>
				</label>
			</Show>
		</li>
	);
}
