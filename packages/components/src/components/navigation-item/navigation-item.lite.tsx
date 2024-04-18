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
import { cls, handleDataOutside, TestClass, uuid } from '../../utils';
import { DEFAULT_BACK } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';

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
		subNavigation: null,
		subNavigationId: 'sub-navigation-' + uuid(),
		triangleData: null,
		outsideVX: null,
		outsideVY: null,

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

		tryUpdateSubNavigationOffset: () => {
			if (state.hasSubNavigation && state.subNavigation) {
				handleDataOutside(state.subNavigation);
				// state.outsideVX =
				// 	state.subNavigation.getAttribute('data-outside-vx');
				// state.outsideVY =
				// 	state.subNavigation.getAttribute('data-outside-vy');
			}
		},

		tryInitSubNavigationHandling: () => {
			if (
				!ref ||
				!ref.parentElement ||
				!state.hasSubNavigation ||
				!state.hasAreaPopup ||
				!ref.parentElement.classList.contains('db-sub-navigation') ||
				ref.closest('.db-drawer')
			) {
				return;
			}

			// const itemRect = ref.getBoundingClientRect();
			const parentElementWidth =
				ref.parentElement.getBoundingClientRect().width;

			// the triangle has the width of the sub-navigation, current nav-item can be wider.
			// so the width of the triangle must be adapted to the possibly wider nav-item.
			ref.style.setProperty(
				'--db-navigation-item-inline-size',
				`${parentElementWidth}px`
			);

			ref.addEventListener('mouseenter', state.onMouseEnter);
			ref.addEventListener('mouseleave', state.onMouesLeave);

			// state.addMouseListeners();

			// state.triangleData = {
			// 	itemRect,
			// 	parentElementWidth,
			// 	subNavigationHeight:
			// 		state.subNavigation.getBoundingClientRect().height,
			// 	padding: (parentElementWidth - itemRect.width) / 2
			// };
		},

		addMouseListeners: () => {
			// ref.addEventListener('mouseenter', state.onMouseEnter);
			// ref.addEventListener('mouseleave', state.onMouesLeave);
		},

		onMouseEnter: () => {
			if (!ref || !state.subNavigation) {
				return;
			}

			state.tryUpdateSubNavigationOffset();

			const itemRect = ref.getBoundingClientRect();
			const parentElementWidth =
				ref.parentElement.getBoundingClientRect().width;

			// the triangle has the width of the sub-navigation, current nav-item can be wider.
			// so the width of the triangle must be adapted to the possibly wider nav-item.
			ref.style.setProperty(
				'--db-navigation-item-inline-size',
				`${parentElementWidth}px`
			);

			state.triangleData = {
				itemRect,
				parentElementWidth,
				subNavigationHeight:
					state.subNavigation.getBoundingClientRect().height,
				padding: (parentElementWidth - itemRect.width) / 2,
				outsideVX: state.subNavigation.getAttribute('data-outside-vx'),
				outsideVY: state.subNavigation.getAttribute('data-outside-vy')
			};
		},

		onMouesLeave: () => {
			state.triangleData = null;
			// document.removeEventListener('mousemove', state.onMouseMove);
		},

		onMouseMove: (event: MouseEvent) => {
			if (!ref || !state.triangleData || !state.subNavigation) {
				return;
			}

			console.log('.');

			const getTriangleTipX = (mouseX: number): number => {
				if (!state.triangleData) return 0;

				if (state.triangleData.outsideVX === 'right') {
					// vertical flipped triangle needs an inverted x pos
					return state.triangleData.itemRect.width - mouseX;
				}

				// triangle stops shrinking from 75% x pos
				return Math.min(
					mouseX,
					state.triangleData.itemRect.width * 0.75
				);
			};

			const getTriangleTipY = (mouseY: number): number => {
				if (!state.triangleData) return 0;

				// padding must be added to the y pos of the tip so that the y pos matches the cursor
				const mouseYLimited =
					Math.max(
						Math.min(mouseY, state.triangleData.itemRect.height),
						0
					) + state.triangleData.padding;

				if (state.triangleData.outsideVY === 'bottom') {
					// add offset to tip y pos to match corrected sub-navigation y pos
					return (
						mouseYLimited +
						(state.triangleData.subNavigationHeight -
							state.triangleData.padding * 2 -
							state.triangleData.itemRect.height)
					);
				}

				return mouseYLimited;
			};

			const mouseX = event.clientX - state.triangleData.itemRect.left;
			const mouseY = event.clientY - state.triangleData.itemRect.top;

			// console.log(ref, mouseX, mouseY);

			const tipX = getTriangleTipX(mouseX);
			const tipY = getTriangleTipY(mouseY);

			const tipUpperPos = `${tipX}px ${tipY + state.triangleData.padding}px`;
			const tipLowerPos = `${tipX}px ${tipY - state.triangleData.padding}px`;

			ref.style.setProperty(
				'--db-navigation-item-clip-path',
				`polygon(${tipUpperPos}, ${tipLowerPos}, 100% 0, 100% 100%)`
			);
		},

		updateSubNavigationState: () => {
			state.hasSubNavigation = false;
			// return;
			//
			// if (props.areaPopup !== undefined) {
			// 	state.hasAreaPopup = props.areaPopup;
			// 	state.hasSubNavigation = state.hasAreaPopup;
			// 	return;
			// }
			//
			// if (state.initialized && document && state.subNavigationId) {
			// 	const subNavigationSlot = document?.getElementById(
			// 		state.subNavigationId
			// 	) as HTMLMenuElement;
			//
			// 	if (subNavigationSlot) {
			// 		if (subNavigationSlot.children?.length > 0) {
			// 			state.hasAreaPopup = true;
			// 			state.subNavigation = subNavigationSlot;
			// 		} else {
			// 			state.hasSubNavigation = false;
			// 		}
			// 	}
			// }
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUnMount(() => {
		if (document) {
			document.removeEventListener('mousemove', state.onMouseMove);
			document.removeEventListener('mouseenter', state.onMouseEnter);
			document.removeEventListener('mouseleave', state.onMouesLeave);
		}
	});

	onUpdate(() => {
		state.tryInitSubNavigationHandling();
	}, [ref, state.hasSubNavigation, state.hasAreaPopup]);

	onUpdate(() => {
		console.log('state.test', !!state.triangleData, state.triangleData);

		if (state.triangleData) {
			document.addEventListener('mousemove', state.onMouseMove);
		} else {
			document.removeEventListener('mousemove', state.onMouseMove);
		}

		return () => {
			console.log('XXXXX');
			document.removeEventListener('mousemove', state.onMouseMove);
		};
	}, [ref, state.triangleData]);

	onUpdate(() => {
		if (props.subNavigationExpanded !== undefined) {
			state.isSubNavigationExpanded = !!props.subNavigationExpanded;
		}
	}, [props.subNavigationExpanded]);

	onUpdate(() => {
		state.updateSubNavigationState();
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
