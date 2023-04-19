## Vue

For general installation and configuration look at the [v-components](https://www.npmjs.com/package/@db-ui/v-components) package.

### Use component

```vue App.vue
<!-- App.vue -->
<script setup lang="ts">
import { DBCheckbox } from "@db-ui/v-components";
import { ref } from "vue";
const checkbox = ref("");

const checkboxNames = ["X", "Y", "Z"];
</script>

<template>
	<ul>
		<li v-for="checkboxName in checkboxNames">
			<DBCheckbox @change="checkbox = checkboxName" name="checkbox-group">
				Checkbox {{ checkboxName }}
			</DBCheckbox>
		</li>
	</ul>
</template>
```
