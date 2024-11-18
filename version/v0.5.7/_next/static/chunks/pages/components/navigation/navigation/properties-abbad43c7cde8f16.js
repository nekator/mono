(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6788],{37061:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/navigation/properties",function(){return n(23764)}])},23764:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var a=n(31085),r=n(71184),s=n(83952);let i=e=>{let{children:t}=e;return(0,a.jsx)(s.A,{children:t})};function l(e){let t={a:"a",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"dbnavigation",children:"DBNavigation"}),"\n",(0,a.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"children"}),(0,a.jsx)(t.td,{children:"default slot"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Options"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"id"}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"labelled-by / labelledBy"}),(0,a.jsx)(t.td,{children:"Pass aria-labelledby to inner element"}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"className"}),(0,a.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{})]})]})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(i,{...e,children:(0,a.jsx)(l,{...e})})}},83952:(e,t,n)=>{"use strict";n.d(t,{A:()=>I});var a=n(31085),r=n(31242),s=n(83894),i=n.n(s),l=n(14041),c=n(30127),d=n(34747),o=n.n(d),h=n(5188);let u=(0,l.forwardRef)(function(e,t){let n=t||(0,l.useRef)(t),[r,s]=(0,l.useState)(()=>!1),i=(0,l.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,l.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,l.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:n,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(r),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=n(23116),x=n(23944),j=n(95374),m=n(12764),f=n(80692),g=n(64286),b=n(42372),v=n(61338),y=n(6900);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:a}=n.query,r=Array.isArray(a)?a:[a];return t.path==="/components/".concat(r.join("/"))},N=e=>{var t;let{navItem:n}=e,s=(0,r.useRouter)(),i=w(s.pathname,n,s);return(0,a.jsx)(y.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,a.jsx)(o(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:n.label},"router-path-".concat(n.path))})},A=()=>(0,a.jsx)(v.A,{children:b.bw.map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))});var _=n(97519),q=n(47982);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},E="db-ui",k="mono",R=()=>{let e=(0,r.useRouter)(),[t,n]=(0,l.useState)(),[s,i]=(0,l.useState)(),c=t=>{let n=e.basePath,a=t.find(e=>n.includes(e));a&&i(a)},d=(e,t)=>{let a=[],r=[],s=[],i=[],l=[],c=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?l.push(e):e.startsWith("docs")?c.push(e):a.push(e);n({others:a,features:r,docs:c,refactors:i,issues:l,bugfixes:s,versions:e})};(0,l.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(E,"/").concat(k,"/branches")),t=(await S("https://api.github.com/repos/".concat(E,"/").concat(k,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.unshift("latest"),c(n),c(t),d(t,n)})().catch(e=>{console.error(e)})},[]);let o=t=>{let n=e.asPath,a=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace(_.A.sanitize("https://".concat(E,".github.io/").concat(k).concat(a?"/version":"/review","/").concat(t).concat(n)))};return t?(0,a.jsx)(q.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{o(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,a.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,a.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},P=e=>{var t,n;let{children:s,noNavigation:i}=e,[d,h]=(0,l.useState)(!1),[v,y]=(0,l.useState)(!1),[w,N]=(0,l.useState)(!1),[_,q]=(0,l.useState)(!1),[S,E]=(0,l.useState)(),[k,P]=(0,l.useState)(),[I,O]=(0,l.useState)(),[W,F]=(0,l.useState)(),T=(0,r.useRouter)();return(0,l.useEffect)(()=>{c.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.A.highlightAll()},[]),(0,l.useEffect)(()=>{if(T.query&&(T.query.fullscreen&&h("true"===T.query.fullscreen),T.query.page&&h(!0),T.query.noh1&&y("true"===T.query.noh1),T.query.properties&&N("true"===T.query.properties),T.query.current)){let t=Array.isArray(T.query.current)?T.query.current[0]:T.query.current;if(S!==t){var e;E(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=T.asPath.split("?")[0],{previous:n,next:a}=(0,b.Pb)(t);P(n),O(a),F((0,b.Oj)(t))},[T]),(0,a.jsxs)(a.Fragment,{children:[T.isReady&&d&&(0,a.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:s}),T.isReady&&!d&&(0,a.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.A,{drawerOpen:_,onToggle:q,brand:(0,a.jsx)(x.A,{children:"DB-UX"}),primaryAction:(0,a.jsx)(j.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(R,{}),children:(0,a.jsx)(A,{})}),children:[W&&W.length>1&&(0,a.jsx)(m.A,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==W?void 0:W.map(e=>{var t;return(0,a.jsxs)(l.Fragment,{children:["/"!==e.path&&(0,a.jsx)(f.A,{icon:"chevron_right"}),(0,a.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(m.A,{spacing:"none",width:"large",children:s}),!i&&(null!=k?k:I)&&(0,a.jsxs)(m.A,{width:"large",spacing:"small",className:"link-containers",children:[k&&(0,a.jsx)(o(),{className:"previous-link-container",href:null!==(t=k.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(g.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:k.label})]})}),I&&(0,a.jsx)(o(),{className:"next-link-container",href:null!==(n=I.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(g.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:I.label})]})})]})]})]})},I=i()(async()=>P,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,8250,8367,2372,636,6593,8792],()=>t(37061)),_N_E=e.O()}]);