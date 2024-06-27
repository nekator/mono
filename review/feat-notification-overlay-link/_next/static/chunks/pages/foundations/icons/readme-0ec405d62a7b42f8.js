(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8467],{97775:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/icons/readme",function(){return n(26558)}])},26558:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(52322),a=n(53148),s=n(45392);function i(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"icons",children:"Icons"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["We use icon fonts as ",(0,r.jsx)(t.strong,{children:"woff2"})," files for all our icons."]}),"\n",(0,r.jsxs)(t.li,{children:["We auto generate these files out of ",(0,r.jsx)(t.code,{children:".svg"})," files."]}),"\n",(0,r.jsxs)(t.li,{children:["A lot of our ",(0,r.jsx)(t.a,{href:"../../components/readme",children:"components"})," have an ",(0,r.jsx)(t.code,{children:"icon"})," property you can pass in."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-include-icons",children:"How to include icons"}),"\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.strong,{children:"CSS"}),", ",(0,r.jsx)(t.strong,{children:"SCSS"})," and ",(0,r.jsx)(t.strong,{children:"Tailwind"})," you don't have to include a specific file, just follow the documentation for ",(0,r.jsx)(t.a,{href:"../../foundations/readme",children:"foundations"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsxs)(t.p,{children:["We're providing an ",(0,r.jsx)(t.a,{href:"./overview",children:"overview for all of our icons"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You can add an icon before or after a tag, by adding an ",(0,r.jsx)(t.code,{children:"data-"})," attribute to your HTML code, like for example:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variant"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Data"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"before"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:'data-icon="icon-from-overview"'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"after"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:'data-icon-after="icon-from-overview"'})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"custom-icons",children:"Custom Icons"}),"\n",(0,r.jsxs)(t.p,{children:["If you have custom icons and want to use them for foundations and/or in components, you need to generate a ",(0,r.jsx)(t.strong,{children:"woff2"})," file."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"./CustomIcons.md",children:"More information"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}let c=e=>{let{children:t}=e;return(0,r.jsx)(a.Z,{children:t})};function l(e){return(0,r.jsx)(o,{})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(l,{...e})})}},53148:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r=n(52322),a=n(5632),s=n(25237),i=n.n(s),o=n(2784),c=n(61183),l=n(39097),d=n.n(l),h=n(43251);let u=(0,o.forwardRef)(function(e,t){let n=t||(0,o.useRef)(t),[a,s]=(0,o.useState)(()=>!1);return(0,o.useEffect)(()=>{document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document")},[]),(0,o.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,o.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":a,children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var f=n(82664),x=n(98310),p=n(10326),j=n(55327),m=n(74819),v=n(70741),g=n(92811),b=n(33759),y=n(39120);let w=(e,t)=>{var n;return"/"===t.path?"/"===e:e.includes("".concat(t.path,"/"))||e===t.path||!!(null===(n=t.subNavigation)||void 0===n?void 0:n.find(t=>e.includes("".concat(t.path,"/"))))},N=e=>{var t;let{navItem:n}=e,s=w((0,a.useRouter)().pathname,n);return(0,r.jsx)(y.Z,{active:s,backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(d(),{href:null!==(t=n.path)&&void 0!==t?t:"",children:n.label},"router-path-".concat(n.path))})};var S=()=>(0,r.jsx)(b.Z,{children:g.Z6.map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),Z=n(35368),_=n(79081);let E=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},q="db-ui",I="mono";var k=()=>{let e=(0,a.useRouter)(),[t,n]=(0,o.useState)(),[s,i]=(0,o.useState)(),c=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&i(r)},l=(e,t)=>{let r=[],a=[],s=[],i=[],o=[],c=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?o.push(e):e.startsWith("docs")?c.push(e):r.push(e);n({others:r,features:a,docs:c,refactors:i,issues:o,bugfixes:s,versions:e})};(0,o.useEffect)(()=>{(async()=>{let e=await E("https://api.github.com/repos/".concat(q,"/").concat(I,"/branches")),t=(await E("https://api.github.com/repos/".concat(q,"/").concat(I,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(n),c(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let d=t=>{let n=e.pathname,r=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(q,".github.io/").concat(I).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(_.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null};let W=e=>{var t,n;let{children:s,noNavigation:i}=e,[l,h]=(0,o.useState)(!1),[b,y]=(0,o.useState)(!1),[w,N]=(0,o.useState)(!1),[Z,_]=(0,o.useState)(!1),[E,q]=(0,o.useState)(),[I,W]=(0,o.useState)(),[A,C]=(0,o.useState)(),[F,R]=(0,o.useState)(),T=(0,a.useRouter)();return(0,o.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,o.useEffect)(()=>{if(T.query&&(T.query.fullscreen&&h("true"===T.query.fullscreen),T.query.page&&h(!0),T.query.noh1&&y("true"===T.query.noh1),T.query.properties&&N("true"===T.query.properties),T.query.current)){let t=Array.isArray(T.query.current)?T.query.current[0]:T.query.current;if(E!==t){var e;q(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=T.asPath.split("?")[0],{previous:n,next:r}=(0,g.vn)(t);W(n),C(r),R((0,g.kn)(t))},[T]),(0,r.jsxs)(r.Fragment,{children:[T.isReady&&l&&(0,r.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:s}),T.isReady&&!l&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(f.Z,{drawerOpen:Z,onToggle:_,brand:(0,r.jsx)(x.Z,{children:"DB-UI Mono"}),primaryAction:(0,r.jsx)(p.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(k,{}),children:(0,r.jsx)(S,{})}),children:[F&&F.length>1&&(0,r.jsx)(j.Z,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==F?void 0:F.map(e=>{var t;return(0,r.jsxs)(o.Fragment,{children:["/"!==e.path&&(0,r.jsx)(m.Z,{icon:"chevron_right"}),(0,r.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(j.Z,{spacing:"none",width:"large",children:s}),!i&&(null!=I?I:A)&&(0,r.jsxs)(j.Z,{width:"large",spacing:"small",className:"link-containers",children:[I&&(0,r.jsx)(d(),{className:"previous-link-container",href:null!==(t=I.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(v.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:I.label})]})}),A&&(0,r.jsx)(d(),{className:"next-link-container",href:null!==(n=A.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(v.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:A.label})]})})]})]})]})};var A=i()(async()=>W,{ssr:!1})}},function(e){e.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return e(e.s=97775)}),_N_E=e.O()}]);