(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{3876:function(e,n,t){var l={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function s(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],s=n[0];return t.e(n[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(l)},s.id=3876,e.exports=s},7468:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab/examples",function(){return t(2650)}])},5554:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var l=t(2322),s=t(8982),o=t(2784);let a=()=>{let e=(0,o.useRef)(null),[n,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},i=e=>{let{children:n,element:t="div",...l}=e,[s,i]=a();return s?(0,o.createElement)(t,{...l,children:n}):(0,o.createElement)(t,{...l,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var r=t(1092);t(8155);var c=t(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,r.e)(e)):[],u=e=>{let{children:n}=e,t=(0,c.useRouter)();return(0,l.jsx)(i,{children:(0,l.jsxs)(s.rG,{children:[(0,l.jsxs)(s.ff,{slot:"header",children:[(0,l.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(s.Pm,{data:JSON.stringify(d(r.Z,t.pathname))}),(0,l.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(s.fw,{slot:"footer",copyright:!0})]})})};var b=u},8809:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var l=t(2322),s=t(2784),o=t(258),a=t(1537);function i(e){let n=(0,s.useRef)(null),[t,i]=(0,s.useState)(()=>o.IY),[r,c]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{if(i((0,a.V)()),e.stylePath&&c(e.stylePath),e.active){var t;null===(t=n.current)||void 0===t||t.click()}},[]),(0,l.jsxs)("div",{className:"db-tab"+(e.className?" "+e.className:""),children:[r?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:r})}):null,(0,l.jsx)("input",{type:"radio",ref:n,name:e.name,id:t}),(0,l.jsx)("label",{role:"tab",htmlFor:t,children:e.label}),(0,l.jsxs)("section",{role:"tabpanel",id:"content-"+t,children:[e.content?(0,l.jsx)(l.Fragment,{children:e.content}):null,e.children]})]})}},258:function(e,n,t){"use strict";var l,s,o,a;t.d(n,{IY:function(){return i}});let i="ID_WILL_BE_OVERWRITTEN_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARENT_INITIALIZING_IT_IN_THE_FRONTEND";(o=l||(l={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(l).map(e=>{let[,n]=e;return n}),(a=s||(s={})).NEUTRAL_0="neutral-0",a.NEUTRAL_1="neutral-1",a.NEUTRAL_2="neutral-2",a.NEUTRAL_3="neutral-3",a.NEUTRAL_4="neutral-4",a.NEUTRAL_5="neutral-5",a.NEUTRAL_6="neutral-6",a.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",a.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",a.PRIMARY="primary",a.PRIMARY_LIGHT="primary-light",a.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",a.SECONDARY="secondary",a.SECONDARY_LIGHT="secondary-light",a.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",a.SUCCESS="success",a.SUCCESS_LIGHT="success-light",a.SUCCESS_TRANSPARENT_SEMI="success-transparent-semi",a.CRITICAL="critical",a.CRITICAL_LIGHT="critical-light",a.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",a.WARNING="warning",a.WARNING_LIGHT="warning-light",a.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",a.INFORMATION="information",a.INFORMATION_LIGHT="information-light",a.INFORMATION_TRANSPARENT_SEMI="information-transparent-semi",Object.entries(s).map(e=>{let[,n]=e;return n}),s.PRIMARY,s.SECONDARY,s.SUCCESS,s.WARNING,s.CRITICAL,s.INFORMATION},1537:function(e,n,t){"use strict";t.d(n,{V:function(){return l}});let l=()=>{var e;return(null==window?void 0:null===(e=window.crypto)||void 0===e?void 0:e.randomUUID())||Math.random().toString()}},1092:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},e:function(){return s}});let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],s=e=>({...e,link:"".concat("/mono/review/fix-component-generation").concat(e.link)})},2650:function(e,n,t){"use strict";t.r(n);var l=t(2322),s=t(5554),o=t(8809);n.default=()=>(0,l.jsxs)(s.Z,{children:[(0,l.jsx)("h1",{children:" DBTab Examples "}),(0,l.jsxs)("div",{className:"example-list",children:["Default: ",(0,l.jsx)(o.Z,{children:"Test"}),(0,l.jsx)("p",{children:"active:"})," ",(0,l.jsx)(o.Z,{active:!0,children:"Test"}),(0,l.jsx)("p",{children:"active, content, key, label, name:"})," ",(0,l.jsx)(o.Z,{active:!0,content:"account",label:"account",name:"account",children:"Test"},"account"),(0,l.jsx)("p",{children:"content, key, label, name:"})," ",(0,l.jsx)(o.Z,{content:"account",label:"account",name:"account",children:"Test"},"account"),(0,l.jsx)("p",{children:"content, key, name:"})," ",(0,l.jsx)(o.Z,{content:"account",name:"account",children:"Test"},"account"),(0,l.jsx)("p",{children:"content, key:"})," ",(0,l.jsx)(o.Z,{content:"account",children:"Test"},"account"),(0,l.jsx)("p",{children:"key:"})," ",(0,l.jsx)(o.Z,{children:"Test"},"account"),(0,l.jsx)("p",{children:"label:"})," ",(0,l.jsx)(o.Z,{label:"account",children:"Test"}),(0,l.jsx)("p",{children:"name:"})," ",(0,l.jsx)(o.Z,{name:"account",children:"Test"}),(0,l.jsx)("p",{children:"content:"})," ",(0,l.jsx)(o.Z,{content:"account",children:"Test"})]})]})}},function(e){e.O(0,[2832,9774,2888,179],function(){return e(e.s=7468)}),_N_E=e.O()}]);