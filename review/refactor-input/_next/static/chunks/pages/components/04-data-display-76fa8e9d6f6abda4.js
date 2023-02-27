(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8639],{3876:function(e,n,l){var t={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function o(e){if(!l.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],o=n[0];return l.e(n[1]).then(function(){return l(o)})}o.keys=function(){return Object.keys(t)},o.id=3876,e.exports=o},1478:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/04-data-display",function(){return l(3913)}])},5554:function(e,n,l){"use strict";l.d(n,{Z:function(){return b}});var t=l(2322),o=l(8982),s=l(2784);let a=()=>{let e=(0,s.useRef)(null),[n,l]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&l(!0)},[]),[n,e]},i=e=>{let{children:n,element:l="div",...t}=e,[o,i]=a();return o?(0,s.createElement)(l,{...t,children:n}):(0,s.createElement)(l,{...t,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var r=l(1092);l(1828);var c=l(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,r.e)(e)):[],u=e=>{let{children:n}=e,l=(0,c.useRouter)();return(0,t.jsx)(i,{children:(0,t.jsxs)(o.rG,{children:[(0,t.jsxs)(o.ff,{slot:"header",children:[(0,t.jsx)(o.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(o.Pm,{data:JSON.stringify(d(r.Z,l.pathname))}),(0,t.jsx)(o.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(o.fw,{slot:"footer",copyright:!0})]})})};var b=u},1092:function(e,n,l){"use strict";l.d(n,{Z:function(){return t},e:function(){return o}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],o=e=>({...e,link:"".concat("/mono/review/refactor-input").concat(e.link)})},3913:function(e,n,l){"use strict";l.r(n);var t=l(2322),o=l(5392),s=l(5554);let a=e=>{let{children:n}=e;return(0,t.jsx)(s.Z,{children:n})};function i(e){let n=Object.assign({h1:"h1",p:"p"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"04 Data Display"}),"\n",(0,t.jsx)(n.p,{children:"TODO: Add docs for data-display"})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(i,e)}))}},5392:function(e,n,l){"use strict";l.d(n,{ah:function(){return s}});var t=l(2784);let o=t.createContext({});function s(e){let n=t.useContext(o);return t.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[879,9774,2888,179],function(){return e(e.s=1478)}),_N_E=e.O()}]);