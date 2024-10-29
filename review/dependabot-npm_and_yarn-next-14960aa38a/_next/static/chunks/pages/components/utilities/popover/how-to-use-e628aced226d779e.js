(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3053],{92092:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/utilities/popover/how-to-use",function(){return t(43103)}])},42661:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(52322),r=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBPopover } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBPopover],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n<db-popover>\n	<db-button trigger> Hover on me to open Popover </db-button>\n	Use any html code here like e.g. a <code>button</code>:\n	<button type="button">Test</button>\n</db-popover>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},67153:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(52322),r=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-popover">\n		<button aria-haspopup="true" class="db-button" type="button">\n			Hover on me to open Popover\n		</button>\n		<article class="db-popover-content">\n			Use any html code here like e.g. a <code>button</code>:\n			<button type="button">Test</button>\n		</article>\n	</div>\n</body>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},54096:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(52322),r=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport { DBPopover, DBButton } from "@db-ui/react-components";\n\nconst App = () => (\n	<DBPopover trigger={<DBButton>Hover on me to open Popover</DBButton>}>\n		Use any html code here like e.g. a <code>button</code>:\n		<button type="button">Test</button>\n	</DBPopover>\n);\n\nexport default App;\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},73466:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(52322),r=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBPopover, DBButton } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBPopover>\n		<template v-slot:trigger>\n			<DBButton> Hover on me to open Popover </DBButton>\n		</template>\n		Use any html code here like e.g. a <code>button</code>:\n		<button type="button">Test</button>\n	</DBPopover>\n</template>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},43103:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>h});var a=t(52322),r=t(45392),o=t(50115),s=t(67153),c=t(42661),i=t(54096),l=t(73466);let d=e=>{let{children:n}=e;return(0,a.jsx)(o.Z,{children:n})};function u(e){let n={h1:"h1",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-use-dbpopover",children:"How to use DBPopover"}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...e,children:(0,a.jsx)(u,{...e})})}},50115:(e,n,t)=>{"use strict";t.d(n,{Z:()=>S});var a=t(52322),r=t(5632),o=t(25237),s=t.n(o),c=t(2784),i=t(61183),l=t(39097),d=t.n(l),u=t(98072);let h=(0,c.forwardRef)(function(e,n){let t=n||(0,c.useRef)(n),[r,o]=(0,c.useState)(()=>!1),s=(0,c.useRef)(!1);return s.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),s.current=!0),(0,c.useEffect)(()=>{o(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{o(!0)}):o(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,u.mS)(e,[]),id:e.id,className:(0,u.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":r,children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=t(68908),m=t(48483),x=t(90434),g=t(97689),v=t(85803),j=t(72288),f=t(76460),b=t(40245),w=t(29469);let y=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:a}=t.query,r=Array.isArray(a)?a:[a];return n.path==="/components/".concat(r.join("/"))},k=e=>{var n;let{navItem:t}=e,o=(0,r.useRouter)(),s=y(o.pathname,t,o);return(0,a.jsx)(w.Z,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,a.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":s?"page":void 0,children:t.label},"router-path-".concat(t.path))})},N=()=>(0,a.jsx)(b.Z,{children:f.Z6.map(e=>(0,a.jsx)(k,{navItem:e},"router-path-".concat(e.path)))});var B=t(35368),P=t(9842);let Z=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},D="db-ui",_="mono",q=()=>{let e=(0,r.useRouter)(),[n,t]=(0,c.useState)(),[o,s]=(0,c.useState)(),i=n=>{let t=e.basePath,a=n.find(e=>t.includes(e));a&&s(a)},l=(e,n)=>{let a=[],r=[],o=[],s=[],c=[],i=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?o.push(e):e.startsWith("refactor")?s.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?i.push(e):a.push(e);t({others:a,features:r,docs:i,refactors:s,issues:c,bugfixes:o,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await Z("https://api.github.com/repos/".concat(D,"/").concat(_,"/branches")),n=(await Z("https://api.github.com/repos/".concat(D,"/").concat(_,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));i(t),i(n),l(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,a=3===n.split(".").length&&n.startsWith("v");window.location.replace((0,B.sanitize)("https://".concat(D,".github.io/").concat(_).concat(a?"/version":"/review","/").concat(n).concat(t)))};return n?(0,a.jsx)(P.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:o,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,a.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},F=e=>{var n,t;let{children:o,noNavigation:s}=e,[l,u]=(0,c.useState)(!1),[b,w]=(0,c.useState)(!1),[y,k]=(0,c.useState)(!1),[B,P]=(0,c.useState)(!1),[Z,D]=(0,c.useState)(),[_,F]=(0,c.useState)(),[S,E]=(0,c.useState)(),[A,T]=(0,c.useState)(),R=(0,r.useRouter)();return(0,c.useEffect)(()=>{i.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(R.query&&(R.query.fullscreen&&u("true"===R.query.fullscreen),R.query.page&&u(!0),R.query.noh1&&w("true"===R.query.noh1),R.query.properties&&k("true"===R.query.properties),R.query.current)){let n=Array.isArray(R.query.current)?R.query.current[0]:R.query.current;if(Z!==n){var e;D(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=R.asPath.split("?")[0],{previous:t,next:a}=(0,f.vn)(n);F(t),E(a),T((0,f.kn)(n))},[R]),(0,a.jsxs)(a.Fragment,{children:[R.isReady&&l&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(y?"is-properties":""),children:o}),R.isReady&&!l&&(0,a.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.Z,{drawerOpen:B,onToggle:P,brand:(0,a.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,a.jsx)(x.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(q,{}),children:(0,a.jsx)(N,{})}),children:[A&&A.length>1&&(0,a.jsx)(g.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==A?void 0:A.map(e=>{var n;return(0,a.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,a.jsx)(v.Z,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(g.Z,{spacing:"none",width:"large",children:o}),!s&&(null!=_?_:S)&&(0,a.jsxs)(g.Z,{width:"large",spacing:"small",className:"link-containers",children:[_&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(n=_.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:_.label})]})}),S&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=S.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:S.label})]})})]})]})]})},S=s()(async()=>F,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3430,1954,4540,6460,2888,9774,179],()=>n(92092)),_N_E=e.O()}]);