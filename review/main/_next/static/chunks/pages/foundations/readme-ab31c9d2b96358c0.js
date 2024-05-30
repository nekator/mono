(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66559],{89236:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/readme",function(){return n(68013)}])},68013:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return c}});var i=n(52322),d=n(97335),o=n(45392);function t(e){let s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"db-uifoundations",children:"@db-ui/foundations"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{src:"/docs/images/download/LicenseApache20blue.svg",alt:"Apache 2.0 license badge"}),"\n",(0,i.jsx)(s.a,{href:"https://github.com/prettier/prettier",children:(0,i.jsx)(s.img,{src:"/docs/images/download/codestyleprettierff69b4styleflatsquare.svg",alt:"code style: prettier"})}),"\n",(0,i.jsx)(s.a,{href:"https://conventionalcommits.org",children:(0,i.jsx)(s.img,{src:"/docs/images/download/Conventional_Commits100yellow.svg",alt:"Conventional Commits"})}),"\n",(0,i.jsx)(s.a,{href:"https://makeapullrequest.com",children:(0,i.jsx)(s.img,{src:"/docs/images/download/PRswelcomebrightgreenstyleflatsquare.svg",alt:"PRs Welcome"})})]}),"\n",(0,i.jsxs)(s.p,{children:["A library containing all tokens (colors, icons, variables, etc.) of ",(0,i.jsx)(s.a,{href:"https://github.com/db-ui/mono",children:"DB UX Design System (technical components)"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"We currently support:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://db-ui.github.io/mono/review/main/foundations/readme?current=css",children:"CSS"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://db-ui.github.io/mono/review/main/foundations/readme?current=scss",children:"SCSS"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://db-ui.github.io/mono/review/main/foundations/readme?current=tailwind",children:"Tailwind"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"npm i @db-ui/foundations\n"})}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.p,{children:"You use this library if you need some colors, spacings etc."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"tl;dr:"})," Use the default theme and the bundled styles by importing ",(0,i.jsx)(s.code,{children:"default-theme.css"})," && ",(0,i.jsx)(s.code,{children:"db-ui-foundations[-absolute|-rollup|-webpack].css"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsxs)(s.p,{children:["First of all you need to import a theme which contains all tokens (css-properties). We provide a ",(0,i.jsx)(s.code,{children:"default-theme.css"})," which handles dark/light mode as well."]}),"\n",(0,i.jsx)(s.p,{children:"Afterward, you may import helper classes / placeholders to easily consume the tokens from your theme. There are some categories:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"init"}),": Global styles which apply to all or a large group of selectors. Make sure to import ",(0,i.jsx)(s.code,{children:"inits/required.css"})," to normalize tags like ",(0,i.jsx)(s.code,{children:"body"})," etc. Furthermore, we provide some default styles."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"icons"}),": Icons classes to load ",(0,i.jsx)(s.code,{children:"woff2"})," files and adds ",(0,i.jsx)(s.code,{children:"[data-icon]"})," and ",(0,i.jsx)(s.code,{children:"[data-icon-after]"})," to enable icons for all tags and components."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"helpers"}),": Use dividers or focus border"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"fonts"}),":Overwrite default font-size, line-height and icon-size"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"density"}),":Overwrite default density to scale adaptive components inside container using density"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"colors"}),":Sets an adaptive color to a container, which passes all required css-properties to children"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["You can import the complete ",(0,i.jsx)(s.code,{children:"init"})," styles with ",(0,i.jsx)(s.code,{children:"db-ui-foundations[-absolute|-rollup|-webpack].css"})," which apply the default:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/densities",children:"Density"}),": ",(0,i.jsx)(s.code,{children:"regular"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/adaptive-styles",children:"Adaptive Coloring"}),": ",(0,i.jsx)(s.code,{children:"neutral-bg-lvl-1"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"css",children:"CSS"}),"\n",(0,i.jsxs)(s.p,{children:["Default assets path for ",(0,i.jsx)(s.code,{children:"db-ui-foundations.css"})," is ",(0,i.jsx)(s.code,{children:"../assets"}),". Make sure to copy all used resources like icons and fonts into your ",(0,i.jsx)(s.code,{children:"public"})," folder before build. ",(0,i.jsx)(s.strong,{children:"Or"})," you use a modern bundler which handles bundling for you. In this case use ",(0,i.jsx)(s.code,{children:"db-ui-foundations[-rollup|-webpack].css"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"import",children:"Import"}),"\n",(0,i.jsxs)(s.p,{children:["Import the styles in your main ",(0,i.jsx)(s.code,{children:".js | .ts"})," file or in your main ",(0,i.jsx)(s.code,{children:".css"})," file."]}),"\n",(0,i.jsx)(s.p,{children:"CSS:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:'/* index.css */\n@import "@db-ui/foundations/build/css/default-theme.css";\n@import "@db-ui/foundations/build/css/db-ui-foundations.css";\n\n/* Optional: Use [data-icon] everywhere */\n@import "@db-ui/foundations/build/css/icons/include.css";\n/* Optional: Use [data-divider] & [data-focus] everywhere */\n@import "@db-ui/foundations/build/css/helpers/classes/all.css";\n/* Optional: Use [data-density] everywhere */\n@import "@db-ui/foundations/build/css/density/classes/all.css";\n/* Optional: Use [data-font-size] everywhere */\n@import "@db-ui/foundations/build/css/fonts/classes/all.css";\n/* Optional: Use [data-color] everywhere */\n@import "@db-ui/foundations/build/css/colors/classes/all.css";\n'})}),"\n",(0,i.jsx)(s.p,{children:"JS/TS:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:'// main.[js|ts]\nimport "@db-ui/foundations/build/css/default-theme.css";\nimport "@db-ui/foundations/build/css/db-ui-foundations.css";\n\n/* Optional: Use [data-icon] everywhere */\nimport "@db-ui/foundations/build/css/icons/include.css";\n/* Optional: Use [data-divider] & [data-focus] everywhere */\nimport "@db-ui/foundations/build/css/helpers/classes/all.css";\n/* Optional: Use [data-density] everywhere */\nimport "@db-ui/foundations/build/css/density/classes/all.css";\n/* Optional: Use [data-font-size] everywhere */\nimport "@db-ui/foundations/build/css/fonts/classes/all.css";\n/* Optional: Use [data-color] everywhere */\nimport "@db-ui/foundations/build/css/colors/classes/all.css";\n'})}),"\n",(0,i.jsx)(s.h4,{id:"use",children:"Use"}),"\n",(0,i.jsx)(s.p,{children:"In CSS:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:".my-container {\n	padding: var(--db-spacing-fixed-md);\n}\n"})}),"\n",(0,i.jsx)(s.p,{children:"In HTML:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<!-- With classes-->\n<div class="db-density-functional db-successful-bg-lvl-1 my-container"></div>\n\n<!-- With data attributes-->\n<div\n	class="my-container"\n	data-density="functional"\n	data-color="successful-bg-lvl-1"\n></div>\n'})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," In CSS you might to use the classes or data-attributes even more because you cannot use placeholders or mixins like we have it in ",(0,i.jsx)(s.code,{children:"scss"}),". If you use a 3rd party library and cannot apply classes or data-attributes you might want to copy the content of our helper classes to apply it to the 3rd party class."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"scss",children:"SCSS"}),"\n",(0,i.jsxs)(s.p,{children:["Default assets path for ",(0,i.jsx)(s.code,{children:"db-ui-foundations.scss"})," is ",(0,i.jsx)(s.code,{children:"../assets"}),". Make sure to copy all used resources like icons and fonts into your ",(0,i.jsx)(s.code,{children:"public"})," folder before build. ",(0,i.jsx)(s.strong,{children:"Or"})," you use a modern bundler which handles bundling for you. In this case use ",(0,i.jsx)(s.code,{children:"db-ui-foundations[-rollup|-webpack].scss"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"import-1",children:"Import"}),"\n",(0,i.jsxs)(s.p,{children:["Import the styles in your main ",(0,i.jsx)(s.code,{children:".js | .ts"})," file or in your main ",(0,i.jsx)(s.code,{children:".scss"})," file."]}),"\n",(0,i.jsx)(s.p,{children:"SCSS:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scss",children:'/* index.css */\n@forward "@db-ui/foundations/build/scss/default-theme";\n@forward "@db-ui/foundations/build/scss/db-ui-foundations";\n\n/* Optional: Use [data-icon] everywhere */\n@forward "@db-ui/foundations/build/scss/icons/include";\n/* Optional: Use [data-divider] & [data-focus] everywhere */\n@forward "@db-ui/foundations/build/scss/helpers/classes/all";\n/* Optional: Use [data-density] everywhere */\n@forward "@db-ui/foundations/build/scss/density/classes/all";\n/* Optional: Use [data-font-size] everywhere */\n@forward "@db-ui/foundations/build/scss/fonts/classes/all";\n/* Optional: Use [data-color] everywhere */\n@forward "@db-ui/foundations/build/scss/colors/classes/all";\n'})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," Besides of forwarding the classes you can use placeholders to include only some specific styles."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"JS/TS:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:'// main.[js|ts]\nimport "@db-ui/foundations/build/scss/default-theme.scss";\nimport "@db-ui/foundations/build/scss/db-ui-foundations.scss";\n\n/* Optional: Use [data-icon] everywhere */\nimport "@db-ui/foundations/build/scss/icons/include.scss";\n/* Optional: Use [data-divider] & [data-focus] everywhere */\nimport "@db-ui/foundations/build/scss/helpers/classes/all.scss";\n/* Optional: Use [data-density] everywhere */\nimport "@db-ui/foundations/build/scss/density/classes/all.scss";\n/* Optional: Use [data-font-size] everywhere */\nimport "@db-ui/foundations/build/scss/fonts/classes/all.scss";\n/* Optional: Use [data-color] everywhere */\nimport "@db-ui/foundations/build/scss/colors/classes/all.scss";\n'})}),"\n",(0,i.jsx)(s.h4,{id:"use-1",children:"Use"}),"\n",(0,i.jsx)(s.p,{children:"In SCSS:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scss",children:'@use "@db-ui/foundations/build/scss/variables";\n\n.my-container {\n	padding: variables.$db-spacing-fixed-md;\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"In SCSS with placeholder:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scss",children:'@use "@db-ui/foundations/build/scss/fonts";\n@use "@db-ui/foundations/build/scss/colors";\n\n.placeholder-container {\n	@extend %db-overwrite-font-size-sm;\n	@extend %db-successful-bg-lvl-1;\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"In HTML:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<!-- With classes-->\n<div class="db-density-functional db-successful-bg-lvl-1 my-container"></div>\n\n<!-- With data attributes-->\n<div\n	class="my-container"\n	data-density="functional"\n	data-color="successful-bg-lvl-1"\n></div>\n'})}),"\n",(0,i.jsx)(s.h3,{id:"tailwind",children:"Tailwind"}),"\n",(0,i.jsxs)(s.p,{children:["Check the required imports for ",(0,i.jsx)(s.a,{href:"https://db-ui.github.io/mono/review/main/foundations/readme?current=css",children:"CSS"})," to enable all tokens and defaults.\nAfter this you can extend your tailwind config like this:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'//tailwind.config.js\n/** @type {import(\'tailwindcss\').Config} */\nimport tokens from "@db-ui/foundations/build/tailwind/tailwind-tokens.json";\n\nexport default {\n	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],\n	plugins: [],\n	theme: {\n		...tokens,\n		gap: ({ theme }) => ({\n			...theme("spacing")\n		}),\n		space: ({ theme }) => ({\n			...theme("spacing")\n		})\n	}\n};\n'})}),"\n",(0,i.jsxs)(s.p,{children:["In your ",(0,i.jsx)(s.code,{children:"tailwind.css"})," add this to enable default headlines:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:"@layer base {\n	h1 {\n		@apply text-head-xl font-head;\n	}\n	h2 {\n		@apply text-head-lg font-head;\n	}\n	h3 {\n		@apply text-head-md font-head;\n	}\n	h4 {\n		@apply text-head-sm font-head;\n	}\n	h5 {\n		@apply text-head-xs font-head;\n	}\n	h6 {\n		@apply text-head-2xs font-head;\n	}\n}\n"})}),"\n",(0,i.jsx)(s.h4,{id:"use-2",children:"Use"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<div class="grid gap-fix-sm p-res-md"></div>\n'})}),"\n",(0,i.jsx)(s.h2,{id:"optimize-dependencies",children:"Optimize dependencies"}),"\n",(0,i.jsxs)(s.p,{children:["If you want to optimize the size of the loaded styles, you might skip loading ",(0,i.jsx)(s.code,{children:"@db-ui/foundations/build/css/db-ui-foundations.css"}),".But there are some required styles for this Design-System to work properly."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:'/* The theme contains all prop required for components like spacings, colors, ... */\n@import "@db-ui/foundations/build/css/default-theme.css";\n/* The font include uses default font families based on your bundling paths (relative, absolute, webpack, rollup) */\n@import "@db-ui/foundations/build/css/fonts/include.css";\n/* The required styles will normalize css and add focus and default font to body */\n@import "@db-ui/foundations/build/css/init/required.css";\n/* The default root adds a default color space (neutral) and a density (regular) */\n@import "@db-ui/foundations/build/css/init/default-root.css";\n'})}),"\n",(0,i.jsx)(s.h2,{id:"deutsche-bahn-brand",children:"Deutsche Bahn brand"}),"\n",(0,i.jsxs)(s.p,{children:["As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.\nPlease have a look at our brand portal at ",(0,i.jsx)(s.a,{href:"https://marketingportal.extranet.deutschebahn.com/",children:"https://marketingportal.extranet.deutschebahn.com/"})," for any further questions and whom to contact on any brand issues."]}),"\n",(0,i.jsx)(s.p,{children:"You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn."}),"\n",(0,i.jsx)(s.h2,{id:"contributions",children:"Contributions"}),"\n",(0,i.jsxs)(s.p,{children:["Contributions are very welcome, please refer to the ",(0,i.jsx)(s.a,{href:"https://github.com/db-ui/mono/blob/main/CONTRIBUTING.md",children:"contribution guide"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"code-of-conduct",children:"Code of conduct"}),"\n",(0,i.jsxs)(s.p,{children:["We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone – have a look at our ",(0,i.jsx)(s.a,{href:"https://github.com/db-ui/mono/blob/main/CODE-OF-CONDUCT.md",children:"Contributor Covenant Code of Conduct"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"license",children:"License"}),"\n",(0,i.jsxs)(s.p,{children:["This project is licensed under ",(0,i.jsx)(s.a,{href:"LICENSE",children:"Apache-2.0"}),"."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}let r=e=>{let{children:s}=e;return(0,i.jsx)(d.Z,{children:s})};function l(e){return(0,i.jsx)(a,{})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})})}}},function(e){e.O(0,[49710,97335,92888,49774,40179],function(){return e(e.s=89236)}),_N_E=e.O()}]);