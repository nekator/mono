(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8102],{3876:function(n,e,l){var t={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function o(n){if(!l.o(t,n))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e});var e=t[n],o=e[0];return l.e(e[1]).then(function(){return l(o)})}o.keys=function(){return Object.keys(t)},o.id=3876,n.exports=o},5534:function(n,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors",function(){return l(3945)}])},5554:function(n,e,l){"use strict";l.d(e,{Z:function(){return b}});var t=l(2322),o=l(8982),s=l(2784);let i=()=>{let n=(0,s.useRef)(null),[e,l]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var e;let t=(null===(e=null==n?void 0:n.current)||void 0===e?void 0:e.innerHTML)==="";t&&l(!0)},[]),[e,n]},a=n=>{let{children:e,element:l="div",...t}=n,[o,a]=i();return o?(0,s.createElement)(l,{...t,children:e}):(0,s.createElement)(l,{...t,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var r=l(1092);l(8155);var c=l(5632);let d=(n,e)=>n?n.map(n=>({...n,current:"/"===n.link&&"/"===e||"/"!==n.link&&e.includes(n.link),children:n.children?d(n.children,e):[]})).map(n=>(0,r.e)(n)):[],u=n=>{let{children:e}=n,l=(0,c.useRouter)();return(0,t.jsx)(a,{children:(0,t.jsxs)(o.rG,{children:[(0,t.jsxs)(o.ff,{slot:"header",children:[(0,t.jsx)(o.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(o.Pm,{data:JSON.stringify(d(r.Z,l.pathname))}),(0,t.jsx)(o.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:e}),(0,t.jsx)(o.fw,{slot:"footer",copyright:!0})]})})};var b=u},1092:function(n,e,l){"use strict";l.d(e,{Z:function(){return t},e:function(){return o}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],o=n=>({...n,link:"".concat("/mono/review/main").concat(n.link)})},3945:function(n,e,l){"use strict";l.r(e);var t=l(2322),o=l(5392),s=l(5554);let i=n=>{let{children:e}=n;return(0,t.jsx)(s.Z,{children:e})};function a(n){let e=Object.assign({h1:"h1",p:"p"},(0,o.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{children:"Colors"}),"\n",(0,t.jsx)(e.p,{children:"TODO: Intro for Colors and link to mapo"})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(i,Object.assign({},n,{children:(0,t.jsx)(a,n)}))}},5392:function(n,e,l){"use strict";l.d(e,{ah:function(){return s}});var t=l(2784);let o=t.createContext({});function s(n){let e=t.useContext(o);return t.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}}},function(n){n.O(0,[2832,9774,2888,179],function(){return n(n.s=5534)}),_N_E=n.O()}]);