(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1996],{16208:(e,s,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/font-sizes/readme",function(){return n(90174)}])},90174:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>a});var t=n(52322),i=n(50115),r=n(45392);function l(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"db-font-sizes",children:"DB Font Sizes"}),"\n",(0,t.jsxs)(s.p,{children:["The font sizes of foundations consist of ",(0,t.jsx)(s.a,{href:"./overview",children:"two different sets"})," (9 sizes each) for general texts (",(0,t.jsx)(s.strong,{children:"Body Font Sizes"}),") and headlines (",(0,t.jsx)(s.strong,{children:"Headline Font Sizes"}),").\nAll sizes of both sets are automatically adjusted by the selected ",(0,t.jsx)(s.a,{href:"./../densities/readme",children:"density"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"body-font-sizes",children:"Body Font Sizes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["By default, the Body Font Size ",(0,t.jsx)(s.code,{children:"md"})," is set to the body tag."]}),"\n",(0,t.jsx)(s.li,{children:"These 9 Body Font Sizes can also be explicitly set as classes on elements in order to change their font size."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"headline-font-sizes",children:"Headline Font Sizes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"9 Headline Sizes are available and are usable by custom properties"}),"\n",(0,t.jsxs)(s.li,{children:["6 Headline Sizes are mapped to native headline tags (",(0,t.jsx)(s.code,{children:"h1"})," to ",(0,t.jsx)(s.code,{children:"h6"}),") by default. Headlines can therefore be used directly."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"available-variants--sizes",children:"Available variants / sizes"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"3xl"})," | ",(0,t.jsx)(s.code,{children:"2xl"})," | ",(0,t.jsx)(s.code,{children:"xl"})," | ",(0,t.jsx)(s.code,{children:"lg"})," | ",(0,t.jsx)(s.code,{children:"md"})," | ",(0,t.jsx)(s.code,{children:"sm"})," | ",(0,t.jsx)(s.code,{children:"xs"})," | ",(0,t.jsx)(s.code,{children:"2xs"})," | ",(0,t.jsx)(s.code,{children:"3xs"})]}),"\n",(0,t.jsx)(s.h2,{id:"when-to-use",children:"When to use"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Use our provided ",(0,t.jsx)(s.strong,{children:"Body Font Sizes"})," to explicitly change the size of text elements like ",(0,t.jsx)(s.code,{children:"<p>"}),", ",(0,t.jsx)(s.code,{children:"<span>"})," etc."]}),"\n",(0,t.jsxs)(s.li,{children:["Use a ",(0,t.jsx)(s.strong,{children:"Body Font Size"})," for a container and all text elements in it (does not affect components font-sizes) ."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Headline Font Sizes"})," can be used to override the default mapping of the ",(0,t.jsx)(s.code,{children:"h1"})," - ",(0,t.jsx)(s.code,{children:"h6"})," tags."]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsxs)(s.em,{children:["Advanced: use standardised ",(0,t.jsx)(s.em,{children:"custom properties"})," to define ",(0,t.jsx)(s.code,{children:"font-size"})," and ",(0,t.jsx)(s.code,{children:"line-height"})," in your own components."]})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Some sizes may stay the same because of screen width or density."}),"\n",(0,t.jsxs)(s.li,{children:["Elements such as ",(0,t.jsx)(s.code,{children:"<p>"})," and all headings (",(0,t.jsx)(s.code,{children:"h1"})," - ",(0,t.jsx)(s.code,{children:"h6"}),") as well as ",(0,t.jsx)(s.strong,{children:"DB UI components"})," have font sizes assigned by default so that they can be used without further customisation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"how-to-include",children:"How to include"}),"\n",(0,t.jsxs)(s.p,{children:["For ",(0,t.jsx)(s.strong,{children:"CSS"})," and ",(0,t.jsx)(s.strong,{children:"Tailwind"})," you need to use the import ",(0,t.jsx)(s.code,{children:'@import "@db-ui/foundations/build/css/fonts/classes/all.css";'})," in your root ",(0,t.jsx)(s.code,{children:".css"})," file."]}),"\n",(0,t.jsxs)(s.p,{children:["For ",(0,t.jsx)(s.strong,{children:"SCSS"})," you can use the ",(0,t.jsx)(s.code,{children:".css"})," file, or you can use a placeholder by importing ",(0,t.jsx)(s.code,{children:"@use @db-ui/foundations/build/scss/fonts"})," in your ",(0,t.jsx)(s.code,{children:".scss"})," file, where you need to reference the specific font size.\nThen you can use e.g. ",(0,t.jsx)(s.code,{children:"sm"})," font-size by extending our SCSS placeholders like this: ",(0,t.jsx)(s.code,{children:"@extend %db-overwrite-font-size-sm"}),"."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"NOTE:"})})," Make sure that you import the file after all other ",(0,t.jsx)(s.strong,{children:"foundation"})," css files, otherwise you should overwrite a specific ",(0,t.jsx)(s.code,{children:"font-size"})," with the global selector"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:"/* Global selector */\n* {\n	font-size: inherit;\n	line-height: inherit;\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsxs)(s.p,{children:["The following options are recommended for applying ",(0,t.jsx)(s.strong,{children:"Body Font Sizes"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"CSS classes"}),"\n",(0,t.jsxs)(s.li,{children:["CSS ",(0,t.jsx)(s.code,{children:"data-"}),"attributes"]}),"\n",(0,t.jsx)(s.li,{children:"SCSS placeholders"}),"\n",(0,t.jsx)(s.li,{children:"Tailwind classes"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["All options (except the last one) set ",(0,t.jsx)(s.code,{children:"font-size"}),", ",(0,t.jsx)(s.code,{children:"line-height"})," and some ",(0,t.jsx)(s.strong,{children:"CSS Custom Properties"})," for an element. These custom properties are internally required by some components to be displayed correctly."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["All available variants / sizes, ",(0,t.jsx)(s.a,{href:"./overview",children:"see also the detailed overview"}),":"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"3xl"})," | ",(0,t.jsx)(s.code,{children:"2xl"})," | ",(0,t.jsx)(s.code,{children:"xl"})," | ",(0,t.jsx)(s.code,{children:"lg"})," | ",(0,t.jsx)(s.code,{children:"md"})," | ",(0,t.jsx)(s.code,{children:"sm"})," | ",(0,t.jsx)(s.code,{children:"xs"})," | ",(0,t.jsx)(s.code,{children:"2xs"})," | ",(0,t.jsx)(s.code,{children:"3xs"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.strong,{children:["Note: We use ",(0,t.jsx)(s.code,{children:"XX"})," here. You should replace it with a size from above."]})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"center"},children:"CSS class"}),(0,t.jsx)(s.th,{children:"CSS data-attribute"}),(0,t.jsx)(s.th,{children:"SCSS"}),(0,t.jsx)(s.th,{children:"Tailwind"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"center"},children:(0,t.jsx)(s.code,{children:'class="db-font-size-XX"'})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'data-font-size="XX"'})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"@extend %db-overwrite-font-size-XX"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'class="db-font-size-XX"'})})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"advanced-use-css-custom-properties",children:"Advanced use: CSS Custom Properties"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.em,{children:"Note:"})})," The direct use of custom properties to set font sizes should be avoided if possible. If this is unavoidable, existing restrictions should be taken into account."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["All of the above options are available for applying the ",(0,t.jsx)(s.strong,{children:"Body Font Sizes"})," to HTML elements within custom components.\nIn some cases it may make sense to set the ",(0,t.jsx)(s.code,{children:"font-size"})," and ",(0,t.jsx)(s.code,{children:"line-height"})," manually in the css."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsxs)(s.strong,{children:["Please replace ",(0,t.jsx)(s.code,{children:"XX"})," in the custom-properties with one of the sizes:"]})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:".text-element {\n	font-size: var(--db-type-body-font-size-XX);\n	line-height: var(--db-type-body-line-height-XX);\n}\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}let o=e=>{let{children:s}=e;return(0,t.jsx)(i.Z,{children:s})};function d(e){return(0,t.jsx)(c,{})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})})}},50115:(e,s,n)=>{"use strict";n.d(s,{Z:()=>C});var t=n(52322),i=n(5632),r=n(25237),l=n.n(r),c=n(2784),o=n(61183),d=n(39097),a=n.n(d),h=n(98072);let u=(0,c.forwardRef)(function(e,s){let n=s||(0,c.useRef)(s),[i,r]=(0,c.useState)(()=>!1),l=(0,c.useRef)(!1);return l.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),l.current=!0),(0,c.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,t.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.X)(i),children:[(0,t.jsx)(t.Fragment,{children:e.header}),(0,t.jsx)("main",{className:"db-main",children:e.children}),(0,t.jsx)(t.Fragment,{children:e.footer})]})});var x=n(68908),j=n(48483),p=n(90434),f=n(97689),m=n(85803),g=n(72288),b=n(76460),v=n(40245),y=n(29469);let S=(e,s,n)=>{if(!n.query.slug)return s.path===n.pathname;let{slug:t}=n.query,i=Array.isArray(t)?t:[t];return s.path==="/components/".concat(i.join("/"))},w=e=>{var s;let{navItem:n}=e,r=(0,i.useRouter)(),l=S(r.pathname,n,r);return(0,t.jsx)(y.Z,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,t.jsx)(t.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:s}=e;return!0!==s}).map(e=>(0,t.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,t.jsx)(a(),{href:null!==(s=n.path)&&void 0!==s?s:"","aria-current":l?"page":void 0,children:n.label},"router-path-".concat(n.path))})},z=()=>(0,t.jsx)(v.Z,{children:b.Z6.map(e=>(0,t.jsx)(w,{navItem:e},"router-path-".concat(e.path)))});var N=n(35368),q=n(9842);let k=async e=>{try{let s=await fetch(e);return await s.json()}catch(e){console.error(e)}return[]},F="db-ui",X="mono",Z=()=>{let e=(0,i.useRouter)(),[s,n]=(0,c.useState)(),[r,l]=(0,c.useState)(),o=s=>{let n=e.basePath,t=s.find(e=>n.includes(e));t&&l(t)},d=(e,s)=>{let t=[],i=[],r=[],l=[],c=[],o=[];for(let e of s)e.startsWith("feat")||e.startsWith("feature")?i.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?l.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?o.push(e):t.push(e);n({others:t,features:i,docs:o,refactors:l,issues:c,bugfixes:r,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(F,"/").concat(X,"/branches")),s=(await k("https://api.github.com/repos/".concat(F,"/").concat(X,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));o(n),o(s),d(s,n)})().catch(e=>{console.error(e)})},[]);let a=s=>{let n=e.asPath,t=3===s.split(".").length&&s.startsWith("v");window.location.replace((0,N.sanitize)("https://".concat(F,".github.io/").concat(X).concat(t?"/version":"/review","/").concat(s).concat(n)))};return s?(0,t.jsx)(q.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{a(e.target.value)},children:Object.entries(s).filter(e=>{let[s,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[s,n]=e;return(0,t.jsx)("optgroup",{label:s,children:n.slice(0,15).map((e,n)=>(0,t.jsx)("option",{value:e,children:e},"".concat(s,"-").concat(e,"-").concat(n)))},s)})}):null},A=e=>{var s,n;let{children:r,noNavigation:l}=e,[d,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[S,w]=(0,c.useState)(!1),[N,q]=(0,c.useState)(!1),[k,F]=(0,c.useState)(),[X,A]=(0,c.useState)(),[C,T]=(0,c.useState)(),[_,E]=(0,c.useState)(),B=(0,i.useRouter)();return(0,c.useEffect)(()=>{o.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),o.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(B.query&&(B.query.fullscreen&&h("true"===B.query.fullscreen),B.query.page&&h(!0),B.query.noh1&&y("true"===B.query.noh1),B.query.properties&&w("true"===B.query.properties),B.query.current)){let s=Array.isArray(B.query.current)?B.query.current[0]:B.query.current;if(k!==s){var e;F(s),null===(e=document.querySelector("#".concat(s)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let s=B.asPath.split("?")[0],{previous:n,next:t}=(0,b.vn)(s);A(n),T(t),E((0,b.kn)(s))},[B]),(0,t.jsxs)(t.Fragment,{children:[B.isReady&&d&&(0,t.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(S?"is-properties":""),children:r}),B.isReady&&!d&&(0,t.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,t.jsx)(x.Z,{drawerOpen:N,onToggle:q,brand:(0,t.jsx)(j.Z,{children:"DB-UX"}),primaryAction:(0,t.jsx)(p.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,t.jsx)(Z,{}),children:(0,t.jsx)(z,{})}),children:[_&&_.length>1&&(0,t.jsx)(f.Z,{spacing:"none",width:"large",children:(0,t.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==_?void 0:_.map(e=>{var s;return(0,t.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,t.jsx)(m.Z,{icon:"chevron_right"}),(0,t.jsx)(a(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(s=e.path)&&void 0!==s?s:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,t.jsx)(f.Z,{spacing:"none",width:"large",children:r}),!l&&(null!=X?X:C)&&(0,t.jsxs)(f.Z,{width:"large",spacing:"small",className:"link-containers",children:[X&&(0,t.jsx)(a(),{className:"previous-link-container",href:null!==(s=X.path)&&void 0!==s?s:"/",children:(0,t.jsxs)(g.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Previous"}),(0,t.jsx)("span",{"data-icon":"arrow_left",children:X.label})]})}),C&&(0,t.jsx)(a(),{className:"next-link-container",href:null!==(n=C.path)&&void 0!==n?n:"/",children:(0,t.jsxs)(g.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Next"}),(0,t.jsx)("span",{"data-icon-after":"arrow_right",children:C.label})]})})]})]})]})},C=l()(async()=>A,{ssr:!1})}},e=>{var s=s=>e(e.s=s);e.O(0,[3430,1954,4540,6460,2888,9774,179],()=>s(16208)),_N_E=e.O()}]);