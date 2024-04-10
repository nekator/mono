(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66559],{89236:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/readme",function(){return s(68013)}])},68013:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d}});var t=s(52322),i=s(10851),r=s(45392);function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"db-uifoundations",children:"@db-ui/foundations"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"/docs/images/download/LicenseApache20blue.svg",alt:"Apache 2.0 license badge"}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/prettier/prettier",children:(0,t.jsx)(n.img,{src:"/docs/images/download/codestyleprettierff69b4styleflatsquare.svg",alt:"code style: prettier"})}),"\n",(0,t.jsx)(n.a,{href:"https://conventionalcommits.org",children:(0,t.jsx)(n.img,{src:"/docs/images/download/Conventional_Commits100yellow.svg",alt:"Conventional Commits"})}),"\n",(0,t.jsx)(n.a,{href:"https://makeapullrequest.com",children:(0,t.jsx)(n.img,{src:"/docs/images/download/PRswelcomebrightgreenstyleflatsquare.svg",alt:"PRs Welcome"})})]}),"\n",(0,t.jsxs)(n.p,{children:["A library containing all tokens (colors, icons, variables) of ",(0,t.jsx)(n.a,{href:"https://github.com/db-ui/mono",children:"DB UX Design System (technical components)"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We currently support:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#css",children:"CSS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#scss",children:"SCSS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#tailwind",children:"Tailwind"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"npm i @db-ui/foundations"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["The defaults for ",(0,t.jsx)(n.code,{children:"db-ui-foundations.css"})," are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/densities",children:"Density"}),": ",(0,t.jsx)(n.code,{children:"regular"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/adaptive-styles",children:"Adaptive Coloring"}),": ",(0,t.jsx)(n.code,{children:"base"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"css",children:"CSS"}),"\n",(0,t.jsxs)(n.p,{children:["Default assets path for ",(0,t.jsx)(n.code,{children:"db-ui-foundations.css"})," is ",(0,t.jsx)(n.code,{children:"../assets"}),". Make sure to copy all used resources like icons and fonts into your ",(0,t.jsx)(n.code,{children:"public"})," folder before build."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'// main.ts / main.js\nimport "@db-ui/foundations/build/css/db-ui-foundations.css";\n// optional: to use classes like e.g. db-ui-bg-success\nimport "@db-ui/foundations/build/css/colors/classes/all.css";\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:".my-container {\n	padding: var(--db-spacing-fixed-md);\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div class="db-ui-regular db-ui-bg-success my-container"></div>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"scss",children:"SCSS"}),"\n",(0,t.jsx)(n.p,{children:"Based on your technology/setup you need to change the paths of the assets folder:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Default: points to ",(0,t.jsx)(n.code,{children:"../assets"})]}),"\n",(0,t.jsxs)(n.li,{children:["Webpack: points to ",(0,t.jsx)(n.code,{children:"~@db-ui/foundations/assets"})]}),"\n",(0,t.jsxs)(n.li,{children:["Rollup: points to ",(0,t.jsx)(n.code,{children:"@db-ui/foundations/assets"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:'// index.scss\n@use "@db-ui/foundations/build/scss/rollup.assets-paths";\n@use "@db-ui/foundations/build/scss/icons";\n@use "@db-ui/foundations/build/scss/db-ui-foundations";\n// optional: to use db-ui-bg-success\n@import "@db-ui/foundations/build/scss/colors/classes/all";\n// optional: to use use $db-spacing-fixed-md\n@use "@db-ui/foundations/build/scss/variables";\n\n.my-container {\n	padding: $db-spacing-fixed-md;\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div class="db-ui-regular db-ui-bg-success my-container"></div>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"tailwind",children:"Tailwind"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'//tailwind.config.cjs\n\nconst tokens = require("@db-ui/foundations/build/tailwind/tailwind-tokens.json");\n\nmodule.exports = {\n	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],\n	plugins: [],\n	theme: {\n		screens: tokens.screens,\n		spacing: tokens.spacing,\n		boxShadow: tokens.elevation,\n		gap: ({ theme }) => ({\n			...theme("spacing")\n		}),\n		space: ({ theme }) => ({\n			...theme("spacing")\n		})\n	}\n};\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<div class="p-fix-md"></div>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"deutsche-bahn-brand",children:"Deutsche Bahn brand"}),"\n",(0,t.jsxs)(n.p,{children:["As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.\nPlease have a look at our brand portal at ",(0,t.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/",children:"https://marketingportal.extranet.deutschebahn.com/"})," for any further questions and whom to contact on any brand issues."]}),"\n",(0,t.jsx)(n.p,{children:"You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn."}),"\n",(0,t.jsx)(n.h2,{id:"contributions",children:"Contributions"}),"\n",(0,t.jsxs)(n.p,{children:["Contributions are very welcome, please refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CONTRIBUTING.md",children:"contribution guide"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"code-of-conduct",children:"Code of conduct"}),"\n",(0,t.jsxs)(n.p,{children:["We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone – have a look at our ",(0,t.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CODE-OF-CONDUCT.md",children:"Contributor Covenant Code of Conduct"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,t.jsxs)(n.p,{children:["This project is licensed under ",(0,t.jsx)(n.a,{href:"LICENSE",children:"Apache-2.0"}),"."]})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}let o=e=>{let{children:n}=e;return(0,t.jsx)(i.Z,{children:n})};function c(e){return(0,t.jsx)(l,{})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})})}},16134:function(e,n,s){"use strict";var t=s(52322),i=s(2784),r=s(13776);let a=(0,i.forwardRef)(function(e,n){let s=n||(0,i.useRef)(n);return(0,t.jsx)("button",{ref:s,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-button",e.className),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=a},63900:function(e,n,s){"use strict";var t,i,r,a,l,o,c;s.d(n,{IY:function(){return d},YP:function(){return u},ce:function(){return h}});let d="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(l=t||(t={})).FUNCTIONAL="functional",l.REGULAR="regular",l.EXPRESSIVE="expressive",Object.entries(t).map(e=>{let[,n]=e;return n}),(i||(i={})).PRIMARY="primary",(o=r||(r={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",o.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",o.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",o.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",o.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",o.BRAND_BG_LEVEL_1="brand-bg-lvl-1",o.BRAND_BG_LEVEL_2="brand-bg-lvl-2",o.BRAND_BG_LEVEL_3="brand-bg-lvl-3",o.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",o.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",o.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",o.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",o.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",o.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",o.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",o.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",o.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",o.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",o.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",o.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",o.WARNING_BG_LEVEL_1="warning-bg-lvl-1",o.WARNING_BG_LEVEL_2="warning-bg-lvl-2",o.WARNING_BG_LEVEL_3="warning-bg-lvl-3",o.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",o.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",o.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",o.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",o.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",o.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",o.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(r).map(e=>{let[,n]=e;return n}),Object.entries(i).map(e=>{let[,n]=e;return n}),(c=a||(a={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(a).map(e=>{let[,n]=e;return n})},13776:function(e,n,s){"use strict";s.d(n,{MN:function(){return o},Vj:function(){return t},cd:function(){return l},mS:function(){return a},yI:function(){return r},yn:function(){return i}});let t=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&i(e,n)})},r=function(){for(var e=arguments.length,n=Array(e),s=0;s<e;s++)n[s]=arguments[s];let t="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)t+="".concat(e," ");else for(let n in e)e[n]&&(t+="".concat(n," "))}}),t.trim()},a=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!n.includes(e)).reduce((n,s)=>(n[s]=e[s],n),{}),l=e=>{let{left:n,right:s}=e.getBoundingClientRect(),{innerWidth:t}=window;return n>=0&&s<=t},o=e=>{let{top:n,bottom:s}=e.getBoundingClientRect(),{innerHeight:t}=window;return n>=0&&s<=t}}},function(e){e.O(0,[49710,10851,92888,49774,40179],function(){return e(e.s=89236)}),_N_E=e.O()}]);