import { Show, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import {
	DBMultiSelectFormFieldState,
	DBMultiSelectFormFieldProps
} from './model';
import { cls } from '../../utils';
import { ChangeEvent, ClickEvent, InteractionEvent } from '../../shared/model';
import { handleFrameworkEvent } from '../../utils/form-components';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBMultiSelectFormField(
	props: DBMultiSelectFormFieldProps
) {
	// This is used as forwardRef
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMultiSelectFormFieldState>({});
	// jscpd:ignore-end

	return (
		<summary
			onClick={(event: ClickEvent<HTMLElement>) => {
				if (props.onClick) {
					props.onClick(event);
				}
			}}
			ref={ref}
			id={props.id}
			class={cls('db-multi-select-form-field', props.className)}>
			{props.children}
		</summary>
	);
}
