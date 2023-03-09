import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBTagState, DBTagProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBTag(props: DBTagProps) {
	const state = useStore<DBTagState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div class={'db-tag' + (props.className ? ' ' + props.className : '')}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</div>
	);
}
