import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBNotificationProps, DBNotificationState } from './model';
import { DBButton } from '../button';
import { DEFAULT_CLOSE_BUTTON, DEFAULT_ID } from '../../shared/constants';
import { cls, uuid } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBNotification(props: DBNotificationProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBNotificationState>({
		_id: DEFAULT_ID,
		handleClose: (event: ClickEvent<HTMLButtonElement>) => {
			if (props.onClose) {
				props.onClose();
			}
		}
	});

	onMount(() => {
		state._id = props.id || 'alert-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={state._id}
			class={cls('db-notification', props.className)}
			aria-live={props.ariaLive}
			data-semantic={props.semantic}
			data-variant={props.variant}
			data-icon={props.icon}
			data-link-variant={props.linkVariant}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<Slot name="image" />
			<Show when={props.headline}>
				<h6>{props.headline}</h6>
			</Show>
			<p>{props.children}</p>
			<Show when={props.timestamp}>
				<span>{props.timestamp}</span>
			</Show>

			<Slot name="link" />

			<Show when={props.behaviour !== 'permanent'}>
				<DBButton
					id={props.closeButtonId}
					icon="close"
					variant="ghost"
					size="small"
					noText
					onClick={(event: ClickEvent<HTMLButtonElement>) =>
						state.handleClose(event)
					}>
					{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
				</DBButton>
			</Show>
		</div>
	);
}
