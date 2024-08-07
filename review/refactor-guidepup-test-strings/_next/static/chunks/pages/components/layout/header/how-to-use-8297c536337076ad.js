(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4378],{82726:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/header/how-to-use",function(){return t(70076)}])},24979:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),r=t(45392);function i(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"//app.component.ts\nimport {\n	DBHeader,\n	NavigationDirective,\n	ActionBarDirective,\n	MetaNavigationDirective\n} from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  imports: [\n	// ...,\n	DBHeader,\n    NavigationDirective, // Optional: If you want to use a Navigation\n	SecondaryActionDirective, // Optional: If you want to use ActionBar\n	MetaNavigationDirective, // Optional: If you want to use MetaNavigation\n  ],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.h4,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:"<!-- app.component.html -->\n<db-header>\n	<db-brand brand>Header</db-brand>\n</db-header>\n"})}),"\n",(0,a.jsx)(e.h4,{id:"full",children:"Full"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:'// File: app.component.ts\n\nimport { Component } from "@angular/core";\n\n@Component({\n	selector: "app-root",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	drawerOpen = false;\n\n	toggleDrawer = (open: boolean) => {\n		this.drawerOpen = open;\n	};\n}\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n<db-header [drawerOpen]="drawerOpen" (onToggle)="toggleDrawer($event)">\n	<db-brand brand>My Awesome App</db-brand>\n	<db-navigation *dbNavigation>\n		<!-- https://github.com/db-ui/mono/blob/main/packages/components/src/components/navigation/docs/Angular.md -->\n	</db-navigation>\n	<ng-container *dbMetaNavigation>\n		<DBLink href="#">Imprint</DBLink>\n		<DBLink href="#">Help</DBLink>\n	</ng-container>\n	<ng-container primary-action>\n		<DBButton icon="magnifying_glass" variant="ghost" [noText]="true">\n			Search\n		</DBButton>\n	</ng-container>\n	<ng-container *dbSecondaryAction>\n		<DBButton icon="user" variant="ghost" [noText]="true">\n			Profile\n		</DBButton>\n		<DBButton icon="alert" variant="ghost" [noText]="true">\n			Notification\n		</DBButton>\n		<DBButton icon="help" variant="ghost" [noText]="true"> Help </DBButton>\n	</ng-container>\n</db-header>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(i,{...n})}):i(n)}},46871:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),r=t(45392);function i(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<header class="db-header">\n		<dialog class="db-drawer">\n			<article\n				class="db-drawer-container db-header-drawer"\n				data-spacing="small"\n				data-rounded="true"\n			>\n				<header class="db-drawer-header">\n					<div class="db-drawer-header-text"></div>\n					<button\n						class="db-button button-close-drawer is-icon-text-replace"\n						data-icon="cross"\n						data-variant="text"\n					>\n						Close Button\n					</button>\n				</header>\n				<div class="db-drawer-content">\n					<div class="db-header-drawer-navigation">\n						<div class="db-header-navigation">\n							<nav class="db-main-navigation">\n								<menu>\n									<li\n										class="db-navigation-item"\n										data-icon="user"\n									>\n										<a href="#">Regular (Default)</a>\n									</li>\n									<li\n										class="db-navigation-item"\n										aria-disabled="true"\n									>\n										<a href="#"\n											>Regular (Default) disabled</a\n										>\n									</li>\n								</menu>\n							</nav>\n						</div>\n						<div class="db-header-meta-navigation">\n							<a\n								class="db-link"\n								href="#"\n								tabindex="0"\n								data-content="internal"\n								>Imprint</a\n							><a\n								class="db-link"\n								href="#"\n								tabindex="0"\n								data-content="internal"\n								>Help</a\n							>\n						</div>\n					</div>\n					<div class="db-header-secondary-action">\n						<button\n							class="db-button is-icon-text-replace"\n							data-icon="user"\n							data-variant="text"\n						>\n							Profile</button\n						><button\n							class="db-button is-icon-text-replace"\n							data-icon="alert"\n							data-variant="text"\n						>\n							Notification</button\n						><button\n							class="db-button is-icon-text-replace"\n							data-icon="help"\n							data-variant="text"\n						>\n							Help\n						</button>\n					</div>\n				</div>\n			</article>\n		</dialog>\n		<div class="db-header-meta-navigation">\n			<a class="db-link" href="#" tabindex="0" data-content="internal"\n				>Imprint</a\n			><a class="db-link" href="#" tabindex="0" data-content="internal"\n				>Help</a\n			>\n		</div>\n		<div class="db-header-navigation-bar">\n			<div class="db-header-brand-container">\n				<div class="db-brand">\n					<a href="/"\n						><img\n							class="db-logo"\n							src="https://db-ui.github.io/images/db_logo.svg"\n							alt=""\n							height="24"\n							width="34" /></a\n					>DBHeader\n				</div>\n			</div>\n			<div class="db-header-navigation-container">\n				<div class="db-header-navigation">\n					<nav class="db-navigation">\n						<menu>\n							<li class="db-navigation-item" data-icon="user">\n								<a href="#">Regular (Default)</a>\n							</li>\n							<li class="db-navigation-item" aria-disabled="true">\n								<a href="#">Regular (Default) disabled</a>\n							</li>\n						</menu>\n					</nav>\n				</div>\n				<div class="db-header-primary-action">\n					<button\n						class="db-button is-icon-text-replace"\n						data-icon="magnifying_glass"\n						data-variant="text"\n					>\n						Search\n					</button>\n				</div>\n			</div>\n			<div class="db-header-action-container">\n				<div class="db-header-burger-menu-container">\n					<button\n						class="db-button is-icon-text-replace"\n						data-icon="menu"\n						data-variant="text"\n					>\n						BurgerMenu\n					</button>\n				</div>\n				<div class="db-header-secondary-action">\n					<button\n						class="db-button is-icon-text-replace"\n						data-icon="user"\n						data-variant="text"\n					>\n						Profile</button\n					><button\n						class="db-button is-icon-text-replace"\n						data-icon="alert"\n						data-variant="text"\n					>\n						Notification</button\n					><button\n						class="db-button is-icon-text-replace"\n						data-icon="help"\n						data-variant="text"\n					>\n						Help\n					</button>\n				</div>\n			</div>\n		</div>\n	</header>\n</body>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(i,{...n})}):i(n)}},9628:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),r=t(45392);function i(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.h4,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { DBHeader, DBBrand } from "@db-ui/react-components";\n\nconst App = () => <DBHeader brand={<DBBrand>Header</DBBrand>} />;\n\nexport default App;\n'})}),"\n",(0,a.jsx)(e.h4,{id:"full",children:"Full"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBHeader, DBBrand, DBLink } from "@db-ui/react-components";\n\nconst [drawerOpen, setDrawerOpen] = useState<boolean>(false);\n\nconst App = () => (\n	<DBHeader\n		drawerOpen={drawerOpen}\n		onToggle={setDrawerOpen}\n		brand={<DBBrand>My Awesome App</DBBrand>}\n		metaNavigation={\n			<>\n				<DBLink href="#">Imprint</DBLink>\n				<DBLink href="#">Help</DBLink>\n			</>\n		}\n		primaryAction={\n			<DBButton icon="magnifying_glass" variant="ghost" noText>\n				Search\n			</DBButton>\n		}\n		secondaryAction={\n			<>\n				<DBButton icon="user" variant="ghost" noText>\n					Profile\n				</DBButton>\n				<DBButton icon="alert" variant="ghost" noText>\n					Notification\n				</DBButton>\n				<DBButton icon="help" variant="ghost" noText>\n					Help\n				</DBButton>\n			</>\n		}\n	>\n		<DBNavigation>\n			//\n			https://github.com/db-ui/mono/blob/main/packages/components/src/components/navigation/docs/React.md\n		</DBNavigation>\n	</DBHeader>\n);\n\nexport default App;\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(i,{...n})}):i(n)}},10449:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),r=t(45392);function i(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.h4,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBHeader, DBBrand } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBHeader>\n		<DBBrand slot="brand">Header</DBBrand>\n	</DBHeader>\n</template>\n'})}),"\n",(0,a.jsx)(e.h4,{id:"full",children:"Full"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { ref } from "vue";\nimport { DBHeader, DBBrand, DBLink, DBButton } from "@db-ui/v-components";\n\nconst drawerOpen = ref(false);\n\nconst toggleDrawer = (open: boolean) => {\n	drawerOpen.value = open;\n};\n</script>\n\n<template>\n	<DBHeader :drawerOpen="drawerOpen" :onToggle="toggleDrawer">\n		<template v-slot:brand>\n			<DBBrand> My Awesome App </DBBrand>\n		</template>\n		<template v-slot:primary-action>\n			<DBButton icon="magnifying_glass" variant="ghost" :no-text="true">\n				Search\n			</DBButton>\n		</template>\n		<template v-slot:secondary-action>\n			<DBButton icon="user" variant="ghost" :no-text="true">\n				Profile\n			</DBButton>\n			<DBButton icon="alert" variant="ghost" :no-text="true">\n				Notification\n			</DBButton>\n			<DBButton icon="help" variant="ghost" :no-text="true">\n				Help\n			</DBButton>\n		</template>\n		<template v-slot:meta-navigation>\n			<DBLink href="#">Imprint</DBLink>\n			<DBLink href="#">Help</DBLink>\n		</template>\n\n		<DBNavigation>\n			//\n			https://github.com/db-ui/mono/blob/main/packages/components/src/components/navigation/docs/Vue.md\n		</DBNavigation>\n	</DBHeader>\n</template>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(i,{...n})}):i(n)}},70076:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var a=t(52322),r=t(45392),i=t(53148),o=t(46871),s=t(24979),c=t(9628),d=t(10449);let l=n=>{let{children:e}=n;return(0,a.jsx)(i.Z,{children:e})};function u(n){let e={h1:"h1",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-to-use-dbheader",children:"How to use DBHeader"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(d.default,{})]})}function h(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(l,{...n,children:(0,a.jsx)(u,{...n})})}},53148:function(n,e,t){"use strict";t.d(e,{Z:function(){return L}});var a=t(52322),r=t(5632),i=t(25237),o=t.n(i),s=t(2784),c=t(61183),d=t(39097),l=t.n(d),u=t(43251);let h=(0,s.forwardRef)(function(n,e){let t=e||(0,s.useRef)(e),[r,i]=(0,s.useState)(()=>!1),o=(0,s.useRef)(!1);return o.current||(document&&("hidden"===n.documentOverflow||"fixed"===n.variant&&"auto"!==n.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,s.useEffect)(()=>{i(!n.fadeIn),document&&n.fadeIn?document.fonts.ready.then(()=>{i(!0)}):i(!0)},[]),(0,s.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,u.mS)(n,[]),id:n.id,className:(0,u.yI)("db-page",n.className),"data-variant":n.variant,"data-fade-in":n.fadeIn,"data-fonts-loaded":r,children:[(0,a.jsx)(a.Fragment,{children:n.header}),(0,a.jsx)("main",{className:"db-main",children:n.children}),(0,a.jsx)(a.Fragment,{children:n.footer})]})});var p=t(82664),m=t(98310),g=t(10326),v=t(55327),b=t(74819),x=t(70741),f=t(92811),B=t(33759),j=t(39120);let D=(n,e)=>{var t;return"/"===e.path?"/"===n:n.includes("".concat(e.path,"/"))||n===e.path||!!(null===(t=e.subNavigation)||void 0===t?void 0:t.find(e=>n.includes("".concat(e.path,"/"))))},w=n=>{var e;let{navItem:t}=n,i=D((0,r.useRouter)().pathname,t);return(0,a.jsx)(j.Z,{active:i,backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(n=>{let{isHiddenInMenu:e}=n;return!0!==e}).map(n=>(0,a.jsx)(w,{navItem:n},"router-path-".concat(n.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(l(),{href:null!==(e=t.path)&&void 0!==e?e:"",children:t.label},"router-path-".concat(t.path))})};var y=()=>(0,a.jsx)(B.Z,{children:f.Z6.map(n=>(0,a.jsx)(w,{navItem:n},"router-path-".concat(n.path)))}),N=t(35368),k=t(79081);let H=async n=>{try{let e=await fetch(n);return await e.json()}catch(n){console.error(n)}return[]},A="db-ui",S="mono";var O=()=>{let n=(0,r.useRouter)(),[e,t]=(0,s.useState)(),[i,o]=(0,s.useState)(),c=e=>{let t=n.basePath,a=e.find(n=>t.includes(n));a&&o(a)},d=(n,e)=>{let a=[],r=[],i=[],o=[],s=[],c=[];for(let n of e)n.startsWith("feat")||n.startsWith("feature")?r.push(n):n.startsWith("fix")||n.startsWith("bugfix")?i.push(n):n.startsWith("refactor")?o.push(n):/^\d*-/.test(n)?s.push(n):n.startsWith("docs")?c.push(n):a.push(n);t({others:a,features:r,docs:c,refactors:o,issues:s,bugfixes:i,versions:n})};(0,s.useEffect)(()=>{(async()=>{let n=await H("https://api.github.com/repos/".concat(A,"/").concat(S,"/branches")),e=(await H("https://api.github.com/repos/".concat(A,"/").concat(S,"/tags"))).map(n=>n.name),t=n.map(n=>n.name).filter(n=>"gh-pages"!==n&&!n.includes("dependabot"));c(t),c(e),d(e,t)})().catch(n=>{console.error(n)})},[]);let l=e=>{let t=n.pathname,a=3===e.split(".").length&&e.startsWith("v");window.location.replace((0,N.sanitize)("https://".concat(A,".github.io/").concat(S).concat(a?"/version":"/review","/").concat(e).concat(t)))};return e?(0,a.jsx)(k.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:i,onChange:n=>{l(n.target.value)},children:Object.entries(e).filter(n=>{let[e,t]=n;return(null==t?void 0:t.length)>0}).map(n=>{let[e,t]=n;return(0,a.jsx)("optgroup",{label:e,children:t.slice(0,15).map((n,t)=>(0,a.jsx)("option",{value:n,children:n},"".concat(e,"-").concat(n,"-").concat(t)))},e)})}):null};let _=n=>{var e,t;let{children:i,noNavigation:o}=n,[d,u]=(0,s.useState)(!1),[B,j]=(0,s.useState)(!1),[D,w]=(0,s.useState)(!1),[N,k]=(0,s.useState)(!1),[H,A]=(0,s.useState)(),[S,_]=(0,s.useState)(),[L,F]=(0,s.useState)(),[I,T]=(0,s.useState)(),Z=(0,r.useRouter)();return(0,s.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,s.useEffect)(()=>{if(Z.query&&(Z.query.fullscreen&&u("true"===Z.query.fullscreen),Z.query.page&&u(!0),Z.query.noh1&&j("true"===Z.query.noh1),Z.query.properties&&w("true"===Z.query.properties),Z.query.current)){let e=Array.isArray(Z.query.current)?Z.query.current[0]:Z.query.current;if(H!==e){var n;A(e),null===(n=document.querySelector("#".concat(e)))||void 0===n||n.scrollIntoView({behavior:"smooth"})}}let e=Z.asPath.split("?")[0],{previous:t,next:a}=(0,f.vn)(e);_(t),F(a),T((0,f.kn)(e))},[Z]),(0,a.jsxs)(a.Fragment,{children:[Z.isReady&&d&&(0,a.jsx)("div",{className:"".concat(B?"noh1":""," ").concat(D?"is-properties":""),children:i}),Z.isReady&&!d&&(0,a.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.Z,{drawerOpen:N,onToggle:k,brand:(0,a.jsx)(m.Z,{children:"DB-UI Mono"}),primaryAction:(0,a.jsx)(g.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(O,{}),children:(0,a.jsx)(y,{})}),children:[I&&I.length>1&&(0,a.jsx)(v.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==I?void 0:I.map(n=>{var e;return(0,a.jsxs)(s.Fragment,{children:["/"!==n.path&&(0,a.jsx)(b.Z,{icon:"chevron_right"}),(0,a.jsx)(l(),{className:"db-button","data-variant":"ghost","data-icon":"/"===n.path?"house":"none","data-no-text":"/"===n.path,href:null!==(e=n.path)&&void 0!==e?e:"/",children:n.label})]},"breadcrumb-".concat(n.path))})})}),(0,a.jsx)(v.Z,{spacing:"none",width:"large",children:i}),!o&&(null!=S?S:L)&&(0,a.jsxs)(v.Z,{width:"large",spacing:"small",className:"link-containers",children:[S&&(0,a.jsx)(l(),{className:"previous-link-container",href:null!==(e=S.path)&&void 0!==e?e:"/",children:(0,a.jsxs)(x.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:S.label})]})}),L&&(0,a.jsx)(l(),{className:"next-link-container",href:null!==(t=L.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(x.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:L.label})]})})]})]})]})};var L=o()(async()=>_,{ssr:!1})}},function(n){n.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return n(n.s=82726)}),_N_E=n.O()}]);