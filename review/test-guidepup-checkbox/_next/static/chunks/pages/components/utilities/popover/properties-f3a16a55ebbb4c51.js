(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5622],{60680:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/utilities/popover/properties",function(){return n(47959)}])},47959:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(52322),s=n(45392),a=n(53148);let i=e=>{let{children:t}=e;return(0,r.jsx)(a.Z,{children:t})};function c(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbpopover",children:"DBPopover"}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Options"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"open"}),(0,r.jsx)(t.td,{children:"Use open to disable the default hover/focus behaviour to use it on click or other trigger."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"trigger"}),(0,r.jsx)(t.td,{children:"The trigger to open the popover e.g. a button"}),(0,r.jsx)(t.td,{children:"unknown"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"children"}),(0,r.jsx)(t.td,{children:"default slot"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"className"}),(0,r.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"describedbyid"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",children:(0,r.jsx)(t.code,{children:"aria-describedby"})})," is used to link to the elements that describe the element with the set attribute."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"React specific for render process."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spacing"}),(0,r.jsx)(t.td,{children:"The spacing attribute changes the padding of the component."}),(0,r.jsx)(t.td,{children:"unknown[number]"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"placement"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.code,{children:"placement"})," attributes values change the position to absolute and adds a transform based on the placement."]}),(0,r.jsx)(t.td,{children:"unknown[number]"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"gap"}),(0,r.jsx)(t.td,{children:"If the absolute element should have a gap between the parent element."}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delay"}),(0,r.jsx)(t.td,{children:"Add a delay before showing the tooltip"}),(0,r.jsx)(t.td,{children:"unknown[number]"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"animation"}),(0,r.jsx)(t.td,{children:"Disable animation"}),(0,r.jsx)(t.td,{children:"unknown[number]"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"width"}),(0,r.jsx)(t.td,{children:"Use fixed with for default max-width"}),(0,r.jsx)(t.td,{children:"unknown[number]"}),(0,r.jsx)(t.td,{})]})]})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})})}},53148:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(52322),s=n(5632),a=n(25237),i=n.n(a),c=n(2784),d=n(61183),l=n(39097),o=n.n(l),h=n(43251);let u=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[s,a]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{a(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{a(!0)}):a(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":s,children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var x=n(82664),j=n(98310),p=n(10326),m=n(55327),f=n(74819),b=n(70741),g=n(92811),v=n(33759),y=n(39120);let w=(e,t)=>{var n;return"/"===t.path?"/"===e:e.includes("".concat(t.path,"/"))||e===t.path||!!(null===(n=t.subNavigation)||void 0===n?void 0:n.find(t=>e.includes("".concat(t.path,"/"))))},N=e=>{var t;let{navItem:n}=e,a=w((0,s.useRouter)().pathname,n);return(0,r.jsx)(y.Z,{active:a,backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(o(),{href:null!==(t=n.path)&&void 0!==t?t:"",children:n.label},"router-path-".concat(n.path))})};var k=()=>(0,r.jsx)(v.Z,{children:g.Z6.map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),Z=n(35368),_=n(79081);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},q="db-ui",E="mono";var I=()=>{let e=(0,s.useRouter)(),[t,n]=(0,c.useState)(),[a,i]=(0,c.useState)(),d=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&i(r)},l=(e,t)=>{let r=[],s=[],a=[],i=[],c=[],d=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?a.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?d.push(e):r.push(e);n({others:r,features:s,docs:d,refactors:i,issues:c,bugfixes:a,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(q,"/").concat(E,"/branches")),t=(await S("https://api.github.com/repos/".concat(q,"/").concat(E,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));d(n),d(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let o=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(q,".github.io/").concat(E).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(_.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:a,onChange:e=>{o(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null};let R=e=>{var t,n;let{children:a,noNavigation:i}=e,[l,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[w,N]=(0,c.useState)(!1),[Z,_]=(0,c.useState)(!1),[S,q]=(0,c.useState)(),[E,R]=(0,c.useState)(),[A,T]=(0,c.useState)(),[W,P]=(0,c.useState)(),O=(0,s.useRouter)();return(0,c.useEffect)(()=>{d.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),d.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(O.query&&(O.query.fullscreen&&h("true"===O.query.fullscreen),O.query.page&&h(!0),O.query.noh1&&y("true"===O.query.noh1),O.query.properties&&N("true"===O.query.properties),O.query.current)){let t=Array.isArray(O.query.current)?O.query.current[0]:O.query.current;if(S!==t){var e;q(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=O.asPath.split("?")[0],{previous:n,next:r}=(0,g.vn)(t);R(n),T(r),P((0,g.kn)(t))},[O]),(0,r.jsxs)(r.Fragment,{children:[O.isReady&&l&&(0,r.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:a}),O.isReady&&!l&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(x.Z,{drawerOpen:Z,onToggle:_,brand:(0,r.jsx)(j.Z,{children:"DB-UX"}),primaryAction:(0,r.jsx)(p.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(I,{}),children:(0,r.jsx)(k,{})}),children:[W&&W.length>1&&(0,r.jsx)(m.Z,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==W?void 0:W.map(e=>{var t;return(0,r.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,r.jsx)(f.Z,{icon:"chevron_right"}),(0,r.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(m.Z,{spacing:"none",width:"large",children:a}),!i&&(null!=E?E:A)&&(0,r.jsxs)(m.Z,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,r.jsx)(o(),{className:"previous-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(b.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),A&&(0,r.jsx)(o(),{className:"next-link-container",href:null!==(n=A.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(b.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:A.label})]})})]})]})]})};var A=i()(async()=>R,{ssr:!1})}},function(e){e.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return e(e.s=60680)}),_N_E=e.O()}]);