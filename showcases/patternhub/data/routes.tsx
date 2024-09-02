import { type ReactElement } from 'react';
import ButtonComponent from '../../react-showcase/src/components/button';
import LinkComponent from '../../react-showcase/src/components/link';
import AccordionComponent from '../../react-showcase/src/components/accordion';
import AccordionItemComponent from '../../react-showcase/src/components/accordion-item';
import BrandComponent from '../../react-showcase/src/components/brand';
// Import IconComponent from '../../react-showcase/src/components/icon';
import TooltipComponent from '../../react-showcase/src/components/tooltip';
import InfotextComponent from '../../react-showcase/src/components/infotext';
import TagComponent from '../../react-showcase/src/components/tag';
import TabsComponent from '../../react-showcase/src/components/tabs';
import TabItemComponent from '../../react-showcase/src/components/tab-item';
import CheckboxComponent from '../../react-showcase/src/components/checkbox';
import InputComponent from '../../react-showcase/src/components/input';
import RadioComponent from '../../react-showcase/src/components/radio';
import SelectComponent from '../../react-showcase/src/components/select';
import SwitchComponent from '../../react-showcase/src/components/switch';
import TextareaComponent from '../../react-showcase/src/components/textarea';
import NotificationComponent from '../../react-showcase/src/components/notification';
import BadgeComponent from '../../react-showcase/src/components/badge';
import CardComponent from '../../react-showcase/src/components/card';
import DividerComponent from '../../react-showcase/src/components/divider';
import DrawerComponent from '../../react-showcase/src/components/drawer';
import HeaderComponent from '../../react-showcase/src/components/header';
// Import PageComponent from '../../react-showcase/src/components/page';
import SectionComponent from '../../react-showcase/src/components/section';
import NavigationComponent from '../../react-showcase/src/components/navigation';
import NavigationItemComponent from '../../react-showcase/src/components/navigation-item';
import PopoverComponent from '../../react-showcase/src/components/popover';
import * as buttonCode from '../components/code-docs/button';
import * as linkCode from '../components/code-docs/link';
import * as accordionCode from '../components/code-docs/accordion';
import * as accordionItemCode from '../components/code-docs/accordion-item';
import * as brandCode from '../components/code-docs/brand';
// Import * as iconCode from '../components/code-docs/icon';
import * as tooltipCode from '../components/code-docs/tooltip';
import * as infotextCode from '../components/code-docs/infotext';
import * as tagCode from '../components/code-docs/tag';
import * as tabsCode from '../components/code-docs/tabs';
import * as tabItemCode from '../components/code-docs/tab-item';
import * as checkboxCode from '../components/code-docs/checkbox';
import * as inputCode from '../components/code-docs/input';
import * as radioCode from '../components/code-docs/radio';
import * as selectCode from '../components/code-docs/select';
import * as switchCode from '../components/code-docs/switch';
import * as textareaCode from '../components/code-docs/textarea';
import * as notificationCode from '../components/code-docs/notification';
import * as badgeCode from '../components/code-docs/badge';
import * as cardCode from '../components/code-docs/card';
import * as dividerCode from '../components/code-docs/divider';
import * as drawerCode from '../components/code-docs/drawer';
import * as headerCode from '../components/code-docs/header';
// Import * as pageCode from '../components/code-docs/page';
import * as sectionCode from '../components/code-docs/section';
import * as navigationCode from '../components/code-docs/navigation';
import * as navigationItemCode from '../components/code-docs/navigation-item';
import * as popoverCode from '../components/code-docs/popover';
import Components from './components.json';

export type NavigationItem = {
	label: string;
	name?: string;
	path?: string;
	component?: ReactElement;
	isHiddenInMenu?: boolean;
	subNavigation?: NavigationItem[];
};

const nameComponentMap = {
	button: <ButtonComponent slotCode={buttonCode} />,
	link: <LinkComponent slotCode={linkCode} />,
	brand: <BrandComponent slotCode={brandCode} />,
	// Icon: <IconComponent slotCode={iconCode} />,
	tooltip: <TooltipComponent slotCode={tooltipCode} />,
	infotext: <InfotextComponent slotCode={infotextCode} />,
	tag: <TagComponent slotCode={tagCode} />,
	accordion: (
		<AccordionComponent
			slotCode={accordionCode}
			subComponent={
				<AccordionItemComponent
					isSubComponent={true}
					componentName="accordion-item"
					slotCode={accordionItemCode}
				/>
			}
		/>
	),
	'accordion-item': <AccordionItemComponent slotCode={accordionItemCode} />,
	tabs: (
		<TabsComponent
			slotCode={tabsCode}
			subComponent={
				<TabItemComponent
					isSubComponent={true}
					componentName="tab-item"
					slotCode={tabItemCode}
				/>
			}
		/>
	),
	'tab-item': <TabItemComponent slotCode={tabItemCode} />,
	checkbox: <CheckboxComponent slotCode={checkboxCode} />,
	input: <InputComponent slotCode={inputCode} />,
	radio: <RadioComponent slotCode={radioCode} />,
	select: <SelectComponent slotCode={selectCode} />,
	switch: <SwitchComponent slotCode={switchCode} />,
	textarea: <TextareaComponent slotCode={textareaCode} />,
	notification: <NotificationComponent slotCode={notificationCode} />,
	badge: <BadgeComponent slotCode={badgeCode} />,
	card: <CardComponent slotCode={cardCode} />,
	divider: <DividerComponent slotCode={dividerCode} />,
	drawer: <DrawerComponent slotCode={drawerCode} />,
	header: <HeaderComponent slotCode={headerCode} />,
	// Page: <PageComponent slotCode={pageCode} />,
	section: <SectionComponent slotCode={sectionCode} />,
	navigation: (
		<NavigationComponent
			slotCode={navigationCode}
			subComponent={
				<NavigationItemComponent
					isSubComponent={true}
					componentName="navigation-item"
					slotCode={navigationItemCode}
				/>
			}
		/>
	),
	'navigation-item': (
		<NavigationItemComponent slotCode={navigationItemCode} />
	),
	popover: <PopoverComponent slotCode={popoverCode} />
};

