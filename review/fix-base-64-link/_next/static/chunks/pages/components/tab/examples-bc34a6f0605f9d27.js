(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{3876:function(e,n,t){var l={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[6846,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function a(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(l)},a.id=3876,e.exports=a},7468:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab/examples",function(){return t(6264)}])},8429:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var l=t(2322),a=t(7900),s=t(2784);let o=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},i=e=>{let{children:n,element:t="div",...l}=e,[a,i]=o();return a?(0,s.createElement)(t,{...l,children:n}):(0,s.createElement)(t,{...l,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var r=t(6666);t(586);var c=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>(0,r.e)(e)):[],d=e=>{let{children:n}=e,t=(0,c.useRouter)();return(0,l.jsx)(i,{children:(0,l.jsxs)(a.rG,{children:[(0,l.jsxs)(a.ff,{slot:"header",children:[(0,l.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(a.Pm,{data:JSON.stringify(u(r.Z,t.pathname))}),(0,l.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(a.fw,{slot:"footer",copyright:!0})]})})};var p=d},3437:function(e,n,t){"use strict";var l=t(2322),a=t(2784),s=t(8490),o=t(7070);n.Z=function(e){let n=(0,a.useRef)(null),[t,i]=(0,a.useState)(()=>s.IY),[r,c]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{if(i((0,o.V)()),e.stylePath&&c(e.stylePath),e.active){var t;null===(t=n.current)||void 0===t||t.click()}},[]),(0,l.jsxs)("div",{className:"db-tab"+(e.className?" "+e.className:""),children:[r?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:r})}):null,(0,l.jsx)("input",{type:"radio",ref:n,name:e.name,id:t}),(0,l.jsx)("label",{role:"tab",htmlFor:t,children:e.label}),(0,l.jsxs)("section",{role:"tabpanel",id:"content-"+t,children:[e.content?(0,l.jsx)(l.Fragment,{children:e.content}):null,e.children]})]})}},8490:function(e,n,t){"use strict";var l,a,s,o,i,r;t.d(n,{$f:function(){return d},DM:function(){return p},IY:function(){return c},SU:function(){return u},iw:function(){return l},r$:function(){return a}});let c="ID_WILL_BE_OVERWRITTEN_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARENT_INITIALIZING_IT_IN_THE_FRONTEND",u="LABEL SHOULD BE SET";(o=l||(l={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive";let d=Object.entries(l).map(e=>{let[,n]=e;return n});(i=a||(a={})).NEUTRAL_0="neutral-0",i.NEUTRAL_1="neutral-1",i.NEUTRAL_2="neutral-2",i.NEUTRAL_3="neutral-3",i.NEUTRAL_4="neutral-4",i.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",i.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",i.PRIMARY="primary",i.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",i.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",i.SECONDARY="secondary",i.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",i.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",i.SUCCESS="success",i.SUCCESS_TRANSPARENT_FULL="success-transparent-full",i.SUCCESS_TRANSPARENT_SEMI="success-transparent-semi",i.CRITICAL="critical",i.CRITICAL_TRANSPARENT_Full="critical-transparent-full",i.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",i.WARNING="warning",i.WARNING_TRANSPARENT_FULL="warning-transparent-full",i.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",i.INFORMATION="information",i.INFORMATION_TRANSPARENT_FULL="information-transparent-full",i.INFORMATION_TRANSPARENT_SEMI="information-transparent-semi";let p=Object.entries(a).map(e=>{let[,n]=e;return n});(r=s||(s={})).CRITICAL="critical",r.INFORMATION="information",r.WARNING="warning",r.SUCCESS="success",Object.entries(s).map(e=>{let[,n]=e;return n})},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return l}});let l=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},6666:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},e:function(){return a}});let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],a=e=>({...e,link:"".concat("/mono/review/fix-base-64-link").concat(e.link)})},6264:function(e,n,t){"use strict";t.r(n);var l=t(2322),a=t(8429),s=t(3437);n.default=()=>(0,l.jsxs)(a.Z,{children:[(0,l.jsx)("h1",{children:" DBTab Examples "}),(0,l.jsxs)("div",{className:"example-list",children:["Default: ",(0,l.jsx)(s.Z,{children:"Test"}),(0,l.jsx)("p",{children:"active:"})," ",(0,l.jsx)(s.Z,{active:!0,children:"Test"}),(0,l.jsx)("p",{children:"active, content, id, key, label, name, title:"})," ",(0,l.jsx)(s.Z,{active:!0,content:"account",id:"account",label:"account",name:"account",title:"account",children:"Test"},"account"),(0,l.jsx)("p",{children:"content, id, key, label, name, title:"})," ",(0,l.jsx)(s.Z,{content:"account",id:"account",label:"account",name:"account",title:"account",children:"Test"},"account"),(0,l.jsx)("p",{children:"content, id, key, name, title:"})," ",(0,l.jsx)(s.Z,{content:"account",id:"account",name:"account",title:"account",children:"Test"},"account"),(0,l.jsx)("p",{children:"content, id, key, title:"})," ",(0,l.jsx)(s.Z,{content:"account",id:"account",title:"account",children:"Test"},"account"),(0,l.jsx)("p",{children:"id, key, title:"})," ",(0,l.jsx)(s.Z,{id:"account",title:"account",children:"Test"},"account"),(0,l.jsx)("p",{children:"id, title:"})," ",(0,l.jsx)(s.Z,{id:"account",title:"account",children:"Test"}),(0,l.jsx)("p",{children:"title:"})," ",(0,l.jsx)(s.Z,{title:"account",children:"Test"}),(0,l.jsx)("p",{children:"label:"})," ",(0,l.jsx)(s.Z,{label:"account",children:"Test"}),(0,l.jsx)("p",{children:"name:"})," ",(0,l.jsx)(s.Z,{name:"account",children:"Test"}),(0,l.jsx)("p",{children:"content:"})," ",(0,l.jsx)(s.Z,{content:"account",children:"Test"}),(0,l.jsx)("p",{children:"key:"})," ",(0,l.jsx)(s.Z,{children:"Test"},"account"),(0,l.jsx)("p",{children:"id:"})," ",(0,l.jsx)(s.Z,{id:"account",children:"Test"})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=7468)}),_N_E=e.O()}]);