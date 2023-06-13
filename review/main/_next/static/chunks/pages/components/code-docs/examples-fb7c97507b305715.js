(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6793],{83876:function(e,n,t){var d={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function l(e){if(!t.o(d,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=d[e],l=n[0];return t.e(n[1]).then(function(){return t(l)})}l.keys=function(){return Object.keys(d)},l.id=83876,e.exports=l},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var d={}.hasOwnProperty;function l(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var i=l.apply(null,t);i&&e.push(i)}}else if("object"===a){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var r in t)d.call(t,r)&&t[r]&&e.push(r)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0!==(t=(function(){return l}).apply(n,[]))&&(e.exports=t)}()},74212:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/code-docs/examples",function(){return t(81442)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var d=t(52322),l=t(77900),a=t(2784);let i=()=>{let e=(0,a.useRef)(null),[n,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var n;let d=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";d&&t(!0)},[]),[n,e]};var r=e=>{let{children:n,element:t="div",...d}=e,[l,r]=i();return l?(0,a.createElement)(t,{...d,children:n}):(0,a.createElement)(t,{...d,ref:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/main").concat(e.link)});t(60586);var o=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>c(e)):[];var b=e=>{let{children:n}=e,[t,i]=(0,a.useState)(!1),[c,b]=(0,a.useState)(!1),[h,j]=(0,a.useState)(!1),x=(0,o.useRouter)();return(0,a.useEffect)(()=>{x.query&&(i("true"===x.query.fullscreen),b("true"===x.query.noh1),j("true"===x.query.properties))},[x]),(0,d.jsxs)(r,{children:[x.isReady&&t&&(0,d.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(h?"is-properties":""),children:n}),x.isReady&&!t&&(0,d.jsxs)(l.rG,{children:[(0,d.jsxs)(l.ff,{slot:"header",children:[(0,d.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,d.jsx)(l.Pm,{data:JSON.stringify(u(s,x.pathname))}),(0,d.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,d.jsx)("div",{children:n}),(0,d.jsx)(l.fw,{slot:"footer",copyright:!0})]})]})}},54728:function(e,n,t){"use strict";var d=t(52322),l=t(2784),a=t(72779),i=t.n(a);let r=(0,l.forwardRef)(function(e,n){let[t,a]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,d.jsxs)("div",{ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return i()(n)}("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:t})}):null,e.imgSrc?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});n.Z=r},34786:function(e,n,t){"use strict";t.d(n,{f:function(){return d.Z}});var d=t(54728)},63172:function(e,n,t){"use strict";var d=t(52322),l=t(2784),a=t(34786),i=t(72779),r=t.n(i);let s={copyLabel:"Copy Code",hideCodeLabel:"Hide Code",showCodeLabel:"Show Code"},c=(0,l.forwardRef)(function(e,n){var t,i;let[c,o]=(0,l.useState)(()=>!1),[u,b]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&b(e.stylePath)},[]),(0,d.jsxs)(a.f,{elevation:"none",ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return r()(n)}("db-code-docs",e.className),children:[u?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:u})}):null,e.children,(0,d.jsxs)("details",{className:"code-details",onToggle:e=>void o(!c),children:[(0,d.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:c?null!==(t=e.hideCodeLabel)&&void 0!==t?t:s.hideCodeLabel:null!==(i=e.showCodeLabel)&&void 0!==i?i:s.showCodeLabel}),(0,d.jsx)("div",{className:"db-ui-functional code",children:e.slotCode})]})]})});n.Z=c},81442:function(e,n,t){"use strict";t.r(n);var d=t(52322),l=t(70969),a=t(63172);n.default=()=>(0,d.jsxs)(l.Z,{children:[(0,d.jsx)("h1",{children:" DBCodeDocs Examples "}),(0,d.jsxs)("dl",{className:"example-list",children:[(0,d.jsx)("dt",{children:"Default:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{children:"Test"})}),(0,d.jsx)("dt",{children:"showCodeLabel:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{showCodeLabel:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"describedbyid, hideCodeLabel, id, key, showCodeLabel, slotCode, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{describedbyid:"account",hideCodeLabel:"account",id:"account",showCodeLabel:"account",slotCode:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"describedbyid, hideCodeLabel, id, key, slotCode, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{describedbyid:"account",hideCodeLabel:"account",id:"account",slotCode:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"describedbyid, id, key, slotCode, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{describedbyid:"account",id:"account",slotCode:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"id, key, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"key, tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{tabIndex:100,title:"account",children:"Test"},"account")}),(0,d.jsx)("dt",{children:"tabIndex, title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{tabIndex:100,title:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"title:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{title:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"hideCodeLabel:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{hideCodeLabel:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"slotCode:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{slotCode:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"describedbyid:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{describedbyid:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"id:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{id:"account",children:"Test"})}),(0,d.jsx)("dt",{children:"key:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{children:"Test"},"account")}),(0,d.jsx)("dt",{children:"tabIndex:"})," ",(0,d.jsx)("dd",{children:(0,d.jsx)(a.Z,{tabIndex:100,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=74212)}),_N_E=e.O()}]);