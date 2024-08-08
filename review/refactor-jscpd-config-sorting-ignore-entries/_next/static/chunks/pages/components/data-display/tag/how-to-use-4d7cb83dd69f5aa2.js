(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{70020:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tag/how-to-use",function(){return t(65578)}])},7071:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),r=t(45392);function s(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { DBTag } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBTag],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n<db-tag><db-button>Tag as Button</db-button></db-tag>\n<db-tag>\n	<db-link> Tag as Link </db-link>\n</db-tag>\n<db-tag><db-checkbox>Tag as Checkbox</db-checkbox></db-tag>\n<db-tag><db-radio>Tag as Radio</db-radio></db-tag>\n<db-tag>Static Tag</db-tag>\n<db-tag [overflow]="true"><span>Static Tag with overflow</span></db-tag>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},50194:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),r=t(45392);function s(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-tag">\n		<span class="tag-label">Regular (Default)</span>\n	</div>\n</body>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},65179:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),r=t(45392);function s(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { DBTag } from "@db-ui/react-components";\n\nconst App = () => (\n	<>\n		<DBTag>\n			<DBButton>Tag as Button</DBButton>\n		</DBTag>\n		<DBTag>\n			<DBLink>Tag as Link</DBLink>\n		</DBTag>\n		<DBTag>\n			<DBCheckbox>Tag as Checkbox</DBCheckbox>\n		</DBTag>\n		<DBTag>\n			<DBRadio>Tag as Radio</DBRadio>\n		</DBTag>\n		<DBTag>Static Tag</DBTag>\n		<DBTag overflow={true}>\n			<span>Static Tag with overflow</span>\n		</DBTag>\n	</>\n);\n\nexport default App;\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},85464:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var a=t(52322),r=t(45392);function s(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBTag } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBTag><DBButton>Tag as Button</DBButton></DBTag>\n	<DBTag>\n		<DBLink> Tag as Link </DBLink>\n	</DBTag>\n	<DBTag><DBCheckbox>Tag as Checkbox</DBCheckbox></DBTag>\n	<DBTag><DBRadio>Tag as Radio</DBRadio></DBTag>\n	<DBTag>Static Tag</DBTag>\n	<DBTag :overflow="true">\n		<span>Static Tag with overflow</span>\n	</DBTag>\n</template>\n'})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(s,{...n})}):s(n)}},65578:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var a=t(52322),r=t(45392),s=t(53148),o=t(50194),c=t(7071),i=t(65179),l=t(85464);let d=n=>{let{children:e}=n;return(0,a.jsx)(s.Z,{children:e})};function u(n){let e={h1:"h1",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-to-use-dbtag",children:"How to use DBTag"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function h(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...n,children:(0,a.jsx)(u,{...n})})}},53148:function(n,e,t){"use strict";t.d(e,{Z:function(){return F}});var a=t(52322),r=t(5632),s=t(25237),o=t.n(s),c=t(2784),i=t(61183),l=t(39097),d=t.n(l),u=t(43251);let h=(0,c.forwardRef)(function(n,e){let t=e||(0,c.useRef)(e),[r,s]=(0,c.useState)(()=>!1),o=(0,c.useRef)(!1);return o.current||(document&&("hidden"===n.documentOverflow||"fixed"===n.variant&&"auto"!==n.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,c.useEffect)(()=>{s(!n.fadeIn),document&&n.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,u.mS)(n,[]),id:n.id,className:(0,u.yI)("db-page",n.className),"data-variant":n.variant,"data-fade-in":n.fadeIn,"data-fonts-loaded":r,children:[(0,a.jsx)(a.Fragment,{children:n.header}),(0,a.jsx)("main",{className:"db-main",children:n.children}),(0,a.jsx)(a.Fragment,{children:n.footer})]})});var p=t(82664),g=t(98310),m=t(10326),f=t(55327),x=t(74819),j=t(70741),b=t(92811),v=t(33759),B=t(39120);let w=(n,e)=>{var t;return"/"===e.path?"/"===n:n.includes("".concat(e.path,"/"))||n===e.path||!!(null===(t=e.subNavigation)||void 0===t?void 0:t.find(e=>n.includes("".concat(e.path,"/"))))},T=n=>{var e;let{navItem:t}=n,s=w((0,r.useRouter)().pathname,t);return(0,a.jsx)(B.Z,{active:s,backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(n=>{let{isHiddenInMenu:e}=n;return!0!==e}).map(n=>(0,a.jsx)(T,{navItem:n},"router-path-".concat(n.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(e=t.path)&&void 0!==e?e:"",children:t.label},"router-path-".concat(t.path))})};var D=()=>(0,a.jsx)(v.Z,{children:b.Z6.map(n=>(0,a.jsx)(T,{navItem:n},"router-path-".concat(n.path)))}),k=t(35368),y=t(79081);let N=async n=>{try{let e=await fetch(n);return await e.json()}catch(n){console.error(n)}return[]},S="db-ui",R="mono";var Z=()=>{let n=(0,r.useRouter)(),[e,t]=(0,c.useState)(),[s,o]=(0,c.useState)(),i=e=>{let t=n.basePath,a=e.find(n=>t.includes(n));a&&o(a)},l=(n,e)=>{let a=[],r=[],s=[],o=[],c=[],i=[];for(let n of e)n.startsWith("feat")||n.startsWith("feature")?r.push(n):n.startsWith("fix")||n.startsWith("bugfix")?s.push(n):n.startsWith("refactor")?o.push(n):/^\d*-/.test(n)?c.push(n):n.startsWith("docs")?i.push(n):a.push(n);t({others:a,features:r,docs:i,refactors:o,issues:c,bugfixes:s,versions:n})};(0,c.useEffect)(()=>{(async()=>{let n=await N("https://api.github.com/repos/".concat(S,"/").concat(R,"/branches")),e=(await N("https://api.github.com/repos/".concat(S,"/").concat(R,"/tags"))).map(n=>n.name),t=n.map(n=>n.name).filter(n=>"gh-pages"!==n&&!n.includes("dependabot"));i(t),i(e),l(e,t)})().catch(n=>{console.error(n)})},[]);let d=e=>{let t=n.pathname,a=3===e.split(".").length&&e.startsWith("v");window.location.replace((0,k.sanitize)("https://".concat(S,".github.io/").concat(R).concat(a?"/version":"/review","/").concat(e).concat(t)))};return e?(0,a.jsx)(y.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:n=>{d(n.target.value)},children:Object.entries(e).filter(n=>{let[e,t]=n;return(null==t?void 0:t.length)>0}).map(n=>{let[e,t]=n;return(0,a.jsx)("optgroup",{label:e,children:t.slice(0,15).map((n,t)=>(0,a.jsx)("option",{value:n,children:n},"".concat(e,"-").concat(n,"-").concat(t)))},e)})}):null};let _=n=>{var e,t;let{children:s,noNavigation:o}=n,[l,u]=(0,c.useState)(!1),[v,B]=(0,c.useState)(!1),[w,T]=(0,c.useState)(!1),[k,y]=(0,c.useState)(!1),[N,S]=(0,c.useState)(),[R,_]=(0,c.useState)(),[F,q]=(0,c.useState)(),[E,L]=(0,c.useState)(),C=(0,r.useRouter)();return(0,c.useEffect)(()=>{i.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(C.query&&(C.query.fullscreen&&u("true"===C.query.fullscreen),C.query.page&&u(!0),C.query.noh1&&B("true"===C.query.noh1),C.query.properties&&T("true"===C.query.properties),C.query.current)){let e=Array.isArray(C.query.current)?C.query.current[0]:C.query.current;if(N!==e){var n;S(e),null===(n=document.querySelector("#".concat(e)))||void 0===n||n.scrollIntoView({behavior:"smooth"})}}let e=C.asPath.split("?")[0],{previous:t,next:a}=(0,b.vn)(e);_(t),q(a),L((0,b.kn)(e))},[C]),(0,a.jsxs)(a.Fragment,{children:[C.isReady&&l&&(0,a.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:s}),C.isReady&&!l&&(0,a.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.Z,{drawerOpen:k,onToggle:y,brand:(0,a.jsx)(g.Z,{children:"DB-UI Mono"}),primaryAction:(0,a.jsx)(m.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(Z,{}),children:(0,a.jsx)(D,{})}),children:[E&&E.length>1&&(0,a.jsx)(f.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==E?void 0:E.map(n=>{var e;return(0,a.jsxs)(c.Fragment,{children:["/"!==n.path&&(0,a.jsx)(x.Z,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===n.path?"house":"none","data-no-text":"/"===n.path,href:null!==(e=n.path)&&void 0!==e?e:"/",children:n.label})]},"breadcrumb-".concat(n.path))})})}),(0,a.jsx)(f.Z,{spacing:"none",width:"large",children:s}),!o&&(null!=R?R:F)&&(0,a.jsxs)(f.Z,{width:"large",spacing:"small",className:"link-containers",children:[R&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(e=R.path)&&void 0!==e?e:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:R.label})]})}),F&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=F.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:F.label})]})})]})]})]})};var F=o()(async()=>_,{ssr:!1})}},function(n){n.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return n(n.s=70020)}),_N_E=n.O()}]);