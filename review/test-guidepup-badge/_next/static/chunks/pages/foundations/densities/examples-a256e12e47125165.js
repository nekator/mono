(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8835],{45603:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/densities/examples",function(){return t(75045)}])},53148:function(e,a,t){"use strict";t.d(a,{Z:function(){return R}});var s=t(52322),n=t(5632),r=t(25237),i=t.n(r),l=t(2784),c=t(61183),d=t(39097),o=t.n(d),u=t(43251);let h=(0,l.forwardRef)(function(e,a){let t=a||(0,l.useRef)(a),[n,r]=(0,l.useState)(()=>!1),i=(0,l.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,l.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,l.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,s.jsxs)("div",{ref:t,...(0,u.mS)(e,[]),id:e.id,className:(0,u.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":n,children:[(0,s.jsx)(s.Fragment,{children:e.header}),(0,s.jsx)("main",{className:"db-main",children:e.children}),(0,s.jsx)(s.Fragment,{children:e.footer})]})});var p=t(82664),m=t(98310),x=t(10326),g=t(55327),f=t(74819),v=t(70741),j=t(92811),b=t(33759),y=t(39120);let w=(e,a)=>{var t;return"/"===a.path?"/"===e:e.includes("".concat(a.path,"/"))||e===a.path||!!(null===(t=a.subNavigation)||void 0===t?void 0:t.find(a=>e.includes("".concat(a.path,"/"))))},N=e=>{var a;let{navItem:t}=e,r=w((0,n.useRouter)().pathname,t);return(0,s.jsx)(y.Z,{active:r,backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,s.jsx)(s.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:a}=e;return!0!==a}).map(e=>(0,s.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,s.jsx)(o(),{href:null!==(a=t.path)&&void 0!==a?a:"",children:t.label},"router-path-".concat(t.path))})};var Z=()=>(0,s.jsx)(b.Z,{children:j.Z6.map(e=>(0,s.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),E=t(35368),_=t(79081);let q=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},S="db-ui",k="mono";var I=()=>{let e=(0,n.useRouter)(),[a,t]=(0,l.useState)(),[r,i]=(0,l.useState)(),c=a=>{let t=e.basePath,s=a.find(e=>t.includes(e));s&&i(s)},d=(e,a)=>{let s=[],n=[],r=[],i=[],l=[],c=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?n.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?l.push(e):e.startsWith("docs")?c.push(e):s.push(e);t({others:s,features:n,docs:c,refactors:i,issues:l,bugfixes:r,versions:e})};(0,l.useEffect)(()=>{(async()=>{let e=await q("https://api.github.com/repos/".concat(S,"/").concat(k,"/branches")),a=(await q("https://api.github.com/repos/".concat(S,"/").concat(k,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(t),c(a),d(a,t)})().catch(e=>{console.error(e)})},[]);let o=a=>{let t=e.pathname,s=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,E.sanitize)("https://".concat(S,".github.io/").concat(k).concat(s?"/version":"/review","/").concat(a).concat(t)))};return a?(0,s.jsx)(_.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{o(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,s.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,s.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null};let W=e=>{var a,t;let{children:r,noNavigation:i}=e,[d,u]=(0,l.useState)(!1),[b,y]=(0,l.useState)(!1),[w,N]=(0,l.useState)(!1),[E,_]=(0,l.useState)(!1),[q,S]=(0,l.useState)(),[k,W]=(0,l.useState)(),[R,O]=(0,l.useState)(),[A,L]=(0,l.useState)(),P=(0,n.useRouter)();return(0,l.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,l.useEffect)(()=>{if(P.query&&(P.query.fullscreen&&u("true"===P.query.fullscreen),P.query.page&&u(!0),P.query.noh1&&y("true"===P.query.noh1),P.query.properties&&N("true"===P.query.properties),P.query.current)){let a=Array.isArray(P.query.current)?P.query.current[0]:P.query.current;if(q!==a){var e;S(a),null===(e=document.querySelector("#".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let a=P.asPath.split("?")[0],{previous:t,next:s}=(0,j.vn)(a);W(t),O(s),L((0,j.kn)(a))},[P]),(0,s.jsxs)(s.Fragment,{children:[P.isReady&&d&&(0,s.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:r}),P.isReady&&!d&&(0,s.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,s.jsx)(p.Z,{drawerOpen:E,onToggle:_,brand:(0,s.jsx)(m.Z,{children:"DB-UI Mono"}),primaryAction:(0,s.jsx)(x.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,s.jsx)(I,{}),children:(0,s.jsx)(Z,{})}),children:[A&&A.length>1&&(0,s.jsx)(g.Z,{spacing:"none",width:"large",children:(0,s.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==A?void 0:A.map(e=>{var a;return(0,s.jsxs)(l.Fragment,{children:["/"!==e.path&&(0,s.jsx)(f.Z,{icon:"chevron_right"}),(0,s.jsx)(o(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(a=e.path)&&void 0!==a?a:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,s.jsx)(g.Z,{spacing:"none",width:"large",children:r}),!i&&(null!=k?k:R)&&(0,s.jsxs)(g.Z,{width:"large",spacing:"small",className:"link-containers",children:[k&&(0,s.jsx)(o(),{className:"previous-link-container",href:null!==(a=k.path)&&void 0!==a?a:"/",children:(0,s.jsxs)(v.Z,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Previous"}),(0,s.jsx)("span",{"data-icon":"arrow_left",children:k.label})]})}),R&&(0,s.jsx)(o(),{className:"next-link-container",href:null!==(t=R.path)&&void 0!==t?t:"/",children:(0,s.jsxs)(v.Z,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Next"}),(0,s.jsx)("span",{"data-icon-after":"arrow_right",children:R.label})]})})]})]})]})};var R=i()(async()=>W,{ssr:!1})},75045:function(e,a,t){"use strict";t.r(a);var s=t(52322),n=t(53148),r=t(70741),i=t(49475),l=t(10326);let c=["functional","regular","expressive"];a.default=()=>(0,s.jsxs)(n.Z,{children:[(0,s.jsx)("h1",{children:"Density Examples"}),(0,s.jsx)("p",{children:'Open "inspect" to see the different spacings & sizing applied to the cards and components.'}),(0,s.jsx)("h2",{children:"Example side by side:"}),(0,s.jsxs)("div",{className:"density-example-grid",children:[c.map(e=>(0,s.jsx)("h3",{children:e.charAt(0).toUpperCase()+e.slice(1)},"grid-headline-".concat(e))),c.map(e=>(0,s.jsx)("article",{"data-density":e,children:(0,s.jsxs)(r.Z,{spacing:"small",children:[(0,s.jsx)("h4",{children:"Login"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}),(0,s.jsx)(i.Z,{label:"Username"}),(0,s.jsx)(i.Z,{label:"Password",type:"password"}),(0,s.jsx)(l.Z,{width:"full",variant:"brand",children:"Login"})]})},"grid-card-".concat(e)))]}),(0,s.jsx)("h2",{children:"Example multiple densities working together:"}),(0,s.jsxs)("div",{className:"density-example-page",children:[(0,s.jsxs)("div",{className:"density-example-page-functional","data-density":"functional",children:[(0,s.jsx)(r.Z,{className:"db-neutral-bg-basic-level-2",spacing:"small",children:"We are functional"}),(0,s.jsx)(r.Z,{className:"db-informational-bg-basic-level-2",spacing:"small",children:"even that we have"}),(0,s.jsx)(r.Z,{className:"db-successful-bg-basic-level-2",spacing:"small",children:"a color"}),(0,s.jsx)(r.Z,{className:"db-warning-bg-basic-level-2",spacing:"small",children:"the user shouldn't"}),(0,s.jsx)(r.Z,{className:"db-critical-bg-basic-level-2",spacing:"small",children:"focus us"})]}),(0,s.jsx)("div",{className:"density-example-page-expressive","data-density":"expressive",children:(0,s.jsx)(r.Z,{spacing:"medium",children:"I'm expressive the user should focus me first"})}),(0,s.jsxs)("div",{className:"density-example-page-regular","data-density":"regular",children:[(0,s.jsx)(r.Z,{spacing:"small",children:"We"}),(0,s.jsx)(r.Z,{spacing:"small",children:"are"}),(0,s.jsx)(r.Z,{spacing:"small",children:"regular"})]})]})]})}},function(e){e.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return e(e.s=45603)}),_N_E=e.O()}]);