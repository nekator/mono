## HTML

Load SCSS globally somewhere in your app:

```
@use "@db-ui/foundations/build/scss/variables.global" as *;
@use "@db-ui/components/build/styles/db-ui-42-webpack" as *;
@use "@db-ui/foundations/build/scss/color-classes" as *;

```

Use it:

```html
<div class="db-input" data-variant="informational">
	<input type="text" name="username" aria-labelledby="username-label" />
	<label for="username" id="username-label" aria-hidden="true">Label</label>
	<p class="description">Description</p>
</div>
```
