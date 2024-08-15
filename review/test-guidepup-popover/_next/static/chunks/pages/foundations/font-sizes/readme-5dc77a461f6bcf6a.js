(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1996],{16208:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/font-sizes/readme",function(){return s(9210)}])},9210:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var t=s(52322),i=s(53148),r=s(45392);function l(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"db-font-sizes",children:"DB Font Sizes"}),"\n",(0,t.jsxs)(n.p,{children:["The font sizes of foundations consist of ",(0,t.jsx)(n.a,{href:"./overview",children:"two different sets"})," (9 sizes each) for general texts (",(0,t.jsx)(n.strong,{children:"Body Font Sizes"}),") and headlines (",(0,t.jsx)(n.strong,{children:"Headline Font Sizes"}),").\nAll sizes of both sets are automatically adjusted by the selected ",(0,t.jsx)(n.a,{href:"./../densities/readme",children:"density"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"body-font-sizes",children:"Body Font Sizes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["By default, the Body Font Size ",(0,t.jsx)(n.code,{children:"md"})," is set to the body tag."]}),"\n",(0,t.jsx)(n.li,{children:"These 9 Body Font Sizes can also be explicitly set as classes on elements in order to change their font size."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"headline-font-sizes",children:"Headline Font Sizes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"9 Headline Sizes are available and are usable by custom properties"}),"\n",(0,t.jsxs)(n.li,{children:["6 Headline Sizes are mapped to native headline tags (",(0,t.jsx)(n.code,{children:"h1"})," to ",(0,t.jsx)(n.code,{children:"h6"}),") by default. Headlines can therefore be used directly."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"available-variants--sizes",children:"Available variants / sizes"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"3xl"})," | ",(0,t.jsx)(n.code,{children:"2xl"})," | ",(0,t.jsx)(n.code,{children:"xl"})," | ",(0,t.jsx)(n.code,{children:"lg"})," | ",(0,t.jsx)(n.code,{children:"md"})," | ",(0,t.jsx)(n.code,{children:"sm"})," | ",(0,t.jsx)(n.code,{children:"xs"})," | ",(0,t.jsx)(n.code,{children:"2xs"})," | ",(0,t.jsx)(n.code,{children:"3xs"})]}),"\n",(0,t.jsx)(n.h2,{id:"when-to-use",children:"When to use"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use our provided ",(0,t.jsx)(n.strong,{children:"Body Font Sizes"})," to explicitly change the size of text elements like ",(0,t.jsx)(n.code,{children:"<p>"}),", ",(0,t.jsx)(n.code,{children:"<span>"})," etc."]}),"\n",(0,t.jsxs)(n.li,{children:["Use a ",(0,t.jsx)(n.strong,{children:"Body Font Size"})," for a container and all text elements in it (does not affect components font-sizes) ."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Headline Font Sizes"})," can be used to override the default mapping of the ",(0,t.jsx)(n.code,{children:"h1"})," - ",(0,t.jsx)(n.code,{children:"h6"})," tags."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.em,{children:["Advanced: use standardised ",(0,t.jsx)(n.em,{children:"custom properties"})," to define ",(0,t.jsx)(n.code,{children:"font-size"})," and ",(0,t.jsx)(n.code,{children:"line-height"})," in your own components."]})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Some sizes may stay the same because of screen width or density."}),"\n",(0,t.jsxs)(n.li,{children:["Elements such as ",(0,t.jsx)(n.code,{children:"<p>"})," and all headings (",(0,t.jsx)(n.code,{children:"h1"})," - ",(0,t.jsx)(n.code,{children:"h6"}),") as well as ",(0,t.jsx)(n.strong,{children:"DB UI components"})," have font sizes assigned by default so that they can be used without further customisation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-include",children:"How to include"}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.strong,{children:"CSS"})," and ",(0,t.jsx)(n.strong,{children:"Tailwind"})," you need to use the import ",(0,t.jsx)(n.code,{children:'@import "@db-ui/foundations/build/css/fonts/classes/all.css";'})," in your root ",(0,t.jsx)(n.code,{children:".css"})," file."]}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.strong,{children:"SCSS"})," you can use the ",(0,t.jsx)(n.code,{children:".css"})," file, or you can use a placeholder by importing ",(0,t.jsx)(n.code,{children:"@use @db-ui/foundations/build/scss/fonts"})," in your ",(0,t.jsx)(n.code,{children:".scss"})," file, where you need to reference the specific font size.\nThen you can use e.g. ",(0,t.jsx)(n.code,{children:"sm"})," font-size by extending our SCSS placeholders like this: ",(0,t.jsx)(n.code,{children:"@extend %db-overwrite-font-size-sm"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"NOTE:"})})," Make sure that you import the file after all other ",(0,t.jsx)(n.strong,{children:"foundation"})," css files, otherwise you should overwrite a specific ",(0,t.jsx)(n.code,{children:"font-size"})," with the global selector"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"/* Global selector */\n* {\n	font-size: inherit;\n	line-height: inherit;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsxs)(n.p,{children:["The following options are recommended for applying ",(0,t.jsx)(n.strong,{children:"Body Font Sizes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CSS classes"}),"\n",(0,t.jsxs)(n.li,{children:["CSS ",(0,t.jsx)(n.code,{children:"data-"}),"attributes"]}),"\n",(0,t.jsx)(n.li,{children:"SCSS placeholders"}),"\n",(0,t.jsx)(n.li,{children:"Tailwind classes"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All options (except the last one) set ",(0,t.jsx)(n.code,{children:"font-size"}),", ",(0,t.jsx)(n.code,{children:"line-height"})," and some ",(0,t.jsx)(n.strong,{children:"CSS Custom Properties"})," for an element. These custom properties are internally required by some components to be displayed correctly."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["All available variants / sizes, ",(0,t.jsx)(n.a,{href:"./overview",children:"see also the detailed overview"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"3xl"})," | ",(0,t.jsx)(n.code,{children:"2xl"})," | ",(0,t.jsx)(n.code,{children:"xl"})," | ",(0,t.jsx)(n.code,{children:"lg"})," | ",(0,t.jsx)(n.code,{children:"md"})," | ",(0,t.jsx)(n.code,{children:"sm"})," | ",(0,t.jsx)(n.code,{children:"xs"})," | ",(0,t.jsx)(n.code,{children:"2xs"})," | ",(0,t.jsx)(n.code,{children:"3xs"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Note: We use ",(0,t.jsx)(n.code,{children:"XX"})," here. You should replace it with a size from above."]})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"CSS class"}),(0,t.jsx)(n.th,{children:"CSS data-attribute"}),(0,t.jsx)(n.th,{children:"SCSS"}),(0,t.jsx)(n.th,{children:"Tailwind"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:'class="db-font-size-XX"'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'data-font-size="XX"'})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"@extend %db-overwrite-font-size-XX"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'class="db-font-size-XX"'})})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"advanced-use-css-custom-properties",children:"Advanced use: CSS Custom Properties"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Note:"})})," The direct use of custom properties to set font sizes should be avoided if possible. If this is unavoidable, existing restrictions should be taken into account."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All of the above options are available for applying the ",(0,t.jsx)(n.strong,{children:"Body Font Sizes"})," to HTML elements within custom components.\nIn some cases it may make sense to set the ",(0,t.jsx)(n.code,{children:"font-size"})," and ",(0,t.jsx)(n.code,{children:"line-height"})," manually in the css."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Please replace ",(0,t.jsx)(n.code,{children:"XX"})," in the custom-properties with one of the sizes:"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".text-element {\n	font-size: var(--db-type-body-font-size-XX);\n	line-height: var(--db-type-body-line-height-XX);\n}\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}let o=e=>{let{children:n}=e;return(0,t.jsx)(i.Z,{children:n})};function d(e){return(0,t.jsx)(c,{})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})})}},53148:function(e,n,s){"use strict";s.d(n,{Z:function(){return T}});var t=s(52322),i=s(5632),r=s(25237),l=s.n(r),c=s(2784),o=s(61183),d=s(39097),a=s.n(d),h=s(43251);let u=(0,c.forwardRef)(function(e,n){let s=n||(0,c.useRef)(n),[i,r]=(0,c.useState)(()=>!1),l=(0,c.useRef)(!1);return l.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),l.current=!0),(0,c.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,t.jsxs)("div",{ref:s,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":i,children:[(0,t.jsx)(t.Fragment,{children:e.header}),(0,t.jsx)("main",{className:"db-main",children:e.children}),(0,t.jsx)(t.Fragment,{children:e.footer})]})});var x=s(82664),j=s(98310),p=s(10326),f=s(55327),m=s(74819),g=s(70741),b=s(92811),v=s(33759),y=s(39120);let S=(e,n)=>{var s;return"/"===n.path?"/"===e:e.includes("".concat(n.path,"/"))||e===n.path||!!(null===(s=n.subNavigation)||void 0===s?void 0:s.find(n=>e.includes("".concat(n.path,"/"))))},w=e=>{var n;let{navItem:s}=e,r=S((0,i.useRouter)().pathname,s);return(0,t.jsx)(y.Z,{active:r,backButtonText:"Back to ".concat(s.label),subNavigation:s.subNavigation&&(0,t.jsx)(t.Fragment,{children:null==s?void 0:s.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,t.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),children:s.subNavigation?s.label:(0,t.jsx)(a(),{href:null!==(n=s.path)&&void 0!==n?n:"",children:s.label},"router-path-".concat(s.path))})};var z=()=>(0,t.jsx)(v.Z,{children:b.Z6.map(e=>(0,t.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),N=s(35368),k=s(79081);let q=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},F="db-ui",X="mono";var Z=()=>{let e=(0,i.useRouter)(),[n,s]=(0,c.useState)(),[r,l]=(0,c.useState)(),o=n=>{let s=e.basePath,t=n.find(e=>s.includes(e));t&&l(t)},d=(e,n)=>{let t=[],i=[],r=[],l=[],c=[],o=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?i.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?l.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?o.push(e):t.push(e);s({others:t,features:i,docs:o,refactors:l,issues:c,bugfixes:r,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await q("https://api.github.com/repos/".concat(F,"/").concat(X,"/branches")),n=(await q("https://api.github.com/repos/".concat(F,"/").concat(X,"/tags"))).map(e=>e.name),s=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));o(s),o(n),d(n,s)})().catch(e=>{console.error(e)})},[]);let a=n=>{let s=e.pathname,t=3===n.split(".").length&&n.startsWith("v");window.location.replace((0,N.sanitize)("https://".concat(F,".github.io/").concat(X).concat(t?"/version":"/review","/").concat(n).concat(s)))};return n?(0,t.jsx)(k.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{a(e.target.value)},children:Object.entries(n).filter(e=>{let[n,s]=e;return(null==s?void 0:s.length)>0}).map(e=>{let[n,s]=e;return(0,t.jsx)("optgroup",{label:n,children:s.slice(0,15).map((e,s)=>(0,t.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(s)))},n)})}):null};let C=e=>{var n,s;let{children:r,noNavigation:l}=e,[d,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[S,w]=(0,c.useState)(!1),[N,k]=(0,c.useState)(!1),[q,F]=(0,c.useState)(),[X,C]=(0,c.useState)(),[T,_]=(0,c.useState)(),[E,A]=(0,c.useState)(),B=(0,i.useRouter)();return(0,c.useEffect)(()=>{o.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),o.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(B.query&&(B.query.fullscreen&&h("true"===B.query.fullscreen),B.query.page&&h(!0),B.query.noh1&&y("true"===B.query.noh1),B.query.properties&&w("true"===B.query.properties),B.query.current)){let n=Array.isArray(B.query.current)?B.query.current[0]:B.query.current;if(q!==n){var e;F(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=B.asPath.split("?")[0],{previous:s,next:t}=(0,b.vn)(n);C(s),_(t),A((0,b.kn)(n))},[B]),(0,t.jsxs)(t.Fragment,{children:[B.isReady&&d&&(0,t.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(S?"is-properties":""),children:r}),B.isReady&&!d&&(0,t.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,t.jsx)(x.Z,{drawerOpen:N,onToggle:k,brand:(0,t.jsx)(j.Z,{children:"DB-UI Mono"}),primaryAction:(0,t.jsx)(p.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,t.jsx)(Z,{}),children:(0,t.jsx)(z,{})}),children:[E&&E.length>1&&(0,t.jsx)(f.Z,{spacing:"none",width:"large",children:(0,t.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==E?void 0:E.map(e=>{var n;return(0,t.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,t.jsx)(m.Z,{icon:"chevron_right"}),(0,t.jsx)(a(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,t.jsx)(f.Z,{spacing:"none",width:"large",children:r}),!l&&(null!=X?X:T)&&(0,t.jsxs)(f.Z,{width:"large",spacing:"small",className:"link-containers",children:[X&&(0,t.jsx)(a(),{className:"previous-link-container",href:null!==(n=X.path)&&void 0!==n?n:"/",children:(0,t.jsxs)(g.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Previous"}),(0,t.jsx)("span",{"data-icon":"arrow_left",children:X.label})]})}),T&&(0,t.jsx)(a(),{className:"next-link-container",href:null!==(s=T.path)&&void 0!==s?s:"/",children:(0,t.jsxs)(g.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Next"}),(0,t.jsx)("span",{"data-icon-after":"arrow_right",children:T.label})]})})]})]})]})};var T=l()(async()=>C,{ssr:!1})}},function(e){e.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return e(e.s=16208)}),_N_E=e.O()}]);