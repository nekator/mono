(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{83876:function(e,n,t){var i={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(i)},a.id=83876,e.exports=a},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var c=typeof t;if("string"===c||"number"===c)e.push(t);else if(Array.isArray(t)){if(t.length){var l=a.apply(null,t);l&&e.push(l)}}else if("object"===c){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var d in t)i.call(t,d)&&t[d]&&e.push(d)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(t=(function(){return a}).apply(n,[]))&&(e.exports=t)}()},55190:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button/examples",function(){return t(86592)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var i=t(52322),a=t(77900),c=t(2784);let l=()=>{let e=(0,c.useRef)(null),[n,t]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var n;let i=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";i&&t(!0)},[]),[n,e]},d=e=>{let{children:n,element:t="div",...i}=e,[a,d]=l();return a?(0,c.createElement)(t,{...i,children:n}):(0,c.createElement)(t,{...i,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],s=e=>({...e,link:"".concat("/mono/review/refactor-scss-adaptive-variants").concat(e.link)});t(60586);var r=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>s(e)):[],h=e=>{let{children:n}=e,[t,l]=(0,c.useState)(!1),[s,h]=(0,c.useState)(!1),[j,x]=(0,c.useState)(!1),b=(0,r.useRouter)();return(0,c.useEffect)(()=>{b.query&&(l("true"===b.query.fullscreen),h("true"===b.query.noh1),x("true"===b.query.properties))},[b]),(0,i.jsxs)(d,{children:[b.isReady&&t&&(0,i.jsx)("div",{className:"".concat(s?"noh1":""," ").concat(j?"is-properties":""),children:n}),b.isReady&&!t&&(0,i.jsxs)(a.rG,{children:[(0,i.jsxs)(a.ff,{slot:"header",children:[(0,i.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(a.Pm,{data:JSON.stringify(u(o,b.pathname))}),(0,i.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})};var j=h},96889:function(e,n,t){"use strict";var i=t(52322),a=t(2784),c=t(72779),l=t.n(c);let d=(0,a.forwardRef)(function(e,n){function t(e){return!!(e&&"_"!==e&&"none"!==e)}let[c,d]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,i.jsxs)("button",{ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return l()(n)}("db-button",e.className,{"is-icon-text-replace":t(e.icon)&&e.noText}),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":t(e.icon)?e.icon:void 0,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[c?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:c})}):null,e.children]})});n.Z=d},86592:function(e,n,t){"use strict";t.r(n);var i=t(52322),a=t(70969),c=t(96889);n.default=()=>(0,i.jsxs)(a.Z,{children:[(0,i.jsx)("h1",{children:" DBButton Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"ariaexpanded:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{ariaexpanded:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"ariaexpanded, ariapressed, disabled, icon, id, key, label, name, noText, onClick, size, state, title, type, value, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{ariaexpanded:!0,ariapressed:!0,disabled:!0,icon:"account",id:"account",label:"account",name:"account",noText:!0,onClick:e=>console.log(e),size:"small",state:"loading",title:"account",type:"reset",value:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"ariapressed, disabled, icon, id, key, label, name, noText, onClick, size, state, title, type, value, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{ariapressed:!0,disabled:!0,icon:"account",id:"account",label:"account",name:"account",noText:!0,onClick:e=>console.log(e),size:"small",state:"loading",title:"account",type:"reset",value:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"disabled, icon, id, key, label, name, noText, onClick, size, state, title, type, value, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{disabled:!0,icon:"account",id:"account",label:"account",name:"account",noText:!0,onClick:e=>console.log(e),size:"small",state:"loading",title:"account",type:"reset",value:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, label, name, noText, onClick, size, state, title, type, value, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",id:"account",label:"account",name:"account",noText:!0,onClick:e=>console.log(e),size:"small",state:"loading",title:"account",type:"reset",value:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, label, name, onClick, size, state, title, type, value, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",id:"account",label:"account",name:"account",onClick:e=>console.log(e),size:"small",state:"loading",title:"account",type:"reset",value:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, name, onClick, size, state, title, type, value, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",id:"account",name:"account",onClick:e=>console.log(e),size:"small",state:"loading",title:"account",type:"reset",value:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, onClick, size, state, title, type, value, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),size:"small",state:"loading",title:"account",type:"reset",value:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, onClick, size, state, title, value, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),size:"small",state:"loading",title:"account",value:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, onClick, size, state, title, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),size:"small",state:"loading",title:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, onClick, size, title, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),size:"small",title:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, onClick, title, variant, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",variant:"primary",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, onClick, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",variant:"primary",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, onClick, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, onClick, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, onClick, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, onClick:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",onClick:e=>console.log(e),children:"Test"})}),(0,i.jsx)("dt",{children:"icon:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{icon:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"ariapressed:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{ariapressed:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"disabled:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{disabled:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"noText:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{noText:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"label:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{label:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"name:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{name:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"type:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{type:"reset",children:"Test"})}),(0,i.jsx)("dt",{children:"value:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{value:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"state:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{state:"loading",children:"Test"})}),(0,i.jsx)("dt",{children:"size:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{size:"small",children:"Test"})}),(0,i.jsx)("dt",{children:"width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{width:"auto",children:"Test"})}),(0,i.jsx)("dt",{children:"variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{variant:"primary",children:"Test"})}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{children:"Test"},"account")}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"onClick:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(c.Z,{onClick:e=>console.log(e),children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=55190)}),_N_E=e.O()}]);