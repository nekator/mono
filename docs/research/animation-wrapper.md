# DEV Research animation-wrapper

## Overview

| Design System |                                                                           Component                                                                           | Comment                                                                                                                                                                                                                                                |
| ------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Atlassian Design System](https://bitbucket.org/atlassian/atlaskit/src/master/) |                                             [motion components](https://atlassian.design/components/motion/about)                                             | Offers some animation possibilities: Wrapper components fade in any elements. The addition and removal of items from a list can also be animated. Using the `isReducedMotion` helper, user preferences can also be taken into account in the JS domain. |
| [Bootstrap](https://github.com/twbs/bootstrap) |                                                                               ❌                                                                               | --                                                                                                                                                                                                                                                     |
| [GitHub Primer](https://github.com/primer/css) |                                      [animation css classes](https://primer.style/foundations/css-utilities/animations)                                       | There are a few CSS classes available to show and hide elements in a simple way.                                                                                                                                                                       |
| [GitLab Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com) | [motion principles](https://design.gitlab.com/brand-design/motion) and [scss variables](https://design.gitlab.com/product-foundations/animation-fundamentals) | Pajamas offers some SCSS variables for animations. In addition, the **basic principles** of animations on websites are explained in depth.                                                                                                             |
| [HP Enterprise Grommet](https://github.com/grommet/grommet) |                                                                               ❌                                                                               |                                                                                                                                                                                                                                                        |
| [IBM Carbon](https://github.com/carbon-design-system/carbon) |                                          [motion overview](https://carbondesignsystem.com/elements/motion/overview/)                                          | Carbon explains some motion principles. There are few SCSS variables and JS functions that return cubic-bezier.                                                                                                                                        |
| [Material UI](https://github.com/mui/material-ui) |                                               [transition components](https://mui.com/material-ui/transitions/)                                               | MUI has components that show and hide any content in various animated ways.                                                                                                                                                                            |
| [MongoDB.design](https://github.com/mongodb/design) |                                                                               ❌                                                                               | --                                                                                                                                                                                                                                                     |
| [Porsche Design System](https://github.com/porsche-design-system/porsche-design-system) |                                            [motion variables](https://designsystem.porsche.com/v3/styles/motion/)                                             | There are a couple of variables for durations and easings here.                                                                                                                                                                                        |
| [SBB Lyne](https://github.com/lyne-design-system/lyne-components) |                                                                               ❌                                                                               | --                                                                                                                                                                                                                                                     |
| [Shopify Polaris](https://github.com/Shopify/polaris) |                                                [motion guidelines](https://polaris.shopify.com/design/motion)                                                 | Polaris offers some motion guidelines in the form of explanatory videos.                                                                                                                                                                               |
| [SNCF Design System](https://gitlab.com/SNCF/wcs) |                                                                               ❌                                                                               | --                                                                                                                                                                                                                                                     |
| [Telefonica Mistica](https://github.com/Telefonica/mistica-web) |                                                                               ❌                                                                               | --                                                                                                                                                                                                                                                     |
| [Telekom Scale](https://github.com/telekom/scale) |                                        ❌                                        | --                                                                                                                                                                                                                                                     |
| [Washington Post Design System](https://build.washingtonpost.com/) |                                        ❌                                         | --                                                                                                                                                                                                                                                     |
## Conclusion

- About half of the design systems do not offer any solutions for motion at all.
- Sometimes predefined (`scss`) variables are available for timings and easings.
- Sometimes general motion guidelines are available, also as well-made videos.
- The **Atlassian Design System** stands out with its animation wrappers. These are components that can show and hide any content in an uncomplicated way.

**Compared to the existing design systems, it should be "easy" to set new standards here.**



## Possible aspects of Motion in DST

- Docs: Why it's worth using motion!
- Docs: What are our animation basics and guidelines?
- Pattern: How to animate related elements with a rhythm
- Code: global variables for timings and easing functions
- Code: global motion characteristics analogue to densities, e.g. none, reduced, default, expressive
- Code: Components that show and hide elements
- Code: Components that intercept certain events (e.g. scrolling) and then start animations


## Animation Tools / Plugins

| Tool                                    | Fees? | Description | Possible benefits |
|-----------------------------------------|-------|-------------|-------------------|
| [GSAP / Green Socks](https://gsap.com/) |   ❓    |             |             |
|                                         |       |             |             |

