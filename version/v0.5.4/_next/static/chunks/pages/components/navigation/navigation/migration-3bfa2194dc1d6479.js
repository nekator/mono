(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1419],{11347:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/navigation/migration",function(){return n(14131)}])},34929:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(31085),a=n(71184);function s(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(t.h3,{id:"class",children:"class"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"cmp-mainnavigation"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"db-navigation"})}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"children",children:"children"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"data"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"❌"}),(0,r.jsx)(t.td,{children:"❌"}),(0,r.jsxs)(t.td,{children:["pass data via ",(0,r.jsx)(t.code,{children:"children"})," / ",(0,r.jsx)(t.code,{children:"slot"}),", moved a lot of the features to ",(0,r.jsx)(t.code,{children:"db-header"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"siteName"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"❌"}),(0,r.jsx)(t.td,{children:"❌"}),(0,r.jsx)(t.td,{})]})]})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},14131:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(31085),a=n(71184),s=n(83952),i=n(34929);let c=e=>{let{children:t}=e;return(0,r.jsx)(s.A,{children:t})};function l(e){let t={h1:"h1",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbnavigation-migration",children:"DBNavigation Migration"}),"\n",(0,r.jsx)(i.default,{})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(l,{...e})})}},83952:(e,t,n)=>{"use strict";n.d(t,{A:()=>F});var r=n(31085),a=n(31242),s=n(83894),i=n.n(s),c=n(14041),l=n(30127),d=n(34747),o=n.n(d),h=n(5188);let u=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[a,s]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(a),children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var x=n(23116),j=n(23944),p=n(95374),m=n(12764),g=n(80692),f=n(64286),v=n(42372),b=n(61338),y=n(6900);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:r}=n.query,a=Array.isArray(r)?r:[r];return t.path==="/components/".concat(a.join("/"))},A=e=>{var t;let{navItem:n}=e,s=(0,a.useRouter)(),i=w(s.pathname,n,s);return(0,r.jsx)(y.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(A,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(o(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:n.label},"router-path-".concat(n.path))})},N=()=>(0,r.jsx)(b.A,{children:v.bw.map(e=>(0,r.jsx)(A,{navItem:e},"router-path-".concat(e.path)))});var q=n(71651),_=n(47982);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},k="db-ui",E="mono",R=()=>{let e=(0,a.useRouter)(),[t,n]=(0,c.useState)(),[s,i]=(0,c.useState)(),l=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&i(r)},d=(e,t)=>{let r=[],a=[],s=[],i=[],c=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):r.push(e);n({others:r,features:a,docs:l,refactors:i,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(k,"/").concat(E,"/branches")),t=(await S("https://api.github.com/repos/".concat(k,"/").concat(E,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.unshift("latest"),l(n),l(t),d(t,n)})().catch(e=>{console.error(e)})},[]);let o=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace((0,q.sanitize)("https://".concat(k,".github.io/").concat(E).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(_.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{o(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},B=e=>{var t,n;let{children:s,noNavigation:i}=e,[d,h]=(0,c.useState)(!1),[b,y]=(0,c.useState)(!1),[w,A]=(0,c.useState)(!1),[q,_]=(0,c.useState)(!1),[S,k]=(0,c.useState)(),[E,B]=(0,c.useState)(),[F,I]=(0,c.useState)(),[D,O]=(0,c.useState)(),P=(0,a.useRouter)();return(0,c.useEffect)(()=>{l.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.A.highlightAll()},[]),(0,c.useEffect)(()=>{if(P.query&&(P.query.fullscreen&&h("true"===P.query.fullscreen),P.query.page&&h(!0),P.query.noh1&&y("true"===P.query.noh1),P.query.properties&&A("true"===P.query.properties),P.query.current)){let t=Array.isArray(P.query.current)?P.query.current[0]:P.query.current;if(S!==t){var e;k(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=P.asPath.split("?")[0],{previous:n,next:r}=(0,v.Pb)(t);B(n),I(r),O((0,v.Oj)(t))},[P]),(0,r.jsxs)(r.Fragment,{children:[P.isReady&&d&&(0,r.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:s}),P.isReady&&!d&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(x.A,{drawerOpen:q,onToggle:_,brand:(0,r.jsx)(j.A,{children:"DB-UX"}),primaryAction:(0,r.jsx)(p.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(R,{}),children:(0,r.jsx)(N,{})}),children:[D&&D.length>1&&(0,r.jsx)(m.A,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==D?void 0:D.map(e=>{var t;return(0,r.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,r.jsx)(g.A,{icon:"chevron_right"}),(0,r.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(m.A,{spacing:"none",width:"large",children:s}),!i&&(null!=E?E:F)&&(0,r.jsxs)(m.A,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,r.jsx)(o(),{className:"previous-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(f.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),F&&(0,r.jsx)(o(),{className:"next-link-container",href:null!==(n=F.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(f.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:F.label})]})})]})]})]})},F=i()(async()=>B,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>t(11347)),_N_E=e.O()}]);