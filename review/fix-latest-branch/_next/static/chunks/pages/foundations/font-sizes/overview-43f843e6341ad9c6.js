(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4980],{54049:(e,s,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/font-sizes/overview",function(){return n(65056)}])},83952:(e,s,n)=>{"use strict";n.d(s,{A:()=>_});var t=n(31085),a=n(31242),i=n(83894),r=n.n(i),c=n(14041),l=n(30127),o=n(34747),d=n.n(o),h=n(5188);let u=(0,c.forwardRef)(function(e,s){let n=s||(0,c.useRef)(s),[a,i]=(0,c.useState)(()=>!1),r=(0,c.useRef)(!1);return r.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),r.current=!0),(0,c.useEffect)(()=>{i(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{i(!0)}):i(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,t.jsxs)("div",{ref:n,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(a),children:[(0,t.jsx)(t.Fragment,{children:e.header}),(0,t.jsx)("main",{className:"db-main",children:e.children}),(0,t.jsx)(t.Fragment,{children:e.footer})]})});var x=n(23116),p=n(23944),g=n(95374),j=n(12764),m=n(80692),b=n(64286),f=n(42372),v=n(61338),y=n(6900);let w=(e,s,n)=>{if(!n.query.slug)return s.path===n.pathname;let{slug:t}=n.query,a=Array.isArray(t)?t:[t];return s.path==="/components/".concat(a.join("/"))},z=e=>{var s;let{navItem:n}=e,i=(0,a.useRouter)(),r=w(i.pathname,n,i);return(0,t.jsx)(y.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,t.jsx)(t.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:s}=e;return!0!==s}).map(e=>(0,t.jsx)(z,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,t.jsx)(d(),{href:null!==(s=n.path)&&void 0!==s?s:"","aria-current":r?"page":void 0,children:n.label},"router-path-".concat(n.path))})},A=()=>(0,t.jsx)(v.A,{children:f.bw.map(e=>(0,t.jsx)(z,{navItem:e},"router-path-".concat(e.path)))});var S=n(71651),N=n(47982);let k=async e=>{try{let s=await fetch(e);return await s.json()}catch(e){console.error(e)}return[]},T="db-ui",H="mono",F=()=>{let e=(0,a.useRouter)(),[s,n]=(0,c.useState)(),[i,r]=(0,c.useState)(),l=s=>{let n=e.basePath,t=s.find(e=>n.includes(e));t&&r(t)},o=(e,s)=>{let t=[],a=[],i=[],r=[],c=[],l=[];for(let e of s)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?i.push(e):e.startsWith("refactor")?r.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):t.push(e);n({others:t,features:a,docs:l,refactors:r,issues:c,bugfixes:i,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(T,"/").concat(H,"/branches")),s=(await k("https://api.github.com/repos/".concat(T,"/").concat(H,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));s.push("latest"),l(n),l(s),o(s,n)})().catch(e=>{console.error(e)})},[]);let d=s=>{let n=e.asPath,t=3===s.split(".").length&&s.startsWith("v")||"latest"===s;window.location.replace((0,S.sanitize)("https://".concat(T,".github.io/").concat(H).concat(t?"/version":"/review","/").concat(s).concat(n)))};return s?(0,t.jsx)(N.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:i,onChange:e=>{d(e.target.value)},children:Object.entries(s).filter(e=>{let[s,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[s,n]=e;return(0,t.jsx)("optgroup",{label:s,children:n.slice(0,15).map((e,n)=>(0,t.jsx)("option",{value:e,children:e},"".concat(s,"-").concat(e,"-").concat(n)))},s)})}):null},X=e=>{var s,n;let{children:i,noNavigation:r}=e,[o,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[w,z]=(0,c.useState)(!1),[S,N]=(0,c.useState)(!1),[k,T]=(0,c.useState)(),[H,X]=(0,c.useState)(),[_,q]=(0,c.useState)(),[E,I]=(0,c.useState)(),C=(0,a.useRouter)();return(0,c.useEffect)(()=>{l.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.A.highlightAll()},[]),(0,c.useEffect)(()=>{if(C.query&&(C.query.fullscreen&&h("true"===C.query.fullscreen),C.query.page&&h(!0),C.query.noh1&&y("true"===C.query.noh1),C.query.properties&&z("true"===C.query.properties),C.query.current)){let s=Array.isArray(C.query.current)?C.query.current[0]:C.query.current;if(k!==s){var e;T(s),null===(e=document.querySelector("#".concat(s)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let s=C.asPath.split("?")[0],{previous:n,next:t}=(0,f.Pb)(s);X(n),q(t),I((0,f.Oj)(s))},[C]),(0,t.jsxs)(t.Fragment,{children:[C.isReady&&o&&(0,t.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:i}),C.isReady&&!o&&(0,t.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,t.jsx)(x.A,{drawerOpen:S,onToggle:N,brand:(0,t.jsx)(p.A,{children:"DB-UX"}),primaryAction:(0,t.jsx)(g.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,t.jsx)(F,{}),children:(0,t.jsx)(A,{})}),children:[E&&E.length>1&&(0,t.jsx)(j.A,{spacing:"none",width:"large",children:(0,t.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==E?void 0:E.map(e=>{var s;return(0,t.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,t.jsx)(m.A,{icon:"chevron_right"}),(0,t.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(s=e.path)&&void 0!==s?s:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,t.jsx)(j.A,{spacing:"none",width:"large",children:i}),!r&&(null!=H?H:_)&&(0,t.jsxs)(j.A,{width:"large",spacing:"small",className:"link-containers",children:[H&&(0,t.jsx)(d(),{className:"previous-link-container",href:null!==(s=H.path)&&void 0!==s?s:"/",children:(0,t.jsxs)(b.A,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Previous"}),(0,t.jsx)("span",{"data-icon":"arrow_left",children:H.label})]})}),_&&(0,t.jsx)(d(),{className:"next-link-container",href:null!==(n=_.path)&&void 0!==n?n:"/",children:(0,t.jsxs)(b.A,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Next"}),(0,t.jsx)("span",{"data-icon-after":"arrow_right",children:_.label})]})})]})]})]})},_=r()(async()=>X,{ssr:!1})},65056:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>x});var t=n(31085),a=n(14041),i=n(83952),r=n(64140),c=n(98142),l=n(12764),o=n(80692);let d=e=>".db-font-size-".concat(e," {\n	font-size: var(--db-type-body-font-size-").concat(e,");\n	line-height: var(--db-type-body-line-height-").concat(e,");\n\n	/* custom properties only for components */\n	--db-icon-font-weight: var(--db-base-body-icon-weight-").concat(e,");\n	--db-icon-font-size: var(--db-base-body-icon-font-size-").concat(e,");\n	--db-base-line-height: var(--db-type-body-line-height-").concat(e,");\n	--db-base-font-size: var(--db-type-body-font-size-").concat(e,");\n}\n"),h=(e,s)=>"".concat(e," {\n    line-height: var(--db-type-headline-line-height-").concat(s,");\n    font-size: var(--db-type-headline-font-size-").concat(s,");\n    margin-block: var(--db-spacing-fixed-").concat(s,");\n}\n"),u=e=>".custom-headline-selector {\n    line-height: var(--db-type-headline-line-height-".concat(e,");\n    font-size: var(--db-type-headline-font-size-").concat(e,");\n    margin-block: var(--db-spacing-fixed-").concat(e,");\n}\n"),x=()=>{let[e,s]=(0,a.useState)(!1),[n,x]=(0,a.useState)(!1),[p,g]=(0,a.useState)(!1);return(0,t.jsxs)(i.A,{children:[(0,t.jsx)("h1",{children:"Font Sizes Overview"}),(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("b",{children:"Body Font Sizes"})}),(0,t.jsx)("li",{children:(0,t.jsx)("b",{children:"Default Headlines H1 - H6"})}),(0,t.jsx)("li",{children:(0,t.jsx)("b",{children:"Available Headline Font Sizes"})})]}),(0,t.jsxs)(r.A,{"data-font-size":"md",semantic:"informational",children:[(0,t.jsx)("strong",{children:"Note: "}),"Some font sizes are the same for a specific device type. For example in mobile all ",(0,t.jsx)("code",{children:"xl"})," ","sizes are the same."]}),(0,t.jsx)("h2",{children:"Body Font Sizes"}),(0,t.jsxs)("p",{children:["All ",(0,t.jsx)("strong",{children:"9 body font sizes"})," provided by foundations can be set via ",(0,t.jsx)("strong",{children:"css class"}),","," ",(0,t.jsx)("strong",{children:"data-attribute"}),","," ",(0,t.jsx)("strong",{children:"scss placeholder"})," or"," ",(0,t.jsx)("strong",{children:"Tailwind class"})," (",(0,t.jsx)("a",{href:"./readme",children:"How to use"}),"). This ensures that all custom properties are defined by the class to match the font size, so that certain child components fit correctly. For example, this allows DBIcon component to display its icon in the correct height and weight according to the chosen font-size."]}),(0,t.jsxs)("p",{children:["Therefore, if possible, these ",(0,t.jsx)("b",{children:"db-font-size"})," classes should be used to change the font size of certain text elements such as"," ",(0,t.jsx)("code",{children:"p"})," or containers with other texts."]}),(0,t.jsxs)(r.A,{"data-font-size":"md",semantic:"informational",children:["The display of icons works correctly in all sizes except"," ",(0,t.jsx)("code",{children:"3xl"})," and ",(0,t.jsx)("code",{children:"3xs"}),". That is why they are hidden there."]}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{children:(0,t.jsxs)(c.A,{change:e=>{s(e.target.checked)},children:["Show CSS applied by using ",(0,t.jsx)("b",{children:"db-font-size-XX"})," classes"]})}),(0,t.jsx)("br",{}),(0,t.jsx)(l.A,{spacing:"small",className:"db-neutral-bg-basic-level-2",children:["3xl","2xl","xl","lg","md","sm","xs","2xs","3xs"].map(s=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{className:"db-font-size-".concat(s),children:["I am size: ",(0,t.jsx)("strong",{children:s})," ","3xl"!==s&&"3xs"!==s&&(0,t.jsx)(o.A,{icon:"download"})]}),(0,t.jsx)("pre",{style:{display:e?"block":"none"},children:(0,t.jsx)("code",{className:"language-css",children:d(s)})})]}))}),(0,t.jsx)("h2",{children:"Default Headlines H1 - H6"}),(0,t.jsxs)("p",{children:["Certain ",(0,t.jsx)("strong",{children:"Headline Font Sizes"})," are mapped to the"," ",(0,t.jsx)("strong",{children:"headline tags (H1 - H6)"})," by default. Accordingly, it is sufficient to use the native headline tags, as in this example."]}),(0,t.jsx)(r.A,{"data-font-size":"md",semantic:"informational",children:"There are currently no CSS classes or data-attributes to set a predefined headline size for a specific element."}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{children:(0,t.jsxs)(c.A,{change:e=>{x(e.target.checked)},children:["Show CSS applied by using ",(0,t.jsx)("strong",{children:"H1 - H6 tags"})]})}),(0,t.jsx)("br",{}),(0,t.jsx)(l.A,{spacing:"small",className:"db-neutral-bg-basic-level-2",children:[{Tag:"h1",size:"xl"},{Tag:"h2",size:"lg"},{Tag:"h3",size:"md"},{Tag:"h4",size:"sm"},{Tag:"h5",size:"xs"},{Tag:"h6",size:"2xs"}].map(e=>{let{Tag:s,size:a}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s,{children:[s.toUpperCase()," - default mapped size is:"," ",(0,t.jsx)("u",{children:a})]}),(0,t.jsx)("pre",{style:{display:n?"block":"none"},children:(0,t.jsx)("code",{className:"language-css",children:h(s,a)})})]})})}),(0,t.jsx)("h2",{children:"Available Headline Font Sizes"}),(0,t.jsxs)("p",{children:["This overview shows all ",(0,t.jsx)("strong",{children:"9 headline sizes"})," that are available in foundations. These can be used, for example, to (globally) overwrite the default mapping. Instructions on how overwriting works are below."]}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{children:(0,t.jsx)(c.A,{change:e=>{g(e.target.checked)},children:"Show CSS for custom usage of headline sizes"})}),(0,t.jsx)("br",{}),(0,t.jsx)(l.A,{spacing:"small",className:"db-neutral-bg-basic-level-2",children:["3xl","2xl","xl","lg","md","sm","xs","2xs","3xs"].map(e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h3",{style:{fontSize:"var(--db-type-headline-font-size-".concat(e,")"),lineHeight:"var(--db-type-headline-line-height-".concat(e,")"),marginBlock:"var(--db-spacing-fixed-".concat(e,")")},children:["Headline with size: ",(0,t.jsx)("u",{children:e})]}),(0,t.jsx)("pre",{style:{display:p?"block":"none"},children:(0,t.jsx)("code",{className:"language-css",children:u(e)})})]}))}),(0,t.jsx)("h3",{children:"How to overwrite headlines default mapping"}),(0,t.jsxs)("p",{children:["To overwrite the default mapping of the foundations, a suitable selector (H1 - H6 or css class) is used to set"," ",(0,t.jsx)("code",{children:"font-size"})," and ",(0,t.jsx)("code",{children:"line-height"})," (and"," ",(0,t.jsx)("code",{children:"margin-block"})," if necessary) to the desired size using the supplied ",(0,t.jsx)("strong",{children:"custom properties"}),"."]}),(0,t.jsxs)(r.A,{"data-font-size":"md",semantic:"warning",children:["In order to maintain a uniform typography, custom properties for"," ",(0,t.jsx)("code",{children:"font-size"})," and ",(0,t.jsx)("code",{children:"line-height"})," ",(0,t.jsx)("u",{children:"must"})," ","be selected with the same size (e.g. ",(0,t.jsx)("code",{children:"md"}),")."]}),(0,t.jsx)("br",{}),(0,t.jsxs)(l.A,{spacing:"small",className:"db-neutral-bg-basic-level-2",children:[(0,t.jsx)("p",{children:(0,t.jsx)("b",{children:"These custom properties must be used for overwrites:"})}),(0,t.jsx)("code",{children:"--db-type-headline-font-size-XX"}),(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"--db-type-headline-line-height-XX"}),(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"--db-spacing-fixed-XX"})," (optional e.g. for margin)",(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"They are available in the following sizes:"})}),(0,t.jsxs)("p",{children:[(0,t.jsx)("code",{children:"3xl"})," | ",(0,t.jsx)("code",{children:"2xl"})," | ",(0,t.jsx)("code",{children:"xl"})," |"," ",(0,t.jsx)("code",{children:"lg"})," | ",(0,t.jsx)("code",{children:"md"})," | ",(0,t.jsx)("code",{children:"sm"})," |"," ",(0,t.jsx)("code",{children:"xs"})," | ",(0,t.jsx)("code",{children:"2xs"})," | ",(0,t.jsx)("code",{children:"3xs"})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"language-css",children:"/* Select a headline tag to be overwritten */\nh1 {\n	font-size: var(--db-type-headline-font-size-XX);\n	line-height: var(--db-type-headline-line-height-XX);\n\n	/* spacings may vary depending on the project */\n	margin-block: var(--db-spacing-fixed-XX);\n}\n"})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>s(54049)),_N_E=e.O()}]);