(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7505],{83876:function(e,n,t){var o={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!t.o(o,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=o[e],r=n[0];return t.e(n[1]).then(function(){return t(r)})}r.keys=function(){return Object.keys(o)},r.id=83876,e.exports=r},69934:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components",function(){return t(48209)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var o=t(52322),r=t(77900),s=t(2784);let i=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let o=(null===(n=e?.current)||void 0===n?void 0:n.innerHTML)==="";o&&t(!0)},[]),[n,e]};var a=e=>{let{children:n,element:t="div",...o}=e,[r,a]=i();return r?(0,s.createElement)(t,{...o,children:n}):(0,s.createElement)(t,{...o,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let c=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],l=e=>({...e,link:"".concat("/mono/review/docs-pr-template").concat(e.link)});t(60586);var d=t(5632);let h=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?h(e.children,n):[]})).map(e=>l(e)):[];var u=e=>{let{children:n}=e,[t,i]=(0,s.useState)(!1),[l,u]=(0,s.useState)(!1),[p,b]=(0,s.useState)(!1),m=(0,d.useRouter)();return(0,s.useEffect)(()=>{m.query&&(i("true"===m.query.fullscreen),u("true"===m.query.noh1),b("true"===m.query.properties))},[m]),(0,o.jsxs)(a,{children:[m.isReady&&t&&(0,o.jsx)("div",{className:"".concat(l?"noh1":""," ").concat(p?"is-properties":""),children:n}),m.isReady&&!t&&(0,o.jsxs)(r.rG,{children:[(0,o.jsxs)(r.ff,{slot:"header",children:[(0,o.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,o.jsx)(r.Pm,{data:JSON.stringify(h(c,m.pathname))}),(0,o.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,o.jsx)("div",{children:n}),(0,o.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})}},48209:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var o=t(52322),r=t(70969),s=t(45392),i=t(65854);let a={annotations:i.ds,Code:i.EK},c={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function l(e){let n=Object.assign({h1:"h1",p:"p",img:"img",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",hr:"hr",h2:"h2",code:"code"},(0,s.ah)(),e.components);return a||h("CH",!1),a.Code||h("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,o.jsx)(n.h1,{children:"@db-ui/components"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{src:"/docs/images/download/License-Apache_2.0-blue.svg",alt:"Apache 2.0 license badge"}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/prettier/prettier",children:(0,o.jsx)(n.img,{src:"/docs/images/download/code_style-prettier-ff69b4.svg?style=flat-square",alt:"code style: prettier"})}),"\n",(0,o.jsx)(n.a,{href:"https://conventionalcommits.org",children:"![Conventional Commits](/docs/images/download/Conventional Commits-1.0.0-yellow.svg)"}),"\n",(0,o.jsx)(n.a,{href:"https://makeapullrequest.com",children:(0,o.jsx)(n.img,{src:"/docs/images/download/PRs-welcome-brightgreen.svg?style=flat-square",alt:"PRs Welcome"})})]}),"\n",(0,o.jsxs)(n.p,{children:["A library containing all styles for components of ",(0,o.jsx)(n.a,{href:"https://github.com/db-ui/mono",children:"DB UX Design System (technical components)"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note"}),"\nFurthermore we currently support these additional JavaScript frameworks, with more coming soon:"]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"Angular components"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"React components"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"Vue components"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Please take a look at your desired framework to retrieve more information."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"If you just need the styling follow this:"}),"\n",(0,o.jsx)(n.h2,{children:"Install"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"npm i @db-ui/components"})}),"\n",(0,o.jsx)(n.h2,{children:"Dependencies"}),"\n",(0,o.jsxs)(n.p,{children:["Import the styles in ",(0,o.jsx)(n.code,{children:"scss"})," or ",(0,o.jsx)(n.code,{children:"css"}),". Based on your technology the file names could be different."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Default (db-ui-42): asset path point to ",(0,o.jsx)(n.code,{children:"../assets"})]}),"\n",(0,o.jsxs)(n.li,{children:["Webpack (db-ui-42-webpack): asset path point to ",(0,o.jsx)(n.code,{children:"~@db-ui/foundations/assets"})]}),"\n",(0,o.jsxs)(n.li,{children:["Rollup (db-ui-42-rollup): asset path point to ",(0,o.jsx)(n.code,{children:"@db-ui/foundations/assets"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"db-ui-42"})," bundles all dependencies from ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/foundations",children:"foundations"})," + all ",(0,o.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/packages/components/src/styles/db-ui-components.scss",children:"components"})," available."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"SCSS"})}),"\n",(0,o.jsx)(a.Code,{codeConfig:c,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"// index.scss",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"@use ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/components/build/styles/db-ui-42-rollup",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"as *;",props:{style:{color:"#81A1C1"}}}]}],lang:"scss"},annotations:[]}]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"CSS"})}),"\n",(0,o.jsx)(n.p,{children:"Within HTML files directly:"}),"\n",(0,o.jsx)(a.Code,{codeConfig:c,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<!-- index.html //-->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"<link ",props:{style:{color:"#81A1C1"}}},{content:"rel",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"stylesheet",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"href",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"/styles/db-ui-42.css",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"/>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,o.jsx)(n.p,{children:"Or within your JavaScript files, with the related bundler as a prefix (in this case rollup and equivalents like Vite):"}),"\n",(0,o.jsx)(a.Code,{codeConfig:c,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"// main.js",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/components/build/styles/db-ui-42-rollup.css",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]}],lang:"js"},annotations:[]}]}),"\n",(0,o.jsx)(n.h2,{children:"Deutsche Bahn brand"}),"\n",(0,o.jsxs)(n.p,{children:["As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and trademarks are bound of clear guidelines and restrictions even when being used with the code that we're provide with this product; Deutsche Bahn fully reserves all rights regarding the Deutsche Bahn brand, even though that we're providing the code of DB UI products free to use and release it under the Apache 2.0 license.\nPlease have a look at our brand portal at ",(0,o.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/",children:"https://marketingportal.extranet.deutschebahn.com/"})," for any further questions and whom to contact on any brand issues."]}),"\n",(0,o.jsx)(n.p,{children:"You must remove or replace any Deutsche Bahn brand and design assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme that would make it much easier for you to use our product without the trademarks by Deutsche Bahn."}),"\n",(0,o.jsx)(n.h2,{children:"Contributions"}),"\n",(0,o.jsxs)(n.p,{children:["Contributions are very welcome, please refer to the ",(0,o.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CONTRIBUTING.md",children:"contribution guide"}),"."]}),"\n",(0,o.jsx)(n.h2,{children:"Code of conduct"}),"\n",(0,o.jsxs)(n.p,{children:["We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone – have a look at our ",(0,o.jsx)(n.a,{href:"https://github.com/db-ui/mono/blob/main/CODE-OF-CONDUCT.md",children:"Contributor Covenant Code of Conduct"}),"."]}),"\n",(0,o.jsx)(n.h2,{children:"License"}),"\n",(0,o.jsxs)(n.p,{children:["This project is licensed under ",(0,o.jsx)(n.a,{href:"LICENSE",children:"Apache-2.0"}),"."]})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)};function h(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let u=e=>{let{children:n}=e;return(0,o.jsx)(r.Z,{children:n})};function p(e){return(0,o.jsx)(d,{})}var b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(u,Object.assign({},e,{children:(0,o.jsx)(p,e)}))}}},function(e){e.O(0,[4996,9883,9774,2888,179],function(){return e(e.s=69934)}),_N_E=e.O()}]);