import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBAccordionItemProps, DBAccordionItemState } from './model';
import { cls, getBooleanAsString, uuid } from '../../utils';
import { ClickEvent } from '../../shared/model';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({});

export default function DBAccordionItem(props: DBAccordionItemProps) {
	const ref = useRef<HTMLDetailsElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBAccordionItemState>({
		_id: DEFAULT_ID,
		_open: false,
		toggle: (event: ClickEvent<HTMLElement>) => {
			// We need this for react https://github.com/facebook/react/issues/15486#issuecomment-488028431
			event?.preventDefault();
			const newStateOpen = !state._open;
			if (props.onToggle) {
				props.onToggle(newStateOpen);
			}
			state._open = newStateOpen;
		}
	});

	onMount(() => {
		state._id = props.id || 'accordion-item-' + uuid();
		if (props.defaultOpen) {
			state._open = props.defaultOpen;
		}
	});
	// jscpd:ignore-end

	return (
		<li id={state._id} class={cls('db-accordion-item', props.className)}>
			<details
				aria-disabled={getBooleanAsString(props.disabled)}
				ref={ref}
				open={state._open}>
				<summary onClick={(event) => state.toggle(event)}>
					<Show when={props.headlinePlain}>
						{props.headlinePlain}
					</Show>
					<Show when={!props.headlinePlain}>
						<Slot name="headline" />
					</Show>
				</summary>
				<div>
					<Show when={props.content} else={props.children}>
						{props.content}
					</Show>
				</div>
			</details>
		</li>
	);
}
