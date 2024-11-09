(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7806],{66229:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-input/switch/migration",function(){return n(29614)}])},69948:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(31085),s=n(71184);function a(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(t.h3,{id:"class",children:"class"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"elm-toggle"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"db-switch"})}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"id",children:"id"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"htmlid"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"id"})}),(0,r.jsx)(t.td,{})]})})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},29614:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(31085),s=n(71184),a=n(83952),c=n(69948);let i=e=>{let{children:t}=e;return(0,r.jsx)(a.A,{children:t})};function l(e){let t={h1:"h1",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbswitch-migration",children:"DBSwitch Migration"}),"\n",(0,r.jsx)(c.default,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})})}},83952:(e,t,n)=>{"use strict";n.d(t,{A:()=>F});var r=n(31085),s=n(31242),a=n(83894),c=n.n(a),i=n(14041),l=n(30127),o=n(34747),d=n.n(o),h=n(5188);let u=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t),[s,a]=(0,i.useState)(()=>!1),c=(0,i.useRef)(!1);return c.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),c.current=!0),(0,i.useEffect)(()=>{a(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{a(!0)}):a(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(s),children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var x=n(23116),p=n(23944),j=n(95374),m=n(12764),g=n(80692),f=n(64286),b=n(42372),v=n(61338),y=n(6900);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:r}=n.query,s=Array.isArray(r)?r:[r];return t.path==="/components/".concat(s.join("/"))},A=e=>{var t;let{navItem:n}=e,a=(0,s.useRouter)(),c=w(a.pathname,n,a);return(0,r.jsx)(y.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(A,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(d(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":c?"page":void 0,children:n.label},"router-path-".concat(n.path))})},N=()=>(0,r.jsx)(v.A,{children:b.bw.map(e=>(0,r.jsx)(A,{navItem:e},"router-path-".concat(e.path)))});var q=n(71651),S=n(47982);let _=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},k="db-ui",E="mono",R=()=>{let e=(0,s.useRouter)(),[t,n]=(0,i.useState)(),[a,c]=(0,i.useState)(),l=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&c(r)},o=(e,t)=>{let r=[],s=[],a=[],c=[],i=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?a.push(e):e.startsWith("refactor")?c.push(e):/^\d*-/.test(e)?i.push(e):e.startsWith("docs")?l.push(e):r.push(e);n({others:r,features:s,docs:l,refactors:c,issues:i,bugfixes:a,versions:e})};(0,i.useEffect)(()=>{(async()=>{let e=await _("https://api.github.com/repos/".concat(k,"/").concat(E,"/branches")),t=(await _("https://api.github.com/repos/".concat(k,"/").concat(E,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.push("latest"),console.log("branches",n),console.log("tags",t),l(n),l(t),o(t,n)})().catch(e=>{console.error(e)})},[]);let d=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace((0,q.sanitize)("https://".concat(k,".github.io/").concat(E).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(S.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:a,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},B=e=>{var t,n;let{children:a,noNavigation:c}=e,[o,h]=(0,i.useState)(!1),[v,y]=(0,i.useState)(!1),[w,A]=(0,i.useState)(!1),[q,S]=(0,i.useState)(!1),[_,k]=(0,i.useState)(),[E,B]=(0,i.useState)(),[F,I]=(0,i.useState)(),[D,O]=(0,i.useState)(),P=(0,s.useRouter)();return(0,i.useEffect)(()=>{l.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.A.highlightAll()},[]),(0,i.useEffect)(()=>{if(P.query&&(P.query.fullscreen&&h("true"===P.query.fullscreen),P.query.page&&h(!0),P.query.noh1&&y("true"===P.query.noh1),P.query.properties&&A("true"===P.query.properties),P.query.current)){let t=Array.isArray(P.query.current)?P.query.current[0]:P.query.current;if(_!==t){var e;k(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=P.asPath.split("?")[0],{previous:n,next:r}=(0,b.Pb)(t);B(n),I(r),O((0,b.Oj)(t))},[P]),(0,r.jsxs)(r.Fragment,{children:[P.isReady&&o&&(0,r.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:a}),P.isReady&&!o&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(x.A,{drawerOpen:q,onToggle:S,brand:(0,r.jsx)(p.A,{children:"DB-UX"}),primaryAction:(0,r.jsx)(j.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(R,{}),children:(0,r.jsx)(N,{})}),children:[D&&D.length>1&&(0,r.jsx)(m.A,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==D?void 0:D.map(e=>{var t;return(0,r.jsxs)(i.Fragment,{children:["/"!==e.path&&(0,r.jsx)(g.A,{icon:"chevron_right"}),(0,r.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(m.A,{spacing:"none",width:"large",children:a}),!c&&(null!=E?E:F)&&(0,r.jsxs)(m.A,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,r.jsx)(d(),{className:"previous-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(f.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),F&&(0,r.jsx)(d(),{className:"next-link-container",href:null!==(n=F.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(f.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:F.label})]})})]})]})]})},F=c()(async()=>B,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>t(66229)),_N_E=e.O()}]);