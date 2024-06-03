# Font-Sizes

-   You should use our provided **Font-Sizes** to change the size of text elements like `<p>` etc.

> **_NOTE:_** Some sizes may stay the same because of screen-width or density.

## How to include Font-Sizes

For **CSS** and **Tailwind** you need to use the import `@import "@db-ui/foundations/build/css/fonts/classes/all.css";` in your root `.css` file.

For **SCSS** you can use the `.css` file, or you can use a placeholder by importing `@use @db-ui/foundations/build/scss/fonts` in your `.scss` file, where you need to reference the specific font size.
Then you can use e.g. `sm` font-size by extending our SCSS placeholders like this: `@extend %db-overwrite-font-size-sm`.

> **_NOTE:_** Make sure that you import the file after all other **foundation** css files, otherwise you should overwrite a specific `font-size` with the global selector

```css
/* Global selector */
* {
	font-size: inherit;
	line-height: inherit;
}
```

### Advantages of using DB Font-Sizes

By using **css classes** / **data-attributes**, **scss placeholders** or **tailwind classes** to set the **font-size**, it is guaranteed that `font-size` and `line-height` are applied appropriately to each other.
The **Font-Sizes** also set **css custom-properties**, which are used by components to calculate heights, for example.

### When to use

-   Set **Font-Size** for a HTML tag or a component
-   Define **Font-Size** for a container and all elements in it. This works as long as the font-size is not explicitly set.

### How to use

We're providing an [overview for all possible font-sizes](./overview).

There are several variants: `3xl`, `2xl`, `xl`, `lg`, `md`, `sm`, `xs`, `2xs`, `3xs`.

**We use `XX` here you should replace it with a variant from above.**

| Variant | CSS class                 | CSS data-attribute    | SCSS                                 | Tailwind                  |
| :-----: | ------------------------- | --------------------- | ------------------------------------ | ------------------------- |
|  `XX`   | `class="db-font-size-XX"` | `data-font-size="XX"` | `@extend %db-overwrite-font-size-XX` | `class="db-font-size-XX"` |
