(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57439],{72533:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/readme",function(){return s(3524)}])},3524:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var t=s(52322),o=s(97335),i=s(45392);function r(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"db-uicomponents",children:"@db-ui/components"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"/docs/images/download/LicenseApache20blue.svg",alt:"Apache 2.0 license badge"}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/prettier/prettier",children:(0,t.jsx)(n.img,{src:"/docs/images/download/codestyleprettierff69b4styleflatsquare.svg",alt:"code style: prettier"})}),"\n",(0,t.jsx)(n.a,{href:"https://conventionalcommits.org",children:(0,t.jsx)(n.img,{src:"/docs/images/download/Conventional_Commits100yellow.svg",alt:"Conventional Commits"})}),"\n",(0,t.jsx)(n.a,{href:"https://makeapullrequest.com",children:(0,t.jsx)(n.img,{src:"/docs/images/download/PRswelcomebrightgreenstyleflatsquare.svg",alt:"PRs Welcome"})})]}),"\n",(0,t.jsxs)(n.p,{children:["A library containing all styles for components of ",(0,t.jsx)(n.a,{href:"https://github.com/db-ui/mono",children:"DB UX Design System (technical components)"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),"\nFurthermore we currently support these additional JavaScript frameworks, with more coming soon:"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"Angular components"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"React components"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"Vue components"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Please take a look at your desired framework to retrieve more information."}),"\n",(0,t.jsxs)(n.p,{children:["For additional information besides the frameworks see our ",(0,t.jsx)(n.a,{href:"https://github.com/db-ui/mono/tree/main/packages/components/docs/getting-stated.md",children:"Getting started"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"If you just need the styling follow this:"}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"npm i @db-ui/components"})}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Import the styles in ",(0,t.jsx)(n.code,{children:"scss"})," or ",(0,t.jsx)(n.code,{children:"css"}),". Based on your technology the file names could be different."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Default (db-ui-42): asset path point to ",(0,t.jsx)(n.code,{children:"../assets"})]}),"\n",(0,t.jsxs)(n.li,{children:["Webpack (db-ui-42-webpack): asset path point to ",(0,t.jsx)(n.code,{children:"~@db-ui/foundations/assets"})]}),"\n",(0,t.jsxs)(n.li,{children:["Rollup (db-ui-42-rollup): asset path point to ",(0,t.jsx)(n.code,{children:"@db-ui/foundations/assets"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"db-ui-42"})," bundles all dependencies from ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/foundations",children:"foundations"})," + all ",(0,t.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/packages/components/src/styles/db-ui-components.scss",children:"components"})," available."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"SCSS"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:'// index.scss\n@forward "@db-ui/components/build/styles/db-ui-42-rollup";\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"CSS"})}),"\n",(0,t.jsx)(n.p,{children:"Within HTML files directly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!-- index.html //-->\n<link rel="stylesheet" href="/styles/db-ui-42.css" />\n'})}),"\n",(0,t.jsx)(n.p,{children:"Or within your JavaScript files, with the related bundler as a prefix (in this case rollup and equivalents like Vite):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// main.js\nimport "@db-ui/components/build/styles/db-ui-42-rollup.css";\n'})}),"\n",(0,t.jsx)(n.h3,{id:"optimize-dependencies",children:"Optimize dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["If you only need some of the components or some features from ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/foundations",children:(0,t.jsx)(n.code,{children:"@db-ui/foundations"})}),", you shouldn't include ",(0,t.jsx)(n.code,{children:"db-ui-42"}),".\nIn the case you want to include only some components, and you could do it like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:'/* The theme contains all prop required for components like spacings, colors, ... */\n@import "@db-ui/foundations/build/css/default-theme.css";\n/* The font include uses default font families based on your bundling paths (relative, absolute, webpack, rollup) */\n@import "@db-ui/foundations/build/css/fonts/include-rollup.css";\n/* The required styles will normalize css and add focus and default font to body */\n@import "@db-ui/foundations/build/css/init/required.css";\n/* The default root adds a default color space (neutral) and a density (regular) */\n@import "@db-ui/foundations/build/css/init/default-root.css";\n\n/* Optional: Add animations / transitions for components */\n@import "@db-ui/components/build/styles/component-animations.css";\n\n/* Optional: Add data-icon/data-icon-after to global attributes to enable icons for components */\n@import "@db-ui/foundations/build/css/icons/include-rollup.css";\n\n/* Optional: Add components */\n@import "@db-ui/components/build/components/button/button.css";\n@import "@db-ui/components/build/components/input/input.css";\n'})}),"\n",(0,t.jsx)(n.h2,{id:"deutsche-bahn-brand",children:"Deutsche Bahn brand"}),"\n",(0,t.jsxs)(n.p,{children:["As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.\nPlease have a look at our brand portal at ",(0,t.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/",children:"https://marketingportal.extranet.deutschebahn.com/"})," for any further questions and whom to contact on any brand issues."]}),"\n",(0,t.jsx)(n.p,{children:"You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn."}),"\n",(0,t.jsx)(n.h2,{id:"contributions",children:"Contributions"}),"\n",(0,t.jsxs)(n.p,{children:["Contributions are very welcome, please refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CONTRIBUTING.md",children:"contribution guide"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"code-of-conduct",children:"Code of conduct"}),"\n",(0,t.jsxs)(n.p,{children:["We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone – have a look at our ",(0,t.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CODE-OF-CONDUCT.md",children:"Contributor Covenant Code of Conduct"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,t.jsxs)(n.p,{children:["This project is licensed under ",(0,t.jsx)(n.a,{href:"LICENSE",children:"Apache-2.0"}),"."]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}let c=e=>{let{children:n}=e;return(0,t.jsx)(o.Z,{children:n})};function a(e){return(0,t.jsx)(d,{})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(c,{...e,children:(0,t.jsx)(a,{...e})})}}},function(e){e.O(0,[49710,97335,92888,49774,40179],function(){return e(e.s=72533)}),_N_E=e.O()}]);