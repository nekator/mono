(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5575],{3876:function(e,n,t){var l={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function s(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],s=n[0];return t.e(n[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(l)},s.id=3876,e.exports=s},1500:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header",function(){return t(1990)}])},8429:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var l=t(2322),s=t(7900),o=t(2784);let i=()=>{let e=(0,o.useRef)(null),[n,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},r=e=>{let{children:n,element:t="div",...l}=e,[s,r]=i();return s?(0,o.createElement)(t,{...l,children:n}):(0,o.createElement)(t,{...l,ref:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var d=t(6666);t(586);var c=t(5632);let a=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?a(e.children,n):[]})).map(e=>(0,d.e)(e)):[],h=e=>{let{children:n}=e,[t,i]=(0,o.useState)(!1),[h,b]=(0,o.useState)(!1),u=(0,c.useRouter)();return(0,o.useEffect)(()=>{u.query&&(i("true"===u.query.fullscreen),b("true"===u.query.noh1))},[u]),(0,l.jsxs)(r,{children:[u.isReady&&t&&(0,l.jsx)("div",{className:h?"noh1":"",children:n}),u.isReady&&!t&&(0,l.jsxs)(s.rG,{children:[(0,l.jsxs)(s.ff,{slot:"header",children:[(0,l.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(s.Pm,{data:JSON.stringify(a(d.Z,u.pathname))}),(0,l.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(s.fw,{slot:"footer",copyright:!0})]})]})};var b=h},6666:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},e:function(){return s}});let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"TODO: Add to specific category; DBCheckbox",link:"/components/checkbox",children:[{label:"Examples",link:"/components/checkbox/examples"},{label:"How to use",link:"/components/checkbox/how-to-use"}]},{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"HTML",link:"/showcases/html"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],s=e=>({...e,link:"".concat("/mono/review/362-featcomponent-checkbox").concat(e.link)})},1990:function(e,n,t){"use strict";t.r(n);var l=t(2322),s=t(5392),o=t(8429);let i=e=>{let{children:n}=e;return(0,l.jsx)(o.Z,{children:n})};function r(e){let n=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{children:"DBHeader"}),"\n",(0,l.jsx)(n.h2,{children:"Properties"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{align:"center",children:"Required"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Options"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"slotBrand"}),(0,l.jsx)(n.td,{children:"No description"}),(0,l.jsx)(n.td,{align:"center",children:"❌"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"slotDesktopNavigation"}),(0,l.jsx)(n.td,{children:"No description"}),(0,l.jsx)(n.td,{align:"center",children:"❌"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"slotMobileNavigation"}),(0,l.jsx)(n.td,{children:"No description"}),(0,l.jsx)(n.td,{align:"center",children:"❌"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"slotMetaNavigation"}),(0,l.jsx)(n.td,{children:"No description"}),(0,l.jsx)(n.td,{align:"center",children:"❌"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"id"}),(0,l.jsx)(n.td,{children:"No description"}),(0,l.jsx)(n.td,{align:"center",children:"❌"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"title"}),(0,l.jsx)(n.td,{children:"No description"}),(0,l.jsx)(n.td,{align:"center",children:"❌"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"stylePath"}),(0,l.jsx)(n.td,{children:"No description"}),(0,l.jsx)(n.td,{align:"center",children:"❌"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"className"}),(0,l.jsx)(n.td,{children:"No description"}),(0,l.jsx)(n.td,{align:"center",children:"❌"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"children"}),(0,l.jsx)(n.td,{children:"No description"}),(0,l.jsx)(n.td,{align:"center",children:"❌"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{})]})]})]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(i,Object.assign({},e,{children:(0,l.jsx)(r,e)}))}},5392:function(e,n,t){"use strict";t.d(n,{ah:function(){return o}});var l=t(2784);let s=l.createContext({});function o(e){let n=l.useContext(s);return l.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=1500)}),_N_E=e.O()}]);