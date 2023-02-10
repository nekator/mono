(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2163],{3876:function(e,n,t){var r={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function s(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],s=n[0];return t.e(n[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(r)},s.id=3876,e.exports=s},3622:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab-bar",function(){return t(8529)}])},5554:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(2322),s=t(8982),i=t(2784);let l=()=>{let e=(0,i.useRef)(null),[n,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]},d=e=>{let{children:n,element:t="div",...r}=e,[s,d]=l();return s?(0,i.createElement)(t,{...r,children:n}):(0,i.createElement)(t,{...r,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var a=t(1092);t(8155);var o=t(5632);let c=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?c(e.children,n):[]})).map(e=>(0,a.e)(e)):[],h=e=>{let{children:n}=e,t=(0,o.useRouter)();return(0,r.jsx)(d,{children:(0,r.jsxs)(s.rG,{children:[(0,r.jsxs)(s.ff,{slot:"header",children:[(0,r.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(s.Pm,{data:JSON.stringify(c(a.Z,t.pathname))}),(0,r.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(s.fw,{slot:"footer",copyright:!0})]})})};var b=h},1092:function(e,n,t){"use strict";t.d(n,{Z:function(){return r},e:function(){return s}});let r=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"}]},{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"}]},{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],s=e=>({...e,link:"".concat("/mono/review/feat-generate-docs").concat(e.link)})},8529:function(e,n,t){"use strict";t.r(n);var r=t(2322),s=t(5392),i=t(5554);let l=e=>{let{children:n}=e;return(0,r.jsx)(i.Z,{children:n})};function d(e){let n=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"DBTabBar"}),"\n",(0,r.jsx)(n.h2,{children:"Properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{align:"center",children:"Required"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Options"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"The name of the tab bar, is required for grouping multiple tabs together. Will overwrite names from children."}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabs"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{children:"union"}),(0,r.jsx)(n.td,{children:"DBTabProps[] , string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"stylePath"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"className"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"children"}),(0,r.jsx)(n.td,{children:"No description"}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{})]})]})]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(l,Object.assign({},e,{children:(0,r.jsx)(d,e)}))}},5392:function(e,n,t){"use strict";t.d(n,{ah:function(){return i}});var r=t(2784);let s=r.createContext({});function i(e){let n=r.useContext(s);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[2832,9774,2888,179],function(){return e(e.s=3622)}),_N_E=e.O()}]);