(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4542],{63609:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/variables/examples",function(){return t(63165)}])},83952:(e,a,t)=>{"use strict";t.d(a,{A:()=>R});var s=t(31085),n=t(31242),r=t(83894),i=t.n(r),c=t(14041),l=t(30127),o=t(34747),d=t.n(o),h=t(5188);let u=(0,c.forwardRef)(function(e,a){let t=a||(0,c.useRef)(a),[n,r]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,s.jsxs)("div",{ref:t,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(n),children:[(0,s.jsx)(s.Fragment,{children:e.header}),(0,s.jsx)("main",{className:"db-main",children:e.children}),(0,s.jsx)(s.Fragment,{children:e.footer})]})});var p=t(23116),m=t(23944),x=t(95374),g=t(12764),v=t(80692),f=t(64286),j=t(32825),b=t(61338),A=t(6900);let y=(e,a,t)=>{if(!t.query.slug)return a.path===t.pathname;let{slug:s}=t.query,n=Array.isArray(s)?s:[s];return a.path==="/components/".concat(n.join("/"))},w=e=>{var a;let{navItem:t}=e,r=(0,n.useRouter)(),i=y(r.pathname,t,r);return(0,s.jsx)(A.A,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,s.jsx)(s.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:a}=e;return!0!==a}).map(e=>(0,s.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,s.jsx)(d(),{href:null!==(a=t.path)&&void 0!==a?a:"","aria-current":i?"page":void 0,children:t.label},"router-path-".concat(t.path))})},N=()=>(0,s.jsx)(b.A,{children:j.bw.map(e=>(0,s.jsx)(w,{navItem:e},"router-path-".concat(e.path)))});var S=t(97519),q=t(47982);let E=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},_="db-ui",k="mono",D=()=>{let e=(0,n.useRouter)(),[a,t]=(0,c.useState)(),[r,i]=(0,c.useState)(),l=a=>{let t=e.basePath,s=a.find(e=>t.includes(e));s&&i(s)},o=(e,a)=>{let s=[],n=[],r=[],i=[],c=[],l=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?n.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):s.push(e);t({others:s,features:n,docs:l,refactors:i,issues:c,bugfixes:r,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await E("https://api.github.com/repos/".concat(_,"/").concat(k,"/branches")),a=(await E("https://api.github.com/repos/".concat(_,"/").concat(k,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));a.unshift("latest"),l(t),l(a),o(a,t)})().catch(e=>{console.error(e)})},[]);let d=a=>{let t=e.asPath,s=3===a.split(".").length&&a.startsWith("v")||"latest"===a;window.location.replace((0,S.sanitize)("https://".concat(_,".github.io/").concat(k).concat(s?"/version":"/review","/").concat(a).concat(t)))};return a?(0,s.jsx)(q.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{d(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,s.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,s.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null},F=e=>{var a,t;let{children:r,noNavigation:i}=e,[o,h]=(0,c.useState)(!1),[b,A]=(0,c.useState)(!1),[y,w]=(0,c.useState)(!1),[S,q]=(0,c.useState)(!1),[E,_]=(0,c.useState)(),[k,F]=(0,c.useState)(),[R,C]=(0,c.useState)(),[I,O]=(0,c.useState)(),P=(0,n.useRouter)();return(0,c.useEffect)(()=>{l.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.A.highlightAll()},[]),(0,c.useEffect)(()=>{if(P.query&&(P.query.fullscreen&&h("true"===P.query.fullscreen),P.query.page&&h(!0),P.query.noh1&&A("true"===P.query.noh1),P.query.properties&&w("true"===P.query.properties),P.query.current)){let a=Array.isArray(P.query.current)?P.query.current[0]:P.query.current;if(E!==a){var e;_(a),null===(e=document.querySelector("#".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let a=P.asPath.split("?")[0],{previous:t,next:s}=(0,j.Pb)(a);F(t),C(s),O((0,j.Oj)(a))},[P]),(0,s.jsxs)(s.Fragment,{children:[P.isReady&&o&&(0,s.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(y?"is-properties":""),children:r}),P.isReady&&!o&&(0,s.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,s.jsx)(p.A,{drawerOpen:S,onToggle:q,brand:(0,s.jsx)(m.A,{children:"DB-UX"}),primaryAction:(0,s.jsx)(x.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,s.jsx)(D,{}),children:(0,s.jsx)(N,{})}),children:[I&&I.length>1&&(0,s.jsx)(g.A,{spacing:"none",width:"large",children:(0,s.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==I?void 0:I.map(e=>{var a;return(0,s.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,s.jsx)(v.A,{icon:"chevron_right"}),(0,s.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(a=e.path)&&void 0!==a?a:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,s.jsx)(g.A,{spacing:"none",width:"large",children:r}),!i&&(null!=k?k:R)&&(0,s.jsxs)(g.A,{width:"large",spacing:"small",className:"link-containers",children:[k&&(0,s.jsx)(d(),{className:"previous-link-container",href:null!==(a=k.path)&&void 0!==a?a:"/",children:(0,s.jsxs)(f.A,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Previous"}),(0,s.jsx)("span",{"data-icon":"arrow_left",children:k.label})]})}),R&&(0,s.jsx)(d(),{className:"next-link-container",href:null!==(t=R.path)&&void 0!==t?t:"/",children:(0,s.jsxs)(f.A,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Next"}),(0,s.jsx)("span",{"data-icon-after":"arrow_right",children:R.label})]})})]})]})]})},R=i()(async()=>F,{ssr:!1})},63165:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>o});var s=t(31085),n=t(83952),r=t(64286),i=t(64140),c=t(80692),l=t(95374);let o=()=>(0,s.jsxs)(n.A,{children:[(0,s.jsx)("h1",{children:"Variable Examples"}),(0,s.jsx)("blockquote",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:'Some of the variables are "missused" to visualize the effect of e.g. a padding.'}),(0,s.jsx)("li",{children:"All orange containers should symbolize the used variable."}),(0,s.jsxs)("li",{children:["Don't use it like this in a real app. \uD83D\uDCA2For example"," ",(0,s.jsx)("code",{children:"width: var(--db-spacing-fixed-md)"})," \uD83D\uDCA5"]})]})}),["Spacing fixed","Spacing responsive","Sizing"].map(e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:e}),(0,s.jsx)("div",{className:"example-container",children:["functional","regular","expressive"].map(a=>(0,s.jsxs)(r.A,{"data-density":a,className:"example-item",spacing:"small",children:[(0,s.jsx)(i.A,{icon:"none",semantic:"informational",children:a.charAt(0).toUpperCase()+a.slice(1)}),(0,s.jsxs)("div",{className:"example-".concat(e.toLowerCase().replaceAll(" ","-")),children:["Spacing fixed"===e&&(0,s.jsxs)("div",{children:[(0,s.jsx)(c.A,{icon:"person",children:"User"}),(0,s.jsx)("span",{children:"gap:db-spacing-fixed-xl"}),(0,s.jsx)(c.A,{icon:"edit",children:"Edit"}),(0,s.jsx)("div",{className:"gap1",children:"xl"}),(0,s.jsx)("div",{className:"gap2",children:"xl"})]}),"Spacing responsive"===e&&(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"margin1",children:"sm"}),(0,s.jsx)("span",{children:"margin-inline:db-spacing-responsive-sm"}),(0,s.jsx)("div",{className:"margin2",children:"sm"})]}),"Sizing"===e&&(0,s.jsxs)("div",{children:[(0,s.jsx)(l.A,{children:"height: sm"}),(0,s.jsx)("div",{className:"sizing",children:"sm"})]})]})]}))})]}))]})}},e=>{var a=a=>e(e.s=a);e.O(0,[3578,8250,1446,2825,636,6593,8792],()=>a(63609)),_N_E=e.O()}]);