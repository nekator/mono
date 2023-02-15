(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6572],{3876:function(e,n,t){var i={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function l(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],l=n[0];return t.e(n[1]).then(function(){return t(l)})}l.keys=function(){return Object.keys(i)},l.id=3876,e.exports=l},7499:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link",function(){return t(6173)}])},5554:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var i=t(2322),l=t(8982),s=t(2784);let r=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let i=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";i&&t(!0)},[]),[n,e]},d=e=>{let{children:n,element:t="div",...i}=e,[l,d]=r();return l?(0,s.createElement)(t,{...i,children:n}):(0,s.createElement)(t,{...i,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var o=t(1092);t(8155);var c=t(5632);let a=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?a(e.children,n):[]})).map(e=>(0,o.e)(e)):[],h=e=>{let{children:n}=e,t=(0,c.useRouter)();return(0,i.jsx)(d,{children:(0,i.jsxs)(l.rG,{children:[(0,i.jsxs)(l.ff,{slot:"header",children:[(0,i.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(l.Pm,{data:JSON.stringify(a(o.Z,t.pathname))}),(0,i.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(l.fw,{slot:"footer",copyright:!0})]})})};var j=h},1092:function(e,n,t){"use strict";t.d(n,{Z:function(){return i},e:function(){return l}});let i=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],l=e=>({...e,link:"".concat("/mono/review/fix-component-generation").concat(e.link)})},6173:function(e,n,t){"use strict";t.r(n);var i=t(2322),l=t(5392),s=t(5554);let r=e=>{let{children:n}=e;return(0,i.jsx)(s.Z,{children:n})};function d(e){let n=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"DBLink"}),"\n",(0,i.jsx)(n.h2,{children:"Properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{align:"center",children:"Required"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Options"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"union"}),(0,i.jsx)(n.td,{children:"'external','internal'"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"current"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"union"}),(0,i.jsx)(n.td,{children:",'time','true','false','date','page','step','location',"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"disabled"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"href"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hreflang"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"label"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"rel"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"role"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"referrerpolicy"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"union"}),(0,i.jsx)(n.td,{children:"'no-referrer','no-referrer-when-downgrade','origin','origin-when-cross-origin','same-origin','strict-origin','strict-origin-when-cross-origin','unsafe-url'"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"selected"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"size"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"union"}),(0,i.jsx)(n.td,{children:"'medium','small'"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"target"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"union"}),(0,i.jsx)(n.td,{children:"'_self','_blank','_parent','_top'"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"title"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"variant"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"union"}),(0,i.jsx)(n.td,{children:"'adaptive','primary'"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"stylePath"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"className"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"children"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onClick"}),(0,i.jsx)(n.td,{children:"No description"}),(0,i.jsx)(n.td,{align:"center",children:"❌"}),(0,i.jsx)(n.td,{children:"function"}),(0,i.jsx)(n.td,{children:"(event: any) => void"})]})]})]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(d,e)}))}},5392:function(e,n,t){"use strict";t.d(n,{ah:function(){return s}});var i=t(2784);let l=i.createContext({});function s(e){let n=i.useContext(l);return i.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[2832,9774,2888,179],function(){return e(e.s=7499)}),_N_E=e.O()}]);