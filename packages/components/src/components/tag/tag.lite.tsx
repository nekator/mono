import {
	onMount,
	Show,
	useMetadata,
	useStore,
	useRef
} from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import { uuid } from '../../utils';
import { DBTagState, DBTagProps } from './model';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBTag(props: DBTagProps) {
	const tagInputRef = useRef<HTMLInputElement>(null);
	const state = useStore<DBTagState>({
		_id: DEFAULT_ID,
		_editlabel: 'Edit label',
		handleChange: (event) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			// using controlled components for react forces us to using state for value
			state._value = event.target.value;
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<>
			{/* <span
				class={'db-tag' + (props.className ? ' ' + props.className : '')}
				data-variant={this.variant || false}
				data-size={this.small ? 'small' : false}
			>
				{this.icon ? <db-icon variant="20-outline" icon={this.icon} /> : null}
				<slot />
				{this.iconafter ? (
				<db-icon variant="20-outline" icon={this.iconafter} />
				) : null}
			</span>
			 */}
			<Show
				when={
					props.behavior &&
					(props.behavior === 'check' ||
						props.behavior === 'exclusive')
				}>
				<Show when={props.iconBefore}>
					<DBIcon icon={props.iconBefore} class="icon-before" />
				</Show>
				<input
					ref={tagInputRef}
					class={
						'db-tag' +
						(props.className ? ' ' + props.className : '')
					}
					type={this.behavior === 'check' ? 'checkbox' : 'radio'}
					data-variant={props.variant}
					data-size={props.size}
					// id={this.input_id}
					// data-type={this.datatype}
					// disabled={this.disabled}
					// // name={this.name}
					// checked={this.selected}
					// value={props.children}
				/>
				<label
				// htmlFor={this.input_id}
				>
					{props.editlabel}
				</label>
			</Show>
			<Show
				when={
					!props.behavior ||
					(props.behavior !== 'check' &&
						props.behavior !== 'exclusive')
				}>
				<span
					class={
						'db-tag' +
						(props.className ? ' ' + props.className : '')
					}
					data-variant={props.variant}
					data-size={props.size}>
					{props.children}
				</span>
			</Show>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</>
	);
}
