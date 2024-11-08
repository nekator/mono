(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2106],{44901:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/feedback/badge/properties",function(){return n(15946)}])},15946:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var s=n(31085),r=n(71184),a=n(83952);let i=e=>{let{children:t}=e;return(0,s.jsx)(a.A,{children:t})};function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"dbbadge",children:"DBBadge"}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Options"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"placement"}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.code,{children:"placement"})," attributes ",(0,s.jsx)(t.code,{children:"corner-*"})," values change the position to absolute and adds a transform based on the placement."]}),(0,s.jsx)(t.td,{children:"unknown[number]"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"label"}),(0,s.jsxs)(t.td,{children:["Describes the badge for a11y if you use placement attribute with ",(0,s.jsx)(t.code,{children:"corner-*"})]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"children"}),(0,s.jsx)(t.td,{children:"default slot"}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"className"}),(0,s.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"class"}),(0,s.jsx)(t.td,{children:"Workaround for TypeScript using class for all components."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"describedbyid"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",children:(0,s.jsx)(t.code,{children:"aria-describedby"})})," is used to link to the elements that describe the element with the set attribute."]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"key"}),(0,s.jsx)(t.td,{children:"React specific for render process."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"semantic"}),(0,s.jsx)(t.td,{children:"The semantic defines the default variants for most components."}),(0,s.jsx)(t.td,{children:"unknown[number]"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"size"}),(0,s.jsx)(t.td,{children:"The size attribute changes the font-size and other related sizes of the component."}),(0,s.jsx)(t.td,{children:"unknown[number]"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"emphasis"}),(0,s.jsx)(t.td,{children:"The emphasis attribute divides in between a weak or strong importance."}),(0,s.jsx)(t.td,{children:"unknown[number]"}),(0,s.jsx)(t.td,{})]})]})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})})}},83952:(e,t,n)=>{"use strict";n.d(t,{A:()=>W});var s=n(31085),r=n(31242),a=n(83894),i=n.n(a),c=n(14041),d=n(30127),l=n(34747),o=n.n(l),h=n(5188);let u=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[r,a]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{a(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{a(!0)}):a(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,s.jsxs)("div",{ref:n,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(r),children:[(0,s.jsx)(s.Fragment,{children:e.header}),(0,s.jsx)("main",{className:"db-main",children:e.children}),(0,s.jsx)(s.Fragment,{children:e.footer})]})});var x=n(23116),j=n(23944),p=n(95374),m=n(12764),f=n(80692),b=n(64286),g=n(42372),v=n(61338),y=n(6900);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:s}=n.query,r=Array.isArray(s)?s:[s];return t.path==="/components/".concat(r.join("/"))},A=e=>{var t;let{navItem:n}=e,a=(0,r.useRouter)(),i=w(a.pathname,n,a);return(0,s.jsx)(y.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,s.jsx)(s.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,s.jsx)(A,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,s.jsx)(o(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:n.label},"router-path-".concat(n.path))})},N=()=>(0,s.jsx)(v.A,{children:g.bw.map(e=>(0,s.jsx)(A,{navItem:e},"router-path-".concat(e.path)))});var k=n(71651),_=n(47982);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},q="db-ui",E="mono",R=()=>{let e=(0,r.useRouter)(),[t,n]=(0,c.useState)(),[a,i]=(0,c.useState)(),d=t=>{let n=e.basePath,s=t.find(e=>n.includes(e));s&&i(s)},l=(e,t)=>{let s=[],r=[],a=[],i=[],c=[],d=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?a.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?d.push(e):s.push(e);n({others:s,features:r,docs:d,refactors:i,issues:c,bugfixes:a,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(q,"/").concat(E,"/branches")),t=(await S("https://api.github.com/repos/".concat(q,"/").concat(E,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));d(n),d(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let o=t=>{let n=e.asPath,s=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,k.sanitize)("https://".concat(q,".github.io/").concat(E).concat(s?"/version":"/review","/").concat(t).concat(n)))};return t?(0,s.jsx)(_.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:a,onChange:e=>{o(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,s.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,s.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},T=e=>{var t,n;let{children:a,noNavigation:i}=e,[l,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[w,A]=(0,c.useState)(!1),[k,_]=(0,c.useState)(!1),[S,q]=(0,c.useState)(),[E,T]=(0,c.useState)(),[W,I]=(0,c.useState)(),[O,P]=(0,c.useState)(),z=(0,r.useRouter)();return(0,c.useEffect)(()=>{d.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),d.A.highlightAll()},[]),(0,c.useEffect)(()=>{if(z.query&&(z.query.fullscreen&&h("true"===z.query.fullscreen),z.query.page&&h(!0),z.query.noh1&&y("true"===z.query.noh1),z.query.properties&&A("true"===z.query.properties),z.query.current)){let t=Array.isArray(z.query.current)?z.query.current[0]:z.query.current;if(S!==t){var e;q(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=z.asPath.split("?")[0],{previous:n,next:s}=(0,g.Pb)(t);T(n),I(s),P((0,g.Oj)(t))},[z]),(0,s.jsxs)(s.Fragment,{children:[z.isReady&&l&&(0,s.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:a}),z.isReady&&!l&&(0,s.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,s.jsx)(x.A,{drawerOpen:k,onToggle:_,brand:(0,s.jsx)(j.A,{children:"DB-UX"}),primaryAction:(0,s.jsx)(p.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,s.jsx)(R,{}),children:(0,s.jsx)(N,{})}),children:[O&&O.length>1&&(0,s.jsx)(m.A,{spacing:"none",width:"large",children:(0,s.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==O?void 0:O.map(e=>{var t;return(0,s.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,s.jsx)(f.A,{icon:"chevron_right"}),(0,s.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,s.jsx)(m.A,{spacing:"none",width:"large",children:a}),!i&&(null!=E?E:W)&&(0,s.jsxs)(m.A,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,s.jsx)(o(),{className:"previous-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,s.jsxs)(b.A,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Previous"}),(0,s.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),W&&(0,s.jsx)(o(),{className:"next-link-container",href:null!==(n=W.path)&&void 0!==n?n:"/",children:(0,s.jsxs)(b.A,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Next"}),(0,s.jsx)("span",{"data-icon-after":"arrow_right",children:W.label})]})})]})]})]})},W=i()(async()=>T,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>t(44901)),_N_E=e.O()}]);