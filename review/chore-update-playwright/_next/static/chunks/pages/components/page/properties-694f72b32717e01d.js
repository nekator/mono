(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7944],{83876:function(e,t,n){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function s(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],s=t[0];return n.e(t[1]).then(function(){return n(s)})}s.keys=function(){return Object.keys(r)},s.id=83876,e.exports=s},41383:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/page/properties",function(){return n(928)}])},70969:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(52322),s=n(77900),l=n(2784);let i=()=>{let e=(0,l.useRef)(null),[t,n]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var t;let r=(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.innerHTML)==="";r&&n(!0)},[]),[t,e]};var d=e=>{let{children:t,element:n="div",...r}=e,[s,d]=i();return s?(0,l.createElement)(n,{...r,children:t}):(0,l.createElement)(n,{...r,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let a=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],o=e=>({...e,link:"".concat("/mono/review/chore-update-playwright").concat(e.link)});n(60586);var c=n(5632);let h=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?h(e.children,t):[]})).map(e=>o(e)):[];var b=e=>{let{children:t}=e,[n,i]=(0,l.useState)(!1),[o,b]=(0,l.useState)(!1),[j,x]=(0,l.useState)(!1),u=(0,c.useRouter)();return(0,l.useEffect)(()=>{u.query&&(i("true"===u.query.fullscreen),b("true"===u.query.noh1),x("true"===u.query.properties))},[u]),(0,r.jsxs)(d,{children:[u.isReady&&n&&(0,r.jsx)("div",{className:"".concat(o?"noh1":""," ").concat(j?"is-properties":""),children:t}),u.isReady&&!n&&(0,r.jsxs)(s.rG,{children:[(0,r.jsxs)(s.ff,{slot:"header",children:[(0,r.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(s.Pm,{data:JSON.stringify(h(a,u.pathname))}),(0,r.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:t}),(0,r.jsx)(s.fw,{slot:"footer",copyright:!0})]})]})}},928:function(e,t,n){"use strict";n.r(t);var r=n(52322),s=n(45392),l=n(70969);let i=e=>{let{children:t}=e;return(0,r.jsx)(l.Z,{children:t})};function d(e){let t=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",code:"code"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"DBPage"}),"\n",(0,r.jsx)(t.h2,{children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Options"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"literal"}),(0,r.jsx)(t.td,{children:(0,r.jsx)("pre",{children:(0,r.jsx)("code",{className:"code-pre-wrap",children:"'fixedHeaderFooter'"})})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"slotHeader"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"slotFooter"}),(0,r.jsx)(t.td,{children:"No description"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"children"}),(0,r.jsx)(t.td,{children:"default slot"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"className"}),(0,r.jsx)(t.td,{children:"React specific for adding className to the component."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"describedbyid"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",children:(0,r.jsx)(t.code,{children:"aria-describedby"})})," is used to link to the elements that describe the element with the set attribute."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"React specific for render process."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stylePath"}),(0,r.jsx)(t.td,{children:"Web Component specific: Adds a link tag with the path to show css inside Shadow DOM."}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tabIndex"}),(0,r.jsxs)(t.td,{children:["The default tabindex (",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex?retiredLocale=de",children:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex?retiredLocale=de"}),")."]}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"title"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title",children:"title attribute"})," specifies the tooltip of the component."]}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{})]})]})]})]})}t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,Object.assign({},e,{children:(0,r.jsx)(d,e)}))}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=41383)}),_N_E=e.O()}]);