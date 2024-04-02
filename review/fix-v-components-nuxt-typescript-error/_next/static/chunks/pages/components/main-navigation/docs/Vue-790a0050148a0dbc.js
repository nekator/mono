(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94379],{22923:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/main-navigation/docs/Vue",function(){return t(22686)}])},22686:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r}});var a=t(52322),i=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBMainNavigation, DBNavigationItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBMainNavigation>\n		<DBNavigationItem :active="true">\n			Navi-Item 1\n			<template v-slot:sub-navigation>\n				<DBNavigationItem :active="true">\n					Sub-Navi-Item 1\n\n					<template v-slot:sub-navigation>\n						<DBNavigationItem :active="true">\n							<a href="#">Sub-Sub-Navi-Item 1</a>\n						</DBNavigationItem>\n						<DBNavigationItem>\n							<a href="#">Sub-Sub-Navi-Item 2</a>\n						</DBNavigationItem>\n					</template>\n				</DBNavigationItem>\n				<DBNavigationItem>\n					<a href="#">Sub-Navi-Item 2</a>\n				</DBNavigationItem>\n			</template>\n		</DBNavigationItem>\n		<DBNavigationItem icon="account">\n			<a href="#">Navi-Item 2</a>\n		</DBNavigationItem>\n		<DBNavigationItem :disabled="true">\n			<a href="#">Navi-Item 3</a>\n		</DBNavigationItem>\n	</DBMainNavigation>\n</template>\n'})}),"\n",(0,a.jsx)(n.h3,{id:"vue-router-and-active-state-handling",children:"Vue Router and active state handling"}),"\n",(0,a.jsxs)(n.p,{children:["You can set the property ",(0,a.jsx)(n.code,{children:"active"})," to a boolean value as in the example above.\nIt will cause the navigation item to render in active style and implicitly\nset ",(0,a.jsx)(n.code,{children:'aria-current="page"'})," to the list element."]}),"\n",(0,a.jsxs)(n.p,{children:["The component will also check for child element set to ",(0,a.jsx)(n.code,{children:'aria-current="page"'}),".\nSuch elements are also displayed in active state.\nThis makes the component ",(0,a.jsx)(n.a,{href:"https://router.vuejs.org/api/interfaces/RouterLinkProps.html#ariaCurrentValue",children:"integration with the Vue Router"})," way more elegant\ncompared to the first variant."]}),"\n",(0,a.jsxs)(n.p,{children:["Now you can use Vue Routers ",(0,a.jsx)(n.code,{children:"RouterLink"})," component to define your targets.\nThe active style is automatically set once an item receives the ",(0,a.jsx)(n.code,{children:'aria-current="page"'})," attribute."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBMainNavigation, DBNavigationItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBMainNavigation>\n		<DBNavigationItem>\n			<RouterLink to="/" ariaCurrentValue="page">Home</RouterLink>\n		</DBNavigationItem>\n		<DBNavigationItem>\n			<template> Demo Pages </template>\n			<template #sub-navigation>\n				<DBNavigationItem>\n					<RouterLink to="/demo/1" ariaCurrentValue="page">\n						Demo Page 1\n					</RouterLink>\n\n					<RouterLink to="/demo/2" ariaCurrentValue="page">\n						Demo Page 2\n					</RouterLink>\n				</DBNavigationItem>\n			</template>\n		</DBNavigationItem>\n	</DBMainNavigation>\n</template>\n'})})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}},function(e){e.O(0,[92888,49774,40179],function(){return e(e.s=22923)}),_N_E=e.O()}]);