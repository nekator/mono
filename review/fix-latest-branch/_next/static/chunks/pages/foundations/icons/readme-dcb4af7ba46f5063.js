(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{8117:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/icons/readme",function(){return n(34631)}])},34631:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(31085),a=n(83952),s=n(71184);function i(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"icons",children:"Icons"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["We use icon fonts as ",(0,r.jsx)(t.strong,{children:"woff2"})," files for all our icons."]}),"\n",(0,r.jsxs)(t.li,{children:["We auto generate these files out of ",(0,r.jsx)(t.code,{children:".svg"})," files."]}),"\n",(0,r.jsxs)(t.li,{children:["A lot of our ",(0,r.jsx)(t.a,{href:"../../components/readme",children:"components"})," have an ",(0,r.jsx)(t.code,{children:"icon"})," property you can pass in."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-include-icons",children:"How to include icons"}),"\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.strong,{children:"CSS"}),", ",(0,r.jsx)(t.strong,{children:"SCSS"})," and ",(0,r.jsx)(t.strong,{children:"Tailwind"})," you don't have to include a specific file, just follow the documentation for ",(0,r.jsx)(t.a,{href:"../../foundations/readme",children:"foundations"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsxs)(t.p,{children:["We're providing an ",(0,r.jsx)(t.a,{href:"./overview",children:"overview for all of our icons"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can add an icon before or after a tag, by adding an ",(0,r.jsx)(t.code,{children:"data-"})," attribute to your HTML code, like for example:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variant"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Data"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"before"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:'data-icon="icon-from-overview"'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"after"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:'data-icon-after="icon-from-overview"'})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"custom-icons",children:"Custom Icons"}),"\n",(0,r.jsxs)(t.p,{children:["If you have custom icons and want to use them for foundations and/or in components, you need to generate a ",(0,r.jsx)(t.strong,{children:"woff2"})," file."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"./CustomIcons.md",children:"More information"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}let c=e=>{let{children:t}=e;return(0,r.jsx)(a.A,{children:t})};function l(e){return(0,r.jsx)(o,{})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(l,{...e})})}},83952:(e,t,n)=>{"use strict";n.d(t,{A:()=>W});var r=n(31085),a=n(31242),s=n(83894),i=n.n(s),o=n(14041),c=n(30127),l=n(34747),d=n.n(l),h=n(5188);let u=(0,o.forwardRef)(function(e,t){let n=t||(0,o.useRef)(t),[a,s]=(0,o.useState)(()=>!1),i=(0,o.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,o.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,o.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(a),children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var f=n(23116),x=n(23944),p=n(95374),j=n(12764),m=n(80692),g=n(64286),v=n(42372),b=n(61338),y=n(6900);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:r}=n.query,a=Array.isArray(r)?r:[r];return t.path==="/components/".concat(a.join("/"))},A=e=>{var t;let{navItem:n}=e,s=(0,a.useRouter)(),i=w(s.pathname,n,s);return(0,r.jsx)(y.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(A,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(d(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:n.label},"router-path-".concat(n.path))})},N=()=>(0,r.jsx)(b.A,{children:v.bw.map(e=>(0,r.jsx)(A,{navItem:e},"router-path-".concat(e.path)))});var S=n(71651),_=n(47982);let q=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},E="db-ui",I="mono",k=()=>{let e=(0,a.useRouter)(),[t,n]=(0,o.useState)(),[s,i]=(0,o.useState)(),c=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&i(r)},l=(e,t)=>{let r=[],a=[],s=[],i=[],o=[],c=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?o.push(e):e.startsWith("docs")?c.push(e):r.push(e);n({others:r,features:a,docs:c,refactors:i,issues:o,bugfixes:s,versions:e})};(0,o.useEffect)(()=>{(async()=>{let e=await q("https://api.github.com/repos/".concat(E,"/").concat(I,"/branches")),t=(await q("https://api.github.com/repos/".concat(E,"/").concat(I,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.push("latest"),c(n),c(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let d=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace((0,S.sanitize)("https://".concat(E,".github.io/").concat(I).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(_.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},R=e=>{var t,n;let{children:s,noNavigation:i}=e,[l,h]=(0,o.useState)(!1),[b,y]=(0,o.useState)(!1),[w,A]=(0,o.useState)(!1),[S,_]=(0,o.useState)(!1),[q,E]=(0,o.useState)(),[I,R]=(0,o.useState)(),[W,F]=(0,o.useState)(),[C,O]=(0,o.useState)(),P=(0,a.useRouter)();return(0,o.useEffect)(()=>{c.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.A.highlightAll()},[]),(0,o.useEffect)(()=>{if(P.query&&(P.query.fullscreen&&h("true"===P.query.fullscreen),P.query.page&&h(!0),P.query.noh1&&y("true"===P.query.noh1),P.query.properties&&A("true"===P.query.properties),P.query.current)){let t=Array.isArray(P.query.current)?P.query.current[0]:P.query.current;if(q!==t){var e;E(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=P.asPath.split("?")[0],{previous:n,next:r}=(0,v.Pb)(t);R(n),F(r),O((0,v.Oj)(t))},[P]),(0,r.jsxs)(r.Fragment,{children:[P.isReady&&l&&(0,r.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:s}),P.isReady&&!l&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(f.A,{drawerOpen:S,onToggle:_,brand:(0,r.jsx)(x.A,{children:"DB-UX"}),primaryAction:(0,r.jsx)(p.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(k,{}),children:(0,r.jsx)(N,{})}),children:[C&&C.length>1&&(0,r.jsx)(j.A,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==C?void 0:C.map(e=>{var t;return(0,r.jsxs)(o.Fragment,{children:["/"!==e.path&&(0,r.jsx)(m.A,{icon:"chevron_right"}),(0,r.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(j.A,{spacing:"none",width:"large",children:s}),!i&&(null!=I?I:W)&&(0,r.jsxs)(j.A,{width:"large",spacing:"small",className:"link-containers",children:[I&&(0,r.jsx)(d(),{className:"previous-link-container",href:null!==(t=I.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(g.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:I.label})]})}),W&&(0,r.jsx)(d(),{className:"next-link-container",href:null!==(n=W.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(g.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:W.label})]})})]})]})]})},W=i()(async()=>R,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>t(8117)),_N_E=e.O()}]);