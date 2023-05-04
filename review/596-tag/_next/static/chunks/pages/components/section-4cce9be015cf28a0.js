(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3292],{83876:function(e,n,t){var a={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!t.o(a,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=a[e],r=n[0];return t.e(n[1]).then(function(){return t(r)})}r.keys=function(){return Object.keys(a)},r.id=83876,e.exports=r},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var l=typeof t;if("string"===l||"number"===l)e.push(t);else if(Array.isArray(t)){if(t.length){var i=r.apply(null,t);i&&e.push(i)}}else if("object"===l){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var o in t)a.call(t,o)&&t[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(t=(function(){return r}).apply(n,[]))&&(e.exports=t)}()},16964:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/section",function(){return t(80911)}])},75549:function(e,n,t){"use strict";t.d(n,{P:function(){return a}});let a=(e,n,t)=>{var a,r;return e.map((e,l)=>({...e,slotCode:null!==(a=null==t?void 0:t.at(l))&&void 0!==a?a:"No code available",examples:e.examples.map(e=>{var t;return{...e,example:n({...e.props,id:null!==(r=e.props.id)&&void 0!==r?r:e.name,children:(null===(t=e.props)||void 0===t?void 0:t.children)?e.props.children:e.name})}})}))}},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var a=t(52322),r=t(77900),l=t(2784);let i=()=>{let e=(0,l.useRef)(null),[n,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var n;let a=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";a&&t(!0)},[]),[n,e]},o=e=>{let{children:n,element:t="div",...a}=e,[r,o]=i();return r?(0,l.createElement)(t,{...a,children:n}):(0,l.createElement)(t,{...a,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",link:"tag"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/596-tag").concat(e.link)});t(60586);var c=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>d(e)):[],p=e=>{let{children:n}=e,[t,i]=(0,l.useState)(!1),[d,p]=(0,l.useState)(!1),[b,m]=(0,l.useState)(!1),h=(0,c.useRouter)();return(0,l.useEffect)(()=>{h.query&&(i("true"===h.query.fullscreen),p("true"===h.query.noh1),m("true"===h.query.properties))},[h]),(0,a.jsxs)(o,{children:[h.isReady&&t&&(0,a.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(b?"is-properties":""),children:n}),h.isReady&&!t&&(0,a.jsxs)(r.rG,{children:[(0,a.jsxs)(r.ff,{slot:"header",children:[(0,a.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,a.jsx)(r.Pm,{data:JSON.stringify(u(s,h.pathname))}),(0,a.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,a.jsx)("div",{children:n}),(0,a.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})};var b=p},68623:function(e,n,t){"use strict";var a=t(52322),r=t(67571),l=t(5632),i=t(70969),o=t(2784);let s=e=>{let{examples:n,slotCode:t}=e;return(0,a.jsx)(r.wq,{className:"variants-card",slotCode:t,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})},d=e=>{let{title:n,variants:t}=e,[d,c]=(0,o.useState)(),u=(0,l.useRouter)();(0,o.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=t.find(e=>e.name.toLowerCase()===n);c(e),console.log(n)}}},[u]);let p=e=>{var n;return window.location.origin?"".concat(null==window?void 0:null===(n=window.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[d&&(0,a.jsx)("div",{children:(0,a.jsx)(s,{...d})}),!d&&(0,a.jsx)(i.Z,{children:(0,a.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(r.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,a.jsx)(s,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})};n.Z=d},80911:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var a=t(52322),r=t(2388),l=t(92956),i=t(67571),o=t(68623),s=JSON.parse('[{"name":"Variant","examples":[{"name":"Full (Default)","style":{"width":"100%","display":"block"},"props":{}},{"name":"Medium","style":{"width":"100%","display":"block"},"props":{"variant":"medium"}},{"name":"Large","style":{"width":"100%","display":"block"},"props":{"variant":"large"}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Large","props":{"size":"large"}},{"name":"Small","props":{"size":"small"}}]}]'),d=t(75549);let c=e=>{let{variant:n,size:t,children:r}=e;return(0,a.jsx)(i.cN,{className:"db-bg-informational",size:t,variant:n,children:r})},u=()=>(0,a.jsx)(o.Z,{title:"DBSection",variants:(0,d.P)(s,c,[(0,a.jsx)(r.default,{}),(0,a.jsx)(l.default,{})])});var p=u}},function(e){e.O(0,[4996,9883,7571,2388,2956,9774,2888,179],function(){return e(e.s=16964)}),_N_E=e.O()}]);