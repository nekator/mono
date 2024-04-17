import {
	onMount,
	onUnMount,
	onUpdate,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBNavigationItemProps, DBNavigationItemState } from './model';
import { DBButton } from '../button';
import { cls, uuid, visibleInVX, visibleInVY } from '../../utils';
import { DEFAULT_BACK } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';
import { windows } from 'rimraf';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBNavigationItem(props: DBNavigationItemProps) {
	const ref = useRef<HTMLLIElement>(null);

	// jscpd:ignore-start
	const state = useStore<DBNavigationItemState>({
		initialized: false,
		hasAreaPopup: false,
		hasSubNavigation: true,
		isSubNavigationExpanded: false,
		subNavigationId: 'sub-navigation-' + uuid(),
		refOnMouseMove: undefined,
		handleClick: (event: ClickEvent<HTMLButtonElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}

			if (state.hasAreaPopup) {
				state.isSubNavigationExpanded = true;
			}
		},
		handleBackClick: (event: ClickEvent<HTMLButtonElement>) => {
			event.stopPropagation();
			state.isSubNavigationExpanded = false;
		},
		startMouseFollow: () => {
			const subMenu = Array.from(ref.children).find((child) =>
				child.classList.contains('db-sub-navigation')
			);

			const subMenuElement = subMenu
				? (subMenu as HTMLElement)
				: undefined;

			if (!document || !ref.parentElement || !subMenuElement) {
				return;
			}

			const itemRect = ref.getBoundingClientRect();
			const subMenuHeight = subMenuElement.getBoundingClientRect().height;
			const parentElementWidth =
				ref.parentElement.getBoundingClientRect().width;
			const padding = (parentElementWidth - itemRect.width) / 2;

			// the triangle has the width of the sub-navigation, current nav-item can be wider.
			// so the width of the triangle must be adapted to the possibly wider nav-item.
			ref.style.setProperty(
				'--db-navigation-item-inline-size',
				`${parentElementWidth}px`
			);

			const getTriangleTipX = (mouseX: number): number => {
				if (subMenuElement.getAttribute('data-outside-vx')) {
					// vertical flipped triangle needs an inverted x pos
					return itemRect.width - mouseX;
				}

				// triangle stops shrinking from 75% x pos
				return Math.min(mouseX, itemRect.width * 0.75);
			};

			const getTriangleTipY = (mouseY: number): number => {
				// padding must be added to the y pos of the tip so that the y pos matches the cursor
				const mouseYLimited =
					Math.max(Math.min(mouseY, itemRect.height), 0) + padding;

				if (subMenuElement.getAttribute('data-outside-vy')) {
					// add offset to tip y pos to match corrected sub-navigation y pos
					return (
						mouseYLimited +
						(subMenuHeight - padding * 2 - itemRect.height)
					);
				}

				return mouseYLimited;
			};

			const onMouseMove = (event: MouseEvent) => {
				const mouseX = event.clientX - itemRect.left;
				const mouseY = event.clientY - itemRect.top;

				const tipX = getTriangleTipX(mouseX);
				const tipY = getTriangleTipY(mouseY);

				const tipUpperPos = `${tipX}px ${tipY + padding}px`;
				const tipLowerPos = `${tipX}px ${tipY - padding}px`;

				ref.style.setProperty(
					'--db-navigation-item-clip-path',
					`polygon(${tipUpperPos}, ${tipLowerPos}, 100% 0, 100% 100%)`
				);
			};

			ref.addEventListener('mouseover', () => {
				document.addEventListener('mousemove', onMouseMove);
			});

			ref.addEventListener('mouseout', () => {
				document.removeEventListener('mousemove', onMouseMove);
			});
		}
	});

	onUpdate(() => {
		if (typeof state.refOnMouseMove === 'function') {
			console.log('ON UPDATE');
			// ref.addEventListener('mouseover', () => {
			// 	document.addEventListener('mousemove', onMouseMove);
			// });
			//
			// ref.addEventListener('mouseout', () => {
			// 	document.removeEventListener('mousemove', onMouseMove);
			// });
		}
	}, [state.refOnMouseMove]);

	onMount(() => {
		state.initialized = true;

		// mouse follow for safe triangle should not be added to root nav items
		if (ref.parentElement.classList.contains('db-sub-navigation')) {
			setTimeout(state.startMouseFollow, 1000);
		}
	});

	onUnMount(() => {
		console.log('ON UNMOUNT', state.refOnMouseMove);

		if (document && state.refOnMouseMove) {
			// document.removeEventListener('mousemove', state.refOnMouseMove);
		}
	});

	onUpdate(() => {
		if (props.subNavigationExpanded !== undefined) {
			state.isSubNavigationExpanded = !!props.subNavigationExpanded;
		}
	}, [props.subNavigationExpanded]);

	onUpdate(() => {
		if (props.areaPopup !== undefined) {
			state.hasAreaPopup = props.areaPopup;
			state.hasSubNavigation = state.hasAreaPopup;
		} else if (state.initialized && document && state.subNavigationId) {
			const subNavigationSlot = document?.getElementById(
				state.subNavigationId
			) as HTMLMenuElement;

			if (subNavigationSlot) {
				const children = subNavigationSlot.children;
				if (children?.length > 0) {
					state.hasAreaPopup = true;
					if (!visibleInVX(subNavigationSlot)) {
						subNavigationSlot.setAttribute(
							'data-outside-vx',
							'true'
						);
					}
					if (!visibleInVY(subNavigationSlot)) {
						subNavigationSlot.setAttribute(
							'data-outside-vy',
							'true'
						);
					}
				} else {
					state.hasSubNavigation = false;
				}
			}
		}
	}, [state.initialized, props.areaPopup]);

	// jscpd:ignore-end

	return (
		<li
			ref={ref}
			id={props.id}
			class={cls('db-navigation-item', props.className)}
			data-width={props.width}
			data-icon={props.icon}
			aria-current={props.active ? 'page' : undefined}
			aria-disabled={props.disabled}>
			<Show when={!state.hasSubNavigation}>{props.children}</Show>

			<Show when={state.hasSubNavigation}>
				<button
					aria-haspopup={state.hasAreaPopup}
					aria-expanded={state.isSubNavigationExpanded}
					className="db-navigation-item-expand-button"
					disabled={props.disabled}
					onClick={(event: ClickEvent<HTMLButtonElement>) =>
						state.handleClick(event)
					}>
					{props.children}
				</button>

				{/* TODO: Consider using popover here */}
				<menu className="db-sub-navigation" id={state.subNavigationId}>
					<Show when={state.hasAreaPopup}>
						<div class="db-mobile-navigation-back">
							<DBButton
								id={props.backButtonId}
								icon="arrow_left"
								variant="ghost"
								onClick={(
									event: ClickEvent<HTMLButtonElement>
								) => state.handleBackClick(event)}>
								{props.backButtonText ?? DEFAULT_BACK}
							</DBButton>
						</div>
					</Show>
					<Slot name="subNavigation"></Slot>
				</menu>
			</Show>
		</li>
	);
}
