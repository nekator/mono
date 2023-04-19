## React

For general installation and configuration look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { useState } from "react";
import { DBCheckbox } from "@db-ui/react-components";

const App = () => (
	<ul>
		{["X", "Y", "Z"].map((checkboxName) => (
			<li key={checkboxName}>
				<DBCheckbox
					name="checkbox-group"
					onChange={() => {
						setCheckbox(checkboxName);
					}}
				>
					Checkbox {checkboxName}
				</DBCheckbox>
			</li>
		))}
	</ul>
);

export default App;
```
