(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2560],{35255:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors/readme",function(){return n(63209)}])},63209:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var r=n(52322),s=n(50115),o=n(45392);function a(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"colors",children:"Colors"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["You use ",(0,r.jsx)(t.strong,{children:"Colors"})," to highlight an area with a specific color."]}),"\n",(0,r.jsxs)(t.li,{children:["You can also use it to change the text color for components with the ",(0,r.jsx)(t.code,{children:"*-transparent-semi"})," colors."]}),"\n",(0,r.jsxs)(t.li,{children:["Most classes/placeholders will change ",(0,r.jsx)(t.code,{children:"color"})," and ",(0,r.jsx)(t.code,{children:"background-color"})," and will set properties, which will be passed down to adaptive components."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["First, you can use our ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"./color-usage-guide",children:"color usage guide"})})," to find out which method is best for coloring your layouts or components."]}),"\n",(0,r.jsxs)(t.li,{children:["The colors of layouts can be easily set using the predefined ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"./color-classes",children:"color classes"})}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["When developing your own components, ",(0,r.jsx)(t.code,{children:"SCSS"})," variables or ",(0,r.jsx)(t.code,{children:"CSS Custom Properties"})," should be used."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\uD83D\uDEA7 The overview of our color variables is still in the making. Please come back soon."})}),"\n",(0,r.jsx)(t.h2,{id:"how-to-include-colors",children:"How to include colors"}),"\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.strong,{children:"CSS"})," and ",(0,r.jsx)(t.strong,{children:"Tailwind"})," you need to use the import ",(0,r.jsx)(t.code,{children:'@import "@db-ui/foundations/build/css/color/classes/all.css";'})," in your root ",(0,r.jsx)(t.code,{children:".css"})," file.\nOr if you only want a single variant e.g. ",(0,r.jsx)(t.strong,{children:"informational"})," you can import ",(0,r.jsx)(t.code,{children:'@import "@db-ui/foundations/build/css/color/classes/informational.css";'}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In case that you're either using a bundler (recommended) or importing the CSS within your JavaScript files, please adapt this ",(0,r.jsx)(t.code,{children:"@import"})," syntax accordingly."]}),"\n",(0,r.jsxs)(t.p,{children:["For ",(0,r.jsx)(t.strong,{children:"SCSS"})," you need to use the import ",(0,r.jsx)(t.code,{children:"@use @db-ui/foundations/build/scss/color/placeholder"})," in your ",(0,r.jsx)(t.code,{children:".scss"})," file, where you need to reference the specific variable.\nThen you can use e.g. ",(0,r.jsx)(t.strong,{children:"informational"})," color by extending our SCSS placeholders like this: ",(0,r.jsx)(t.code,{children:"@extend %db-informational-bg-1"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"dark---light-mode",children:"Dark- & Light-Mode"}),"\n",(0,r.jsxs)(t.p,{children:["We provide tokens for both dark- and light-mode. If you include the ",(0,r.jsx)(t.strong,{children:"db-ui-42"})," style you get a media query ",(0,r.jsx)(t.code,{children:"@media (prefers-color-scheme: dark)"})," with the relevant tokens. You can ",(0,r.jsx)(t.a,{href:"https://developer.chrome.com/docs/devtools/rendering/emulate-css/",children:"emulate"})," the modes inside the devtools."]}),"\n",(0,r.jsxs)(t.p,{children:["It's ",(0,r.jsxs)(t.a,{href:"https://web.dev/articles/color-scheme#the_color-scheme_meta_tag",children:["recommended to set a ",(0,r.jsx)(t.code,{children:"meta"}),"-HTML-tag"]})," to provide a signal to the browser on your accepted color schemes previous to loading the CSS:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<meta name="color-scheme" content="dark light" />\n'})}),"\n",(0,r.jsxs)(t.p,{children:["We recommend using the default media query based on the user preference, but if you want to force a mode for your page or a container you can do it with adding the attributes ",(0,r.jsx)(t.code,{children:'data-color-scheme="dark"'})," or ",(0,r.jsx)(t.code,{children:'data-color-scheme="light"'}),":"]}),"\n",(0,r.jsx)(t.h3,{id:"html",children:"HTML"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<div data-color-scheme="dark">...</div>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["We're providing an example in our ",(0,r.jsx)(t.a,{href:"./color-schemes",children:"color schemes documentation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["We need to set the ",(0,r.jsx)(t.strong,{children:"base"})," background to the element with ",(0,r.jsx)(t.code,{children:"[data-color-scheme]"})," so if you want to change the background to another color, make sure to use a wrapping tag like ",(0,r.jsx)(t.code,{children:"<div>"})," with the ",(0,r.jsx)(t.code,{children:"[data-color-scheme]"})," to avoid issues."]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}let c=e=>{let{children:t}=e;return(0,r.jsx)(s.Z,{children:t})};function l(e){return(0,r.jsx)(i,{})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(l,{...e})})}},50115:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(52322),s=n(5632),o=n(25237),a=n.n(o),i=n(2784),c=n(61183),l=n(39097),d=n.n(l),h=n(98072);let u=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t),[s,o]=(0,i.useState)(()=>!1),a=(0,i.useRef)(!1);return a.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),a.current=!0),(0,i.useEffect)(()=>{o(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{o(!0)}):o(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":s,children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var p=n(68908),m=n(48483),x=n(90434),g=n(97689),j=n(85803),f=n(72288),v=n(76460),b=n(40245),y=n(29469);let w=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:r}=n.query,s=Array.isArray(r)?r:[r];return t.path==="/components/".concat(s.join("/"))},S=e=>{var t;let{navItem:n}=e,o=(0,s.useRouter)(),a=w(o.pathname,n,o);return(0,r.jsx)(y.Z,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(S,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(d(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":a?"page":void 0,children:n.label},"router-path-".concat(n.path))})},k=()=>(0,r.jsx)(b.Z,{children:v.Z6.map(e=>(0,r.jsx)(S,{navItem:e},"router-path-".concat(e.path)))});var N=n(35368),_=n(9842);let q=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},Z="db-ui",C="mono",E=()=>{let e=(0,s.useRouter)(),[t,n]=(0,i.useState)(),[o,a]=(0,i.useState)(),c=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&a(r)},l=(e,t)=>{let r=[],s=[],o=[],a=[],i=[],c=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?o.push(e):e.startsWith("refactor")?a.push(e):/^\d*-/.test(e)?i.push(e):e.startsWith("docs")?c.push(e):r.push(e);n({others:r,features:s,docs:c,refactors:a,issues:i,bugfixes:o,versions:e})};(0,i.useEffect)(()=>{(async()=>{let e=await q("https://api.github.com/repos/".concat(Z,"/").concat(C,"/branches")),t=(await q("https://api.github.com/repos/".concat(Z,"/").concat(C,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(n),c(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let d=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,N.sanitize)("https://".concat(Z,".github.io/").concat(C).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(_.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:o,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},W=e=>{var t,n;let{children:o,noNavigation:a}=e,[l,h]=(0,i.useState)(!1),[b,y]=(0,i.useState)(!1),[w,S]=(0,i.useState)(!1),[N,_]=(0,i.useState)(!1),[q,Z]=(0,i.useState)(),[C,W]=(0,i.useState)(),[I,T]=(0,i.useState)(),[F,P]=(0,i.useState)(),R=(0,s.useRouter)();return(0,i.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,i.useEffect)(()=>{if(R.query&&(R.query.fullscreen&&h("true"===R.query.fullscreen),R.query.page&&h(!0),R.query.noh1&&y("true"===R.query.noh1),R.query.properties&&S("true"===R.query.properties),R.query.current)){let t=Array.isArray(R.query.current)?R.query.current[0]:R.query.current;if(q!==t){var e;Z(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=R.asPath.split("?")[0],{previous:n,next:r}=(0,v.vn)(t);W(n),T(r),P((0,v.kn)(t))},[R]),(0,r.jsxs)(r.Fragment,{children:[R.isReady&&l&&(0,r.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:o}),R.isReady&&!l&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(p.Z,{drawerOpen:N,onToggle:_,brand:(0,r.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,r.jsx)(x.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(E,{}),children:(0,r.jsx)(k,{})}),children:[F&&F.length>1&&(0,r.jsx)(g.Z,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==F?void 0:F.map(e=>{var t;return(0,r.jsxs)(i.Fragment,{children:["/"!==e.path&&(0,r.jsx)(j.Z,{icon:"chevron_right"}),(0,r.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(g.Z,{spacing:"none",width:"large",children:o}),!a&&(null!=C?C:I)&&(0,r.jsxs)(g.Z,{width:"large",spacing:"small",className:"link-containers",children:[C&&(0,r.jsx)(d(),{className:"previous-link-container",href:null!==(t=C.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(f.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:C.label})]})}),I&&(0,r.jsx)(d(),{className:"next-link-container",href:null!==(n=I.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(f.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:I.label})]})})]})]})]})},I=a()(async()=>W,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3430,1954,4540,6460,2888,9774,179],()=>t(35255)),_N_E=e.O()}]);