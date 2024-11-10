(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1970],{99269:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/accordion/how-to-use",function(){return t(36214)}])},54542:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBAccordion, DBAccordionItem } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBAccordion, DBAccordionItem],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n<db-accordion>\n	<db-accordion-item\n		headlinePlain="Item 1"\n		content="Content 1"\n	></db-accordion-item>\n	<db-accordion-item\n		headlinePlain="Item 2"\n		content="Content 2"\n	></db-accordion-item>\n	<db-accordion-item\n		headlinePlain="Item 3"\n		content="Content 3"\n	></db-accordion-item>\n</db-accordion>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},98075:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-accordion">\n		<details class="db-accordion-item">\n			<summary>Title 1</summary>\n			<div>Content 1</div>\n		</details>\n		<details class="db-accordion-item">\n			<summary>Title 2</summary>\n			<div>Content 2</div>\n		</details>\n		<details class="db-accordion-item">\n			<summary>Title 3</summary>\n			<div>Content 3</div>\n		</details>\n	</div>\n</body>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},59147:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport { DBAccordion, DBAccordionItem } from "@db-ui/react-components";\n\nconst App = () => (\n	<DBAccordion>\n		<DBAccordionItem headlinePlain="Item 1" content="Content 1" />\n		<DBAccordionItem headlinePlain="Item 2" content="Content 2" />\n		<DBAccordionItem headlinePlain="Item 3" content="Content 3" />\n	</DBAccordion>\n);\nexport default App;\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19604:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBAccordion, DBAccordionItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBAccordion>\n		<DBAccordionItem headlinePlain="Item 1" content="Content 1" />\n		<DBAccordionItem headlinePlain="Item 2" content="Content 2" />\n		<DBAccordionItem headlinePlain="Item 3" content="Content 3" />\n	</DBAccordion>\n</template>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},36214:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var a=t(31085),r=t(71184),c=t(83952),o=t(98075),s=t(54542),i=t(59147),l=t(19604);let d=e=>{let{children:n}=e;return(0,a.jsx)(c.A,{children:n})};function h(e){let n={h1:"h1",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-use-dbaccordion",children:"How to use DBAccordion"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...e,children:(0,a.jsx)(h,{...e})})}},83952:(e,n,t)=>{"use strict";t.d(n,{A:()=>_});var a=t(31085),r=t(31242),c=t(83894),o=t.n(c),s=t(14041),i=t(30127),l=t(34747),d=t.n(l),h=t(5188);let u=(0,s.forwardRef)(function(e,n){let t=n||(0,s.useRef)(n),[r,c]=(0,s.useState)(()=>!1),o=(0,s.useRef)(!1);return o.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,s.useEffect)(()=>{c(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{c(!0)}):c(!0)},[]),(0,s.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(r),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=t(23116),m=t(23944),x=t(95374),j=t(12764),g=t(80692),f=t(64286),v=t(42372),b=t(61338),A=t(6900);let w=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:a}=t.query,r=Array.isArray(a)?a:[a];return n.path==="/components/".concat(r.join("/"))},y=e=>{var n;let{navItem:t}=e,c=(0,r.useRouter)(),o=w(c.pathname,t,c);return(0,a.jsx)(A.A,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,a.jsx)(y,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":o?"page":void 0,children:t.label},"router-path-".concat(t.path))})},I=()=>(0,a.jsx)(b.A,{children:v.bw.map(e=>(0,a.jsx)(y,{navItem:e},"router-path-".concat(e.path)))});var N=t(71651),B=t(47982);let k=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},D="db-ui",R="mono",C=()=>{let e=(0,r.useRouter)(),[n,t]=(0,s.useState)(),[c,o]=(0,s.useState)(),i=n=>{let t=e.basePath,a=n.find(e=>t.includes(e));a&&o(a)},l=(e,n)=>{let a=[],r=[],c=[],o=[],s=[],i=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?c.push(e):e.startsWith("refactor")?o.push(e):/^\d*-/.test(e)?s.push(e):e.startsWith("docs")?i.push(e):a.push(e);t({others:a,features:r,docs:i,refactors:o,issues:s,bugfixes:c,versions:e})};(0,s.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(D,"/").concat(R,"/branches")),n=(await k("https://api.github.com/repos/".concat(D,"/").concat(R,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));n.unshift("latest"),i(t),i(n),l(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,a=3===n.split(".").length&&n.startsWith("v")||"latest"===n;window.location.replace((0,N.sanitize)("https://".concat(D,".github.io/").concat(R).concat(a?"/version":"/review","/").concat(n).concat(t)))};return n?(0,a.jsx)(B.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:c,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,a.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},P=e=>{var n,t;let{children:c,noNavigation:o}=e,[l,h]=(0,s.useState)(!1),[b,A]=(0,s.useState)(!1),[w,y]=(0,s.useState)(!1),[N,B]=(0,s.useState)(!1),[k,D]=(0,s.useState)(),[R,P]=(0,s.useState)(),[_,q]=(0,s.useState)(),[F,E]=(0,s.useState)(),S=(0,r.useRouter)();return(0,s.useEffect)(()=>{i.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.A.highlightAll()},[]),(0,s.useEffect)(()=>{if(S.query&&(S.query.fullscreen&&h("true"===S.query.fullscreen),S.query.page&&h(!0),S.query.noh1&&A("true"===S.query.noh1),S.query.properties&&y("true"===S.query.properties),S.query.current)){let n=Array.isArray(S.query.current)?S.query.current[0]:S.query.current;if(k!==n){var e;D(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=S.asPath.split("?")[0],{previous:t,next:a}=(0,v.Pb)(n);P(t),q(a),E((0,v.Oj)(n))},[S]),(0,a.jsxs)(a.Fragment,{children:[S.isReady&&l&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:c}),S.isReady&&!l&&(0,a.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.A,{drawerOpen:N,onToggle:B,brand:(0,a.jsx)(m.A,{children:"DB-UX"}),primaryAction:(0,a.jsx)(x.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(C,{}),children:(0,a.jsx)(I,{})}),children:[F&&F.length>1&&(0,a.jsx)(j.A,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==F?void 0:F.map(e=>{var n;return(0,a.jsxs)(s.Fragment,{children:["/"!==e.path&&(0,a.jsx)(g.A,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(j.A,{spacing:"none",width:"large",children:c}),!o&&(null!=R?R:_)&&(0,a.jsxs)(j.A,{width:"large",spacing:"small",className:"link-containers",children:[R&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(n=R.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(f.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:R.label})]})}),_&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=_.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(f.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:_.label})]})})]})]})]})},_=o()(async()=>P,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>n(99269)),_N_E=e.O()}]);