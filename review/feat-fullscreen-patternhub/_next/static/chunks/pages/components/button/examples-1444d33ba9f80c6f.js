(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{3876:function(e,n,t){var l={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function i(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],i=n[0];return t.e(n[1]).then(function(){return t(i)})}i.keys=function(){return Object.keys(l)},i.id=3876,e.exports=i},5190:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button/examples",function(){return t(6592)}])},8429:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var l=t(2322),i=t(7900),c=t(2784);let s=()=>{let e=(0,c.useRef)(null),[n,t]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},o=e=>{let{children:n,element:t="div",...l}=e,[i,o]=s();return i?(0,c.createElement)(t,{...l,children:n}):(0,c.createElement)(t,{...l,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var a=t(6666);t(586);var d=t(5632);let r=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?r(e.children,n):[]})).map(e=>(0,a.e)(e)):[],u=e=>{let{children:n}=e,[t,s]=(0,c.useState)(!1),[u,h]=(0,c.useState)(!1),x=(0,d.useRouter)();return(0,c.useEffect)(()=>{x.query&&(s("true"===x.query.fullscreen),h("true"===x.query.noh1))},[x]),(0,l.jsxs)(o,{children:[x.isReady&&t&&(0,l.jsx)("div",{className:u?"noh1":"",children:n}),x.isReady&&!t&&(0,l.jsxs)(i.rG,{children:[(0,l.jsxs)(i.ff,{slot:"header",children:[(0,l.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(i.Pm,{data:JSON.stringify(r(a.Z,x.pathname))}),(0,l.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(i.fw,{slot:"footer",copyright:!0})]})]})};var h=u},6889:function(e,n,t){"use strict";var l=t(2322),i=t(2784),c=t(6510);let s=(0,i.forwardRef)(function(e,n){function t(e){return e&&"_"!==e&&"none"!==e}let[s,o]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&o(e.stylePath)},[]),(0,l.jsxs)("button",{ref:n,type:e.type,disabled:e.disabled,"aria-label":e.label,className:"db-button"+(e.className?" "+e.className:"")+(t(e.icon)&&!e.icntxt?" is-icon-text-replace":""),"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,onClick:n=>{e.onClick&&e.onClick(n)},children:[s?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:s})}):null,t(e.icon)?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.P,{icon:e.icon,icntxt:e.icntxt})}):null,e.children,e.text]})});n.Z=s},648:function(e,n,t){"use strict";var l=t(2322),i=t(2784);let c=(0,i.forwardRef)(function(e,n){let[t,c]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,l.jsxs)("span",{"aria-hidden":"true",ref:n,className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[t?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=c},6510:function(e,n,t){"use strict";t.d(n,{P:function(){return l.Z}});var l=t(648)},6666:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},e:function(){return i}});let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"HTML",link:"/showcases/html"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],i=e=>({...e,link:"".concat("/mono/review/feat-fullscreen-patternhub").concat(e.link)})},6592:function(e,n,t){"use strict";t.r(n);var l=t(2322),i=t(8429),c=t(6889);n.default=()=>(0,l.jsxs)(i.Z,{children:[(0,l.jsx)("h1",{children:" DBButton Examples "}),(0,l.jsxs)("dl",{className:"example-list",children:[(0,l.jsx)("dt",{children:"Default:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{children:"Test"})}),(0,l.jsx)("dt",{children:"disabled:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{disabled:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"disabled, icntxt, icon, id, label, onClick, size, state, text, title, type, variant, width:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{disabled:!0,icntxt:!0,icon:"account",id:"account",label:"account",onClick:e=>console.log(e),size:"small",state:"loading",text:"account",title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"})}),(0,l.jsx)("dt",{children:"icntxt, icon, id, label, onClick, size, state, text, title, type, variant, width:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icntxt:!0,icon:"account",id:"account",label:"account",onClick:e=>console.log(e),size:"small",state:"loading",text:"account",title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"})}),(0,l.jsx)("dt",{children:"icon, id, label, onClick, size, state, text, title, type, variant, width:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",id:"account",label:"account",onClick:e=>console.log(e),size:"small",state:"loading",text:"account",title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"})}),(0,l.jsx)("dt",{children:"icon, id, label, onClick, size, text, title, type, variant, width:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",id:"account",label:"account",onClick:e=>console.log(e),size:"small",text:"account",title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"})}),(0,l.jsx)("dt",{children:"icon, id, label, onClick, text, title, type, variant, width:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",id:"account",label:"account",onClick:e=>console.log(e),text:"account",title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"})}),(0,l.jsx)("dt",{children:"icon, id, label, onClick, title, type, variant, width:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",id:"account",label:"account",onClick:e=>console.log(e),title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"})}),(0,l.jsx)("dt",{children:"icon, id, onClick, title, type, variant, width:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"})}),(0,l.jsx)("dt",{children:"icon, id, onClick, title, variant, width:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",variant:"primary",width:"auto",children:"Test"})}),(0,l.jsx)("dt",{children:"icon, id, onClick, title, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",variant:"primary",children:"Test"})}),(0,l.jsx)("dt",{children:"icon, id, onClick, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"icon, onClick, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"icon, onClick:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",onClick:e=>console.log(e),children:"Test"})}),(0,l.jsx)("dt",{children:"icon:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"icntxt:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icntxt:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"state:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{state:"loading",children:"Test"})}),(0,l.jsx)("dt",{children:"size:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{size:"small",children:"Test"})}),(0,l.jsx)("dt",{children:"text:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{text:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"label:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{label:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"type:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{type:"reset",children:"Test"})}),(0,l.jsx)("dt",{children:"width:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{width:"auto",children:"Test"})}),(0,l.jsx)("dt",{children:"variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{variant:"primary",children:"Test"})}),(0,l.jsx)("dt",{children:"id:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{id:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"onClick:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{onClick:e=>console.log(e),children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=5190)}),_N_E=e.O()}]);