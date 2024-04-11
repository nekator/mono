(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57439],{72533:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/readme",function(){return t(3524)}])},3524:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(52322),s=t(12156),i=t(45392);function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"db-uicomponents",children:"@db-ui/components"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"/docs/images/download/LicenseApache20blue.svg",alt:"Apache 2.0 license badge"}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/prettier/prettier",children:(0,r.jsx)(n.img,{src:"/docs/images/download/codestyleprettierff69b4styleflatsquare.svg",alt:"code style: prettier"})}),"\n",(0,r.jsx)(n.a,{href:"https://conventionalcommits.org",children:(0,r.jsx)(n.img,{src:"/docs/images/download/Conventional_Commits100yellow.svg",alt:"Conventional Commits"})}),"\n",(0,r.jsx)(n.a,{href:"https://makeapullrequest.com",children:(0,r.jsx)(n.img,{src:"/docs/images/download/PRswelcomebrightgreenstyleflatsquare.svg",alt:"PRs Welcome"})})]}),"\n",(0,r.jsxs)(n.p,{children:["A library containing all styles for components of ",(0,r.jsx)(n.a,{href:"https://github.com/db-ui/mono",children:"DB UX Design System (technical components)"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),"\nFurthermore we currently support these additional JavaScript frameworks, with more coming soon:"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"Angular components"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"React components"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"Vue components"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Please take a look at your desired framework to retrieve more information."}),"\n",(0,r.jsxs)(n.p,{children:["For additional information besides the frameworks see our ",(0,r.jsx)(n.a,{href:"https://github.com/db-ui/mono/tree/main/packages/components/docs/getting-stated.md",children:"Getting started"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"If you just need the styling follow this:"}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"npm i @db-ui/components"})}),"\n",(0,r.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["Import the styles in ",(0,r.jsx)(n.code,{children:"scss"})," or ",(0,r.jsx)(n.code,{children:"css"}),". Based on your technology the file names could be different."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Default (db-ui-42): asset path point to ",(0,r.jsx)(n.code,{children:"../assets"})]}),"\n",(0,r.jsxs)(n.li,{children:["Webpack (db-ui-42-webpack): asset path point to ",(0,r.jsx)(n.code,{children:"~@db-ui/foundations/assets"})]}),"\n",(0,r.jsxs)(n.li,{children:["Rollup (db-ui-42-rollup): asset path point to ",(0,r.jsx)(n.code,{children:"@db-ui/foundations/assets"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"db-ui-42"})," bundles all dependencies from ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/foundations",children:"foundations"})," + all ",(0,r.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/packages/components/src/styles/db-ui-components.scss",children:"components"})," available."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"SCSS"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:'// index.scss\n@forward "@db-ui/components/build/styles/db-ui-42-rollup";\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CSS"})}),"\n",(0,r.jsx)(n.p,{children:"Within HTML files directly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!-- index.html //-->\n<link rel="stylesheet" href="/styles/db-ui-42.css" />\n'})}),"\n",(0,r.jsx)(n.p,{children:"Or within your JavaScript files, with the related bundler as a prefix (in this case rollup and equivalents like Vite):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// main.js\nimport "@db-ui/components/build/styles/db-ui-42-rollup.css";\n'})}),"\n",(0,r.jsx)(n.h2,{id:"deutsche-bahn-brand",children:"Deutsche Bahn brand"}),"\n",(0,r.jsxs)(n.p,{children:["As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.\nPlease have a look at our brand portal at ",(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/",children:"https://marketingportal.extranet.deutschebahn.com/"})," for any further questions and whom to contact on any brand issues."]}),"\n",(0,r.jsx)(n.p,{children:"You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn."}),"\n",(0,r.jsx)(n.h2,{id:"contributions",children:"Contributions"}),"\n",(0,r.jsxs)(n.p,{children:["Contributions are very welcome, please refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CONTRIBUTING.md",children:"contribution guide"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"code-of-conduct",children:"Code of conduct"}),"\n",(0,r.jsxs)(n.p,{children:["We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone – have a look at our ",(0,r.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CODE-OF-CONDUCT.md",children:"Contributor Covenant Code of Conduct"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,r.jsxs)(n.p,{children:["This project is licensed under ",(0,r.jsx)(n.a,{href:"LICENSE",children:"Apache-2.0"}),"."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}let c=e=>{let{children:n}=e;return(0,r.jsx)(s.Z,{children:n})};function l(e){return(0,r.jsx)(o,{})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(l,{...e})})}},16134:function(e,n,t){"use strict";var r=t(52322),s=t(2784),i=t(13776);let a=(0,s.forwardRef)(function(e,n){let t=n||(0,s.useRef)(n);return(0,r.jsx)("button",{ref:t,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=a},63900:function(e,n,t){"use strict";var r,s,i,a,o,c,l;t.d(n,{IY:function(){return d},YP:function(){return u},ce:function(){return h}});let d="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(o=r||(r={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,n]=e;return n}),(s||(s={})).PRIMARY="primary",(c=i||(i={})).BASE="base",c.BASE_STRONG="base-strong",c.BASE_TRANSPARENT_SEMI="base-transparent-semi",c.BASE_TRANSPARENT_FULL="base-transparent-full",c.NEUTRAL="neutral",c.NEUTRAL_STRONG="neutral-strong",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.BRAND="brand",c.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",c.BRAND_TRANSPARENT_FULL="brand-transparent-full",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.WARNING="warning",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(i).map(e=>{let[,n]=e;return n}),Object.entries(s).map(e=>{let[,n]=e;return n}),(l=a||(a={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(a).map(e=>{let[,n]=e;return n})},13776:function(e,n,t){"use strict";t.d(n,{MN:function(){return l},Vj:function(){return r},cd:function(){return c},mS:function(){return o},yI:function(){return i},yn:function(){return s}});let r=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},s=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&s(e,n)})},i=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()},a=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],o=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||a.includes(e))&&!n.includes(e)).reduce((n,t)=>(n[t]=e[t],n),{}),c=e=>{let{left:n,right:t}=e.getBoundingClientRect(),{innerWidth:r}=window;return n>=0&&t<=r},l=e=>{let{top:n,bottom:t}=e.getBoundingClientRect(),{innerHeight:r}=window;return n>=0&&t<=r}}},function(e){e.O(0,[49710,12156,92888,49774,40179],function(){return e(e.s=72533)}),_N_E=e.O()}]);