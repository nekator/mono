(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1627],{25706:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors/color-classes",function(){return a(2634)}])},53148:function(e,t,a){"use strict";a.d(t,{Z:function(){return q}});var n=a(52322),r=a(5632),s=a(25237),o=a.n(s),c=a(2784),i=a(61183),l=a(39097),d=a.n(l),h=a(43251);let u=(0,c.forwardRef)(function(e,t){let a=t||(0,c.useRef)(t),[r,s]=(0,c.useState)(()=>!1),o=(0,c.useRef)(!1);return o.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,n.jsxs)("div",{ref:a,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":r,children:[(0,n.jsx)(n.Fragment,{children:e.header}),(0,n.jsx)("main",{className:"db-main",children:e.children}),(0,n.jsx)(n.Fragment,{children:e.footer})]})});var p=a(82664),x=a(98310),m=a(10326),g=a(55327),f=a(74819),b=a(70741),j=a(78634),v=a(33759),y=a(39120);let w=(e,t)=>{var a;return"/"===t.path?"/"===e:e.includes("".concat(t.path,"/"))||e===t.path||!!(null===(a=t.subNavigation)||void 0===a?void 0:a.find(t=>e.includes("".concat(t.path,"/"))))},k=e=>{var t;let{navItem:a}=e,s=w((0,r.useRouter)().pathname,a);return(0,n.jsx)(y.Z,{active:s,backButtonText:"Back to ".concat(a.label),subNavigation:a.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,n.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:a.subNavigation?a.label:(0,n.jsx)(d(),{href:null!==(t=a.path)&&void 0!==t?t:"",children:a.label},"router-path-".concat(a.path))})};var N=()=>(0,n.jsx)(v.Z,{children:j.Z6.map(e=>(0,n.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),Z=a(35368),T=a(79081);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},C="db-ui",A="mono";var _=()=>{let e=(0,r.useRouter)(),[t,a]=(0,c.useState)(),[s,o]=(0,c.useState)(),i=t=>{let a=e.basePath,n=t.find(e=>a.includes(e));n&&o(n)},l=(e,t)=>{let n=[],r=[],s=[],o=[],c=[],i=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?o.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?i.push(e):n.push(e);a({others:n,features:r,docs:i,refactors:o,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(C,"/").concat(A,"/branches")),t=(await S("https://api.github.com/repos/".concat(C,"/").concat(A,"/tags"))).map(e=>e.name),a=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));i(a),i(t),l(t,a)})().catch(e=>{console.error(e)})},[]);let d=t=>{let a=e.asPath,n=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,Z.sanitize)("https://".concat(C,".github.io/").concat(A).concat(n?"/version":"/review","/").concat(t).concat(a)))};return t?(0,n.jsx)(T.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,a]=e;return(null==a?void 0:a.length)>0}).map(e=>{let[t,a]=e;return(0,n.jsx)("optgroup",{label:t,children:a.slice(0,15).map((e,a)=>(0,n.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(a)))},t)})}):null};let E=e=>{var t,a;let{children:s,noNavigation:o}=e,[l,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[w,k]=(0,c.useState)(!1),[Z,T]=(0,c.useState)(!1),[S,C]=(0,c.useState)(),[A,E]=(0,c.useState)(),[q,P]=(0,c.useState)(),[I,O]=(0,c.useState)(),R=(0,r.useRouter)();return(0,c.useEffect)(()=>{i.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(R.query&&(R.query.fullscreen&&h("true"===R.query.fullscreen),R.query.page&&h(!0),R.query.noh1&&y("true"===R.query.noh1),R.query.properties&&k("true"===R.query.properties),R.query.current)){let t=Array.isArray(R.query.current)?R.query.current[0]:R.query.current;if(S!==t){var e;C(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=R.asPath.split("?")[0],{previous:a,next:n}=(0,j.vn)(t);E(a),P(n),O((0,j.kn)(t))},[R]),(0,n.jsxs)(n.Fragment,{children:[R.isReady&&l&&(0,n.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:s}),R.isReady&&!l&&(0,n.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,n.jsx)(p.Z,{drawerOpen:Z,onToggle:T,brand:(0,n.jsx)(x.Z,{children:"DB-UX"}),primaryAction:(0,n.jsx)(m.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,n.jsx)(_,{}),children:(0,n.jsx)(N,{})}),children:[I&&I.length>1&&(0,n.jsx)(g.Z,{spacing:"none",width:"large",children:(0,n.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==I?void 0:I.map(e=>{var t;return(0,n.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,n.jsx)(f.Z,{icon:"chevron_right"}),(0,n.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,n.jsx)(g.Z,{spacing:"none",width:"large",children:s}),!o&&(null!=A?A:q)&&(0,n.jsxs)(g.Z,{width:"large",spacing:"small",className:"link-containers",children:[A&&(0,n.jsx)(d(),{className:"previous-link-container",href:null!==(t=A.path)&&void 0!==t?t:"/",children:(0,n.jsxs)(b.Z,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Previous"}),(0,n.jsx)("span",{"data-icon":"arrow_left",children:A.label})]})}),q&&(0,n.jsx)(d(),{className:"next-link-container",href:null!==(a=q.path)&&void 0!==a?a:"/",children:(0,n.jsxs)(b.Z,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Next"}),(0,n.jsx)("span",{"data-icon-after":"arrow_right",children:q.label})]})})]})]})]})};var q=o()(async()=>E,{ssr:!1})},2634:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var n=a(52322),r=a(53148),s=a(47437),o=a(2784),c=a(55025),i=a(57092),l=a(57884),d=a(57284),h=a(49953),u={src:"/mono/review/3092-docs-tonality-leftovers/_next/static/media/checkerboard.c3e3e675.png"},p=a(10326),x=a(79031),m=e=>{let{name:t,children:a,copyText:r}=e,[s,c]=(0,o.useState)(!1),i=async e=>{e.stopPropagation(),"undefined"!=typeof navigator&&(c(!0),await navigator.clipboard.writeText(r))};return(0,o.useEffect)(()=>{let e;return s&&(e=setTimeout(()=>{c(!1)},1500)),()=>{clearTimeout(e)}},[s]),(0,n.jsx)(p.Z,{variant:"ghost",icon:"copy",noText:!0,onClick:i,describedbyid:t,children:(0,n.jsx)(x.Z,{id:t,placement:"top",style:{visibility:s?"visible":"hidden"},children:a})})},g=e=>{let{values:t,prefixClass:a,dataAttributeName:r,showCheckerboard:s,enableDarkMode:o,variant:c}=e,i=e=>"class"===c?"".concat(a).concat(e):"".concat(r,'="').concat(e,'"'),l=e=>"class"===c?{className:"".concat(a).concat(e)}:{[r]:e};return(0,n.jsxs)("div",{className:"color-overview-container db-font-size-sm","data-color-scheme":o?"dark":"light",children:[(0,n.jsx)("span",{style:{backgroundImage:s?"url(".concat(u.src,")"):"none"}})," ",t.map((e,t)=>{let a="string"==typeof e?e:e.value,r="string"==typeof e?void 0:e.appendix;return(0,n.jsxs)("div",{...l(a),children:[(0,n.jsxs)("span",{children:[i(a),r]}),(0,n.jsx)(m,{name:"copy-button-".concat(t),copyText:i(a),children:"Copied to clipboard"})]})})]})},f=e=>{let{values:t,prefixClass:a,dataAttributeName:r}=e,[s,u]=(0,o.useState)(!1),[p,x]=(0,o.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"color-overview-switches",children:[(0,n.jsx)(c.Z,{checked:s,onChange:e=>{u(e.target.checked)},children:"Show checkerboard"}),(0,n.jsx)(c.Z,{checked:p,onChange:e=>{x(e.target.checked)},children:"Preview dark mode"})]}),(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{children:"Classes"}),(0,n.jsx)(d.Z,{children:"Data Attributes"})]}),(0,n.jsx)(h.Z,{children:(0,n.jsx)(g,{variant:"class",values:t,prefixClass:a,dataAttributeName:r,showCheckerboard:s,enableDarkMode:p})}),(0,n.jsx)(h.Z,{children:(0,n.jsx)(g,{variant:"dataAttribute",values:t,prefixClass:a,dataAttributeName:r,showCheckerboard:s,enableDarkMode:p})})]})]})};let b=["neutral","brand","critical","successful","warning","informational"],j=["yellow","orange","red","pink","violet","blue","cyan","turquoise","green"],v=["basic-level-1","basic-level-2","basic-level-3","basic-transparent-full","basic-transparent-semi"],y=[{value:"emphasis-100"},{value:"emphasis-90"},{value:"emphasis-80"},{value:"emphasis-70",appendix:" *"},{value:"emphasis-60",appendix:" *"},{value:"emphasis-50",appendix:" *"}];var w=()=>(0,n.jsx)(r.Z,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Color classes"}),(0,n.jsxs)("p",{children:["These ",(0,n.jsx)("strong",{children:"classes"})," (or data-attributes) can be used to apply a"," ",(0,n.jsx)("strong",{children:"monochromatic adaptive color scheme"})," or a"," ",(0,n.jsx)("strong",{children:"color modifier"})," (background color, on-background color) to containers and elements."]}),(0,n.jsx)("p",{children:(0,n.jsxs)("i",{children:["These classes are ",(0,n.jsx)("u",{children:"not"})," intended for individual styling of your own components. The corresponding CSS Custom Properties should be used for this."]})}),(0,n.jsx)("strong",{children:"How to use:"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(s.Z,{semantic:"informational",children:"Note: All three methods are optional: they can be used individually or in any combination on an element."}),(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["Should an entire container be given an"," ",(0,n.jsx)("strong",{children:"adaptive color scheme"}),"? Then use a"," ",(0,n.jsx)("code",{children:"db-container-color-[ color ]"})," class."]}),(0,n.jsxs)("li",{children:["The ",(0,n.jsx)("strong",{children:"background color"}),", in particular the"," ",(0,n.jsx)("strong",{children:"elevation level"}),", can be modified with a"," ",(0,n.jsx)("code",{children:"db-bg-color-[ color ]"})," class."]}),(0,n.jsxs)("li",{children:["The contrast of the ",(0,n.jsx)("strong",{children:"text"})," and"," ",(0,n.jsx)("strong",{children:"icon color"})," can be changed with the"," ",(0,n.jsx)("strong",{children:"on-background"})," classes:"," ",(0,n.jsx)("code",{children:"db-on-bg-color-[ color ]"})]})]}),(0,n.jsx)("h2",{id:"container-color-classes",children:"1. Container color"}),(0,n.jsxs)("p",{children:["These classes define the"," ",(0,n.jsx)("strong",{children:"monochromatic adaptive color scheme"})," for a container. Texts, icons and backgrounds in it then automatically adapt to the color set."]}),(0,n.jsx)("p",{children:"Each container color class functions as a shorthand and applies the following by default:"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["A bunch of CSS Custom Properties to apply the"," ",(0,n.jsx)("strong",{children:"monochromatic adaptive color scheme"})]}),(0,n.jsxs)("li",{children:["Background color modifier"," ",(0,n.jsx)("strong",{children:"db-bg-color-basic-level-1"})," (Level 1 background by default)"]}),(0,n.jsxs)("li",{children:["On background color modifier"," ",(0,n.jsx)("strong",{children:"db-on-bg-color-emphasis-100"})," (highest text contrast by default)"]})]}),(0,n.jsx)("h3",{children:"Semantic container color"}),(0,n.jsxs)("p",{children:["These semantic colors are used to give a container a corresponding meaning. ",(0,n.jsx)("strong",{children:"Neutral"})," stands for the regular color scheme, which is usually applied to root."]}),(0,n.jsx)(f,{values:b,prefixClass:"db-container-color-",dataAttributeName:"data-container-color"}),(0,n.jsx)("h3",{children:"Additional container color"}),(0,n.jsx)(f,{values:j,prefixClass:"db-container-color-",dataAttributeName:"data-container-color"}),(0,n.jsx)("h2",{id:"background-color-modifier-classes",children:"2. Background color modifier"}),(0,n.jsxs)("p",{children:["These classes define the type of background color for a container. The exact color tone then results from the current semantics (in root ",(0,n.jsx)("strong",{children:"neutral"})," by default). This means that each of these background types exists for each semantic color."]}),(0,n.jsx)(f,{values:v,prefixClass:"db-bg-color-",dataAttributeName:"data-bg-color"}),(0,n.jsx)("h2",{id:"on-background-color-modifier-classes",children:"3. On background color modifier"}),(0,n.jsxs)("p",{children:["This class is used to define the contrast for"," ",(0,n.jsx)("strong",{children:"texts"})," and ",(0,n.jsx)("strong",{children:"icons"}),". As with the background colors, these are displayed according to the current color scheme."]}),(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"* These colors do not have sufficient contrast. They are therefore not permitted as text colors."})}),(0,n.jsx)(f,{values:y,prefixClass:"db-on-bg-color-",dataAttributeName:"data-on-bg-color"})]})})}},function(e){e.O(0,[6061,1954,2182,8634,2888,9774,179],function(){return e(e.s=25706)}),_N_E=e.O()}]);