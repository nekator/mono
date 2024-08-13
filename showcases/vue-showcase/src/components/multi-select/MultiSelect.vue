<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/multi-select.json";
import { DBMultiSelect } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBMultiSelect" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DBMultiSelect>{{exampleName}}</DBMultiSelect>
		</template>
	</DefaultComponent>
</template>

