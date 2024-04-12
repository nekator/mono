(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42283],{80043:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/how-to-use",function(){return t(35014)}])},86085:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),i=t(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { DBNavigation } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBNavigation, DBNavigationItem, NavigationContentDirective],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-navigation>\n	<db-navigation-item [active]="true">\n		<ng-container sub-navigation>\n			<db-navigation-item [active]="true">\n				<ng-container *dbNavigationContent>\n					Sub-Navi-Item 1\n				</ng-container>\n				<ng-container sub-navigation>\n					<db-navigation-item [active]="true">\n						<ng-container *dbNavigationContent>\n							<a href="#">Sub-Sub-Navi-Item 1</a>\n						</ng-container>\n					</db-navigation-item>\n					<db-navigation-item>\n						<ng-container *dbNavigationContent>\n							<a href="#">Sub-Sub-Navi-Item 2</a>\n						</ng-container>\n					</db-navigation-item>\n				</ng-container>\n			</db-navigation-item>\n			<db-navigation-item>\n				<ng-container *dbNavigationContent>\n					<a href="#">Sub-Navi-Item 2</a>\n				</ng-container>\n			</db-navigation-item>\n		</ng-container>\n		<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>\n	</db-navigation-item>\n	<db-navigation-item icon="user">\n		<ng-container *dbNavigationContent>\n			<a href="#">Navi-Item 2</a>\n		</ng-container>\n	</db-navigation-item>\n	<db-navigation-item [disabled]="true">\n		<ng-container *dbNavigationContent>\n			<a href="#">Navi-Item 3</a>\n		</ng-container>\n	</db-navigation-item>\n</db-navigation>\n'})}),"\n",(0,a.jsx)(e.h3,{id:"angular-router-and-active-state-handling",children:"Angular Router and active state handling"}),"\n",(0,a.jsxs)(e.p,{children:["You can set the property ",(0,a.jsx)(e.code,{children:"active"})," to a boolean value as in the example above.\nIt will cause the navigation item to render in active style and implicitly\nset ",(0,a.jsx)(e.code,{children:'aria-current="page"'})," to the list element."]}),"\n",(0,a.jsxs)(e.p,{children:["The component will also check for child element set to ",(0,a.jsx)(e.code,{children:'aria-current="page"'}),".\nSuch elements are also displayed in active state.\nThis makes the component ",(0,a.jsx)(e.a,{href:"https://angular.dev/best-practices/a11y#active-links-identification",children:"integration with the Angular Router"})," way more elegant\ncompared to the first variant."]}),"\n",(0,a.jsxs)(e.p,{children:["The component first needs to import the ",(0,a.jsx)(e.code,{children:"RouterLink"})," and ",(0,a.jsx)(e.code,{children:"RouterLinkActive"})," directives."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { RouterLink, RouterLinkActive } from '@angular/router';\nimport { DBMainNavigation } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [\n	// ...\n	RouterLink,\n	RouterLinkActive,\n	DBMainNavigation\n  ],\n  // ...\n})\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Now you can use the Angular Routers ",(0,a.jsx)(e.code,{children:"routerLink"})," directive to define your targets.\nThe active style is automatically set once an item receives the ",(0,a.jsx)(e.code,{children:'aria-current="page"'})," attribute."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-main-navigation>\n	<db-navigation-item>\n		<ng-container *dbNavigationContent>\n			<a\n				routerLink="/"\n				ariaCurrentWhenActive="page"\n				[routerLinkActiveOptions]="{ exact: true }"\n			>\n				Home\n			</a>\n		</ng-container>\n	</db-navigation-item>\n	<db-navigation-item>\n		<ng-container *dbNavigationContent> Demo Pages </ng-container>\n		<ng-container sub-navigation>\n			<db-navigation-item>\n				<ng-container *dbNavigationContent>\n					<a routerLink="/demo/1" ariaCurrentWhenActive="page">\n						Demo Page 1\n					</a>\n				</ng-container>\n				<ng-container *dbNavigationContent>\n					<a routerLink="/demo/2" ariaCurrentWhenActive="page">\n						Demo Page 2\n					</a>\n				</ng-container>\n			</db-navigation-item>\n		</ng-container>\n	</db-navigation-item>\n</db-main-navigation>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},47890:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),i=t(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<nav class="db-navigation">\n		<menu>\n			<li class="db-navigation-item" aria-current="page">\n				<button\n					class="db-navigation-item-expand-button"\n					aria-haspopup="true"\n				>\n					Navi-Item 1\n				</button>\n				<menu class="db-sub-navigation">\n					<li class="db-navigation-item" aria-current="page">\n						<button\n							class="db-navigation-item-expand-button"\n							aria-haspopup="true"\n						>\n							Sub-Navi-Item 1\n						</button>\n						<menu class="db-sub-navigation">\n							<li class="db-navigation-item" aria-current="page">\n								<a href="#">Sub-Sub-Navi-Item 1</a>\n							</li>\n\n							<li class="db-navigation-item">\n								<a href="#">Sub-Sub-Navi-Item 2</a>\n							</li>\n						</menu>\n					</li>\n\n					<li class="db-navigation-item">\n						<a href="#">Sub-Navi-Item 2</a>\n					</li>\n				</menu>\n			</li>\n\n			<li class="db-navigation-item" data-icon="user">\n				<a href="#">Navi-Item 2</a>\n			</li>\n\n			<li class="db-navigation-item" aria-disabled="true">\n				<a href="#">Navi-Item 3</a>\n			</li>\n		</menu>\n	</nav>\n</body>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},83568:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),i=t(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { DBNavigation, DBNavigationItem } from "@db-ui/react-components";\n\nconst App = () => (\n	<DBNavigation>\n		<DBNavigationItem\n			active\n			slotSubNavigation={\n				<>\n					<DBNavigationItem\n						active\n						slotSubNavigation={\n							<>\n								<DBNavigationItem active>\n									<a href="#">Sub-Sub-Navi-Item 1</a>\n								</DBNavigationItem>\n								<DBNavigationItem>\n									<a href="#">Sub-Sub-Navi-Item 2</a>\n								</DBNavigationItem>\n							</>\n						}\n					>\n						Sub-Navi-Item 1\n					</DBNavigationItem>\n					<DBNavigationItem>\n						<a href="#">Sub-Navi-Item 2</a>\n					</DBNavigationItem>\n				</>\n			}\n		>\n			Navi-Item 1\n		</DBNavigationItem>\n		<DBNavigationItem icon="user">\n			<a href="#">Navi-Item 2</a>\n		</DBNavigationItem>\n		<DBNavigationItem disabled>\n			<a href="#">Navi-Item 3</a>\n		</DBNavigationItem>\n	</DBNavigation>\n);\n\nexport default App;\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},91694:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),i=t(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBNavigation, DBNavigationItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBNavigation>\n		<DBNavigationItem :active="true">\n			Navi-Item 1\n			<template v-slot:subnavigation>\n				<DBNavigationItem :active="true">\n					Sub-Navi-Item 1\n\n					<template v-slot:subnavigation>\n						<DBNavigationItem :active="true">\n							<a href="#">Sub-Sub-Navi-Item 1</a>\n						</DBNavigationItem>\n						<DBNavigationItem>\n							<a href="#">Sub-Sub-Navi-Item 2</a>\n						</DBNavigationItem>\n					</template>\n				</DBNavigationItem>\n				<DBNavigationItem>\n					<a href="#">Sub-Navi-Item 2</a>\n				</DBNavigationItem>\n			</template>\n		</DBNavigationItem>\n		<DBNavigationItem icon="user">\n			<a href="#">Navi-Item 2</a>\n		</DBNavigationItem>\n		<DBNavigationItem :disabled="true">\n			<a href="#">Navi-Item 3</a>\n		</DBNavigationItem>\n	</DBNavigation>\n</template>\n'})}),"\n",(0,a.jsx)(e.h3,{id:"vue-router-and-active-state-handling",children:"Vue Router and active state handling"}),"\n",(0,a.jsxs)(e.p,{children:["You can set the property ",(0,a.jsx)(e.code,{children:"active"})," to a boolean value as in the example above.\nIt will cause the navigation item to render in active style and implicitly\nset ",(0,a.jsx)(e.code,{children:'aria-current="page"'})," to the list element."]}),"\n",(0,a.jsxs)(e.p,{children:["The component will also check for child element set to ",(0,a.jsx)(e.code,{children:'aria-current="page"'}),".\nSuch elements are also displayed in active state.\nThis makes the component ",(0,a.jsx)(e.a,{href:"https://router.vuejs.org/api/interfaces/RouterLinkProps.html#ariaCurrentValue",children:"integration with the Vue Router"})," way more elegant\ncompared to the first variant."]}),"\n",(0,a.jsxs)(e.p,{children:["Now you can use Vue Routers ",(0,a.jsx)(e.code,{children:"RouterLink"})," component to define your targets.\nThe active style is automatically set once an item receives the ",(0,a.jsx)(e.code,{children:'aria-current="page"'})," attribute."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBMainNavigation, DBNavigationItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBMainNavigation>\n		<DBNavigationItem>\n			<RouterLink to="/" ariaCurrentValue="page">Home</RouterLink>\n		</DBNavigationItem>\n		<DBNavigationItem>\n			<template> Demo Pages </template>\n			<template #subnavigation>\n				<DBNavigationItem>\n					<RouterLink to="/demo/1" ariaCurrentValue="page">\n						Demo Page 1\n					</RouterLink>\n\n					<RouterLink to="/demo/2" ariaCurrentValue="page">\n						Demo Page 2\n					</RouterLink>\n				</DBNavigationItem>\n			</template>\n		</DBNavigationItem>\n	</DBMainNavigation>\n</template>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},35014:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var a=t(52322),i=t(45392),r=t(55216),o=t(47890),c=t(86085),s=t(83568),l=t(91694);let u=n=>{let{children:e}=n;return(0,a.jsx)(r.Z,{children:e})};function d(n){let e={h1:"h1",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-to-use-dbnavigation",children:"How to use DBNavigation"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function g(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(u,{...n,children:(0,a.jsx)(d,{...n})})}},10326:function(n,e,t){"use strict";var a=t(52322),i=t(2784),r=t(43251);let o=(0,i.forwardRef)(function(n,e){let t=e||(0,i.useRef)(e);return(0,a.jsx)("button",{ref:t,...(0,r.mS)(n,[]),id:n.id,className:(0,r.yI)("db-button",n.className),type:n.type,disabled:n.disabled,"aria-label":n.label,"data-icon":n.icon,"data-size":n.size,"data-state":n.state,"data-width":n.width,"data-variant":n.variant,"data-no-text":n.noText,name:n.name,value:n.value,"aria-describedby":n.describedbyid,"aria-expanded":n.ariaexpanded,"aria-pressed":n.ariapressed,onClick:e=>{n.onClick&&n.onClick(e)},children:n.children})});e.Z=o},55482:function(n,e,t){"use strict";var a,i,r,o,c,s,l;t.d(e,{IY:function(){return u},YP:function(){return d},ce:function(){return g}});let u="OVERWRITE_DEFAULT_ID",d="Back",g="Close Button";(c=a||(a={})).FUNCTIONAL="functional",c.REGULAR="regular",c.EXPRESSIVE="expressive",Object.entries(a).map(n=>{let[,e]=n;return e}),(i||(i={})).PRIMARY="primary",(s=r||(r={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",s.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",s.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",s.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",s.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",s.BRAND_BG_LEVEL_1="brand-bg-lvl-1",s.BRAND_BG_LEVEL_2="brand-bg-lvl-2",s.BRAND_BG_LEVEL_3="brand-bg-lvl-3",s.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",s.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",s.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",s.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",s.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",s.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",s.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",s.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",s.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",s.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",s.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",s.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",s.WARNING_BG_LEVEL_1="warning-bg-lvl-1",s.WARNING_BG_LEVEL_2="warning-bg-lvl-2",s.WARNING_BG_LEVEL_3="warning-bg-lvl-3",s.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",s.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",s.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",s.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",s.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",s.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",s.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(r).map(n=>{let[,e]=n;return e}),Object.entries(i).map(n=>{let[,e]=n;return e}),(l=o||(o={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(o).map(n=>{let[,e]=n;return e})},43251:function(n,e,t){"use strict";t.d(e,{MN:function(){return l},Vj:function(){return a},cd:function(){return s},mS:function(){return c},yI:function(){return r},yn:function(){return i}});let a=()=>{var n,e;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(n,e)=>{Object.values(n.children).forEach(n=>{n.setAttribute(e.key,e.value),n.children.length>0&&i(n,e)})},r=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];let a="";return e.forEach((n,e)=>{if(n){if("string"==typeof n)a+="".concat(n," ");else for(let e in n)n[e]&&(a+="".concat(e," "))}}),a.trim()},o=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],c=(n,e)=>Object.keys(n).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("item")||n.startsWith("on")||o.includes(n))&&!e.includes(n)).reduce((e,t)=>(e[t]=n[t],e),{}),s=n=>{let{left:e,right:t}=n.getBoundingClientRect(),{innerWidth:a}=window;return e>=0&&t<=a},l=n=>{let{top:e,bottom:t}=n.getBoundingClientRect(),{innerHeight:a}=window;return e>=0&&t<=a}}},function(n){n.O(0,[49710,55216,92888,49774,40179],function(){return n(n.s=80043)}),_N_E=n.O()}]);