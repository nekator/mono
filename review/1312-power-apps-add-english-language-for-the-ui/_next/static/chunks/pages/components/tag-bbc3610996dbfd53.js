(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{83876:function(e,n,a){var t={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!a.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],r=n[0];return a.e(n[1]).then(function(){return a(r)})}r.keys=function(){return Object.keys(t)},r.id=83876,e.exports=r},55413:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag",function(){return a(55635)}])},75549:function(e,n,a){"use strict";a.d(n,{P:function(){return t}});let t=(e,n,a)=>{var t,r;return e.map((e,o)=>({...e,slotCode:null!==(t=null==a?void 0:a.at(o))&&void 0!==t?t:"No code available",examples:e.examples.map(e=>{var a;return{...e,example:n({...e.props,id:null!==(r=e.props.id)&&void 0!==r?r:e.name,children:(null===(a=e.props)||void 0===a?void 0:a.children)?e.props.children:e.name})}})}))}},70969:function(e,n,a){"use strict";a.d(n,{Z:function(){return p}});var t=a(52322),r=a(77900),o=a(2784);let i=()=>{let e=(0,o.useRef)(null),[n,a]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&a(!0)},[]),[n,e]};var l=e=>{let{children:n,element:a="div",...t}=e,[r,l]=i();return r?(0,o.createElement)(a,{...t,children:n}):(0,o.createElement)(a,{...t,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/1312-power-apps-add-english-language-for-the-ui").concat(e.link)});a(60586);var d=a(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>c(e)):[];var p=e=>{let{children:n}=e,[a,i]=(0,o.useState)(!1),[c,p]=(0,o.useState)(!1),[m,b]=(0,o.useState)(!1),v=(0,d.useRouter)();return(0,o.useEffect)(()=>{v.query&&(i("true"===v.query.fullscreen),p("true"===v.query.noh1),b("true"===v.query.properties))},[v]),(0,t.jsxs)(l,{children:[v.isReady&&a&&(0,t.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(m?"is-properties":""),children:n}),v.isReady&&!a&&(0,t.jsxs)(r.rG,{children:[(0,t.jsxs)(r.ff,{slot:"header",children:[(0,t.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(r.Pm,{data:JSON.stringify(u(s,v.pathname))}),(0,t.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})}},68623:function(e,n,a){"use strict";var t=a(52322),r=a(82852),o=a(5632),i=a(70969),l=a(2784);let s=e=>{let{examples:n,slotCode:a}=e;return(0,t.jsx)(r.wq,{className:"variants-card",slotCode:a,children:(0,t.jsx)("div",{className:"variants-list",children:n.map((e,n)=>(0,t.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(n)))})})};n.Z=e=>{let{title:n,variants:a}=e,[c,d]=(0,l.useState)(),u=(0,o.useRouter)();(0,l.useEffect)(()=>{if(u.query){var e;let n=null===(e=u.query.page)||void 0===e?void 0:e.toString();if(n){let e=a.find(e=>e.name.toLowerCase()===n);d(e),console.log(n)}}},[u]);let p=e=>{var n,a;return window.location.origin?"".concat(null===(a=window)||void 0===a?void 0:null===(n=a.location)||void 0===n?void 0:n.href,"?page=").concat(e.name.toLowerCase()):""};return(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("div",{children:(0,t.jsx)(s,{...c})}),!c&&(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{className:"default-container db-bg-neutral-0",children:[(0,t.jsx)("h1",{children:n}),null==a?void 0:a.map((e,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(r.oH,{}),(0,t.jsx)("h2",{children:(0,t.jsx)(r.vB,{content:"external",target:"_blank",href:p(e),children:e.name})}),(0,t.jsx)(s,{...e})]},"".concat(e.name,"-").concat(n)))]})})]})}},55635:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return h}});var t=a(52322),r=a(51336),o=a(4398),i=a(32576),l=a(56388),s=a(44429),c=a(14183),d=a(97453),u=a(82852),p=a(68623),m=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{}},{"name":"regular (Default)","className":"db-ui-regular","props":{}},{"name":"expressive","className":"db-ui-expressive","props":{}}]},{"name":"Type","examples":[{"name":"Weak (Default)","props":{}},{"name":"Strong","props":{"type":"strong"}}]},{"name":"Variant","examples":[{"name":"Neutral (Default)","props":{}},{"name":"Critical","props":{"variant":"critical"}},{"name":"Informational","props":{"variant":"informational"}},{"name":"Successful","props":{"variant":"successful"}},{"name":"Warning","props":{"variant":"warning"}},{"name":"Neutral Strong","props":{"type":"strong"}},{"name":"Critical Strong","props":{"variant":"critical","type":"strong"}},{"name":"Informational Strong","props":{"variant":"informational","type":"strong"}},{"name":"Successful Strong","props":{"variant":"successful","type":"strong"}},{"name":"Warning Strong","props":{"variant":"warning","type":"strong"}}]},{"name":"Behaviour","examples":[{"name":"Static (Default)","props":{}},{"name":"Interactive","props":{"behaviour":"interactive"}},{"name":"Interactive-unique 01","props":{"name":"interactive-unique","behaviour":"interactive-unique"}},{"name":"Interactive-unique 02","props":{"name":"interactive-unique","behaviour":"interactive-unique"}},{"name":"Removeable","props":{"behaviour":"removable"}}]},{"name":"State","examples":[{"name":"Unchecked (Default)","props":{"behaviour":"interactive"}},{"name":"Checked","props":{"behaviour":"interactive","checked":true}},{"name":"Disabled","props":{"behaviour":"interactive","checked":true,"disabled":true}}]},{"name":"Content","examples":[{"name":"Text (Default)","props":{}},{"name":"Icon","props":{"icon":"account","noText":true}},{"name":"Icon & Text","props":{"icon":"account"}}]},{"name":"Overflow","examples":[{"name":"No Overflow (Default)","props":{}},{"name":"With Overflow (max-width)","props":{"overflow":true}}]}]'),b=a(75549);let v=e=>{let{variant:n,disabled:a,children:r,icon:o,overflow:i,checked:l,noText:s,behaviour:c,type:d,label:p,removeButton:m,name:b}=e;return(0,t.jsx)(u.k8,{variant:n,disabled:a,icon:o,noText:s,behaviour:c,type:d,checked:l,label:p,overflow:i,removeButton:m,name:b,onRemove:()=>{alert(r.toString())},children:r})};var h=()=>(0,t.jsx)(p.Z,{title:"DBTag",variants:(0,b.P)(m,v,[(0,t.jsx)(r.default,{}),(0,t.jsx)(o.default,{}),(0,t.jsx)(i.default,{}),(0,t.jsx)(l.default,{}),(0,t.jsx)(s.default,{}),(0,t.jsx)(c.default,{}),(0,t.jsx)(d.default,{})])})}},function(e){e.O(0,[4996,9883,2852,2576,6388,4429,4183,1336,4398,7453,9774,2888,179],function(){return e(e.s=55413)}),_N_E=e.O()}]);