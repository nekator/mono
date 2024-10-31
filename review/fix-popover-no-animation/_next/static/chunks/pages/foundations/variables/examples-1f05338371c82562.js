(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5649],{50885:(e,a,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/variables/examples",function(){return t(66451)}])},50115:(e,a,t)=>{"use strict";t.d(a,{Z:()=>I});var n=t(52322),s=t(5632),r=t(25237),i=t.n(r),c=t(2784),l=t(61183),o=t(39097),d=t.n(o),h=t(98072);let u=(0,c.forwardRef)(function(e,a){let t=a||(0,c.useRef)(a),[s,r]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,n.jsxs)("div",{ref:t,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.X)(s),children:[(0,n.jsx)(n.Fragment,{children:e.header}),(0,n.jsx)("main",{className:"db-main",children:e.children}),(0,n.jsx)(n.Fragment,{children:e.footer})]})});var p=t(68908),m=t(48483),x=t(90434),g=t(97689),v=t(85803),f=t(72288),j=t(76460),b=t(40245),y=t(29469);let N=(e,a,t)=>{if(!t.query.slug)return a.path===t.pathname;let{slug:n}=t.query,s=Array.isArray(n)?n:[n];return a.path==="/components/".concat(s.join("/"))},w=e=>{var a;let{navItem:t}=e,r=(0,s.useRouter)(),i=N(r.pathname,t,r);return(0,n.jsx)(y.Z,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:a}=e;return!0!==a}).map(e=>(0,n.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,n.jsx)(d(),{href:null!==(a=t.path)&&void 0!==a?a:"","aria-current":i?"page":void 0,children:t.label},"router-path-".concat(t.path))})},Z=()=>(0,n.jsx)(b.Z,{children:j.Z6.map(e=>(0,n.jsx)(w,{navItem:e},"router-path-".concat(e.path)))});var S=t(35368),q=t(9842);let _=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},E="db-ui",k="mono",A=()=>{let e=(0,s.useRouter)(),[a,t]=(0,c.useState)(),[r,i]=(0,c.useState)(),l=a=>{let t=e.basePath,n=a.find(e=>t.includes(e));n&&i(n)},o=(e,a)=>{let n=[],s=[],r=[],i=[],c=[],l=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):n.push(e);t({others:n,features:s,docs:l,refactors:i,issues:c,bugfixes:r,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await _("https://api.github.com/repos/".concat(E,"/").concat(k,"/branches")),a=(await _("https://api.github.com/repos/".concat(E,"/").concat(k,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(t),l(a),o(a,t)})().catch(e=>{console.error(e)})},[]);let d=a=>{let t=e.asPath,n=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,S.sanitize)("https://".concat(E,".github.io/").concat(k).concat(n?"/version":"/review","/").concat(a).concat(t)))};return a?(0,n.jsx)(q.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{d(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,n.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,n.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null},D=e=>{var a,t;let{children:r,noNavigation:i}=e,[o,h]=(0,c.useState)(!1),[b,y]=(0,c.useState)(!1),[N,w]=(0,c.useState)(!1),[S,q]=(0,c.useState)(!1),[_,E]=(0,c.useState)(),[k,D]=(0,c.useState)(),[I,R]=(0,c.useState)(),[C,F]=(0,c.useState)(),W=(0,s.useRouter)();return(0,c.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(W.query&&(W.query.fullscreen&&h("true"===W.query.fullscreen),W.query.page&&h(!0),W.query.noh1&&y("true"===W.query.noh1),W.query.properties&&w("true"===W.query.properties),W.query.current)){let a=Array.isArray(W.query.current)?W.query.current[0]:W.query.current;if(_!==a){var e;E(a),null===(e=document.querySelector("#".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let a=W.asPath.split("?")[0],{previous:t,next:n}=(0,j.vn)(a);D(t),R(n),F((0,j.kn)(a))},[W]),(0,n.jsxs)(n.Fragment,{children:[W.isReady&&o&&(0,n.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(N?"is-properties":""),children:r}),W.isReady&&!o&&(0,n.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,n.jsx)(p.Z,{drawerOpen:S,onToggle:q,brand:(0,n.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,n.jsx)(x.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,n.jsx)(A,{}),children:(0,n.jsx)(Z,{})}),children:[C&&C.length>1&&(0,n.jsx)(g.Z,{spacing:"none",width:"large",children:(0,n.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==C?void 0:C.map(e=>{var a;return(0,n.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,n.jsx)(v.Z,{icon:"chevron_right"}),(0,n.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(a=e.path)&&void 0!==a?a:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,n.jsx)(g.Z,{spacing:"none",width:"large",children:r}),!i&&(null!=k?k:I)&&(0,n.jsxs)(g.Z,{width:"large",spacing:"small",className:"link-containers",children:[k&&(0,n.jsx)(d(),{className:"previous-link-container",href:null!==(a=k.path)&&void 0!==a?a:"/",children:(0,n.jsxs)(f.Z,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Previous"}),(0,n.jsx)("span",{"data-icon":"arrow_left",children:k.label})]})}),I&&(0,n.jsx)(d(),{className:"next-link-container",href:null!==(t=I.path)&&void 0!==t?t:"/",children:(0,n.jsxs)(f.Z,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Next"}),(0,n.jsx)("span",{"data-icon-after":"arrow_right",children:I.label})]})})]})]})]})},I=i()(async()=>D,{ssr:!1})},66451:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>o});var n=t(52322),s=t(50115),r=t(72288),i=t(70938),c=t(85803),l=t(90434);let o=()=>(0,n.jsxs)(s.Z,{children:[(0,n.jsx)("h1",{children:"Variable Examples"}),(0,n.jsx)("blockquote",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:'Some of the variables are "missused" to visualize the effect of e.g. a padding.'}),(0,n.jsx)("li",{children:"All orange containers should symbolize the used variable."}),(0,n.jsxs)("li",{children:["Don't use it like this in a real app. \uD83D\uDCA2For example"," ",(0,n.jsx)("code",{children:"width: var(--db-spacing-fixed-md)"})," \uD83D\uDCA5"]})]})}),["Spacing fixed","Spacing responsive","Sizing"].map(e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:e}),(0,n.jsx)("div",{className:"example-container",children:["functional","regular","expressive"].map(a=>(0,n.jsxs)(r.Z,{"data-density":a,className:"example-item",spacing:"small",children:[(0,n.jsx)(i.Z,{icon:"none",semantic:"informational",children:a.charAt(0).toUpperCase()+a.slice(1)}),(0,n.jsxs)("div",{className:"example-".concat(e.toLowerCase().replaceAll(" ","-")),children:["Spacing fixed"===e&&(0,n.jsxs)("div",{children:[(0,n.jsx)(c.Z,{icon:"person",children:"User"}),(0,n.jsx)("span",{children:"gap:db-spacing-fixed-xl"}),(0,n.jsx)(c.Z,{icon:"edit",children:"Edit"}),(0,n.jsx)("div",{className:"gap1",children:"xl"}),(0,n.jsx)("div",{className:"gap2",children:"xl"})]}),"Spacing responsive"===e&&(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"margin1",children:"sm"}),(0,n.jsx)("span",{children:"margin-inline:db-spacing-responsive-sm"}),(0,n.jsx)("div",{className:"margin2",children:"sm"})]}),"Sizing"===e&&(0,n.jsxs)("div",{children:[(0,n.jsx)(l.Z,{children:"height: sm"}),(0,n.jsx)("div",{className:"sizing",children:"sm"})]})]})]}))})]}))]})}},e=>{var a=a=>e(e.s=a);e.O(0,[3430,1954,4540,6460,2888,9774,179],()=>a(50885)),_N_E=e.O()}]);