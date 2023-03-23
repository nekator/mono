(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{3876:function(e,n,t){var r={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function i(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],i=n[0];return t.e(n[1]).then(function(){return t(i)})}i.keys=function(){return Object.keys(r)},i.id=3876,e.exports=i},3525:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3899)}])},8429:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(2322),i=t(7900),s=t(2784);let l=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]},d=e=>{let{children:n,element:t="div",...r}=e,[i,d]=l();return i?(0,s.createElement)(t,{...r,children:n}):(0,s.createElement)(t,{...r,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var c=t(6666);t(586);var a=t(5632);let h=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?h(e.children,n):[]})).map(e=>(0,c.e)(e)):[],o=e=>{let{children:n}=e,[t,l]=(0,s.useState)(!1),[o,x]=(0,s.useState)(!1),j=(0,a.useRouter)();return(0,s.useEffect)(()=>{j.query&&(l("true"===j.query.fullscreen),x("true"===j.query.noh1))},[j]),(0,r.jsxs)(d,{children:[j.isReady&&t&&(0,r.jsx)("div",{className:o?"noh1":"",children:n}),j.isReady&&!t&&(0,r.jsxs)(i.rG,{children:[(0,r.jsxs)(i.ff,{slot:"header",children:[(0,r.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(i.Pm,{data:JSON.stringify(h(c.Z,j.pathname))}),(0,r.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(i.fw,{slot:"footer",copyright:!0})]})]})};var x=o},6666:function(e,n,t){"use strict";t.d(n,{Z:function(){return r},e:function(){return i}});let r=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"HTML",link:"/showcases/html"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],i=e=>({...e,link:"".concat("/mono/review/feat-patternhub-docs").concat(e.link)})},3899:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(2322),i=t(8429),s=t(5392);function l(e){let n=Object.assign({p:"p",h1:"h1",img:"img",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li",h4:"h4",strong:"strong"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:" "}),"\n",(0,r.jsx)(n.h1,{children:"DB UI Mono (Alpha) \uD83D\uDE82\uD83D\uDC96"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Based%20on-DB%20Design%20System%20UX%20Guides%20%2B%20Standards-d7dce1.svg",alt:"Based on DB UX Design System guidelines"}),"\n",(0,r.jsx)(n.img,{src:"https://github.com/db-ui/mono/actions/workflows/default.yml/badge.svg",alt:"Main pipeline"}),"\n",(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/License-Apache_2.0-blue.svg",alt:"Apache 2.0 license badge"}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/prettier/prettier",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square",alt:"code style: prettier"})}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/xojs/xo",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/code_style-XO-5ed9c7.svg",alt:"XO code style"})}),"\n",(0,r.jsx)(n.a,{href:"http://makeapullrequest.com",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square",alt:"PRs Welcome"})}),"\n",(0,r.jsx)(n.a,{href:"CODE-OF-CONDUCT.md",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg",alt:"Contributor Covenant"})})]}),"\n",(0,r.jsx)(n.p,{children:"DB UI Mono provides robust HTML UI components, reusable visual styles, and powerful tooling to help developers,\ndesigners, and content authors build, maintain, and scale best of class digital experiences."}),"\n","\n",(0,r.jsx)(n.h2,{children:"Packages"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Package"}),(0,r.jsx)(n.th,{children:"Content"}),(0,r.jsx)(n.th,{align:"left",children:"Version"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/foundations",children:"foundations"})}),(0,r.jsx)(n.td,{children:"CSS/Scss/Tailwind styles and assets"}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"https://npmjs.com/package/@db-ui/foundations",title:"DB UI – on NPM",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/npm/v/@db-ui/foundations.svg?color=rgb%28237%2C%2028%2C%2036%29",alt:"@db-ui/foundations on Npmjs",title:"npm version"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components",children:"components"})}),(0,r.jsx)(n.td,{children:"CSS/Scss styles for components"}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"https://npmjs.com/package/@db-ui/components",title:"DB UI – on NPM",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/npm/v/@db-ui/components.svg?color=rgb%28237%2C%2028%2C%2036%29",alt:"@db-ui/components on Npmjs",title:"npm version"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"output/angular",children:"ngx-components"})}),(0,r.jsx)(n.td,{children:"Native Angular components"}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"https://npmjs.com/package/@db-ui/ngx-components",title:"DB UI – on NPM",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/npm/v/@db-ui/ngx-components.svg?color=rgb%28237%2C%2028%2C%2036%29",alt:"@db-ui/ngx-components on Npmjs",title:"npm version"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"output/react",children:"react-components"})}),(0,r.jsx)(n.td,{children:"Native React components"}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"https://npmjs.com/package/@db-ui/react-components",title:"DB UI – on NPM",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/npm/v/@db-ui/react-components.svg?color=rgb%28237%2C%2028%2C%2036%29",alt:"@db-ui/react-components on Npmjs",title:"npm version"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"output/vue/vue3",children:"v-components"})}),(0,r.jsx)(n.td,{children:"Native Vue components"}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.a,{href:"https://npmjs.com/package/@db-ui/v-components",title:"DB UI – on NPM",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/npm/v/@db-ui/v-components.svg?color=rgb%28237%2C%2028%2C%2036%29",alt:"@db-ui/v-components on Npmjs",title:"npm version"})})})]})]})]}),"\n",(0,r.jsx)(n.h2,{children:"How to use"}),"\n",(0,r.jsxs)(n.p,{children:["Install your preferred package via npm or yarn e.g. ",(0,r.jsx)(n.code,{children:"npm i @db-ui/react-components"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Afterwards you need to add the specific css or scss files to provide the styles of DB UX Design System.\nFor a detailed overview look at our ",(0,r.jsx)(n.a,{href:"examples",children:"examples"}),"."]}),"\n",(0,r.jsx)(n.h2,{children:"Components"}),"\n",(0,r.jsx)(n.p,{children:"Here is an overview of all components you can use:"}),"\n","\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Category"}),(0,r.jsx)(n.th,{align:"center",children:"Inside Repo"}),(0,r.jsx)(n.th,{align:"center",children:"Styling"}),(0,r.jsx)(n.th,{align:"center",children:"Complete"}),(0,r.jsx)(n.th,{align:"center",children:"Planned for beta"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Accordion"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Alert"}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Avatar"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Backdrop"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Badge"}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bottom-Navigation"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Breadcrumbs"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/button",children:"Button"})}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"✅"}),(0,r.jsx)(n.td,{align:"center",children:"v3"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Button-Group"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/card",children:"Card"})}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"✅"}),(0,r.jsx)(n.td,{align:"center",children:"v3"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Carousel"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Checkbox"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Combobox"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Container"}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Date-Picker"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/divider",children:"Divider"})}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"✅"}),(0,r.jsx)(n.td,{align:"center",children:"v3"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Drawer"}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Dropdown"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Floating-Button"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Footer"}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Grid"}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Header"}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/icon",children:"Icons"})}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"✅"}),(0,r.jsx)(n.td,{align:"center",children:"v3"}),(0,r.jsx)(n.td,{align:"center",children:"✅"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Image"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Indicator"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Infotext"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/input",children:"Input"})}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"✅"}),(0,r.jsx)(n.td,{align:"center",children:"v3"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Link"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"List-Item"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Menu"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modal"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Notification"}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Numbers-Field"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Pagination"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Popover"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Progress"}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/radio",children:"Radio"})}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"✅"}),(0,r.jsx)(n.td,{align:"center",children:"v3"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Rating"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Section"}),(0,r.jsx)(n.td,{children:"01 - Layout"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Select"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Skeleton"}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Slider"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Spinner"}),(0,r.jsx)(n.td,{children:"05 - Feedback"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Stack/List"}),(0,r.jsx)(n.td,{children:"06 - Utility"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Stepper"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Switch"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"packages/components/src/components/tabs",children:"Tabs"})}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"✅"}),(0,r.jsx)(n.td,{align:"center",children:"v2"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tag"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Textarea"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"✅"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Timeline"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Time-Picker"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Toggle-Button"}),(0,r.jsx)(n.td,{children:"02 - Action"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tooltip"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Tree"}),(0,r.jsx)(n.td,{children:"04 - Data-Display"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Upload"}),(0,r.jsx)(n.td,{children:"03 - Data-Input"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{align:"center",children:"❌"})]})]})]}),"\n","\n",(0,r.jsx)(n.p,{children:"‼ Some components are missing and some are not migrated to the new styling, be aware that non-completed components may change in the future. You can enable automated warnings with ESLint if you like."}),"\n",(0,r.jsx)(n.h3,{children:"Warnings with ESLint"}),"\n",(0,r.jsxs)(n.p,{children:["Install ESLint plugin: ",(0,r.jsx)(n.code,{children:"npm i @db-ui/eslint-plugin"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Add the plugin and rule to your configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'...\n"plugins": ["@db-ui"],\n"rules": {\n	"@db-ui/v2-component-used": "warn",\n...\n'})}),"\n",(0,r.jsx)(n.h2,{children:"Core principals"}),"\n","\n",(0,r.jsxs)(n.p,{children:["DB UI Mono is based on the ",(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten",children:"DB UX Design System"}),",\nthat are the guidelines for any Personenverkehr Customer and Deutsche Bahn Enterprise website and web applications."]}),"\n","\n","\n",(0,r.jsxs)(n.p,{children:["DB UI Mono leverages semantic HTML, ARIA roles, states and properties to apply our styles wherever possible, thus\nenforcing correct, accessible markup. And we're quality checking this in partnership with\nthe ",(0,r.jsx)(n.a,{href:"https://db.de/8pei5n",children:"Team Digital Accessibility"}),"."]}),"\n","\n",(0,r.jsx)(n.p,{children:"DB UI Mono uses declarative selectors instead of visual helpers to ensure our HTML class names and structure are human\nread- and understandable, lean, performant and so much easier to update."}),"\n","\n",(0,r.jsxs)(n.p,{children:["As ",(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten",children:"DB UX Design System"})," evolves, so does DB UI\nMono, meaning apps only need to keep their DB UI Mono package updated to ensure the latest look and feel."]}),"\n","\n",(0,r.jsx)(n.h2,{children:"More information"}),"\n",(0,r.jsx)(n.p,{children:"Additionally we'll provide some more information over time regrading the whole ecosystem:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB-UX-Design-System/Design-fuer-Apps-Web/UI-Komponenten",children:"DB UX Design System documentation within the DB Marketingportal (german)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://db.de/pu8moh",children:'Confluence / Base Wiki - "Technische Umsetzung des Enterprise UI Design Systems" (german, only available internally)'})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://db.de/1tyr73",children:"Confluence - Web UI Component Library (only available internally)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/db-ui/core/blob/main/CHANGELOG.md",children:"Changelog"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/db-ui/core/tree/main/docs/adr",children:"Architectural Decision Records"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://db.de/4cwtyn/",children:"DB UI Mono 1.x Gitlab repository (only accessible internally)"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Things to keep in mind"}),"\n",(0,r.jsx)(n.h3,{children:"Developed for and driven by the community"}),"\n",(0,r.jsx)(n.p,{children:"This is mainly a platform providing the space and technology for a common basis of curated components; their development\nis mainly driven by the community and adapted out of the work done in projects and through the huge amount of feedback\nthat we're gaining out of the community. So please support us in any way possible, this is greatly appreciated!"}),"\n",(0,r.jsx)(n.h2,{children:"How to start develop / contribute"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"npm install\nnpm run build\nnpm run start\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Please mind the ",(0,r.jsx)(n.a,{href:"/docs/conventions.adoc#user-content-git-commits-conventions",children:"conventions for git commits"}),"."]}),"\n","\n",(0,r.jsx)(n.h2,{children:"Give us your feedback!"}),"\n","\n","\n",(0,r.jsxs)(n.p,{children:["This is only the first version of our framework and we really want your feedback - either within\nthe ","DB UI Channel by Web Dev Community in\nMicrosoft Teams (only available DB internally)",", or directly\nat ",(0,r.jsx)(n.a,{href:"mailto:db-ux-designsystem@deutschebahn.com",children:"db-ux-designsystem@deutschebahn.com"}),". ","\nWe're particularly keen to add as many examples to the behaviours as possible, to further clarify them."]}),"\n",(0,r.jsx)(n.h2,{children:"Deutsche Bahn brand"}),"\n",(0,r.jsxs)(n.p,{children:["As we'd like to perfectly support our users and customers on their digital journey, the usage of Deutsche Bahn brand and\ntrademarks are bound to clear guidelines and restrictions even when being used with the code that we're providing with\nthis product; Deutsche Bahn fully reserves all rights and ownership regarding the Deutsche Bahn brand, even though that\nwe're providing the code of DB UI products free to use and release it under the Apache 2.0 license.\nPlease have a look at our brand portal at ",(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/",children:"https://marketingportal.extranet.deutschebahn.com/"})," for any further questions\nand whom to contact on any brand issues. As these assets and visual guidelines are retrieved from our Deutsche Bahn\nMarketingportal, you'll agree with\nthe ",(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Nutzungsbedingungen-9702684#",children:'"Allgemeine Nutzungsbedingungen f\xfcr das DB-Marketingportal" (german)'}),"\nin case of using them."]}),"\n",(0,r.jsx)(n.p,{children:"For any usage outside of Deutsche Bahn websites and applications you must remove or replace any Deutsche Bahn brand and\ndesign assets as well as protected characteristics and trademarks. We're even also planning to provide a neutral theme\nthat would make it much easier for you to use our product without the trademarks by Deutsche Bahn."}),"\n",(0,r.jsxs)(n.p,{children:["This especially relates to the files in the directories ",(0,r.jsx)(n.code,{children:"/source/fonts/"}),", ",(0,r.jsx)(n.code,{children:"source/images"})," and ",(0,r.jsx)(n.code,{children:"source/samples"}),"\nand ",(0,r.jsx)(n.code,{children:"source/favicon.ico"})," as well."]}),"\n",(0,r.jsx)(n.h2,{children:"Development"}),"\n",(0,r.jsx)(n.h3,{children:"Tests"}),"\n",(0,r.jsx)(n.p,{children:"TODO: Elaborate on testing setup"}),"\n",(0,r.jsx)(n.h4,{children:"Component Tests"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Visual regression tests"})}),"\n",(0,r.jsx)(n.p,{children:"Playwright is used to create and compare screenshots of each individual component."}),"\n",(0,r.jsx)(n.p,{children:"To update screenshots just run the following (you need Docker installed and available on your shell):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm run regenerate:screenshots\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you want to generate the screenshots manually, do the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm run build\n\n# unix\ndocker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash\n\n#windows - allow file sharing (windows pop up)\ndocker run --rm --network host -v ${PWD}:/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash\n\nnpm install\n\ncd output/${frameworkFolder}\n\nnpx playwright test --update-snapshots\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also use ",(0,r.jsx)(n.code,{children:"docker-compose"})," to test or regenerate screenshots."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["testing: ",(0,r.jsx)(n.code,{children:"docker-compose -f ./e2e/docker-compose.yml up"})]}),"\n",(0,r.jsxs)(n.li,{children:["update screenshots: ",(0,r.jsx)(n.code,{children:"docker-compose -f ./e2e/docker-compose.regenerate.yml up"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Contributions"}),"\n",(0,r.jsxs)(n.p,{children:["Contributions are very welcome, please refer to the ",(0,r.jsx)(n.a,{href:"CONTRIBUTING.md",children:"contribution guide"}),"."]}),"\n",(0,r.jsx)(n.h2,{children:"Code of conduct"}),"\n",(0,r.jsxs)(n.p,{children:["We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone – have a look at\nour ",(0,r.jsx)(n.a,{href:"CODE-OF-CONDUCT.md",children:"Contributor Covenant Code of Conduct"}),"."]}),"\n",(0,r.jsx)(n.h2,{children:"License"}),"\n",(0,r.jsxs)(n.p,{children:["This project is licensed under ",(0,r.jsx)(n.a,{href:"LICENSE",children:"Apache-2.0"}),", Copyright 2022 by DB Systel GmbH."]})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)};let c=e=>{let{children:n}=e;return(0,r.jsx)(i.Z,{children:n})};function a(e){return(0,r.jsx)(d,{})}var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,Object.assign({},e,{children:(0,r.jsx)(a,e)}))}},5392:function(e,n,t){"use strict";t.d(n,{ah:function(){return s}});var r=t(2784);let i=r.createContext({});function s(e){let n=r.useContext(i);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=3525)}),_N_E=e.O()}]);