(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2167],{13227:(n,e,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/navigation-item/how-to-use",function(){return t(69987)}])},45173:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});var a=t(31085),i=t(71184);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"//app.component.ts\nimport { DBNavigationItem, NavigationContentDirective } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  imports: [..., DBNavigationItem, NavigationContentDirective],\n  // ...\n})\n\n"})}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsxs)(e.p,{children:["We try to set ",(0,a.jsx)(e.code,{children:"areaPopup"})," (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set ",(0,a.jsx)(e.code,{children:"areaPopup"})," with ",(0,a.jsx)(e.code,{children:"true/false"})," for sub-navigation or link"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<!-- Only link -->\n<db-navigation-item>\n	<ng-container *dbNavigationContent>\n		<a routerLink="mypath">NavigationItem</a>\n	</ng-container>\n</db-navigation-item>\n\n<!-- With Sub-Navigation -->\n\n<db-navigation-item>\n	<ng-container *dbNavigationContent>Navi-Item 1</ng-container>\n	<ng-container sub-navigation>\n		<db-navigation-item>\n			<ng-container *dbNavigationContent>\n				<a routerLink="mypath">Sub-Navi-Item 1</a>\n			</ng-container>\n		</db-navigation-item>\n\n		<db-navigation-item>\n			<ng-container *dbNavigationContent>\n				<a routerLink="mypath">Sub-Navi-Item 2</a>\n			</ng-container>\n		</db-navigation-item>\n	</ng-container>\n</db-navigation-item>\n'})})]})}function r(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},74658:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});var a=t(31085),i=t(71184);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsxs)(e.p,{children:["If you want to use sub-navigations for mobile you need to add a ",(0,a.jsx)(e.code,{children:"eventListner:click"})," on the ",(0,a.jsx)(e.code,{children:"db-navigation-item-expand-button"}),". This eventListener should set ",(0,a.jsx)(e.code,{children:"aria-expanded"})," to ",(0,a.jsx)(e.code,{children:"true"})," for the ",(0,a.jsx)(e.code,{children:"button"}),". This will open a static overlay for mobile/tablet devices with your ",(0,a.jsx)(e.code,{children:"db-sub-navigation"}),". For desktop devices it works by default with ",(0,a.jsx)(e.code,{children:":hover"}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<!-- Only link	-->\n	<li class="db-navigation-item">\n		<a href="mypath">NavigationItem</a>\n	</li>\n\n	<!-- With Sub-Navigation -->\n	<li class="db-navigation-item">\n		<button class="db-navigation-item-expand-button" aria-haspopup="true">\n			Navi-Item 1\n		</button>\n		<menu class="db-sub-navigation">\n			<a href="mypath">Sub-Navi-Item 1</a>\n			<a href="mypath">Sub-Navi-Item 2</a>\n		</menu>\n	</li>\n</body>\n'})})]})}function r(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},64732:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});var a=t(31085),i=t(71184);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsxs)(e.p,{children:["We try to set ",(0,a.jsx)(e.code,{children:"areaPopup"})," (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set ",(0,a.jsx)(e.code,{children:"areaPopup"})," with ",(0,a.jsx)(e.code,{children:"true/false"})," for sub-navigation or link"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { Link } from "react-router-dom";\nimport { DBNavigationItem } from "@db-ui/react-components";\n\nconst App = () => (\n	<>\n		{/* Only link */}\n		<DBNavigationItem>\n			<Link to="mypath">NavigationItem</Link>\n		</DBNavigationItem>\n\n		{/* With Sub-Navigation */}\n		<DBNavigationItem\n			slotSubNavigation={\n				<>\n					<DBNavigationItem>\n						<Link to="mypath">Sub-Navi-Item 1</Link>\n					</DBNavigationItem>\n					<DBNavigationItem>\n						<Link to="mypath">Sub-Navi-Item 2</Link>\n					</DBNavigationItem>\n				</>\n			}\n		>\n			Navi-Item 1\n		</DBNavigationItem>\n	</>\n);\n\nexport default App;\n'})})]})}function r(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},93243:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});var a=t(31085),i=t(71184);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsxs)(e.p,{children:["We try to set ",(0,a.jsx)(e.code,{children:"areaPopup"})," (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set ",(0,a.jsx)(e.code,{children:"areaPopup"})," with ",(0,a.jsx)(e.code,{children:"true/false"})," for sub-navigation or link"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBNavigationItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<!-- Only link	-->\n	<DBNavigationItem>\n		<router-link to="mypath">NavigationItem</router-link>\n	</DBNavigationItem>\n\n	<!-- With Sub-Navigation -->\n	<DBNavigationItem>\n		<template #subnavigation>\n			<DBNavigationItem>\n				<router-link to="mypath">Sub-Navi-Item 1</router-link>\n			</DBNavigationItem>\n			<DBNavigationItem>\n				<router-link to="mypath">Sub-Navi-Item 2</router-link>\n			</DBNavigationItem>\n		</template>\n		Navi-Item 1\n	</DBNavigationItem>\n</template>\n'})})]})}function r(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},69987:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>u});var a=t(31085),i=t(71184),o=t(83952),r=t(74658),s=t(45173),c=t(64732),l=t(93243);let d=n=>{let{children:e}=n;return(0,a.jsx)(o.A,{children:e})};function h(n){let e={h1:"h1",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-to-use-dbnavigationitem",children:"How to use DBNavigationItem"}),"\n",(0,a.jsx)(r.default,{}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function u(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...n,children:(0,a.jsx)(h,{...n})})}},83952:(n,e,t)=>{"use strict";t.d(e,{A:()=>F});var a=t(31085),i=t(31242),o=t(83894),r=t.n(o),s=t(14041),c=t(30127),l=t(34747),d=t.n(l),h=t(5188);let u=(0,s.forwardRef)(function(n,e){let t=e||(0,s.useRef)(e),[i,o]=(0,s.useState)(()=>!1),r=(0,s.useRef)(!1);return r.current||(document&&("hidden"===n.documentOverflow||"fixed"===n.variant&&"auto"!==n.documentOverflow)&&document.documentElement.classList.add("db-page-document"),r.current=!0),(0,s.useEffect)(()=>{o(!n.fadeIn),document&&n.fadeIn?document.fonts.ready.then(()=>{o(!0)}):o(!0)},[]),(0,s.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,h.MD)(n,[]),id:n.id,className:(0,h.xF)("db-page",n.className),"data-variant":n.variant,"data-fade-in":n.fadeIn,"data-fonts-loaded":(0,h.EB)(i),children:[(0,a.jsx)(a.Fragment,{children:n.header}),(0,a.jsx)("main",{className:"db-main",children:n.children}),(0,a.jsx)(a.Fragment,{children:n.footer})]})});var p=t(23116),m=t(23944),g=t(95374),v=t(12764),x=t(80692),j=t(64286),f=t(42372),b=t(61338),N=t(6900);let y=(n,e,t)=>{if(!t.query.slug)return e.path===t.pathname;let{slug:a}=t.query,i=Array.isArray(a)?a:[a];return e.path==="/components/".concat(i.join("/"))},w=n=>{var e;let{navItem:t}=n,o=(0,i.useRouter)(),r=y(o.pathname,t,o);return(0,a.jsx)(N.A,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(n=>{let{isHiddenInMenu:e}=n;return!0!==e}).map(n=>(0,a.jsx)(w,{navItem:n},"router-path-".concat(n.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(e=t.path)&&void 0!==e?e:"","aria-current":r?"page":void 0,children:t.label},"router-path-".concat(t.path))})},k=()=>(0,a.jsx)(b.A,{children:f.bw.map(n=>(0,a.jsx)(w,{navItem:n},"router-path-".concat(n.path)))});var I=t(97519),A=t(47982);let S=async n=>{try{let e=await fetch(n);return await e.json()}catch(n){console.error(n)}return[]},B="db-ui",D="mono",R=()=>{let n=(0,i.useRouter)(),[e,t]=(0,s.useState)(),[o,r]=(0,s.useState)(),c=e=>{let t=n.basePath,a=e.find(n=>t.includes(n));a&&r(a)},l=(n,e)=>{let a=[],i=[],o=[],r=[],s=[],c=[];for(let n of e)n.startsWith("feat")||n.startsWith("feature")?i.push(n):n.startsWith("fix")||n.startsWith("bugfix")?o.push(n):n.startsWith("refactor")?r.push(n):/^\d*-/.test(n)?s.push(n):n.startsWith("docs")?c.push(n):a.push(n);t({others:a,features:i,docs:c,refactors:r,issues:s,bugfixes:o,versions:n})};(0,s.useEffect)(()=>{(async()=>{let n=await S("https://api.github.com/repos/".concat(B,"/").concat(D,"/branches")),e=(await S("https://api.github.com/repos/".concat(B,"/").concat(D,"/tags"))).map(n=>n.name),t=n.map(n=>n.name).filter(n=>"gh-pages"!==n&&!n.includes("dependabot"));e.unshift("latest"),c(t),c(e),l(e,t)})().catch(n=>{console.error(n)})},[]);let d=e=>{let t=n.asPath,a=3===e.split(".").length&&e.startsWith("v")||"latest"===e;window.location.replace((0,I.sanitize)("https://".concat(B,".github.io/").concat(D).concat(a?"/version":"/review","/").concat(e).concat(t)))};return e?(0,a.jsx)(A.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:o,onChange:n=>{d(n.target.value)},children:Object.entries(e).filter(n=>{let[e,t]=n;return(null==t?void 0:t.length)>0}).map(n=>{let[e,t]=n;return(0,a.jsx)("optgroup",{label:e,children:t.slice(0,15).map((n,t)=>(0,a.jsx)("option",{value:n,children:n},"".concat(e,"-").concat(n,"-").concat(t)))},e)})}):null},L=n=>{var e,t;let{children:o,noNavigation:r}=n,[l,h]=(0,s.useState)(!1),[b,N]=(0,s.useState)(!1),[y,w]=(0,s.useState)(!1),[I,A]=(0,s.useState)(!1),[S,B]=(0,s.useState)(),[D,L]=(0,s.useState)(),[F,_]=(0,s.useState)(),[q,E]=(0,s.useState)(),W=(0,i.useRouter)();return(0,s.useEffect)(()=>{c.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.A.highlightAll()},[]),(0,s.useEffect)(()=>{if(W.query&&(W.query.fullscreen&&h("true"===W.query.fullscreen),W.query.page&&h(!0),W.query.noh1&&N("true"===W.query.noh1),W.query.properties&&w("true"===W.query.properties),W.query.current)){let e=Array.isArray(W.query.current)?W.query.current[0]:W.query.current;if(S!==e){var n;B(e),null===(n=document.querySelector("#".concat(e)))||void 0===n||n.scrollIntoView({behavior:"smooth"})}}let e=W.asPath.split("?")[0],{previous:t,next:a}=(0,f.Pb)(e);L(t),_(a),E((0,f.Oj)(e))},[W]),(0,a.jsxs)(a.Fragment,{children:[W.isReady&&l&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(y?"is-properties":""),children:o}),W.isReady&&!l&&(0,a.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.A,{drawerOpen:I,onToggle:A,brand:(0,a.jsx)(m.A,{children:"DB-UX"}),primaryAction:(0,a.jsx)(g.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(R,{}),children:(0,a.jsx)(k,{})}),children:[q&&q.length>1&&(0,a.jsx)(v.A,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==q?void 0:q.map(n=>{var e;return(0,a.jsxs)(s.Fragment,{children:["/"!==n.path&&(0,a.jsx)(x.A,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===n.path?"house":"none","data-no-text":"/"===n.path,href:null!==(e=n.path)&&void 0!==e?e:"/",children:n.label})]},"breadcrumb-".concat(n.path))})})}),(0,a.jsx)(v.A,{spacing:"none",width:"large",children:o}),!r&&(null!=D?D:F)&&(0,a.jsxs)(v.A,{width:"large",spacing:"small",className:"link-containers",children:[D&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(e=D.path)&&void 0!==e?e:"/",children:(0,a.jsxs)(j.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:D.label})]})}),F&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=F.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(j.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:F.label})]})})]})]})]})},F=r()(async()=>L,{ssr:!1})}},n=>{var e=e=>n(n.s=e);n.O(0,[3578,8250,8367,2372,636,6593,8792],()=>e(13227)),_N_E=n.O()}]);