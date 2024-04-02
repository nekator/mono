(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24905],{61423:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header/how-to-use",function(){return t(27840)}])},61248:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),i=t(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"//app.component.ts\nimport {\n	DBHeader,\n	NavigationDirective,\n	ActionBarDirective,\n	MetaNavigationDirective\n} from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  imports: [\n	// ...,\n	DBHeader\n    NavigationDirective, // Optional: If you want to use a Navigation\n	ActionBarDirective, // Optional: If you want to use ActionBar\n	MetaNavigationDirective, // Optional: If you want to use MetaNavigation\n  ],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.h4,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:"<!-- app.component.html -->\n<db-header>\n	<db-brand brand>Header</db-brand>\n</db-header>\n"})}),"\n",(0,a.jsx)(e.h4,{id:"full",children:"Full"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:'// File: app.component.ts\n\nimport { Component } from "@angular/core";\n\n@Component({\n	selector: "app-root",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	drawerOpen = false;\n\n	toggleDrawer = (open: boolean) => {\n		this.drawerOpen = open;\n	};\n}\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n<db-header [drawerOpen]="drawerOpen" (onToggle)="toggleDrawer($event)">\n	<db-brand brand>My Awesome App</db-brand>\n	<db-main-navigation *dbNavigation>\n		<!-- https://github.com/db-ui/mono/blob/main/packages/components/src/components/main-navigation/docs/Angular.md -->\n	</db-main-navigation>\n	<ng-container *dbMetaNavigation>\n		<DBLink href="#">Imprint</DBLink>\n		<DBLink href="#">Help</DBLink>\n	</ng-container>\n	<ng-container call-to-action>\n		<DBButton icon="search" variant="ghost" [noText]="true">\n			Search\n		</DBButton>\n	</ng-container>\n	<ng-container *dbActionBar>\n		<DBButton icon="account" variant="ghost" [noText]="true">\n			Profile\n		</DBButton>\n		<DBButton icon="alert" variant="ghost" [noText]="true">\n			Notification\n		</DBButton>\n		<DBButton icon="help" variant="ghost" [noText]="true"> Help </DBButton>\n	</ng-container>\n</db-header>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},68234:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),i=t(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<header class="db-header" id="regular (Default)">\n		<dialog\n			class="db-drawer"\n			id="drawer-bffe6918-05e7-4baa-b532-66467e61905c"\n		>\n			<article\n				class="db-drawer-container db-header-drawer"\n				data-spacing="small"\n				data-rounded="true"\n			>\n				<header class="db-drawer-header">\n					<div class="db-drawer-header-text"></div>\n					<button\n						id="button-9c38e111-6ef8-4322-9da4-b72cf8223e48"\n						class="db-button button-close-drawer is-icon-text-replace"\n						data-icon="close"\n						data-variant="text"\n					>\n						Close Button\n					</button>\n				</header>\n				<div class="db-drawer-content">\n					<div class="db-header-drawer-navigation">\n						<div class="db-header-navigation">\n							<nav\n								id="main-navigation-8f8a0873-90c6-4674-9860-5685004b0705"\n								class="db-main-navigation"\n							>\n								<menu>\n									<li\n										id="navigation-item-60f3835c-adb0-4267-832a-d8324162d3f6"\n										class="db-navigation-item"\n										data-icon="account"\n									>\n										<a href="#">regular (Default)</a>\n									</li>\n									<li\n										id="navigation-item-3281f02e-bbc3-4b43-a0dd-b79813fd94f7"\n										class="db-navigation-item"\n										aria-disabled="true"\n									>\n										<a href="#"\n											>regular (Default) disabled</a\n										>\n									</li>\n								</menu>\n							</nav>\n						</div>\n						<div class="db-header-meta-navigation">\n							<a\n								id="link-8bfc3e9b-5c1e-43ec-b85a-6601afa9e972"\n								class="db-link"\n								href="#"\n								tabindex="0"\n								data-content="internal"\n								>Imprint</a\n							><a\n								id="link-cbfd6439-a3b2-4360-8127-cb524476d4d5"\n								class="db-link"\n								href="#"\n								tabindex="0"\n								data-content="internal"\n								>Help</a\n							>\n						</div>\n					</div>\n					<div class="db-header-action-bar">\n						<button\n							id="button-65ba5268-2f08-47e3-9884-283c7f3e0be8"\n							class="db-button is-icon-text-replace"\n							data-icon="account"\n							data-variant="text"\n						>\n							Profile</button\n						><button\n							id="button-22ab64a6-b2ce-4d7d-99a8-aa6bb8b9f998"\n							class="db-button is-icon-text-replace"\n							data-icon="alert"\n							data-variant="text"\n						>\n							Notification</button\n						><button\n							id="button-179a8a69-df76-4e8b-a09a-681d70431101"\n							class="db-button is-icon-text-replace"\n							data-icon="help"\n							data-variant="text"\n						>\n							Help\n						</button>\n					</div>\n				</div>\n			</article>\n		</dialog>\n		<div class="db-header-meta-navigation">\n			<a\n				id="link-09fe5d7a-451a-47ba-bab0-dd6596f3d192"\n				class="db-link"\n				href="#"\n				tabindex="0"\n				data-content="internal"\n				>Imprint</a\n			><a\n				id="link-35eca2e2-12d7-4765-b869-b00329a69351"\n				class="db-link"\n				href="#"\n				tabindex="0"\n				data-content="internal"\n				>Help</a\n			>\n		</div>\n		<div class="db-header-navigation-bar">\n			<div class="db-header-brand-container">\n				<div\n					id="brand-b39a57f2-1fc9-4937-8eeb-f99f29406d41"\n					class="db-brand"\n				>\n					<a href="/"\n						><img\n							class="db-logo"\n							src="https://db-ui.github.io/images/db_logo.svg"\n							alt=""\n							height="24"\n							width="34" /></a\n					>DBHeader\n				</div>\n			</div>\n			<div class="db-header-navigation-container">\n				<div class="db-header-navigation">\n					<nav\n						id="main-navigation-0405fe64-0c12-4362-91a2-2f9fae857bac"\n						class="db-main-navigation"\n					>\n						<menu>\n							<li\n								id="navigation-item-7191fbb8-5319-4480-94d5-c2813fd8b029"\n								class="db-navigation-item"\n								data-icon="account"\n							>\n								<a href="#">regular (Default)</a>\n							</li>\n							<li\n								id="navigation-item-9da396bf-2a41-402e-a9d8-cf54a219919b"\n								class="db-navigation-item"\n								aria-disabled="true"\n							>\n								<a href="#">regular (Default) disabled</a>\n							</li>\n						</menu>\n					</nav>\n				</div>\n				<div class="db-header-call-to-action">\n					<button\n						id="button-46f070bc-adb3-4729-97ae-bfa41e62e51b"\n						class="db-button is-icon-text-replace"\n						data-icon="search"\n						data-variant="text"\n					>\n						Search\n					</button>\n				</div>\n			</div>\n			<div class="db-header-action-container">\n				<div class="db-header-burger-menu-container">\n					<button\n						id="button-burger-menu"\n						class="db-button is-icon-text-replace"\n						data-icon="menu"\n						data-variant="text"\n					>\n						BurgerMenu\n					</button>\n				</div>\n				<div class="db-header-action-bar">\n					<button\n						id="button-cad51b9a-a428-42ea-91e7-ec52539f8f37"\n						class="db-button is-icon-text-replace"\n						data-icon="account"\n						data-variant="text"\n					>\n						Profile</button\n					><button\n						id="button-b706112c-8f61-4f8c-a814-637c94648e54"\n						class="db-button is-icon-text-replace"\n						data-icon="alert"\n						data-variant="text"\n					>\n						Notification</button\n					><button\n						id="button-3d93a031-6a65-4739-bae2-b92fe3820458"\n						class="db-button is-icon-text-replace"\n						data-icon="help"\n						data-variant="text"\n					>\n						Help\n					</button>\n				</div>\n			</div>\n		</div>\n	</header>\n</body>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},90238:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),i=t(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.h4,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { DBHeader, DBBrand } from "@db-ui/react-components";\n\nconst App = () => <DBHeader slotBrand={<DBBrand>Header</DBBrand>} />;\n\nexport default App;\n'})}),"\n",(0,a.jsx)(e.h4,{id:"full",children:"Full"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBHeader, DBBrand, DBLink } from "@db-ui/react-components";\n\nconst [drawerOpen, setDrawerOpen] = useState<boolean>(false);\n\nconst App = () => (\n	<DBHeader\n		drawerOpen={drawerOpen}\n		onToggle={setDrawerOpen}\n		slotBrand={<DBBrand>My Awesome App</DBBrand>}\n		slotMetaNavigation={\n			<>\n				<DBLink href="#">Imprint</DBLink>\n				<DBLink href="#">Help</DBLink>\n			</>\n		}\n		slotCallToAction={\n			<DBButton icon="search" variant="ghost" noText>\n				Search\n			</DBButton>\n		}\n		slotActionBar={\n			<>\n				<DBButton icon="account" variant="ghost" noText>\n					Profile\n				</DBButton>\n				<DBButton icon="alert" variant="ghost" noText>\n					Notification\n				</DBButton>\n				<DBButton icon="help" variant="ghost" noText>\n					Help\n				</DBButton>\n			</>\n		}\n	>\n		<DBMainNavigation>\n			//\n			https://github.com/db-ui/mono/blob/main/packages/components/src/components/main-navigation/docs/React.md\n		</DBMainNavigation>\n	</DBHeader>\n);\n\nexport default App;\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},84022:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),i=t(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.h4,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBHeader, DBBrand } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBHeader>\n		<DBBrand slot="brand">Header</DBBrand>\n	</DBHeader>\n</template>\n'})}),"\n",(0,a.jsx)(e.h4,{id:"full",children:"Full"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { ref } from "vue";\nimport { DBHeader, DBBrand, DBLink, DBButton } from "@db-ui/v-components";\n\nconst drawerOpen = ref(false);\n\nconst toggleDrawer = (open: boolean) => {\n	drawerOpen.value = open;\n};\n</script>\n\n<template>\n	<DBHeader :drawerOpen="drawerOpen" :onToggle="toggleDrawer">\n		<template v-slot:brand>\n			<DBBrand> My Awesome App </DBBrand>\n		</template>\n		<template v-slot:call-to-action>\n			<DBButton icon="search" variant="ghost" :no-text="true">\n				Search\n			</DBButton>\n		</template>\n		<template v-slot:action-bar>\n			<DBButton icon="account" variant="ghost" :no-text="true">\n				Profile\n			</DBButton>\n			<DBButton icon="alert" variant="ghost" :no-text="true">\n				Notification\n			</DBButton>\n			<DBButton icon="help" variant="ghost" :no-text="true">\n				Help\n			</DBButton>\n		</template>\n		<template v-slot:meta-navigation>\n			<DBLink href="#">Imprint</DBLink>\n			<DBLink href="#">Help</DBLink>\n		</template>\n\n		<DBMainNavigation>\n			//\n			https://github.com/db-ui/mono/blob/main/packages/components/src/components/main-navigation/docs/Vue.md\n		</DBMainNavigation>\n	</DBHeader>\n</template>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},27840:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var a=t(52322),i=t(45392),r=t(11803),o=t(68234),d=t(61248),c=t(90238),l=t(84022);let s=n=>{let{children:e}=n;return(0,a.jsx)(r.Z,{children:e})};function u(n){let e={h1:"h1",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-to-use-dbheader",children:"How to use DBHeader"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(d.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function p(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(s,{...n,children:(0,a.jsx)(u,{...n})})}},16134:function(n,e,t){"use strict";var a=t(52322),i=t(2784),r=t(13776);let o=(0,i.forwardRef)(function(n,e){let t=e||(0,i.useRef)(e);return(0,a.jsx)("button",{ref:t,...(0,r.mS)(n,[]),id:n.id,className:(0,r.yI)("db-button",n.className),type:n.type,title:n.title,disabled:n.disabled,"aria-label":n.label,"data-icon":n.icon,"data-size":n.size,"data-state":n.state,"data-width":n.width,"data-variant":n.variant,"data-no-text":n.noText,name:n.name,value:n.value,"aria-describedby":n.describedbyid,"aria-expanded":n.ariaexpanded,"aria-pressed":n.ariapressed,onClick:e=>{n.onClick&&n.onClick(e)},children:n.children})});e.Z=o},63900:function(n,e,t){"use strict";var a,i,r,o,d,c,l;t.d(e,{IY:function(){return s},YP:function(){return u},ce:function(){return p}});let s="OVERWRITE_DEFAULT_ID",u="Back",p="Close Button";(d=a||(a={})).FUNCTIONAL="functional",d.REGULAR="regular",d.EXPRESSIVE="expressive",Object.entries(a).map(n=>{let[,e]=n;return e}),(i||(i={})).PRIMARY="primary",(c=r||(r={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",c.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",c.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",c.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",c.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",c.BRAND_BG_LEVEL_1="brand-bg-lvl-1",c.BRAND_BG_LEVEL_2="brand-bg-lvl-2",c.BRAND_BG_LEVEL_3="brand-bg-lvl-3",c.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",c.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",c.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",c.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",c.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",c.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",c.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",c.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",c.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",c.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",c.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",c.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",c.WARNING_BG_LEVEL_1="warning-bg-lvl-1",c.WARNING_BG_LEVEL_2="warning-bg-lvl-2",c.WARNING_BG_LEVEL_3="warning-bg-lvl-3",c.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",c.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",c.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",c.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",c.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",c.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",c.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(r).map(n=>{let[,e]=n;return e}),Object.entries(i).map(n=>{let[,e]=n;return e}),(l=o||(o={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(o).map(n=>{let[,e]=n;return e})},13776:function(n,e,t){"use strict";t.d(e,{MN:function(){return c},Vj:function(){return a},cd:function(){return d},mS:function(){return o},yI:function(){return r},yn:function(){return i}});let a=()=>{var n,e;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(n,e)=>{Object.values(n.children).forEach(n=>{n.setAttribute(e.key,e.value),n.children.length>0&&i(n,e)})},r=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];let a="";return e.forEach((n,e)=>{if(n){if("string"==typeof n)a+="".concat(n," ");else for(let e in n)n[e]&&(a+="".concat(e," "))}}),a.trim()},o=(n,e)=>Object.keys(n).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("on"))&&!e.includes(n)).reduce((e,t)=>(e[t]=n[t],e),{}),d=n=>{let{left:e,right:t}=n.getBoundingClientRect(),{innerWidth:a}=window;return e>=0&&t<=a},c=n=>{let{top:e,bottom:t}=n.getBoundingClientRect(),{innerHeight:a}=window;return e>=0&&t<=a}}},function(n){n.O(0,[49710,11803,92888,49774,40179],function(){return n(n.s=61423)}),_N_E=n.O()}]);