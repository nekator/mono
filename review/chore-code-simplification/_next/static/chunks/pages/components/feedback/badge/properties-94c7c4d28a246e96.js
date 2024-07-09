(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{10882:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/feedback/badge/properties",function(){return n(47036)}])},47036:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(52322),r=n(45392),a=n(53148);let i=e=>{let{children:t}=e;return(0,s.jsx)(a.Z,{children:t})};function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"dbbadge",children:"DBBadge"}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Options"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"placement"}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.code,{children:"placement"})," attributes ",(0,s.jsx)(t.code,{children:"corner-*"})," values change the position to absolute and adds a transform based on the placement."]}),(0,s.jsx)(t.td,{children:"unknown[number]"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"label"}),(0,s.jsxs)(t.td,{children:["Describes the badge for a11y if you use placement attribute with ",(0,s.jsx)(t.code,{children:"corner-*"})]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"children"}),(0,s.jsx)(t.td,{children:"default slot"}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"className"}),(0,s.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"describedbyid"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",children:(0,s.jsx)(t.code,{children:"aria-describedby"})})," is used to link to the elements that describe the element with the set attribute."]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"key"}),(0,s.jsx)(t.td,{children:"React specific for render process."}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"semantic"}),(0,s.jsx)(t.td,{children:"The semantic defines the default variants for most components."}),(0,s.jsx)(t.td,{children:"unknown[number]"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"size"}),(0,s.jsx)(t.td,{children:"The size attribute changes the font-size and other related sizes of the component."}),(0,s.jsx)(t.td,{children:"unknown[number]"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"emphasis"}),(0,s.jsx)(t.td,{children:"The emphasis attribute divides in between a weak or strong importance."}),(0,s.jsx)(t.td,{children:"unknown[number]"}),(0,s.jsx)(t.td,{})]})]})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})})}},53148:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var s=n(52322),r=n(5632),a=n(25237),i=n.n(a),c=n(2784),d=n(61183),l=n(39097),o=n.n(l),h=n(43251);let u=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[r,a]=(0,c.useState)(()=>!1);return(0,c.useEffect)(()=>{document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document")},[]),(0,c.useEffect)(()=>{a(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{a(!0)}):a(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,s.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":r,children:[(0,s.jsx)(s.Fragment,{children:e.header}),(0,s.jsx)("main",{className:"db-main",children:e.children}),(0,s.jsx)(s.Fragment,{children:e.footer})]})});var x=n(82664),j=n(98310),p=n(10326),m=n(55327),f=n(74819),b=n(70741),g=n(92811),v=n(33759),y=n(39120);let w=(e,t)=>{var n;return"/"===t.path?"/"===e:e.includes("".concat(t.path,"/"))||e===t.path||!!(null===(n=t.subNavigation)||void 0===n?void 0:n.find(t=>e.includes("".concat(t.path,"/"))))},N=e=>{var t;let{navItem:n}=e,a=w((0,r.useRouter)().pathname,n);return(0,s.jsx)(y.Z,{active:a,backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,s.jsx)(s.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,s.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,s.jsx)(o(),{href:null!==(t=n.path)&&void 0!==t?t:"",children:n.label},"router-path-".concat(n.path))})};var k=()=>(0,s.jsx)(v.Z,{children:g.Z6.map(e=>(0,s.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),Z=n(35368),_=n(79081);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},E="db-ui",q="mono";var I=()=>{let e=(0,r.useRouter)(),[t,n]=(0,c.useState)(),[a,i]=(0,c.useState)(),d=t=>{let n=e.basePath,s=t.find(e=>n.includes(e));s&&i(s)},l=(e,t)=>{let s=[],r=[],a=[],i=[],c=[],d=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?a.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?d.push(e):s.push(e);n({others:s,features:r,docs:d,refactors:i,issues:c,bugfixes:a,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(E,"/").concat(q,"/branches")),t=(await S("https://api.github.com/repos/".concat(E,"/").concat(q,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));d(n),d(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let o=t=>{let n=e.pathname,s=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(E,".github.io/").concat(q).concat(s?"/version":"/review","/").concat(t).concat(n)))};return t?(0,s.jsx)(_.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:a,onChange:e=>{o(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,s.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,s.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null};let T=e=>{var t,n;let{children:a,noNavigation:i}=e,[l,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[w,N]=(0,c.useState)(!1),[Z,_]=(0,c.useState)(!1),[S,E]=(0,c.useState)(),[q,T]=(0,c.useState)(),[R,A]=(0,c.useState)(),[W,z]=(0,c.useState)(),O=(0,r.useRouter)();return(0,c.useEffect)(()=>{d.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),d.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(O.query&&(O.query.fullscreen&&h("true"===O.query.fullscreen),O.query.page&&h(!0),O.query.noh1&&y("true"===O.query.noh1),O.query.properties&&N("true"===O.query.properties),O.query.current)){let t=Array.isArray(O.query.current)?O.query.current[0]:O.query.current;if(S!==t){var e;E(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=O.asPath.split("?")[0],{previous:n,next:s}=(0,g.vn)(t);T(n),A(s),z((0,g.kn)(t))},[O]),(0,s.jsxs)(s.Fragment,{children:[O.isReady&&l&&(0,s.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:a}),O.isReady&&!l&&(0,s.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,s.jsx)(x.Z,{drawerOpen:Z,onToggle:_,brand:(0,s.jsx)(j.Z,{children:"DB-UI Mono"}),primaryAction:(0,s.jsx)(p.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,s.jsx)(I,{}),children:(0,s.jsx)(k,{})}),children:[W&&W.length>1&&(0,s.jsx)(m.Z,{spacing:"none",width:"large",children:(0,s.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==W?void 0:W.map(e=>{var t;return(0,s.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,s.jsx)(f.Z,{icon:"chevron_right"}),(0,s.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,s.jsx)(m.Z,{spacing:"none",width:"large",children:a}),!i&&(null!=q?q:R)&&(0,s.jsxs)(m.Z,{width:"large",spacing:"small",className:"link-containers",children:[q&&(0,s.jsx)(o(),{className:"previous-link-container",href:null!==(t=q.path)&&void 0!==t?t:"/",children:(0,s.jsxs)(b.Z,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Previous"}),(0,s.jsx)("span",{"data-icon":"arrow_left",children:q.label})]})}),R&&(0,s.jsx)(o(),{className:"next-link-container",href:null!==(n=R.path)&&void 0!==n?n:"/",children:(0,s.jsxs)(b.Z,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Next"}),(0,s.jsx)("span",{"data-icon-after":"arrow_right",children:R.label})]})})]})]})]})};var R=i()(async()=>T,{ssr:!1})}},function(e){e.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return e(e.s=10882)}),_N_E=e.O()}]);