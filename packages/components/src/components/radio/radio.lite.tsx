import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBRadioState, DBRadioProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBRadio(props: DBRadioProps) {
	const state = useStore<DBRadioState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			class={'db-radio' + (props.className ? ' ' + props.className : '')}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</div>
	);
}
