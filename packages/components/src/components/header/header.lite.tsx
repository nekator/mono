import {
	onMount,
	onUpdate,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBHeaderState, DBHeaderProps } from './model';
import { addAttributeToChildren, cls, uuid } from '../../utils';
import { DBButton } from '../button';
import { DBDrawer } from '../drawer';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBHeader(props: DBHeaderProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBHeaderState>({
		_id: DEFAULT_ID,
		initialized: false,
		forcedToMobile: false,
		defaultValues: {
			burgerMenuLabel: 'BurgerMenu'
		},
		toggle: () => {
			if (props.onToggle) {
				props.onToggle(!props.drawerOpen);
			}
		}
	});

	onMount(() => {
		state.initialized = true;
		state._id = props.id || 'header-' + uuid();
	});

	onUpdate(() => {
		if (state.initialized && document && state._id && props.forceMobile) {
			const headerElement = document.getElementById(
				state._id
			) as HTMLElement;
			if (headerElement) {
				// Adds this attribute to the header to enable all styling which would have
				// @media screen and (min-width: $db-screens-m) to show mobile navigation on a desktop device
				addAttributeToChildren(headerElement, {
					key: 'data-force-mobile',
					value: 'true'
				});
			}
			state.forcedToMobile = true;
		}
	}, [state.initialized]);

	// jscpd:ignore-end

	return (
		<header
			ref={ref}
			class={cls('db-header', props.className)}
			id={state._id}
			data-on-forcing-mobile={props.forceMobile && !state.forcedToMobile}>
			<DBDrawer
				className="db-header-drawer"
				rounded
				withCloseButton
				spacing="small"
				open={props.drawerOpen}
				onClose={() => state.toggle()}>
				<div class="db-header-drawer-navigation">
					<div class="db-header-navigation">{props.children}</div>
					<div class="db-header-meta-navigation">
						<Slot name="metaNavigation" />
					</div>
				</div>
				<div class="db-header-action-bar">
					<Slot name="actionBar" />
				</div>
			</DBDrawer>

			<div class="db-header-meta-navigation">
				<Slot name="metaNavigation" />
			</div>
			<div class="db-header-navigation-bar">
				<div class="db-header-brand-container">
					<Slot name="brand" />
				</div>
				<div class="db-header-navigation-container">
					<div class="db-header-navigation">{props.children}</div>
					<div class="db-header-call-to-action">
						<Slot name="callToAction" />
					</div>
				</div>
				<div class="db-header-action-container">
					<div class="db-header-burger-menu-container">
						<DBButton
							id="button-burger-menu"
							icon="menu"
							noText
							variant="ghost"
							onClick={() => state.toggle()}>
							{props.burgerMenuLabel ??
								state.defaultValues.burgerMenuLabel}
						</DBButton>
					</div>
					<div class="db-header-action-bar">
						<Slot name="actionBar" />
					</div>
				</div>
			</div>
		</header>
	);
}
