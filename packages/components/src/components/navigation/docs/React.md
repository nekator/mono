## React

For general installation and configuration look at the [react-components](https://www.npmjs.com/package/@db-ui/react-components) package.

### Use component

```tsx App.tsx
// App.tsx
import { DBNavigation, DBNavigationItem } from "@db-ui/react-components";

const App = () => (
	<DBNavigation>
		<DBNavigationItem
			active
			slotSubNavigation={
				<>
					<DBNavigationItem
						active
						subNavigation={
							<>
								<DBNavigationItem active>
									<a href="#">Sub-Sub-Navi-Item 1</a>
								</DBNavigationItem>
								<DBNavigationItem>
									<a href="#">Sub-Sub-Navi-Item 2</a>
								</DBNavigationItem>
							</>
						}
					>
						Sub-Navi-Item 1
					</DBNavigationItem>
					<DBNavigationItem>
						<a href="#">Sub-Navi-Item 2</a>
					</DBNavigationItem>
				</>
			}
		>
			Navi-Item 1
		</DBNavigationItem>
		<DBNavigationItem icon="user">
			<a href="#">Navi-Item 2</a>
		</DBNavigationItem>
		<DBNavigationItem disabled>
			<a href="#">Navi-Item 3</a>
		</DBNavigationItem>
	</DBNavigation>
);

export default App;
```
