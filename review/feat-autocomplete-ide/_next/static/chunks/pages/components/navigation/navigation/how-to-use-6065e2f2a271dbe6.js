(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8275],{59037:(n,e,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/navigation/how-to-use",function(){return t(28629)}])},74117:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>o});var a=t(31085),i=t(71184);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(e.h3,{id:"active-item--current-page",children:"Active item / current page"}),"\n",(0,a.jsxs)(e.p,{children:["To implicitly set a ",(0,a.jsx)(e.code,{children:"NavigationItem"})," to ",(0,a.jsx)(e.strong,{children:"active"}),", the attribute ",(0,a.jsx)(e.code,{children:'aria-current="page"'})," is applied to the contained anchor.\nSome frameworks (vue, angular) offer internal, automatic solutions for this. These should preferably be used."]}),"\n",(0,a.jsx)(e.p,{children:"This leads to:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["the ",(0,a.jsx)(e.code,{children:"NavigationItem"})," and all parent ",(0,a.jsx)(e.code,{children:"NavigationItems"})," are displayed as ",(0,a.jsx)(e.strong,{children:"active"})," via ",(0,a.jsx)(e.code,{children:"css"})," (bold, if necessary with DB pulse)"]}),"\n",(0,a.jsxs)(e.li,{children:["accessibility is granted correctly. see: ",(0,a.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current",children:"MDN aria-current"})]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["For other purposes, ",(0,a.jsx)(e.code,{children:"NavigationItems"})," can also be set to active with their prop ",(0,a.jsx)(e.code,{children:"active"}),". However, this does not guarantee correct a11y."]})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},70639:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>o});var a=t(31085),i=t(71184);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { DBNavigation } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBNavigation, DBNavigationItem, NavigationContentDirective],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-navigation>\n	<db-navigation-item>\n		<ng-container sub-navigation>\n			<db-navigation-item>\n				<ng-container *dbNavigationContent>\n					Sub-Navi-Item 1\n				</ng-container>\n				<ng-container sub-navigation>\n					<db-navigation-item>\n						<ng-container *dbNavigationContent>\n							<a href="#" aria-current="page"\n								>Sub-Sub-Navi-Item 1</a\n							>\n						</ng-container>\n					</db-navigation-item>\n					<db-navigation-item>\n						<ng-container *dbNavigationContent>\n							<a href="#">Sub-Sub-Navi-Item 2</a>\n						</ng-container>\n					</db-navigation-item>\n				</ng-container>\n			</db-navigation-item>\n			<db-navigation-item>\n				<ng-container *dbNavigationContent>\n					<a href="#">Sub-Navi-Item 2</a>\n				</ng-container>\n			</db-navigation-item>\n		</ng-container>\n		<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>\n	</db-navigation-item>\n	<db-navigation-item icon="person">\n		<ng-container *dbNavigationContent>\n			<a href="#">Navi-Item 2</a>\n		</ng-container>\n	</db-navigation-item>\n	<db-navigation-item [disabled]="true">\n		<ng-container *dbNavigationContent>\n			<a href="#">Navi-Item 3</a>\n		</ng-container>\n	</db-navigation-item>\n</db-navigation>\n'})}),"\n",(0,a.jsx)(e.h3,{id:"angular-router-and-active-state-handling",children:"Angular Router and active state handling"}),"\n",(0,a.jsxs)(e.p,{children:["We recommend using the automatic ",(0,a.jsx)(e.a,{href:"https://angular.dev/best-practices/a11y#active-links-identification",children:"integration with the Angular Router"}),". This is way more elegant than setting the aria attribute to the anchor yourself."]}),"\n",(0,a.jsxs)(e.p,{children:["The component first needs to import the ",(0,a.jsx)(e.code,{children:"RouterLink"})," and ",(0,a.jsx)(e.code,{children:"RouterLinkActive"})," directives."]}),"\n",(0,a.jsxs)(e.p,{children:["For other purposes, ",(0,a.jsx)(e.code,{children:"NavigationItems"})," themselves can also be set to active with their prop ",(0,a.jsx)(e.code,{children:'[active]="true"'}),". However, this does not guarantee correct a11y."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { RouterLink, RouterLinkActive } from '@angular/router';\nimport { DBMainNavigation } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [\n	// ...\n	RouterLink,\n	RouterLinkActive,\n	DBMainNavigation\n  ],\n  // ...\n})\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Now you can use the Angular Routers ",(0,a.jsx)(e.code,{children:"routerLink"})," directive to define your targets.\nThe active style is automatically set once an item receives the ",(0,a.jsx)(e.code,{children:'aria-current="page"'})," attribute."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-navigation>\n	<db-navigation-item>\n		<ng-container *dbNavigationContent>\n			<a\n				routerLink="/"\n				ariaCurrentWhenActive="page"\n				[routerLinkActiveOptions]="{ exact: true }"\n			>\n				Home\n			</a>\n		</ng-container>\n	</db-navigation-item>\n	<db-navigation-item>\n		<ng-container *dbNavigationContent> Demo Pages </ng-container>\n		<ng-container sub-navigation>\n			<db-navigation-item>\n				<ng-container *dbNavigationContent>\n					<a routerLink="/demo/1" ariaCurrentWhenActive="page">\n						Demo Page 1\n					</a>\n				</ng-container>\n				<ng-container *dbNavigationContent>\n					<a routerLink="/demo/2" ariaCurrentWhenActive="page">\n						Demo Page 2\n					</a>\n				</ng-container>\n			</db-navigation-item>\n		</ng-container>\n	</db-navigation-item>\n</db-navigation>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},30660:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>o});var a=t(31085),i=t(71184);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<nav class="db-navigation">\n		<menu>\n			<li class="db-navigation-item">\n				<button\n					class="db-navigation-item-expand-button"\n					aria-haspopup="true"\n				>\n					Navi-Item 1\n				</button>\n				<menu class="db-sub-navigation">\n					<li class="db-navigation-item">\n						<button\n							class="db-navigation-item-expand-button"\n							aria-haspopup="true"\n						>\n							Sub-Navi-Item 1\n						</button>\n						<menu class="db-sub-navigation">\n							<li class="db-navigation-item">\n								<a href="#" aria-current="page"\n									>Sub-Sub-Navi-Item 1</a\n								>\n							</li>\n\n							<li class="db-navigation-item">\n								<a href="#">Sub-Sub-Navi-Item 2</a>\n							</li>\n						</menu>\n					</li>\n\n					<li class="db-navigation-item">\n						<a href="#">Sub-Navi-Item 2</a>\n					</li>\n				</menu>\n			</li>\n\n			<li class="db-navigation-item" data-icon="person">\n				<a href="#">Navi-Item 2</a>\n			</li>\n\n			<li class="db-navigation-item" aria-disabled="true">\n				<a href="#">Navi-Item 3</a>\n			</li>\n		</menu>\n	</nav>\n</body>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},73602:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>o});var a=t(31085),i=t(71184);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { DBNavigation, DBNavigationItem } from "@db-ui/react-components";\n\nconst App = () => (\n	<DBNavigation>\n		<DBNavigationItem\n			slotSubNavigation={\n				<>\n					<DBNavigationItem\n						subNavigation={\n							<>\n								<DBNavigationItem>\n									<a href="#" aria-current="page">\n										Sub-Sub-Navi-Item 1\n									</a>\n								</DBNavigationItem>\n								<DBNavigationItem>\n									<a href="#">Sub-Sub-Navi-Item 2</a>\n								</DBNavigationItem>\n							</>\n						}\n					>\n						Sub-Navi-Item 1\n					</DBNavigationItem>\n					<DBNavigationItem>\n						<a href="#">Sub-Navi-Item 2</a>\n					</DBNavigationItem>\n				</>\n			}\n		>\n			Navi-Item 1\n		</DBNavigationItem>\n		<DBNavigationItem icon="person">\n			<a href="#">Navi-Item 2</a>\n		</DBNavigationItem>\n		<DBNavigationItem disabled>\n			<a href="#">Navi-Item 3</a>\n		</DBNavigationItem>\n	</DBNavigation>\n);\n\nexport default App;\n'})}),"\n",(0,a.jsx)(e.h3,{id:"active-handling",children:"Active handling"}),"\n",(0,a.jsxs)(e.p,{children:["Usually, a ",(0,a.jsx)(e.code,{children:"NavigationItem"})," is implicitly set to active by setting the attribute ",(0,a.jsx)(e.code,{children:'aria-current="page"'})," to the anchor it contains."]}),"\n",(0,a.jsxs)(e.p,{children:["For other purposes, ",(0,a.jsx)(e.code,{children:"NavigationItems"})," themselves can also be set to active with their prop ",(0,a.jsx)(e.code,{children:"active"}),". However, this does not guarantee correct a11y."]})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},1797:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>o});var a=t(31085),i=t(71184);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBNavigation, DBNavigationItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBNavigation>\n		<DBNavigationItem>\n			Navi-Item 1\n			<template v-slot:sub-navigation>\n				<DBNavigationItem>\n					Sub-Navi-Item 1\n\n					<template v-slot:sub-navigation>\n						<DBNavigationItem>\n							<a href="#" aria-current="page"\n								>Sub-Sub-Navi-Item 1</a\n							>\n						</DBNavigationItem>\n						<DBNavigationItem>\n							<a href="#">Sub-Sub-Navi-Item 2</a>\n						</DBNavigationItem>\n					</template>\n				</DBNavigationItem>\n				<DBNavigationItem>\n					<a href="#">Sub-Navi-Item 2</a>\n				</DBNavigationItem>\n			</template>\n		</DBNavigationItem>\n		<DBNavigationItem icon="person">\n			<a href="#">Navi-Item 2</a>\n		</DBNavigationItem>\n		<DBNavigationItem :disabled="true">\n			<a href="#">Navi-Item 3</a>\n		</DBNavigationItem>\n	</DBNavigation>\n</template>\n'})}),"\n",(0,a.jsx)(e.h3,{id:"vue-router-and-active-state-handling",children:"Vue Router and active state handling"}),"\n",(0,a.jsxs)(e.p,{children:["We recommend using the automatic ",(0,a.jsx)(e.a,{href:"https://router.vuejs.org/api/interfaces/RouterLinkProps.html#ariaCurrentValue",children:"integration with the Vue Router"}),". This is way more elegant than setting the aria attribute to the anchor yourself."]}),"\n",(0,a.jsxs)(e.p,{children:["You can use Vue Routers ",(0,a.jsx)(e.code,{children:"RouterLink"})," component to define your targets.\nThe active style is automatically set once an item receives the ",(0,a.jsx)(e.code,{children:'aria-current="page"'})," attribute."]}),"\n",(0,a.jsxs)(e.p,{children:["For other purposes, ",(0,a.jsx)(e.code,{children:"NavigationItems"})," themselves can also be set to active with their prop ",(0,a.jsx)(e.code,{children:':active="true"'}),". However, this does not guarantee correct a11y."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBMainNavigation, DBNavigationItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBMainNavigation>\n		<DBNavigationItem>\n			<RouterLink to="/" ariaCurrentValue="page">Home</RouterLink>\n		</DBNavigationItem>\n		<DBNavigationItem>\n			<template> Demo Pages </template>\n			<template #subnavigation>\n				<DBNavigationItem>\n					<RouterLink to="/demo/1" ariaCurrentValue="page">\n						Demo Page 1\n					</RouterLink>\n				</DBNavigationItem>\n				<DBNavigationItem>\n					<RouterLink to="/demo/2" ariaCurrentValue="page">\n						Demo Page 2\n					</RouterLink>\n				</DBNavigationItem>\n			</template>\n		</DBNavigationItem>\n	</DBMainNavigation>\n</template>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}},28629:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var a=t(31085),i=t(71184),r=t(83952),o=t(74117),s=t(30660),c=t(70639),l=t(73602),d=t(1797);let u=n=>{let{children:e}=n;return(0,a.jsx)(r.A,{children:e})};function h(n){let e={h1:"h1",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-to-use-dbnavigation",children:"How to use DBNavigation"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(d.default,{})]})}function m(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(u,{...n,children:(0,a.jsx)(h,{...n})})}},83952:(n,e,t)=>{"use strict";t.d(e,{A:()=>L});var a=t(31085),i=t(31242),r=t(83894),o=t.n(r),s=t(14041),c=t(30127),l=t(34747),d=t.n(l),u=t(5188);let h=(0,s.forwardRef)(function(n,e){let t=e||(0,s.useRef)(e),[i,r]=(0,s.useState)(()=>!1),o=(0,s.useRef)(!1);return o.current||(document&&("hidden"===n.documentOverflow||"fixed"===n.variant&&"auto"!==n.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,s.useEffect)(()=>{r(!n.fadeIn),document&&n.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,s.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,u.MD)(n,[]),id:n.id,className:(0,u.xF)("db-page",n.className),"data-variant":n.variant,"data-fade-in":n.fadeIn,"data-fonts-loaded":(0,u.EB)(i),children:[(0,a.jsx)(a.Fragment,{children:n.header}),(0,a.jsx)("main",{className:"db-main",children:n.children}),(0,a.jsx)(a.Fragment,{children:n.footer})]})});var m=t(23116),g=t(23944),p=t(95374),v=t(12764),b=t(80692),x=t(64286),j=t(42372),N=t(61338),f=t(6900);let I=(n,e,t)=>{if(!t.query.slug)return e.path===t.pathname;let{slug:a}=t.query,i=Array.isArray(a)?a:[a];return e.path==="/components/".concat(i.join("/"))},D=n=>{var e;let{navItem:t}=n,r=(0,i.useRouter)(),o=I(r.pathname,t,r);return(0,a.jsx)(f.A,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(n=>{let{isHiddenInMenu:e}=n;return!0!==e}).map(n=>(0,a.jsx)(D,{navItem:n},"router-path-".concat(n.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(e=t.path)&&void 0!==e?e:"","aria-current":o?"page":void 0,children:t.label},"router-path-".concat(t.path))})},w=()=>(0,a.jsx)(N.A,{children:j.bw.map(n=>(0,a.jsx)(D,{navItem:n},"router-path-".concat(n.path)))});var y=t(71651),B=t(47982);let A=async n=>{try{let e=await fetch(n);return await e.json()}catch(n){console.error(n)}return[]},k="db-ui",R="mono",S=()=>{let n=(0,i.useRouter)(),[e,t]=(0,s.useState)(),[r,o]=(0,s.useState)(),c=e=>{let t=n.basePath,a=e.find(n=>t.includes(n));a&&o(a)},l=(n,e)=>{let a=[],i=[],r=[],o=[],s=[],c=[];for(let n of e)n.startsWith("feat")||n.startsWith("feature")?i.push(n):n.startsWith("fix")||n.startsWith("bugfix")?r.push(n):n.startsWith("refactor")?o.push(n):/^\d*-/.test(n)?s.push(n):n.startsWith("docs")?c.push(n):a.push(n);t({others:a,features:i,docs:c,refactors:o,issues:s,bugfixes:r,versions:n})};(0,s.useEffect)(()=>{(async()=>{let n=await A("https://api.github.com/repos/".concat(k,"/").concat(R,"/branches")),e=(await A("https://api.github.com/repos/".concat(k,"/").concat(R,"/tags"))).map(n=>n.name),t=n.map(n=>n.name).filter(n=>"gh-pages"!==n&&!n.includes("dependabot"));c(t),c(e),l(e,t)})().catch(n=>{console.error(n)})},[]);let d=e=>{let t=n.asPath,a=3===e.split(".").length&&e.startsWith("v");window.location.replace((0,y.sanitize)("https://".concat(k,".github.io/").concat(R).concat(a?"/version":"/review","/").concat(e).concat(t)))};return e?(0,a.jsx)(B.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:n=>{d(n.target.value)},children:Object.entries(e).filter(n=>{let[e,t]=n;return(null==t?void 0:t.length)>0}).map(n=>{let[e,t]=n;return(0,a.jsx)("optgroup",{label:e,children:t.slice(0,15).map((n,t)=>(0,a.jsx)("option",{value:n,children:n},"".concat(e,"-").concat(n,"-").concat(t)))},e)})}):null},C=n=>{var e,t;let{children:r,noNavigation:o}=n,[l,u]=(0,s.useState)(!1),[N,f]=(0,s.useState)(!1),[I,D]=(0,s.useState)(!1),[y,B]=(0,s.useState)(!1),[A,k]=(0,s.useState)(),[R,C]=(0,s.useState)(),[L,F]=(0,s.useState)(),[_,q]=(0,s.useState)(),E=(0,i.useRouter)();return(0,s.useEffect)(()=>{c.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.A.highlightAll()},[]),(0,s.useEffect)(()=>{if(E.query&&(E.query.fullscreen&&u("true"===E.query.fullscreen),E.query.page&&u(!0),E.query.noh1&&f("true"===E.query.noh1),E.query.properties&&D("true"===E.query.properties),E.query.current)){let e=Array.isArray(E.query.current)?E.query.current[0]:E.query.current;if(A!==e){var n;k(e),null===(n=document.querySelector("#".concat(e)))||void 0===n||n.scrollIntoView({behavior:"smooth"})}}let e=E.asPath.split("?")[0],{previous:t,next:a}=(0,j.Pb)(e);C(t),F(a),q((0,j.Oj)(e))},[E]),(0,a.jsxs)(a.Fragment,{children:[E.isReady&&l&&(0,a.jsx)("div",{className:"".concat(N?"noh1":""," ").concat(I?"is-properties":""),children:r}),E.isReady&&!l&&(0,a.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(m.A,{drawerOpen:y,onToggle:B,brand:(0,a.jsx)(g.A,{children:"DB-UX"}),primaryAction:(0,a.jsx)(p.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(S,{}),children:(0,a.jsx)(w,{})}),children:[_&&_.length>1&&(0,a.jsx)(v.A,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==_?void 0:_.map(n=>{var e;return(0,a.jsxs)(s.Fragment,{children:["/"!==n.path&&(0,a.jsx)(b.A,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===n.path?"house":"none","data-no-text":"/"===n.path,href:null!==(e=n.path)&&void 0!==e?e:"/",children:n.label})]},"breadcrumb-".concat(n.path))})})}),(0,a.jsx)(v.A,{spacing:"none",width:"large",children:r}),!o&&(null!=R?R:L)&&(0,a.jsxs)(v.A,{width:"large",spacing:"small",className:"link-containers",children:[R&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(e=R.path)&&void 0!==e?e:"/",children:(0,a.jsxs)(x.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:R.label})]})}),L&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=L.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(x.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:L.label})]})})]})]})]})},L=o()(async()=>C,{ssr:!1})}},n=>{var e=e=>n(n.s=e);n.O(0,[3578,6800,8367,2372,636,6593,8792],()=>e(59037)),_N_E=n.O()}]);