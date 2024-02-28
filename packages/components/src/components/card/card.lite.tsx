import {
	Fragment,
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import type { DBCardState, DBCardProps } from './model';
import { cls, uuid } from '../../utils';
import { ClickEvent } from '../../shared/model';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBCard(props: DBCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBCardState>({
		_id: DEFAULT_ID,
		handleClick: (event: ClickEvent<HTMLElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}
		}
	});

	onMount(() => {
		state._id = props.id || 'card-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={state._id}
			className={cls('db-card', props.className)}
			data-behaviour={props.behaviour}
			data-elevation-level={props.elevationLevel}
			data-spacing={props.spacing}
			role={props.behaviour === 'interactive' ? 'button' : undefined}
			tabIndex={props.behaviour === 'interactive' ? 0 : undefined}
			onClick={(event: ClickEvent<HTMLElement>) =>
				state.handleClick(event)
			}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</div>
	);
}
