(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8871],{83707:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/densities/examples",function(){return t(73200)}])},83952:(e,a,t)=>{"use strict";t.d(a,{A:()=>O});var s=t(31085),n=t(31242),r=t(83894),i=t.n(r),l=t(14041),c=t(30127),d=t(34747),o=t.n(d),u=t(5188);let h=(0,l.forwardRef)(function(e,a){let t=a||(0,l.useRef)(a),[n,r]=(0,l.useState)(()=>!1),i=(0,l.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,l.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,l.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,s.jsxs)("div",{ref:t,...(0,u.MD)(e,[]),id:e.id,className:(0,u.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,u.EB)(n),children:[(0,s.jsx)(s.Fragment,{children:e.header}),(0,s.jsx)("main",{className:"db-main",children:e.children}),(0,s.jsx)(s.Fragment,{children:e.footer})]})});var p=t(23116),m=t(23944),x=t(95374),g=t(12764),f=t(80692),v=t(64286),j=t(42372),b=t(61338),y=t(6900);let A=(e,a,t)=>{if(!t.query.slug)return a.path===t.pathname;let{slug:s}=t.query,n=Array.isArray(s)?s:[s];return a.path==="/components/".concat(n.join("/"))},w=e=>{var a;let{navItem:t}=e,r=(0,n.useRouter)(),i=A(r.pathname,t,r);return(0,s.jsx)(y.A,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,s.jsx)(s.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:a}=e;return!0!==a}).map(e=>(0,s.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,s.jsx)(o(),{href:null!==(a=t.path)&&void 0!==a?a:"","aria-current":i?"page":void 0,children:t.label},"router-path-".concat(t.path))})},N=()=>(0,s.jsx)(b.A,{children:j.bw.map(e=>(0,s.jsx)(w,{navItem:e},"router-path-".concat(e.path)))});var E=t(71651),q=t(47982);let _=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},S="db-ui",k="mono",W=()=>{let e=(0,n.useRouter)(),[a,t]=(0,l.useState)(),[r,i]=(0,l.useState)(),c=a=>{let t=e.basePath,s=a.find(e=>t.includes(e));s&&i(s)},d=(e,a)=>{let s=[],n=[],r=[],i=[],l=[],c=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?n.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?l.push(e):e.startsWith("docs")?c.push(e):s.push(e);t({others:s,features:n,docs:c,refactors:i,issues:l,bugfixes:r,versions:e})};(0,l.useEffect)(()=>{(async()=>{let e=await _("https://api.github.com/repos/".concat(S,"/").concat(k,"/branches")),a=(await _("https://api.github.com/repos/".concat(S,"/").concat(k,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(t),c(a),d(a,t)})().catch(e=>{console.error(e)})},[]);let o=a=>{let t=e.asPath,s=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,E.sanitize)("https://".concat(S,".github.io/").concat(k).concat(s?"/version":"/review","/").concat(a).concat(t)))};return a?(0,s.jsx)(q.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{o(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,s.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,s.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null},I=e=>{var a,t;let{children:r,noNavigation:i}=e,[d,u]=(0,l.useState)(!1),[b,y]=(0,l.useState)(!1),[A,w]=(0,l.useState)(!1),[E,q]=(0,l.useState)(!1),[_,S]=(0,l.useState)(),[k,I]=(0,l.useState)(),[O,P]=(0,l.useState)(),[R,F]=(0,l.useState)(),L=(0,n.useRouter)();return(0,l.useEffect)(()=>{c.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.A.highlightAll()},[]),(0,l.useEffect)(()=>{if(L.query&&(L.query.fullscreen&&u("true"===L.query.fullscreen),L.query.page&&u(!0),L.query.noh1&&y("true"===L.query.noh1),L.query.properties&&w("true"===L.query.properties),L.query.current)){let a=Array.isArray(L.query.current)?L.query.current[0]:L.query.current;if(_!==a){var e;S(a),null===(e=document.querySelector("#".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let a=L.asPath.split("?")[0],{previous:t,next:s}=(0,j.Pb)(a);I(t),P(s),F((0,j.Oj)(a))},[L]),(0,s.jsxs)(s.Fragment,{children:[L.isReady&&d&&(0,s.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(A?"is-properties":""),children:r}),L.isReady&&!d&&(0,s.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,s.jsx)(p.A,{drawerOpen:E,onToggle:q,brand:(0,s.jsx)(m.A,{children:"DB-UX"}),primaryAction:(0,s.jsx)(x.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,s.jsx)(W,{}),children:(0,s.jsx)(N,{})}),children:[R&&R.length>1&&(0,s.jsx)(g.A,{spacing:"none",width:"large",children:(0,s.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==R?void 0:R.map(e=>{var a;return(0,s.jsxs)(l.Fragment,{children:["/"!==e.path&&(0,s.jsx)(f.A,{icon:"chevron_right"}),(0,s.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(a=e.path)&&void 0!==a?a:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,s.jsx)(g.A,{spacing:"none",width:"large",children:r}),!i&&(null!=k?k:O)&&(0,s.jsxs)(g.A,{width:"large",spacing:"small",className:"link-containers",children:[k&&(0,s.jsx)(o(),{className:"previous-link-container",href:null!==(a=k.path)&&void 0!==a?a:"/",children:(0,s.jsxs)(v.A,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Previous"}),(0,s.jsx)("span",{"data-icon":"arrow_left",children:k.label})]})}),O&&(0,s.jsx)(o(),{className:"next-link-container",href:null!==(t=O.path)&&void 0!==t?t:"/",children:(0,s.jsxs)(v.A,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Next"}),(0,s.jsx)("span",{"data-icon-after":"arrow_right",children:O.label})]})})]})]})]})},O=i()(async()=>I,{ssr:!1})},73200:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>d});var s=t(31085),n=t(83952),r=t(64286),i=t(59916),l=t(95374);let c=["functional","regular","expressive"],d=()=>(0,s.jsxs)(n.A,{children:[(0,s.jsx)("h1",{children:"Density Examples"}),(0,s.jsx)("p",{children:'Open "inspect" to see the different spacings & sizing applied to the cards and components.'}),(0,s.jsx)("h2",{children:"Example side by side:"}),(0,s.jsxs)("div",{className:"density-example-grid",children:[c.map(e=>(0,s.jsx)("h3",{children:e.charAt(0).toUpperCase()+e.slice(1)},"grid-headline-".concat(e))),c.map(e=>(0,s.jsx)("article",{"data-density":e,children:(0,s.jsxs)(r.A,{spacing:"small",children:[(0,s.jsx)("h4",{children:"Login"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}),(0,s.jsx)(i.A,{label:"Username"}),(0,s.jsx)(i.A,{label:"Password",type:"password"}),(0,s.jsx)(l.A,{width:"full",variant:"brand",children:"Login"})]})},"grid-card-".concat(e)))]}),(0,s.jsx)("h2",{children:"Example multiple densities working together:"}),(0,s.jsxs)("div",{className:"density-example-page",children:[(0,s.jsxs)("div",{className:"density-example-page-functional","data-density":"functional",children:[(0,s.jsx)(r.A,{className:"db-neutral-bg-basic-level-2",spacing:"small",children:"We are functional"}),(0,s.jsx)(r.A,{className:"db-informational-bg-basic-level-2",spacing:"small",children:"even that we have"}),(0,s.jsx)(r.A,{className:"db-successful-bg-basic-level-2",spacing:"small",children:"a color"}),(0,s.jsx)(r.A,{className:"db-warning-bg-basic-level-2",spacing:"small",children:"the user shouldn't"}),(0,s.jsx)(r.A,{className:"db-critical-bg-basic-level-2",spacing:"small",children:"focus us"})]}),(0,s.jsx)("div",{className:"density-example-page-expressive","data-density":"expressive",children:(0,s.jsx)(r.A,{spacing:"medium",children:"I'm expressive the user should focus me first"})}),(0,s.jsxs)("div",{className:"density-example-page-regular","data-density":"regular",children:[(0,s.jsx)(r.A,{spacing:"small",children:"We"}),(0,s.jsx)(r.A,{spacing:"small",children:"are"}),(0,s.jsx)(r.A,{spacing:"small",children:"regular"})]})]})]})}},e=>{var a=a=>e(e.s=a);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>a(83707)),_N_E=e.O()}]);