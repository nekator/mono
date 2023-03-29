## React

Load SCSS globally somewhere in your app:

```
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;

```

Import component:

```ts
import { DBInput } from "@db-ui/react-components";

<DBInput
	label={label}
	placeholder={description}
	description={description}
	onChange={handleChange}
></DBInput>;
```
