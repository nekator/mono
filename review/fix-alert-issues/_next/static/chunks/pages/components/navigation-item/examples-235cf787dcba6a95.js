(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8186],{83876:function(e,n,t){var i={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function c(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],c=n[0];return t.e(n[1]).then(function(){return t(c)})}c.keys=function(){return Object.keys(i)},c.id=83876,e.exports=c},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function c(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var d=c.apply(null,t);d&&e.push(d)}}else if("object"===o){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)i.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0!==(t=(function(){return c}).apply(n,[]))&&(e.exports=t)}()},94328:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item/examples",function(){return t(44495)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var i=t(52322),c=t(77900),o=t(2784);let d=()=>{let e=(0,o.useRef)(null),[n,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let i=(null===(n=e?.current)||void 0===n?void 0:n.innerHTML)==="";i&&t(!0)},[]),[n,e]};var l=e=>{let{children:n,element:t="div",...i}=e,[c,l]=d();return c?(0,o.createElement)(t,{...i,children:n}):(0,o.createElement)(t,{...i,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let a=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],r=e=>({...e,link:"".concat("/mono/review/fix-alert-issues").concat(e.link)});t(60586);var s=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>r(e)):[];var h=e=>{let{children:n}=e,[t,d]=(0,o.useState)(!1),[r,h]=(0,o.useState)(!1),[b,j]=(0,o.useState)(!1),x=(0,s.useRouter)();return(0,o.useEffect)(()=>{x.query&&(d("true"===x.query.fullscreen),h("true"===x.query.noh1),j("true"===x.query.properties))},[x]),(0,i.jsxs)(l,{children:[x.isReady&&t&&(0,i.jsx)("div",{className:"".concat(r?"noh1":""," ").concat(b?"is-properties":""),children:n}),x.isReady&&!t&&(0,i.jsxs)(c.rG,{children:[(0,i.jsxs)(c.ff,{slot:"header",children:[(0,i.jsx)(c.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(c.Pm,{data:JSON.stringify(u(a,x.pathname))}),(0,i.jsx)(c.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(c.fw,{slot:"footer",copyright:!0})]})]})}},21191:function(e,n,t){"use strict";var i=t(52322),c=t(2784),o=t(72779),d=t.n(o),l=t(7070);let a=(0,c.forwardRef)(function(e,n){let[t,o]=(0,c.useState)(()=>!1),[a,r]=(0,c.useState)(()=>!1),[s,u]=(0,c.useState)(()=>!1),[h,b]=(0,c.useState)(()=>"sub-navigation-"+(0,l.V)());function j(e){return!!(e&&"_"!==e&&"none"!==e)}let[x,f]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{o(!0),e.stylePath&&f(e.stylePath)},[]),(0,c.useEffect)(()=>{if(t&&document&&h){var e;let n=null===(e=document)||void 0===e?void 0:e.getElementById(h);if(n){let e=n.children;(null==e?void 0:e.length)>0?r(!0):u(!0)}}},[t]),(0,i.jsxs)("li",{ref:n,role:a?"button":"","aria-haspopup":a,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return d()(n)}("db-navigation-item",e.className),"data-width":e.width,"data-icon":j(e.icon)?e.icon:void 0,"data-icon-after":j(e.iconAfter)?e.iconAfter:void 0,"aria-current":e.active?"page":void 0,"data-disabled":e.disabled,onClick:n=>{e.onClick&&e.onClick(n)},children:[x?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:x})}):null,e.children,s?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("menu",{className:"db-sub-navigation",id:h,children:e.slotSubNavigation})}):null]})});n.Z=a},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return i}});let i=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},44495:function(e,n,t){"use strict";t.r(n);var i=t(52322),c=t(70969),o=t(21191);n.default=()=>(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("h1",{children:" DBNavigationItem Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"active:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{active:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"active, describedbyid, disabled, icon, iconAfter, id, key, onClick, slotSubNavigation, tabIndex, title, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{active:!0,describedbyid:"account",disabled:!0,icon:"account",iconAfter:"account",id:"account",onClick:e=>console.log(e),slotSubNavigation:"account",tabIndex:100,title:"account",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, disabled, icon, iconAfter, id, key, onClick, slotSubNavigation, tabIndex, title, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{describedbyid:"account",disabled:!0,icon:"account",iconAfter:"account",id:"account",onClick:e=>console.log(e),slotSubNavigation:"account",tabIndex:100,title:"account",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, icon, iconAfter, id, key, onClick, slotSubNavigation, tabIndex, title, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{describedbyid:"account",icon:"account",iconAfter:"account",id:"account",onClick:e=>console.log(e),slotSubNavigation:"account",tabIndex:100,title:"account",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, icon, iconAfter, id, key, onClick, tabIndex, title, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{describedbyid:"account",icon:"account",iconAfter:"account",id:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, iconAfter, id, key, onClick, tabIndex, title, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{icon:"account",iconAfter:"account",id:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, iconAfter, key, onClick, tabIndex, title, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{icon:"account",iconAfter:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",width:"auto",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, iconAfter, onClick, tabIndex, title, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{icon:"account",iconAfter:"account",onClick:e=>console.log(e),tabIndex:100,title:"account",width:"auto",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, iconAfter, onClick, title, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{icon:"account",iconAfter:"account",onClick:e=>console.log(e),title:"account",width:"auto",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, iconAfter, onClick, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{icon:"account",iconAfter:"account",onClick:e=>console.log(e),width:"auto",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, iconAfter, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{icon:"account",iconAfter:"account",width:"auto",children:"Test"})}),(0,i.jsx)("dt",{children:"iconAfter, width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{iconAfter:"account",width:"auto",children:"Test"})}),(0,i.jsx)("dt",{children:"width:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{width:"auto",children:"Test"})}),(0,i.jsx)("dt",{children:"disabled:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{disabled:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"slotSubNavigation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{slotSubNavigation:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{describedbyid:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{children:"Test"},"account")}),(0,i.jsx)("dt",{children:"tabIndex:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{tabIndex:100,children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"onClick:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{onClick:e=>console.log(e),children:"Test"})}),(0,i.jsx)("dt",{children:"icon:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{icon:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"iconAfter:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(o.Z,{iconAfter:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=94328)}),_N_E=e.O()}]);