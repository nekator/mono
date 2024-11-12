(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4584],{67169:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/stack/properties",function(){return n(14404)}])},14404:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(31085),s=n(71184),a=n(83952);let i=e=>{let{children:t}=e;return(0,r.jsx)(a.A,{children:t})};function c(e){let t={a:"a",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbstack",children:"DBStack"}),"\n",(0,r.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"children"}),(0,r.jsx)(t.td,{children:"default slot"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Options"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"className"}),(0,r.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"gap"}),(0,r.jsx)(t.td,{children:"Set the gap/spacing between elements"}),(0,r.jsx)(t.td,{children:"union"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:'"none" | "3x-large" | "2x-large" | "x-large" | "large" | "medium" | "small" | "x-small" | "2x-small" | "3x-small"'})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"variant"}),(0,r.jsx)(t.td,{children:'Change variant of stack. To use variant="divider" add a DBDivider after each element'}),(0,r.jsx)(t.td,{children:"union"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:'"simple" | "divider"'})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"direction"}),(0,r.jsx)(t.td,{children:'Set the direction of the stack. Defaults to "column"'}),(0,r.jsx)(t.td,{children:"union"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:'"row" | "column"'})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"alignment"}),(0,r.jsx)(t.td,{children:"Represents css align-items"}),(0,r.jsx)(t.td,{children:"union"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:'"stretch" | "start" | "end" | "center"'})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"justify-content / justifyContent"}),(0,r.jsx)(t.td,{children:"Represents css justify-content"}),(0,r.jsx)(t.td,{children:"union"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:'"space-between" | "start" | "end" | "center"'})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wrap"}),(0,r.jsx)(t.td,{children:"If the stack should wrap if parent is too small otherwise you get an overflow"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]})]})]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})})}},83952:(e,t,n)=>{"use strict";n.d(t,{A:()=>I});var r=n(31085),s=n(31242),a=n(83894),i=n.n(a),c=n(14041),l=n(30127),d=n(34747),o=n.n(d),h=n(5188);let u=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[s,a]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{a(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{a(!0)}):a(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(s),children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var x=n(23116),j=n(23944),p=n(95374),m=n(12764),f=n(80692),g=n(64286),v=n(32825),b=n(61338),y=n(6900);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:r}=n.query,s=Array.isArray(r)?r:[r];return t.path==="/components/".concat(s.join("/"))},N=e=>{var t;let{navItem:n}=e,a=(0,s.useRouter)(),i=w(a.pathname,n,a);return(0,r.jsx)(y.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(o(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:n.label},"router-path-".concat(n.path))})},A=()=>(0,r.jsx)(b.A,{children:v.bw.map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))});var S=n(97519),_=n(47982);let k=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},q="db-ui",E="mono",R=()=>{let e=(0,s.useRouter)(),[t,n]=(0,c.useState)(),[a,i]=(0,c.useState)(),l=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&i(r)},d=(e,t)=>{let r=[],s=[],a=[],i=[],c=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?a.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):r.push(e);n({others:r,features:s,docs:l,refactors:i,issues:c,bugfixes:a,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(q,"/").concat(E,"/branches")),t=(await k("https://api.github.com/repos/".concat(q,"/").concat(E,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.unshift("latest"),l(n),l(t),d(t,n)})().catch(e=>{console.error(e)})},[]);let o=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace((0,S.sanitize)("https://".concat(q,".github.io/").concat(E).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(_.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:a,onChange:e=>{o(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},D=e=>{var t,n;let{children:a,noNavigation:i}=e,[d,h]=(0,c.useState)(!1),[b,y]=(0,c.useState)(!1),[w,N]=(0,c.useState)(!1),[S,_]=(0,c.useState)(!1),[k,q]=(0,c.useState)(),[E,D]=(0,c.useState)(),[I,O]=(0,c.useState)(),[P,T]=(0,c.useState)(),W=(0,s.useRouter)();return(0,c.useEffect)(()=>{l.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.A.highlightAll()},[]),(0,c.useEffect)(()=>{if(W.query&&(W.query.fullscreen&&h("true"===W.query.fullscreen),W.query.page&&h(!0),W.query.noh1&&y("true"===W.query.noh1),W.query.properties&&N("true"===W.query.properties),W.query.current)){let t=Array.isArray(W.query.current)?W.query.current[0]:W.query.current;if(k!==t){var e;q(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=W.asPath.split("?")[0],{previous:n,next:r}=(0,v.Pb)(t);D(n),O(r),T((0,v.Oj)(t))},[W]),(0,r.jsxs)(r.Fragment,{children:[W.isReady&&d&&(0,r.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:a}),W.isReady&&!d&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(x.A,{drawerOpen:S,onToggle:_,brand:(0,r.jsx)(j.A,{children:"DB-UX"}),primaryAction:(0,r.jsx)(p.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(R,{}),children:(0,r.jsx)(A,{})}),children:[P&&P.length>1&&(0,r.jsx)(m.A,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==P?void 0:P.map(e=>{var t;return(0,r.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,r.jsx)(f.A,{icon:"chevron_right"}),(0,r.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(m.A,{spacing:"none",width:"large",children:a}),!i&&(null!=E?E:I)&&(0,r.jsxs)(m.A,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,r.jsx)(o(),{className:"previous-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(g.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),I&&(0,r.jsx)(o(),{className:"next-link-container",href:null!==(n=I.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(g.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:I.label})]})})]})]})]})},I=i()(async()=>D,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,8250,1446,2825,636,6593,8792],()=>t(67169)),_N_E=e.O()}]);