<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tag";
import { DBTag } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="Tag" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName }">
			<template v-if="exampleIndex === 0">
				<DBTag>{{ exampleName }}</DBTag>
			</template>
		</template>
	</DefaultComponent>
</template>
