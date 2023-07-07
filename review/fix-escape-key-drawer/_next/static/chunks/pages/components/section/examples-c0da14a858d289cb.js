(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9907],{83876:function(e,n,t){var i={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],r=n[0];return t.e(n[1]).then(function(){return t(r)})}r.keys=function(){return Object.keys(i)},r.id=83876,e.exports=r},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var l=r.apply(null,t);l&&e.push(l)}}else if("object"===a){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var d in t)i.call(t,d)&&t[d]&&e.push(d)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(t=(function(){return r}).apply(n,[]))&&(e.exports=t)}()},77640:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/section/examples",function(){return t(49584)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i=t(52322),r=t(77900),a=t(2784);let l=()=>{let e=(0,a.useRef)(null),[n,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var n;let i=(null===(n=e?.current)||void 0===n?void 0:n.innerHTML)==="";i&&t(!0)},[]),[n,e]};var d=e=>{let{children:n,element:t="div",...i}=e,[r,d]=l();return r?(0,a.createElement)(t,{...i,children:n}):(0,a.createElement)(t,{...i,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/fix-escape-key-drawer").concat(e.link)});t(60586);var o=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>c(e)):[];var b=e=>{let{children:n}=e,[t,l]=(0,a.useState)(!1),[c,b]=(0,a.useState)(!1),[h,j]=(0,a.useState)(!1),x=(0,o.useRouter)();return(0,a.useEffect)(()=>{x.query&&(l("true"===x.query.fullscreen),b("true"===x.query.noh1),j("true"===x.query.properties))},[x]),(0,i.jsxs)(d,{children:[x.isReady&&t&&(0,i.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(h?"is-properties":""),children:n}),x.isReady&&!t&&(0,i.jsxs)(r.rG,{children:[(0,i.jsxs)(r.ff,{slot:"header",children:[(0,i.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(r.Pm,{data:JSON.stringify(u(s,x.pathname))}),(0,i.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})}},67014:function(e,n,t){"use strict";var i=t(52322),r=t(2784),a=t(72779),l=t.n(a);let d=(0,r.forwardRef)(function(e,n){let[t,a]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,i.jsxs)("section",{ref:n,"data-size":e.size||"medium",className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return l()(n)}("db-section",e.className),children:[t?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:t})}):null,(0,i.jsx)("div",{"data-variant":e.variant,children:e.children})]})});n.Z=d},49584:function(e,n,t){"use strict";t.r(n);var i=t(52322),r=t(70969),a=t(67014);n.default=()=>(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("h1",{children:" DBSection Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"size:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{size:"medium",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid, id, key, size, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",id:"account",size:"medium",tabIndex:100,title:"account",variant:"large",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",variant:"large",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"id, key, tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"key, tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{tabIndex:100,title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"tabIndex, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{tabIndex:100,title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{variant:"large",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{describedbyid:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{children:"Test"},"account")}),(0,i.jsx)("dt",{children:"tabIndex:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(a.Z,{tabIndex:100,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=77640)}),_N_E=e.O()}]);