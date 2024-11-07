(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3833],{23097:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tabs/migration",function(){return n(64277)}])},41884:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var a=n(52322),r=n(45392);function s(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,a.jsx)(t.h3,{id:"class",children:"class"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Before"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,a.jsx)(t.th,{children:"After"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"cmp-tab-bar"})}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"db-tabs"})}),(0,a.jsx)(t.td,{})]})})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},64277:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var a=n(52322),r=n(45392),s=n(50115),c=n(41884);let i=e=>{let{children:t}=e;return(0,a.jsx)(s.Z,{children:t})};function l(e){let t={h1:"h1",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"object-object-migration",children:"[object Object] Migration"}),"\n",(0,a.jsx)(c.default,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(i,{...e,children:(0,a.jsx)(l,{...e})})}},50115:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});var a=n(52322),r=n(5632),s=n(25237),c=n.n(s),i=n(2784),l=n(61183),o=n(39097),d=n.n(o),h=n(98072);let u=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t),[r,s]=(0,i.useState)(()=>!1),c=(0,i.useRef)(!1);return c.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),c.current=!0),(0,i.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.X)(r),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=n(68908),x=n(48483),m=n(90434),j=n(97689),f=n(85803),g=n(72288),b=n(2700),v=n(40245),y=n(29469);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:a}=n.query,r=Array.isArray(a)?a:[a];return t.path==="/components/".concat(r.join("/"))},N=e=>{var t;let{navItem:n}=e,s=(0,r.useRouter)(),c=w(s.pathname,n,s);return(0,a.jsx)(y.Z,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,a.jsx)(d(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":c?"page":void 0,children:n.label},"router-path-".concat(n.path))})},q=()=>(0,a.jsx)(v.Z,{children:b.Z6.map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))});var Z=n(35368),_=n(9842);let k=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},S="db-ui",E="mono",A=()=>{let e=(0,r.useRouter)(),[t,n]=(0,i.useState)(),[s,c]=(0,i.useState)(),l=t=>{let n=e.basePath,a=t.find(e=>n.includes(e));a&&c(a)},o=(e,t)=>{let a=[],r=[],s=[],c=[],i=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?c.push(e):/^\d*-/.test(e)?i.push(e):e.startsWith("docs")?l.push(e):a.push(e);n({others:a,features:r,docs:l,refactors:c,issues:i,bugfixes:s,versions:e})};(0,i.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(S,"/").concat(E,"/branches")),t=(await k("https://api.github.com/repos/".concat(S,"/").concat(E,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(n),l(t),o(t,n)})().catch(e=>{console.error(e)})},[]);let d=t=>{let n=e.asPath,a=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(S,".github.io/").concat(E).concat(a?"/version":"/review","/").concat(t).concat(n)))};return t?(0,a.jsx)(_.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,a.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,a.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},I=e=>{var t,n;let{children:s,noNavigation:c}=e,[o,h]=(0,i.useState)(!1),[v,y]=(0,i.useState)(!1),[w,N]=(0,i.useState)(!1),[Z,_]=(0,i.useState)(!1),[k,S]=(0,i.useState)(),[E,I]=(0,i.useState)(),[F,R]=(0,i.useState)(),[O,W]=(0,i.useState)(),B=(0,r.useRouter)();return(0,i.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,i.useEffect)(()=>{if(B.query&&(B.query.fullscreen&&h("true"===B.query.fullscreen),B.query.page&&h(!0),B.query.noh1&&y("true"===B.query.noh1),B.query.properties&&N("true"===B.query.properties),B.query.current)){let t=Array.isArray(B.query.current)?B.query.current[0]:B.query.current;if(k!==t){var e;S(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=B.asPath.split("?")[0],{previous:n,next:a}=(0,b.vn)(t);I(n),R(a),W((0,b.kn)(t))},[B]),(0,a.jsxs)(a.Fragment,{children:[B.isReady&&o&&(0,a.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:s}),B.isReady&&!o&&(0,a.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.Z,{drawerOpen:Z,onToggle:_,brand:(0,a.jsx)(x.Z,{children:"DB-UX"}),primaryAction:(0,a.jsx)(m.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(A,{}),children:(0,a.jsx)(q,{})}),children:[O&&O.length>1&&(0,a.jsx)(j.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==O?void 0:O.map(e=>{var t;return(0,a.jsxs)(i.Fragment,{children:["/"!==e.path&&(0,a.jsx)(f.Z,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(j.Z,{spacing:"none",width:"large",children:s}),!c&&(null!=E?E:F)&&(0,a.jsxs)(j.Z,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(g.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),F&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(n=F.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(g.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:F.label})]})})]})]})]})},F=c()(async()=>I,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3430,1954,4540,2700,2888,9774,179],()=>t(23097)),_N_E=e.O()}]);