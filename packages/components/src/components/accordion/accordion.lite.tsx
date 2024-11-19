import {
	For,
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBAccordionItemDefaultProps } from '../accordion-item/model';
import { DBAccordionProps, DBAccordionState } from './model';
import { cls, uuid } from '../../utils';
import DBAccordionItem from '../accordion-item/accordion-item.lite';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({});

export default function DBAccordion(props: DBAccordionProps) {
	const ref = useRef<HTMLUListElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBAccordionState>({
		_id: DEFAULT_ID,
		_name: '',
		initialized: false,
		_initOpenIndexDone: false,
		convertItems(
			items: unknown[] | string | undefined
		): DBAccordionItemDefaultProps[] {
			try {
				if (typeof items === 'string') {
					return JSON.parse(items);
				}

				return items as DBAccordionItemDefaultProps[];
			} catch (error) {
				console.error(error);
			}

			return [];
		}
	});

	onMount(() => {
		state._id = props.id || 'accordion-' + uuid();
		state.initialized = true;
		state._initOpenIndexDone = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		// If we have a single behaviour we first check for
		// props.name otherwise for state_id
		if (state.initialized) {
			if (props.behaviour === 'single') {
				if (props.name) {
					if (state._name !== props.name) {
						state._name = props.name;
					}
				} else {
					if (state._name !== state._id && state._id) {
						state._name = state._id;
					}
				}
			} else {
				state._name = '';
			}
		}
	}, [state.initialized, props.name, props.behaviour, state._id]);

	onUpdate(() => {
		if (ref) {
			const childDetails = ref.getElementsByTagName('details');
			if (childDetails) {
				for (const details of Array.from<HTMLDetailsElement>(
					childDetails
				)) {
					if (state._name === '') {
						details.removeAttribute('name');
					} else {
						details.name = state._name;
					}
				}
			}
		}
	}, [ref, state._name]);

	onUpdate(() => {
		if (ref && state._initOpenIndexDone) {
			if (props?.initOpenIndex && props.initOpenIndex?.length > 0) {
				const childDetails = ref.getElementsByTagName('details');
				if (childDetails) {
					const initOpenIndex =
						props.behaviour === 'single' &&
						props.initOpenIndex.length > 1
							? [props.initOpenIndex[0]] // use only one index for behaviour=single
							: props.initOpenIndex;
					Array.from<HTMLDetailsElement>(childDetails).forEach(
						(details: HTMLDetailsElement, index: number) => {
							if (initOpenIndex.includes(index)) {
								details.open = true;
							}
						}
					);
				}
			}
			state._initOpenIndexDone = false;
		}
	}, [ref, state._initOpenIndexDone, props.initOpenIndex]);

	return (
		<ul
			ref={ref}
			id={state._id}
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
		</ul>
	);
}
