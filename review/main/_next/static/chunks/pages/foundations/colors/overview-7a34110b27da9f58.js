(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4643],{16095:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors/overview",function(){return n(23554)}])},53148:function(e,t,n){"use strict";n.d(t,{Z:function(){return q}});var a=n(52322),r=n(5632),s=n(25237),o=n.n(s),c=n(2784),i=n(61183),l=n(39097),d=n.n(l),h=n(43251);let u=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[r,s]=(0,c.useState)(()=>!1),o=(0,c.useRef)(!1);return o.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":r,children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var x=n(82664),p=n(98310),m=n(10326),g=n(55327),f=n(74819),j=n(70741),b=n(92811),v=n(33759),y=n(39120);let w=(e,t)=>{var n;return"/"===t.path?"/"===e:e.includes("".concat(t.path,"/"))||e===t.path||!!(null===(n=t.subNavigation)||void 0===n?void 0:n.find(t=>e.includes("".concat(t.path,"/"))))},k=e=>{var t;let{navItem:n}=e,s=w((0,r.useRouter)().pathname,n);return(0,a.jsx)(y.Z,{active:s,backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,a.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,a.jsx)(d(),{href:null!==(t=n.path)&&void 0!==t?t:"",children:n.label},"router-path-".concat(n.path))})};var N=()=>(0,a.jsx)(v.Z,{children:b.Z6.map(e=>(0,a.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),Z=n(35368),T=n(79081);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},C="db-ui",A="mono";var _=()=>{let e=(0,r.useRouter)(),[t,n]=(0,c.useState)(),[s,o]=(0,c.useState)(),i=t=>{let n=e.basePath,a=t.find(e=>n.includes(e));a&&o(a)},l=(e,t)=>{let a=[],r=[],s=[],o=[],c=[],i=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?o.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?i.push(e):a.push(e);n({others:a,features:r,docs:i,refactors:o,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(C,"/").concat(A,"/branches")),t=(await S("https://api.github.com/repos/".concat(C,"/").concat(A,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));i(n),i(t),l(t,n)})().catch(e=>{console.error(e)})},[]);let d=t=>{let n=e.pathname,a=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(C,".github.io/").concat(A).concat(a?"/version":"/review","/").concat(t).concat(n)))};return t?(0,a.jsx)(T.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,a.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,a.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null};let E=e=>{var t,n;let{children:s,noNavigation:o}=e,[l,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[w,k]=(0,c.useState)(!1),[Z,T]=(0,c.useState)(!1),[S,C]=(0,c.useState)(),[A,E]=(0,c.useState)(),[q,I]=(0,c.useState)(),[P,O]=(0,c.useState)(),R=(0,r.useRouter)();return(0,c.useEffect)(()=>{i.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(R.query&&(R.query.fullscreen&&h("true"===R.query.fullscreen),R.query.page&&h(!0),R.query.noh1&&y("true"===R.query.noh1),R.query.properties&&k("true"===R.query.properties),R.query.current)){let t=Array.isArray(R.query.current)?R.query.current[0]:R.query.current;if(S!==t){var e;C(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=R.asPath.split("?")[0],{previous:n,next:a}=(0,b.vn)(t);E(n),I(a),O((0,b.kn)(t))},[R]),(0,a.jsxs)(a.Fragment,{children:[R.isReady&&l&&(0,a.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:s}),R.isReady&&!l&&(0,a.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(x.Z,{drawerOpen:Z,onToggle:T,brand:(0,a.jsx)(p.Z,{children:"DB-UI Mono"}),primaryAction:(0,a.jsx)(m.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(_,{}),children:(0,a.jsx)(N,{})}),children:[P&&P.length>1&&(0,a.jsx)(g.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==P?void 0:P.map(e=>{var t;return(0,a.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,a.jsx)(f.Z,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(g.Z,{spacing:"none",width:"large",children:s}),!o&&(null!=A?A:q)&&(0,a.jsxs)(g.Z,{width:"large",spacing:"small",className:"link-containers",children:[A&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(t=A.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:A.label})]})}),q&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(n=q.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:q.label})]})})]})]})]})};var q=o()(async()=>E,{ssr:!1})},23554:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(52322),r=n(53148),s=n(47437),o=n(2784),c=n(55025),i=n(57092),l=n(57884),d=n(57284),h=n(49953),u={src:"/mono/review/main/_next/static/media/checkerboard.c3e3e675.png"},x=n(10326),p=n(79031),m=e=>{let{name:t,children:n,copyText:r}=e,[s,c]=(0,o.useState)(!1),i=async e=>{e.stopPropagation(),"undefined"!=typeof navigator&&(c(!0),await navigator.clipboard.writeText(r))};return(0,o.useEffect)(()=>{let e;return s&&(e=setTimeout(()=>{c(!1)},1500)),()=>{clearTimeout(e)}},[s]),(0,a.jsx)(x.Z,{variant:"ghost",icon:"copy",noText:!0,onClick:i,describedbyid:t,children:(0,a.jsx)(p.Z,{id:t,placement:"top",style:{visibility:s?"visible":"hidden"},children:n})})},g=e=>{let{values:t,prefixClass:n,dataAttributeName:r,showCheckerboard:s,enableDarkMode:o,variant:c}=e,i=e=>"class"===c?"".concat(n).concat(e):"".concat(r,'="').concat(e,'"'),l=e=>"class"===c?{className:"".concat(n).concat(e)}:{[r]:e};return(0,a.jsxs)("div",{className:"color-overview-container db-font-size-sm","data-color-scheme":o?"dark":"light",children:[(0,a.jsx)("span",{style:{backgroundImage:s?"url(".concat(u.src,")"):"none"}})," ",t.map((e,t)=>{let n="string"==typeof e?e:e.value,r="string"==typeof e?void 0:e.appendix;return(0,a.jsxs)("div",{...l(n),children:[(0,a.jsxs)("span",{children:[i(n),r]}),(0,a.jsx)(m,{name:"copy-button-".concat(t),copyText:i(n),children:"Copied to clipboard"})]})})]})},f=e=>{let{values:t,prefixClass:n,dataAttributeName:r}=e,[s,u]=(0,o.useState)(!1),[x,p]=(0,o.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"color-overview-switches",children:[(0,a.jsx)(c.Z,{checked:s,onChange:e=>{u(e.target.checked)},children:"Show checkerboard"}),(0,a.jsx)(c.Z,{checked:x,onChange:e=>{p(e.target.checked)},children:"Preview dark mode"})]}),(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(d.Z,{children:"Classes"}),(0,a.jsx)(d.Z,{children:"Data Attributes"})]}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(g,{variant:"class",values:t,prefixClass:n,dataAttributeName:r,showCheckerboard:s,enableDarkMode:x})}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(g,{variant:"dataAttribute",values:t,prefixClass:n,dataAttributeName:r,showCheckerboard:s,enableDarkMode:x})})]})]})};let j=["neutral","brand","critical","successful","warning","informational"],b=["yellow","orange","red","pink","violet","blue","cyan","turquoise","green"],v=["lvl-1","lvl-2","lvl-3","transparent-full","transparent-semi"],y=[{value:"default"},{value:"weak"},{value:"contrast"},{value:"contrast-weak",appendix:" *"},{value:"border",appendix:" *"}];var w=()=>(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Color classes"}),(0,a.jsxs)("p",{children:["These ",(0,a.jsx)("strong",{children:"classes"})," (or data-attributes) can be used to apply a"," ",(0,a.jsx)("strong",{children:"monochromatic adaptive color scheme"})," or a"," ",(0,a.jsx)("strong",{children:"color modifier"})," (background color, on-background color) to containers and elements."]}),(0,a.jsx)("p",{children:(0,a.jsxs)("i",{children:["These classes are ",(0,a.jsx)("u",{children:"not"})," intended for individual styling of your own components. The corresponding CSS Custom Properties should be used for this."]})}),(0,a.jsx)("strong",{children:"How to use:"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(s.Z,{semantic:"informational",children:"Note: All three methods are optional: they can be used individually or in any combination on an element."}),(0,a.jsxs)("ol",{children:[(0,a.jsxs)("li",{children:["Should an entire container be given an"," ",(0,a.jsx)("strong",{children:"adaptive color scheme"}),"? Then use a"," ",(0,a.jsx)("code",{children:"db-container-color-[ color ]"})," class."]}),(0,a.jsxs)("li",{children:["The ",(0,a.jsx)("strong",{children:"background color"}),", in particular the"," ",(0,a.jsx)("strong",{children:"elevation level"}),", can be modified with a"," ",(0,a.jsx)("code",{children:"db-bg-color-[ color ]"})," class."]}),(0,a.jsxs)("li",{children:["The contrast of the ",(0,a.jsx)("strong",{children:"text"})," and"," ",(0,a.jsx)("strong",{children:"icon color"})," can be changed with the"," ",(0,a.jsx)("strong",{children:"on-background"})," classes:"," ",(0,a.jsx)("code",{children:"db-on-bg-color-[ color ]"})]})]}),(0,a.jsx)("h2",{children:"1. Container color"}),(0,a.jsxs)("p",{children:["These classes define the"," ",(0,a.jsx)("strong",{children:"monochromatic adaptive color scheme"})," for a container. Texts, icons and backgrounds in it then automatically adapt to the color set."]}),(0,a.jsx)("p",{children:"Each container color class functions as a shorthand and applies the following by default:"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["A bunch of CSS Custom Properties to apply the"," ",(0,a.jsx)("strong",{children:"monochromatic adaptive color scheme"})]}),(0,a.jsxs)("li",{children:["Background color modifier"," ",(0,a.jsx)("strong",{children:"db-bg-color-lvl-1"})," (Level 1 background by default)"]}),(0,a.jsxs)("li",{children:["On background color modifier"," ",(0,a.jsx)("strong",{children:"db-on-bg-color-default"})," (highest text contrast by default)"]})]}),(0,a.jsx)("h3",{children:"Semantic container color"}),(0,a.jsxs)("p",{children:["These semantic colors are used to give a container a corresponding meaning. ",(0,a.jsx)("strong",{children:"Neutral"})," stands for the regular color scheme, which is usually applied to root."]}),(0,a.jsx)(f,{values:j,prefixClass:"db-container-color-",dataAttributeName:"data-container-color"}),(0,a.jsx)("h3",{children:"Additional container color"}),(0,a.jsx)(f,{values:b,prefixClass:"db-container-color-",dataAttributeName:"data-container-color"}),(0,a.jsx)("h2",{children:"2. Background color modifier"}),(0,a.jsxs)("p",{children:["These classes define the type of background color for a container. The exact color tone then results from the current semantics (in root ",(0,a.jsx)("strong",{children:"neutral"})," by default). This means that each of these background types exists for each semantic color."]}),(0,a.jsx)(f,{values:v,prefixClass:"db-bg-color-",dataAttributeName:"data-bg-color"}),(0,a.jsx)("h2",{children:"3. On background color modifier"}),(0,a.jsxs)("p",{children:["This class is used to define the contrast for"," ",(0,a.jsx)("strong",{children:"texts"})," and ",(0,a.jsx)("strong",{children:"icons"}),". As with the background colors, these are displayed according to the current color scheme."]}),(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"* These colors do not have sufficient contrast. They are therefore not permitted as text colors."})}),(0,a.jsx)(f,{values:y,prefixClass:"db-on-bg-color-",dataAttributeName:"data-on-bg-color"})]})})}},function(e){e.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return e(e.s=16095)}),_N_E=e.O()}]);