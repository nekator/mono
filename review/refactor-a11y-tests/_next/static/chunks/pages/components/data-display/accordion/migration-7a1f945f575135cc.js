(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9156],{76425:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/accordion/migration",function(){return n(37402)}])},87648:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var a=n(31085),r=n(71184);function s(e){let t={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,a.jsx)(t.p,{children:"New Component \uD83E\uDD73"})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},37402:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var a=n(31085),r=n(71184),s=n(83952),c=n(87648);let i=e=>{let{children:t}=e;return(0,a.jsx)(s.A,{children:t})};function o(e){let t={h1:"h1",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"dbaccordion-migration",children:"DBAccordion Migration"}),"\n",(0,a.jsx)(c.default,{})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})})}},83952:(e,t,n)=>{"use strict";n.d(t,{A:()=>I});var a=n(31085),r=n(31242),s=n(83894),c=n.n(s),i=n(14041),o=n(30127),l=n(34747),u=n.n(l),d=n(5188);let h=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t),[r,s]=(0,i.useState)(()=>!1),c=(0,i.useRef)(!1);return c.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),c.current=!0),(0,i.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:n,...(0,d.MD)(e,[]),id:e.id,className:(0,d.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,d.EB)(r),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=n(23116),m=n(23944),f=n(95374),g=n(12764),x=n(80692),j=n(64286),v=n(42372),b=n(61338),w=n(6900);let y=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:a}=n.query,r=Array.isArray(a)?a:[a];return t.path==="/components/".concat(r.join("/"))},A=e=>{var t;let{navItem:n}=e,s=(0,r.useRouter)(),c=y(s.pathname,n,s);return(0,a.jsx)(w.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,a.jsx)(A,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,a.jsx)(u(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":c?"page":void 0,children:n.label},"router-path-".concat(n.path))})},N=()=>(0,a.jsx)(b.A,{children:v.bw.map(e=>(0,a.jsx)(A,{navItem:e},"router-path-".concat(e.path)))});var q=n(97519),_=n(47982);let k=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},E="db-ui",S="mono",R=()=>{let e=(0,r.useRouter)(),[t,n]=(0,i.useState)(),[s,c]=(0,i.useState)(),o=t=>{let n=e.basePath,a=t.find(e=>n.includes(e));a&&c(a)},l=(e,t)=>{let a=[],r=[],s=[],c=[],i=[],o=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?c.push(e):/^\d*-/.test(e)?i.push(e):e.startsWith("docs")?o.push(e):a.push(e);n({others:a,features:r,docs:o,refactors:c,issues:i,bugfixes:s,versions:e})};(0,i.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(E,"/").concat(S,"/branches")),t=(await k("https://api.github.com/repos/".concat(E,"/").concat(S,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.unshift("latest"),o(n),o(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let u=t=>{let n=e.asPath,a=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace((0,q.sanitize)("https://".concat(E,".github.io/").concat(S).concat(a?"/version":"/review","/").concat(t).concat(n)))};return t?(0,a.jsx)(_.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{u(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,a.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,a.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},F=e=>{var t,n;let{children:s,noNavigation:c}=e,[l,d]=(0,i.useState)(!1),[b,w]=(0,i.useState)(!1),[y,A]=(0,i.useState)(!1),[q,_]=(0,i.useState)(!1),[k,E]=(0,i.useState)(),[S,F]=(0,i.useState)(),[I,B]=(0,i.useState)(),[O,P]=(0,i.useState)(),W=(0,r.useRouter)();return(0,i.useEffect)(()=>{o.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),o.A.highlightAll()},[]),(0,i.useEffect)(()=>{if(W.query&&(W.query.fullscreen&&d("true"===W.query.fullscreen),W.query.page&&d(!0),W.query.noh1&&w("true"===W.query.noh1),W.query.properties&&A("true"===W.query.properties),W.query.current)){let t=Array.isArray(W.query.current)?W.query.current[0]:W.query.current;if(k!==t){var e;E(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=W.asPath.split("?")[0],{previous:n,next:a}=(0,v.Pb)(t);F(n),B(a),P((0,v.Oj)(t))},[W]),(0,a.jsxs)(a.Fragment,{children:[W.isReady&&l&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(y?"is-properties":""),children:s}),W.isReady&&!l&&(0,a.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.A,{drawerOpen:q,onToggle:_,brand:(0,a.jsx)(m.A,{children:"DB-UX"}),primaryAction:(0,a.jsx)(f.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(R,{}),children:(0,a.jsx)(N,{})}),children:[O&&O.length>1&&(0,a.jsx)(g.A,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==O?void 0:O.map(e=>{var t;return(0,a.jsxs)(i.Fragment,{children:["/"!==e.path&&(0,a.jsx)(x.A,{icon:"chevron_right"}),(0,a.jsx)(u(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(g.A,{spacing:"none",width:"large",children:s}),!c&&(null!=S?S:I)&&(0,a.jsxs)(g.A,{width:"large",spacing:"small",className:"link-containers",children:[S&&(0,a.jsx)(u(),{className:"previous-link-container",href:null!==(t=S.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(j.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:S.label})]})}),I&&(0,a.jsx)(u(),{className:"next-link-container",href:null!==(n=I.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(j.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:I.label})]})})]})]})]})},I=c()(async()=>F,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,8250,8367,2372,636,6593,8792],()=>t(76425)),_N_E=e.O()}]);