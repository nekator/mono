(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4491],{13696:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tabs/how-to-use",function(){return a(66471)}])},20773:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return l}});var t=a(52322),s=a(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,t.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,t.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,t.jsx)(e.p,{children:"You can't use the component standalone!"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"//app.module.ts\nimport { DBTabItem, DBTabList, DBTabPanel, DBTabs } from '@db-ui/ngx-components';\n\n@NgModule({\n  ...\n  standalone: true,\n  imports: [..., DBTabItem,DBTabList,DBTabPanel,DBTabs],\n  ...\n})\n\n"})}),"\n",(0,t.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"<!-- app.component.html -->\n<db-tabs>\n	<db-tab-list>\n		<db-tab-item>Tab 1</db-tab-item>\n		<db-tab-item>Tab 2</db-tab-item>\n		<db-tab-item>Tab 3</db-tab-item>\n	</db-tab-list>\n	<db-tab-panel>Tab Panel 1</db-tab-panel>\n	<db-tab-panel>Tab Panel 2</db-tab-panel>\n	<db-tab-panel>Tab Panel 3</db-tab-panel>\n</db-tabs>\n"})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(r,{...n})}):r(n)}},94206:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return l}});var t=a(52322),s=a(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"html",children:"HTML"}),"\n",(0,t.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,t.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-tabs">\n		<div\n			role="tablist"\n			class="db-tab-list"\n			data-alignment="start"\n			data-width="auto"\n		>\n			<ul>\n				<li role="tab" class="db-tab-item">\n					<label\n						for="my-tabs-tab-0"\n						aria-controls="my-tabs-tab-panel-0"\n					>\n						<input\n							type="radio"\n							id="my-tabs-tab-0"\n							name="my-tabs"\n						/>Test 1\n					</label>\n				</li>\n				<li role="tab" class="db-tab-item">\n					<label\n						for="my-tabs-tab-1"\n						aria-controls="my-tabs-tab-panel-1"\n					>\n						<input\n							type="radio"\n							id="my-tabs-tab-1"\n							name="my-tabs"\n						/>Test 2\n					</label>\n				</li>\n				<li role="tab" class="db-tab-item">\n					<label\n						for="my-tabs-tab-2"\n						aria-controls="my-tabs-tab-panel-2"\n					>\n						<input\n							type="radio"\n							id="my-tabs-tab-2"\n							name="my-tabs"\n						/>Test 3\n					</label>\n				</li>\n			</ul>\n		</div>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-0"\n			aria-labelledby="my-tabs-tab-0"\n		>\n			Tab Panel 1\n		</article>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-1"\n			aria-labelledby="my-tabs-tab-1"\n		>\n			Tab Panel 2\n		</article>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-2"\n			aria-labelledby="my-tabs-tab-2"\n		>\n			Tab Panel 3\n		</article>\n	</div>\n</body>\n'})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(r,{...n})}):r(n)}},2771:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return l}});var t=a(52322),s=a(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,t.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,t.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport {\n	DBTabItem,\n	DBTabList,\n	DBTabs,\n	DBTabPanel\n} from "@db-ui/react-components";\n\nconst App = () => (\n	<DBTabs>\n		<DBTabList>\n			<DBTabItem>Tab 1</DBTabItem>\n			<DBTabItem>Tab 2</DBTabItem>\n			<DBTabItem>Tab 3</DBTabItem>\n		</DBTabList>\n		<DBTabPanel>Tab Panel 1</DBTabPanel>\n		<DBTabPanel>Tab Panel 2</DBTabPanel>\n		<DBTabPanel>Tab Panel 3</DBTabPanel>\n	</DBTabs>\n);\n\nexport default App;\n'})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(r,{...n})}):r(n)}},77407:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return l}});var t=a(52322),s=a(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"vue",children:"Vue"}),"\n",(0,t.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,t.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBTabPanel, DBTabs, DBTabList, DBTabItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBTabs>\n		<DBTabList>\n			<DBTabItem>Tab 1</DBTabItem>\n			<DBTabItem>Tab 2</DBTabItem>\n			<DBTabItem>Tab 3</DBTabItem>\n		</DBTabList>\n		<DBTabPanel>Tab Panel 1</DBTabPanel>\n		<DBTabPanel>Tab Panel 2</DBTabPanel>\n		<DBTabPanel>Tab Panel 3</DBTabPanel>\n	</DBTabs>\n</template>\n'})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(r,{...n})}):r(n)}},66471:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return b}});var t=a(52322),s=a(45392),r=a(53148),l=a(94206),i=a(20773),c=a(2771),o=a(77407);let d=n=>{let{children:e}=n;return(0,t.jsx)(r.Z,{children:e})};function u(n){let e={h1:"h1",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"how-to-use-dbtabs",children:"How to use DBTabs"}),"\n",(0,t.jsx)(l.default,{}),"\n",(0,t.jsx)(i.default,{}),"\n",(0,t.jsx)(c.default,{}),"\n",(0,t.jsx)(o.default,{})]})}function b(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(d,{...n,children:(0,t.jsx)(u,{...n})})}},53148:function(n,e,a){"use strict";a.d(e,{Z:function(){return F}});var t=a(52322),s=a(5632),r=a(25237),l=a.n(r),i=a(2784),c=a(61183),o=a(39097),d=a.n(o),u=a(43251);let b=(0,i.forwardRef)(function(n,e){let a=e||(0,i.useRef)(e),[s,r]=(0,i.useState)(()=>!1),l=(0,i.useRef)(!1);return l.current||(document&&("hidden"===n.documentOverflow||"fixed"===n.variant&&"auto"!==n.documentOverflow)&&document.documentElement.classList.add("db-page-document"),l.current=!0),(0,i.useEffect)(()=>{r(!n.fadeIn),document&&n.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,t.jsxs)("div",{ref:a,...(0,u.mS)(n,[]),id:n.id,className:(0,u.yI)("db-page",n.className),"data-variant":n.variant,"data-fade-in":n.fadeIn,"data-fonts-loaded":s,children:[(0,t.jsx)(t.Fragment,{children:n.header}),(0,t.jsx)("main",{className:"db-main",children:n.children}),(0,t.jsx)(t.Fragment,{children:n.footer})]})});var h=a(82664),p=a(98310),m=a(10326),f=a(55327),x=a(74819),j=a(70741),g=a(78634),T=a(33759),v=a(39120);let y=(n,e)=>{var a;return"/"===e.path?"/"===n:n.includes("".concat(e.path,"/"))||n===e.path||!!(null===(a=e.subNavigation)||void 0===a?void 0:a.find(e=>n.includes("".concat(e.path,"/"))))},B=n=>{var e;let{navItem:a}=n,r=y((0,s.useRouter)().pathname,a);return(0,t.jsx)(v.Z,{active:r,backButtonText:"Back to ".concat(a.label),subNavigation:a.subNavigation&&(0,t.jsx)(t.Fragment,{children:null==a?void 0:a.subNavigation.filter(n=>{let{isHiddenInMenu:e}=n;return!0!==e}).map(n=>(0,t.jsx)(B,{navItem:n},"router-path-".concat(n.path)))}),children:a.subNavigation?a.label:(0,t.jsx)(d(),{href:null!==(e=a.path)&&void 0!==e?e:"",children:a.label},"router-path-".concat(a.path))})};var D=()=>(0,t.jsx)(T.Z,{children:g.Z6.map(n=>(0,t.jsx)(B,{navItem:n},"router-path-".concat(n.path)))}),w=a(35368),P=a(79081);let N=async n=>{try{let e=await fetch(n);return await e.json()}catch(n){console.error(n)}return[]},k="db-ui",I="mono";var Z=()=>{let n=(0,s.useRouter)(),[e,a]=(0,i.useState)(),[r,l]=(0,i.useState)(),c=e=>{let a=n.basePath,t=e.find(n=>a.includes(n));t&&l(t)},o=(n,e)=>{let t=[],s=[],r=[],l=[],i=[],c=[];for(let n of e)n.startsWith("feat")||n.startsWith("feature")?s.push(n):n.startsWith("fix")||n.startsWith("bugfix")?r.push(n):n.startsWith("refactor")?l.push(n):/^\d*-/.test(n)?i.push(n):n.startsWith("docs")?c.push(n):t.push(n);a({others:t,features:s,docs:c,refactors:l,issues:i,bugfixes:r,versions:n})};(0,i.useEffect)(()=>{(async()=>{let n=await N("https://api.github.com/repos/".concat(k,"/").concat(I,"/branches")),e=(await N("https://api.github.com/repos/".concat(k,"/").concat(I,"/tags"))).map(n=>n.name),a=n.map(n=>n.name).filter(n=>"gh-pages"!==n&&!n.includes("dependabot"));c(a),c(e),o(e,a)})().catch(n=>{console.error(n)})},[]);let d=e=>{let a=n.asPath,t=3===e.split(".").length&&e.startsWith("v");window.location.replace((0,w.sanitize)("https://".concat(k,".github.io/").concat(I).concat(t?"/version":"/review","/").concat(e).concat(a)))};return e?(0,t.jsx)(P.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:n=>{d(n.target.value)},children:Object.entries(e).filter(n=>{let[e,a]=n;return(null==a?void 0:a.length)>0}).map(n=>{let[e,a]=n;return(0,t.jsx)("optgroup",{label:e,children:a.slice(0,15).map((n,a)=>(0,t.jsx)("option",{value:n,children:n},"".concat(e,"-").concat(n,"-").concat(a)))},e)})}):null};let _=n=>{var e,a;let{children:r,noNavigation:l}=n,[o,u]=(0,i.useState)(!1),[T,v]=(0,i.useState)(!1),[y,B]=(0,i.useState)(!1),[w,P]=(0,i.useState)(!1),[N,k]=(0,i.useState)(),[I,_]=(0,i.useState)(),[F,S]=(0,i.useState)(),[q,E]=(0,i.useState)(),L=(0,s.useRouter)();return(0,i.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,i.useEffect)(()=>{if(L.query&&(L.query.fullscreen&&u("true"===L.query.fullscreen),L.query.page&&u(!0),L.query.noh1&&v("true"===L.query.noh1),L.query.properties&&B("true"===L.query.properties),L.query.current)){let e=Array.isArray(L.query.current)?L.query.current[0]:L.query.current;if(N!==e){var n;k(e),null===(n=document.querySelector("#".concat(e)))||void 0===n||n.scrollIntoView({behavior:"smooth"})}}let e=L.asPath.split("?")[0],{previous:a,next:t}=(0,g.vn)(e);_(a),S(t),E((0,g.kn)(e))},[L]),(0,t.jsxs)(t.Fragment,{children:[L.isReady&&o&&(0,t.jsx)("div",{className:"".concat(T?"noh1":""," ").concat(y?"is-properties":""),children:r}),L.isReady&&!o&&(0,t.jsxs)(b,{fadeIn:!0,variant:"fixed",header:(0,t.jsx)(h.Z,{drawerOpen:w,onToggle:P,brand:(0,t.jsx)(p.Z,{children:"DB-UX"}),primaryAction:(0,t.jsx)(m.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,t.jsx)(Z,{}),children:(0,t.jsx)(D,{})}),children:[q&&q.length>1&&(0,t.jsx)(f.Z,{spacing:"none",width:"large",children:(0,t.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==q?void 0:q.map(n=>{var e;return(0,t.jsxs)(i.Fragment,{children:["/"!==n.path&&(0,t.jsx)(x.Z,{icon:"chevron_right"}),(0,t.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===n.path?"house":"none","data-no-text":"/"===n.path,href:null!==(e=n.path)&&void 0!==e?e:"/",children:n.label})]},"breadcrumb-".concat(n.path))})})}),(0,t.jsx)(f.Z,{spacing:"none",width:"large",children:r}),!l&&(null!=I?I:F)&&(0,t.jsxs)(f.Z,{width:"large",spacing:"small",className:"link-containers",children:[I&&(0,t.jsx)(d(),{className:"previous-link-container",href:null!==(e=I.path)&&void 0!==e?e:"/",children:(0,t.jsxs)(j.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Previous"}),(0,t.jsx)("span",{"data-icon":"arrow_left",children:I.label})]})}),F&&(0,t.jsx)(d(),{className:"next-link-container",href:null!==(a=F.path)&&void 0!==a?a:"/",children:(0,t.jsxs)(j.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Next"}),(0,t.jsx)("span",{"data-icon-after":"arrow_right",children:F.label})]})})]})]})]})};var F=l()(async()=>_,{ssr:!1})}},function(n){n.O(0,[6061,1954,2182,8634,2888,9774,179],function(){return n(n.s=13696)}),_N_E=n.O()}]);