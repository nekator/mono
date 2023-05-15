(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6398],{83876:function(e,i,t){var n={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function d(e){if(!t.o(n,e))return Promise.resolve().then(function(){var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i});var i=n[e],d=i[0];return t.e(i[1]).then(function(){return t(d)})}d.keys=function(){return Object.keys(n)},d.id=83876,e.exports=d},72779:function(e,i){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function d(){for(var e=[],i=0;i<arguments.length;i++){var t=arguments[i];if(t){var c=typeof t;if("string"===c||"number"===c)e.push(t);else if(Array.isArray(t)){if(t.length){var r=d.apply(null,t);r&&e.push(r)}}else if("object"===c){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)n.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(d.default=d,e.exports=d):void 0!==(t=(function(){return d}).apply(i,[]))&&(e.exports=t)}()},26259:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/brand/examples",function(){return t(58227)}])},70969:function(e,i,t){"use strict";t.d(i,{Z:function(){return u}});var n=t(52322),d=t(77900),c=t(2784);let r=()=>{let e=(0,c.useRef)(null),[i,t]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var i;let n=(null===(i=null==e?void 0:e.current)||void 0===i?void 0:i.innerHTML)==="";n&&t(!0)},[]),[i,e]},l=e=>{let{children:i,element:t="div",...n}=e,[d,l]=r();return d?(0,c.createElement)(t,{...n,children:i}):(0,c.createElement)(t,{...n,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],a=e=>({...e,link:"".concat("/mono/review/1025-docs-incorrect-labels").concat(e.link)});t(60586);var o=t(5632);let h=(e,i)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===i||"/"!==e.link&&i.includes(e.link),children:e.children?h(e.children,i):[]})).map(e=>a(e)):[],g=e=>{let{children:i}=e,[t,r]=(0,c.useState)(!1),[a,g]=(0,c.useState)(!1),[u,m]=(0,c.useState)(!1),b=(0,o.useRouter)();return(0,c.useEffect)(()=>{b.query&&(r("true"===b.query.fullscreen),g("true"===b.query.noh1),m("true"===b.query.properties))},[b]),(0,n.jsxs)(l,{children:[b.isReady&&t&&(0,n.jsx)("div",{className:"".concat(a?"noh1":""," ").concat(u?"is-properties":""),children:i}),b.isReady&&!t&&(0,n.jsxs)(d.rG,{children:[(0,n.jsxs)(d.ff,{slot:"header",children:[(0,n.jsx)(d.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,n.jsx)(d.Pm,{data:JSON.stringify(h(s,b.pathname))}),(0,n.jsx)(d.T2,{owner:"db-ui",repo:"mono"})]}),(0,n.jsx)("div",{children:i}),(0,n.jsx)(d.fw,{slot:"footer",copyright:!0})]})]})};var u=g},74938:function(e,i,t){"use strict";var n=t(52322),d=t(2784),c=t(72779),r=t.n(c);let l={anchorRef:"/",src:"./assets/images/db_logo.svg"},s=(0,d.forwardRef)(function(e,i){var t,c;let[s,a]=(0,d.useState)(()=>null);return(0,d.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,n.jsxs)("div",{ref:i,className:function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return r()(i)}("db-brand",e.className),children:[s?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("link",{rel:"stylesheet",href:s})}):null,(0,n.jsxs)("a",{href:null!==(t=e.anchorRef)&&void 0!==t?t:l.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("img",{className:"db-logo",src:null!==(c=e.imgSrc)&&void 0!==c?c:l.src,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}),e.anchorChildren?(0,n.jsx)(n.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,n.jsx)(n.Fragment,{children:e.children})]})});i.Z=s},58227:function(e,i,t){"use strict";t.r(i);var n=t(52322),d=t(70969),c=t(74938);i.default=()=>(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("h1",{children:" DBBrand Examples "}),(0,n.jsxs)("dl",{className:"example-list",children:[(0,n.jsx)("dt",{children:"Default:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{children:"Test"})}),(0,n.jsx)("dt",{children:"anchorChildren:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorChildren:!0,children:"Test"})}),(0,n.jsx)("dt",{children:"anchorChildren, anchorRef, anchorRelation, anchorTitle, describedbyid, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorChildren:!0,anchorRef:"account",anchorRelation:"account",anchorTitle:"account",describedbyid:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"anchorRef, anchorRelation, anchorTitle, describedbyid, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorRef:"account",anchorRelation:"account",anchorTitle:"account",describedbyid:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"anchorRelation, anchorTitle, describedbyid, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorRelation:"account",anchorTitle:"account",describedbyid:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"anchorRelation, describedbyid, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorRelation:"account",describedbyid:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"describedbyid, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{describedbyid:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"describedbyid, id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{describedbyid:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"describedbyid, id, imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{describedbyid:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"describedbyid, imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{describedbyid:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgHeight, imgSrc, imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgSrc, imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"anchorRef:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorRef:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"anchorTitle:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorTitle:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"anchorRelation:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{anchorRelation:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"hideDefaultAsset:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{hideDefaultAsset:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"key:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{children:"Test"},"account")}),(0,n.jsx)("dt",{children:"id:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{id:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"describedbyid:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{describedbyid:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgAlt:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgAlt:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgHeight:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgHeight:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgSrc:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=26259)}),_N_E=e.O()}]);