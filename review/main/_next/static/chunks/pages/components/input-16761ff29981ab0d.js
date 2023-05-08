(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8367],{83876:function(e,n,a){var t={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!a.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],r=n[0];return a.e(n[1]).then(function(){return a(r)})}r.keys=function(){return Object.keys(t)},r.id=83876,e.exports=r},72779:function(e,n){var a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)){if(a.length){var i=r.apply(null,a);i&&e.push(i)}}else if("object"===l){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var o in a)t.call(a,o)&&a[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(a=(function(){return r}).apply(n,[]))&&(e.exports=a)}()},33137:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/input",function(){return a(12812)}])},75549:function(e,n,a){"use strict";a.d(n,{P:function(){return t}});let t=(e,n,a)=>{var t,r;return e.map((e,l)=>({...e,slotCode:null!==(t=null==a?void 0:a.at(l))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a;return{...e,example:n({...e.props,id:null!==(r=e.props.id)&&void 0!==r?r:e.name,children:(null===(a=e.props)||void 0===a?void 0:a.children)?e.props.children:e.name})}})}))}},70969:function(e,n,a){"use strict";a.d(n,{Z:function(){return b}});var t=a(52322),r=a(77900),l=a(2784);let i=()=>{let e=(0,l.useRef)(null),[n,a]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&a(!0)},[]),[n,e]},o=e=>{let{children:n,element:a="div",...t}=e,[r,o]=i();return r?(0,l.createElement)(a,{...t,children:n}):(0,l.createElement)(a,{...t,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/main").concat(e.link)});a(60586);var d=a(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>c(e)):[],p=e=>{let{children:n}=e,[a,i]=(0,l.useState)(!1),[c,p]=(0,l.useState)(!1),[b,m]=(0,l.useState)(!1),f=(0,d.useRouter)();return(0,l.useEffect)(()=>{f.query&&(i("true"===f.query.fullscreen),p("true"===f.query.noh1),m("true"===f.query.properties))},[f]),(0,t.jsxs)(o,{children:[f.isReady&&a&&(0,t.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(b?"is-properties":""),children:n}),f.isReady&&!a&&(0,t.jsxs)(r.rG,{children:[(0,t.jsxs)(r.ff,{slot:"header",children:[(0,t.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(r.Pm,{data:JSON.stringify(u(s,f.pathname))}),(0,t.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})};var b=p},68623:function(e,n,a){"use strict";var t=a(52322),r=a(76611),l=a(5632),i=a(70969),o=a(2784);let s=e=>{let{examples:n,slotCode:a}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:a,children:(0,t.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})},c=e=>{let{title:n,variants:a}=e,[c,d]=(0,o.useState)(),u=(0,l.useRouter)();(0,o.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=a.find(e=>e.name.toLowerCase()===n);d(e),console.log(n)}}},[u]);let p=e=>{var n;return window.location.origin?"".concat(null==window?void 0:null===(n=window.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("div",{children:(0,t.jsx)(s,{...c})}),!c&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,t.jsx)(s,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})};n.Z=c},12812:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return b}});var t=a(52322),r=a(31601),l=a(5430),i=a(33048),o=a(76611),s=a(68623),c=JSON.parse('[{"name":"Variant","examples":[{"name":"(Default) Basic","props":{"label":"Label","description":"(Default) Basic"}},{"name":"Informational","props":{"label":"Label","description":"Informational","variant":"informational"}},{"name":"Warning","props":{"label":"Label","description":"Warning","variant":"warning"}},{"name":"Critical","props":{"label":"Label","description":"Critical","variant":"critical"}},{"name":"Successful","props":{"label":"Label","description":"Successful","variant":"successful"}}]},{"name":"States","examples":[{"name":"Default","props":{"label":"Label","description":"Default"}},{"name":"Filled","props":{"label":"Label","value":"Input Text","description":"Filled"}},{"name":"Filled Number","props":{"label":"Label","value":"123456","type":"number","description":"Filled Number"}},{"name":"Invalid","props":{"label":"Label","description":"Invalid","required":true,"minLength":5}},{"name":"Disabled","props":{"label":"Label","disabled":true,"description":"Disabled"}},{"name":"Disabled with value","props":{"label":"Label","value":"Input Text","disabled":true,"description":"Disabled with value"}},{"name":"Required","props":{"label":"Label","value":"Input Text","disabled":true,"required":true,"description":"Required"}}]},{"name":"Content","examples":[{"name":"(Default) Text","props":{"label":"Label","description":"(Default) Text"}},{"name":"Leading Icon + Text","props":{"label":"Label","icon":"account","description":"Leading Icon + Text"}},{"name":"Leading Icon + Text + Trailing Icon","props":{"label":"Label","icon":"account","iconAfter":"edit","description":"Leading Icon + Text + Trailing Icon"}},{"name":"Text + Trailing Icon","props":{"label":"Label","iconAfter":"edit","description":"Text + Trailing Icon"}},{"name":"Text + Trailing Icon + Variant:Successful","props":{"label":"Label","variant":"successful","iconAfter":"edit","description":"Text + Trailing Icon + Variant:Successful"}}]}]'),d=a(75549);let u=e=>{let{label:n,variant:a,value:r,type:l,minLength:i,required:s,disabled:c,iconAfter:d,icon:u,children:p}=e;return(0,t.jsx)(o.aq,{label:n,description:p,variant:a,value:r,type:l,minLength:i,required:s,disabled:c,iconAfter:d,icon:u})},p=()=>(0,t.jsx)(s.Z,{title:"DBInput",variants:(0,d.P)(c,u,[(0,t.jsx)(r.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(i.default,{})])});var b=p}},function(e){e.O(0,[4996,9883,6611,5430,3048,1601,9774,2888,179],function(){return e(e.s=33137)}),_N_E=e.O()}]);