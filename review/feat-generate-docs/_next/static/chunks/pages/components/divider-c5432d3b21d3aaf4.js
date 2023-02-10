(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2058],{3876:function(n,e,t){var r={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function s(n){if(!t.o(r,n))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e});var e=r[n],s=e[0];return t.e(e[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(r)},s.id=3876,n.exports=s},41:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/divider",function(){return t(9843)}])},5554:function(n,e,t){"use strict";t.d(e,{Z:function(){return j}});var r=t(2322),s=t(8982),i=t(2784);let l=()=>{let n=(0,i.useRef)(null),[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var e;let r=(null===(e=null==n?void 0:n.current)||void 0===e?void 0:e.innerHTML)==="";r&&t(!0)},[]),[e,n]},d=n=>{let{children:e,element:t="div",...r}=n,[s,d]=l();return s?(0,i.createElement)(t,{...r,children:e}):(0,i.createElement)(t,{...r,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var c=t(1092);t(8155);var o=t(5632);let a=(n,e)=>n?n.map(n=>({...n,current:"/"===n.link&&"/"===e||"/"!==n.link&&e.includes(n.link),children:n.children?a(n.children,e):[]})).map(n=>(0,c.e)(n)):[],h=n=>{let{children:e}=n,t=(0,o.useRouter)();return(0,r.jsx)(d,{children:(0,r.jsxs)(s.rG,{children:[(0,r.jsxs)(s.ff,{slot:"header",children:[(0,r.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(s.Pm,{data:JSON.stringify(a(c.Z,t.pathname))}),(0,r.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:e}),(0,r.jsx)(s.fw,{slot:"footer",copyright:!0})]})})};var j=h},1092:function(n,e,t){"use strict";t.d(e,{Z:function(){return r},e:function(){return s}});let r=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"}]},{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"}]},{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],s=n=>({...n,link:"".concat("/mono/review/feat-generate-docs").concat(n.link)})},9843:function(n,e,t){"use strict";t.r(e);var r=t(2322),s=t(5392),i=t(5554);let l=n=>{let{children:e}=n;return(0,r.jsx)(i.Z,{children:e})};function d(n){let e=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"DBDivider"}),"\n",(0,r.jsx)(e.h2,{children:"Properties"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Description"}),(0,r.jsx)(e.th,{align:"center",children:"Required"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Options"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"margin"}),(0,r.jsx)(e.td,{children:"No description"}),(0,r.jsx)(e.td,{align:"center",children:"❌"}),(0,r.jsx)(e.td,{children:"union"}),(0,r.jsx)(e.td,{children:"'none' , '_'"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"variant"}),(0,r.jsx)(e.td,{children:"No description"}),(0,r.jsx)(e.td,{align:"center",children:"❌"}),(0,r.jsx)(e.td,{children:"union"}),(0,r.jsx)(e.td,{children:"'horizontal' , 'vertical'"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"stylePath"}),(0,r.jsx)(e.td,{children:"No description"}),(0,r.jsx)(e.td,{align:"center",children:"❌"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"className"}),(0,r.jsx)(e.td,{children:"No description"}),(0,r.jsx)(e.td,{align:"center",children:"❌"}),(0,r.jsx)(e.td,{children:"string"}),(0,r.jsx)(e.td,{})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"children"}),(0,r.jsx)(e.td,{children:"No description"}),(0,r.jsx)(e.td,{align:"center",children:"❌"}),(0,r.jsx)(e.td,{children:"any"}),(0,r.jsx)(e.td,{})]})]})]})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(l,Object.assign({},n,{children:(0,r.jsx)(d,n)}))}},5392:function(n,e,t){"use strict";t.d(e,{ah:function(){return i}});var r=t(2784);let s=r.createContext({});function i(n){let e=r.useContext(s);return r.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}}},function(n){n.O(0,[2832,9774,2888,179],function(){return n(n.s=41)}),_N_E=n.O()}]);