import { DBNavigationItemTriangleData } from '../components/navigation-item/model';
import { handleDataOutside } from './index';

export const isEventTargetNavigationItem = (event: unknown): boolean => {
	const { target } = event as { target: HTMLElement };
	return Boolean(
		!target?.classList?.contains('db-navigation-item-expand-button') &&
			target?.parentElement?.classList.contains('db-navigation-item')
	);
};

export class NavigationItemSafeTriangle {
	private readonly element: HTMLElement;
	private readonly subNavigation: Element;
	private readonly parentSubNavigation: Element | null;
	private triangleData?: DBNavigationItemTriangleData;
	private initialized: boolean = false;
	constructor(element: HTMLElement, subNavigation: Element) {
		this.element = element;
		this.subNavigation = subNavigation;
		this.parentSubNavigation = this.element.closest('.db-sub-navigation');

		/*
		 * only initiate if:
		 * 1. item is not at root navigation level
		 * 2. item is not in the mobile navigation / within db-drawer
		 */
		if (this.parentSubNavigation && !this.element.closest('.db-drawer')) {
			this.init();
		}
	}

	private init() {
		const parentElementWidth =
			this.parentSubNavigation?.getBoundingClientRect().width ?? 0;

		// the triangle has the width of the sub-navigation, current nav-item can be wider.
		// so the width of the triangle must be adapted to a possibly wider nav-item.
		this.element.style.setProperty(
			'--db-navigation-item-inline-size',
			`${parentElementWidth}px`
		);

		this.initialized = true;
	}

	public enableFollow() {
		if (!this.initialized) {
			return;
		}

		const dataOutsidePair = handleDataOutside(this.subNavigation);

		const itemRect = this.element.getBoundingClientRect();
		const parentElementWidth =
			this.parentSubNavigation?.getBoundingClientRect().width ?? 0;

		this.triangleData = {
			itemRect,
			parentElementWidth,
			subNavigationHeight:
				this.subNavigation.getBoundingClientRect().height,
			padding: (parentElementWidth - itemRect.width) / 2,
			outsideVX: dataOutsidePair.vx,
			outsideVY: dataOutsidePair.vy
		};
	}

	public disableFollow() {
		this.triangleData = undefined;
	}

	private getTriangleTipXFromMouseX(mouseX: number): number {
		if (!this.triangleData) return 0;

		if (this.triangleData.outsideVX === 'right') {
			// vertical flipped triangle needs an inverted x pos
			return this.triangleData.itemRect.width - mouseX;
		}

		// triangle stops shrinking from 75% x pos
		return Math.min(mouseX, this.triangleData.itemRect.width * 0.75);
	}

	private getTriangleTipYFromMouseY(mouseY: number): number {
		if (!this.triangleData) return 0;

		// padding must be added to the y pos of the tip so that the y pos matches the cursor
		const mouseYLimited =
			Math.max(Math.min(mouseY, this.triangleData.itemRect.height), 0) +
			this.triangleData.padding;

		if (this.triangleData.outsideVY === 'bottom') {
			// add offset to tip y pos to match corrected sub-navigation y pos
			return (
				mouseYLimited +
				(this.triangleData.subNavigationHeight -
					this.triangleData.padding * 2 -
					this.triangleData.itemRect.height)
			);
		}

		return mouseYLimited;
	}

	public followByMouseEvent(event: MouseEvent) {
		if (!this.initialized || !this.triangleData) {
			return;
		}

		const mouseX = event.clientX - this.triangleData.itemRect.left;
		const mouseY = event.clientY - this.triangleData.itemRect.top;

		const tipX = this.getTriangleTipXFromMouseX(mouseX);
		const tipY = this.getTriangleTipYFromMouseY(mouseY);

		const tipUpperPos = `${tipX}px ${tipY + this.triangleData.padding}px`;
		const tipLowerPos = `${tipX}px ${tipY - this.triangleData.padding}px`;

		this.element.style.setProperty(
			'--db-navigation-item-clip-path',
			`polygon(${tipUpperPos}, ${tipLowerPos}, 100% 0, 100% 100%)`
		);
	}
}

export default {
	isEventTargetNavigationItem,
	NavigationItemSafeTriangle
};
