<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
import "@db-ui/components/build/styles/db-ui-42-rollup.css";
import "@db-ui/foundations/build/css/colors/classes/all.css";
import "../../showcase-styles.css";
</script>

<style>
#__nuxt,
#__nuxt > div {
	block-size: 100%;
}
</style>
