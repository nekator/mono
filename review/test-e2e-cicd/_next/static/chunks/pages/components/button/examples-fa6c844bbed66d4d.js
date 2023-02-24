(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{3876:function(e,n,t){var l={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function i(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],i=n[0];return t.e(n[1]).then(function(){return t(i)})}i.keys=function(){return Object.keys(l)},i.id=3876,e.exports=i},5190:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button/examples",function(){return t(1363)}])},5554:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var l=t(2322),i=t(8982),s=t(2784);let o=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},a=e=>{let{children:n,element:t="div",...l}=e,[i,a]=o();return i?(0,s.createElement)(t,{...l,children:n}):(0,s.createElement)(t,{...l,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var c=t(1092);t(8155);var r=t(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,c.e)(e)):[],u=e=>{let{children:n}=e,t=(0,r.useRouter)();return(0,l.jsx)(a,{children:(0,l.jsxs)(i.rG,{children:[(0,l.jsxs)(i.ff,{slot:"header",children:[(0,l.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(i.Pm,{data:JSON.stringify(d(c.Z,t.pathname))}),(0,l.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(i.fw,{slot:"footer",copyright:!0})]})})};var h=u},2038:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var l=t(2322),i=t(2784),s=t(4237);function o(e){let[n,t]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&t(e.stylePath)},[]),(0,l.jsxs)("button",{type:e.type,disabled:e.disabled,"aria-label":e.text,className:"db-button"+(e.className?" "+e.className:"")+(e.icon&&!e.icntxt?" is-icon-text-replace":""),"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,onClick:n=>{e.onClick&&e.onClick(n)},children:[n?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:n})}):null,(0,l.jsx)(s.P,{icon:e.icon,icntxt:e.icntxt}),e.children]})}},7754:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var l=t(2322),i=t(2784);function s(e){let[n,t]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&t(e.stylePath)},[]),(0,l.jsxs)("span",{"aria-hidden":"true",className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[n?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})}},4237:function(e,n,t){"use strict";t.d(n,{P:function(){return l.Z}});var l=t(7754)},1092:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},e:function(){return i}});let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],i=e=>({...e,link:"".concat("/mono/review/test-e2e-cicd").concat(e.link)})},1363:function(e,n,t){"use strict";t.r(n);var l=t(2322),i=t(5554),s=t(2038);n.default=()=>(0,l.jsxs)(i.Z,{children:[(0,l.jsx)("h1",{children:" DBButton Examples "}),(0,l.jsxs)("div",{className:"example-list",children:["Default: ",(0,l.jsx)(s.Z,{children:"Test"}),(0,l.jsx)("p",{children:"disabled:"})," ",(0,l.jsx)(s.Z,{disabled:!0,children:"Test"}),(0,l.jsx)("p",{children:"disabled, icntxt, icon, onClick, size, state, text, title, type, variant, width:"})," ",(0,l.jsx)(s.Z,{disabled:!0,icntxt:!0,icon:"account",onClick:e=>console.log(e),size:"small",state:"loading",text:"account",title:"account",type:"reset",variant:"secondary",width:"full",children:"Test"}),(0,l.jsx)("p",{children:"icntxt, icon, onClick, size, state, text, title, type, variant, width:"})," ",(0,l.jsx)(s.Z,{icntxt:!0,icon:"account",onClick:e=>console.log(e),size:"small",state:"loading",text:"account",title:"account",type:"reset",variant:"secondary",width:"full",children:"Test"}),(0,l.jsx)("p",{children:"icntxt, onClick, size, state, text, title, type, variant, width:"})," ",(0,l.jsx)(s.Z,{icntxt:!0,onClick:e=>console.log(e),size:"small",state:"loading",text:"account",title:"account",type:"reset",variant:"secondary",width:"full",children:"Test"}),(0,l.jsx)("p",{children:"onClick, size, state, text, title, type, variant, width:"})," ",(0,l.jsx)(s.Z,{onClick:e=>console.log(e),size:"small",state:"loading",text:"account",title:"account",type:"reset",variant:"secondary",width:"full",children:"Test"}),(0,l.jsx)("p",{children:"onClick, size, text, title, type, variant, width:"})," ",(0,l.jsx)(s.Z,{onClick:e=>console.log(e),size:"small",text:"account",title:"account",type:"reset",variant:"secondary",width:"full",children:"Test"}),(0,l.jsx)("p",{children:"onClick, text, title, type, variant, width:"})," ",(0,l.jsx)(s.Z,{onClick:e=>console.log(e),text:"account",title:"account",type:"reset",variant:"secondary",width:"full",children:"Test"}),(0,l.jsx)("p",{children:"onClick, title, type, variant, width:"})," ",(0,l.jsx)(s.Z,{onClick:e=>console.log(e),title:"account",type:"reset",variant:"secondary",width:"full",children:"Test"}),(0,l.jsx)("p",{children:"onClick, title, variant, width:"})," ",(0,l.jsx)(s.Z,{onClick:e=>console.log(e),title:"account",variant:"secondary",width:"full",children:"Test"}),(0,l.jsx)("p",{children:"onClick, title, variant:"})," ",(0,l.jsx)(s.Z,{onClick:e=>console.log(e),title:"account",variant:"secondary",children:"Test"}),(0,l.jsx)("p",{children:"onClick, title:"})," ",(0,l.jsx)(s.Z,{onClick:e=>console.log(e),title:"account",children:"Test"}),(0,l.jsx)("p",{children:"onClick:"})," ",(0,l.jsx)(s.Z,{onClick:e=>console.log(e),children:"Test"}),(0,l.jsx)("p",{children:"icon:"})," ",(0,l.jsx)(s.Z,{icon:"account",children:"Test"}),(0,l.jsx)("p",{children:"icntxt:"})," ",(0,l.jsx)(s.Z,{icntxt:!0,children:"Test"}),(0,l.jsx)("p",{children:"state:"})," ",(0,l.jsx)(s.Z,{state:"loading",children:"Test"}),(0,l.jsx)("p",{children:"size:"})," ",(0,l.jsx)(s.Z,{size:"small",children:"Test"}),(0,l.jsx)("p",{children:"text:"})," ",(0,l.jsx)(s.Z,{text:"account",children:"Test"}),(0,l.jsx)("p",{children:"type:"})," ",(0,l.jsx)(s.Z,{type:"reset",children:"Test"}),(0,l.jsx)("p",{children:"width:"})," ",(0,l.jsx)(s.Z,{width:"full",children:"Test"}),(0,l.jsx)("p",{children:"variant:"})," ",(0,l.jsx)(s.Z,{variant:"secondary",children:"Test"}),(0,l.jsx)("p",{children:"title:"})," ",(0,l.jsx)(s.Z,{title:"account",children:"Test"})]})]})}},function(e){e.O(0,[2832,9774,2888,179],function(){return e(e.s=5190)}),_N_E=e.O()}]);