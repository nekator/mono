---
to: "<%= readme ? `src/components/${name}/docs/Angular.md` : null %>"
---
## Angular

For general installation and configuration take a look at the [ngx-components](https://www.npmjs.com/package/@db-ui/ngx-components) package.

### Load component

```ts app.component.ts
// app.component.ts
import { DB<%= h.changeCase.pascal(name) %> } from '@db-ui/ngx-components';

@Component({
  // ...
  imports: [..., DB<%= h.changeCase.pascal(name) %>],
  standalone: true
  // ...
})
```

### Use component

```html app.component.html
<!-- app.component.html -->
<db-<%= name %>><%= h.changeCase.pascal(name) %></db-<%= name %>>
```


