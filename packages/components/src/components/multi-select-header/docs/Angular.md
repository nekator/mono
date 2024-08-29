## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DBMultiSelectHeaderModule } from '@db-ui/ngx-components';

@Component({
  // ...
  imports: [..., DBMultiSelectHeaderModule],
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-multi-select-header>MultiSelectHeader</db-multi-select-header>
```


