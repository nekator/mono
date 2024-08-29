import { Show, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBMultiSelectListState, DBMultiSelectListProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBMultiSelectList(props: DBMultiSelectListProps) {
	// This is used as forwardRef
	const ref = useRef<HTMLUListElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMultiSelectListState>({});
	// jscpd:ignore-end

	return (
		<ul
			ref={ref}
			id={props.id}
			class={cls('db-multi-select-list', props.className)}>
			{props.children}
		</ul>
	);
}
