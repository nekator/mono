(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3768],{34162:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-input/radio/migration",function(){return n(14471)}])},82266:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(52322),a=n(45392);function s(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(t.h3,{id:"class",children:"class"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"elm-radio"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"db-radio"})}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"id",children:"id"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Before"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,r.jsx)(t.th,{children:"After"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"input_id"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\uD83D\uDD01"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"id"})}),(0,r.jsx)(t.td,{})]})})]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},14471:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(52322),a=n(45392),s=n(53148),i=n(82266);let c=e=>{let{children:t}=e;return(0,r.jsx)(s.Z,{children:t})};function l(e){let t={h1:"h1",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbradio-migration",children:"DBRadio Migration"}),"\n",(0,r.jsx)(i.default,{})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(l,{...e})})}},53148:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(52322),a=n(5632),s=n(25237),i=n.n(s),c=n(2784),l=n(61183),o=n(39097),d=n.n(o),h=n(43251);let u=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[a,s]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":a,children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var x=n(82664),p=n(98310),j=n(10326),f=n(55327),m=n(74819),g=n(70741),v=n(78634),b=n(33759),y=n(39120);let w=(e,t)=>{var n;return"/"===t.path?"/"===e:e.includes("".concat(t.path,"/"))||e===t.path||!!(null===(n=t.subNavigation)||void 0===n?void 0:n.find(t=>e.includes("".concat(t.path,"/"))))},N=e=>{var t;let{navItem:n}=e,s=w((0,a.useRouter)().pathname,n);return(0,r.jsx)(y.Z,{active:s,backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(d(),{href:null!==(t=n.path)&&void 0!==t?t:"",children:n.label},"router-path-".concat(n.path))})};var Z=()=>(0,r.jsx)(b.Z,{children:v.Z6.map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),_=n(35368),q=n(79081);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},k="db-ui",D="mono";var E=()=>{let e=(0,a.useRouter)(),[t,n]=(0,c.useState)(),[s,i]=(0,c.useState)(),l=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&i(r)},o=(e,t)=>{let r=[],a=[],s=[],i=[],c=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):r.push(e);n({others:r,features:a,docs:l,refactors:i,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(k,"/").concat(D,"/branches")),t=(await S("https://api.github.com/repos/".concat(k,"/").concat(D,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(n),l(t),o(t,n)})().catch(e=>{console.error(e)})},[]);let d=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,_.sanitize)("https://".concat(k,".github.io/").concat(D).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(q.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null};let A=e=>{var t,n;let{children:s,noNavigation:i}=e,[o,h]=(0,c.useState)(!1),[b,y]=(0,c.useState)(!1),[w,N]=(0,c.useState)(!1),[_,q]=(0,c.useState)(!1),[S,k]=(0,c.useState)(),[D,A]=(0,c.useState)(),[I,R]=(0,c.useState)(),[B,F]=(0,c.useState)(),W=(0,a.useRouter)();return(0,c.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(W.query&&(W.query.fullscreen&&h("true"===W.query.fullscreen),W.query.page&&h(!0),W.query.noh1&&y("true"===W.query.noh1),W.query.properties&&N("true"===W.query.properties),W.query.current)){let t=Array.isArray(W.query.current)?W.query.current[0]:W.query.current;if(S!==t){var e;k(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=W.asPath.split("?")[0],{previous:n,next:r}=(0,v.vn)(t);A(n),R(r),F((0,v.kn)(t))},[W]),(0,r.jsxs)(r.Fragment,{children:[W.isReady&&o&&(0,r.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:s}),W.isReady&&!o&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(x.Z,{drawerOpen:_,onToggle:q,brand:(0,r.jsx)(p.Z,{children:"DB-UX"}),primaryAction:(0,r.jsx)(j.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(E,{}),children:(0,r.jsx)(Z,{})}),children:[B&&B.length>1&&(0,r.jsx)(f.Z,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==B?void 0:B.map(e=>{var t;return(0,r.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,r.jsx)(m.Z,{icon:"chevron_right"}),(0,r.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(f.Z,{spacing:"none",width:"large",children:s}),!i&&(null!=D?D:I)&&(0,r.jsxs)(f.Z,{width:"large",spacing:"small",className:"link-containers",children:[D&&(0,r.jsx)(d(),{className:"previous-link-container",href:null!==(t=D.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(g.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:D.label})]})}),I&&(0,r.jsx)(d(),{className:"next-link-container",href:null!==(n=I.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(g.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:I.label})]})})]})]})]})};var I=i()(async()=>A,{ssr:!1})}},function(e){e.O(0,[6061,1954,2182,8634,2888,9774,179],function(){return e(e.s=34162)}),_N_E=e.O()}]);