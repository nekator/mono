<script setup lang="ts">
import { DBNavigationItem } from "../../../output/vue/src";
import { type NavItem } from "./utils/navigation-items";

defineProps<{
	navItem: NavItem;
}>();
</script>

<template>
	<DBNavigationItem :backButtonText="`Back to ${navItem.label}`">
		<template v-if="navItem.subNavigation" v-slot:subnavigation>
			<template v-for="item of navItem.subNavigation">
				<NavItemComponent :navItem="item"></NavItemComponent>
			</template>
		</template>
		<nuxt-link
			v-if="navItem.component"
			:to="navItem.path"
			ariaCurrentValue="page"
		>
			{{ navItem.label }}
		</nuxt-link>
		<template v-if="!navItem.component">{{ navItem.label }}</template>
	</DBNavigationItem>
</template>
