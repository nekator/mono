(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{25165:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors/color-schemes",function(){return a(54641)}])},83952:(e,t,a)=>{"use strict";a.d(t,{A:()=>P});var n=a(31085),s=a(31242),r=a(83894),c=a.n(r),i=a(14041),l=a(30127),o=a(34747),h=a.n(o),d=a(5188);let u=(0,i.forwardRef)(function(e,t){let a=t||(0,i.useRef)(t),[s,r]=(0,i.useState)(()=>!1),c=(0,i.useRef)(!1);return c.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),c.current=!0),(0,i.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,n.jsxs)("div",{ref:a,...(0,d.MD)(e,[]),id:e.id,className:(0,d.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,d.EB)(s),children:[(0,n.jsx)(n.Fragment,{children:e.header}),(0,n.jsx)("main",{className:"db-main",children:e.children}),(0,n.jsx)(n.Fragment,{children:e.footer})]})});var m=a(23116),p=a(23944),g=a(95374),x=a(12764),f=a(80692),j=a(64286),v=a(42372),b=a(61338),y=a(6900);let A=(e,t,a)=>{if(!a.query.slug)return t.path===a.pathname;let{slug:n}=a.query,s=Array.isArray(n)?n:[n];return t.path==="/components/".concat(s.join("/"))},w=e=>{var t;let{navItem:a}=e,r=(0,s.useRouter)(),c=A(r.pathname,a,r);return(0,n.jsx)(y.A,{backButtonText:"Back to ".concat(a.label),subNavigation:a.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,n.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),children:a.subNavigation?a.label:(0,n.jsx)(h(),{href:null!==(t=a.path)&&void 0!==t?t:"","aria-current":c?"page":void 0,children:a.label},"router-path-".concat(a.path))})},N=()=>(0,n.jsx)(b.A,{children:v.bw.map(e=>(0,n.jsx)(w,{navItem:e},"router-path-".concat(e.path)))});var k=a(71651),S=a(47982);let _=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},q="db-ui",E="mono",C=()=>{let e=(0,s.useRouter)(),[t,a]=(0,i.useState)(),[r,c]=(0,i.useState)(),l=t=>{let a=e.basePath,n=t.find(e=>a.includes(e));n&&c(n)},o=(e,t)=>{let n=[],s=[],r=[],c=[],i=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?c.push(e):/^\d*-/.test(e)?i.push(e):e.startsWith("docs")?l.push(e):n.push(e);a({others:n,features:s,docs:l,refactors:c,issues:i,bugfixes:r,versions:e})};(0,i.useEffect)(()=>{(async()=>{let e=await _("https://api.github.com/repos/".concat(q,"/").concat(E,"/branches")),t=(await _("https://api.github.com/repos/".concat(q,"/").concat(E,"/tags"))).map(e=>e.name),a=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.unshift("latest"),l(a),l(t),o(t,a)})().catch(e=>{console.error(e)})},[]);let h=t=>{let a=e.asPath,n=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace((0,k.sanitize)("https://".concat(q,".github.io/").concat(E).concat(n?"/version":"/review","/").concat(t).concat(a)))};return t?(0,n.jsx)(S.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{h(e.target.value)},children:Object.entries(t).filter(e=>{let[t,a]=e;return(null==a?void 0:a.length)>0}).map(e=>{let[t,a]=e;return(0,n.jsx)("optgroup",{label:t,children:a.slice(0,15).map((e,a)=>(0,n.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(a)))},t)})}):null},I=e=>{var t,a;let{children:r,noNavigation:c}=e,[o,d]=(0,i.useState)(!1),[b,y]=(0,i.useState)(!1),[A,w]=(0,i.useState)(!1),[k,S]=(0,i.useState)(!1),[_,q]=(0,i.useState)(),[E,I]=(0,i.useState)(),[P,R]=(0,i.useState)(),[L,O]=(0,i.useState)(),T=(0,s.useRouter)();return(0,i.useEffect)(()=>{l.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.A.highlightAll()},[]),(0,i.useEffect)(()=>{if(T.query&&(T.query.fullscreen&&d("true"===T.query.fullscreen),T.query.page&&d(!0),T.query.noh1&&y("true"===T.query.noh1),T.query.properties&&w("true"===T.query.properties),T.query.current)){let t=Array.isArray(T.query.current)?T.query.current[0]:T.query.current;if(_!==t){var e;q(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=T.asPath.split("?")[0],{previous:a,next:n}=(0,v.Pb)(t);I(a),R(n),O((0,v.Oj)(t))},[T]),(0,n.jsxs)(n.Fragment,{children:[T.isReady&&o&&(0,n.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(A?"is-properties":""),children:r}),T.isReady&&!o&&(0,n.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,n.jsx)(m.A,{drawerOpen:k,onToggle:S,brand:(0,n.jsx)(p.A,{children:"DB-UX"}),primaryAction:(0,n.jsx)(g.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,n.jsx)(C,{}),children:(0,n.jsx)(N,{})}),children:[L&&L.length>1&&(0,n.jsx)(x.A,{spacing:"none",width:"large",children:(0,n.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==L?void 0:L.map(e=>{var t;return(0,n.jsxs)(i.Fragment,{children:["/"!==e.path&&(0,n.jsx)(f.A,{icon:"chevron_right"}),(0,n.jsx)(h(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,n.jsx)(x.A,{spacing:"none",width:"large",children:r}),!c&&(null!=E?E:P)&&(0,n.jsxs)(x.A,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,n.jsx)(h(),{className:"previous-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,n.jsxs)(j.A,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Previous"}),(0,n.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),P&&(0,n.jsx)(h(),{className:"next-link-container",href:null!==(a=P.path)&&void 0!==a?a:"/",children:(0,n.jsxs)(j.A,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Next"}),(0,n.jsx)("span",{"data-icon-after":"arrow_right",children:P.label})]})})]})]})]})},P=c()(async()=>I,{ssr:!1})},54641:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var n=a(31085),s=a(14041),r=a(83952),c=a(85776),i=a(95374),l=a(64286);let o=["neutral",...a(51034).kC],h=()=>{let[e,t]=(0,s.useState)("light"),[a,h]=(0,s.useState)("light");return(0,n.jsxs)(r.A,{children:[(0,n.jsx)("h1",{children:"Color Schemes"}),(0,n.jsxs)("p",{children:["You can use ",(0,n.jsx)("code",{children:'data-color-scheme="light/dark"'})," to force a container/component to keep the color-scheme:"]}),(0,n.jsxs)("div",{className:"color-schemes-container","data-color-scheme":e,children:[(0,n.jsx)("p",{children:"This container changes based on the state."}),(0,n.jsx)(c.A,{semantic:"informational",emphasis:"strong",children:e}),(0,n.jsxs)(i.A,{icon:"light"===e?"moon":"sun",onClick:()=>{t("light"===e?"dark":"light")},children:["Click me for ","light"===e?"dark":"light","-mode"]}),(0,n.jsxs)("section",{"data-color-scheme":"light",children:[(0,n.jsx)("h2",{children:"Permanent Light"}),(0,n.jsx)("p",{children:"I'll be always light independent from parent"})]}),(0,n.jsxs)("section",{"data-color-scheme":"dark",children:[(0,n.jsx)("h2",{children:"Permanent Dark"}),(0,n.jsx)("p",{children:"I'll be always dark independent from parent"})]})]}),(0,n.jsx)("h2",{children:"Cards & Levels"}),(0,n.jsxs)("div",{className:"color-schemes-container","data-color-scheme":a,children:[(0,n.jsx)("p",{children:"This container changes based on the state."}),(0,n.jsx)(c.A,{semantic:"informational",emphasis:"strong",children:a}),(0,n.jsxs)(i.A,{icon:"light"===e?"moon":"sun",onClick:()=>{h("light"===a?"dark":"light")},children:["Click me for ","light"===a?"dark":"light","-mode"]}),(0,n.jsx)("section",{className:"color-cards",children:o.map(e=>(0,n.jsx)("div",{className:"db-".concat(e,"-bg-basic-level-1"),children:(0,n.jsx)(l.A,{spacing:"medium",elevationLevel:"3",children:(0,n.jsx)(l.A,{spacing:"medium",elevationLevel:"2",children:(0,n.jsx)(l.A,{spacing:"medium",children:e})})})},e))})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>t(25165)),_N_E=e.O()}]);