(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6398],{3876:function(t,i,n){var c={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function e(t){if(!n.o(c,t))return Promise.resolve().then(function(){var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i});var i=c[t],e=i[0];return n.e(i[1]).then(function(){return n(e)})}e.keys=function(){return Object.keys(c)},e.id=3876,t.exports=e},5143:function(t,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/brand/examples",function(){return n(7967)}])},5554:function(t,i,n){"use strict";n.d(i,{Z:function(){return m}});var c=n(2322),e=n(8982),a=n(2784);let o=()=>{let t=(0,a.useRef)(null),[i,n]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var i;let c=(null===(i=null==t?void 0:t.current)||void 0===i?void 0:i.innerHTML)==="";c&&n(!0)},[]),[i,t]},h=t=>{let{children:i,element:n="div",...c}=t,[e,h]=o();return e?(0,a.createElement)(n,{...c,children:i}):(0,a.createElement)(n,{...c,ref:h,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var g=n(1092);n(8155);var r=n(5632);let l=(t,i)=>t?t.map(t=>({...t,current:"/"===t.link&&"/"===i||"/"!==t.link&&i.includes(t.link),children:t.children?l(t.children,i):[]})).map(t=>(0,g.e)(t)):[],s=t=>{let{children:i}=t,n=(0,r.useRouter)();return(0,c.jsx)(h,{children:(0,c.jsxs)(e.rG,{children:[(0,c.jsxs)(e.ff,{slot:"header",children:[(0,c.jsx)(e.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,c.jsx)(e.Pm,{data:JSON.stringify(l(g.Z,n.pathname))}),(0,c.jsx)(e.T2,{owner:"db-ui",repo:"mono"})]}),(0,c.jsx)("div",{children:i}),(0,c.jsx)(e.fw,{slot:"footer",copyright:!0})]})})};var m=s},1092:function(t,i,n){"use strict";n.d(i,{Z:function(){return c},e:function(){return e}});let c=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"}]},{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"}]},{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],e=t=>({...t,link:"".concat("/mono/review/feat-generate-docs").concat(t.link)})},7967:function(t,i,n){"use strict";n.r(i),n.d(i,{default:function(){return s}});var c=n(2322),e=n(5392),a=n(5554),o=n(2784);let h={anchorRef:"/",src:"./assets/images/db_logo.svg"};function g(t){var i,n;let[e,a]=(0,o.useState)(()=>null);return(0,o.useEffect)(()=>{t.stylePath&&a(t.stylePath)},[]),(0,c.jsxs)("div",{className:"db-brand"+(t.className?" "+t.className:""),children:[e?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:e})}):null,(0,c.jsxs)("a",{href:null!==(i=t.anchorRef)&&void 0!==i?i:h.anchorRef,title:t.anchorTitle,rel:t.anchorRelation,children:[t.hideDefaultAsset?null:(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("img",{className:"db-logo",src:null!==(n=t.imgSrc)&&void 0!==n?n:h.src,alt:t.imgAlt,height:t.imgHeight,width:t.imgWidth})}),t.anchorChildren?(0,c.jsx)(c.Fragment,{children:t.children}):null]}),t.anchorChildren?null:(0,c.jsx)(c.Fragment,{children:t.children})]})}let r=t=>{let{children:i}=t;return(0,c.jsx)(a.Z,{children:i})};function l(t){let i=Object.assign({h1:"h1",p:"p"},(0,e.ah)(),t.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.h1,{children:"DBBrand Examples"}),"\n",(0,c.jsx)("div",{class:"example-list",children:(0,c.jsxs)(i.p,{children:["Default: ",(0,c.jsx)(g,{children:"Test"}),"\nanchorChildren: ",(0,c.jsx)(g,{anchorChildren:"true",children:"Test"}),"\nanchorChildren, anchorRef, anchorTitle, anchorRelation, hideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{anchorChildren:"true",anchorRef:"account",anchorTitle:"account",anchorRelation:"account",hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nanchorRef, anchorTitle, anchorRelation, hideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{anchorRef:"account",anchorTitle:"account",anchorRelation:"account",hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nanchorTitle, anchorRelation, hideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{anchorTitle:"account",anchorRelation:"account",hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nanchorRelation, hideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{anchorRelation:"account",hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nhideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(g,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(g,{imgWidth:"account",children:"Test"}),"\nanchorRef: ",(0,c.jsx)(g,{anchorRef:"account",children:"Test"}),"\nanchorRef, anchorTitle, anchorRelation, hideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{anchorRef:"account",anchorTitle:"account",anchorRelation:"account",hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nanchorTitle, anchorRelation, hideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{anchorTitle:"account",anchorRelation:"account",hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nanchorRelation, hideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{anchorRelation:"account",hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nhideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(g,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(g,{imgWidth:"account",children:"Test"}),"\nanchorTitle: ",(0,c.jsx)(g,{anchorTitle:"account",children:"Test"}),"\nanchorTitle, anchorRelation, hideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{anchorTitle:"account",anchorRelation:"account",hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nanchorRelation, hideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{anchorRelation:"account",hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nhideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(g,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(g,{imgWidth:"account",children:"Test"}),"\nanchorRelation: ",(0,c.jsx)(g,{anchorRelation:"account",children:"Test"}),"\nanchorRelation, hideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{anchorRelation:"account",hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nhideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(g,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(g,{imgWidth:"account",children:"Test"}),"\nhideDefaultAsset: ",(0,c.jsx)(g,{hideDefaultAsset:"account",children:"Test"}),"\nhideDefaultAsset, imgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{hideDefaultAsset:"account",imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(g,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(g,{imgWidth:"account",children:"Test"}),"\nimgAlt: ",(0,c.jsx)(g,{imgAlt:"account",children:"Test"}),"\nimgAlt, imgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgAlt:"account",imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(g,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(g,{imgWidth:"account",children:"Test"}),"\nimgSrc: ",(0,c.jsx)(g,{imgSrc:"account",children:"Test"}),"\nimgSrc, imgHeight, imgWidth: ",(0,c.jsx)(g,{imgSrc:"account",imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(g,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(g,{imgWidth:"account",children:"Test"}),"\nimgHeight: ",(0,c.jsx)(g,{imgHeight:"account",children:"Test"}),"\nimgHeight, imgWidth: ",(0,c.jsx)(g,{imgHeight:"account",imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(g,{imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(g,{imgWidth:"account",children:"Test"}),"\nimgWidth: ",(0,c.jsx)(g,{imgWidth:"account",children:"Test"})]})})]})}var s=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,c.jsx)(r,Object.assign({},t,{children:(0,c.jsx)(l,t)}))}},5392:function(t,i,n){"use strict";n.d(i,{ah:function(){return a}});var c=n(2784);let e=c.createContext({});function a(t){let i=c.useContext(e);return c.useMemo(()=>"function"==typeof t?t(i):{...i,...t},[i,t])}}},function(t){t.O(0,[2832,9774,2888,179],function(){return t(t.s=5143)}),_N_E=t.O()}]);