(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1627],{25706:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors/color-classes",function(){return a(65650)}])},50115:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var r=a(52322),s=a(5632),n=a(25237),o=a.n(n),c=a(2784),i=a(61183),l=a(39097),d=a.n(l),h=a(98072);let u=(0,c.forwardRef)(function(e,t){let a=t||(0,c.useRef)(t),[s,n]=(0,c.useState)(()=>!1),o=(0,c.useRef)(!1);return o.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,c.useEffect)(()=>{n(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{n(!0)}):n(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:a,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.X)(s),children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var p=a(68908),x=a(48483),m=a(90434),g=a(97689),b=a(85803),j=a(72288),f=a(76460),v=a(40245),y=a(29469);let w=(e,t,a)=>{if(!a.query.slug)return t.path===a.pathname;let{slug:r}=a.query,s=Array.isArray(r)?r:[r];return t.path==="/components/".concat(s.join("/"))},k=e=>{var t;let{navItem:a}=e,n=(0,s.useRouter)(),o=w(n.pathname,a,n);return(0,r.jsx)(y.Z,{backButtonText:"Back to ".concat(a.label),subNavigation:a.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==a?void 0:a.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:a.subNavigation?a.label:(0,r.jsx)(d(),{href:null!==(t=a.path)&&void 0!==t?t:"","aria-current":o?"page":void 0,children:a.label},"router-path-".concat(a.path))})},N=()=>(0,r.jsx)(v.Z,{children:f.Z6.map(e=>(0,r.jsx)(k,{navItem:e},"router-path-".concat(e.path)))});var Z=a(35368),T=a(9842);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},C="db-ui",A="mono",_=()=>{let e=(0,s.useRouter)(),[t,a]=(0,c.useState)(),[n,o]=(0,c.useState)(),i=t=>{let a=e.basePath,r=t.find(e=>a.includes(e));r&&o(r)},l=(e,t)=>{let r=[],s=[],n=[],o=[],c=[],i=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?s.push(e):e.startsWith("fix")||e.startsWith("bugfix")?n.push(e):e.startsWith("refactor")?o.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?i.push(e):r.push(e);a({others:r,features:s,docs:i,refactors:o,issues:c,bugfixes:n,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(C,"/").concat(A,"/branches")),t=(await S("https://api.github.com/repos/".concat(C,"/").concat(A,"/tags"))).map(e=>e.name),a=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));i(a),i(t),l(t,a)})().catch(e=>{console.error(e)})},[]);let d=t=>{let a=e.asPath,r=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(C,".github.io/").concat(A).concat(r?"/version":"/review","/").concat(t).concat(a)))};return t?(0,r.jsx)(T.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:n,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,a]=e;return(null==a?void 0:a.length)>0}).map(e=>{let[t,a]=e;return(0,r.jsx)("optgroup",{label:t,children:a.slice(0,15).map((e,a)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(a)))},t)})}):null},q=e=>{var t,a;let{children:n,noNavigation:o}=e,[l,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[w,k]=(0,c.useState)(!1),[Z,T]=(0,c.useState)(!1),[S,C]=(0,c.useState)(),[A,q]=(0,c.useState)(),[E,P]=(0,c.useState)(),[I,O]=(0,c.useState)(),R=(0,s.useRouter)();return(0,c.useEffect)(()=>{i.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(R.query&&(R.query.fullscreen&&h("true"===R.query.fullscreen),R.query.page&&h(!0),R.query.noh1&&y("true"===R.query.noh1),R.query.properties&&k("true"===R.query.properties),R.query.current)){let t=Array.isArray(R.query.current)?R.query.current[0]:R.query.current;if(S!==t){var e;C(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=R.asPath.split("?")[0],{previous:a,next:r}=(0,f.vn)(t);q(a),P(r),O((0,f.kn)(t))},[R]),(0,r.jsxs)(r.Fragment,{children:[R.isReady&&l&&(0,r.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:n}),R.isReady&&!l&&(0,r.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(p.Z,{drawerOpen:Z,onToggle:T,brand:(0,r.jsx)(x.Z,{children:"DB-UX"}),primaryAction:(0,r.jsx)(m.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(_,{}),children:(0,r.jsx)(N,{})}),children:[I&&I.length>1&&(0,r.jsx)(g.Z,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==I?void 0:I.map(e=>{var t;return(0,r.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,r.jsx)(b.Z,{icon:"chevron_right"}),(0,r.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(g.Z,{spacing:"none",width:"large",children:n}),!o&&(null!=A?A:E)&&(0,r.jsxs)(g.Z,{width:"large",spacing:"small",className:"link-containers",children:[A&&(0,r.jsx)(d(),{className:"previous-link-container",href:null!==(t=A.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(j.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:A.label})]})}),E&&(0,r.jsx)(d(),{className:"next-link-container",href:null!==(a=E.path)&&void 0!==a?a:"/",children:(0,r.jsxs)(j.Z,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:E.label})]})})]})]})]})},E=o()(async()=>q,{ssr:!1})},65650:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>w});var r=a(52322),s=a(50115),n=a(70938),o=a(2784),c=a(32558),i=a(57630),l=a(12829),d=a(29898),h=a(89835);let u={src:"/mono/review/docs-3359-drawer-header/_next/static/media/checkerboard.c3e3e675.png"};var p=a(90434),x=a(47675);let m=e=>{let{name:t,children:a,copyText:s}=e,[n,c]=(0,o.useState)(!1),i=async e=>{e.stopPropagation(),"undefined"!=typeof navigator&&(c(!0),await navigator.clipboard.writeText(s))};return(0,o.useEffect)(()=>{let e;return n&&(e=setTimeout(()=>{c(!1)},1500)),()=>{clearTimeout(e)}},[n]),(0,r.jsx)(p.Z,{variant:"ghost",icon:"copy",noText:!0,onClick:i,describedbyid:t,children:(0,r.jsx)(x.Z,{id:t,placement:"top",style:{visibility:n?"visible":"hidden"},children:a})})},g=e=>{let{values:t,prefixClass:a,dataAttributeName:s,showCheckerboard:n,enableDarkMode:o,variant:c}=e,i=e=>"class"===c?"".concat(a).concat(e):"".concat(s,'="').concat(e,'"'),l=e=>"class"===c?{className:"".concat(a).concat(e)}:{[s]:e};return(0,r.jsxs)("div",{className:"color-overview-container db-font-size-sm","data-color-scheme":o?"dark":"light",children:[(0,r.jsx)("span",{style:{backgroundImage:n?"url(".concat(u.src,")"):"none"}})," ",t.map((e,t)=>{let a="string"==typeof e?e:e.value,s="string"==typeof e?void 0:e.appendix;return(0,r.jsxs)("div",{...l(a),children:[(0,r.jsxs)("span",{children:[i(a),s]}),(0,r.jsx)(m,{name:"copy-button-".concat(t),copyText:i(a),children:"Copied to clipboard"})]})})]})},b=e=>{let{values:t,prefixClass:a,dataAttributeName:s}=e,[n,u]=(0,o.useState)(!1),[p,x]=(0,o.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"color-overview-switches",children:[(0,r.jsx)(c.Z,{checked:n,onChange:e=>{u(e.target.checked)},children:"Show checkerboard"}),(0,r.jsx)(c.Z,{checked:p,onChange:e=>{x(e.target.checked)},children:"Preview dark mode"})]}),(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(d.Z,{children:"Classes"}),(0,r.jsx)(d.Z,{children:"Data Attributes"})]}),(0,r.jsx)(h.Z,{children:(0,r.jsx)(g,{variant:"class",values:t,prefixClass:a,dataAttributeName:s,showCheckerboard:n,enableDarkMode:p})}),(0,r.jsx)(h.Z,{children:(0,r.jsx)(g,{variant:"dataAttribute",values:t,prefixClass:a,dataAttributeName:s,showCheckerboard:n,enableDarkMode:p})})]})]})},j=["neutral","brand","critical","successful","warning","informational"],f=["yellow","orange","red","pink","violet","blue","cyan","turquoise","green"],v=["basic-level-1","basic-level-2","basic-level-3","basic-transparent-full","basic-transparent-semi"],y=[{value:"emphasis-100"},{value:"emphasis-90"},{value:"emphasis-80"},{value:"emphasis-70",appendix:" *"},{value:"emphasis-60",appendix:" *"},{value:"emphasis-50",appendix:" *"}],w=()=>(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Color classes"}),(0,r.jsxs)("p",{children:["These ",(0,r.jsx)("strong",{children:"classes"})," (or data-attributes) can be used to apply a"," ",(0,r.jsx)("strong",{children:"monochromatic adaptive color scheme"})," or a"," ",(0,r.jsx)("strong",{children:"color modifier"})," (background color, on-background color) to containers and elements."]}),(0,r.jsx)("p",{children:(0,r.jsxs)("i",{children:["These classes are ",(0,r.jsx)("u",{children:"not"})," intended for individual styling of your own components. The corresponding CSS Custom Properties should be used for this."]})}),(0,r.jsx)("strong",{children:"How to use:"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(n.Z,{semantic:"informational",children:"Note: All three methods are optional: they can be used individually or in any combination on an element."}),(0,r.jsxs)("ol",{children:[(0,r.jsxs)("li",{children:["Should an entire container be given an"," ",(0,r.jsx)("strong",{children:"adaptive color scheme"}),"? Then use a"," ",(0,r.jsx)("code",{children:"db-container-color-[ color ]"})," class."]}),(0,r.jsxs)("li",{children:["The ",(0,r.jsx)("strong",{children:"background color"}),", in particular the"," ",(0,r.jsx)("strong",{children:"elevation level"}),", can be modified with a"," ",(0,r.jsx)("code",{children:"db-bg-color-[ color ]"})," class."]}),(0,r.jsxs)("li",{children:["The contrast of the ",(0,r.jsx)("strong",{children:"text"})," and"," ",(0,r.jsx)("strong",{children:"icon color"})," can be changed with the"," ",(0,r.jsx)("strong",{children:"on-background"})," classes:"," ",(0,r.jsx)("code",{children:"db-on-bg-color-[ color ]"})]})]}),(0,r.jsx)("h2",{id:"container-color-classes",children:"1. Container color"}),(0,r.jsxs)("p",{children:["These classes define the"," ",(0,r.jsx)("strong",{children:"monochromatic adaptive color scheme"})," for a container. Texts, icons and backgrounds in it then automatically adapt to the color set."]}),(0,r.jsx)("p",{children:"Each container color class functions as a shorthand and applies the following by default:"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["A bunch of CSS Custom Properties to apply the"," ",(0,r.jsx)("strong",{children:"monochromatic adaptive color scheme"})]}),(0,r.jsxs)("li",{children:["Background color modifier"," ",(0,r.jsx)("strong",{children:"db-bg-color-basic-level-1"})," (Level 1 background by default)"]}),(0,r.jsxs)("li",{children:["On background color modifier"," ",(0,r.jsx)("strong",{children:"db-on-bg-color-emphasis-100"})," (highest text contrast by default)"]})]}),(0,r.jsx)("h3",{children:"Semantic container color"}),(0,r.jsxs)("p",{children:["These semantic colors are used to give a container a corresponding meaning. ",(0,r.jsx)("strong",{children:"Neutral"})," stands for the regular color scheme, which is usually applied to root."]}),(0,r.jsx)(b,{values:j,prefixClass:"db-container-color-",dataAttributeName:"data-container-color"}),(0,r.jsx)("h3",{children:"Additional container color"}),(0,r.jsx)(b,{values:f,prefixClass:"db-container-color-",dataAttributeName:"data-container-color"}),(0,r.jsx)("h2",{id:"background-color-modifier-classes",children:"2. Background color modifier"}),(0,r.jsxs)("p",{children:["These classes define the type of background color for a container. The exact color tone then results from the current semantics (in root ",(0,r.jsx)("strong",{children:"neutral"})," by default). This means that each of these background types exists for each semantic color."]}),(0,r.jsx)(b,{values:v,prefixClass:"db-bg-color-",dataAttributeName:"data-bg-color"}),(0,r.jsx)("h2",{id:"on-background-color-modifier-classes",children:"3. On background color modifier"}),(0,r.jsxs)("p",{children:["This class is used to define the contrast for"," ",(0,r.jsx)("strong",{children:"texts"})," and ",(0,r.jsx)("strong",{children:"icons"}),". As with the background colors, these are displayed according to the current color scheme."]}),(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:"* These colors do not have sufficient contrast. They are therefore not permitted as text colors."})}),(0,r.jsx)(b,{values:y,prefixClass:"db-on-bg-color-",dataAttributeName:"data-on-bg-color"})]})})}},e=>{var t=t=>e(e.s=t);e.O(0,[3430,1954,4540,6460,2888,9774,179],()=>t(25706)),_N_E=e.O()}]);