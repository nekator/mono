(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8757],{83876:function(e,t,n){var i={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!n.o(i,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=i[e],a=t[0];return n.e(t[1]).then(function(){return n(a)})}a.keys=function(){return Object.keys(i)},a.id=83876,e.exports=a},72779:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()},87691:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header/examples",function(){return n(61650)}])},70969:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i=n(52322),a=n(77900),s=n(2784);let l=()=>{let e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var t;let i=(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.innerHTML)==="";i&&n(!0)},[]),[t,e]},o=e=>{let{children:t,element:n="div",...i}=e,[a,o]=l();return a?(0,s.createElement)(n,{...i,children:t}):(0,s.createElement)(n,{...i,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},r=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/refactor-corrected-link-focus-radius").concat(e.link)});n(60586);var c=n(5632);let u=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?u(e.children,t):[]})).map(e=>d(e)):[],b=e=>{let{children:t}=e,[n,l]=(0,s.useState)(!1),[d,b]=(0,s.useState)(!1),[h,j]=(0,s.useState)(!1),y=(0,c.useRouter)();return(0,s.useEffect)(()=>{y.query&&(l("true"===y.query.fullscreen),b("true"===y.query.noh1),j("true"===y.query.properties))},[y]),(0,i.jsxs)(o,{children:[y.isReady&&n&&(0,i.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(h?"is-properties":""),children:t}),y.isReady&&!n&&(0,i.jsxs)(a.rG,{children:[(0,i.jsxs)(a.ff,{slot:"header",children:[(0,i.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(a.Pm,{data:JSON.stringify(u(r,y.pathname))}),(0,i.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:t}),(0,i.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})};var h=b},32046:function(e,t,n){"use strict";var i=n(52322),a=n(2784),s=n(72779),l=n.n(s);let o=(0,a.forwardRef)(function(e,t){let[n,s]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,i.jsxs)("header",{role:"banner",ref:t,className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l()(t)}("db-header",e.className),children:[n?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:n})}):null,e.slotBrand,(0,i.jsx)("div",{className:"desktop-navigation",children:e.slotDesktopNavigation}),(0,i.jsx)("div",{className:"mobile-navigation",children:e.slotMobileNavigation}),(0,i.jsx)("div",{className:"meta-navigation",children:e.slotMetaNavigation}),e.children]})});t.Z=o},61650:function(e,t,n){"use strict";n.r(t);var i=n(52322),a=n(70969),s=n(32046);t.default=()=>(0,i.jsxs)(a.Z,{children:[(0,i.jsx)("h1",{children:" DBHeader Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"slotBrand:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{slotBrand:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotBrand, slotDesktopNavigation, slotMetaNavigation, slotMobileNavigation, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",slotBrand:"account",slotDesktopNavigation:"account",slotMetaNavigation:"account",slotMobileNavigation:"account",title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotDesktopNavigation, slotMetaNavigation, slotMobileNavigation, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",slotDesktopNavigation:"account",slotMetaNavigation:"account",slotMobileNavigation:"account",title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotMetaNavigation, slotMobileNavigation, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",slotMetaNavigation:"account",slotMobileNavigation:"account",title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, slotMetaNavigation, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",slotMetaNavigation:"account",title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, key, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",title:"account",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"describedbyid, id, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",id:"account",title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"slotDesktopNavigation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{slotDesktopNavigation:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"slotMobileNavigation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{slotMobileNavigation:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"slotMetaNavigation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{slotMetaNavigation:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{children:"Test"},"account")}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{describedbyid:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=87691)}),_N_E=e.O()}]);