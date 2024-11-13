import { Show, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBInfotextProps, DBInfotextState } from './model';
import { cls, getBooleanAsString } from '../../utils';

useMetadata({});

export default function DBInfotext(props: DBInfotextProps) {
	const ref = useRef<HTMLSpanElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBInfotextState>({});
	// jscpd:ignore-end

	// TODO: Check if this should be a div or a span
	return (
		<span
			ref={ref}
			id={props.id}
			class={cls('db-infotext', props.className)}
			data-icon={props.icon}
			data-semantic={props.semantic}
			data-size={props.size}
			data-show-icon={getBooleanAsString(props.showIcon)}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</span>
	);
}
