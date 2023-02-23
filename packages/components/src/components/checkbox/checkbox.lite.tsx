import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBCheckboxState, DBCheckboxProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBCheckbox(props: DBCheckboxProps) {
	const state = useStore<DBCheckboxState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			class={
				'db-checkbox' + (props.className ? ' ' + props.className : '')
			}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</div>
	);
}
