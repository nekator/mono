(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7070],{20129:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/densities",function(){return a(61207)}])},21120:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(52322),r=a(5632),s=a(39097),i=a.n(s),c=a(50115),l=a(76460),o=a(72288),u=a(85803);let d=()=>{var e;let t=(0,r.useRouter)(),a=(0,l.vY)().find(e=>e.path===t.asPath);return(0,n.jsx)(c.Z,{noNavigation:!0,children:a&&(0,n.jsx)("div",{className:"card-navigation",children:null===(e=a.subNavigation)||void 0===e?void 0:e.map((e,t)=>{var a;return(0,n.jsx)(i(),{href:null!==(a=e.path)&&void 0!==a?a:"/",children:(0,n.jsxs)(o.Z,{behaviour:"interactive",spacing:"medium",children:[(0,n.jsxs)("small",{children:[t+1,"."]}),(0,n.jsx)("p",{children:e.label}),(0,n.jsx)(u.Z,{icon:"arrow_right",children:"Next"})]})},"navigation-card-".concat(e.path))})})})}},50115:(e,t,a)=>{"use strict";a.d(t,{Z:()=>A});var n=a(52322),r=a(5632),s=a(25237),i=a.n(s),c=a(2784),l=a(61183),o=a(39097),u=a.n(o),d=a(98072);let h=(0,c.forwardRef)(function(e,t){let a=t||(0,c.useRef)(t),[r,s]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,n.jsxs)("div",{ref:a,...(0,d.mS)(e,[]),id:e.id,className:(0,d.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":r,children:[(0,n.jsx)(n.Fragment,{children:e.header}),(0,n.jsx)("main",{className:"db-main",children:e.children}),(0,n.jsx)(n.Fragment,{children:e.footer})]})});var p=a(68908),m=a(48483),v=a(90434),f=a(97689),g=a(85803),x=a(72288),j=a(76460),b=a(40245),y=a(29469);let w=(e,t,a)=>{if(!a.query.slug)return t.path===a.pathname;let{slug:n}=a.query,r=Array.isArray(n)?n:[n];return t.path==="/components/".concat(r.join("/"))},N=e=>{var t;let{navItem:a}=e,s=(0,r.useRouter)(),i=w(s.pathname,a,s);return(0,n.jsx)(y.Z,{backButtonText:"Back to ".concat(a.label),subNavigation:a.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,n.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:a.subNavigation?a.label:(0,n.jsx)(u(),{href:null!==(t=a.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:a.label},"router-path-".concat(a.path))})},Z=()=>(0,n.jsx)(b.Z,{children:j.Z6.map(e=>(0,n.jsx)(N,{navItem:e},"router-path-".concat(e.path)))});var _=a(35368),q=a(9842);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},E="db-ui",k="mono",R=()=>{let e=(0,r.useRouter)(),[t,a]=(0,c.useState)(),[s,i]=(0,c.useState)(),l=t=>{let a=e.basePath,n=t.find(e=>a.includes(e));n&&i(n)},o=(e,t)=>{let n=[],r=[],s=[],i=[],c=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):n.push(e);a({others:n,features:r,docs:l,refactors:i,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(E,"/").concat(k,"/branches")),t=(await S("https://api.github.com/repos/".concat(E,"/").concat(k,"/tags"))).map(e=>e.name),a=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(a),l(t),o(t,a)})().catch(e=>{console.error(e)})},[]);let u=t=>{let a=e.asPath,n=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,_.sanitize)("https://".concat(E,".github.io/").concat(k).concat(n?"/version":"/review","/").concat(t).concat(a)))};return t?(0,n.jsx)(q.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{u(e.target.value)},children:Object.entries(t).filter(e=>{let[t,a]=e;return(null==a?void 0:a.length)>0}).map(e=>{let[t,a]=e;return(0,n.jsx)("optgroup",{label:t,children:a.slice(0,15).map((e,a)=>(0,n.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(a)))},t)})}):null},I=e=>{var t,a;let{children:s,noNavigation:i}=e,[o,d]=(0,c.useState)(!1),[b,y]=(0,c.useState)(!1),[w,N]=(0,c.useState)(!1),[_,q]=(0,c.useState)(!1),[S,E]=(0,c.useState)(),[k,I]=(0,c.useState)(),[A,P]=(0,c.useState)(),[W,O]=(0,c.useState)(),F=(0,r.useRouter)();return(0,c.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(F.query&&(F.query.fullscreen&&d("true"===F.query.fullscreen),F.query.page&&d(!0),F.query.noh1&&y("true"===F.query.noh1),F.query.properties&&N("true"===F.query.properties),F.query.current)){let t=Array.isArray(F.query.current)?F.query.current[0]:F.query.current;if(S!==t){var e;E(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=F.asPath.split("?")[0],{previous:a,next:n}=(0,j.vn)(t);I(a),P(n),O((0,j.kn)(t))},[F]),(0,n.jsxs)(n.Fragment,{children:[F.isReady&&o&&(0,n.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:s}),F.isReady&&!o&&(0,n.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,n.jsx)(p.Z,{drawerOpen:_,onToggle:q,brand:(0,n.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,n.jsx)(v.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,n.jsx)(R,{}),children:(0,n.jsx)(Z,{})}),children:[W&&W.length>1&&(0,n.jsx)(f.Z,{spacing:"none",width:"large",children:(0,n.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==W?void 0:W.map(e=>{var t;return(0,n.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,n.jsx)(g.Z,{icon:"chevron_right"}),(0,n.jsx)(u(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,n.jsx)(f.Z,{spacing:"none",width:"large",children:s}),!i&&(null!=k?k:A)&&(0,n.jsxs)(f.Z,{width:"large",spacing:"small",className:"link-containers",children:[k&&(0,n.jsx)(u(),{className:"previous-link-container",href:null!==(t=k.path)&&void 0!==t?t:"/",children:(0,n.jsxs)(x.Z,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Previous"}),(0,n.jsx)("span",{"data-icon":"arrow_left",children:k.label})]})}),A&&(0,n.jsx)(u(),{className:"next-link-container",href:null!==(a=A.path)&&void 0!==a?a:"/",children:(0,n.jsxs)(x.Z,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Next"}),(0,n.jsx)("span",{"data-icon-after":"arrow_right",children:A.label})]})})]})]})]})},A=i()(async()=>I,{ssr:!1})},61207:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(52322),r=a(21120);let s=()=>(0,n.jsx)(r.Z,{})}},e=>{var t=t=>e(e.s=t);e.O(0,[3430,1954,4540,6460,2888,9774,179],()=>t(20129)),_N_E=e.O()}]);