(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2106],{44901:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/feedback/badge/properties",function(){return r(15946)}])},15946:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(31085),s=r(71184),a=r(83952);let i=e=>{let{children:t}=e;return(0,n.jsx)(a.A,{children:t})};function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"dbbadge",children:"DBBadge"}),"\n",(0,n.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"children"}),(0,n.jsx)(t.td,{children:"default slot"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Options"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"placement"}),(0,n.jsxs)(t.td,{children:["The ",(0,n.jsx)(t.code,{children:"placement"})," attributes ",(0,n.jsx)(t.code,{children:"corner-*"})," values change the position to absolute and adds a transform based on the placement."]}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:'"inline" | "corner-top-left" | "corner-top-right" | "corner-center-left" | "corner-center-right" | "corner-bottom-left" | "corner-bottom-right"'})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"className"}),(0,n.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"semantic"}),(0,n.jsx)(t.td,{children:"The semantic defines the default variants for most components."}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:'"adaptive" | "neutral" | "critical" | "informational" | "warning" | "successful"'})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"size"}),(0,n.jsx)(t.td,{children:"The size attribute changes the font-size and other related sizes of the component."}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:'"small" | "medium"'})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"emphasis"}),(0,n.jsx)(t.td,{children:"The emphasis attribute divides in between a weak or strong importance."}),(0,n.jsx)(t.td,{children:"union"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"code-pre-wrap",children:'"weak" | "strong"'})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"label"}),(0,n.jsxs)(t.td,{children:["Describes the badge for a11y if you use placement attribute with ",(0,n.jsx)(t.code,{children:"corner-*"})]}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{})]})]})]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})})}},83952:(e,t,r)=>{"use strict";r.d(t,{A:()=>I});var n=r(31085),s=r(31242),a=r(83894),i=r.n(a),c=r(14041),l=r(30127),d=r(34747),o=r.n(d),h=r(5188);let u=(0,c.forwardRef)(function(e,t){let r=t||(0,c.useRef)(t),[s,a]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{a(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{a(!0)}):a(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,n.jsxs)("div",{ref:r,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(s),children:[(0,n.jsx)(n.Fragment,{children:e.header}),(0,n.jsx)("main",{className:"db-main",children:e.children}),(0,n.jsx)(n.Fragment,{children:e.footer})]})});var x=r(23116),j=r(23944),p=r(95374),m=r(12764),f=r(80692),g=r(64286),b=r(42372),v=r(61338),y=r(6900);let w=(e,t,r)=>{if(!r.query.slug)return t.path===r.pathname;let{slug:n}=r.query,s=Array.isArray(n)?n:[n];return t.path==="/components/".concat(s.join("/"))},N=e=>{var t;let{navItem:r}=e,a=(0,s.useRouter)(),i=w(a.pathname,r,a);return(0,n.jsx)(y.A,{backButtonText:"Back to ".concat(r.label),subNavigation:r.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==r?void 0:r.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,n.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:r.subNavigation?r.label:(0,n.jsx)(o(),{href:null!==(t=r.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:r.label},"router-path-".concat(r.path))})},A=()=>(0,n.jsx)(v.A,{children:b.bw.map(e=>(0,n.jsx)(N,{navItem:e},"router-path-".concat(e.path)))});var _=r(97519),q=r(47982);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},E="db-ui",k="mono",T=()=>{let e=(0,s.useRouter)(),[t,r]=(0,c.useState)(),[a,i]=(0,c.useState)(),l=t=>{let r=e.basePath,n=t.find(e=>r.includes(e));n&&i(n)},d=(e,t)=>{let n=[],s=[],a=[],i=[],c=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?a.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):n.push(e);r({others:n,features:s,docs:l,refactors:i,issues:c,bugfixes:a,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(E,"/").concat(k,"/branches")),t=(await S("https://api.github.com/repos/".concat(E,"/").concat(k,"/tags"))).map(e=>e.name),r=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.unshift("latest"),l(r),l(t),d(t,r)})().catch(e=>{console.error(e)})},[]);let o=t=>{let r=e.asPath,n=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace(_.A.sanitize("https://".concat(E,".github.io/").concat(k).concat(n?"/version":"/review","/").concat(t).concat(r)))};return t?(0,n.jsx)(q.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:a,onChange:e=>{o(e.target.value)},children:Object.entries(t).filter(e=>{let[t,r]=e;return(null==r?void 0:r.length)>0}).map(e=>{let[t,r]=e;return(0,n.jsx)("optgroup",{label:t,children:r.slice(0,15).map((e,r)=>(0,n.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(r)))},t)})}):null},R=e=>{var t,r;let{children:a,noNavigation:i}=e,[d,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[w,N]=(0,c.useState)(!1),[_,q]=(0,c.useState)(!1),[S,E]=(0,c.useState)(),[k,R]=(0,c.useState)(),[I,O]=(0,c.useState)(),[P,W]=(0,c.useState)(),D=(0,s.useRouter)();return(0,c.useEffect)(()=>{l.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.A.highlightAll()},[]),(0,c.useEffect)(()=>{if(D.query&&(D.query.fullscreen&&h("true"===D.query.fullscreen),D.query.page&&h(!0),D.query.noh1&&y("true"===D.query.noh1),D.query.properties&&N("true"===D.query.properties),D.query.current)){let t=Array.isArray(D.query.current)?D.query.current[0]:D.query.current;if(S!==t){var e;E(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=D.asPath.split("?")[0],{previous:r,next:n}=(0,b.Pb)(t);R(r),O(n),W((0,b.Oj)(t))},[D]),(0,n.jsxs)(n.Fragment,{children:[D.isReady&&d&&(0,n.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:a}),D.isReady&&!d&&(0,n.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,n.jsx)(x.A,{drawerOpen:_,onToggle:q,brand:(0,n.jsx)(j.A,{children:"DB-UX"}),primaryAction:(0,n.jsx)(p.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,n.jsx)(T,{}),children:(0,n.jsx)(A,{})}),children:[P&&P.length>1&&(0,n.jsx)(m.A,{spacing:"none",width:"large",children:(0,n.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==P?void 0:P.map(e=>{var t;return(0,n.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,n.jsx)(f.A,{icon:"chevron_right"}),(0,n.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,n.jsx)(m.A,{spacing:"none",width:"large",children:a}),!i&&(null!=k?k:I)&&(0,n.jsxs)(m.A,{width:"large",spacing:"small",className:"link-containers",children:[k&&(0,n.jsx)(o(),{className:"previous-link-container",href:null!==(t=k.path)&&void 0!==t?t:"/",children:(0,n.jsxs)(g.A,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Previous"}),(0,n.jsx)("span",{"data-icon":"arrow_left",children:k.label})]})}),I&&(0,n.jsx)(o(),{className:"next-link-container",href:null!==(r=I.path)&&void 0!==r?r:"/",children:(0,n.jsxs)(g.A,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Next"}),(0,n.jsx)("span",{"data-icon-after":"arrow_right",children:I.label})]})})]})]})]})},I=i()(async()=>R,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,8250,8367,2372,636,6593,8792],()=>t(44901)),_N_E=e.O()}]);