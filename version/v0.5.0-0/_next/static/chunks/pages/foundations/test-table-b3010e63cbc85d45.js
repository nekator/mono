(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3722],{39448:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/test-table",function(){return a(14681)}])},50115:function(e,s,a){"use strict";a.d(s,{Z:function(){return Z}});var n=a(52322),t=a(5632),o=a(25237),i=a.n(o),c=a(2784),l=a(61183),r=a(39097),h=a.n(r),u=a(98072);let d=(0,c.forwardRef)(function(e,s){let a=s||(0,c.useRef)(s),[t,o]=(0,c.useState)(()=>!1),i=(0,c.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,c.useEffect)(()=>{o(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{o(!0)}):o(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,n.jsxs)("div",{ref:a,...(0,u.mS)(e,[]),id:e.id,className:(0,u.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":t,children:[(0,n.jsx)(n.Fragment,{children:e.header}),(0,n.jsx)("main",{className:"db-main",children:e.children}),(0,n.jsx)(n.Fragment,{children:e.footer})]})});var m=a(68908),p=a(48483),w=a(90434),g=a(97689),x=a(85803),A=a(72288),f=a(76460),C=a(40245),b=a(29469);let v=(e,s,a)=>{if(!a.query.slug)return s.path===a.pathname;let{slug:n}=a.query,t=Array.isArray(n)?n:[n];return s.path==="/components/".concat(t.join("/"))},j=e=>{var s;let{navItem:a}=e,o=(0,t.useRouter)(),i=v(o.pathname,a,o);return(0,n.jsx)(b.Z,{backButtonText:"Back to ".concat(a.label),subNavigation:a.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.subNavigation.filter(e=>{let{isHiddenInMenu:s}=e;return!0!==s}).map(e=>(0,n.jsx)(j,{navItem:e},"router-path-".concat(e.path)))}),children:a.subNavigation?a.label:(0,n.jsx)(h(),{href:null!==(s=a.path)&&void 0!==s?s:"","aria-current":i?"page":void 0,children:a.label},"router-path-".concat(a.path))})};var V=()=>(0,n.jsx)(C.Z,{children:f.Z6.map(e=>(0,n.jsx)(j,{navItem:e},"router-path-".concat(e.path)))}),y=a(35368),P=a(9842);let N=async e=>{try{let s=await fetch(e);return await s.json()}catch(e){console.error(e)}return[]},E="db-ui",G="mono";var S=()=>{let e=(0,t.useRouter)(),[s,a]=(0,c.useState)(),[o,i]=(0,c.useState)(),l=s=>{let a=e.basePath,n=s.find(e=>a.includes(e));n&&i(n)},r=(e,s)=>{let n=[],t=[],o=[],i=[],c=[],l=[];for(let e of s)e.startsWith("feat")||e.startsWith("feature")?t.push(e):e.startsWith("fix")||e.startsWith("bugfix")?o.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):n.push(e);a({others:n,features:t,docs:l,refactors:i,issues:c,bugfixes:o,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await N("https://api.github.com/repos/".concat(E,"/").concat(G,"/branches")),s=(await N("https://api.github.com/repos/".concat(E,"/").concat(G,"/tags"))).map(e=>e.name),a=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(a),l(s),r(s,a)})().catch(e=>{console.error(e)})},[]);let h=s=>{let a=e.asPath,n=3===s.split(".").length&&s.startsWith("v");window.location.replace((0,y.sanitize)("https://".concat(E,".github.io/").concat(G).concat(n?"/version":"/review","/").concat(s).concat(a)))};return s?(0,n.jsx)(P.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:o,onChange:e=>{h(e.target.value)},children:Object.entries(s).filter(e=>{let[s,a]=e;return(null==a?void 0:a.length)>0}).map(e=>{let[s,a]=e;return(0,n.jsx)("optgroup",{label:s,children:a.slice(0,15).map((e,a)=>(0,n.jsx)("option",{value:e,children:e},"".concat(s,"-").concat(e,"-").concat(a)))},s)})}):null};let R=e=>{var s,a;let{children:o,noNavigation:i}=e,[r,u]=(0,c.useState)(!1),[C,b]=(0,c.useState)(!1),[v,j]=(0,c.useState)(!1),[y,P]=(0,c.useState)(!1),[N,E]=(0,c.useState)(),[G,R]=(0,c.useState)(),[Z,q]=(0,c.useState)(),[O,D]=(0,c.useState)(),_=(0,t.useRouter)();return(0,c.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(_.query&&(_.query.fullscreen&&u("true"===_.query.fullscreen),_.query.page&&u(!0),_.query.noh1&&b("true"===_.query.noh1),_.query.properties&&j("true"===_.query.properties),_.query.current)){let s=Array.isArray(_.query.current)?_.query.current[0]:_.query.current;if(N!==s){var e;E(s),null===(e=document.querySelector("#".concat(s)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let s=_.asPath.split("?")[0],{previous:a,next:n}=(0,f.vn)(s);R(a),q(n),D((0,f.kn)(s))},[_]),(0,n.jsxs)(n.Fragment,{children:[_.isReady&&r&&(0,n.jsx)("div",{className:"".concat(C?"noh1":""," ").concat(v?"is-properties":""),children:o}),_.isReady&&!r&&(0,n.jsxs)(d,{fadeIn:!0,variant:"fixed",header:(0,n.jsx)(m.Z,{drawerOpen:y,onToggle:P,brand:(0,n.jsx)(p.Z,{children:"DB-UX"}),primaryAction:(0,n.jsx)(w.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,n.jsx)(S,{}),children:(0,n.jsx)(V,{})}),children:[O&&O.length>1&&(0,n.jsx)(g.Z,{spacing:"none",width:"large",children:(0,n.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==O?void 0:O.map(e=>{var s;return(0,n.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,n.jsx)(x.Z,{icon:"chevron_right"}),(0,n.jsx)(h(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(s=e.path)&&void 0!==s?s:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,n.jsx)(g.Z,{spacing:"none",width:"large",children:o}),!i&&(null!=G?G:Z)&&(0,n.jsxs)(g.Z,{width:"large",spacing:"small",className:"link-containers",children:[G&&(0,n.jsx)(h(),{className:"previous-link-container",href:null!==(s=G.path)&&void 0!==s?s:"/",children:(0,n.jsxs)(A.Z,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Previous"}),(0,n.jsx)("span",{"data-icon":"arrow_left",children:G.label})]})}),Z&&(0,n.jsx)(h(),{className:"next-link-container",href:null!==(a=Z.path)&&void 0!==a?a:"/",children:(0,n.jsxs)(A.Z,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Next"}),(0,n.jsx)("span",{"data-icon-after":"arrow_right",children:Z.label})]})})]})]})]})};var Z=i()(async()=>R,{ssr:!1})},14681:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var n=a(52322),t=a(50115),o=a(70938);let i=[{name:"accordion",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"badge",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"brand",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"button",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0,accessibilityReview:{name:"button",status:"DONE",date:"2024-04-22"}},{name:"card",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"checkbox",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0,accessibilityReview:{name:"checkbox",status:"DONE",date:"2024-07-24"}},{name:"divider",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!1,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!1},{name:"drawer",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0,accessibilityReview:{name:"drawer",status:"DONE",date:"2024-07-25"}},{name:"header",singleComponentVisuals:!1,singleComponentAxe:!1,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"icon",singleComponentVisuals:!1,singleComponentAxe:!1,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"infotext",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0,accessibilityReview:{name:"infotext",status:"DONE",date:"2023-11-23"}},{name:"input",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0,accessibilityReview:{name:"input",status:"DONE",date:"2023-11-23"}},{name:"link",singleComponentVisuals:!1,singleComponentAxe:!1,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0,accessibilityReview:{name:"link",status:"DONE",date:"2023-11-23"}},{name:"navigation",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"notification",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0,accessibilityReview:{name:"notification",status:"DONE",date:"2023-11-23"}},{name:"page",singleComponentVisuals:!1,singleComponentAxe:!1,showcaseVisuals:!1,showcaseAxe:!1,showcaseAC:!1,showcaseGP:!1},{name:"popover",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"radio",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0,accessibilityReview:{name:"radio",status:"DONE",date:"2024-07-24"}},{name:"section",singleComponentVisuals:!1,singleComponentAxe:!1,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"switch",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"select",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0,accessibilityReview:{name:"select",status:"DONE",date:"2023-11-23"}},{name:"tabs",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"tag",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"textarea",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0},{name:"tooltip",singleComponentVisuals:!0,singleComponentAxe:!0,showcaseVisuals:!0,showcaseAxe:!0,showcaseAC:!0,showcaseGP:!0}];var c=a(2784),l=e=>{let[s,a]=(0,c.useState)("critical"),[t,i]=(0,c.useState)("Missing");return(0,c.useEffect)(()=>{e&&"DONE"===e.status?(a("successful"),i("Done")):e&&"REVIEW"===e.status?(a("warning"),i("In review")):e&&"PROGRESS"===e.status?(a("warning"),i("In progress")):(a("critical"),i("Missing"))},[e]),(0,n.jsx)(o.Z,{semantic:s,children:t})};let r=[{label:"Component"},{label:"Single Component: Visuals",href:"https://playwright.dev/docs/screenshots"},{label:"Single Component: A11y (Axe)",href:"https://github.com/dequelabs/axe-core"},{label:"Showcase: Visuals",href:"https://playwright.dev/docs/screenshots"},{label:"Showcase: A11y (Axe)",href:"https://github.com/dequelabs/axe-core"},{label:"Showcase: A11y (Accessibility-Checker)",href:"https://github.com/IBMa/equal-access"},{label:"Showcase: A11y (Screen-Reader)",href:"https://github.com/guidepup/guidepup"},{label:"Manual audit conducted by accessibility experts"},{label:"Testing stable"}];var h=()=>(0,n.jsx)(t.Z,{children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsx)("tr",{children:r.map(e=>(0,n.jsx)("th",{children:e.href?(0,n.jsx)("a",{href:e.href,target:"_blank",referrerPolicy:"no-referrer",children:e.label}):e.label},e.label))})}),(0,n.jsx)("tbody",{children:i.map(e=>{let{name:s,singleComponentVisuals:a,singleComponentAxe:t,showcaseVisuals:i,showcaseAxe:c,showcaseAC:r,showcaseGP:h,accessibilityReview:u}=e,d=a&&t&&i&&c&&r&&h&&(null==u?void 0:u.status)==="DONE";return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:s}),[a,t,i,c,r,h].map((e,a)=>(0,n.jsx)("td",{children:(0,n.jsx)(o.Z,{semantic:e?"successful":"critical",children:e?"Done":"Missing"})},"".concat(s,"-").concat(a))),(0,n.jsx)("td",{children:(0,n.jsx)(l,{...u})}),(0,n.jsx)("td",{children:(0,n.jsx)(o.Z,{semantic:d?"successful":"critical",children:d?"Done \uD83C\uDF89":"Missing"})})]},s)})})]})})}},function(e){e.O(0,[6061,1954,4540,6460,2888,9774,179],function(){return e(e.s=39448)}),_N_E=e.O()}]);