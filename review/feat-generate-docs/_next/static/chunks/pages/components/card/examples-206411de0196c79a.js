(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1650],{3876:function(i,n,t){var c={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function e(i){if(!t.o(c,i))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+i+"'");throw n.code="MODULE_NOT_FOUND",n});var n=c[i],e=n[0];return t.e(n[1]).then(function(){return t(e)})}e.keys=function(){return Object.keys(c)},e.id=3876,i.exports=e},4857:function(i,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card/examples",function(){return t(6689)}])},5554:function(i,n,t){"use strict";t.d(n,{Z:function(){return d}});var c=t(2322),e=t(8982),o=t(2784);let l=()=>{let i=(0,o.useRef)(null),[n,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let c=(null===(n=null==i?void 0:i.current)||void 0===n?void 0:n.innerHTML)==="";c&&t(!0)},[]),[n,i]},a=i=>{let{children:n,element:t="div",...c}=i,[e,a]=l();return e?(0,o.createElement)(t,{...c,children:n}):(0,o.createElement)(t,{...c,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var s=t(1092);t(8155);var r=t(5632);let g=(i,n)=>i?i.map(i=>({...i,current:"/"===i.link&&"/"===n||"/"!==i.link&&n.includes(i.link),children:i.children?g(i.children,n):[]})).map(i=>(0,s.e)(i)):[],m=i=>{let{children:n}=i,t=(0,r.useRouter)();return(0,c.jsx)(a,{children:(0,c.jsxs)(e.rG,{children:[(0,c.jsxs)(e.ff,{slot:"header",children:[(0,c.jsx)(e.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,c.jsx)(e.Pm,{data:JSON.stringify(g(s.Z,t.pathname))}),(0,c.jsx)(e.T2,{owner:"db-ui",repo:"mono"})]}),(0,c.jsx)("div",{children:n}),(0,c.jsx)(e.fw,{slot:"footer",copyright:!0})]})})};var d=m},3595:function(i,n,t){"use strict";t.d(n,{Z:function(){return o}});var c=t(2322),e=t(2784);function o(i){let[n,t]=(0,e.useState)(()=>null);return(0,e.useEffect)(()=>{i.stylePath&&t(i.stylePath)},[]),(0,c.jsxs)("div",{className:"db-card"+(i.className?" "+i.className:""),"data-variant":i.variant,"data-color-variant":i.colorVariant,"data-direction":i.direction,onClick:n=>{i.onClick&&i.onClick(n)},children:[n?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:n})}):null,i.imgSrc?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("img",{className:"db-card-image",src:i.imgSrc,alt:i.imgAlt,height:i.imgHeight,width:i.imgWidth})}):null,i.children]})}},1092:function(i,n,t){"use strict";t.d(n,{Z:function(){return c},e:function(){return e}});let c=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/componentsicon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],e=i=>({...i,link:"".concat("/mono/review/feat-generate-docs").concat(i.link)})},6689:function(i,n,t){"use strict";t.r(n);var c=t(2322),e=t(5392),o=t(5554),l=t(3595);let a=i=>{let{children:n}=i;return(0,c.jsx)(o.Z,{children:n})};function s(i){let n=Object.assign({h1:"h1",p:"p"},(0,e.ah)(),i.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{children:"DBCard Examples"}),"\n",(0,c.jsx)("div",{class:"example-list",children:(0,c.jsxs)(n.p,{children:["Default: ",(0,c.jsx)(l.Z,{children:"Test"}),"\ncolorVariant: ",(0,c.jsx)(l.Z,{colorVariant:"account",children:"Test"}),"\ncolorVariant, direction, variant, onClick, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{colorVariant:"account",direction:"account",variant:"account",onClick:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\ndirection, variant, onClick, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{direction:"account",variant:"account",onClick:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nvariant, onClick, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{variant:"account",onClick:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nonClick, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{onClick:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(l.Z,{imgWidth:"account",children:"Test"}),"\ndirection: ",(0,c.jsx)(l.Z,{direction:"account",children:"Test"}),"\ndirection, variant, onClick, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{direction:"account",variant:"account",onClick:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nvariant, onClick, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{variant:"account",onClick:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nonClick, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{onClick:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(l.Z,{imgWidth:"account",children:"Test"}),"\nvariant: ",(0,c.jsx)(l.Z,{variant:"account",children:"Test"}),"\nvariant, onClick, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{variant:"account",onClick:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nonClick, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{onClick:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(l.Z,{imgWidth:"account",children:"Test"}),"\nonClick: ",(0,c.jsx)(l.Z,{onClick:"account",children:"Test"}),"\nonClick, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{onClick:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(l.Z,{imgWidth:"account",children:"Test"}),"\nimgAlt: ",(0,c.jsx)(l.Z,{imgAlt:"account",children:"Test"}),"\nimgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(l.Z,{imgWidth:"account",children:"Test"}),"\nimgSrc: ",(0,c.jsx)(l.Z,{imgSrc:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(l.Z,{imgWidth:"account",children:"Test"}),"\nimgHeight: ",(0,c.jsx)(l.Z,{imgHeight:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(l.Z,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(l.Z,{imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(l.Z,{imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(l.Z,{imgWidth:"account",children:"Test"})]})})]})}n.default=function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,c.jsx)(a,Object.assign({},i,{children:(0,c.jsx)(s,i)}))}},5392:function(i,n,t){"use strict";t.d(n,{ah:function(){return o}});var c=t(2784);let e=c.createContext({});function o(i){let n=c.useContext(e);return c.useMemo(()=>"function"==typeof i?i(n):{...n,...i},[n,i])}}},function(i){i.O(0,[2832,9774,2888,179],function(){return i(i.s=4857)}),_N_E=i.O()}]);