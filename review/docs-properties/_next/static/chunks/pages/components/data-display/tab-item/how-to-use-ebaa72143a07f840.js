(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{29240:(e,a,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tab-item/how-to-use",function(){return n(65560)}])},10498:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>l});var t=n(52322),s=n(45392);function r(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"angular",children:"Angular"}),"\n",(0,t.jsxs)(a.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(a.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,t.jsx)(a.h3,{id:"load-component",children:"Load component"}),"\n",(0,t.jsx)(a.p,{children:"You can't use the component standalone!"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-ts",children:"//app.module.ts\nimport { DBTabItem, DBTabList, DBTabPanel, DBTabs } from '@db-ui/ngx-components';\n\n@NgModule({\n  ...\n  standalone: true,\n  imports: [..., DBTabItem,DBTabList,DBTabPanel,DBTabs],\n  ...\n})\n\n"})}),"\n",(0,t.jsx)(a.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-html",children:"<!-- app.component.html -->\n<db-tabs>\n	<db-tab-list>\n		<db-tab-item>Tab 1</db-tab-item>\n		<db-tab-item>Tab 2</db-tab-item>\n		<db-tab-item>Tab 3</db-tab-item>\n	</db-tab-list>\n	<db-tab-panel>Tab Panel 1</db-tab-panel>\n	<db-tab-panel>Tab Panel 2</db-tab-panel>\n	<db-tab-panel>Tab Panel 3</db-tab-panel>\n</db-tabs>\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},75521:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>l});var t=n(52322),s=n(45392);function r(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"html",children:"HTML"}),"\n",(0,t.jsxs)(a.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(a.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,t.jsx)(a.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-tabs">\n		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">\n			<div class="db-tab-list-scroll-container">\n				<label\n					role="tab"\n					for="my-tabs-tab-0"\n					class="db-tab-item"\n					data-width="auto"\n					data-alignment="start"\n					aria-controls="my-tabs-tab-panel-0"\n					><input\n						type="radio"\n						id="my-tabs-tab-0"\n						name="my-tabs"\n					/>Test 1</label\n				><label\n					role="tab"\n					for="my-tabs-tab-1"\n					class="db-tab-item"\n					data-width="auto"\n					data-alignment="start"\n					aria-controls="my-tabs-tab-panel-1"\n					><input\n						type="radio"\n						id="my-tabs-tab-1"\n						name="my-tabs"\n					/>Test 2</label\n				><label\n					role="tab"\n					for="my-tabs-tab-2"\n					class="db-tab-item"\n					data-width="auto"\n					data-alignment="start"\n					aria-controls="my-tabs-tab-panel-2"\n					><input\n						type="radio"\n						id="my-tabs-tab-2"\n						name="my-tabs"\n					/>Test 3</label\n				>\n			</div>\n		</div>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-0"\n			aria-labelledby="my-tabs-tab-0"\n		>\n			Tab Panel 1\n		</article>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-1"\n			aria-labelledby="my-tabs-tab-1"\n		>\n			Tab Panel 2\n		</article>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-2"\n			aria-labelledby="my-tabs-tab-2"\n		>\n			Tab Panel 3\n		</article>\n	</div>\n</body>\n'})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},71302:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>l});var t=n(52322),s=n(45392);function r(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"react",children:"React"}),"\n",(0,t.jsxs)(a.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(a.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,t.jsx)(a.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'// App.tsx\nimport {\n	DBTabItem,\n	DBTabList,\n	DBTabs,\n	DBTabPanel\n} from "@db-ui/react-components";\n\nconst App = () => (\n	<DBTabs>\n		<DBTabList>\n			<DBTabItem>Tab 1</DBTabItem>\n			<DBTabItem>Tab 2</DBTabItem>\n			<DBTabItem>Tab 3</DBTabItem>\n		</DBTabList>\n		<DBTabPanel>Tab Panel 1</DBTabPanel>\n		<DBTabPanel>Tab Panel 2</DBTabPanel>\n		<DBTabPanel>Tab Panel 3</DBTabPanel>\n	</DBTabs>\n);\n\nexport default App;\n'})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},97339:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>l});var t=n(52322),s=n(45392);function r(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"vue",children:"Vue"}),"\n",(0,t.jsxs)(a.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(a.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,t.jsx)(a.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBTabPanel, DBTabs, DBTabList, DBTabItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBTabs>\n		<DBTabList>\n			<DBTabItem>Tab 1</DBTabItem>\n			<DBTabItem>Tab 2</DBTabItem>\n			<DBTabItem>Tab 3</DBTabItem>\n		</DBTabList>\n		<DBTabPanel>Tab Panel 1</DBTabPanel>\n		<DBTabPanel>Tab Panel 2</DBTabPanel>\n		<DBTabPanel>Tab Panel 3</DBTabPanel>\n	</DBTabs>\n</template>\n'})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},65560:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>h});var t=n(52322),s=n(45392),r=n(50115),l=n(75521),i=n(10498),c=n(71302),o=n(97339);let d=e=>{let{children:a}=e;return(0,t.jsx)(r.Z,{children:a})};function b(e){let a={h1:"h1",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"how-to-use-object-object",children:"How to use [object Object]"}),"\n",(0,t.jsx)(l.default,{}),"\n",(0,t.jsx)(i.default,{}),"\n",(0,t.jsx)(c.default,{}),"\n",(0,t.jsx)(o.default,{})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(d,{...e,children:(0,t.jsx)(b,{...e})})}},50115:(e,a,n)=>{"use strict";n.d(a,{Z:()=>q});var t=n(52322),s=n(5632),r=n(25237),l=n.n(r),i=n(2784),c=n(61183),o=n(39097),d=n.n(o),b=n(98072);let h=(0,i.forwardRef)(function(e,a){let n=a||(0,i.useRef)(a),[s,r]=(0,i.useState)(()=>!1),l=(0,i.useRef)(!1);return l.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),l.current=!0),(0,i.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,t.jsxs)("div",{ref:n,...(0,b.mS)(e,[]),id:e.id,className:(0,b.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,b.X)(s),children:[(0,t.jsx)(t.Fragment,{children:e.header}),(0,t.jsx)("main",{className:"db-main",children:e.children}),(0,t.jsx)(t.Fragment,{children:e.footer})]})});var u=n(68908),p=n(48483),m=n(90434),x=n(97689),j=n(85803),g=n(72288),f=n(2700),T=n(40245),v=n(29469);let y=(e,a,n)=>{if(!n.query.slug)return a.path===n.pathname;let{slug:t}=n.query,s=Array.isArray(t)?t:[t];return a.path==="/components/".concat(s.join("/"))},B=e=>{var a;let{navItem:n}=e,r=(0,s.useRouter)(),l=y(r.pathname,n,r);return(0,t.jsx)(v.Z,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,t.jsx)(t.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:a}=e;return!0!==a}).map(e=>(0,t.jsx)(B,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,t.jsx)(d(),{href:null!==(a=n.path)&&void 0!==a?a:"","aria-current":l?"page":void 0,children:n.label},"router-path-".concat(n.path))})},D=()=>(0,t.jsx)(T.Z,{children:f.Z6.map(e=>(0,t.jsx)(B,{navItem:e},"router-path-".concat(e.path)))});var w=n(35368),P=n(9842);let k=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},N="db-ui",I="mono",Z=()=>{let e=(0,s.useRouter)(),[a,n]=(0,i.useState)(),[r,l]=(0,i.useState)(),c=a=>{let n=e.basePath,t=a.find(e=>n.includes(e));t&&l(t)},o=(e,a)=>{let t=[],s=[],r=[],l=[],i=[],c=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?l.push(e):/^\d*-/.test(e)?i.push(e):e.startsWith("docs")?c.push(e):t.push(e);n({others:t,features:s,docs:c,refactors:l,issues:i,bugfixes:r,versions:e})};(0,i.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(N,"/").concat(I,"/branches")),a=(await k("https://api.github.com/repos/".concat(N,"/").concat(I,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(n),c(a),o(a,n)})().catch(e=>{console.error(e)})},[]);let d=a=>{let n=e.asPath,t=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,w.sanitize)("https://".concat(N,".github.io/").concat(I).concat(t?"/version":"/review","/").concat(a).concat(n)))};return a?(0,t.jsx)(P.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{d(e.target.value)},children:Object.entries(a).filter(e=>{let[a,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[a,n]=e;return(0,t.jsx)("optgroup",{label:a,children:n.slice(0,15).map((e,n)=>(0,t.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(n)))},a)})}):null},_=e=>{var a,n;let{children:r,noNavigation:l}=e,[o,b]=(0,i.useState)(!1),[T,v]=(0,i.useState)(!1),[y,B]=(0,i.useState)(!1),[w,P]=(0,i.useState)(!1),[k,N]=(0,i.useState)(),[I,_]=(0,i.useState)(),[q,F]=(0,i.useState)(),[S,E]=(0,i.useState)(),L=(0,s.useRouter)();return(0,i.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,i.useEffect)(()=>{if(L.query&&(L.query.fullscreen&&b("true"===L.query.fullscreen),L.query.page&&b(!0),L.query.noh1&&v("true"===L.query.noh1),L.query.properties&&B("true"===L.query.properties),L.query.current)){let a=Array.isArray(L.query.current)?L.query.current[0]:L.query.current;if(k!==a){var e;N(a),null===(e=document.querySelector("#".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let a=L.asPath.split("?")[0],{previous:n,next:t}=(0,f.vn)(a);_(n),F(t),E((0,f.kn)(a))},[L]),(0,t.jsxs)(t.Fragment,{children:[L.isReady&&o&&(0,t.jsx)("div",{className:"".concat(T?"noh1":""," ").concat(y?"is-properties":""),children:r}),L.isReady&&!o&&(0,t.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,t.jsx)(u.Z,{drawerOpen:w,onToggle:P,brand:(0,t.jsx)(p.Z,{children:"DB-UX"}),primaryAction:(0,t.jsx)(m.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,t.jsx)(Z,{}),children:(0,t.jsx)(D,{})}),children:[S&&S.length>1&&(0,t.jsx)(x.Z,{spacing:"none",width:"large",children:(0,t.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==S?void 0:S.map(e=>{var a;return(0,t.jsxs)(i.Fragment,{children:["/"!==e.path&&(0,t.jsx)(j.Z,{icon:"chevron_right"}),(0,t.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(a=e.path)&&void 0!==a?a:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,t.jsx)(x.Z,{spacing:"none",width:"large",children:r}),!l&&(null!=I?I:q)&&(0,t.jsxs)(x.Z,{width:"large",spacing:"small",className:"link-containers",children:[I&&(0,t.jsx)(d(),{className:"previous-link-container",href:null!==(a=I.path)&&void 0!==a?a:"/",children:(0,t.jsxs)(g.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Previous"}),(0,t.jsx)("span",{"data-icon":"arrow_left",children:I.label})]})}),q&&(0,t.jsx)(d(),{className:"next-link-container",href:null!==(n=q.path)&&void 0!==n?n:"/",children:(0,t.jsxs)(g.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Next"}),(0,t.jsx)("span",{"data-icon-after":"arrow_right",children:q.label})]})})]})]})]})},q=l()(async()=>_,{ssr:!1})}},e=>{var a=a=>e(e.s=a);e.O(0,[3430,1954,4540,2700,2888,9774,179],()=>a(29240)),_N_E=e.O()}]);