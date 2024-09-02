import {
	For,
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBAccordionProps, DBAccordionState } from './model';
import { cls } from '../../utils';
import { DBAccordionItem } from '../accordion-item';
import { DBAccordionItemDefaultProps } from '../accordion-item/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBAccordion(props: DBAccordionProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBAccordionState>({
		openItems: [],
		clickedId: '',
		initialized: false,
		convertItems(items: unknown[] | string | undefined) {
			try {
				if (typeof items === 'string') {
					return JSON.parse(items);
				}

				return items;
			} catch (error) {
				console.error(error);
			}

			return undefined;
		},
		handleItemClick: (id: string) => {
			if (state.openItems.includes(id)) {
				if (props.behaviour === 'single') {
					state.openItems = [];
				} else {
					state.openItems = state.openItems.filter(
						(oItem) => oItem !== id
					);
				}
			} else if (props.behaviour === 'single') {
				state.openItems = [id];
			} else {
				state.openItems = [...state.openItems, id];
			}

			if (props.onChange) {
				props.onChange(state.openItems);
			}
		}
	});

	onMount(() => {
		state.initialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (ref && state.initialized) {
			const childDetails = ref.getElementsByTagName('details');
			if (childDetails) {
				let initOpenItems: string[] = [];
				Array.from<HTMLDetailsElement>(childDetails).forEach(
					(details: HTMLDetailsElement, index: number) => {
						const id = details.id;
						if (
							details.open ||
							props.initOpenIndex?.includes(index)
						) {
							initOpenItems.push(id);
						}
						const summaries =
							details.getElementsByTagName('summary');
						if (summaries?.length > 0) {
							summaries[0].addEventListener('click', () => {
								state.clickedId = id;
							});
						}
					}
				);
				if (props.behaviour === 'single' && initOpenItems.length > 1) {
					initOpenItems = [initOpenItems[0]];
				}
				state.openItems = initOpenItems;
				state.initialized = false;
			}
		}
	}, [ref, state.initialized]);

	onUpdate(() => {
		if (state.clickedId?.length > 0) {
			state.handleItemClick(state.clickedId);
			state.clickedId = '';
		}
	}, [state.clickedId]);

	onUpdate(() => {
		if (ref) {
			const childDetails = ref.getElementsByTagName('details');
			if (childDetails) {
				Array.from<HTMLDetailsElement>(childDetails).forEach(
					(details: HTMLDetailsElement) => {
						details.open = state.openItems.includes(details.id);
					}
				);
			}
		}
	}, [state.openItems]);

	return (
		<div
			ref={ref}
			id={props.id}
			class={cls('db-accordion', props.className)}
			data-variant={props.variant}>
			<Show when={!props.items}>{props.children}</Show>
			<Show when={props.items}>
				<For each={state.convertItems(props.items)}>
					{(item: DBAccordionItemDefaultProps, index: number) => (
						<DBAccordionItem
							key={`accordion-item-${index}`}
							headlinePlain={item.headlinePlain}
							disabled={item.disabled}
							content={item.content}
						/>
					)}
				</For>
			</Show>
		</div>
	);
}
