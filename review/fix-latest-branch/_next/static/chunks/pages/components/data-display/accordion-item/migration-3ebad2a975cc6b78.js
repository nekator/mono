(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4978],{49717:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/accordion-item/migration",function(){return n(70210)}])},22264:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(31085),s=n(71184);function a(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(t.h3,{id:"class",children:"class"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"cmp-accordion"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"db-accordion-item"})}),(0,r.jsx)(t.td,{children:"The old accordion was just 1 item, we split it to combine multiple accordion-items into 1 accordion (which is another component)"})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"props",children:"props"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"summary"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"headline"})}),(0,r.jsx)(t.td,{children:"The title/summary of the details element."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"emphasis"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"❌"}),(0,r.jsx)(t.td,{children:"❌"}),(0,r.jsx)(t.td,{children:"There is no emphasis anymore."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"size"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"❌"}),(0,r.jsx)(t.td,{children:"❌"}),(0,r.jsx)(t.td,{children:"Controlled by the density."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83C\uDD95"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"disabled"})}),(0,r.jsx)(t.td,{children:"Disable the component."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83C\uDD95"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"content"})}),(0,r.jsx)(t.td,{children:"Pass in a simple string as fallback to normal children/slot"})]})]})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},70210:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(31085),s=n(71184),a=n(83952),i=n(22264);let c=e=>{let{children:t}=e;return(0,r.jsx)(a.A,{children:t})};function l(e){let t={h1:"h1",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbaccordionitem-migration",children:"DBAccordionItem Migration"}),"\n",(0,r.jsx)(i.default,{})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(l,{...e})})}},83952:(e,t,n)=>{"use strict";n.d(t,{A:()=>B});var r=n(31085),s=n(31242),a=n(83894),i=n.n(a),c=n(14041),l=n(30127),d=n(34747),o=n.n(d),h=n(5188);let u=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[s,a]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{a(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{a(!0)}):a(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(s),children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var x=n(23116),j=n(23944),p=n(95374),m=n(12764),g=n(80692),f=n(64286),b=n(42372),v=n(61338),y=n(6900);let A=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:r}=n.query,s=Array.isArray(r)?r:[r];return t.path==="/components/".concat(s.join("/"))},w=e=>{var t;let{navItem:n}=e,a=(0,s.useRouter)(),i=A(a.pathname,n,a);return(0,r.jsx)(y.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(o(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:n.label},"router-path-".concat(n.path))})},N=()=>(0,r.jsx)(v.A,{children:b.bw.map(e=>(0,r.jsx)(w,{navItem:e},"router-path-".concat(e.path)))});var q=n(71651),_=n(47982);let k=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},S="db-ui",E="mono",R=()=>{let e=(0,s.useRouter)(),[t,n]=(0,c.useState)(),[a,i]=(0,c.useState)(),l=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&i(r)},d=(e,t)=>{let r=[],s=[],a=[],i=[],c=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?a.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):r.push(e);n({others:r,features:s,docs:l,refactors:i,issues:c,bugfixes:a,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(S,"/").concat(E,"/branches")),t=(await k("https://api.github.com/repos/".concat(S,"/").concat(E,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.push("latest"),l(n),l(t),d(t,n)})().catch(e=>{console.error(e)})},[]);let o=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace((0,q.sanitize)("https://".concat(S,".github.io/").concat(E).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(_.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:a,onChange:e=>{o(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},I=e=>{var t,n;let{children:a,noNavigation:i}=e,[d,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[A,w]=(0,c.useState)(!1),[q,_]=(0,c.useState)(!1),[k,S]=(0,c.useState)(),[E,I]=(0,c.useState)(),[B,F]=(0,c.useState)(),[D,P]=(0,c.useState)(),T=(0,s.useRouter)();return(0,c.useEffect)(()=>{l.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.A.highlightAll()},[]),(0,c.useEffect)(()=>{if(T.query&&(T.query.fullscreen&&h("true"===T.query.fullscreen),T.query.page&&h(!0),T.query.noh1&&y("true"===T.query.noh1),T.query.properties&&w("true"===T.query.properties),T.query.current)){let t=Array.isArray(T.query.current)?T.query.current[0]:T.query.current;if(k!==t){var e;S(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=T.asPath.split("?")[0],{previous:n,next:r}=(0,b.Pb)(t);I(n),F(r),P((0,b.Oj)(t))},[T]),(0,r.jsxs)(r.Fragment,{children:[T.isReady&&d&&(0,r.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(A?"is-properties":""),children:a}),T.isReady&&!d&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(x.A,{drawerOpen:q,onToggle:_,brand:(0,r.jsx)(j.A,{children:"DB-UX"}),primaryAction:(0,r.jsx)(p.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(R,{}),children:(0,r.jsx)(N,{})}),children:[D&&D.length>1&&(0,r.jsx)(m.A,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==D?void 0:D.map(e=>{var t;return(0,r.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,r.jsx)(g.A,{icon:"chevron_right"}),(0,r.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(m.A,{spacing:"none",width:"large",children:a}),!i&&(null!=E?E:B)&&(0,r.jsxs)(m.A,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,r.jsx)(o(),{className:"previous-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(f.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),B&&(0,r.jsx)(o(),{className:"next-link-container",href:null!==(n=B.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(f.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:B.label})]})})]})]})]})},B=i()(async()=>I,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>t(49717)),_N_E=e.O()}]);