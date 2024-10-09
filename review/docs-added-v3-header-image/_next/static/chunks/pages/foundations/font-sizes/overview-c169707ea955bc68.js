(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2089],{4470:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/font-sizes/overview",function(){return s(66668)}])},50115:function(e,n,s){"use strict";s.d(n,{Z:function(){return _}});var t=s(52322),a=s(5632),i=s(25237),r=s.n(i),c=s(2784),l=s(61183),o=s(39097),d=s.n(o),h=s(98072);let u=(0,c.forwardRef)(function(e,n){let s=n||(0,c.useRef)(n),[a,i]=(0,c.useState)(()=>!1),r=(0,c.useRef)(!1);return r.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),r.current=!0),(0,c.useEffect)(()=>{i(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{i(!0)}):i(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,t.jsxs)("div",{ref:s,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":a,children:[(0,t.jsx)(t.Fragment,{children:e.header}),(0,t.jsx)("main",{className:"db-main",children:e.children}),(0,t.jsx)(t.Fragment,{children:e.footer})]})});var x=s(68908),p=s(48483),g=s(90434),j=s(97689),m=s(85803),f=s(72288),b=s(76460),v=s(40245),y=s(29469);let w=(e,n,s)=>{if(!s.query.slug)return n.path===s.pathname;let{slug:t}=s.query,a=Array.isArray(t)?t:[t];return n.path==="/components/".concat(a.join("/"))},z=e=>{var n;let{navItem:s}=e,i=(0,a.useRouter)(),r=w(i.pathname,s,i);return(0,t.jsx)(y.Z,{backButtonText:"Back to ".concat(s.label),subNavigation:s.subNavigation&&(0,t.jsx)(t.Fragment,{children:null==s?void 0:s.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,t.jsx)(z,{navItem:e},"router-path-".concat(e.path)))}),children:s.subNavigation?s.label:(0,t.jsx)(d(),{href:null!==(n=s.path)&&void 0!==n?n:"","aria-current":r?"page":void 0,children:s.label},"router-path-".concat(s.path))})};var S=()=>(0,t.jsx)(v.Z,{children:b.Z6.map(e=>(0,t.jsx)(z,{navItem:e},"router-path-".concat(e.path)))}),N=s(35368),Z=s(9842);let k=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},T="db-ui",H="mono";var X=()=>{let e=(0,a.useRouter)(),[n,s]=(0,c.useState)(),[i,r]=(0,c.useState)(),l=n=>{let s=e.basePath,t=n.find(e=>s.includes(e));t&&r(t)},o=(e,n)=>{let t=[],a=[],i=[],r=[],c=[],l=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?i.push(e):e.startsWith("refactor")?r.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):t.push(e);s({others:t,features:a,docs:l,refactors:r,issues:c,bugfixes:i,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(T,"/").concat(H,"/branches")),n=(await k("https://api.github.com/repos/".concat(T,"/").concat(H,"/tags"))).map(e=>e.name),s=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(s),l(n),o(n,s)})().catch(e=>{console.error(e)})},[]);let d=n=>{let s=e.asPath,t=3===n.split(".").length&&n.startsWith("v");window.location.replace((0,N.sanitize)("https://".concat(T,".github.io/").concat(H).concat(t?"/version":"/review","/").concat(n).concat(s)))};return n?(0,t.jsx)(Z.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:i,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,s]=e;return(null==s?void 0:s.length)>0}).map(e=>{let[n,s]=e;return(0,t.jsx)("optgroup",{label:n,children:s.slice(0,15).map((e,s)=>(0,t.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(s)))},n)})}):null};let F=e=>{var n,s;let{children:i,noNavigation:r}=e,[o,h]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),[w,z]=(0,c.useState)(!1),[N,Z]=(0,c.useState)(!1),[k,T]=(0,c.useState)(),[H,F]=(0,c.useState)(),[_,q]=(0,c.useState)(),[E,I]=(0,c.useState)(),A=(0,a.useRouter)();return(0,c.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(A.query&&(A.query.fullscreen&&h("true"===A.query.fullscreen),A.query.page&&h(!0),A.query.noh1&&y("true"===A.query.noh1),A.query.properties&&z("true"===A.query.properties),A.query.current)){let n=Array.isArray(A.query.current)?A.query.current[0]:A.query.current;if(k!==n){var e;T(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=A.asPath.split("?")[0],{previous:s,next:t}=(0,b.vn)(n);F(s),q(t),I((0,b.kn)(n))},[A]),(0,t.jsxs)(t.Fragment,{children:[A.isReady&&o&&(0,t.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:i}),A.isReady&&!o&&(0,t.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,t.jsx)(x.Z,{drawerOpen:N,onToggle:Z,brand:(0,t.jsx)(p.Z,{children:"DB-UX"}),primaryAction:(0,t.jsx)(g.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,t.jsx)(X,{}),children:(0,t.jsx)(S,{})}),children:[E&&E.length>1&&(0,t.jsx)(j.Z,{spacing:"none",width:"large",children:(0,t.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==E?void 0:E.map(e=>{var n;return(0,t.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,t.jsx)(m.Z,{icon:"chevron_right"}),(0,t.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,t.jsx)(j.Z,{spacing:"none",width:"large",children:i}),!r&&(null!=H?H:_)&&(0,t.jsxs)(j.Z,{width:"large",spacing:"small",className:"link-containers",children:[H&&(0,t.jsx)(d(),{className:"previous-link-container",href:null!==(n=H.path)&&void 0!==n?n:"/",children:(0,t.jsxs)(f.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Previous"}),(0,t.jsx)("span",{"data-icon":"arrow_left",children:H.label})]})}),_&&(0,t.jsx)(d(),{className:"next-link-container",href:null!==(s=_.path)&&void 0!==s?s:"/",children:(0,t.jsxs)(f.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Next"}),(0,t.jsx)("span",{"data-icon-after":"arrow_right",children:_.label})]})})]})]})]})};var _=r()(async()=>F,{ssr:!1})},66668:function(e,n,s){"use strict";s.r(n);var t=s(52322),a=s(2784),i=s(50115),r=s(70938),c=s(32558),l=s(97689),o=s(85803);let d=e=>".db-font-size-".concat(e," {\n	font-size: var(--db-type-body-font-size-").concat(e,");\n	line-height: var(--db-type-body-line-height-").concat(e,");\n\n	/* custom properties only for components */\n	--db-icon-font-weight: var(--db-base-body-icon-weight-").concat(e,");\n	--db-icon-font-size: var(--db-base-body-icon-font-size-").concat(e,");\n	--db-base-line-height: var(--db-type-body-line-height-").concat(e,");\n	--db-base-font-size: var(--db-type-body-font-size-").concat(e,");\n}\n"),h=(e,n)=>"".concat(e," {\n    line-height: var(--db-type-headline-line-height-").concat(n,");\n    font-size: var(--db-type-headline-font-size-").concat(n,");\n    margin-block: var(--db-spacing-fixed-").concat(n,");\n}\n"),u=e=>".custom-headline-selector {\n    line-height: var(--db-type-headline-line-height-".concat(e,");\n    font-size: var(--db-type-headline-font-size-").concat(e,");\n    margin-block: var(--db-spacing-fixed-").concat(e,");\n}\n");n.default=()=>{let[e,n]=(0,a.useState)(!1),[s,x]=(0,a.useState)(!1),[p,g]=(0,a.useState)(!1);return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("h1",{children:"Font Sizes Overview"}),(0,t.jsxs)("ol",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("b",{children:"Body Font Sizes"})}),(0,t.jsx)("li",{children:(0,t.jsx)("b",{children:"Default Headlines H1 - H6"})}),(0,t.jsx)("li",{children:(0,t.jsx)("b",{children:"Available Headline Font Sizes"})})]}),(0,t.jsxs)(r.Z,{"data-font-size":"md",semantic:"informational",children:[(0,t.jsx)("strong",{children:"Note: "}),"Some font sizes are the same for a specific device type. For example in mobile all ",(0,t.jsx)("code",{children:"xl"})," ","sizes are the same."]}),(0,t.jsx)("h2",{children:"Body Font Sizes"}),(0,t.jsxs)("p",{children:["All ",(0,t.jsx)("strong",{children:"9 body font sizes"})," provided by foundations can be set via ",(0,t.jsx)("strong",{children:"css class"}),","," ",(0,t.jsx)("strong",{children:"data-attribute"}),","," ",(0,t.jsx)("strong",{children:"scss placeholder"})," or"," ",(0,t.jsx)("strong",{children:"Tailwind class"})," (",(0,t.jsx)("a",{href:"./readme",children:"How to use"}),"). This ensures that all custom properties are defined by the class to match the font size, so that certain child components fit correctly. For example, this allows DBIcon component to display its icon in the correct height and weight according to the chosen font-size."]}),(0,t.jsxs)("p",{children:["Therefore, if possible, these ",(0,t.jsx)("b",{children:"db-font-size"})," classes should be used to change the font size of certain text elements such as"," ",(0,t.jsx)("code",{children:"p"})," or containers with other texts."]}),(0,t.jsxs)(r.Z,{"data-font-size":"md",semantic:"informational",children:["The display of icons works correctly in all sizes except"," ",(0,t.jsx)("code",{children:"3xl"})," and ",(0,t.jsx)("code",{children:"3xs"}),". That is why they are hidden there."]}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{children:(0,t.jsxs)(c.Z,{change:e=>{n(e.target.checked)},children:["Show CSS applied by using ",(0,t.jsx)("b",{children:"db-font-size-XX"})," classes"]})}),(0,t.jsx)("br",{}),(0,t.jsx)(l.Z,{spacing:"small",className:"db-neutral-bg-basic-level-2",children:["3xl","2xl","xl","lg","md","sm","xs","2xs","3xs"].map(n=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{className:"db-font-size-".concat(n),children:["I am size: ",(0,t.jsx)("strong",{children:n})," ","3xl"!==n&&"3xs"!==n&&(0,t.jsx)(o.Z,{icon:"download"})]}),(0,t.jsx)("pre",{style:{display:e?"block":"none"},children:(0,t.jsx)("code",{className:"language-css",children:d(n)})})]}))}),(0,t.jsx)("h2",{children:"Default Headlines H1 - H6"}),(0,t.jsxs)("p",{children:["Certain ",(0,t.jsx)("strong",{children:"Headline Font Sizes"})," are mapped to the"," ",(0,t.jsx)("strong",{children:"headline tags (H1 - H6)"})," by default. Accordingly, it is sufficient to use the native headline tags, as in this example."]}),(0,t.jsx)(r.Z,{"data-font-size":"md",semantic:"informational",children:"There are currently no CSS classes or data-attributes to set a predefined headline size for a specific element."}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{children:(0,t.jsxs)(c.Z,{change:e=>{x(e.target.checked)},children:["Show CSS applied by using ",(0,t.jsx)("strong",{children:"H1 - H6 tags"})]})}),(0,t.jsx)("br",{}),(0,t.jsx)(l.Z,{spacing:"small",className:"db-neutral-bg-basic-level-2",children:[{Tag:"h1",size:"xl"},{Tag:"h2",size:"lg"},{Tag:"h3",size:"md"},{Tag:"h4",size:"sm"},{Tag:"h5",size:"xs"},{Tag:"h6",size:"2xs"}].map(e=>{let{Tag:n,size:a}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n,{children:[n.toUpperCase()," - default mapped size is:"," ",(0,t.jsx)("u",{children:a})]}),(0,t.jsx)("pre",{style:{display:s?"block":"none"},children:(0,t.jsx)("code",{className:"language-css",children:h(n,a)})})]})})}),(0,t.jsx)("h2",{children:"Available Headline Font Sizes"}),(0,t.jsxs)("p",{children:["This overview shows all ",(0,t.jsx)("strong",{children:"9 headline sizes"})," that are available in foundations. These can be used, for example, to (globally) overwrite the default mapping. Instructions on how overwriting works are below."]}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{children:(0,t.jsx)(c.Z,{change:e=>{g(e.target.checked)},children:"Show CSS for custom usage of headline sizes"})}),(0,t.jsx)("br",{}),(0,t.jsx)(l.Z,{spacing:"small",className:"db-neutral-bg-basic-level-2",children:["3xl","2xl","xl","lg","md","sm","xs","2xs","3xs"].map(e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h3",{style:{fontSize:"var(--db-type-headline-font-size-".concat(e,")"),lineHeight:"var(--db-type-headline-line-height-".concat(e,")"),marginBlock:"var(--db-spacing-fixed-".concat(e,")")},children:["Headline with size: ",(0,t.jsx)("u",{children:e})]}),(0,t.jsx)("pre",{style:{display:p?"block":"none"},children:(0,t.jsx)("code",{className:"language-css",children:u(e)})})]}))}),(0,t.jsx)("h3",{children:"How to overwrite headlines default mapping"}),(0,t.jsxs)("p",{children:["To overwrite the default mapping of the foundations, a suitable selector (H1 - H6 or css class) is used to set"," ",(0,t.jsx)("code",{children:"font-size"})," and ",(0,t.jsx)("code",{children:"line-height"})," (and"," ",(0,t.jsx)("code",{children:"margin-block"})," if necessary) to the desired size using the supplied ",(0,t.jsx)("strong",{children:"custom properties"}),"."]}),(0,t.jsxs)(r.Z,{"data-font-size":"md",semantic:"warning",children:["In order to maintain a uniform typography, custom properties for"," ",(0,t.jsx)("code",{children:"font-size"})," and ",(0,t.jsx)("code",{children:"line-height"})," ",(0,t.jsx)("u",{children:"must"})," ","be selected with the same size (e.g. ",(0,t.jsx)("code",{children:"md"}),")."]}),(0,t.jsx)("br",{}),(0,t.jsxs)(l.Z,{spacing:"small",className:"db-neutral-bg-basic-level-2",children:[(0,t.jsx)("p",{children:(0,t.jsx)("b",{children:"These custom properties must be used for overwrites:"})}),(0,t.jsx)("code",{children:"--db-type-headline-font-size-XX"}),(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"--db-type-headline-line-height-XX"}),(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"--db-spacing-fixed-XX"})," (optional e.g. for margin)",(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"They are available in the following sizes:"})}),(0,t.jsxs)("p",{children:[(0,t.jsx)("code",{children:"3xl"})," | ",(0,t.jsx)("code",{children:"2xl"})," | ",(0,t.jsx)("code",{children:"xl"})," |"," ",(0,t.jsx)("code",{children:"lg"})," | ",(0,t.jsx)("code",{children:"md"})," | ",(0,t.jsx)("code",{children:"sm"})," |"," ",(0,t.jsx)("code",{children:"xs"})," | ",(0,t.jsx)("code",{children:"2xs"})," | ",(0,t.jsx)("code",{children:"3xs"})]})]}),(0,t.jsx)("br",{}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"language-css",children:"/* Select a headline tag to be overwritten */\nh1 {\n	font-size: var(--db-type-headline-font-size-XX);\n	line-height: var(--db-type-headline-line-height-XX);\n\n	/* spacings may vary depending on the project */\n	margin-block: var(--db-spacing-fixed-XX);\n}\n"})})]})}}},function(e){e.O(0,[6061,1954,4540,6460,2888,9774,179],function(){return e(e.s=4470)}),_N_E=e.O()}]);