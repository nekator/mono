<script setup lang="ts">
import { type RouteRecordRaw, useRoute } from "vue-router";
import { getRoutes } from "~/src/utils/navigation-items";
import { ref } from "vue";

const currentRoute = useRoute();
console.log("route", currentRoute.path, getRoutes());

const currentRouteData = ref<null | RouteRecordRaw>(null);

currentRouteData.value =
	getRoutes().find((route) => route.path === currentRoute.path) ?? null;

console.log("currentRouteData", currentRoute, currentRouteData.value);
</script>

<template>
	<div v-if="currentRouteData">
		<component
			v-if="currentRouteData.component"
			:is="currentRouteData.component"
		></component>
	</div>
	<div v-else>
		<h1>404</h1>
	</div>
</template>
