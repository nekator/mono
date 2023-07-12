import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { DBIconState, DBIconProps } from './model';
import clsx from 'clsx';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: true,
		properties: [
			{
				name: 'icon',
				type: 'Icon'
			},
			{ name: 'withText', type: 'TwoOptions' },
			{ name: 'title', type: 'SingleLine.Text' }
		]
	}
});

export default function DBIcon(props: DBIconProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBIconState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<span
			ref={component}
			class={clsx('db-icon', props.className, {
				'is-icon-text-replace': props.withText
			})}
			data-icon={props.icon}
			aria-hidden="true"
			title={props.title}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</span>
	);
}
