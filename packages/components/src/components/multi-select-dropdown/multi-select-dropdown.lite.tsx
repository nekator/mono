import { Show, Slot, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import {
	DBMultiSelectDropdownState,
	DBMultiSelectDropdownProps
} from './model';
import { cls } from '../../utils';
import { DBInfotext } from '../infotext';
import { DEFAULT_MESSAGE } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBMultiSelectDropdown(
	props: DBMultiSelectDropdownProps
) {
	// This is used as forwardRef
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMultiSelectDropdownState>({});
	// jscpd:ignore-end

	return (
		<article
			ref={ref}
			id={props.id}
			class={cls('db-multi-select-dropdown db-card', props.className)}
			data-spacing="none">
			<Slot name="header" />
			<Slot name="notification"></Slot>
			<section>{props.children}</section>
		</article>
	);
}
