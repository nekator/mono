(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5587],{83876:function(e,n,r){var t={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function s(e){if(!r.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],s=n[0];return r.e(n[1]).then(function(){return r(s)})}s.keys=function(){return Object.keys(t)},s.id=83876,e.exports=s},99644:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/properties",function(){return r(4048)}])},70969:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var t=r(52322),s=r(77900),i=r(2784);let d=()=>{let e=(0,i.useRef)(null),[n,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&r(!0)},[]),[n,e]},l=e=>{let{children:n,element:r="div",...t}=e,[s,l]=d();return s?(0,i.createElement)(r,{...t,children:n}):(0,i.createElement)(r,{...t,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},c=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],o=e=>({...e,link:"".concat("/mono/review/fix-angular-issue-wrapping-component").concat(e.link)});r(60586);var a=r(5632);let j=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?j(e.children,n):[]})).map(e=>o(e)):[],h=e=>{let{children:n}=e,[r,d]=(0,i.useState)(!1),[o,h]=(0,i.useState)(!1),[x,b]=(0,i.useState)(!1),p=(0,a.useRouter)();return(0,i.useEffect)(()=>{p.query&&(d("true"===p.query.fullscreen),h("true"===p.query.noh1),b("true"===p.query.properties))},[p]),(0,t.jsxs)(l,{children:[p.isReady&&r&&(0,t.jsx)("div",{className:"".concat(o?"noh1":""," ").concat(x?"is-properties":""),children:n}),p.isReady&&!r&&(0,t.jsxs)(s.rG,{children:[(0,t.jsxs)(s.ff,{slot:"header",children:[(0,t.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(s.Pm,{data:JSON.stringify(j(c,p.pathname))}),(0,t.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(s.fw,{slot:"footer",copyright:!0})]})]})};var x=h},4048:function(e,n,r){"use strict";r.r(n);var t=r(52322),s=r(45392),i=r(70969);let d=e=>{let{children:n}=e;return(0,t.jsx)(i.Z,{children:n})};function l(e){let n=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",em:"em"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"DBAlert"}),"\n",(0,t.jsx)(n.h2,{children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Options"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"closeButtonText"}),(0,t.jsx)(n.td,{children:"No description"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"headline"}),(0,t.jsx)(n.td,{children:"No description"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"No description"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"link"}),(0,t.jsx)(n.td,{children:"No description"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("pre",{children:(0,t.jsxs)("code",{className:"code-pre-wrap",children:["{",(0,t.jsx)("br",{})," current?:",(0,t.jsx)("br",{}),"  | boolean",(0,t.jsx)("br",{}),"  | 'time'",(0,t.jsx)("br",{}),"  | 'true'",(0,t.jsx)("br",{}),"  | 'false'",(0,t.jsx)("br",{}),"  | 'date'",(0,t.jsx)("br",{}),"  | 'page'",(0,t.jsx)("br",{}),"  | 'step'",(0,t.jsx)("br",{}),"  | 'location'",(0,t.jsx)("br",{}),"  | undefined;",(0,t.jsx)("br",{})," disabled?: boolean;",(0,t.jsx)("br",{})," href?: string;",(0,t.jsx)("br",{})," hreflang?: string;",(0,t.jsx)("br",{})," label?: string;",(0,t.jsx)("br",{})," target?: '_self' | '_blank' | '_parent' | '_top';",(0,t.jsx)("br",{})," rel?: string;",(0,t.jsx)("br",{})," role?: string;",(0,t.jsx)("br",{})," referrerpolicy?:",(0,t.jsx)("br",{}),"  | 'no-referrer'",(0,t.jsx)("br",{}),"  | 'no-referrer-when-downgrade'",(0,t.jsx)("br",{}),"  | 'origin'",(0,t.jsx)("br",{}),"  | 'origin-when-cross-origin'",(0,t.jsx)("br",{}),"  | 'same-origin'",(0,t.jsx)("br",{}),"  | 'strict-origin'",(0,t.jsx)("br",{}),"  | 'strict-origin-when-cross-origin'",(0,t.jsx)("br",{}),"  | 'unsafe-url';",(0,t.jsx)("br",{})," selected?: boolean;",(0,t.jsx)("br",{}),"}"]})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"No description"}),(0,t.jsx)(n.td,{children:"union"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"code-pre-wrap",children:"'alert' | 'inline'"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"slotLink"}),(0,t.jsx)(n.td,{children:"No description"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"behaviour"}),(0,t.jsx)(n.td,{children:"No description"}),(0,t.jsx)(n.td,{children:"union"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"code-pre-wrap",children:"'closable' | 'permanent'"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"variant"}),(0,t.jsx)(n.td,{children:"No description"}),(0,t.jsx)(n.td,{children:"union"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"code-pre-wrap",children:"'adaptive' | 'critical' | 'informational' | 'warning' | 'successful'"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"children"}),(0,t.jsx)(n.td,{children:"default slot"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"className"}),(0,t.jsx)(n.td,{children:"React specific for adding className to the component."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"key"}),(0,t.jsx)(n.td,{children:"React specific for render process."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id",children:"ID"})," of the component, generated automatically for some components as a fallback if unset."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"stylePath"}),(0,t.jsx)(n.td,{children:"Web Component specific: Adds a link tag with the path to show css inside Shadow DOM."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"title"}),(0,t.jsxs)(n.td,{children:["The ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title",children:"title attribute"})," specifies the tooltip of the component."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onClick"}),(0,t.jsx)(n.td,{children:"React specific onClick to pass to forward ref."}),(0,t.jsx)(n.td,{children:"function"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"code-pre-wrap",children:"(event: any) => void"})})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"icon"}),(0,t.jsxs)(n.td,{children:["Define an icon by it's identifier (like e.g. ",(0,t.jsx)(n.em,{children:"account"}),", compare to ",(0,t.jsx)(n.a,{href:"https://db-ui.github.io/mono/review/main/foundations/icons",children:"Icons"})," to get displayed in front of the elements content."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"elevation"}),(0,t.jsx)(n.td,{children:"No description"}),(0,t.jsx)(n.td,{children:"union"}),(0,t.jsx)(n.td,{children:(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"code-pre-wrap",children:"'default' | 'none'"})})})]})]})]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(d,Object.assign({},e,{children:(0,t.jsx)(l,e)}))}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=99644)}),_N_E=e.O()}]);