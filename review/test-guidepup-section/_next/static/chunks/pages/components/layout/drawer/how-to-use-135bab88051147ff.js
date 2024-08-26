(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6691],{45108:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/drawer/how-to-use",function(){return t(40015)}])},91025:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(52322),a=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,r.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,r.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,r.jsxs)(n.p,{children:["If you use ",(0,r.jsx)(n.code,{children:"width !== full"})," you are able to overwrite the ",(0,r.jsx)(n.code,{children:"max-width"})," with ",(0,r.jsx)(n.code,{children:"--db-drawer-max-width:"})," CSS variable."]}),"\n",(0,r.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBDrawer } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBDrawer],\n  // ...\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-drawer [open]="openDrawer" (onClose)="toggleDrawer(false)">\n	My Drawer content\n</db-drawer>\n<db-button (click)="toggleDrawer(true)"> Open me </db-button>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nexport class AppComponent {\n	openDrawer: boolean = false;\n	toggleDrawer = (open: boolean) => {\n		this.openDrawer = open;\n	};\n}\n"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},90529:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(52322),a=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,r.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,r.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,r.jsxs)(n.p,{children:["If you use ",(0,r.jsx)(n.code,{children:"width !== full"})," you are able to overwrite the ",(0,r.jsx)(n.code,{children:"max-width"})," with ",(0,r.jsx)(n.code,{children:"--db-drawer-max-width:"})," CSS variable."]}),"\n",(0,r.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<dialog class="db-drawer" data-backdrop="true" open>\n		<article class="db-drawer-container">\n			<header class="db-drawer-header">\n				<button\n					class="db-button button-close-drawer is-icon-text-replace"\n					data-icon="cross"\n					data-variant="ghost"\n				>\n					Close Button\n				</button>\n			</header>\n			<div class="db-drawer-content">My Drawer content</div>\n		</article>\n	</dialog>\n</body>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},95415:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(52322),a=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,r.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,r.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,r.jsxs)(n.p,{children:["If you use ",(0,r.jsx)(n.code,{children:"width !== full"})," you are able to overwrite the ",(0,r.jsx)(n.code,{children:"max-width"})," with ",(0,r.jsx)(n.code,{children:"--db-drawer-max-width:"})," CSS variable."]}),"\n",(0,r.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBButton, DBDrawer } from "@db-ui/react-components";\n\nconst App = () => {\n	const [open, setOpen] = useState<boolean>(false);\n	return (\n		<div>\n			<DBDrawer\n				open={open}\n				onClose={() => {\n					setOpen(false);\n				}}\n			>\n				My Drawer content\n			</DBDrawer>\n			<DBButton\n				onClick={() => {\n					setOpen(true);\n				}}\n			>\n				Open Me\n			</DBButton>\n		</div>\n	);\n};\n\nexport default App;\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},70461:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(52322),a=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,r.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,r.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,r.jsxs)(n.p,{children:["If you use ",(0,r.jsx)(n.code,{children:"width !== full"})," you are able to overwrite the ",(0,r.jsx)(n.code,{children:"max-width"})," with ",(0,r.jsx)(n.code,{children:"--db-drawer-max-width:"})," CSS variable."]}),"\n",(0,r.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script setup lang="ts">\nimport { ref } from "vue";\nimport { DBDrawer } from "@db-ui/v-components";\n\nconst openDrawer = ref<boolean>(false);\n\nconst toggleDrawer = (open: boolean) => {\n	openDrawer.value = open;\n};\n</script>\n\n<template>\n	<DBDrawer :open="openDrawer" @close="toggleDrawer(false)">\n		My Drawer content\n	</DBDrawer>\n	<DBButton @click="toggleDrawer(true)">Open me</DBButton>\n</template>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},40015:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(52322),a=t(45392),o=t(53148),s=t(90529),c=t(91025),i=t(95415),l=t(70461);let d=e=>{let{children:n}=e;return(0,r.jsx)(o.Z,{children:n})};function u(e){let n={h1:"h1",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"how-to-use-dbdrawer",children:"How to use DBDrawer"}),"\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(l.default,{})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...e,children:(0,r.jsx)(u,{...e})})}},53148:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(52322),a=t(5632),o=t(25237),s=t.n(o),c=t(2784),i=t(61183),l=t(39097),d=t.n(l),u=t(43251);let h=(0,c.forwardRef)(function(e,n){let t=n||(0,c.useRef)(n),[a,o]=(0,c.useState)(()=>!1),s=(0,c.useRef)(!1);return s.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),s.current=!0),(0,c.useEffect)(()=>{o(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{o(!0)}):o(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:t,...(0,u.mS)(e,[]),id:e.id,className:(0,u.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":a,children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var p=t(82664),m=t(98310),x=t(10326),f=t(55327),j=t(74819),g=t(70741),w=t(92811),v=t(33759),b=t(39120);let y=(e,n)=>{var t;return"/"===n.path?"/"===e:e.includes("".concat(n.path,"/"))||e===n.path||!!(null===(t=n.subNavigation)||void 0===t?void 0:t.find(n=>e.includes("".concat(n.path,"/"))))},D=e=>{var n;let{navItem:t}=e,o=y((0,a.useRouter)().pathname,t);return(0,r.jsx)(b.Z,{active:o,backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,r.jsx)(D,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,r.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"",children:t.label},"router-path-".concat(t.path))})};var k=()=>(0,r.jsx)(v.Z,{children:w.Z6.map(e=>(0,r.jsx)(D,{navItem:e},"router-path-".concat(e.path)))}),N=t(35368),S=t(79081);let B=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},Z="db-ui",_="mono";var F=()=>{let e=(0,a.useRouter)(),[n,t]=(0,c.useState)(),[o,s]=(0,c.useState)(),i=n=>{let t=e.basePath,r=n.find(e=>t.includes(e));r&&s(r)},l=(e,n)=>{let r=[],a=[],o=[],s=[],c=[],i=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?o.push(e):e.startsWith("refactor")?s.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?i.push(e):r.push(e);t({others:r,features:a,docs:i,refactors:s,issues:c,bugfixes:o,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await B("https://api.github.com/repos/".concat(Z,"/").concat(_,"/branches")),n=(await B("https://api.github.com/repos/".concat(Z,"/").concat(_,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));i(t),i(n),l(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,r=3===n.split(".").length&&n.startsWith("v");window.location.replace((0,N.sanitize)("https://".concat(Z,".github.io/").concat(_).concat(r?"/version":"/review","/").concat(n).concat(t)))};return n?(0,r.jsx)(S.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:o,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,r.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,r.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null};let q=e=>{var n,t;let{children:o,noNavigation:s}=e,[l,u]=(0,c.useState)(!1),[v,b]=(0,c.useState)(!1),[y,D]=(0,c.useState)(!1),[N,S]=(0,c.useState)(!1),[B,Z]=(0,c.useState)(),[_,q]=(0,c.useState)(),[C,E]=(0,c.useState)(),[I,O]=(0,c.useState)(),A=(0,a.useRouter)();return(0,c.useEffect)(()=>{i.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(A.query&&(A.query.fullscreen&&u("true"===A.query.fullscreen),A.query.page&&u(!0),A.query.noh1&&b("true"===A.query.noh1),A.query.properties&&D("true"===A.query.properties),A.query.current)){let n=Array.isArray(A.query.current)?A.query.current[0]:A.query.current;if(B!==n){var e;Z(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=A.asPath.split("?")[0],{previous:t,next:r}=(0,w.vn)(n);q(t),E(r),O((0,w.kn)(n))},[A]),(0,r.jsxs)(r.Fragment,{children:[A.isReady&&l&&(0,r.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(y?"is-properties":""),children:o}),A.isReady&&!l&&(0,r.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(p.Z,{drawerOpen:N,onToggle:S,brand:(0,r.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,r.jsx)(x.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(F,{}),children:(0,r.jsx)(k,{})}),children:[I&&I.length>1&&(0,r.jsx)(f.Z,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==I?void 0:I.map(e=>{var n;return(0,r.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,r.jsx)(j.Z,{icon:"chevron_right"}),(0,r.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(f.Z,{spacing:"none",width:"large",children:o}),!s&&(null!=_?_:C)&&(0,r.jsxs)(f.Z,{width:"large",spacing:"small",className:"link-containers",children:[_&&(0,r.jsx)(d(),{className:"previous-link-container",href:null!==(n=_.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(g.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:_.label})]})}),C&&(0,r.jsx)(d(),{className:"next-link-container",href:null!==(t=C.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(g.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:C.label})]})})]})]})]})};var C=s()(async()=>q,{ssr:!1})}},function(e){e.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return e(e.s=45108)}),_N_E=e.O()}]);