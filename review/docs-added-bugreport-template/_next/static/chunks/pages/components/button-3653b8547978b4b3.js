(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9091],{83876:function(e,n,a){var t={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function l(e){if(!a.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],l=n[0];return a.e(n[1]).then(function(){return a(l)})}l.keys=function(){return Object.keys(t)},l.id=83876,e.exports=l},57755:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button",function(){return a(7398)}])},75549:function(e,n,a){"use strict";a.d(n,{P:function(){return t}});let t=(e,n,a)=>{var t,l;return e.map((e,r)=>({...e,slotCode:null!==(t=null==a?void 0:a.at(r))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a;return{...e,example:n({...e.props,id:null!==(l=e.props.id)&&void 0!==l?l:e.name,children:(null===(a=e.props)||void 0===a?void 0:a.children)?e.props.children:e.name})}})}))}},70969:function(e,n,a){"use strict";a.d(n,{Z:function(){return m}});var t=a(52322),l=a(77900),r=a(2784);let i=()=>{let e=(0,r.useRef)(null),[n,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{var n;let t=(null===(n=e?.current)||void 0===n?void 0:n.innerHTML)==="";t&&a(!0)},[]),[n,e]};var o=e=>{let{children:n,element:a="div",...t}=e,[l,o]=i();return l?(0,r.createElement)(a,{...t,children:n}):(0,r.createElement)(a,{...t,ref:o,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/docs-added-bugreport-template").concat(e.link)});a(60586);var c=a(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>d(e)):[];var m=e=>{let{children:n}=e,[a,i]=(0,r.useState)(!1),[d,m]=(0,r.useState)(!1),[p,b]=(0,r.useState)(!1),h=(0,c.useRouter)();return(0,r.useEffect)(()=>{h.query&&(i("true"===h.query.fullscreen),m("true"===h.query.noh1),b("true"===h.query.properties))},[h]),(0,t.jsxs)(o,{children:[h.isReady&&a&&(0,t.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(p?"is-properties":""),children:n}),h.isReady&&!a&&(0,t.jsxs)(l.rG,{children:[(0,t.jsxs)(l.ff,{slot:"header",children:[(0,t.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(l.Pm,{data:JSON.stringify(u(s,h.pathname))}),(0,t.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(l.fw,{slot:"footer",copyright:!0})]})]})}},68623:function(e,n,a){"use strict";var t=a(52322),l=a(82852),r=a(5632),i=a(70969),o=a(2784);let s=e=>{let{examples:n,slotCode:a}=e;return(0,t.jsx)(l.wq,{className:"variants-card",slotCode:a,children:(0,t.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[d,c]=(0,o.useState)(),u=(0,r.useRouter)();(0,o.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=a.find(e=>e.name.toLowerCase()===n);c(e),console.log(n)}}},[u]);let m=e=>{var n,a;return window.location.origin?"".concat(null===(a=window)||void 0===a?void 0:null===(n=a.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[d&&(0,t.jsx)("div",{children:(0,t.jsx)(s,{...d})}),!d&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(l.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(l.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,t.jsx)(s,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},7398:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return h}});var t=a(52322),l=a(88852),r=a(36883),i=a(65544),o=a(57229),s=a(59481),d=a(31676),c=a(82852),u=a(68623),m=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Variant","examples":[{"name":"Primary","props":{"variant":"primary"}},{"name":"Outlined (Adaptive)","props":{}},{"name":"Solid (Adaptive)","props":{"variant":"solid"}},{"name":"Text (Adaptive)","props":{"variant":"text"}}]},{"name":"State","examples":[{"name":"Enabled (Default)","props":{}},{"name":"Disabled","props":{"disabled":true}}]},{"name":"Size","examples":[{"name":"Medium (Default)","props":{}},{"name":"Small","props":{"size":"small"}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Icon & Text","props":{"icon":"account"}},{"name":"Icon","props":{"icon":"account","noText":true}}]},{"name":"Behaviour","examples":[{"name":"Auto Width (Default)","props":{}},{"name":"Width full","style":{"width":"500px"},"props":{"width":"full"}}]}]'),p=a(75549);let b=e=>{let{variant:n,state:a,size:l,noText:r,icon:i,width:o,disabled:s,children:d}=e;return(0,t.jsx)(c.Y1,{variant:n,state:a,size:l,noText:r,icon:i,disabled:s,width:o,onClick:()=>{alert(d.toString())},children:d})};var h=()=>(0,t.jsx)(u.Z,{title:"DBButton",variants:(0,p.P)(m,b,[(0,t.jsx)(l.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(o.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(d.default,{})])})}},function(e){e.O(0,[4996,9883,2852,6883,9481,8852,1676,7229,5544,9774,2888,179],function(){return e(e.s=57755)}),_N_E=e.O()}]);