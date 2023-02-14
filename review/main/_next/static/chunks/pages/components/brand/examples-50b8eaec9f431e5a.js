(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6398],{3876:function(e,n,t){var i={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function l(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],l=n[0];return t.e(n[1]).then(function(){return t(l)})}l.keys=function(){return Object.keys(i)},l.id=3876,e.exports=l},6259:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/brand/examples",function(){return t(7992)}])},5554:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var i=t(2322),l=t(8982),s=t(2784);let o=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let i=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";i&&t(!0)},[]),[n,e]},a=e=>{let{children:n,element:t="div",...i}=e,[l,a]=o();return l?(0,s.createElement)(t,{...i,children:n}):(0,s.createElement)(t,{...i,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var c=t(1092);t(8155);var r=t(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,c.e)(e)):[],h=e=>{let{children:n}=e,t=(0,r.useRouter)();return(0,i.jsx)(a,{children:(0,i.jsxs)(l.rG,{children:[(0,i.jsxs)(l.ff,{slot:"header",children:[(0,i.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(l.Pm,{data:JSON.stringify(d(c.Z,t.pathname))}),(0,i.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(l.fw,{slot:"footer",copyright:!0})]})})};var m=h},1092:function(e,n,t){"use strict";t.d(n,{Z:function(){return i},e:function(){return l}});let i=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],l=e=>({...e,link:"".concat("/mono/review/main").concat(e.link)})},7992:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var i=t(2322),l=t(5554),s=t(2784);let o={anchorRef:"/",src:"./assets/images/db_logo.svg"};function a(e){var n,t;let[l,a]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,i.jsxs)("div",{className:"db-brand"+(e.className?" "+e.className:""),children:[l?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:l})}):null,(0,i.jsxs)("a",{href:null!==(n=e.anchorRef)&&void 0!==n?n:o.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("img",{className:"db-logo",src:null!==(t=e.imgSrc)&&void 0!==t?t:o.src,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}),e.anchorChildren?(0,i.jsx)(i.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,i.jsx)(i.Fragment,{children:e.children})]})}var c=()=>(0,i.jsxs)(l.Z,{children:[(0,i.jsx)("h1",{children:" DBBrand Examples "}),(0,i.jsxs)("div",{className:"example-list",children:["Default: ",(0,i.jsx)(a,{children:"Test"}),(0,i.jsx)("p",{children:"anchorChildren:"})," ",(0,i.jsx)(a,{anchorChildren:!0,children:"Test"}),(0,i.jsx)("p",{children:"anchorChildren, anchorRef, anchorRelation, anchorTitle, hideDefaultAsset, imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,i.jsx)(a,{anchorChildren:!0,anchorRef:"account",anchorRelation:"account",anchorTitle:"account",hideDefaultAsset:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"}),(0,i.jsx)("p",{children:"anchorRef, anchorRelation, anchorTitle, hideDefaultAsset, imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,i.jsx)(a,{anchorRef:"account",anchorRelation:"account",anchorTitle:"account",hideDefaultAsset:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"}),(0,i.jsx)("p",{children:"anchorRelation, anchorTitle, hideDefaultAsset, imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,i.jsx)(a,{anchorRelation:"account",anchorTitle:"account",hideDefaultAsset:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"}),(0,i.jsx)("p",{children:"anchorRelation, hideDefaultAsset, imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,i.jsx)(a,{anchorRelation:"account",hideDefaultAsset:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"}),(0,i.jsx)("p",{children:"hideDefaultAsset, imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,i.jsx)(a,{hideDefaultAsset:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"}),(0,i.jsx)("p",{children:"imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,i.jsx)(a,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"}),(0,i.jsx)("p",{children:"imgHeight, imgSrc, imgWidth:"})," ",(0,i.jsx)(a,{imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"}),(0,i.jsx)("p",{children:"imgHeight, imgWidth:"})," ",(0,i.jsx)(a,{imgHeight:100,imgWidth:100,children:"Test"}),(0,i.jsx)("p",{children:"imgWidth:"})," ",(0,i.jsx)(a,{imgWidth:100,children:"Test"}),(0,i.jsx)("p",{children:"anchorRef:"})," ",(0,i.jsx)(a,{anchorRef:"account",children:"Test"}),(0,i.jsx)("p",{children:"anchorTitle:"})," ",(0,i.jsx)(a,{anchorTitle:"account",children:"Test"}),(0,i.jsx)("p",{children:"anchorRelation:"})," ",(0,i.jsx)(a,{anchorRelation:"account",children:"Test"}),(0,i.jsx)("p",{children:"hideDefaultAsset:"})," ",(0,i.jsx)(a,{hideDefaultAsset:"account",children:"Test"}),(0,i.jsx)("p",{children:"imgAlt:"})," ",(0,i.jsx)(a,{imgAlt:"account",children:"Test"}),(0,i.jsx)("p",{children:"imgSrc:"})," ",(0,i.jsx)(a,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"Test"}),(0,i.jsx)("p",{children:"imgHeight:"})," ",(0,i.jsx)(a,{imgHeight:100,children:"Test"})]})]})}},function(e){e.O(0,[2832,9774,2888,179],function(){return e(e.s=6259)}),_N_E=e.O()}]);