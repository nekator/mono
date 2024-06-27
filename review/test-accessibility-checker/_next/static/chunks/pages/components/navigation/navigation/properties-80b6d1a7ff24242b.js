(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5403],{16381:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/navigation/properties",function(){return n(17746)}])},17746:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(52322),r=n(45392),s=n(53148);let i=e=>{let{children:t}=e;return(0,a.jsx)(s.Z,{children:t})};function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"dbnavigation",children:"DBNavigation"}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Options"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"children"}),(0,a.jsx)(t.td,{children:"default slot"}),(0,a.jsx)(t.td,{children:"any"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"className"}),(0,a.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"describedbyid"}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",children:(0,a.jsx)(t.code,{children:"aria-describedby"})})," is used to link to the elements that describe the element with the set attribute."]}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"id"}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"key"}),(0,a.jsx)(t.td,{children:"React specific for render process."}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"labelledBy"}),(0,a.jsx)(t.td,{children:"Pass aria-labelledby to inner element"}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{})]})]})]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})})}},53148:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var a=n(52322),r=n(5632),s=n(25237),i=n.n(s),c=n(2784),l=n(61183),d=n(39097),o=n.n(d),h=n(43251);let u=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[r,s]=(0,c.useState)(()=>!1);return(0,c.useEffect)(()=>{document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document")},[]),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":r,children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var x=n(82664),p=n(98310),j=n(10326),f=n(55327),m=n(74819),v=n(70741),b=n(92811),g=n(33759),y=n(39120);let w=(e,t)=>{var n;return"/"===t.path?"/"===e:e.includes("".concat(t.path,"/"))||e===t.path||!!(null===(n=t.subNavigation)||void 0===n?void 0:n.find(t=>e.includes("".concat(t.path,"/"))))},N=e=>{var t;let{navItem:n}=e,s=w((0,r.useRouter)().pathname,n);return(0,a.jsx)(y.Z,{active:s,backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,a.jsx)(o(),{href:null!==(t=n.path)&&void 0!==t?t:"",children:n.label},"router-path-".concat(n.path))})};var Z=()=>(0,a.jsx)(g.Z,{children:b.Z6.map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),_=n(35368),S=n(79081);let E=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},k="db-ui",q="mono";var I=()=>{let e=(0,r.useRouter)(),[t,n]=(0,c.useState)(),[s,i]=(0,c.useState)(),l=t=>{let n=e.basePath,a=t.find(e=>n.includes(e));a&&i(a)},d=(e,t)=>{let a=[],r=[],s=[],i=[],c=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):a.push(e);n({others:a,features:r,docs:l,refactors:i,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await E("https://api.github.com/repos/".concat(k,"/").concat(q,"/branches")),t=(await E("https://api.github.com/repos/".concat(k,"/").concat(q,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(n),l(t),d(t,n)})().catch(e=>{console.error(e)})},[]);let o=t=>{let n=e.pathname,a=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,_.sanitize)("https://".concat(k,".github.io/").concat(q).concat(a?"/version":"/review","/").concat(t).concat(n)))};return t?(0,a.jsx)(S.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{o(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,a.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,a.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null};let R=e=>{var t,n;let{children:s,noNavigation:i}=e,[d,h]=(0,c.useState)(!1),[g,y]=(0,c.useState)(!1),[w,N]=(0,c.useState)(!1),[_,S]=(0,c.useState)(!1),[E,k]=(0,c.useState)(),[q,R]=(0,c.useState)(),[A,W]=(0,c.useState)(),[O,P]=(0,c.useState)(),T=(0,r.useRouter)();return(0,c.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(T.query&&(T.query.fullscreen&&h("true"===T.query.fullscreen),T.query.page&&h(!0),T.query.noh1&&y("true"===T.query.noh1),T.query.properties&&N("true"===T.query.properties),T.query.current)){let t=Array.isArray(T.query.current)?T.query.current[0]:T.query.current;if(E!==t){var e;k(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=T.asPath.split("?")[0],{previous:n,next:a}=(0,b.vn)(t);R(n),W(a),P((0,b.kn)(t))},[T]),(0,a.jsxs)(a.Fragment,{children:[T.isReady&&d&&(0,a.jsx)("div",{className:"".concat(g?"noh1":""," ").concat(w?"is-properties":""),children:s}),T.isReady&&!d&&(0,a.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(x.Z,{drawerOpen:_,onToggle:S,brand:(0,a.jsx)(p.Z,{children:"DB-UI Mono"}),primaryAction:(0,a.jsx)(j.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(I,{}),children:(0,a.jsx)(Z,{})}),children:[O&&O.length>1&&(0,a.jsx)(f.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==O?void 0:O.map(e=>{var t;return(0,a.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,a.jsx)(m.Z,{icon:"chevron_right"}),(0,a.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(f.Z,{spacing:"none",width:"large",children:s}),!i&&(null!=q?q:A)&&(0,a.jsxs)(f.Z,{width:"large",spacing:"small",className:"link-containers",children:[q&&(0,a.jsx)(o(),{className:"previous-link-container",href:null!==(t=q.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(v.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:q.label})]})}),A&&(0,a.jsx)(o(),{className:"next-link-container",href:null!==(n=A.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(v.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:A.label})]})})]})]})]})};var A=i()(async()=>R,{ssr:!1})}},function(e){e.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return e(e.s=16381)}),_N_E=e.O()}]);