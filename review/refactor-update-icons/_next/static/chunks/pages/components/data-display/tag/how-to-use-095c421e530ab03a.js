(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8292],{53913:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tag/how-to-use",function(){return t(96704)}])},11120:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBTag } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBTag],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n<db-tag><db-button>Tag as Button</db-button></db-tag>\n<db-tag>\n	<db-link> Tag as Link </db-link>\n</db-tag>\n<db-tag><db-checkbox>Tag as Checkbox</db-checkbox></db-tag>\n<db-tag><db-radio>Tag as Radio</db-radio></db-tag>\n<db-tag>Static Tag</db-tag>\n<db-tag [overflow]="true"><span>Static Tag with overflow</span></db-tag>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},42125:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-tag">\n		<span class="tag-label">Regular (Default)</span>\n	</div>\n</body>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},60449:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport { DBTag } from "@db-ui/react-components";\n\nconst App = () => (\n	<>\n		<DBTag>\n			<DBButton>Tag as Button</DBButton>\n		</DBTag>\n		<DBTag>\n			<DBLink>Tag as Link</DBLink>\n		</DBTag>\n		<DBTag>\n			<DBCheckbox>Tag as Checkbox</DBCheckbox>\n		</DBTag>\n		<DBTag>\n			<DBRadio>Tag as Radio</DBRadio>\n		</DBTag>\n		<DBTag>Static Tag</DBTag>\n		<DBTag overflow={true}>\n			<span>Static Tag with overflow</span>\n		</DBTag>\n	</>\n);\n\nexport default App;\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},77654:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBTag } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBTag><DBButton>Tag as Button</DBButton></DBTag>\n	<DBTag>\n		<DBLink> Tag as Link </DBLink>\n	</DBTag>\n	<DBTag><DBCheckbox>Tag as Checkbox</DBCheckbox></DBTag>\n	<DBTag><DBRadio>Tag as Radio</DBRadio></DBTag>\n	<DBTag>Static Tag</DBTag>\n	<DBTag :overflow="true">\n		<span>Static Tag with overflow</span>\n	</DBTag>\n</template>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},96704:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var a=t(31085),r=t(71184),s=t(83952),o=t(42125),c=t(11120),i=t(60449),l=t(77654);let d=e=>{let{children:n}=e;return(0,a.jsx)(s.A,{children:n})};function h(e){let n={h1:"h1",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-use-dbtag",children:"How to use DBTag"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...e,children:(0,a.jsx)(h,{...e})})}},83952:(e,n,t)=>{"use strict";t.d(n,{A:()=>q});var a=t(31085),r=t(31242),s=t(83894),o=t.n(s),c=t(14041),i=t(30127),l=t(34747),d=t.n(l),h=t(5188);let u=(0,c.forwardRef)(function(e,n){let t=n||(0,c.useRef)(n),[r,s]=(0,c.useState)(()=>!1),o=(0,c.useRef)(!1);return o.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(r),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=t(23116),g=t(23944),m=t(95374),x=t(12764),f=t(80692),j=t(64286),b=t(42372),v=t(61338),B=t(6900);let w=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:a}=t.query,r=Array.isArray(a)?a:[a];return n.path==="/components/".concat(r.join("/"))},T=e=>{var n;let{navItem:t}=e,s=(0,r.useRouter)(),o=w(s.pathname,t,s);return(0,a.jsx)(B.A,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,a.jsx)(T,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":o?"page":void 0,children:t.label},"router-path-".concat(t.path))})},D=()=>(0,a.jsx)(v.A,{children:b.bw.map(e=>(0,a.jsx)(T,{navItem:e},"router-path-".concat(e.path)))});var k=t(97519),y=t(47982);let A=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},R="db-ui",N="mono",S=()=>{let e=(0,r.useRouter)(),[n,t]=(0,c.useState)(),[s,o]=(0,c.useState)(),i=n=>{let t=e.basePath,a=n.find(e=>t.includes(e));a&&o(a)},l=(e,n)=>{let a=[],r=[],s=[],o=[],c=[],i=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?o.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?i.push(e):a.push(e);t({others:a,features:r,docs:i,refactors:o,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await A("https://api.github.com/repos/".concat(R,"/").concat(N,"/branches")),n=(await A("https://api.github.com/repos/".concat(R,"/").concat(N,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));n.unshift("latest"),i(t),i(n),l(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,a=3===n.split(".").length&&n.startsWith("v")||"latest"===n;window.location.replace(k.A.sanitize("https://".concat(R,".github.io/").concat(N).concat(a?"/version":"/review","/").concat(n).concat(t)))};return n?(0,a.jsx)(y.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,a.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},_=e=>{var n,t;let{children:s,noNavigation:o}=e,[l,h]=(0,c.useState)(!1),[v,B]=(0,c.useState)(!1),[w,T]=(0,c.useState)(!1),[k,y]=(0,c.useState)(!1),[A,R]=(0,c.useState)(),[N,_]=(0,c.useState)(),[q,F]=(0,c.useState)(),[E,L]=(0,c.useState)(),C=(0,r.useRouter)();return(0,c.useEffect)(()=>{i.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.A.highlightAll()},[]),(0,c.useEffect)(()=>{if(C.query&&(C.query.fullscreen&&h("true"===C.query.fullscreen),C.query.page&&h(!0),C.query.noh1&&B("true"===C.query.noh1),C.query.properties&&T("true"===C.query.properties),C.query.current)){let n=Array.isArray(C.query.current)?C.query.current[0]:C.query.current;if(A!==n){var e;R(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=C.asPath.split("?")[0],{previous:t,next:a}=(0,b.Pb)(n);_(t),F(a),L((0,b.Oj)(n))},[C]),(0,a.jsxs)(a.Fragment,{children:[C.isReady&&l&&(0,a.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:s}),C.isReady&&!l&&(0,a.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.A,{drawerOpen:k,onToggle:y,brand:(0,a.jsx)(g.A,{children:"DB-UX"}),primaryAction:(0,a.jsx)(m.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(S,{}),children:(0,a.jsx)(D,{})}),children:[E&&E.length>1&&(0,a.jsx)(x.A,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==E?void 0:E.map(e=>{var n;return(0,a.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,a.jsx)(f.A,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(x.A,{spacing:"none",width:"large",children:s}),!o&&(null!=N?N:q)&&(0,a.jsxs)(x.A,{width:"large",spacing:"small",className:"link-containers",children:[N&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(n=N.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(j.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:N.label})]})}),q&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=q.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(j.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:q.label})]})})]})]})]})},q=o()(async()=>_,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3578,8250,8367,2372,636,6593,8792],()=>n(53913)),_N_E=e.O()}]);