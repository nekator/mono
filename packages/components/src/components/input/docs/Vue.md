## Vue

Load SCSS globally somewhere in your app:

```
@use "@db-ui/foundations/build/scss/variables.global" as *;
@use "@db-ui/components/build/styles/db-ui-42-rollup" as *;
@use "@db-ui/foundations/build/scss/color-classes" as *;

```

Use component:

```

<script>
import { DBInput } from '@db-ui/v-components';
</script>

<template>
  <DBInput label="Label" placeholder="Placeholder" @change="onChange($event)"></DBInput>
</template>

```

To get DBInput work with `v-model` you have to use v-model argument syntax:

```ts
<DBInput
	label="Textlabel"
	placeholder="Start typing"
	v-model:value="value"
></DBInput>
```

or using on-change listener:

```ts
<DBInput label="Textlabel" placeholder="Start" :value="modelAndChange" @change="($event) => { modelAndChange = $event.target.value;
}"/> {{ modelAndChange }}
```
