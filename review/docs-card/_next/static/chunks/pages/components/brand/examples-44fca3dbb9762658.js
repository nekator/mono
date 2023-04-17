(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6398],{83876:function(e,t,i){var n={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function c(e){if(!i.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],c=t[0];return i.e(t[1]).then(function(){return i(c)})}c.keys=function(){return Object.keys(n)},c.id=83876,e.exports=c},72779:function(e,t){var i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)){if(i.length){var l=c.apply(null,i);l&&e.push(l)}}else if("object"===r){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var d in i)n.call(i,d)&&i[d]&&e.push(d)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0!==(i=(function(){return c}).apply(t,[]))&&(e.exports=i)}()},26259:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/brand/examples",function(){return i(58227)}])},70969:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(52322),c=i(77900),r=i(2784);let l=()=>{let e=(0,r.useRef)(null),[t,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{var t;let n=(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.innerHTML)==="";n&&i(!0)},[]),[t,e]},d=e=>{let{children:t,element:i="div",...n}=e,[c,d]=l();return c?(0,r.createElement)(i,{...n,children:t}):(0,r.createElement)(i,{...n,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],a=e=>({...e,link:"".concat("/mono/review/docs-card").concat(e.link)});i(60586);var o=i(5632);let h=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?h(e.children,t):[]})).map(e=>a(e)):[],g=e=>{let{children:t}=e,[i,l]=(0,r.useState)(!1),[a,g]=(0,r.useState)(!1),[u,m]=(0,r.useState)(!1),j=(0,o.useRouter)();return(0,r.useEffect)(()=>{j.query&&(l("true"===j.query.fullscreen),g("true"===j.query.noh1),m("true"===j.query.properties))},[j]),(0,n.jsxs)(d,{children:[j.isReady&&i&&(0,n.jsx)("div",{className:"".concat(a?"noh1":""," ").concat(u?"is-properties":""),children:t}),j.isReady&&!i&&(0,n.jsxs)(c.rG,{children:[(0,n.jsxs)(c.ff,{slot:"header",children:[(0,n.jsx)(c.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,n.jsx)(c.Pm,{data:JSON.stringify(h(s,j.pathname))}),(0,n.jsx)(c.T2,{owner:"db-ui",repo:"mono"})]}),(0,n.jsx)("div",{children:t}),(0,n.jsx)(c.fw,{slot:"footer",copyright:!0})]})]})};var u=g},74938:function(e,t,i){"use strict";var n=i(52322),c=i(2784),r=i(72779),l=i.n(r);let d={anchorRef:"/",src:"./assets/images/db_logo.svg"},s=(0,c.forwardRef)(function(e,t){var i,r;let[s,a]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,n.jsxs)("div",{ref:t,className:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return l()(t)}("db-brand",e.className),children:[s?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("link",{rel:"stylesheet",href:s})}):null,(0,n.jsxs)("a",{href:null!==(i=e.anchorRef)&&void 0!==i?i:d.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("img",{className:"db-logo",src:null!==(r=e.imgSrc)&&void 0!==r?r:d.src,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}),e.anchorChildren?(0,n.jsx)(n.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,n.jsx)(n.Fragment,{children:e.children})]})});t.Z=s},58227:function(e,t,i){"use strict";i.r(t);var n=i(52322),c=i(70969),r=i(74938);t.default=()=>(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("h1",{children:" DBBrand Examples "}),(0,n.jsxs)("dl",{className:"example-list",children:[(0,n.jsx)("dt",{children:"Default:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{children:"Test"})}),(0,n.jsx)("dt",{children:"anchorChildren:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{anchorChildren:!0,children:"Test"})}),(0,n.jsx)("dt",{children:"anchorChildren, anchorRef, anchorRelation, anchorTitle, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{anchorChildren:!0,anchorRef:"account",anchorRelation:"account",anchorTitle:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"anchorRef, anchorRelation, anchorTitle, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{anchorRef:"account",anchorRelation:"account",anchorTitle:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"anchorRelation, anchorTitle, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{anchorRelation:"account",anchorTitle:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"anchorRelation, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{anchorRelation:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"id, imgAlt, imgHeight, imgSrc, imgWidth, key, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"id, imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgHeight, imgSrc, imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgSrc, imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgWidth:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{imgWidth:100,children:"Test"})}),(0,n.jsx)("dt",{children:"anchorRef:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{anchorRef:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"anchorTitle:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{anchorTitle:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"anchorRelation:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{anchorRelation:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"hideDefaultAsset:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{hideDefaultAsset:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"key:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{children:"Test"},"account")}),(0,n.jsx)("dt",{children:"id:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{id:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgAlt:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{imgAlt:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"imgHeight:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{imgHeight:100,children:"Test"})}),(0,n.jsx)("dt",{children:"imgSrc:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(r.Z,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=26259)}),_N_E=e.O()}]);