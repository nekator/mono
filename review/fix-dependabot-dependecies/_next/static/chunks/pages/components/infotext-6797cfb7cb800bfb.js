(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6857],{83876:function(e,n,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(r)},a.id=83876,e.exports=a},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var l=a.apply(null,t);l&&e.push(l)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var o in t)r.call(t,o)&&t[o]&&e.push(o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(t=(function(){return a}).apply(n,[]))&&(e.exports=t)}()},26397:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/infotext",function(){return t(51960)}])},75549:function(e,n,t){"use strict";t.d(n,{P:function(){return r}});let r=(e,n,t)=>{var r;return e.map((e,a)=>({...e,slotCode:null!==(r=null==t?void 0:t.at(a))&&void 0!==r?r:"No code available",examples:e.examples.map(e=>{var t;return{...e,example:n({...e.props,children:(null===(t=e.props)||void 0===t?void 0:t.children)?e.props.children:e.name})}})}))}},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(52322),a=t(77900),i=t(2784);let l=()=>{let e=(0,i.useRef)(null),[n,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]},o=e=>{let{children:n,element:t="div",...r}=e,[a,o]=l();return a?(0,i.createElement)(t,{...r,children:n}):(0,i.createElement)(t,{...r,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/fix-dependabot-dependecies").concat(e.link)});t(60586);var d=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>c(e)):[],p=e=>{let{children:n}=e,[t,l]=(0,i.useState)(!1),[c,p]=(0,i.useState)(!1),[b,m]=(0,i.useState)(!1),f=(0,d.useRouter)();return(0,i.useEffect)(()=>{f.query&&(l("true"===f.query.fullscreen),p("true"===f.query.noh1),m("true"===f.query.properties))},[f]),(0,r.jsxs)(o,{children:[f.isReady&&t&&(0,r.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(b?"is-properties":""),children:n}),f.isReady&&!t&&(0,r.jsxs)(a.rG,{children:[(0,r.jsxs)(a.ff,{slot:"header",children:[(0,r.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(a.Pm,{data:JSON.stringify(u(s,f.pathname))}),(0,r.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})};var b=p},68623:function(e,n,t){"use strict";var r=t(52322),a=t(71698),i=t(5632),l=t(70969),o=t(2784);let s=e=>{let{examples:n,slotCode:t}=e;return(0,r.jsx)(a.wq,{className:"variants-card",slotCode:t,children:(0,r.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,r.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})},c=e=>{let{title:n,variants:t}=e,[c,d]=(0,o.useState)(),u=(0,i.useRouter)();(0,o.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=t.find(e=>e.name.toLowerCase()===n);d(e),console.log(n)}}},[u]);let p=e=>{var n;return window.location.origin?"".concat(null==window?void 0:null===(n=window.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,r.jsxs)(r.Fragment,{children:[c&&(0,r.jsx)("div",{children:(0,r.jsx)(s,{...c})}),!c&&(0,r.jsx)(l.Z,{children:(0,r.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,r.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(a.oH,{}),(0,r.jsx)("h2",{children:(0,r.jsx)(a.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,r.jsx)(s,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})};n.Z=c},51960:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(52322),a=t(28110),i=t(74876),l=t(71698),o=t(68623),s=JSON.parse('[{"name":"Variant","examples":[{"name":"(Default) Adaptive","props":{"icon":"account"}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}}]},{"name":"Size","examples":[{"name":"(Default) Medium","props":{}},{"name":"Small","props":{"size":"small"}}]}]'),c=t(75549);let d=e=>{let{variant:n,size:t,icon:a,children:i}=e;return(0,r.jsx)(l.EZ,{variant:n,size:t,icon:a,children:i})},u=()=>(0,r.jsx)(o.Z,{title:"DBInfotext",variants:(0,c.P)(s,d,[(0,r.jsx)(a.default,{}),(0,r.jsx)(i.default,{})])});var p=u}},function(e){e.O(0,[4996,9883,1698,8110,4876,9774,2888,179],function(){return e(e.s=26397)}),_N_E=e.O()}]);