const addComponentsToNavigationItems = (
	navigationItems: NavigationItem[]
): NavigationItem[] => {
	return navigationItems.map((navigationItem) => {
		return {
			...navigationItem,
			subNavigation: navigationItem.subNavigation?.map((subNavItem) => {
				return {
					...subNavItem,
					component: subNavItem.name
						? nameComponentMap[subNavItem.name]
						: undefined
				};
			})
		};
	});
};

export const componentChildren: NavigationItem[] =
	addComponentsToNavigationItems(Components);
export const ROUTES: NavigationItem[] = [
	{
		label: 'Home',
		path: '/'
	},
	{
		label: 'Foundations',
		path: '/foundations',
		subNavigation: [
			{ label: 'Readme', path: '/foundations/readme' },
			{
				label: 'Colors',
				path: '/foundations/colors',
				subNavigation: [
					{ label: 'Readme', path: '/foundations/colors/readme' },
					{
						label: 'Color Classes',
						path: '/foundations/colors/color-classes'
					},
					{
						label: 'Color Schemes',
						path: '/foundations/colors/color-schemes'
					},
					{
						label: 'Color Usage Guide',
						path: '/foundations/colors/color-usage-guide'
					}
				]
			},
			{
				label: 'Font Sizes',
				path: '/foundations/font-sizes',
				subNavigation: [
					{ label: 'Readme', path: '/foundations/font-sizes/readme' },
					{
						label: 'Overview',
						path: '/foundations/font-sizes/overview'
					}
				]
			},
			{
				label: 'Icons',
				path: '/foundations/icons',
				subNavigation: [
					{ label: 'Readme', path: '/foundations/icons/readme' },
					{
						label: 'Custom Icons',
						path: '/foundations/icons/custom-icons'
					},
					{ label: 'Overview', path: '/foundations/icons/overview' }
				]
			},
			{
				label: 'Densities',
				path: '/foundations/densities',
				subNavigation: [
					{ label: 'Readme', path: '/foundations/densities/readme' },
					{
						label: 'Examples',
						path: '/foundations/densities/examples'
					}
				]
			},
			{
				label: 'Variables',
				path: '/foundations/variables',
				subNavigation: [
					{ label: 'Readme', path: '/foundations/variables/readme' },
					{
						label: 'Examples',
						path: '/foundations/variables/examples'
					}
				]
			},
			{ label: 'Testing Overview Table', path: '/foundations/test-table' }
		]
	},
	{
		label: 'Components',
		path: '/components',
		subNavigation: [
			{ label: 'Readme', path: '/components/readme' },
			{ label: 'Router usage', path: '/components/router-usage' },
			{ label: 'Validation', path: '/components/validation' },
			...componentChildren.map((category) => ({
				...category,
				subNavigation: category?.subNavigation?.map(
					(component): NavigationItem => ({
						label: component.label,
						path: `/components/${category.name}/${component.name}`,
						isHiddenInMenu: component.isHiddenInMenu,
						subNavigation: [
							{
								label: 'Overview',
								path: `/components/${category.name}/${component.name}/overview`
							},
							{
								label: 'Properties',
								path: `/components/${category.name}/${component.name}/properties`
							},
							{
								label: 'How to use',
								path: `/components/${category.name}/${component.name}/how-to-use`
							},
							{
								label: 'Migration',
								path: `/components/${category.name}/${component.name}/migration`
							},
							...(component.subNavigation ?? [])
						]
					})
				)
			}))
		]
	}
];

const fillNavigationRecursive = (
	navigationItems: NavigationItem[],
	tree: NavigationItem[],
	isBreadcrumb?: boolean,
	prevLabel?: string
) => {
	for (const navItem of navigationItems) {
		tree.push(
			isBreadcrumb
				? navItem
				: {
						...navItem,
						label: prevLabel
							? `${prevLabel}:${navItem.label}`
							: navItem.label
					}
		);

		if (navItem.subNavigation && navItem.subNavigation?.length > 0) {
			fillNavigationRecursive(
				navItem.subNavigation,
				tree,
				isBreadcrumb,
				isBreadcrumb ? undefined : navItem.label
			);
		}
	}
};

export const getAllNavigationItems = (isBreadcrumb?: boolean) => {
	const tree: NavigationItem[] = [];
	fillNavigationRecursive(ROUTES, tree, isBreadcrumb);
	return tree;
};

export const getNavigationList = (path: string) => {
	const tree: NavigationItem[] = getAllNavigationItems().filter(
		(navItem) => !navItem.subNavigation
	);

	const index = tree.findIndex((navItem) => navItem.path === path);
	return {
		previous: index === 0 ? undefined : tree[index - 1],
		next: index + 1 === tree.length ? undefined : tree[index + 1]
	};
};

export const getBreadcrumb = (path: string) => {
	const tree: NavigationItem[] = getAllNavigationItems(true);
	return tree.filter((navItem) => path.includes(navItem.path ?? ''));
};

export const getAllComponentGroupNames = (): string[] => {
	return componentChildren
		.filter(({ name }) => Boolean(name))
		.map(({ name }) => name!);
};
