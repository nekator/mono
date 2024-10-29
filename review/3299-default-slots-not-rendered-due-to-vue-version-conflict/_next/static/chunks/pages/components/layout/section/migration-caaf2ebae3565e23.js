(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6353],{70618:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/section/migration",function(){return n(28184)}])},37772:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=n(52322),r=n(45392);function s(e){let t={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,a.jsx)(t.p,{children:"New Component \uD83E\uDD73"})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},28184:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var a=n(52322),r=n(45392),s=n(50115),i=n(37772);let c=e=>{let{children:t}=e;return(0,a.jsx)(s.Z,{children:t})};function o(e){let t={h1:"h1",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"dbsection-migration",children:"DBSection Migration"}),"\n",(0,a.jsx)(i.default,{})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(c,{...e,children:(0,a.jsx)(o,{...e})})}},50115:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var a=n(52322),r=n(5632),s=n(25237),i=n.n(s),c=n(2784),o=n(61183),l=n(39097),u=n.n(l),d=n(98072);let h=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[r,s]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:n,...(0,d.mS)(e,[]),id:e.id,className:(0,d.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":r,children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=n(68908),m=n(48483),f=n(90434),g=n(97689),x=n(85803),j=n(72288),v=n(76460),b=n(40245),y=n(29469);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:a}=n.query,r=Array.isArray(a)?a:[a];return t.path==="/components/".concat(r.join("/"))},N=e=>{var t;let{navItem:n}=e,s=(0,r.useRouter)(),i=w(s.pathname,n,s);return(0,a.jsx)(y.Z,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,a.jsx)(u(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:n.label},"router-path-".concat(n.path))})},q=()=>(0,a.jsx)(b.Z,{children:v.Z6.map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))});var Z=n(35368),_=n(9842);let k=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},S="db-ui",E="mono",I=()=>{let e=(0,r.useRouter)(),[t,n]=(0,c.useState)(),[s,i]=(0,c.useState)(),o=t=>{let n=e.basePath,a=t.find(e=>n.includes(e));a&&i(a)},l=(e,t)=>{let a=[],r=[],s=[],i=[],c=[],o=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?o.push(e):a.push(e);n({others:a,features:r,docs:o,refactors:i,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(S,"/").concat(E,"/branches")),t=(await k("https://api.github.com/repos/".concat(S,"/").concat(E,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));o(n),o(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let u=t=>{let n=e.asPath,a=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(S,".github.io/").concat(E).concat(a?"/version":"/review","/").concat(t).concat(n)))};return t?(0,a.jsx)(_.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{u(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,a.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,a.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},F=e=>{var t,n;let{children:s,noNavigation:i}=e,[l,d]=(0,c.useState)(!1),[b,y]=(0,c.useState)(!1),[w,N]=(0,c.useState)(!1),[Z,_]=(0,c.useState)(!1),[k,S]=(0,c.useState)(),[E,F]=(0,c.useState)(),[R,A]=(0,c.useState)(),[W,B]=(0,c.useState)(),C=(0,r.useRouter)();return(0,c.useEffect)(()=>{o.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),o.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(C.query&&(C.query.fullscreen&&d("true"===C.query.fullscreen),C.query.page&&d(!0),C.query.noh1&&y("true"===C.query.noh1),C.query.properties&&N("true"===C.query.properties),C.query.current)){let t=Array.isArray(C.query.current)?C.query.current[0]:C.query.current;if(k!==t){var e;S(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=C.asPath.split("?")[0],{previous:n,next:a}=(0,v.vn)(t);F(n),A(a),B((0,v.kn)(t))},[C]),(0,a.jsxs)(a.Fragment,{children:[C.isReady&&l&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:s}),C.isReady&&!l&&(0,a.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.Z,{drawerOpen:Z,onToggle:_,brand:(0,a.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,a.jsx)(f.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(I,{}),children:(0,a.jsx)(q,{})}),children:[W&&W.length>1&&(0,a.jsx)(g.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==W?void 0:W.map(e=>{var t;return(0,a.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,a.jsx)(x.Z,{icon:"chevron_right"}),(0,a.jsx)(u(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(g.Z,{spacing:"none",width:"large",children:s}),!i&&(null!=E?E:R)&&(0,a.jsxs)(g.Z,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,a.jsx)(u(),{className:"previous-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),R&&(0,a.jsx)(u(),{className:"next-link-container",href:null!==(n=R.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:R.label})]})})]})]})]})},R=i()(async()=>F,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3430,1954,4540,6460,2888,9774,179],()=>t(70618)),_N_E=e.O()}]);