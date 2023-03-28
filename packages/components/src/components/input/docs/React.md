## React

Load SCSS globally somewhere in your app:

```
@use "@db-ui/foundations/build/scss/variables.global" as *;
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
@use "@db-ui/foundations/build/scss/color-classes" as *;

```

Import component:

```ts
import { DBInput } from "@db-ui/react-components";

<DBInput
	variant={variant}
	disabled={disabled}
	label={label}
	value={value}
	description={description}
	iconAfter={iconAfter}
	iconBefore={iconBefore}
	required={required}
></DBInput>;
```
