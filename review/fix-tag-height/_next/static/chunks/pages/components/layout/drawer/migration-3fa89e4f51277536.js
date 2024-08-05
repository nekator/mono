(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2858],{47398:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/drawer/migration",function(){return n(32255)}])},28641:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var a=n(52322),r=n(45392);function s(e){let t={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,a.jsx)(t.p,{children:"New Component \uD83E\uDD73"})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},32255:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(52322),r=n(45392),s=n(53148),i=n(28641);let c=e=>{let{children:t}=e;return(0,a.jsx)(s.Z,{children:t})};function o(e){let t={h1:"h1",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"dbdrawer-migration",children:"DBDrawer Migration"}),"\n",(0,a.jsx)(i.default,{})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(c,{...e,children:(0,a.jsx)(o,{...e})})}},53148:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var a=n(52322),r=n(5632),s=n(25237),i=n.n(s),c=n(2784),o=n(61183),l=n(39097),u=n.n(l),d=n(43251);let h=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[r,s]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:n,...(0,d.mS)(e,[]),id:e.id,className:(0,d.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":r,children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=n(82664),m=n(98310),f=n(10326),g=n(55327),x=n(74819),v=n(70741),j=n(92811),b=n(33759),w=n(39120);let y=(e,t)=>{var n;return"/"===t.path?"/"===e:e.includes("".concat(t.path,"/"))||e===t.path||!!(null===(n=t.subNavigation)||void 0===n?void 0:n.find(t=>e.includes("".concat(t.path,"/"))))},N=e=>{var t;let{navItem:n}=e,s=y((0,r.useRouter)().pathname,n);return(0,a.jsx)(w.Z,{active:s,backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,a.jsx)(u(),{href:null!==(t=n.path)&&void 0!==t?t:"",children:n.label},"router-path-".concat(n.path))})};var Z=()=>(0,a.jsx)(b.Z,{children:j.Z6.map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),q=n(35368),_=n(79081);let k=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},E="db-ui",S="mono";var I=()=>{let e=(0,r.useRouter)(),[t,n]=(0,c.useState)(),[s,i]=(0,c.useState)(),o=t=>{let n=e.basePath,a=t.find(e=>n.includes(e));a&&i(a)},l=(e,t)=>{let a=[],r=[],s=[],i=[],c=[],o=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?o.push(e):a.push(e);n({others:a,features:r,docs:o,refactors:i,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(E,"/").concat(S,"/branches")),t=(await k("https://api.github.com/repos/".concat(E,"/").concat(S,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));o(n),o(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let u=t=>{let n=e.pathname,a=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,q.sanitize)("https://".concat(E,".github.io/").concat(S).concat(a?"/version":"/review","/").concat(t).concat(n)))};return t?(0,a.jsx)(_.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{u(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,a.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,a.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null};let D=e=>{var t,n;let{children:s,noNavigation:i}=e,[l,d]=(0,c.useState)(!1),[b,w]=(0,c.useState)(!1),[y,N]=(0,c.useState)(!1),[q,_]=(0,c.useState)(!1),[k,E]=(0,c.useState)(),[S,D]=(0,c.useState)(),[F,R]=(0,c.useState)(),[W,B]=(0,c.useState)(),C=(0,r.useRouter)();return(0,c.useEffect)(()=>{o.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),o.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(C.query&&(C.query.fullscreen&&d("true"===C.query.fullscreen),C.query.page&&d(!0),C.query.noh1&&w("true"===C.query.noh1),C.query.properties&&N("true"===C.query.properties),C.query.current)){let t=Array.isArray(C.query.current)?C.query.current[0]:C.query.current;if(k!==t){var e;E(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=C.asPath.split("?")[0],{previous:n,next:a}=(0,j.vn)(t);D(n),R(a),B((0,j.kn)(t))},[C]),(0,a.jsxs)(a.Fragment,{children:[C.isReady&&l&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(y?"is-properties":""),children:s}),C.isReady&&!l&&(0,a.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.Z,{drawerOpen:q,onToggle:_,brand:(0,a.jsx)(m.Z,{children:"DB-UI Mono"}),primaryAction:(0,a.jsx)(f.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(I,{}),children:(0,a.jsx)(Z,{})}),children:[W&&W.length>1&&(0,a.jsx)(g.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==W?void 0:W.map(e=>{var t;return(0,a.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,a.jsx)(x.Z,{icon:"chevron_right"}),(0,a.jsx)(u(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(g.Z,{spacing:"none",width:"large",children:s}),!i&&(null!=S?S:F)&&(0,a.jsxs)(g.Z,{width:"large",spacing:"small",className:"link-containers",children:[S&&(0,a.jsx)(u(),{className:"previous-link-container",href:null!==(t=S.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(v.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:S.label})]})}),F&&(0,a.jsx)(u(),{className:"next-link-container",href:null!==(n=F.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(v.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:F.label})]})})]})]})]})};var F=i()(async()=>D,{ssr:!1})}},function(e){e.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return e(e.s=47398)}),_N_E=e.O()}]);