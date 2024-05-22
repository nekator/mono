import { type ReactElement } from 'react';
import ButtonComponent from '../../react-showcase/src/components/button';
import LinkComponent from '../../react-showcase/src/components/link';
import AccordionComponent from '../../react-showcase/src/components/accordion';
import AccordionItemComponent from '../../react-showcase/src/components/accordion-item';
import BrandComponent from '../../react-showcase/src/components/brand';
import IconComponent from '../../react-showcase/src/components/icon';
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
import PageComponent from '../../react-showcase/src/components/page';
import SectionComponent from '../../react-showcase/src/components/section';
import NavigationComponent from '../../react-showcase/src/components/navigation';
import NavigationItemComponent from '../../react-showcase/src/components/navigation-item';
import PopoverComponent from '../../react-showcase/src/components/popover';
import * as buttonCode from '../components/code-docs/button';
import * as linkCode from '../components/code-docs/link';
import * as accordionCode from '../components/code-docs/accordion';
import * as accordionItemCode from '../components/code-docs/accordion-item';
import * as brandCode from '../components/code-docs/brand';
import * as iconCode from '../components/code-docs/icon';
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
import * as pageCode from '../components/code-docs/page';
import * as sectionCode from '../components/code-docs/section';
import * as navigationCode from '../components/code-docs/navigation';
import * as navigationItemCode from '../components/code-docs/navigation-item';
import * as popoverCode from '../components/code-docs/popover';

export type NavigationItem = {
	label: string;
	name?: string;
	path?: string;
	component?: ReactElement;
	subNavigation?: NavigationItem[];
	isHiddenInMenu?: boolean;
};

export const componentChildren: NavigationItem[] = [
	{
		label: 'Action',
		path: '/components/action',
		subNavigation: [
			{
				label: 'DBButton',
				name: 'button',
				component: <ButtonComponent slotCode={buttonCode} />
			},
			{
				label: 'DBLink',
				name: 'link',
				component: <LinkComponent slotCode={linkCode} />
			}
		]
	},
	{
		label: 'Data-Display',
		path: '/components/data-display',
		subNavigation: [
			{
				label: 'DBBrand',
				name: 'brand',
				component: <BrandComponent slotCode={brandCode} />
			} /* TODO: Uncomment this if dev and design is aligned
			{
				label: 'DBIcon',
				name: 'icon',
				component: <IconComponent slotCode={iconCode} />
			}, */,
			{
				label: 'DBTooltip',
				name: 'tooltip',
				component: <TooltipComponent slotCode={tooltipCode} />
			},
			{
				label: 'DBInfotext',
				name: 'infotext',
				component: <InfotextComponent slotCode={infotextCode} />
			},
			{
				label: 'DBTag',
				name: 'tag',
				component: <TagComponent slotCode={tagCode} />
			},
			{
				label: 'DBAccordion',
				name: 'accordion',
				component: (
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
				subNavigation: [
					{
						label: 'DBAccordionItem Properties',
						path: `/components/accordion-item/properties`
					}
				]
			},
			{
				label: 'DBAccordionItem',
				name: 'accordion-item',
				component: (
					<AccordionItemComponent slotCode={accordionItemCode} />
				),
				isHiddenInMenu: true
			},
			{
				label: 'DBTabs',
				name: 'tabs',
				component: (
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
				subNavigation: [
					{
						label: 'DBTabItem Properties',
						path: `/components/tab-item/properties`
					}
				]
			},
			{
				label: 'DBTabItem',
				name: 'tab-item',
				component: <TabItemComponent slotCode={tabItemCode} />,
				isHiddenInMenu: true
			}
		]
	},
	{
		label: 'Data-Input',
		path: '/components/data-input',
		subNavigation: [
			{
				label: 'DBCheckbox',
				name: 'checkbox',
				component: <CheckboxComponent slotCode={checkboxCode} />
			},
			{
				label: 'DBInput',
				name: 'input',
				component: <InputComponent slotCode={inputCode} />
			},
			{
				label: 'DBRadio',
				name: 'radio',
				component: <RadioComponent slotCode={radioCode} />
			},
			{
				label: 'DBSelect',
				name: 'select',
				component: <SelectComponent slotCode={selectCode} />
			},
			{
				label: 'DBSwitch',
				name: 'switch',
				component: <SwitchComponent slotCode={switchCode} />
			},
			{
				label: 'DBTextarea',
				name: 'textarea',
				component: <TextareaComponent slotCode={textareaCode} />
			}
		]
	},
	{
		label: 'Feedback',
		path: '/components/feedback',
		subNavigation: [
			{
				label: 'DBNotification',
				name: 'notification',
				component: <NotificationComponent slotCode={notificationCode} />
			},
			{
				label: 'DBBadge',
				name: 'badge',
				component: <BadgeComponent slotCode={badgeCode} />
			}
		]
	},
	{
		label: 'Layout',
		path: '/components/layout',
		subNavigation: [
			{
				label: 'DBCard',
				name: 'card',
				component: <CardComponent slotCode={cardCode} />
			},
			{
				label: 'DBDivider',
				name: 'divider',
				component: <DividerComponent slotCode={dividerCode} />
			},
			{
				label: 'DBDrawer',
				name: 'drawer',
				component: <DrawerComponent slotCode={drawerCode} />
			},
			{
				label: 'DBHeader',
				name: 'header',
				component: <HeaderComponent slotCode={headerCode} />
			} /* TODO: Uncomment this if dev and design is aligned
			{
				label: 'DBPage',
				name: 'page',
				component: <PageComponent slotCode={pageCode} />
			}, */,
			{
				label: 'DBSection',
				name: 'section',
				component: <SectionComponent slotCode={sectionCode} />
			}
		]
	},
	{
		label: 'Navigation',
		path: '/components/navigation',
		subNavigation: [
			{
				label: 'DBNavigation',
				name: 'navigation',
				component: (
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
				subNavigation: [
					{
						label: 'DBNavigationItem Properties',
						path: `/components/navigation-item/properties`
					}
				]
			},
			{
				label: 'DBNavigationItem',
				name: 'navigation-item',
				isHiddenInMenu: true,
				component: (
					<NavigationItemComponent slotCode={navigationItemCode} />
				)
			}
		]
	},
	{
		label: 'Utilities',
		path: '/components/utilities',
		subNavigation: [
			{
				label: 'DBPopover',
				name: 'popover',
				component: <PopoverComponent slotCode={popoverCode} />
			}
		]
	}
];
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
					{ label: 'Overview', path: '/foundations/colors/overview' },
					{
						label: 'Color Schemes',
						path: '/foundations/colors/color-schemes'
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
			}
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
				subNavigation: category?.subNavigation
					?.filter((subNavItem) => !subNavItem.isHiddenInMenu)
					.map((component) => ({
						label: component.label,
						path: `/components/${component.name}`,
						subNavigation: [
							{
								label: 'Overview',
								path: `/components/${component.name}/overview`
							},
							{
								label: 'Properties',
								path: `/components/${component.name}/properties`
							},
							{
								label: 'How to use',
								path: `/components/${component.name}/how-to-use`
							},
							{
								label: 'Migration',
								path: `/components/${component.name}/migration`
							},
							...(component.subNavigation ?? [])
						]
					}))
			}))
		]
	}
];
