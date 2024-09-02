import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import '@db-ui/components/build/styles/db-ui-42-rollup.css';
import '@db-ui/foundations/build/css/colors/classes/all.css';
import { Lang, Sa11y } from 'sa11y/dist/js/sa11y.esm.js';
import Sa11yLangEn from 'sa11y/dist/js/lang/en.js';
import 'sa11y/dist/css/sa11y.min.css';
import '../../showcase-styles.css';
import App from './App.vue';
import { getRoutes } from './utils/navigation-items';

if (import.meta.env.DEV) {
	Lang.addI18n(Sa11yLangEn.strings);
	const sa11y = new Sa11y({
		checkRoot: 'body'
	});
}

const routes = getRoutes();

const router = createRouter({
	history: createWebHashHistory('/vue-showcase/'),
	routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

app.provide('$showcaseVariant', 'vue');
