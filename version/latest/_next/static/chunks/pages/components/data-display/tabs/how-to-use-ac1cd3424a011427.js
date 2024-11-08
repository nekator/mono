(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8378],{37765:(e,n,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tabs/how-to-use",function(){return a(51756)}])},66108:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>l});var t=a(31085),s=a(71184);function r(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,t.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,t.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,t.jsx)(n.p,{children:"You can't use the component standalone!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"//app.module.ts\nimport { DBTabItem, DBTabList, DBTabPanel, DBTabs } from '@db-ui/ngx-components';\n\n@NgModule({\n  ...\n  standalone: true,\n  imports: [..., DBTabItem,DBTabList,DBTabPanel,DBTabs],\n  ...\n})\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<!-- app.component.html -->\n<db-tabs>\n	<db-tab-list>\n		<db-tab-item>Tab 1</db-tab-item>\n		<db-tab-item>Tab 2</db-tab-item>\n		<db-tab-item>Tab 3</db-tab-item>\n	</db-tab-list>\n	<db-tab-panel>Tab Panel 1</db-tab-panel>\n	<db-tab-panel>Tab Panel 2</db-tab-panel>\n	<db-tab-panel>Tab Panel 3</db-tab-panel>\n</db-tabs>\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},91321:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>l});var t=a(31085),s=a(71184);function r(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,t.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,t.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-tabs">\n		<div\n			role="tablist"\n			class="db-tab-list"\n			data-alignment="start"\n			data-width="auto"\n		>\n			<ul>\n				<li role="tab" class="db-tab-item">\n					<label\n						for="my-tabs-tab-0"\n						aria-controls="my-tabs-tab-panel-0"\n					>\n						<input\n							type="radio"\n							id="my-tabs-tab-0"\n							name="my-tabs"\n						/>Test 1\n					</label>\n				</li>\n				<li role="tab" class="db-tab-item">\n					<label\n						for="my-tabs-tab-1"\n						aria-controls="my-tabs-tab-panel-1"\n					>\n						<input\n							type="radio"\n							id="my-tabs-tab-1"\n							name="my-tabs"\n						/>Test 2\n					</label>\n				</li>\n				<li role="tab" class="db-tab-item">\n					<label\n						for="my-tabs-tab-2"\n						aria-controls="my-tabs-tab-panel-2"\n					>\n						<input\n							type="radio"\n							id="my-tabs-tab-2"\n							name="my-tabs"\n						/>Test 3\n					</label>\n				</li>\n			</ul>\n		</div>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-0"\n			aria-labelledby="my-tabs-tab-0"\n		>\n			Tab Panel 1\n		</article>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-1"\n			aria-labelledby="my-tabs-tab-1"\n		>\n			Tab Panel 2\n		</article>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-2"\n			aria-labelledby="my-tabs-tab-2"\n		>\n			Tab Panel 3\n		</article>\n	</div>\n</body>\n'})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},14861:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>l});var t=a(31085),s=a(71184);function r(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,t.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,t.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport {\n	DBTabItem,\n	DBTabList,\n	DBTabs,\n	DBTabPanel\n} from "@db-ui/react-components";\n\nconst App = () => (\n	<DBTabs>\n		<DBTabList>\n			<DBTabItem>Tab 1</DBTabItem>\n			<DBTabItem>Tab 2</DBTabItem>\n			<DBTabItem>Tab 3</DBTabItem>\n		</DBTabList>\n		<DBTabPanel>Tab Panel 1</DBTabPanel>\n		<DBTabPanel>Tab Panel 2</DBTabPanel>\n		<DBTabPanel>Tab Panel 3</DBTabPanel>\n	</DBTabs>\n);\n\nexport default App;\n'})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},52698:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>l});var t=a(31085),s=a(71184);function r(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,t.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,t.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBTabPanel, DBTabs, DBTabList, DBTabItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBTabs>\n		<DBTabList>\n			<DBTabItem>Tab 1</DBTabItem>\n			<DBTabItem>Tab 2</DBTabItem>\n			<DBTabItem>Tab 3</DBTabItem>\n		</DBTabList>\n		<DBTabPanel>Tab Panel 1</DBTabPanel>\n		<DBTabPanel>Tab Panel 2</DBTabPanel>\n		<DBTabPanel>Tab Panel 3</DBTabPanel>\n	</DBTabs>\n</template>\n'})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},51756:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>h});var t=a(31085),s=a(71184),r=a(83952),l=a(91321),i=a(66108),c=a(14861),o=a(52698);let d=e=>{let{children:n}=e;return(0,t.jsx)(r.A,{children:n})};function b(e){let n={h1:"h1",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-use-dbtabs",children:"How to use DBTabs"}),"\n",(0,t.jsx)(l.default,{}),"\n",(0,t.jsx)(i.default,{}),"\n",(0,t.jsx)(c.default,{}),"\n",(0,t.jsx)(o.default,{})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(d,{...e,children:(0,t.jsx)(b,{...e})})}},83952:(e,n,a)=>{"use strict";a.d(n,{A:()=>_});var t=a(31085),s=a(31242),r=a(83894),l=a.n(r),i=a(14041),c=a(30127),o=a(34747),d=a.n(o),b=a(5188);let h=(0,i.forwardRef)(function(e,n){let a=n||(0,i.useRef)(n),[s,r]=(0,i.useState)(()=>!1),l=(0,i.useRef)(!1);return l.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),l.current=!0),(0,i.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,t.jsxs)("div",{ref:a,...(0,b.MD)(e,[]),id:e.id,className:(0,b.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,b.EB)(s),children:[(0,t.jsx)(t.Fragment,{children:e.header}),(0,t.jsx)("main",{className:"db-main",children:e.children}),(0,t.jsx)(t.Fragment,{children:e.footer})]})});var u=a(23116),p=a(23944),m=a(95374),x=a(12764),j=a(80692),g=a(64286),f=a(42372),T=a(61338),v=a(6900);let y=(e,n,a)=>{if(!a.query.slug)return n.path===a.pathname;let{slug:t}=a.query,s=Array.isArray(t)?t:[t];return n.path==="/components/".concat(s.join("/"))},B=e=>{var n;let{navItem:a}=e,r=(0,s.useRouter)(),l=y(r.pathname,a,r);return(0,t.jsx)(v.A,{backButtonText:"Back to ".concat(a.label),subNavigation:a.subNavigation&&(0,t.jsx)(t.Fragment,{children:null==a?void 0:a.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,t.jsx)(B,{navItem:e},"router-path-".concat(e.path)))}),children:a.subNavigation?a.label:(0,t.jsx)(d(),{href:null!==(n=a.path)&&void 0!==n?n:"","aria-current":l?"page":void 0,children:a.label},"router-path-".concat(a.path))})},D=()=>(0,t.jsx)(T.A,{children:f.bw.map(e=>(0,t.jsx)(B,{navItem:e},"router-path-".concat(e.path)))});var w=a(71651),P=a(47982);let A=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},N="db-ui",k="mono",I=()=>{let e=(0,s.useRouter)(),[n,a]=(0,i.useState)(),[r,l]=(0,i.useState)(),c=n=>{let a=e.basePath,t=n.find(e=>a.includes(e));t&&l(t)},o=(e,n)=>{let t=[],s=[],r=[],l=[],i=[],c=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?l.push(e):/^\d*-/.test(e)?i.push(e):e.startsWith("docs")?c.push(e):t.push(e);a({others:t,features:s,docs:c,refactors:l,issues:i,bugfixes:r,versions:e})};(0,i.useEffect)(()=>{(async()=>{let e=await A("https://api.github.com/repos/".concat(N,"/").concat(k,"/branches")),n=(await A("https://api.github.com/repos/".concat(N,"/").concat(k,"/tags"))).map(e=>e.name),a=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(a),c(n),o(n,a)})().catch(e=>{console.error(e)})},[]);let d=n=>{let a=e.asPath,t=3===n.split(".").length&&n.startsWith("v")||"latest"===n;window.location.replace((0,w.sanitize)("https://".concat(N,".github.io/").concat(k).concat(t?"/version":"/review","/").concat(n).concat(a)))};return n?(0,t.jsx)(P.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,a]=e;return(null==a?void 0:a.length)>0}).map(e=>{let[n,a]=e;return(0,t.jsx)("optgroup",{label:n,children:a.slice(0,15).map((e,a)=>(0,t.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(a)))},n)})}):null},R=e=>{var n,a;let{children:r,noNavigation:l}=e,[o,b]=(0,i.useState)(!1),[T,v]=(0,i.useState)(!1),[y,B]=(0,i.useState)(!1),[w,P]=(0,i.useState)(!1),[A,N]=(0,i.useState)(),[k,R]=(0,i.useState)(),[_,q]=(0,i.useState)(),[F,E]=(0,i.useState)(),L=(0,s.useRouter)();return(0,i.useEffect)(()=>{c.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.A.highlightAll()},[]),(0,i.useEffect)(()=>{if(L.query&&(L.query.fullscreen&&b("true"===L.query.fullscreen),L.query.page&&b(!0),L.query.noh1&&v("true"===L.query.noh1),L.query.properties&&B("true"===L.query.properties),L.query.current)){let n=Array.isArray(L.query.current)?L.query.current[0]:L.query.current;if(A!==n){var e;N(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=L.asPath.split("?")[0],{previous:a,next:t}=(0,f.Pb)(n);R(a),q(t),E((0,f.Oj)(n))},[L]),(0,t.jsxs)(t.Fragment,{children:[L.isReady&&o&&(0,t.jsx)("div",{className:"".concat(T?"noh1":""," ").concat(y?"is-properties":""),children:r}),L.isReady&&!o&&(0,t.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,t.jsx)(u.A,{drawerOpen:w,onToggle:P,brand:(0,t.jsx)(p.A,{children:"DB-UX"}),primaryAction:(0,t.jsx)(m.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,t.jsx)(I,{}),children:(0,t.jsx)(D,{})}),children:[F&&F.length>1&&(0,t.jsx)(x.A,{spacing:"none",width:"large",children:(0,t.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==F?void 0:F.map(e=>{var n;return(0,t.jsxs)(i.Fragment,{children:["/"!==e.path&&(0,t.jsx)(j.A,{icon:"chevron_right"}),(0,t.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,t.jsx)(x.A,{spacing:"none",width:"large",children:r}),!l&&(null!=k?k:_)&&(0,t.jsxs)(x.A,{width:"large",spacing:"small",className:"link-containers",children:[k&&(0,t.jsx)(d(),{className:"previous-link-container",href:null!==(n=k.path)&&void 0!==n?n:"/",children:(0,t.jsxs)(g.A,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Previous"}),(0,t.jsx)("span",{"data-icon":"arrow_left",children:k.label})]})}),_&&(0,t.jsx)(d(),{className:"next-link-container",href:null!==(a=_.path)&&void 0!==a?a:"/",children:(0,t.jsxs)(g.A,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Next"}),(0,t.jsx)("span",{"data-icon-after":"arrow_right",children:_.label})]})})]})]})]})},_=l()(async()=>R,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>n(37765)),_N_E=e.O()}]);