(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4830],{773:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tooltip/properties",function(){return n(43861)}])},43861:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(52322),s=n(45392),a=n(50115);let i=e=>{let{children:t}=e;return(0,r.jsx)(a.Z,{children:t})};function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbtooltip",children:"DBTooltip"}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Options"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"variant"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"unknown[number]"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"children"}),(0,r.jsx)(t.td,{children:"default slot"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"className"}),(0,r.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"class"}),(0,r.jsx)(t.td,{children:"Workaround for TypeScript using class for all components."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"describedbyid"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",children:(0,r.jsx)(t.code,{children:"aria-describedby"})})," is used to link to the elements that describe the element with the set attribute."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"React specific for render process."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"emphasis"}),(0,r.jsx)(t.td,{children:"The emphasis attribute divides in between a weak or strong importance."}),(0,r.jsx)(t.td,{children:"unknown[number]"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"placement"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.code,{children:"placement"})," attributes values change the position to absolute and adds a transform based on the placement."]}),(0,r.jsx)(t.td,{children:"unknown[number]"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delay"}),(0,r.jsx)(t.td,{children:"Add a delay before showing the tooltip"}),(0,r.jsx)(t.td,{children:"unknown[number]"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"animation"}),(0,r.jsx)(t.td,{children:"Disable animation"}),(0,r.jsx)(t.td,{children:"unknown[number]"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"width"}),(0,r.jsx)(t.td,{children:"Use fixed with for default max-width"}),(0,r.jsx)(t.td,{children:"unknown[number]"}),(0,r.jsx)(t.td,{})]})]})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})})}},50115:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var r=n(52322),s=n(5632),a=n(25237),i=n.n(a),d=n(2784),c=n(61183),l=n(39097),o=n.n(l),h=n(98072);let u=(0,d.forwardRef)(function(e,t){let n=t||(0,d.useRef)(t),[s,a]=(0,d.useState)(()=>!1),i=(0,d.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,d.useEffect)(()=>{a(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{a(!0)}):a(!0)},[]),(0,d.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":s,children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var x=n(68908),j=n(48483),p=n(90434),m=n(97689),f=n(85803),b=n(72288),g=n(76460),v=n(40245),y=n(29469);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:r}=n.query,s=Array.isArray(r)?r:[r];return t.path==="/components/".concat(s.join("/"))},N=e=>{var t;let{navItem:n}=e,a=(0,s.useRouter)(),i=w(a.pathname,n,a);return(0,r.jsx)(y.Z,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(o(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:n.label},"router-path-".concat(n.path))})},k=()=>(0,r.jsx)(v.Z,{children:g.Z6.map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))});var S=n(35368),Z=n(9842);let _=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},q="db-ui",E="mono",A=()=>{let e=(0,s.useRouter)(),[t,n]=(0,d.useState)(),[a,i]=(0,d.useState)(),c=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&i(r)},l=(e,t)=>{let r=[],s=[],a=[],i=[],d=[],c=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?a.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?d.push(e):e.startsWith("docs")?c.push(e):r.push(e);n({others:r,features:s,docs:c,refactors:i,issues:d,bugfixes:a,versions:e})};(0,d.useEffect)(()=>{(async()=>{let e=await _("https://api.github.com/repos/".concat(q,"/").concat(E,"/branches")),t=(await _("https://api.github.com/repos/".concat(q,"/").concat(E,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(n),c(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let o=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,S.sanitize)("https://".concat(q,".github.io/").concat(E).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(Z.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:a,onChange:e=>{o(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},R=e=>{var t,n;let{children:a,noNavigation:i}=e,[l,h]=(0,d.useState)(!1),[v,y]=(0,d.useState)(!1),[w,N]=(0,d.useState)(!1),[S,Z]=(0,d.useState)(!1),[_,q]=(0,d.useState)(),[E,R]=(0,d.useState)(),[T,I]=(0,d.useState)(),[W,O]=(0,d.useState)(),P=(0,s.useRouter)();return(0,d.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,d.useEffect)(()=>{if(P.query&&(P.query.fullscreen&&h("true"===P.query.fullscreen),P.query.page&&h(!0),P.query.noh1&&y("true"===P.query.noh1),P.query.properties&&N("true"===P.query.properties),P.query.current)){let t=Array.isArray(P.query.current)?P.query.current[0]:P.query.current;if(_!==t){var e;q(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=P.asPath.split("?")[0],{previous:n,next:r}=(0,g.vn)(t);R(n),I(r),O((0,g.kn)(t))},[P]),(0,r.jsxs)(r.Fragment,{children:[P.isReady&&l&&(0,r.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:a}),P.isReady&&!l&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(x.Z,{drawerOpen:S,onToggle:Z,brand:(0,r.jsx)(j.Z,{children:"DB-UX"}),primaryAction:(0,r.jsx)(p.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(A,{}),children:(0,r.jsx)(k,{})}),children:[W&&W.length>1&&(0,r.jsx)(m.Z,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==W?void 0:W.map(e=>{var t;return(0,r.jsxs)(d.Fragment,{children:["/"!==e.path&&(0,r.jsx)(f.Z,{icon:"chevron_right"}),(0,r.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(m.Z,{spacing:"none",width:"large",children:a}),!i&&(null!=E?E:T)&&(0,r.jsxs)(m.Z,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,r.jsx)(o(),{className:"previous-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(b.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),T&&(0,r.jsx)(o(),{className:"next-link-container",href:null!==(n=T.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(b.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:T.label})]})})]})]})]})},T=i()(async()=>R,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3430,1954,4540,6460,2888,9774,179],()=>t(773)),_N_E=e.O()}]);