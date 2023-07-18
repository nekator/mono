(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{83876:function(e,n,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function s(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],s=n[0];return t.e(n[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(r)},s.id=83876,e.exports=s},53525:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5382)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(52322),s=t(77900),i=t(2784);let c=()=>{let e=(0,i.useRef)(null),[n,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]};var l=e=>{let{children:n,element:t="div",...r}=e,[s,l]=c();return s?(0,i.createElement)(t,{...r,children:n}):(0,i.createElement)(t,{...r,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/mfranzke-patch-2").concat(e.link)});t(60586);var a=t(5632);let h=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?h(e.children,n):[]})).map(e=>d(e)):[];var p=e=>{let{children:n}=e,[t,c]=(0,i.useState)(!1),[d,p]=(0,i.useState)(!1),[j,x]=(0,i.useState)(!1),g=(0,a.useRouter)();return(0,i.useEffect)(()=>{g.query&&(c("true"===g.query.fullscreen),p("true"===g.query.noh1),x("true"===g.query.properties))},[g]),(0,r.jsxs)(l,{children:[g.isReady&&t&&(0,r.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(j?"is-properties":""),children:n}),g.isReady&&!t&&(0,r.jsxs)(s.rG,{children:[(0,r.jsxs)(s.ff,{slot:"header",children:[(0,r.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(s.Pm,{data:JSON.stringify(h(o,g.pathname))}),(0,r.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(s.fw,{slot:"footer",copyright:!0})]})]})}},5382:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(52322),s=t(70969),i=t(45392),c=t(65854);let l={annotations:c.ds,Code:c.EK},o={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function d(e){let n=Object.assign({p:"p",h1:"h1",img:"img",a:"a",blockquote:"blockquote",strong:"strong",ul:"ul",li:"li",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",h4:"h4"},(0,i.ah)(),e.components);return l||h("CH",!1),l.Code||h("CH.Code",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n","\n","\n",(0,r.jsx)(n.p,{children:" "}),"\n",(0,r.jsx)(n.h1,{children:"DB UI Mono (Alpha) \uD83D\uDE82\uD83D\uDC96"}),"\n",(0,r.jsxs)(n.p,{children:["![Part of DB UX Design System Core](/docs/images/download/Part of-DB UX Design System Core-d7dce1.svg)\n",(0,r.jsx)(n.img,{src:"https://github.com/db-ui/mono/actions/workflows/default.yml/badge.svg",alt:"Main pipeline"}),"\n",(0,r.jsx)(n.img,{src:"/docs/images/download/License-Apache_2.0-blue.svg",alt:"Apache 2.0 license badge"}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/prettier/prettier",children:(0,r.jsx)(n.img,{src:"/docs/images/download/code_style-prettier-ff69b4.svg?style=flat-square",alt:"code style: prettier"})}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/xojs/xo",children:(0,r.jsx)(n.img,{src:"/docs/images/download/code_style-XO-5ed9c7.svg",alt:"XO code style"})}),"\n",(0,r.jsx)(n.a,{href:"http://makeapullrequest.com",children:(0,r.jsx)(n.img,{src:"/docs/images/download/PRs-welcome-brightgreen.svg?style=flat-square",alt:"PRs Welcome"})}),"\n",(0,r.jsx)(n.a,{href:"CODE-OF-CONDUCT.md",children:"![Contributor Covenant](/docs/images/download/Contributor Covenant-2.0-4baaaa.svg)"})]}),"\n",(0,r.jsx)(n.p,{children:"DB UI Mono provides robust HTML UI components, reusable visual styles, and powerful tooling to help developers,\ndesigners, and content authors build, maintain, and scale best of class digital experiences."}),"\n","\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Warning"}),"\nWe currently don't fully support Mozilla Firefox until it adds the following functionalities, that are expected to get integrated later this year:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://caniuse.com/css-has",children:["CSS: ",(0,r.jsx)(n.code,{children:":has"})]})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.a,{href:"https://caniuse.com/mdn-api_htmlinputelement_popovertargetaction",children:[(0,r.jsx)(n.code,{children:"popover"}),"-attribute"]}),"(not in use by us currently, but planned)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Packages"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Package"}),(0,r.jsx)(n.th,{children:"Content"}),(0,r.jsx)(n.th,{align:"left",children:"Version"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/foundations",children:"foundations"})}),(0,r.jsx)(n.td,{children:"CSS/SCSS/Tailwind styles and assets"}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"https://npmjs.com/package/@db-ui/foundations",title:"DB UI – on NPM",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/npm/v/@db-ui/foundations.svg?color=rgb%28237%2C%2028%2C%2036%29",alt:"@db-ui/foundations on Npmjs",title:"npm version"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components",children:"components"})}),(0,r.jsx)(n.td,{children:"CSS/SCSS styles for components"}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"https://npmjs.com/package/@db-ui/components",title:"DB UI – on NPM",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/npm/v/@db-ui/components.svg?color=rgb%28237%2C%2028%2C%2036%29",alt:"@db-ui/components on Npmjs",title:"npm version"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"output/angular",children:"ngx-components"})}),(0,r.jsx)(n.td,{children:"Native Angular components"}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"https://npmjs.com/package/@db-ui/ngx-components",title:"DB UI – on NPM",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/npm/v/@db-ui/ngx-components.svg?color=rgb%28237%2C%2028%2C%2036%29",alt:"@db-ui/ngx-components on Npmjs",title:"npm version"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"output/react",children:"react-components"})}),(0,r.jsx)(n.td,{children:"Native React components"}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"https://npmjs.com/package/@db-ui/react-components",title:"DB UI – on NPM",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/npm/v/@db-ui/react-components.svg?color=rgb%28237%2C%2028%2C%2036%29",alt:"@db-ui/react-components on Npmjs",title:"npm version"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"output/vue/vue3",children:"v-components"})}),(0,r.jsx)(n.td,{children:"Native Vue components"}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"https://npmjs.com/package/@db-ui/v-components",title:"DB UI – on NPM",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/npm/v/@db-ui/v-components.svg?color=rgb%28237%2C%2028%2C%2036%29",alt:"@db-ui/v-components on Npmjs",title:"npm version"})})})]})]})]}),"\n",(0,r.jsx)(n.h2,{children:"How to use"}),"\n",(0,r.jsxs)(n.p,{children:["Install your preferred package via npm or yarn e.g. ",(0,r.jsx)(n.code,{children:"npm i @db-ui/react-components"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Afterwards you need to add the specific CSS or SCSS files to provide the styles of DB UX Design System.\nFor a detailed overview look at our ",(0,r.jsx)(n.a,{href:"examples",children:"examples"}),"."]}),"\n",(0,r.jsx)(n.h2,{children:"Components"}),"\n",(0,r.jsx)(n.p,{children:"Here is an overview of all components you can use:"}),"\n","\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Category"}),(0,r.jsx)(n.th,{align:"center",children:"Status"}),(0,r.jsx)(n.th,{align:"center",children:"Planned for beta"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Accordion"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/alert",children:"Alert"})}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"Beta"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Avatar"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backdrop"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Badge"}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bottom-Navigation"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Breadcrumbs"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/brand",children:"Brand"})}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"Beta"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/button",children:"Button"})}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"Alpha"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Button-Group"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/card",children:"Card"})}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"Alpha"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Carousel"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/checkbox",children:"Checkbox"})}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"Alpha"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Combobox"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Container"}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Date-Picker"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/divider",children:"Divider"})}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"Alpha"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/drawer",children:"Drawer"})}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"Beta"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Dropdown"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Floating-Button"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Footer"}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Grid"}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Header"}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/icon",children:"Icons"})}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"Beta"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Image"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Indicator"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/infotext",children:"Infotext"})}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"Beta"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/input",children:"Input"})}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"Alpha"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/link",children:"Link"})}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"List-Item"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Menu"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modal"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/navigationitem",children:"NavigationItem"})}),(0,r.jsx)(n.td,{children:"05 - Navigation"}),(0,r.jsx)(n.td,{align:"center",children:"Beta"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Notification"}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Numbers-Field"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Pagination"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Popover"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Progress"}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/radio",children:"Radio"})}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"Alpha"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Rating"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/section",children:"Section"})}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"Beta"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/select",children:"Select"})}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"Beta"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Skeleton"}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Slider"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Spinner"}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Stack/List"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Stepper"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Switch"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/tabs",children:"Tabs"})}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"Alpha"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/tag",children:"Tag"})}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"Alpha"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Textarea"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Timeline"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Time-Picker"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Toggle-Button"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tooltip"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tree"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Upload"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]})]})]}),"\n","\n",(0,r.jsx)(n.p,{children:"‼ Some components are missing and some are not migrated to the new styling, be aware that non-completed components may change in the future. You can enable automated warnings with ESLint if you like."}),"\n",(0,r.jsx)(n.h3,{children:"Warnings with ESLint"}),"\n",(0,r.jsxs)(n.p,{children:["Install ESLint plugin: ",(0,r.jsx)(n.code,{children:"npm i @db-ui/eslint-plugin"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Add the plugin and rule to your configuration:"}),"\n",(0,r.jsx)(l.Code,{codeConfig:o,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"...",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"plugins",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:": [",props:{style:{color:"#D8DEE9FF"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"]",props:{style:{color:"#D8DEE9FF"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"rules",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:": ",props:{style:{color:"#D8DEE9FF"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:'	"',props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/v2-component-used",props:{style:{color:"#A3BE8C"}}},{content:'": "',props:{style:{color:"#ECEFF4"}}},{content:"warn",props:{style:{color:"#A3BE8C"}}},{content:'",',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"...",props:{style:{color:"#81A1C1"}}}]}],lang:"js"},annotations:[]}]}),"\n",(0,r.jsx)(n.h2,{children:"Core principals"}),"\n","\n",(0,r.jsxs)(n.p,{children:["DB UI Mono is part of ",(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten",children:"DB UX Design System Core"}),",\nthat are the guidelines for any Personenverkehr Customer and Deutsche Bahn Enterprise website and web applications."]}),"\n","\n","\n",(0,r.jsxs)(n.p,{children:["DB UI Mono leverages semantic HTML, ARIA roles, states and properties to apply our styles wherever possible, thus\nenforcing correct, accessible markup. And we're quality checking this in partnership with\nthe ",(0,r.jsx)(n.a,{href:"https://db.de/8pei5n",children:"Team Digital Accessibility"}),"."]}),"\n","\n",(0,r.jsx)(n.p,{children:"DB UI Mono uses declarative selectors instead of visual helpers to ensure our HTML class names and structure are human\nread- and understandable, lean, performant and so much easier to update."}),"\n","\n",(0,r.jsxs)(n.p,{children:["As ",(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten",children:"DB UX Design System"})," evolves, so does DB UI\nMono, meaning apps only need to keep their DB UI Mono package updated to ensure the latest look and feel."]}),"\n","\n",(0,r.jsx)(n.h2,{children:"More information"}),"\n",(0,r.jsx)(n.p,{children:"Additionally we'll provide some more information over time regrading the whole ecosystem:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten",children:"DB UX Design System documentation within the DB Marketingportal (german)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://db.de/pu8moh",children:'Confluence / Base Wiki - "Technische Umsetzung des Enterprise UI Design Systems" (german, only available internally)'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://db.de/1tyr73",children:"Confluence - Web UI Component Library (only available internally)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/db-ui/core/blob/main/CHANGELOG.md",children:"Changelog"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/db-ui/core/tree/main/docs/adr",children:"Architectural Decision Records"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://db.de/4cwtyn/",children:"DB UI Mono 1.x Gitlab repository (only accessible internally)"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Things to keep in mind"}),"\n",(0,r.jsx)(n.h3,{children:"Developed for and driven by the community"}),"\n",(0,r.jsx)(n.p,{children:"This is mainly a platform providing the space and technology for a common basis of curated components; their development\nis mainly driven by the community and adapted out of the work done in projects and through the huge amount of feedback\nthat we're gaining out of the community. So please support us in any way possible, this is greatly appreciated!"}),"\n",(0,r.jsx)(n.h2,{children:"How to start develop / contribute"}),"\n",(0,r.jsx)(l.Code,{codeConfig:o,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"npm ",props:{style:{color:"#D8DEE9FF"}}},{content:"install",props:{style:{color:"#A3BE8C"}}}]},{tokens:[{content:"npm ",props:{style:{color:"#D8DEE9FF"}}},{content:"run build",props:{style:{color:"#A3BE8C"}}}]},{tokens:[{content:"npm ",props:{style:{color:"#D8DEE9FF"}}},{content:"run start",props:{style:{color:"#A3BE8C"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,r.jsxs)(n.p,{children:["Please mind the ",(0,r.jsx)(n.a,{href:"/docs/conventions.adoc#user-content-git-commits-conventions",children:"conventions for git commits"}),"."]}),"\n",(0,r.jsx)(n.h3,{children:"Versions"}),"\n",(0,r.jsxs)(n.p,{children:["All versions in all ",(0,r.jsx)(n.code,{children:"package.json"})," files are set to ",(0,r.jsx)(n.code,{children:"0.0.0"}),", we change those during release process in CI/CD."]}),"\n","\n",(0,r.jsx)(n.h2,{children:"Give us your feedback!"}),"\n","\n","\n",(0,r.jsxs)(n.p,{children:["This is only the first version of our framework and we really want your feedback - either within\nthe ","DB UI Channel by Web Dev Community in\nMicrosoft Teams (only available DB internally)",", or directly\nat ",(0,r.jsx)(n.a,{href:"mailto:db-ux-designsystem@deutschebahn.com",children:"db-ux-designsystem@deutschebahn.com"}),". ","\nWe're particularly keen to add as many examples to the behaviours as possible, to further clarify them."]}),"\n",(0,r.jsx)(n.h2,{children:"Deutsche Bahn brand"}),"\n",(0,r.jsxs)(n.p,{children:["As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and\ntrademarks are bound to clear guidelines and restrictions even when being used with the code that we're providing with\nthis product; Deutsche Bahn fully reserves all rights and ownership regarding the Deutsche Bahn brand, even though that\nwe're providing the code of DB UI products free to use and release it under the Apache 2.0 license.\nPlease have a look at our brand portal at ",(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/",children:"https://marketingportal.extranet.deutschebahn.com/"})," for any further questions\nand whom to contact on any brand issues. As these assets and visual guidelines are retrieved from our Deutsche Bahn\nMarketingportal, you'll agree with\nthe ",(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Nutzungsbedingungen-9702684#",children:'"Allgemeine Nutzungsbedingungen f\xfcr das DB-Marketingportal" (german)'}),"\nin case of using them."]}),"\n",(0,r.jsx)(n.p,{children:"For any usage outside of Deutsche Bahn websites and applications you must remove or replace any Deutsche Bahn brand and\ndesign assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme\nthat would make it much easier for you to use our product without the trademarks by Deutsche Bahn."}),"\n",(0,r.jsxs)(n.p,{children:["This especially relates to the files in the directories ",(0,r.jsx)(n.code,{children:"/source/fonts/"}),", ",(0,r.jsx)(n.code,{children:"source/images"})," and ",(0,r.jsx)(n.code,{children:"source/samples"}),"\nand ",(0,r.jsx)(n.code,{children:"source/favicon.ico"})," as well."]}),"\n",(0,r.jsx)(n.h2,{children:"Development"}),"\n",(0,r.jsx)(n.h3,{children:"Tests"}),"\n",(0,r.jsx)(n.p,{children:"TODO: Elaborate on testing setup"}),"\n",(0,r.jsx)(n.h4,{children:"Component Tests"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Visual regression tests"})}),"\n",(0,r.jsx)(n.p,{children:"Playwright is used to create and compare screenshots of each individual component."}),"\n",(0,r.jsx)(n.p,{children:"To update screenshots just run the following (you need Docker installed and available on your shell):"}),"\n",(0,r.jsx)(l.Code,{codeConfig:o,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"npm ",props:{style:{color:"#D8DEE9FF"}}},{content:"run regenerate:screenshots",props:{style:{color:"#A3BE8C"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,r.jsx)(n.p,{children:"If you want to generate the screenshots manually, do the following:"}),"\n",(0,r.jsx)(l.Code,{codeConfig:o,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"npm ",props:{style:{color:"#D8DEE9FF"}}},{content:"run build",props:{style:{color:"#A3BE8C"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"# unix",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"docker ",props:{style:{color:"#D8DEE9FF"}}},{content:"run --rm --network host -v ",props:{style:{color:"#A3BE8C"}}},{content:"$(",props:{style:{color:"#ECEFF4"}}},{content:"pwd",props:{style:{color:"#88C0D0"}}},{content:")",props:{style:{color:"#ECEFF4"}}},{content:":/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash",props:{style:{color:"#A3BE8C"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"#windows - allow file sharing (windows pop up)",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"docker ",props:{style:{color:"#D8DEE9FF"}}},{content:"run --rm --network host -v ",props:{style:{color:"#A3BE8C"}}},{content:"${",props:{style:{color:"#81A1C1"}}},{content:"PWD",props:{style:{color:"#D8DEE9"}}},{content:"}",props:{style:{color:"#81A1C1"}}},{content:":/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash",props:{style:{color:"#A3BE8C"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"npm ",props:{style:{color:"#D8DEE9FF"}}},{content:"install",props:{style:{color:"#A3BE8C"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"cd ",props:{style:{color:"#88C0D0"}}},{content:"output/",props:{style:{color:"#A3BE8C"}}},{content:"${",props:{style:{color:"#81A1C1"}}},{content:"frameworkFolder",props:{style:{color:"#D8DEE9"}}},{content:"}",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"npx ",props:{style:{color:"#D8DEE9FF"}}},{content:"playwright test --update-snapshots",props:{style:{color:"#A3BE8C"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,r.jsxs)(n.p,{children:["You can also use ",(0,r.jsx)(n.code,{children:"docker-compose"})," to test or regenerate screenshots."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["testing: ",(0,r.jsx)(n.code,{children:"docker-compose -f ./e2e/docker-compose.yml up"})]}),"\n",(0,r.jsxs)(n.li,{children:["update screenshots: ",(0,r.jsx)(n.code,{children:"docker-compose -f ./e2e/docker-compose.regenerate.yml up"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Contributions"}),"\n",(0,r.jsxs)(n.p,{children:["Contributions are very welcome, please refer to the ",(0,r.jsx)(n.a,{href:"CONTRIBUTING.md",children:"contribution guide"}),"."]}),"\n",(0,r.jsx)(n.h2,{children:"Code of conduct"}),"\n",(0,r.jsxs)(n.p,{children:["We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone – have a look at\nour ",(0,r.jsx)(n.a,{href:"CODE-OF-CONDUCT.md",children:"Contributor Covenant Code of Conduct"}),"."]}),"\n",(0,r.jsx)(n.h2,{children:"License"}),"\n",(0,r.jsxs)(n.p,{children:["This project is licensed under ",(0,r.jsx)(n.a,{href:"LICENSE",children:"Apache-2.0"}),", Copyright 2023 by DB Systel GmbH."]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)};function h(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let p=e=>{let{children:n}=e;return(0,r.jsx)(s.Z,{children:n})};function j(e){return(0,r.jsx)(a,{})}var x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(p,Object.assign({},e,{children:(0,r.jsx)(j,e)}))}}},function(e){e.O(0,[4996,9883,9774,2888,179],function(){return e(e.s=53525)}),_N_E=e.O()}]);