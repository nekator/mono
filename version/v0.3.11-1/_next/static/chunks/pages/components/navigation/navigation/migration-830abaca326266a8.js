(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4403],{41845:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/navigation/migration",function(){return n(95384)}])},94508:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52322),a=n(45392);function s(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(t.h3,{id:"class",children:"class"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"cmp-mainnavigation"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"db-navigation"})}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"children",children:"children"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"data"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"❌"}),(0,r.jsx)(t.td,{children:"❌"}),(0,r.jsxs)(t.td,{children:["pass data via ",(0,r.jsx)(t.code,{children:"children"})," / ",(0,r.jsx)(t.code,{children:"slot"}),", moved a lot of the features to ",(0,r.jsx)(t.code,{children:"db-header"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"siteName"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"❌"}),(0,r.jsx)(t.td,{children:"❌"}),(0,r.jsx)(t.td,{})]})]})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},95384:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(52322),a=n(45392),s=n(53148),i=n(94508);let c=e=>{let{children:t}=e;return(0,r.jsx)(s.Z,{children:t})};function l(e){let t={h1:"h1",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbnavigation-migration",children:"DBNavigation Migration"}),"\n",(0,r.jsx)(i.default,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(l,{...e})})}},53148:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(52322),a=n(5632),s=n(25237),i=n.n(s),c=n(2784),l=n(61183),o=n(39097),d=n.n(o),h=n(43251);let u=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[a,s]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":a,children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var x=n(82664),j=n(98310),p=n(10326),m=n(55327),f=n(74819),g=n(70741),v=n(78634),b=n(33759),y=n(39120);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:r}=n.query,a=Array.isArray(r)?r:[r];return t.path==="/components/".concat(a.join("/"))},N=e=>{var t;let{navItem:n}=e,s=(0,a.useRouter)(),i=w(s.pathname,n,s);return(0,r.jsx)(y.Z,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(d(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:n.label},"router-path-".concat(n.path))})};var q=()=>(0,r.jsx)(b.Z,{children:v.Z6.map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),Z=n(35368),S=n(79081);let _=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},k="db-ui",A="mono";var E=()=>{let e=(0,a.useRouter)(),[t,n]=(0,c.useState)(),[s,i]=(0,c.useState)(),l=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&i(r)},o=(e,t)=>{let r=[],a=[],s=[],i=[],c=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):r.push(e);n({others:r,features:a,docs:l,refactors:i,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await _("https://api.github.com/repos/".concat(k,"/").concat(A,"/branches")),t=(await _("https://api.github.com/repos/".concat(k,"/").concat(A,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(n),l(t),o(t,n)})().catch(e=>{console.error(e)})},[]);let d=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(k,".github.io/").concat(A).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(S.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null};let D=e=>{var t,n;let{children:s,noNavigation:i}=e,[o,h]=(0,c.useState)(!1),[b,y]=(0,c.useState)(!1),[w,N]=(0,c.useState)(!1),[Z,S]=(0,c.useState)(!1),[_,k]=(0,c.useState)(),[A,D]=(0,c.useState)(),[I,B]=(0,c.useState)(),[F,R]=(0,c.useState)(),W=(0,a.useRouter)();return(0,c.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(W.query&&(W.query.fullscreen&&h("true"===W.query.fullscreen),W.query.page&&h(!0),W.query.noh1&&y("true"===W.query.noh1),W.query.properties&&N("true"===W.query.properties),W.query.current)){let t=Array.isArray(W.query.current)?W.query.current[0]:W.query.current;if(_!==t){var e;k(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=W.asPath.split("?")[0],{previous:n,next:r}=(0,v.vn)(t);D(n),B(r),R((0,v.kn)(t))},[W]),(0,r.jsxs)(r.Fragment,{children:[W.isReady&&o&&(0,r.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:s}),W.isReady&&!o&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(x.Z,{drawerOpen:Z,onToggle:S,brand:(0,r.jsx)(j.Z,{children:"DB-UX"}),primaryAction:(0,r.jsx)(p.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(E,{}),children:(0,r.jsx)(q,{})}),children:[F&&F.length>1&&(0,r.jsx)(m.Z,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==F?void 0:F.map(e=>{var t;return(0,r.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,r.jsx)(f.Z,{icon:"chevron_right"}),(0,r.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(m.Z,{spacing:"none",width:"large",children:s}),!i&&(null!=A?A:I)&&(0,r.jsxs)(m.Z,{width:"large",spacing:"small",className:"link-containers",children:[A&&(0,r.jsx)(d(),{className:"previous-link-container",href:null!==(t=A.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(g.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:A.label})]})}),I&&(0,r.jsx)(d(),{className:"next-link-container",href:null!==(n=I.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(g.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:I.label})]})})]})]})]})};var I=i()(async()=>D,{ssr:!1})}},function(e){e.O(0,[6061,1954,2182,8634,2888,9774,179],function(){return e(e.s=41845)}),_N_E=e.O()}]);