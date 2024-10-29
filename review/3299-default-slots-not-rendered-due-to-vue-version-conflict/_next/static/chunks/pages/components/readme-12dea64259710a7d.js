(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7439],{72533:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/readme",function(){return t(73014)}])},73014:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>d});var s=t(52322),r=t(50115),a=t(45392);function i(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"db-uicomponents",children:"@db-ui/components"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"/docs/images/download/LicenseApache20blue.svg",alt:"Apache 2.0 license badge"}),"\n",(0,s.jsx)(n.a,{href:"https://github.com/prettier/prettier",children:(0,s.jsx)(n.img,{src:"/docs/images/download/codestyleprettierff69b4styleflatsquare.svg",alt:"code style: prettier"})}),"\n",(0,s.jsx)(n.a,{href:"https://conventionalcommits.org",children:(0,s.jsx)(n.img,{src:"/docs/images/download/Conventional_Commits100yellow.svg",alt:"Conventional Commits"})}),"\n",(0,s.jsx)(n.a,{href:"https://makeapullrequest.com",children:(0,s.jsx)(n.img,{src:"/docs/images/download/PRswelcomebrightgreenstyleflatsquare.svg",alt:"PRs Welcome"})})]}),"\n",(0,s.jsxs)(n.p,{children:["A library containing all styles for components of ",(0,s.jsx)(n.a,{href:"https://github.com/db-ui/mono",children:"DB UX Design System v3"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),"\nFurthermore we currently support these additional JavaScript frameworks, with more coming soon:"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"Angular components"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"React components"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"Vue components"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Please take a look at your desired framework to retrieve more information."}),"\n",(0,s.jsxs)(n.p,{children:["For additional information besides the frameworks see our ",(0,s.jsx)(n.a,{href:"https://github.com/db-ui/mono/tree/main/packages/components/docs/getting-started.md",children:"Getting started"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"If you just need the styling follow this:"}),"\n",(0,s.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"npm i @db-ui/components"})}),"\n",(0,s.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["Import the styles in ",(0,s.jsx)(n.code,{children:"scss"})," or ",(0,s.jsx)(n.code,{children:"css"}),". Based on your technology the file names could be different."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default (db-ui-42): asset path point to ",(0,s.jsx)(n.code,{children:"../assets"})]}),"\n",(0,s.jsxs)(n.li,{children:["Webpack (db-ui-42-webpack): asset path point to ",(0,s.jsx)(n.code,{children:"~@db-ui/foundations/assets"})]}),"\n",(0,s.jsxs)(n.li,{children:["Rollup (db-ui-42-rollup): asset path point to ",(0,s.jsx)(n.code,{children:"@db-ui/foundations/assets"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"db-ui-42"})," bundles all dependencies from ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/foundations",children:"foundations"})," + all ",(0,s.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/packages/components/src/styles/db-ui-components.scss",children:"components"})," available."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"SCSS"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",children:'// index.scss\n@forward "@db-ui/components/build/styles/db-ui-42-rollup";\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"CSS"})}),"\n",(0,s.jsx)(n.p,{children:"Within HTML files directly:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!-- index.html //-->\n<link rel="stylesheet" href="/styles/db-ui-42.css" />\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or within your JavaScript files, with the related bundler as a prefix (in this case rollup and equivalents like Vite):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// main.js\nimport "@db-ui/components/build/styles/db-ui-42-rollup.css";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"optimize-dependencies",children:"Optimize dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["If you only need some of the components or some features from ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/foundations",children:(0,s.jsx)(n.code,{children:"@db-ui/foundations"})}),", you shouldn't include ",(0,s.jsx)(n.code,{children:"db-ui-42"}),".\nIn the case you want to include only some components, and you could do it like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:'/* The theme contains all prop required for components like spacings, colors, ... */\n@import "@db-ui/foundations/build/css/default-theme.css";\n/* The font include uses default font families based on your bundling paths (relative, absolute, webpack, rollup) */\n@import "@db-ui/foundations/build/css/fonts/include-rollup.css";\n/* The required styles will normalize css and add focus and default font to body */\n@import "@db-ui/foundations/build/css/init/required.css";\n/* The default root adds a default color space (neutral) and a density (regular) */\n@import "@db-ui/foundations/build/css/init/default-root.css";\n\n/* Optional: Add animations / transitions for components */\n@import "@db-ui/components/build/styles/component-animations.css";\n\n/* Optional: Add data-icon/data-icon-after to global attributes to enable icons for components */\n@import "@db-ui/foundations/build/css/icons/include-rollup.css";\n\n/* Optional: Add components */\n@import "@db-ui/components/build/components/button/button.css";\n@import "@db-ui/components/build/components/input/input.css";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"deutsche-bahn-brand",children:"Deutsche Bahn brand"}),"\n",(0,s.jsxs)(n.p,{children:["As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.\nPlease have a look at our brand portal at ",(0,s.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/",children:"https://marketingportal.extranet.deutschebahn.com/"})," for any further questions and whom to contact on any brand issues."]}),"\n",(0,s.jsx)(n.p,{children:"You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn."}),"\n",(0,s.jsx)(n.h2,{id:"contributions",children:"Contributions"}),"\n",(0,s.jsxs)(n.p,{children:["Contributions are very welcome, please refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CONTRIBUTING.md",children:"contribution guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"code-of-conduct",children:"Code of conduct"}),"\n",(0,s.jsxs)(n.p,{children:["We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone – have a look at our ",(0,s.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CODE-OF-CONDUCT.md",children:"Contributor Covenant Code of Conduct"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,s.jsxs)(n.p,{children:["This project is licensed under ",(0,s.jsx)(n.a,{href:"LICENSE",children:"Apache-2.0"}),"."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}let c=e=>{let{children:n}=e;return(0,s.jsx)(r.Z,{children:n})};function l(e){return(0,s.jsx)(o,{})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(c,{...e,children:(0,s.jsx)(l,{...e})})}},50115:(e,n,t)=>{"use strict";t.d(n,{Z:()=>E});var s=t(52322),r=t(5632),a=t(25237),i=t.n(a),o=t(2784),c=t(61183),l=t(39097),d=t.n(l),u=t(98072);let h=(0,o.forwardRef)(function(e,n){let t=n||(0,o.useRef)(n),[r,a]=(0,o.useState)(()=>!1),i=(0,o.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,o.useEffect)(()=>{a(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{a(!0)}):a(!0)},[]),(0,o.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,s.jsxs)("div",{ref:t,...(0,u.mS)(e,[]),id:e.id,className:(0,u.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":r,children:[(0,s.jsx)(s.Fragment,{children:e.header}),(0,s.jsx)("main",{className:"db-main",children:e.children}),(0,s.jsx)(s.Fragment,{children:e.footer})]})});var p=t(68908),m=t(48483),f=t(90434),b=t(97689),x=t(85803),j=t(72288),g=t(76460),v=t(40245),y=t(29469);let w=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:s}=t.query,r=Array.isArray(s)?s:[s];return n.path==="/components/".concat(r.join("/"))},k=e=>{var n;let{navItem:t}=e,a=(0,r.useRouter)(),i=w(a.pathname,t,a);return(0,s.jsx)(y.Z,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,s.jsx)(s.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,s.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,s.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":i?"page":void 0,children:t.label},"router-path-".concat(t.path))})},N=()=>(0,s.jsx)(v.Z,{children:g.Z6.map(e=>(0,s.jsx)(k,{navItem:e},"router-path-".concat(e.path)))});var q=t(35368),S=t(9842);let C=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},A="db-ui",I="mono",Z=()=>{let e=(0,r.useRouter)(),[n,t]=(0,o.useState)(),[a,i]=(0,o.useState)(),c=n=>{let t=e.basePath,s=n.find(e=>t.includes(e));s&&i(s)},l=(e,n)=>{let s=[],r=[],a=[],i=[],o=[],c=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?a.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?o.push(e):e.startsWith("docs")?c.push(e):s.push(e);t({others:s,features:r,docs:c,refactors:i,issues:o,bugfixes:a,versions:e})};(0,o.useEffect)(()=>{(async()=>{let e=await C("https://api.github.com/repos/".concat(A,"/").concat(I,"/branches")),n=(await C("https://api.github.com/repos/".concat(A,"/").concat(I,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(t),c(n),l(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,s=3===n.split(".").length&&n.startsWith("v");window.location.replace((0,q.sanitize)("https://".concat(A,".github.io/").concat(I).concat(s?"/version":"/review","/").concat(n).concat(t)))};return n?(0,s.jsx)(S.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:a,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,s.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,s.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},_=e=>{var n,t;let{children:a,noNavigation:i}=e,[l,u]=(0,o.useState)(!1),[v,y]=(0,o.useState)(!1),[w,k]=(0,o.useState)(!1),[q,S]=(0,o.useState)(!1),[C,A]=(0,o.useState)(),[I,_]=(0,o.useState)(),[E,O]=(0,o.useState)(),[D,T]=(0,o.useState)(),B=(0,r.useRouter)();return(0,o.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,o.useEffect)(()=>{if(B.query&&(B.query.fullscreen&&u("true"===B.query.fullscreen),B.query.page&&u(!0),B.query.noh1&&y("true"===B.query.noh1),B.query.properties&&k("true"===B.query.properties),B.query.current)){let n=Array.isArray(B.query.current)?B.query.current[0]:B.query.current;if(C!==n){var e;A(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=B.asPath.split("?")[0],{previous:t,next:s}=(0,g.vn)(n);_(t),O(s),T((0,g.kn)(n))},[B]),(0,s.jsxs)(s.Fragment,{children:[B.isReady&&l&&(0,s.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:a}),B.isReady&&!l&&(0,s.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,s.jsx)(p.Z,{drawerOpen:q,onToggle:S,brand:(0,s.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,s.jsx)(f.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,s.jsx)(Z,{}),children:(0,s.jsx)(N,{})}),children:[D&&D.length>1&&(0,s.jsx)(b.Z,{spacing:"none",width:"large",children:(0,s.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==D?void 0:D.map(e=>{var n;return(0,s.jsxs)(o.Fragment,{children:["/"!==e.path&&(0,s.jsx)(x.Z,{icon:"chevron_right"}),(0,s.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,s.jsx)(b.Z,{spacing:"none",width:"large",children:a}),!i&&(null!=I?I:E)&&(0,s.jsxs)(b.Z,{width:"large",spacing:"small",className:"link-containers",children:[I&&(0,s.jsx)(d(),{className:"previous-link-container",href:null!==(n=I.path)&&void 0!==n?n:"/",children:(0,s.jsxs)(j.Z,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Previous"}),(0,s.jsx)("span",{"data-icon":"arrow_left",children:I.label})]})}),E&&(0,s.jsx)(d(),{className:"next-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,s.jsxs)(j.Z,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Next"}),(0,s.jsx)("span",{"data-icon-after":"arrow_right",children:E.label})]})})]})]})]})},E=i()(async()=>_,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3430,1954,4540,6460,2888,9774,179],()=>n(72533)),_N_E=e.O()}]);