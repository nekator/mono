(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9227],{67903:(e,s,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/readme",function(){return n(76980)}])},76980:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>c});var t=n(31085),i=n(83952),a=n(71184);function r(e){let s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"db-uifoundations",children:"@db-ui/foundations"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.img,{src:"/docs/images/download/LicenseApache20blue.svg",alt:"Apache 2.0 license badge"}),"\n",(0,t.jsx)(s.a,{href:"https://github.com/prettier/prettier",children:(0,t.jsx)(s.img,{src:"/docs/images/download/codestyleprettierff69b4styleflatsquare.svg",alt:"code style: prettier"})}),"\n",(0,t.jsx)(s.a,{href:"https://conventionalcommits.org",children:(0,t.jsx)(s.img,{src:"/docs/images/download/Conventional_Commits100yellow.svg",alt:"Conventional Commits"})}),"\n",(0,t.jsx)(s.a,{href:"https://makeapullrequest.com",children:(0,t.jsx)(s.img,{src:"/docs/images/download/PRswelcomebrightgreenstyleflatsquare.svg",alt:"PRs Welcome"})})]}),"\n",(0,t.jsxs)(s.p,{children:["A library containing all tokens (colors, spacings, font formatting, etc.) and assets (fonts, icons) of ",(0,t.jsx)(s.a,{href:"https://github.com/db-ui/mono",children:"DB UX Design System v3"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"We currently support:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://db-ui.github.io/mono/review/main/foundations/readme?current=css",children:"CSS"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://db-ui.github.io/mono/review/main/foundations/readme?current=scss",children:"SCSS"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://db-ui.github.io/mono/review/main/foundations/readme?current=tailwind",children:"Tailwind"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"install",children:"Install"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"npm i @db-ui/foundations\n"})}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(s.p,{children:"You use this library if you need some colors, spacings etc."}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"tl;dr:"})," Use the default theme and the bundled styles by importing ",(0,t.jsx)(s.code,{children:"default-theme.css"})," && ",(0,t.jsx)(s.code,{children:"db-ui-foundations[-absolute|-rollup|-webpack].css"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.p,{children:["First of all you need to import a theme which contains all tokens (css-properties). We provide a ",(0,t.jsx)(s.code,{children:"default-theme.css"})," which handles dark/light mode as well."]}),"\n",(0,t.jsx)(s.p,{children:"Afterward, you may import helper classes / placeholders to easily consume the tokens from your theme. There are some categories:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"init"}),": Global styles which apply to all or a large group of selectors. Make sure to import ",(0,t.jsx)(s.code,{children:"inits/required.css"})," to normalize tags like ",(0,t.jsx)(s.code,{children:"body"})," etc. Furthermore, we provide some default styles."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"icons"}),": Icons classes to load ",(0,t.jsx)(s.strong,{children:"woff2"})," files and adds ",(0,t.jsx)(s.code,{children:"[data-icon]"})," and ",(0,t.jsx)(s.code,{children:"[data-icon-after]"})," to enable icons for all tags and components."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"helpers"}),": Use dividers or focus border"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"fonts"}),": Overwrite default ",(0,t.jsx)(s.code,{children:"font-size"}),", ",(0,t.jsx)(s.code,{children:"line-height"})," and ",(0,t.jsx)(s.code,{children:"icon-size"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"density"}),": Overwrite default density to scale adaptive components inside container using density"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"colors"}),": Sets an adaptive color to a container, which passes all required css-properties to children"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["You can import the complete ",(0,t.jsx)(s.strong,{children:"init"})," styles with ",(0,t.jsx)(s.code,{children:"db-ui-foundations[-absolute|-rollup|-webpack].css"})," which apply the default:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system/version-3/principles/adaptive#:~:text=und%20Textfarben%20sicherstellt.-,Sizing,-Adaptive%20Sizing%20ist",children:"Density"}),": ",(0,t.jsx)(s.code,{children:"regular"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system/version-3/principles/adaptive#:~:text=Akzeptieren-,Coloring,-Adaptive%20Coloring%20bezieht",children:"Adaptive Coloring"}),": ",(0,t.jsx)(s.code,{children:"neutral-bg-lvl-1"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"css",children:"CSS"}),"\n",(0,t.jsxs)(s.p,{children:["Default assets path for ",(0,t.jsx)(s.code,{children:"db-ui-foundations.css"})," is ",(0,t.jsx)(s.code,{children:"../assets"}),". Make sure to copy all used resources like icons and fonts into your ",(0,t.jsx)(s.code,{children:"public"})," folder before build. ",(0,t.jsx)(s.strong,{children:"Or"})," you use a modern bundler which handles bundling for you. In this case use ",(0,t.jsx)(s.code,{children:"db-ui-foundations[-rollup|-webpack].css"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"import",children:"Import"}),"\n",(0,t.jsxs)(s.p,{children:["Import the styles in your main ",(0,t.jsx)(s.code,{children:".js | .ts"})," file or in your main ",(0,t.jsx)(s.code,{children:".css"})," file."]}),"\n",(0,t.jsx)(s.p,{children:"CSS:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:'/* index.css */\n@import "@db-ui/foundations/build/css/default-theme.css";\n@import "@db-ui/foundations/build/css/db-ui-foundations.css";\n\n/* Optional: Use [data-icon] everywhere */\n@import "@db-ui/foundations/build/css/icons/include.css";\n/* Optional: Use [data-divider] & [data-focus] everywhere */\n@import "@db-ui/foundations/build/css/helpers/classes/all.css";\n/* Optional: Use [data-density] everywhere */\n@import "@db-ui/foundations/build/css/density/classes/all.css";\n/* Optional: Use [data-font-size] everywhere */\n@import "@db-ui/foundations/build/css/fonts/classes/all.css";\n/* Optional: Use [data-color] everywhere */\n@import "@db-ui/foundations/build/css/colors/classes/all.css";\n'})}),"\n",(0,t.jsx)(s.p,{children:"JS/TS:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:'// main.[js|ts]\nimport "@db-ui/foundations/build/css/default-theme.css";\nimport "@db-ui/foundations/build/css/db-ui-foundations.css";\n\n/* Optional: Use [data-icon] everywhere */\nimport "@db-ui/foundations/build/css/icons/include.css";\n/* Optional: Use [data-divider] & [data-focus] everywhere */\nimport "@db-ui/foundations/build/css/helpers/classes/all.css";\n/* Optional: Use [data-density] everywhere */\nimport "@db-ui/foundations/build/css/density/classes/all.css";\n/* Optional: Use [data-font-size] everywhere */\nimport "@db-ui/foundations/build/css/fonts/classes/all.css";\n/* Optional: Use [data-color] everywhere */\nimport "@db-ui/foundations/build/css/colors/classes/all.css";\n'})}),"\n",(0,t.jsx)(s.h4,{id:"use",children:"Use"}),"\n",(0,t.jsx)(s.p,{children:"In CSS:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:".my-container {\n	padding: var(--db-spacing-fixed-md);\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"In HTML:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<!-- With classes-->\n<div\n	data-density="functional"\n	class="db-successful-bg-lvl-1 my-container"\n></div>\n\n<!-- With data attributes-->\n<div\n	class="my-container"\n	data-density="functional"\n	data-color="successful-bg-lvl-1"\n></div>\n'})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," In CSS you might to use the classes or data-attributes even more because you cannot use placeholders or mixins like we have it in ",(0,t.jsx)(s.strong,{children:"scss"}),". If you use a 3rd party library and cannot apply classes or data-attributes you might want to copy the content of our helper classes to apply it to the 3rd party class."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"scss",children:"SCSS"}),"\n",(0,t.jsxs)(s.p,{children:["Default assets path for ",(0,t.jsx)(s.code,{children:"db-ui-foundations.scss"})," is ",(0,t.jsx)(s.code,{children:"../assets"}),". Make sure to copy all used resources like icons and fonts into your ",(0,t.jsx)(s.code,{children:"public"})," folder before build. ",(0,t.jsx)(s.strong,{children:"Or"})," you use a modern bundler which handles bundling for you. In this case use ",(0,t.jsx)(s.code,{children:"db-ui-foundations[-rollup|-webpack].scss"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"import-1",children:"Import"}),"\n",(0,t.jsxs)(s.p,{children:["Import the styles in your main ",(0,t.jsx)(s.code,{children:".js | .ts"})," file or in your main ",(0,t.jsx)(s.code,{children:".scss"})," file."]}),"\n",(0,t.jsx)(s.p,{children:"SCSS:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:'/* index.css */\n@forward "@db-ui/foundations/build/scss/default-theme";\n@forward "@db-ui/foundations/build/scss/db-ui-foundations";\n\n/* Optional: Use [data-icon] everywhere */\n@forward "@db-ui/foundations/build/scss/icons/include";\n/* Optional: Use [data-divider] & [data-focus] everywhere */\n@forward "@db-ui/foundations/build/scss/helpers/classes/all";\n/* Optional: Use [data-density] everywhere */\n@forward "@db-ui/foundations/build/scss/density/classes/all";\n/* Optional: Use [data-font-size] everywhere */\n@forward "@db-ui/foundations/build/scss/fonts/classes/all";\n/* Optional: Use [data-color] everywhere */\n@forward "@db-ui/foundations/build/scss/colors/classes/all";\n'})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," Besides of forwarding the classes you can use placeholders to include only some specific styles."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"JS/TS:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:'// main.[js|ts]\nimport "@db-ui/foundations/build/scss/default-theme.scss";\nimport "@db-ui/foundations/build/scss/db-ui-foundations.scss";\n\n/* Optional: Use [data-icon] everywhere */\nimport "@db-ui/foundations/build/scss/icons/include.scss";\n/* Optional: Use [data-divider] & [data-focus] everywhere */\nimport "@db-ui/foundations/build/scss/helpers/classes/all.scss";\n/* Optional: Use [data-density] everywhere */\nimport "@db-ui/foundations/build/scss/density/classes/all.scss";\n/* Optional: Use [data-font-size] everywhere */\nimport "@db-ui/foundations/build/scss/fonts/classes/all.scss";\n/* Optional: Use [data-color] everywhere */\nimport "@db-ui/foundations/build/scss/colors/classes/all.scss";\n'})}),"\n",(0,t.jsx)(s.h4,{id:"use-1",children:"Use"}),"\n",(0,t.jsx)(s.p,{children:"In SCSS:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:'@use "@db-ui/foundations/build/scss/variables";\n\n.my-container {\n	padding: variables.$db-spacing-fixed-md;\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"In SCSS with placeholder:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scss",children:'@use "@db-ui/foundations/build/scss/fonts";\n@use "@db-ui/foundations/build/scss/colors";\n\n.placeholder-container {\n	@extend %db-overwrite-font-size-sm;\n	@extend %db-successful-bg-lvl-1;\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"In HTML:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<!-- With classes-->\n<div\n	data-density="functional"\n	class="db-successful-bg-lvl-1 my-container"\n></div>\n\n<!-- With data attributes-->\n<div\n	class="my-container"\n	data-density="functional"\n	data-color="successful-bg-lvl-1"\n></div>\n'})}),"\n",(0,t.jsx)(s.h3,{id:"tailwind",children:"Tailwind"}),"\n",(0,t.jsxs)(s.p,{children:["Check the required imports for ",(0,t.jsx)(s.a,{href:"https://db-ui.github.io/mono/review/main/foundations/readme?current=css",children:"CSS"})," to enable all tokens and defaults.\nAfter this you can extend your tailwind config like this:"]}),"\n",(0,t.jsx)(s.h4,{id:"javascript",children:"Javascript"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'//tailwind.config.js\n/** @type {import(\'tailwindcss\').Config} */\nimport tokens from "@db-ui/foundations/build/tailwind/tailwind-tokens.json";\n\nexport default {\n	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],\n	plugins: [],\n	theme: {\n		...tokens,\n		gap: ({ theme }) => ({\n			...theme("spacing")\n		}),\n		space: ({ theme }) => ({\n			...theme("spacing")\n		})\n	}\n};\n'})}),"\n",(0,t.jsx)(s.h4,{id:"typescript",children:"Typescript"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:'//tailwind.config.ts\nimport type { Config } from "tailwindcss";\nimport { CustomThemeConfig } from "tailwindcss/types/config";\nimport tokens from "@db-ui/foundations/build/tailwind/tailwind-tokens.json";\nconst customThemeConfig: CustomThemeConfig = tokens as any;\n\nexport default {\n	content: [],\n	theme: {\n		...customThemeConfig,\n		gap: ({ theme }) => ({\n			...theme("spacing")\n		}),\n		space: ({ theme }) => ({\n			...theme("spacing")\n		})\n	},\n	plugins: []\n} satisfies Config;\n'})}),"\n",(0,t.jsxs)(s.p,{children:["In your ",(0,t.jsx)(s.code,{children:"tailwind.css"})," add this to enable default headlines:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:"@layer base {\n	h1 {\n		@apply text-head-xl font-head;\n	}\n	h2 {\n		@apply text-head-lg font-head;\n	}\n	h3 {\n		@apply text-head-md font-head;\n	}\n	h4 {\n		@apply text-head-sm font-head;\n	}\n	h5 {\n		@apply text-head-xs font-head;\n	}\n	h6 {\n		@apply text-head-2xs font-head;\n	}\n}\n"})}),"\n",(0,t.jsx)(s.h4,{id:"use-2",children:"Use"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-html",children:'<div class="grid gap-fix-sm p-res-md"></div>\n'})}),"\n",(0,t.jsx)(s.h2,{id:"optimize-dependencies",children:"Optimize dependencies"}),"\n",(0,t.jsxs)(s.p,{children:["If you want to optimize the size of the loaded styles, you might skip loading ",(0,t.jsx)(s.code,{children:"@db-ui/foundations/build/css/db-ui-foundations.css"}),".But there are some required styles for this Design-System to work properly."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:'/* The theme contains all prop required for components like spacings, colors, ... */\n@import "@db-ui/foundations/build/css/default-theme.css";\n/* The font include uses default font families based on your bundling paths (relative, absolute, webpack, rollup) */\n@import "@db-ui/foundations/build/css/fonts/include.css";\n/* The required styles will normalize css and add focus and default font to body */\n@import "@db-ui/foundations/build/css/init/required.css";\n/* The default root adds a default color space (neutral) and a density (regular) */\n@import "@db-ui/foundations/build/css/init/default-root.css";\n'})}),"\n",(0,t.jsx)(s.h2,{id:"migration",children:"Migration"}),"\n",(0,t.jsx)(s.p,{children:"We provide a cli tool to auto migrate your source code. Use this command in your repository:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"npx @db-ui/foundations migration --src=./src\n"})}),"\n",(0,t.jsx)(s.h2,{id:"deutsche-bahn-brand",children:"Deutsche Bahn brand"}),"\n",(0,t.jsxs)(s.p,{children:["As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.\nPlease have a look at our brand portal at ",(0,t.jsx)(s.a,{href:"https://marketingportal.extranet.deutschebahn.com/",children:"https://marketingportal.extranet.deutschebahn.com/"})," for any further questions and whom to contact on any brand issues."]}),"\n",(0,t.jsx)(s.p,{children:"You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn."}),"\n",(0,t.jsx)(s.h2,{id:"contributions",children:"Contributions"}),"\n",(0,t.jsxs)(s.p,{children:["Contributions are very welcome, please refer to the ",(0,t.jsx)(s.a,{href:"https://github.com/db-ui/mono/blob/main/CONTRIBUTING.md",children:"contribution guide"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"code-of-conduct",children:"Code of conduct"}),"\n",(0,t.jsxs)(s.p,{children:["We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone – have a look at our ",(0,t.jsx)(s.a,{href:"https://github.com/db-ui/mono/blob/main/CODE-OF-CONDUCT.md",children:"Contributor Covenant Code of Conduct"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"license",children:"License"}),"\n",(0,t.jsxs)(s.p,{children:["This project is licensed under ",(0,t.jsx)(s.a,{href:"LICENSE",children:"Apache-2.0"}),"."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}let d=e=>{let{children:s}=e;return(0,t.jsx)(i.A,{children:s})};function l(e){return(0,t.jsx)(o,{})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(d,{...e,children:(0,t.jsx)(l,{...e})})}},83952:(e,s,n)=>{"use strict";n.d(s,{A:()=>T});var t=n(31085),i=n(31242),a=n(83894),r=n.n(a),o=n(14041),d=n(30127),l=n(34747),c=n.n(l),u=n(5188);let h=(0,o.forwardRef)(function(e,s){let n=s||(0,o.useRef)(s),[i,a]=(0,o.useState)(()=>!1),r=(0,o.useRef)(!1);return r.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),r.current=!0),(0,o.useEffect)(()=>{a(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{a(!0)}):a(!0)},[]),(0,o.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,t.jsxs)("div",{ref:n,...(0,u.MD)(e,[]),id:e.id,className:(0,u.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,u.EB)(i),children:[(0,t.jsx)(t.Fragment,{children:e.header}),(0,t.jsx)("main",{className:"db-main",children:e.children}),(0,t.jsx)(t.Fragment,{children:e.footer})]})});var p=n(23116),m=n(23944),f=n(95374),x=n(12764),b=n(80692),j=n(64286),g=n(32825),y=n(61338),v=n(6900);let w=(e,s,n)=>{if(!n.query.slug)return s.path===n.pathname;let{slug:t}=n.query,i=Array.isArray(t)?t:[t];return s.path==="/components/".concat(i.join("/"))},k=e=>{var s;let{navItem:n}=e,a=(0,i.useRouter)(),r=w(a.pathname,n,a);return(0,t.jsx)(v.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,t.jsx)(t.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:s}=e;return!0!==s}).map(e=>(0,t.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,t.jsx)(c(),{href:null!==(s=n.path)&&void 0!==s?s:"","aria-current":r?"page":void 0,children:n.label},"router-path-".concat(n.path))})},S=()=>(0,t.jsx)(y.A,{children:g.bw.map(e=>(0,t.jsx)(k,{navItem:e},"router-path-".concat(e.path)))});var C=n(97519),N=n(47982);let A=async e=>{try{let s=await fetch(e);return await s.json()}catch(e){console.error(e)}return[]},O="db-ui",U="mono",q=()=>{let e=(0,i.useRouter)(),[s,n]=(0,o.useState)(),[a,r]=(0,o.useState)(),d=s=>{let n=e.basePath,t=s.find(e=>n.includes(e));t&&r(t)},l=(e,s)=>{let t=[],i=[],a=[],r=[],o=[],d=[];for(let e of s)e.startsWith("feat")||e.startsWith("feature")?i.push(e):e.startsWith("fix")||e.startsWith("bugfix")?a.push(e):e.startsWith("refactor")?r.push(e):/^\d*-/.test(e)?o.push(e):e.startsWith("docs")?d.push(e):t.push(e);n({others:t,features:i,docs:d,refactors:r,issues:o,bugfixes:a,versions:e})};(0,o.useEffect)(()=>{(async()=>{let e=await A("https://api.github.com/repos/".concat(O,"/").concat(U,"/branches")),s=(await A("https://api.github.com/repos/".concat(O,"/").concat(U,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));s.unshift("latest"),d(n),d(s),l(s,n)})().catch(e=>{console.error(e)})},[]);let c=s=>{let n=e.asPath,t=3===s.split(".").length&&s.startsWith("v")||"latest"===s;window.location.replace(C.A.sanitize("https://".concat(O,".github.io/").concat(U).concat(t?"/version":"/review","/").concat(s).concat(n)))};return s?(0,t.jsx)(N.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:a,onChange:e=>{c(e.target.value)},children:Object.entries(s).filter(e=>{let[s,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[s,n]=e;return(0,t.jsx)("optgroup",{label:s,children:n.slice(0,15).map((e,n)=>(0,t.jsx)("option",{value:e,children:e},"".concat(s,"-").concat(e,"-").concat(n)))},s)})}):null},I=e=>{var s,n;let{children:a,noNavigation:r}=e,[l,u]=(0,o.useState)(!1),[y,v]=(0,o.useState)(!1),[w,k]=(0,o.useState)(!1),[C,N]=(0,o.useState)(!1),[A,O]=(0,o.useState)(),[U,I]=(0,o.useState)(),[T,D]=(0,o.useState)(),[z,E]=(0,o.useState)(),W=(0,i.useRouter)();return(0,o.useEffect)(()=>{d.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),d.A.highlightAll()},[]),(0,o.useEffect)(()=>{if(W.query&&(W.query.fullscreen&&u("true"===W.query.fullscreen),W.query.page&&u(!0),W.query.noh1&&v("true"===W.query.noh1),W.query.properties&&k("true"===W.query.properties),W.query.current)){let s=Array.isArray(W.query.current)?W.query.current[0]:W.query.current;if(A!==s){var e;O(s),null===(e=document.querySelector("#".concat(s)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let s=W.asPath.split("?")[0],{previous:n,next:t}=(0,g.Pb)(s);I(n),D(t),E((0,g.Oj)(s))},[W]),(0,t.jsxs)(t.Fragment,{children:[W.isReady&&l&&(0,t.jsx)("div",{className:"".concat(y?"noh1":""," ").concat(w?"is-properties":""),children:a}),W.isReady&&!l&&(0,t.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,t.jsx)(p.A,{drawerOpen:C,onToggle:N,brand:(0,t.jsx)(m.A,{children:"DB-UX"}),primaryAction:(0,t.jsx)(f.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,t.jsx)(q,{}),children:(0,t.jsx)(S,{})}),children:[z&&z.length>1&&(0,t.jsx)(x.A,{spacing:"none",width:"large",children:(0,t.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==z?void 0:z.map(e=>{var s;return(0,t.jsxs)(o.Fragment,{children:["/"!==e.path&&(0,t.jsx)(b.A,{icon:"chevron_right"}),(0,t.jsx)(c(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(s=e.path)&&void 0!==s?s:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,t.jsx)(x.A,{spacing:"none",width:"large",children:a}),!r&&(null!=U?U:T)&&(0,t.jsxs)(x.A,{width:"large",spacing:"small",className:"link-containers",children:[U&&(0,t.jsx)(c(),{className:"previous-link-container",href:null!==(s=U.path)&&void 0!==s?s:"/",children:(0,t.jsxs)(j.A,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Previous"}),(0,t.jsx)("span",{"data-icon":"arrow_left",children:U.label})]})}),T&&(0,t.jsx)(c(),{className:"next-link-container",href:null!==(n=T.path)&&void 0!==n?n:"/",children:(0,t.jsxs)(j.A,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Next"}),(0,t.jsx)("span",{"data-icon-after":"arrow_right",children:T.label})]})})]})]})]})},T=r()(async()=>I,{ssr:!1})}},e=>{var s=s=>e(e.s=s);e.O(0,[3578,8250,1446,2825,636,6593,8792],()=>s(67903)),_N_E=e.O()}]);