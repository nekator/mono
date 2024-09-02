## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBButton } from '@db-ui/ngx-components';

@Component({
  // ...
  standalone: true,
  imports: [..., DBButton],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-button variant="brand">Button</db-button>
```
