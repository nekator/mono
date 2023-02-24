(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1650],{3876:function(e,n,i){var t={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function l(e){if(!i.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],l=n[0];return i.e(n[1]).then(function(){return i(l)})}l.keys=function(){return Object.keys(t)},l.id=3876,e.exports=l},280:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card/examples",function(){return i(3923)}])},5554:function(e,n,i){"use strict";i.d(n,{Z:function(){return h}});var t=i(2322),l=i(8982),o=i(2784);let s=()=>{let e=(0,o.useRef)(null),[n,i]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&i(!0)},[]),[n,e]},c=e=>{let{children:n,element:i="div",...t}=e,[l,c]=s();return l?(0,o.createElement)(i,{...t,children:n}):(0,o.createElement)(i,{...t,ref:c,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var a=i(1092);i(8155);var r=i(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,a.e)(e)):[],m=e=>{let{children:n}=e,i=(0,r.useRouter)();return(0,t.jsx)(c,{children:(0,t.jsxs)(l.rG,{children:[(0,t.jsxs)(l.ff,{slot:"header",children:[(0,t.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(l.Pm,{data:JSON.stringify(d(a.Z,i.pathname))}),(0,t.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(l.fw,{slot:"footer",copyright:!0})]})})};var h=m},3595:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(2322),l=i(2784);function o(e){let[n,i]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&i(e.stylePath)},[]),(0,t.jsxs)("div",{className:"db-card"+(e.className?" "+e.className:""),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-direction":e.direction,onClick:n=>{e.onClick&&e.onClick(n)},children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.imgSrc?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})}},1092:function(e,n,i){"use strict";i.d(n,{Z:function(){return t},e:function(){return l}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"TODO: Add to specific category; DBCodeDocs",link:"/components/code-docs",children:[{label:"Examples",link:"/components/code-docs/examples"},{label:"How to use",link:"/components/code-docs/how-to-use"}]},{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],l=e=>({...e,link:"".concat("/mono/review/feat-react-show-code").concat(e.link)})},3923:function(e,n,i){"use strict";i.r(n);var t=i(2322),l=i(5554),o=i(3595);n.default=()=>(0,t.jsxs)(l.Z,{children:[(0,t.jsx)("h1",{children:" DBCard Examples "}),(0,t.jsxs)("div",{className:"example-list",children:["Default: ",(0,t.jsx)(o.Z,{children:"Test"}),(0,t.jsx)("p",{children:"colorVariant:"})," ",(0,t.jsx)(o.Z,{colorVariant:"account",children:"Test"}),(0,t.jsx)("p",{children:"colorVariant, direction, imgAlt, imgHeight, imgSrc, imgWidth, onClick, title, variant:"})," ",(0,t.jsx)(o.Z,{colorVariant:"account",direction:"row",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",variant:"interactive",children:"Test"}),(0,t.jsx)("p",{children:"direction, imgAlt, imgHeight, imgSrc, imgWidth, onClick, title, variant:"})," ",(0,t.jsx)(o.Z,{direction:"row",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",variant:"interactive",children:"Test"}),(0,t.jsx)("p",{children:"imgAlt, imgHeight, imgSrc, imgWidth, onClick, title, variant:"})," ",(0,t.jsx)(o.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",variant:"interactive",children:"Test"}),(0,t.jsx)("p",{children:"imgAlt, imgHeight, imgSrc, imgWidth, onClick, title:"})," ",(0,t.jsx)(o.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",children:"Test"}),(0,t.jsx)("p",{children:"imgAlt, imgHeight, imgSrc, imgWidth, onClick:"})," ",(0,t.jsx)(o.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),children:"Test"}),(0,t.jsx)("p",{children:"imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,t.jsx)(o.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"}),(0,t.jsx)("p",{children:"imgHeight, imgSrc, imgWidth:"})," ",(0,t.jsx)(o.Z,{imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"}),(0,t.jsx)("p",{children:"imgHeight, imgWidth:"})," ",(0,t.jsx)(o.Z,{imgHeight:100,imgWidth:100,children:"Test"}),(0,t.jsx)("p",{children:"imgWidth:"})," ",(0,t.jsx)(o.Z,{imgWidth:100,children:"Test"}),(0,t.jsx)("p",{children:"direction:"})," ",(0,t.jsx)(o.Z,{direction:"row",children:"Test"}),(0,t.jsx)("p",{children:"variant:"})," ",(0,t.jsx)(o.Z,{variant:"interactive",children:"Test"}),(0,t.jsx)("p",{children:"title:"})," ",(0,t.jsx)(o.Z,{title:"account",children:"Test"}),(0,t.jsx)("p",{children:"onClick:"})," ",(0,t.jsx)(o.Z,{onClick:e=>console.log(e),children:"Test"}),(0,t.jsx)("p",{children:"imgAlt:"})," ",(0,t.jsx)(o.Z,{imgAlt:"account",children:"Test"}),(0,t.jsx)("p",{children:"imgSrc:"})," ",(0,t.jsx)(o.Z,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"Test"}),(0,t.jsx)("p",{children:"imgHeight:"})," ",(0,t.jsx)(o.Z,{imgHeight:100,children:"Test"})]})]})}},function(e){e.O(0,[2832,9774,2888,179],function(){return e(e.s=280)}),_N_E=e.O()}]);