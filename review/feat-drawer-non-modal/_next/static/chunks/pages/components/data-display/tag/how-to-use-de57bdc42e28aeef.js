(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{70020:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tag/how-to-use",function(){return t(49116)}])},65304:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(52322),r=t(45392);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBTag } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBTag],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n<db-tag><db-button>Tag as Button</db-button></db-tag>\n<db-tag>\n	<db-link> Tag as Link </db-link>\n</db-tag>\n<db-tag><db-checkbox>Tag as Checkbox</db-checkbox></db-tag>\n<db-tag><db-radio>Tag as Radio</db-radio></db-tag>\n<db-tag>Static Tag</db-tag>\n<db-tag [overflow]="true"><span>Static Tag with overflow</span></db-tag>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},25614:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(52322),r=t(45392);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-tag">\n		<span class="tag-label">Regular (Default)</span>\n	</div>\n</body>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},82239:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(52322),r=t(45392);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport { DBTag } from "@db-ui/react-components";\n\nconst App = () => (\n	<>\n		<DBTag>\n			<DBButton>Tag as Button</DBButton>\n		</DBTag>\n		<DBTag>\n			<DBLink>Tag as Link</DBLink>\n		</DBTag>\n		<DBTag>\n			<DBCheckbox>Tag as Checkbox</DBCheckbox>\n		</DBTag>\n		<DBTag>\n			<DBRadio>Tag as Radio</DBRadio>\n		</DBTag>\n		<DBTag>Static Tag</DBTag>\n		<DBTag overflow={true}>\n			<span>Static Tag with overflow</span>\n		</DBTag>\n	</>\n);\n\nexport default App;\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},51871:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(52322),r=t(45392);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBTag } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBTag><DBButton>Tag as Button</DBButton></DBTag>\n	<DBTag>\n		<DBLink> Tag as Link </DBLink>\n	</DBTag>\n	<DBTag><DBCheckbox>Tag as Checkbox</DBCheckbox></DBTag>\n	<DBTag><DBRadio>Tag as Radio</DBRadio></DBTag>\n	<DBTag>Static Tag</DBTag>\n	<DBTag :overflow="true">\n		<span>Static Tag with overflow</span>\n	</DBTag>\n</template>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},49116:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var a=t(52322),r=t(45392),s=t(50115),o=t(25614),c=t(65304),i=t(82239),l=t(51871);let d=e=>{let{children:n}=e;return(0,a.jsx)(s.Z,{children:n})};function h(e){let n={h1:"h1",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-use-dbtag",children:"How to use DBTag"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...e,children:(0,a.jsx)(h,{...e})})}},50115:(e,n,t)=>{"use strict";t.d(n,{Z:()=>q});var a=t(52322),r=t(5632),s=t(25237),o=t.n(s),c=t(2784),i=t(61183),l=t(39097),d=t.n(l),h=t(98072);let u=(0,c.forwardRef)(function(e,n){let t=n||(0,c.useRef)(n),[r,s]=(0,c.useState)(()=>!1),o=(0,c.useRef)(!1);return o.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.X)(r),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=t(68908),g=t(48483),m=t(90434),x=t(97689),f=t(85803),j=t(72288),b=t(2700),v=t(40245),B=t(29469);let w=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:a}=t.query,r=Array.isArray(a)?a:[a];return n.path==="/components/".concat(r.join("/"))},T=e=>{var n;let{navItem:t}=e,s=(0,r.useRouter)(),o=w(s.pathname,t,s);return(0,a.jsx)(B.Z,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,a.jsx)(T,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":o?"page":void 0,children:t.label},"router-path-".concat(t.path))})},D=()=>(0,a.jsx)(v.Z,{children:b.Z6.map(e=>(0,a.jsx)(T,{navItem:e},"router-path-".concat(e.path)))});var k=t(35368),y=t(9842);let N=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},S="db-ui",R="mono",Z=()=>{let e=(0,r.useRouter)(),[n,t]=(0,c.useState)(),[s,o]=(0,c.useState)(),i=n=>{let t=e.basePath,a=n.find(e=>t.includes(e));a&&o(a)},l=(e,n)=>{let a=[],r=[],s=[],o=[],c=[],i=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?o.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?i.push(e):a.push(e);t({others:a,features:r,docs:i,refactors:o,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await N("https://api.github.com/repos/".concat(S,"/").concat(R,"/branches")),n=(await N("https://api.github.com/repos/".concat(S,"/").concat(R,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));i(t),i(n),l(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,a=3===n.split(".").length&&n.startsWith("v");window.location.replace((0,k.sanitize)("https://".concat(S,".github.io/").concat(R).concat(a?"/version":"/review","/").concat(n).concat(t)))};return n?(0,a.jsx)(y.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,a.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},_=e=>{var n,t;let{children:s,noNavigation:o}=e,[l,h]=(0,c.useState)(!1),[v,B]=(0,c.useState)(!1),[w,T]=(0,c.useState)(!1),[k,y]=(0,c.useState)(!1),[N,S]=(0,c.useState)(),[R,_]=(0,c.useState)(),[q,F]=(0,c.useState)(),[E,A]=(0,c.useState)(),L=(0,r.useRouter)();return(0,c.useEffect)(()=>{i.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(L.query&&(L.query.fullscreen&&h("true"===L.query.fullscreen),L.query.page&&h(!0),L.query.noh1&&B("true"===L.query.noh1),L.query.properties&&T("true"===L.query.properties),L.query.current)){let n=Array.isArray(L.query.current)?L.query.current[0]:L.query.current;if(N!==n){var e;S(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=L.asPath.split("?")[0],{previous:t,next:a}=(0,b.vn)(n);_(t),F(a),A((0,b.kn)(n))},[L]),(0,a.jsxs)(a.Fragment,{children:[L.isReady&&l&&(0,a.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:s}),L.isReady&&!l&&(0,a.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.Z,{drawerOpen:k,onToggle:y,brand:(0,a.jsx)(g.Z,{children:"DB-UX"}),primaryAction:(0,a.jsx)(m.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(Z,{}),children:(0,a.jsx)(D,{})}),children:[E&&E.length>1&&(0,a.jsx)(x.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==E?void 0:E.map(e=>{var n;return(0,a.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,a.jsx)(f.Z,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(x.Z,{spacing:"none",width:"large",children:s}),!o&&(null!=R?R:q)&&(0,a.jsxs)(x.Z,{width:"large",spacing:"small",className:"link-containers",children:[R&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(n=R.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:R.label})]})}),q&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=q.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:q.label})]})})]})]})]})},q=o()(async()=>_,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3430,1954,4540,2700,2888,9774,179],()=>n(70020)),_N_E=e.O()}]);