(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7619],{83876:function(e,n,t){var a={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!t.o(a,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=a[e],r=n[0];return t.e(n[1]).then(function(){return t(r)})}r.keys=function(){return Object.keys(a)},r.id=83876,e.exports=r},29509:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item",function(){return t(80676)}])},75549:function(e,n,t){"use strict";t.d(n,{P:function(){return a}});let a=(e,n,t)=>{var a,r;return e.map((e,o)=>({...e,slotCode:null!==(a=null==t?void 0:t.at(o))&&void 0!==a?a:"No code available",examples:e.examples.map(e=>{var t;return{...e,example:n({...e.props,id:null!==(r=e.props.id)&&void 0!==r?r:e.name,children:(null===(t=e.props)||void 0===t?void 0:t.children)?e.props.children:e.name})}})}))}},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var a=t(52322),r=t(77900),o=t(2784);let l=()=>{let e=(0,o.useRef)(null),[n,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let a=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";a&&t(!0)},[]),[n,e]};var i=e=>{let{children:n,element:t="div",...a}=e,[r,i]=l();return r?(0,o.createElement)(t,{...a,children:n}):(0,o.createElement)(t,{...a,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/fix-npm-run-clean").concat(e.link)});t(60586);var d=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>c(e)):[];var m=e=>{let{children:n}=e,[t,l]=(0,o.useState)(!1),[c,m]=(0,o.useState)(!1),[p,b]=(0,o.useState)(!1),f=(0,d.useRouter)();return(0,o.useEffect)(()=>{f.query&&(l("true"===f.query.fullscreen),m("true"===f.query.noh1),b("true"===f.query.properties))},[f]),(0,a.jsxs)(i,{children:[f.isReady&&t&&(0,a.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(p?"is-properties":""),children:n}),f.isReady&&!t&&(0,a.jsxs)(r.rG,{children:[(0,a.jsxs)(r.ff,{slot:"header",children:[(0,a.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,a.jsx)(r.Pm,{data:JSON.stringify(u(s,f.pathname))}),(0,a.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,a.jsx)("div",{children:n}),(0,a.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})}},68623:function(e,n,t){"use strict";var a=t(52322),r=t(82852),o=t(5632),l=t(70969),i=t(2784);let s=e=>{let{examples:n,slotCode:t}=e;return(0,a.jsx)(r.wq,{className:"variants-card",slotCode:t,children:(0,a.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,a.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:t}=e,[c,d]=(0,i.useState)(),u=(0,o.useRouter)();(0,i.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=t.find(e=>e.name.toLowerCase()===n);d(e),console.log(n)}}},[u]);let m=e=>{var n,t;return window.location.origin?"".concat(null===(t=window)||void 0===t?void 0:null===(n=t.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,a.jsxs)(a.Fragment,{children:[c&&(0,a.jsx)("div",{children:(0,a.jsx)(s,{...c})}),!c&&(0,a.jsx)(l.Z,{children:(0,a.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,a.jsx)("h1",{children:n}),null==t?void 0:t.map((e,n)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(r.oH,{}),(0,a.jsx)("h2",{children:(0,a.jsx)(r.vB,{content:"external",target:"_blank",href:m(e),children:e.name})}),(0,a.jsx)(s,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},80676:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var a=t(52322),r=t(36186),o=t(30078),l=t(75270),i=t(90518),s=t(82852),c=t(68623),d=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{"icon":"account","iconAfter":"expand-more"}},{"name":"regular (Default)","className":"db-ui-regular","props":{"icon":"account","iconAfter":"expand-more"}},{"name":"expressive","className":"db-ui-expressive","props":{"icon":"account","iconAfter":"expand-more"}}]},{"name":"States","examples":[{"name":"Enabled (Default)","props":{"icon":"account","iconAfter":"expand-more"}},{"name":"Disabled","props":{"disabled":true,"icon":"account","iconAfter":"expand-more"}},{"name":"Active","props":{"active":true,"iconAfter":"chevron-right"}}]},{"name":"Content","examples":[{"name":"Leading Icon - Text","props":{"icon":"account"}},{"name":"Leading Icon - Text - Trailing Icon","props":{"icon":"account","iconAfter":"expand-more"}},{"name":"Text - Trailing Icon","props":{"iconAfter":"expand-more"}},{"name":"Text","props":{}}]},{"name":"Width","examples":[{"name":"Auto (Default)","style":{"width":"400px"},"props":{"icon":"account","iconAfter":"expand-more"}},{"name":"Full","style":{"width":"400px"},"props":{"width":"full","icon":"account","iconAfter":"expand-more"}}]}]'),u=t(75549);let m=e=>{let{children:n,icon:t,iconAfter:r,disabled:o,active:l,width:i}=e;return(0,a.jsx)(s.pK,{icon:t,iconAfter:r,disabled:o,active:l,width:i,onClick:()=>{alert(n.toString())},children:n})};var p=()=>(0,a.jsx)(c.Z,{title:"DBNavigationItem",variants:(0,u.P)(d,m,[(0,a.jsx)(r.default,{}),(0,a.jsx)(o.default,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(i.default,{})])})}},function(e){e.O(0,[4996,9883,2852,3359,6186,78,518,9774,2888,179],function(){return e(e.s=29509)}),_N_E=e.O()}]);