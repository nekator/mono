import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBLinkState, DBLinkProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBLink(props: DBLinkProps) {
	const state = useStore<DBLinkState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<a
			class={'db-link' + (props.className ? ' ' + props.className : '')}
			href="#">
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			Some Link
		</a>
	);
}
