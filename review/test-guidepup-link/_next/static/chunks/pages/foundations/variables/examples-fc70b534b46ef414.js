(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5649],{50885:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/variables/examples",function(){return t(45547)}])},53148:function(e,a,t){"use strict";t.d(a,{Z:function(){return I}});var n=t(52322),s=t(5632),i=t(25237),r=t.n(i),c=t(2784),l=t(61183),o=t(39097),d=t.n(o),u=t(43251);let h=(0,c.forwardRef)(function(e,a){let t=a||(0,c.useRef)(a),[s,i]=(0,c.useState)(()=>!1),r=(0,c.useRef)(!1);return r.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),r.current=!0),(0,c.useEffect)(()=>{i(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{i(!0)}):i(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,n.jsxs)("div",{ref:t,...(0,u.mS)(e,[]),id:e.id,className:(0,u.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":s,children:[(0,n.jsx)(n.Fragment,{children:e.header}),(0,n.jsx)("main",{className:"db-main",children:e.children}),(0,n.jsx)(n.Fragment,{children:e.footer})]})});var p=t(82664),m=t(98310),x=t(10326),v=t(55327),f=t(74819),g=t(70741),j=t(92811),b=t(33759),y=t(39120);let N=(e,a)=>{var t;return"/"===a.path?"/"===e:e.includes("".concat(a.path,"/"))||e===a.path||!!(null===(t=a.subNavigation)||void 0===t?void 0:t.find(a=>e.includes("".concat(a.path,"/"))))},w=e=>{var a;let{navItem:t}=e,i=N((0,s.useRouter)().pathname,t);return(0,n.jsx)(y.Z,{active:i,backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:a}=e;return!0!==a}).map(e=>(0,n.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,n.jsx)(d(),{href:null!==(a=t.path)&&void 0!==a?a:"",children:t.label},"router-path-".concat(t.path))})};var Z=()=>(0,n.jsx)(b.Z,{children:j.Z6.map(e=>(0,n.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),S=t(35368),_=t(79081);let E=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},q="db-ui",k="mono";var A=()=>{let e=(0,s.useRouter)(),[a,t]=(0,c.useState)(),[i,r]=(0,c.useState)(),l=a=>{let t=e.basePath,n=a.find(e=>t.includes(e));n&&r(n)},o=(e,a)=>{let n=[],s=[],i=[],r=[],c=[],l=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?i.push(e):e.startsWith("refactor")?r.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):n.push(e);t({others:n,features:s,docs:l,refactors:r,issues:c,bugfixes:i,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await E("https://api.github.com/repos/".concat(q,"/").concat(k,"/branches")),a=(await E("https://api.github.com/repos/".concat(q,"/").concat(k,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(t),l(a),o(a,t)})().catch(e=>{console.error(e)})},[]);let d=a=>{let t=e.asPath,n=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,S.sanitize)("https://".concat(q,".github.io/").concat(k).concat(n?"/version":"/review","/").concat(a).concat(t)))};return a?(0,n.jsx)(_.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:i,onChange:e=>{d(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,n.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,n.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null};let D=e=>{var a,t;let{children:i,noNavigation:r}=e,[o,u]=(0,c.useState)(!1),[b,y]=(0,c.useState)(!1),[N,w]=(0,c.useState)(!1),[S,_]=(0,c.useState)(!1),[E,q]=(0,c.useState)(),[k,D]=(0,c.useState)(),[I,R]=(0,c.useState)(),[C,F]=(0,c.useState)(),W=(0,s.useRouter)();return(0,c.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(W.query&&(W.query.fullscreen&&u("true"===W.query.fullscreen),W.query.page&&u(!0),W.query.noh1&&y("true"===W.query.noh1),W.query.properties&&w("true"===W.query.properties),W.query.current)){let a=Array.isArray(W.query.current)?W.query.current[0]:W.query.current;if(E!==a){var e;q(a),null===(e=document.querySelector("#".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let a=W.asPath.split("?")[0],{previous:t,next:n}=(0,j.vn)(a);D(t),R(n),F((0,j.kn)(a))},[W]),(0,n.jsxs)(n.Fragment,{children:[W.isReady&&o&&(0,n.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(N?"is-properties":""),children:i}),W.isReady&&!o&&(0,n.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,n.jsx)(p.Z,{drawerOpen:S,onToggle:_,brand:(0,n.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,n.jsx)(x.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,n.jsx)(A,{}),children:(0,n.jsx)(Z,{})}),children:[C&&C.length>1&&(0,n.jsx)(v.Z,{spacing:"none",width:"large",children:(0,n.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==C?void 0:C.map(e=>{var a;return(0,n.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,n.jsx)(f.Z,{icon:"chevron_right"}),(0,n.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(a=e.path)&&void 0!==a?a:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,n.jsx)(v.Z,{spacing:"none",width:"large",children:i}),!r&&(null!=k?k:I)&&(0,n.jsxs)(v.Z,{width:"large",spacing:"small",className:"link-containers",children:[k&&(0,n.jsx)(d(),{className:"previous-link-container",href:null!==(a=k.path)&&void 0!==a?a:"/",children:(0,n.jsxs)(g.Z,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Previous"}),(0,n.jsx)("span",{"data-icon":"arrow_left",children:k.label})]})}),I&&(0,n.jsx)(d(),{className:"next-link-container",href:null!==(t=I.path)&&void 0!==t?t:"/",children:(0,n.jsxs)(g.Z,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Next"}),(0,n.jsx)("span",{"data-icon-after":"arrow_right",children:I.label})]})})]})]})]})};var I=r()(async()=>D,{ssr:!1})},45547:function(e,a,t){"use strict";t.r(a);var n=t(52322),s=t(53148),i=t(70741),r=t(47437),c=t(74819),l=t(10326);a.default=()=>(0,n.jsxs)(s.Z,{children:[(0,n.jsx)("h1",{children:"Variable Examples"}),(0,n.jsx)("blockquote",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:'Some of the variables are "missused" to visualize the effect of e.g. a padding.'}),(0,n.jsx)("li",{children:"All orange containers should symbolize the used variable."}),(0,n.jsxs)("li",{children:["Don't use it like this in a real app. \uD83D\uDCA2For example"," ",(0,n.jsx)("code",{children:"width: var(--db-spacing-fixed-md)"})," \uD83D\uDCA5"]})]})}),["Spacing fixed","Spacing responsive","Sizing"].map(e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:e}),(0,n.jsx)("div",{className:"example-container",children:["functional","regular","expressive"].map(a=>(0,n.jsxs)(i.Z,{className:"example-item db-density-".concat(a),spacing:"small",children:[(0,n.jsx)(r.Z,{icon:"none",semantic:"informational",children:a.charAt(0).toUpperCase()+a.slice(1)}),(0,n.jsxs)("div",{className:"example-".concat(e.toLowerCase().replaceAll(" ","-")),children:["Spacing fixed"===e&&(0,n.jsxs)("div",{children:[(0,n.jsx)(c.Z,{icon:"user",children:"User"}),(0,n.jsx)("span",{children:"gap:db-spacing-fixed-xl"}),(0,n.jsx)(c.Z,{icon:"edit",children:"Edit"}),(0,n.jsx)("div",{className:"gap1",children:"xl"}),(0,n.jsx)("div",{className:"gap2",children:"xl"})]}),"Spacing responsive"===e&&(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"margin1",children:"sm"}),(0,n.jsx)("span",{children:"margin-inline:db-spacing-responsive-sm"}),(0,n.jsx)("div",{className:"margin2",children:"sm"})]}),"Sizing"===e&&(0,n.jsxs)("div",{children:[(0,n.jsx)(l.Z,{children:"height: sm"}),(0,n.jsx)("div",{className:"sizing",children:"sm"})]})]})]}))})]}))]})}},function(e){e.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return e(e.s=50885)}),_N_E=e.O()}]);