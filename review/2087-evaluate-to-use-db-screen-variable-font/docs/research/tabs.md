# DEV Research tabs

## Overview

| Design System                                                                           |                                                  Component                                                   | Comment                                                                                                                                                        |
| --------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Atlassian Design System](https://bitbucket.org/atlassian/atlaskit/src/master/)         |                          [tabs](https://atlassian.design/components/tabs/examples)                           | 3 div-tags with aria- and role-attributes                                                                                                                      |
| [Bootstrap](https://github.com/twbs/bootstrap)                                          |                       [navs](https://getbootstrap.com/docs/4.3/components/navs/#tabs)                        | nav-component with .nav-tabs class, `ul role=tablist`, `li`, `a role=tab`, `div role=tabpanel`                                                                 |
| [GitHub Primer](https://github.com/primer/css)                                          |  [tab nav](https://primer.style/components/tab-nav) / [tab panels](https://primer.style/design/components/)  | tab-nav: set of links to switch between views, tab-panels: list of buttons to switch between views                                                             |
| [GitLab Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)       |                              [tabs](https://design.gitlab.com/components/tabs)                               | `ul role=tablist`, `li`, `a role=tab`, `div role=tabpanel` -> tabgroup + tab&label + tab panel                                                                 |
| [HP Enterprise Grommet](https://github.com/grommet/grommet)                             |                                      [tabs](https://v2.grommet.io/tabs)                                      | `div role=tablist`, `button role=tab`,`div role=tabpanel` -> Components:`<Tabs>` + `<Tab>` + `<any>` (with aria and role attributes)                           |
| [IBM Carbon](https://github.com/carbon-design-system/carbon)                            |                         [tabs](https://carbondesignsystem.com/components/tabs/usage)                         | `div role=tablist`, `button role=tab`, `div role=tabpanel` -> `<TabList>` & `<Tab>` + `<TabPanels>` & `<TabPanel>` (with aria attributes)                      |
| [Material UI](https://mui.com/material-ui/react-tabs/)                                  |                               [tabs](https://mui.com/material-ui/react-tabs/)                                | `div role=tablist`, `button role=tab`, `div role=tabpanel` -> `<TabList>` & `<Tab>` + `<TabPanel>` (with aria attributes)                                      |
| [MongoDB.design](https://github.com/mongodb/design)                                     |                          [tabs](https://www.mongodb.design/component/tabs/example/)                          | `div role=tablist`, `button role=tab`, `div role=tabpanel`                                                                                                     |
| [Porsche Design System](https://github.com/porsche-design-system/porsche-design-system) |                     [tabs](https://designsystem.porsche.com/v3/components/tabs/examples)                     | `div role=tablist`, `button role=tab`, `p role=tabpanel`                                                                                                       |
| [SBB Lyne](https://github.com/lyne-design-system/lyne-components)                       | [tab-group & tab-tile](https://lyne-storybook.app.sbb.ch/?path=/docs/components-sbb-tab-sbb-tab-group--docs) | tabgroup + tabtitle + any =>`div role=tablist`, `div role=tab`, `article role="tabpanel"`                                                                      |
| [Shopify Polaris](https://github.com/Shopify/polaris)                                   |                        [tabs](https://polaris.shopify.com/components/navigation/tabs)                        | 1 component (`<Tabs>`)-> `<ul role=tablist>`,`<li><button role=tab>`,`<div role=tabpanel>`, `fittet` prop for 2-3 tabs, `action` prop to add new tab           |
| [SNCF Design System](https://gitlab.com/SNCF/wcs)                                       |                [navs/tabs](https://designmetier-bootstrap.sncf.fr/docs/4.3/layout/navs/#tabs)                | `nav role="navigation"`,`<ul>`,`<li>`                                                                                                                          |
| [Telefonica Mistica](https://github.com/Telefonica/mistica-web)                         |               [tabs](https://brandfactory.telefonica.com/d/iSp7b1DkYygv/n-a#/components/tabs)                | `div`, `button role=tab`, no panels                                                                                                                            |
| [Telekom Scale](https://github.com/telekom/scale)                                       |      [tab-navigation](https://telekom.github.io/scale/?path=/docs/components-tab-navigation--text-icon)      | `div role=tablist`, `span role=tab`, `div role="tabpanel"`                                                                                                     |
| [Washington Post Design System](https://build.washingtonpost.com/)                      |                           [tabs](https://build.washingtonpost.com/components/tabs)                           | `div role=tablist`, `button role=tab`, `div`, alignement, disabled, overflow, !activationMode!                                                                 |
| [W3C](https://www.w3.org/WAI/ARIA/apg/patterns/)                                        |                        [tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)                        | Tabs -> Tablist = set of tab-elements (serves as label for tabpanel) -> activation displays content of tabpanel; aria and role attributes accurately described |

## Conclusion

-   we can use tab component of [db-ui/elements](https://github.com/db-ui/elements/blob/main/packages/db-ui-elements-stencil/src/components/db-tab/db-tab.tsx)
-   replace `<section>` by `<article>`
-   we use [`role=tablist`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role), [`role=tab`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role), [`role=tabpanel`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
-   we use [`aria-controls`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls), [`aria-selected`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected), [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
-   We could still explore to use hyperlinks `a href="#tab01"` with anchors and using `:target` to display each tab
-   We could still explore to use `details` and `summary` elements especially due to their `name`-attributes enhancement lately

Findings:

-   Some design systems are using `activation-mode=auto/manual` - is this a vaild use-case for design? Default should be `auto` select which first tab selected
-   Prop `label` should be a slot to pass in e.g. a `<span>` and a `<DBBadge>`
-   Shall we provide a `badgeNumber` as a default property?
-   `fitted` property should be `width=auto/full`