(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8757],{83876:function(e,n,t){var i={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(i)},a.id=83876,e.exports=a},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var l=a.apply(null,t);l&&e.push(l)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var r in t)i.call(t,r)&&t[r]&&e.push(r)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(t=(function(){return a}).apply(n,[]))&&(e.exports=t)}()},87691:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header/examples",function(){return t(61650)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var i=t(52322),a=t(77900),s=t(2784);let l=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let i=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";i&&t(!0)},[]),[n,e]},r=e=>{let{children:n,element:t="div",...i}=e,[a,r]=l();return a?(0,s.createElement)(t,{...i,children:n}):(0,s.createElement)(t,{...i,ref:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},d=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],o=e=>({...e,link:"".concat("/mono/review/fix-issues-from-dependencies").concat(e.link)});t(60586);var c=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>o(e)):[],b=e=>{let{children:n}=e,[t,l]=(0,s.useState)(!1),[o,b]=(0,s.useState)(!1),[h,j]=(0,s.useState)(!1),y=(0,c.useRouter)();return(0,s.useEffect)(()=>{y.query&&(l("true"===y.query.fullscreen),b("true"===y.query.noh1),j("true"===y.query.properties))},[y]),(0,i.jsxs)(r,{children:[y.isReady&&t&&(0,i.jsx)("div",{className:"".concat(o?"noh1":""," ").concat(h?"is-properties":""),children:n}),y.isReady&&!t&&(0,i.jsxs)(a.rG,{children:[(0,i.jsxs)(a.ff,{slot:"header",children:[(0,i.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(a.Pm,{data:JSON.stringify(u(d,y.pathname))}),(0,i.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})};var h=b},32046:function(e,n,t){"use strict";var i=t(52322),a=t(2784),s=t(72779),l=t.n(s);let r=(0,a.forwardRef)(function(e,n){let[t,s]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,i.jsxs)("header",{role:"banner",ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return l()(n)}("db-header",e.className),children:[t?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:t})}):null,e.slotBrand,(0,i.jsx)("div",{className:"desktop-navigation",children:e.slotDesktopNavigation}),(0,i.jsx)("div",{className:"mobile-navigation",children:e.slotMobileNavigation}),(0,i.jsx)("div",{className:"meta-navigation",children:e.slotMetaNavigation}),e.children]})});n.Z=r},61650:function(e,n,t){"use strict";t.r(n);var i=t(52322),a=t(70969),s=t(32046);n.default=()=>(0,i.jsxs)(a.Z,{children:[(0,i.jsx)("h1",{children:" DBHeader Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"slotBrand:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{slotBrand:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotBrand, slotDesktopNavigation, slotMetaNavigation, slotMobileNavigation, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",slotBrand:"account",slotDesktopNavigation:"account",slotMetaNavigation:"account",slotMobileNavigation:"account",title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotDesktopNavigation, slotMetaNavigation, slotMobileNavigation, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",slotDesktopNavigation:"account",slotMetaNavigation:"account",slotMobileNavigation:"account",title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotMetaNavigation, slotMobileNavigation, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",slotMetaNavigation:"account",slotMobileNavigation:"account",title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotMetaNavigation, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",slotMetaNavigation:"account",title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"slotDesktopNavigation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{slotDesktopNavigation:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"slotMobileNavigation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{slotMobileNavigation:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"slotMetaNavigation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{slotMetaNavigation:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{children:"Test"},"account")}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=87691)}),_N_E=e.O()}]);