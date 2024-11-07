(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6954],{34393:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/feedback/notification/how-to-use",function(){return t(64263)}])},50381:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var a=t(52322),r=t(45392);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBNotification } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBNotification],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n<db-notification headline="Headline">Notification</db-notification>\n'})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},51701:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var a=t(52322),r=t(45392);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-notification" data-icon="information_circle">\n		<h6>Headline</h6>\n		<p>Notification</p>\n		<button\n			class="db-button is-icon-text-replace"\n			data-size="small"\n			data-variant="ghost"\n			data-icon="cross"\n		>\n			Close Button\n		</button>\n	</div>\n</body>\n'})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},56274:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var a=t(52322),r=t(45392);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport { DBNotification } from "@db-ui/react-components";\n\nconst App = () => (\n	<DBNotification headline="Headline">Notification</DBNotification>\n);\n\nexport default App;\n'})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},58812:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});var a=t(52322),r=t(45392);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBNotification } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBNotification headline="Headline">Notification</DBNotification>\n</template>\n'})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},64263:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var a=t(52322),r=t(45392),s=t(50115),i=t(51701),o=t(50381),c=t(56274),l=t(58812);let d=e=>{let{children:n}=e;return(0,a.jsx)(s.Z,{children:n})};function h(e){let n={h1:"h1",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-use-dbnotification",children:"How to use DBNotification"}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...e,children:(0,a.jsx)(h,{...e})})}},50115:(e,n,t)=>{"use strict";t.d(n,{Z:()=>A});var a=t(52322),r=t(5632),s=t(25237),i=t.n(s),o=t(2784),c=t(61183),l=t(39097),d=t.n(l),h=t(98072);let u=(0,o.forwardRef)(function(e,n){let t=n||(0,o.useRef)(n),[r,s]=(0,o.useState)(()=>!1),i=(0,o.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,o.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,o.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.X)(r),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=t(68908),m=t(48483),f=t(90434),x=t(97689),j=t(85803),g=t(72288),v=t(2700),b=t(40245),w=t(29469);let N=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:a}=t.query,r=Array.isArray(a)?a:[a];return n.path==="/components/".concat(r.join("/"))},y=e=>{var n;let{navItem:t}=e,s=(0,r.useRouter)(),i=N(s.pathname,t,s);return(0,a.jsx)(w.Z,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,a.jsx)(y,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":i?"page":void 0,children:t.label},"router-path-".concat(t.path))})},k=()=>(0,a.jsx)(b.Z,{children:v.Z6.map(e=>(0,a.jsx)(y,{navItem:e},"router-path-".concat(e.path)))});var Z=t(35368),_=t(9842);let q=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},F="db-ui",S="mono",B=()=>{let e=(0,r.useRouter)(),[n,t]=(0,o.useState)(),[s,i]=(0,o.useState)(),c=n=>{let t=e.basePath,a=n.find(e=>t.includes(e));a&&i(a)},l=(e,n)=>{let a=[],r=[],s=[],i=[],o=[],c=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?o.push(e):e.startsWith("docs")?c.push(e):a.push(e);t({others:a,features:r,docs:c,refactors:i,issues:o,bugfixes:s,versions:e})};(0,o.useEffect)(()=>{(async()=>{let e=await q("https://api.github.com/repos/".concat(F,"/").concat(S,"/branches")),n=(await q("https://api.github.com/repos/".concat(F,"/").concat(S,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(t),c(n),l(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,a=3===n.split(".").length&&n.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(F,".github.io/").concat(S).concat(a?"/version":"/review","/").concat(n).concat(t)))};return n?(0,a.jsx)(_.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,a.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},E=e=>{var n,t;let{children:s,noNavigation:i}=e,[l,h]=(0,o.useState)(!1),[b,w]=(0,o.useState)(!1),[N,y]=(0,o.useState)(!1),[Z,_]=(0,o.useState)(!1),[q,F]=(0,o.useState)(),[S,E]=(0,o.useState)(),[A,D]=(0,o.useState)(),[R,I]=(0,o.useState)(),W=(0,r.useRouter)();return(0,o.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,o.useEffect)(()=>{if(W.query&&(W.query.fullscreen&&h("true"===W.query.fullscreen),W.query.page&&h(!0),W.query.noh1&&w("true"===W.query.noh1),W.query.properties&&y("true"===W.query.properties),W.query.current)){let n=Array.isArray(W.query.current)?W.query.current[0]:W.query.current;if(q!==n){var e;F(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=W.asPath.split("?")[0],{previous:t,next:a}=(0,v.vn)(n);E(t),D(a),I((0,v.kn)(n))},[W]),(0,a.jsxs)(a.Fragment,{children:[W.isReady&&l&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(N?"is-properties":""),children:s}),W.isReady&&!l&&(0,a.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.Z,{drawerOpen:Z,onToggle:_,brand:(0,a.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,a.jsx)(f.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(B,{}),children:(0,a.jsx)(k,{})}),children:[R&&R.length>1&&(0,a.jsx)(x.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==R?void 0:R.map(e=>{var n;return(0,a.jsxs)(o.Fragment,{children:["/"!==e.path&&(0,a.jsx)(j.Z,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(x.Z,{spacing:"none",width:"large",children:s}),!i&&(null!=S?S:A)&&(0,a.jsxs)(x.Z,{width:"large",spacing:"small",className:"link-containers",children:[S&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(n=S.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(g.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:S.label})]})}),A&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=A.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(g.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:A.label})]})})]})]})]})},A=i()(async()=>E,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3430,1954,4540,2700,2888,9774,179],()=>n(34393)),_N_E=e.O()}]);