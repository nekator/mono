(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{83876:function(e,t,n){var i={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function c(e){if(!n.o(i,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=i[e],c=t[0];return n.e(t[1]).then(function(){return n(c)})}c.keys=function(){return Object.keys(i)},c.id=83876,e.exports=c},55190:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button/examples",function(){return n(86592)}])},70969:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var i=n(52322),c=n(77900),l=n(2784);let a=()=>{let e=(0,l.useRef)(null),[t,n]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var t;let i=(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.innerHTML)==="";i&&n(!0)},[]),[t,e]},d=e=>{let{children:t,element:n="div",...i}=e,[c,d]=a();return c?(0,l.createElement)(n,{...i,children:t}):(0,l.createElement)(n,{...i,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],o=e=>({...e,link:"".concat("/mono/review/docs-foundations-components").concat(e.link)});n(60586);var r=n(5632);let u=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?u(e.children,t):[]})).map(e=>o(e)):[],h=e=>{let{children:t}=e,[n,a]=(0,l.useState)(!1),[o,h]=(0,l.useState)(!1),[j,x]=(0,l.useState)(!1),b=(0,r.useRouter)();return(0,l.useEffect)(()=>{b.query&&(a("true"===b.query.fullscreen),h("true"===b.query.noh1),x("true"===b.query.properties))},[b]),(0,i.jsxs)(d,{children:[b.isReady&&n&&(0,i.jsx)("div",{className:"".concat(o?"noh1":""," ").concat(j?"is-properties":""),children:t}),b.isReady&&!n&&(0,i.jsxs)(c.rG,{children:[(0,i.jsxs)(c.ff,{slot:"header",children:[(0,i.jsx)(c.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(c.Pm,{data:JSON.stringify(u(s,b.pathname))}),(0,i.jsx)(c.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:t}),(0,i.jsx)(c.fw,{slot:"footer",copyright:!0})]})]})};var j=h},96889:function(e,t,n){"use strict";var i=n(52322),c=n(2784),l=n(16510);let a=(0,c.forwardRef)(function(e,t){function n(e){return e&&"_"!==e&&"none"!==e}let[a,d]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,i.jsxs)("button",{ref:t,type:e.type,disabled:e.disabled,"aria-label":e.label,className:"db-button"+(e.className?" "+e.className:"")+(n(e.icon)&&!e.icntxt?" is-icon-text-replace":""),"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,onClick:t=>{e.onClick&&e.onClick(t)},children:[a?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:a})}):null,n(e.icon)?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.P,{icon:e.icon,icntxt:e.icntxt})}):null,e.children,e.text]})});t.Z=a},648:function(e,t,n){"use strict";var i=n(52322),c=n(2784);let l=(0,c.forwardRef)(function(e,t){let[n,l]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,i.jsxs)("span",{"aria-hidden":"true",ref:t,className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[n?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})});t.Z=l},16510:function(e,t,n){"use strict";n.d(t,{P:function(){return i.Z}});var i=n(648)},86592:function(e,t,n){"use strict";n.r(t);var i=n(52322),c=n(70969),l=n(96889);t.default=()=>(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("h1",{children:" DBButton Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"disabled:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{disabled:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"disabled, icntxt, icon, id, key, label, onClick, size, state, text, title, type, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{disabled:!0,icntxt:!0,icon:"account",id:"account",label:"account",onClick:e=>console.log(e),size:"small",state:"loading",text:"account",title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icntxt, icon, id, key, label, onClick, size, state, text, title, type, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icntxt:!0,icon:"account",id:"account",label:"account",onClick:e=>console.log(e),size:"small",state:"loading",text:"account",title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, label, onClick, size, state, text, title, type, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",id:"account",label:"account",onClick:e=>console.log(e),size:"small",state:"loading",text:"account",title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, label, onClick, size, text, title, type, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",id:"account",label:"account",onClick:e=>console.log(e),size:"small",text:"account",title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, label, onClick, text, title, type, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",id:"account",label:"account",onClick:e=>console.log(e),text:"account",title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, label, onClick, title, type, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",id:"account",label:"account",onClick:e=>console.log(e),title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, onClick, title, type, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",type:"reset",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, onClick, title, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, onClick, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",variant:"primary",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, onClick, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, onClick, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, onClick, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, onClick:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",onClick:e=>console.log(e),children:"Test"})}),(0,i.jsx)("dt",{children:"icon:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icon:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"icntxt:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{icntxt:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"state:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{state:"loading",children:"Test"})}),(0,i.jsx)("dt",{children:"size:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{size:"small",children:"Test"})}),(0,i.jsx)("dt",{children:"text:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{text:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"label:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{label:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"type:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{type:"reset",children:"Test"})}),(0,i.jsx)("dt",{children:"width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{width:"auto",children:"Test"})}),(0,i.jsx)("dt",{children:"variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{variant:"primary",children:"Test"})}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{children:"Test"},"account")}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"onClick:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(l.Z,{onClick:e=>console.log(e),children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=55190)}),_N_E=e.O()}]);