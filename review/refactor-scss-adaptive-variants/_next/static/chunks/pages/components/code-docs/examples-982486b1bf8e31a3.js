(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6793],{83876:function(e,n,t){var l={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],r=n[0];return t.e(n[1]).then(function(){return t(r)})}r.keys=function(){return Object.keys(l)},r.id=83876,e.exports=r},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var i=r.apply(null,t);i&&e.push(i)}}else if("object"===a){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)l.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(t=(function(){return r}).apply(n,[]))&&(e.exports=t)}()},74212:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/code-docs/examples",function(){return t(81442)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var l=t(52322),r=t(77900),a=t(2784);let i=()=>{let e=(0,a.useRef)(null),[n,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},s=e=>{let{children:n,element:t="div",...l}=e,[r,s]=i();return r?(0,a.createElement)(t,{...l,children:n}):(0,a.createElement)(t,{...l,ref:s,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},d=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],o=e=>({...e,link:"".concat("/mono/review/refactor-scss-adaptive-variants").concat(e.link)});t(60586);var c=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>o(e)):[],h=e=>{let{children:n}=e,[t,i]=(0,a.useState)(!1),[o,h]=(0,a.useState)(!1),[b,j]=(0,a.useState)(!1),m=(0,c.useRouter)();return(0,a.useEffect)(()=>{m.query&&(i("true"===m.query.fullscreen),h("true"===m.query.noh1),j("true"===m.query.properties))},[m]),(0,l.jsxs)(s,{children:[m.isReady&&t&&(0,l.jsx)("div",{className:"".concat(o?"noh1":""," ").concat(b?"is-properties":""),children:n}),m.isReady&&!t&&(0,l.jsxs)(r.rG,{children:[(0,l.jsxs)(r.ff,{slot:"header",children:[(0,l.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(r.Pm,{data:JSON.stringify(u(d,m.pathname))}),(0,l.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})};var b=h},54728:function(e,n,t){"use strict";var l=t(52322),r=t(2784),a=t(72779),i=t.n(a);let s=(0,r.forwardRef)(function(e,n){let[t,a]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,l.jsxs)("div",{ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return i()(n)}("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:t})}):null,e.imgSrc?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});n.Z=s},34786:function(e,n,t){"use strict";t.d(n,{f:function(){return l.Z}});var l=t(54728)},63172:function(e,n,t){"use strict";var l=t(52322),r=t(2784),a=t(34786),i=t(72779),s=t.n(i);let d={copyLabel:"Copy Code",hideCodeLabel:"Hide Code",showCodeLabel:"Show Code"},o=(0,r.forwardRef)(function(e,n){var t,i;let[o,c]=(0,r.useState)(()=>!1),[u,h]=(0,r.useState)(()=>null);return(0,r.useEffect)(()=>{e.stylePath&&h(e.stylePath)},[]),(0,l.jsxs)(a.f,{elevation:"none",ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return s()(n)}("db-code-docs",e.className),children:[u?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:u})}):null,e.children,(0,l.jsxs)("details",{className:"code-details",onToggle:e=>void c(!o),children:[(0,l.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:o?null!==(t=e.hideCodeLabel)&&void 0!==t?t:d.hideCodeLabel:null!==(i=e.showCodeLabel)&&void 0!==i?i:d.showCodeLabel}),(0,l.jsx)("div",{className:"db-ui-functional code",children:e.slotCode})]})]})});n.Z=o},81442:function(e,n,t){"use strict";t.r(n);var l=t(52322),r=t(70969),a=t(63172);n.default=()=>(0,l.jsxs)(r.Z,{children:[(0,l.jsx)("h1",{children:" DBCodeDocs Examples "}),(0,l.jsxs)("dl",{className:"example-list",children:[(0,l.jsx)("dt",{children:"Default:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{children:"Test"})}),(0,l.jsx)("dt",{children:"showCodeLabel:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{showCodeLabel:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"hideCodeLabel, id, key, showCodeLabel, slotCode, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{hideCodeLabel:"account",id:"account",showCodeLabel:"account",slotCode:"account",title:"account",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"hideCodeLabel, id, key, slotCode, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{hideCodeLabel:"account",id:"account",slotCode:"account",title:"account",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"id, key, slotCode, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{id:"account",slotCode:"account",title:"account",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"id, key, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{id:"account",title:"account",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"id, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{id:"account",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"hideCodeLabel:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{hideCodeLabel:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"slotCode:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{slotCode:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"key:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{children:"Test"},"account")}),(0,l.jsx)("dt",{children:"id:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(a.Z,{id:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=74212)}),_N_E=e.O()}]);