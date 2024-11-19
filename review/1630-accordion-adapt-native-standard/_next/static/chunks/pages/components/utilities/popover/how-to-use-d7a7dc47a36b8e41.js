(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2448],{34449:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/utilities/popover/how-to-use",function(){return n(6150)}])},25310:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(31085),r=n(71184);function o(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// app.component.ts\nimport { DBPopover } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBPopover],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!-- app.component.html -->\n<db-popover>\n	<db-button trigger> Hover on me to open Popover </db-button>\n	Use any html code here like e.g. a <code>button</code>:\n	<button type="button">Test</button>\n</db-popover>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},75:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(31085),r=n(71184);function o(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-popover">\n		<button aria-haspopup="true" class="db-button" type="button">\n			Hover on me to open Popover\n		</button>\n		<article class="db-popover-content">\n			Use any html code here like e.g. a <code>button</code>:\n			<button type="button">Test</button>\n		</article>\n	</div>\n</body>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},44443:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(31085),r=n(71184);function o(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'// App.tsx\nimport { DBPopover, DBButton } from "@db-ui/react-components";\n\nconst App = () => (\n	<DBPopover trigger={<DBButton>Hover on me to open Popover</DBButton>}>\n		Use any html code here like e.g. a <code>button</code>:\n		<button type="button">Test</button>\n	</DBPopover>\n);\n\nexport default App;\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},90532:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var a=n(31085),r=n(71184);function o(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBPopover, DBButton } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBPopover>\n		<template v-slot:trigger>\n			<DBButton> Hover on me to open Popover </DBButton>\n		</template>\n		Use any html code here like e.g. a <code>button</code>:\n		<button type="button">Test</button>\n	</DBPopover>\n</template>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},6150:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var a=n(31085),r=n(71184),o=n(83952),s=n(75),c=n(25310),i=n(44443),l=n(90532);let d=e=>{let{children:t}=e;return(0,a.jsx)(o.A,{children:t})};function u(e){let t={h1:"h1",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-use-dbpopover",children:"How to use DBPopover"}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...e,children:(0,a.jsx)(u,{...e})})}},83952:(e,t,n)=>{"use strict";n.d(t,{A:()=>F});var a=n(31085),r=n(31242),o=n(83894),s=n.n(o),c=n(14041),i=n(30127),l=n(34747),d=n.n(l),u=n(5188);let h=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[r,o]=(0,c.useState)(()=>!1),s=(0,c.useRef)(!1);return s.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),s.current=!0),(0,c.useEffect)(()=>{o(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{o(!0)}):o(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:n,...(0,u.MD)(e,[]),id:e.id,className:(0,u.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,u.EB)(r),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=n(23116),m=n(23944),x=n(95374),g=n(12764),j=n(80692),v=n(64286),f=n(32825),b=n(61338),w=n(6900);let y=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:a}=n.query,r=Array.isArray(a)?a:[a];return t.path==="/components/".concat(r.join("/"))},k=e=>{var t;let{navItem:n}=e,o=(0,r.useRouter)(),s=y(o.pathname,n,o);return(0,a.jsx)(w.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,a.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,a.jsx)(d(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":s?"page":void 0,children:n.label},"router-path-".concat(n.path))})},A=()=>(0,a.jsx)(b.A,{children:f.bw.map(e=>(0,a.jsx)(k,{navItem:e},"router-path-".concat(e.path)))});var B=n(97519),N=n(47982);let P=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},R="db-ui",D="mono",_=()=>{let e=(0,r.useRouter)(),[t,n]=(0,c.useState)(),[o,s]=(0,c.useState)(),i=t=>{let n=e.basePath,a=t.find(e=>n.includes(e));a&&s(a)},l=(e,t)=>{let a=[],r=[],o=[],s=[],c=[],i=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?o.push(e):e.startsWith("refactor")?s.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?i.push(e):a.push(e);n({others:a,features:r,docs:i,refactors:s,issues:c,bugfixes:o,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await P("https://api.github.com/repos/".concat(R,"/").concat(D,"/branches")),t=(await P("https://api.github.com/repos/".concat(R,"/").concat(D,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.unshift("latest"),i(n),i(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let d=t=>{let n=e.asPath,a=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace(B.A.sanitize("https://".concat(R,".github.io/").concat(D).concat(a?"/version":"/review","/").concat(t).concat(n)))};return t?(0,a.jsx)(N.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:o,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,a.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,a.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},q=e=>{var t,n;let{children:o,noNavigation:s}=e,[l,u]=(0,c.useState)(!1),[b,w]=(0,c.useState)(!1),[y,k]=(0,c.useState)(!1),[B,N]=(0,c.useState)(!1),[P,R]=(0,c.useState)(),[D,q]=(0,c.useState)(),[F,E]=(0,c.useState)(),[S,T]=(0,c.useState)(),U=(0,r.useRouter)();return(0,c.useEffect)(()=>{i.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.A.highlightAll()},[]),(0,c.useEffect)(()=>{if(U.query&&(U.query.fullscreen&&u("true"===U.query.fullscreen),U.query.page&&u(!0),U.query.noh1&&w("true"===U.query.noh1),U.query.properties&&k("true"===U.query.properties),U.query.current)){let t=Array.isArray(U.query.current)?U.query.current[0]:U.query.current;if(P!==t){var e;R(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=U.asPath.split("?")[0],{previous:n,next:a}=(0,f.Pb)(t);q(n),E(a),T((0,f.Oj)(t))},[U]),(0,a.jsxs)(a.Fragment,{children:[U.isReady&&l&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(y?"is-properties":""),children:o}),U.isReady&&!l&&(0,a.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.A,{drawerOpen:B,onToggle:N,brand:(0,a.jsx)(m.A,{children:"DB-UX"}),primaryAction:(0,a.jsx)(x.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(_,{}),children:(0,a.jsx)(A,{})}),children:[S&&S.length>1&&(0,a.jsx)(g.A,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==S?void 0:S.map(e=>{var t;return(0,a.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,a.jsx)(j.A,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(g.A,{spacing:"none",width:"large",children:o}),!s&&(null!=D?D:F)&&(0,a.jsxs)(g.A,{width:"large",spacing:"small",className:"link-containers",children:[D&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(t=D.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(v.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:D.label})]})}),F&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(n=F.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(v.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:F.label})]})})]})]})]})},F=s()(async()=>q,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,8250,1446,2825,636,6593,8792],()=>t(34449)),_N_E=e.O()}]);