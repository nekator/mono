(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5526],{37357:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/[[...slug]]",function(){return a(94413)}])},42124:(e,t,a)=>{"use strict";a.d(t,{A:()=>h});var n=a(31085),r=a(31242),s=a(34747),i=a.n(s),l=a(83952),c=a(42372),o=a(64286),u=a(80692);let h=()=>{var e;let t=(0,r.useRouter)(),a=(0,c.g9)().find(e=>e.path===t.asPath);return(0,n.jsx)(l.A,{noNavigation:!0,children:a&&(0,n.jsx)("div",{className:"card-navigation",children:null===(e=a.subNavigation)||void 0===e?void 0:e.map((e,t)=>{var a;return(0,n.jsx)(i(),{href:null!==(a=e.path)&&void 0!==a?a:"/",children:(0,n.jsxs)(o.A,{behaviour:"interactive",spacing:"medium",children:[(0,n.jsxs)("small",{children:[t+1,"."]}),(0,n.jsx)("p",{children:e.label}),(0,n.jsx)(u.A,{icon:"arrow_right",children:"Next"})]})},"navigation-card-".concat(e.path))})})})}},83952:(e,t,a)=>{"use strict";a.d(t,{A:()=>W});var n=a(31085),r=a(31242),s=a(83894),i=a.n(s),l=a(14041),c=a(30127),o=a(34747),u=a.n(o),h=a(5188);let d=(0,l.forwardRef)(function(e,t){let a=t||(0,l.useRef)(t),[r,s]=(0,l.useState)(()=>!1),i=(0,l.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,l.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,l.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,n.jsxs)("div",{ref:a,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(r),children:[(0,n.jsx)(n.Fragment,{children:e.header}),(0,n.jsx)("main",{className:"db-main",children:e.children}),(0,n.jsx)(n.Fragment,{children:e.footer})]})});var p=a(23116),v=a(23944),f=a(95374),m=a(12764),g=a(80692),x=a(64286),j=a(42372),b=a(61338),y=a(6900);let A=(e,t,a)=>{if(!a.query.slug)return t.path===a.pathname;let{slug:n}=a.query,r=Array.isArray(n)?n:[n];return t.path==="/components/".concat(r.join("/"))},w=e=>{var t;let{navItem:a}=e,s=(0,r.useRouter)(),i=A(s.pathname,a,s);return(0,n.jsx)(y.A,{backButtonText:"Back to ".concat(a.label),subNavigation:a.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,n.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),children:a.subNavigation?a.label:(0,n.jsx)(u(),{href:null!==(t=a.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:a.label},"router-path-".concat(a.path))})},N=()=>(0,n.jsx)(b.A,{children:j.bw.map(e=>(0,n.jsx)(w,{navItem:e},"router-path-".concat(e.path)))});var _=a(71651),q=a(47982);let E=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},S="db-ui",k="mono",R=()=>{let e=(0,r.useRouter)(),[t,a]=(0,l.useState)(),[s,i]=(0,l.useState)(),c=t=>{let a=e.basePath,n=t.find(e=>a.includes(e));n&&i(n)},o=(e,t)=>{let n=[],r=[],s=[],i=[],l=[],c=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?l.push(e):e.startsWith("docs")?c.push(e):n.push(e);a({others:n,features:r,docs:c,refactors:i,issues:l,bugfixes:s,versions:e})};(0,l.useEffect)(()=>{(async()=>{let e=await E("https://api.github.com/repos/".concat(S,"/").concat(k,"/branches")),t=(await E("https://api.github.com/repos/".concat(S,"/").concat(k,"/tags"))).map(e=>e.name),a=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.push("latest"),c(a),c(t),o(t,a)})().catch(e=>{console.error(e)})},[]);let u=t=>{let a=e.asPath,n=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace((0,_.sanitize)("https://".concat(S,".github.io/").concat(k).concat(n?"/version":"/review","/").concat(t).concat(a)))};return t?(0,n.jsx)(q.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{u(e.target.value)},children:Object.entries(t).filter(e=>{let[t,a]=e;return(null==a?void 0:a.length)>0}).map(e=>{let[t,a]=e;return(0,n.jsx)("optgroup",{label:t,children:a.slice(0,15).map((e,a)=>(0,n.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(a)))},t)})}):null},P=e=>{var t,a;let{children:s,noNavigation:i}=e,[o,h]=(0,l.useState)(!1),[b,y]=(0,l.useState)(!1),[A,w]=(0,l.useState)(!1),[_,q]=(0,l.useState)(!1),[E,S]=(0,l.useState)(),[k,P]=(0,l.useState)(),[W,I]=(0,l.useState)(),[O,F]=(0,l.useState)(),T=(0,r.useRouter)();return(0,l.useEffect)(()=>{c.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.A.highlightAll()},[]),(0,l.useEffect)(()=>{if(T.query&&(T.query.fullscreen&&h("true"===T.query.fullscreen),T.query.page&&h(!0),T.query.noh1&&y("true"===T.query.noh1),T.query.properties&&w("true"===T.query.properties),T.query.current)){let t=Array.isArray(T.query.current)?T.query.current[0]:T.query.current;if(E!==t){var e;S(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=T.asPath.split("?")[0],{previous:a,next:n}=(0,j.Pb)(t);P(a),I(n),F((0,j.Oj)(t))},[T]),(0,n.jsxs)(n.Fragment,{children:[T.isReady&&o&&(0,n.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(A?"is-properties":""),children:s}),T.isReady&&!o&&(0,n.jsxs)(d,{fadeIn:!0,variant:"fixed",header:(0,n.jsx)(p.A,{drawerOpen:_,onToggle:q,brand:(0,n.jsx)(v.A,{children:"DB-UX"}),primaryAction:(0,n.jsx)(f.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,n.jsx)(R,{}),children:(0,n.jsx)(N,{})}),children:[O&&O.length>1&&(0,n.jsx)(m.A,{spacing:"none",width:"large",children:(0,n.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==O?void 0:O.map(e=>{var t;return(0,n.jsxs)(l.Fragment,{children:["/"!==e.path&&(0,n.jsx)(g.A,{icon:"chevron_right"}),(0,n.jsx)(u(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,n.jsx)(m.A,{spacing:"none",width:"large",children:s}),!i&&(null!=k?k:W)&&(0,n.jsxs)(m.A,{width:"large",spacing:"small",className:"link-containers",children:[k&&(0,n.jsx)(u(),{className:"previous-link-container",href:null!==(t=k.path)&&void 0!==t?t:"/",children:(0,n.jsxs)(x.A,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Previous"}),(0,n.jsx)("span",{"data-icon":"arrow_left",children:k.label})]})}),W&&(0,n.jsx)(u(),{className:"next-link-container",href:null!==(a=W.path)&&void 0!==a?a:"/",children:(0,n.jsxs)(x.A,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Next"}),(0,n.jsx)("span",{"data-icon-after":"arrow_right",children:W.label})]})})]})]})]})},W=i()(async()=>P,{ssr:!1})},91133:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});var n=a(31242),r=a(14041),s=a(42372);let i=()=>{let e=(0,n.useRouter)();return(0,r.useEffect)(()=>{if(e){let t=e.asPath.split("?"),a=t[0].replace("/","").split("/"),n=a.length>0&&"components"===a[0],r=a.length>1?a[1]:void 0,i=a.length>2?a[2]:void 0,l=a.length>3?a[3]:void 0,c=2===t.length?"?".concat(t[1]):"";if(n&&r){let t=[];i&&l?t.push(i,l):i?t.push(i):t.push("overview");let a=(0,s.g9)().find(e=>{var t;return null===(t=e.path)||void 0===t?void 0:t.endsWith(r)});(null==a?void 0:a.path)?e.push("".concat(a.path,"/").concat(t.join("/")).concat(c)):e.push("/")}}},[e]),null}},94413:(e,t,a)=>{"use strict";a.r(t),a.d(t,{__N_SSG:()=>u,default:()=>h});var n=a(31085),r=a(31242);a(14041);var s=a(42372),i=a(83952),l=a(42124),c=a(91133);let o=e=>{let t;for(let a of s.ll)if(a.subNavigation){for(let n of a.subNavigation)if(n.name===e&&n.component){t=n.component;break}if(t)break}return t};var u=!0;function h(){let e=(0,r.useRouter)().query.slug,t=Array.isArray(e)?e:e?[e]:[],a=t.length<1,u=t.at(-1),h=!(0,s.sr)().includes(t[0]);if(!a&&h)return(0,n.jsx)(c.A,{});if("overview"===u){let e=o(t.at(-2));return(0,n.jsx)(i.A,{children:e})}return(0,n.jsx)(l.A,{})}}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>t(37357)),_N_E=e.O()}]);