<!-- markdownlint-disable-file MD013 -->

# DEV Research Component

## Switch / Toggle / Tag

### Overview

| Design System                                                                           | Switch                                                                                                                                                                                                             | Toggle                                                                                                                                                                                                                  | Tag (interactive)                                                                                                                         | Other                                                                                                 |
| :-------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| [Telekom Scale](https://telekom.github.io/scale)                                        | [Switch](https://telekom.github.io/scale/?path=/docs/components-switch--standard) `<label><input type="checkbox"></label>`                                                                                         |                                                                                                                                                                                                                         | [Tag](https://telekom.github.io/scale/?path=/docs/components-tag--standard)<br/>component is _not interactive_                            | [Chip](https://telekom.github.io/scale/?path=/docs/components-chip--standard)<br/>e.g. filtering      |
| [SBB](hhttps://angular.app.sbb.ch/angular/components/)                                  |                                                                                                                                                                                                                    | [Toggle](https://angular.app.sbb.ch/angular/components/toggle/examples) is our Tab Bar<br/> In their examples they use a simple [Button](https://angular.app.sbb.ch/angular/components/badge/examples) to toggle states | [interactive Tag](https://angular.app.sbb.ch/angular/components/tag/examples)<br/> with disabled state                                    | [Chip](hhttps://angular.app.sbb.ch/angular/components/chips/examples) <br/> e.g. filtering            |
| [SNCF Design Métier](https://designmetier-bootstrap.sncf.fr/)                           | [Switch](https://designmetier-bootstrap.sncf.fr/docs/4.3/components/checkboxes-and-radios/) and [Options](https://designmetier-bootstrap.sncf.fr/docs/4.3/components/checkboxes-and-radios/) as `<input>` elements |                                                                                                                                                                                                                         | [Button Tag](https://designmetier-bootstrap.sncf.fr/docs/4.3/components/buttons/)                                                         |
| [IBM Carbon](https://carbondesignsystem.com/components)                                 | _is called Toggle_ [Toggle](https://carbondesignsystem.com/components/toggle/usage/)                                                                                                                               |                                                                                                                                                                                                                         | [Tag](https://carbondesignsystem.com/components/tag/usage/) <br/>component is _not interactive_                                           |
| [Google Material](https://material-web.dev/components)                                  | [Switch](https://material-web.dev/components/switch) <br/>`<label>[…]<input type="checkbox"></label>`                                                                                                              |                                                                                                                                                                                                                         |                                                                                                                                           | [Interactive Chip](https://material-web.dev/components/chip/#interactive-demo)<br/>looks like our tag |
| [Porsche Design System](https://designsystem.porsche.com/v3/components/switch/examples) | [Switch](https://designsystem.porsche.com/v3/components/switch/examples)                                                                                                                                           |                                                                                                                                                                                                                         | [Tag Dismissable](https://designsystem.porsche.com/v3/components/tag-dismissible/examples) and _Tag_ component.<br/>Only as Web Component |                                                                                                       |
| [Washington Post](https://build.washingtonpost.com/components)                          | [Switch](https://build.washingtonpost.com/components/switch) build as `<button type="button" role="switch" aria-checked="true" data-state="checked" value="on" […]`                                                |

| Design System                                          | Component(s)                                                                                                                                                                                                                                                                      | Comment                                                                                                                                                                        |
| :----------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Telekom Scale](https://telekom.github.io/scale)       | [Switch](https://telekom.github.io/scale/?path=/docs/components-switch--standard), [Tag](https://telekom.github.io/scale/?path=/docs/components-tag--standard)<br/>(component is _not interactive_) [Chip](https://telekom.github.io/scale/?path=/docs/components-chip--standard) | Switch uses `<input type="checkbox">`, where as Tag is _not interactive_                                                                                                       |
| [SBB](hhttps://angular.app.sbb.ch/angular/components/) | [Toggle](https://angular.app.sbb.ch/angular/components/toggle/examples), [interactive Tag](https://angular.app.sbb.ch/angular/components/tag/examples)<br/> with disabled state, [Chip](hhttps://angular.app.sbb.ch/angular/components/chips/examples)                            | Toggle is our Tab Bar; in their examples they use a simple [Button](https://angular.app.sbb.ch/angular/components/badge/examples) to toggle states; Chip is used for filtering |

## Conclusion

There are two ways to use a tooltip:

1. As wrapping tag `<tooltip content="xyz"><button>Test</button></tooltip>`
2. As property `<button tooltip/title="xyz">Test</button>`

---

We should use a wrapping tag similar to IBM and a [title fallback](https://stackoverflow.com/questions/2011142/how-to-change-the-style-of-the-title-attribute-inside-an-anchor-tag).

Advantages wrapping tag:

-   We can use `::before` or `::after` for the arrow
-   We can use `string` and `slot` for the content
-   We have a position for the wrapping div which can be used by JS

Disadvantages wrapping tag:

-   Not using default `title`
-   Could be hard to use default `:hover` or `:focus`

Findings:

-   By providing and `open` state we could let the user handle if the tooltip should be shown
-   We could use `behaviour` to enable different states like `hover` or `clicked` etc.

---

### MDN

<https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role>
