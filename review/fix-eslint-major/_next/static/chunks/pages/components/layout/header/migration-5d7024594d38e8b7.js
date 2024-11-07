(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1536],{73990:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/header/migration",function(){return n(25291)}])},75413:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(52322),a=n(45392);function s(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(t.h3,{id:"class",children:"class"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"rea-header"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"db-header"})}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"mobile",children:"mobile"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mobile"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"forceMobile"})}),(0,r.jsx)(t.td,{children:"forces the burger menu for desktop"})]})})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},25291:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(52322),a=n(45392),s=n(50115),c=n(75413);let i=e=>{let{children:t}=e;return(0,r.jsx)(s.Z,{children:t})};function l(e){let t={h1:"h1",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbheader-migration",children:"DBHeader Migration"}),"\n",(0,r.jsx)(c.default,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})})}},50115:(e,t,n)=>{"use strict";n.d(t,{Z:()=>B});var r=n(52322),a=n(5632),s=n(25237),c=n.n(s),i=n(2784),l=n(61183),o=n(39097),d=n.n(o),h=n(98072);let u=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t),[a,s]=(0,i.useState)(()=>!1),c=(0,i.useRef)(!1);return c.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),c.current=!0),(0,i.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.X)(a),children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var x=n(68908),p=n(48483),j=n(90434),m=n(97689),f=n(85803),g=n(72288),b=n(2700),v=n(40245),y=n(29469);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:r}=n.query,a=Array.isArray(r)?r:[r];return t.path==="/components/".concat(a.join("/"))},N=e=>{var t;let{navItem:n}=e,s=(0,a.useRouter)(),c=w(s.pathname,n,s);return(0,r.jsx)(y.Z,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(d(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":c?"page":void 0,children:n.label},"router-path-".concat(n.path))})},q=()=>(0,r.jsx)(v.Z,{children:b.Z6.map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))});var Z=n(35368),k=n(9842);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},_="db-ui",A="mono",E=()=>{let e=(0,a.useRouter)(),[t,n]=(0,i.useState)(),[s,c]=(0,i.useState)(),l=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&c(r)},o=(e,t)=>{let r=[],a=[],s=[],c=[],i=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?c.push(e):/^\d*-/.test(e)?i.push(e):e.startsWith("docs")?l.push(e):r.push(e);n({others:r,features:a,docs:l,refactors:c,issues:i,bugfixes:s,versions:e})};(0,i.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(_,"/").concat(A,"/branches")),t=(await S("https://api.github.com/repos/".concat(_,"/").concat(A,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(n),l(t),o(t,n)})().catch(e=>{console.error(e)})},[]);let d=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(_,".github.io/").concat(A).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(k.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},I=e=>{var t,n;let{children:s,noNavigation:c}=e,[o,h]=(0,i.useState)(!1),[v,y]=(0,i.useState)(!1),[w,N]=(0,i.useState)(!1),[Z,k]=(0,i.useState)(!1),[S,_]=(0,i.useState)(),[A,I]=(0,i.useState)(),[B,F]=(0,i.useState)(),[R,W]=(0,i.useState)(),D=(0,a.useRouter)();return(0,i.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,i.useEffect)(()=>{if(D.query&&(D.query.fullscreen&&h("true"===D.query.fullscreen),D.query.page&&h(!0),D.query.noh1&&y("true"===D.query.noh1),D.query.properties&&N("true"===D.query.properties),D.query.current)){let t=Array.isArray(D.query.current)?D.query.current[0]:D.query.current;if(S!==t){var e;_(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=D.asPath.split("?")[0],{previous:n,next:r}=(0,b.vn)(t);I(n),F(r),W((0,b.kn)(t))},[D]),(0,r.jsxs)(r.Fragment,{children:[D.isReady&&o&&(0,r.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:s}),D.isReady&&!o&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(x.Z,{drawerOpen:Z,onToggle:k,brand:(0,r.jsx)(p.Z,{children:"DB-UX"}),primaryAction:(0,r.jsx)(j.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(E,{}),children:(0,r.jsx)(q,{})}),children:[R&&R.length>1&&(0,r.jsx)(m.Z,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==R?void 0:R.map(e=>{var t;return(0,r.jsxs)(i.Fragment,{children:["/"!==e.path&&(0,r.jsx)(f.Z,{icon:"chevron_right"}),(0,r.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(m.Z,{spacing:"none",width:"large",children:s}),!c&&(null!=A?A:B)&&(0,r.jsxs)(m.Z,{width:"large",spacing:"small",className:"link-containers",children:[A&&(0,r.jsx)(d(),{className:"previous-link-container",href:null!==(t=A.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(g.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:A.label})]})}),B&&(0,r.jsx)(d(),{className:"next-link-container",href:null!==(n=B.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(g.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:B.label})]})})]})]})]})},B=c()(async()=>I,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3430,1954,4540,2700,2888,9774,179],()=>t(73990)),_N_E=e.O()}]);