(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[317],{83876:function(e,n,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(r)},a.id=83876,e.exports=a},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var l=a.apply(null,t);l&&e.push(l)}}else if("object"===o){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)r.call(t,i)&&t[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(t=(function(){return a}).apply(n,[]))&&(e.exports=t)}()},25768:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer",function(){return t(82790)}])},75549:function(e,n,t){"use strict";t.d(n,{P:function(){return r}});let r=(e,n,t)=>{var r,a;return e.map((e,o)=>({...e,slotCode:null!==(r=null==t?void 0:t.at(o))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var t;return{...e,example:n({...e.props,id:null!==(a=e.props.id)&&void 0!==a?a:e.name,children:(null===(t=e.props)||void 0===t?void 0:t.children)?e.props.children:e.name})}})}))}},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(52322),a=t(77900),o=t(2784);let l=()=>{let e=(0,o.useRef)(null),[n,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]};var i=e=>{let{children:n,element:t="div",...r}=e,[a,i]=l();return a?(0,o.createElement)(t,{...r,children:n}):(0,o.createElement)(t,{...r,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/mfranzke-patch-2").concat(e.link)});t(60586);var c=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>d(e)):[];var p=e=>{let{children:n}=e,[t,l]=(0,o.useState)(!1),[d,p]=(0,o.useState)(!1),[m,b]=(0,o.useState)(!1),h=(0,c.useRouter)();return(0,o.useEffect)(()=>{h.query&&(l("true"===h.query.fullscreen),p("true"===h.query.noh1),b("true"===h.query.properties))},[h]),(0,r.jsxs)(i,{children:[h.isReady&&t&&(0,r.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(m?"is-properties":""),children:n}),h.isReady&&!t&&(0,r.jsxs)(a.rG,{children:[(0,r.jsxs)(a.ff,{slot:"header",children:[(0,r.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(a.Pm,{data:JSON.stringify(u(s,h.pathname))}),(0,r.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})}},68623:function(e,n,t){"use strict";var r=t(52322),a=t(48111),o=t(5632),l=t(70969),i=t(2784);let s=e=>{let{examples:n,slotCode:t}=e;return(0,r.jsx)(a.wq,{className:"variants-card",slotCode:t,children:(0,r.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:t}=e,[d,c]=(0,i.useState)(),u=(0,o.useRouter)();(0,i.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=t.find(e=>e.name.toLowerCase()===n);c(e),console.log(n)}}},[u]);let p=e=>{var n;return window.location.origin?"".concat(null==window?void 0:null===(n=window.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)("div",{children:(0,r.jsx)(s,{...d})}),!d&&(0,r.jsx)(l.Z,{children:(0,r.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,r.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(a.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(a.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,r.jsx)(s,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},82790:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(52322),a=t(27165),o=t(13383),l=t(15671),i=t(16909),s=t(90303),d=t(71399),c=t(2784),u=t(48111),p=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Size","examples":[{"name":"With padding (Default)","props":{"withCloseButton":true}},{"name":"Full","props":{"withCloseButton":true,"width":"full"}}]},{"name":"Rounded","examples":[{"name":"No rounding (Default)","props":{"withCloseButton":true}},{"name":"Rounded","props":{"withCloseButton":true,"rounded":true}}]},{"name":"Spacing","examples":[{"name":"Medium (Default)","props":{"withCloseButton":true}},{"name":"Small","props":{"withCloseButton":true,"spacing":"small"}},{"name":"Large","props":{"withCloseButton":true,"spacing":"large"}},{"name":"No spacing","props":{"withCloseButton":true,"spacing":"none"}}]},{"name":"Backdrop","examples":[{"name":"With Backdrop (Default)","props":{"withCloseButton":true}},{"name":"No Backdrop","props":{"withCloseButton":true,"noBackdrop":true}}]},{"name":"Directions","examples":[{"name":"Right (Default)","props":{"withCloseButton":true}},{"name":"Left","props":{"withCloseButton":true,"direction":"left"}},{"name":"Up","props":{"withCloseButton":true,"direction":"up"}},{"name":"Down","props":{"withCloseButton":true,"direction":"down"}}]}]'),m=t(68623),b=t(75549);let h=e=>{let{id:n,width:t,rounded:a,noBackdrop:o,withCloseButton:l,spacing:i,openDrawer:s,setOpenDrawer:d,direction:c,children:p}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(u.TG,{noBackdrop:o,withCloseButton:l,rounded:a,width:t,spacing:i,direction:c,open:s===n,onClose:()=>{d(void 0)},children:p}),(0,r.jsxs)(u.Y1,{onClick:()=>{d(n)},children:["Open: ",p]})]})};var f=()=>{let[e,n]=(0,c.useState)(void 0);return(0,r.jsx)(m.Z,{title:"DBDrawer",variants:(0,b.P)(p,t=>h({...t,openDrawer:e,setOpenDrawer:n}),[(0,r.jsx)(a.default,{}),(0,r.jsx)(o.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(s.default,{}),(0,r.jsx)(d.default,{})])})}}},function(e){e.O(0,[4996,9883,8111,6909,1399,7165,3383,5671,303,9774,2888,179],function(){return e(e.s=25768)}),_N_E=e.O()}]);