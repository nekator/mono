(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3301],{83876:function(e,n,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function s(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],s=n[0];return t.e(n[1]).then(function(){return t(s)})}s.keys=function(){return Object.keys(r)},s.id=83876,e.exports=s},28054:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/migration",function(){return t(70541)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r=t(52322),s=t(77900),i=t(2784);let l=()=>{let e=(0,i.useRef)(null),[n,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]};var d=e=>{let{children:n,element:t="div",...r}=e,[s,d]=l();return s?(0,i.createElement)(t,{...r,children:n}):(0,i.createElement)(t,{...r,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let a=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/version/v0.0.26").concat(e.link)});t(60586);var o=t(5632);let h=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?h(e.children,n):[]})).map(e=>c(e)):[];var j=e=>{let{children:n}=e,[t,l]=(0,i.useState)(!1),[c,j]=(0,i.useState)(!1),[u,x]=(0,i.useState)(!1),b=(0,o.useRouter)();return(0,i.useEffect)(()=>{b.query&&(l("true"===b.query.fullscreen),j("true"===b.query.noh1),x("true"===b.query.properties))},[b]),(0,r.jsxs)(d,{children:[b.isReady&&t&&(0,r.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(u?"is-properties":""),children:n}),b.isReady&&!t&&(0,r.jsxs)(s.rG,{children:[(0,r.jsxs)(s.ff,{slot:"header",children:[(0,r.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(s.Pm,{data:JSON.stringify(h(a,b.pathname))}),(0,r.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(s.fw,{slot:"footer",copyright:!0})]})]})}},78221:function(e,n,t){"use strict";t.r(n);var r=t(52322),s=t(45392);function i(e){let n=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",strong:"strong",a:"a",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"General"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(n.h3,{children:"class"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Before"}),(0,r.jsx)(n.th,{align:"center",children:"Status"}),(0,r.jsx)(n.th,{children:"After"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"elm-notification"})}),(0,r.jsx)(n.td,{align:"center",children:"\uD83D\uDD01"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"db-alert"})}),(0,r.jsxs)(n.td,{children:["The old notification component has been split into 2 different components ",(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/components/feedback/notification",children:"Notification"})," and ",(0,r.jsx)(n.a,{href:"https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/components/feedback/alert",children:"Alert"})," for more information (when and how to use it)."]})]})})]}),"\n",(0,r.jsx)(n.h3,{children:"variant ➡ type"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Before"}),(0,r.jsx)(n.th,{align:"center",children:"Status"}),(0,r.jsx)(n.th,{children:"After"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"alert"})}),(0,r.jsx)(n.td,{align:"center",children:"\uD83D\uDD01"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"alert"})}),(0,r.jsx)(n.td,{children:"Default alert with different look"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"status"})}),(0,r.jsx)(n.td,{align:"center",children:"❌"}),(0,r.jsx)(n.td,{children:"❌"}),(0,r.jsxs)(n.td,{children:["Status can be changed by ",(0,r.jsx)(n.code,{children:"variants"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{align:"center",children:"\uD83C\uDD95"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"inline"})}),(0,r.jsx)(n.td,{children:"New styling with shadow and rounded corners (like card)"})]})]})]}),"\n",(0,r.jsx)(n.h3,{children:"type ➡ variants"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Before"}),(0,r.jsx)(n.th,{align:"center",children:"Status"}),(0,r.jsx)(n.th,{children:"After"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{align:"center",children:"\uD83C\uDD95"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"adaptive"})}),(0,r.jsx)(n.td,{children:"Default: change colors based on background"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"error"})}),(0,r.jsx)(n.td,{align:"center",children:"\uD83D\uDD01"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"critical"})}),(0,r.jsx)(n.td,{children:"'Red' colored alert to show error messages"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"informative"})}),(0,r.jsx)(n.td,{align:"center",children:"\uD83D\uDD01"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"informational"})}),(0,r.jsx)(n.td,{children:"'Blue' colored alert to show information messages"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"warning"})}),(0,r.jsx)(n.td,{align:"center",children:"\uD83D\uDD01"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"warning"})}),(0,r.jsx)(n.td,{children:"'Yellow' colored alert to show warning messages"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"success"})}),(0,r.jsx)(n.td,{align:"center",children:"\uD83D\uDD01"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"successful"})}),(0,r.jsx)(n.td,{children:"'Green' colored alert to show success messages"})]})]})]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},70541:function(e,n,t){"use strict";t.r(n);var r=t(52322),s=t(45392),i=t(70969),l=t(78221);let d=e=>{let{children:n}=e;return(0,r.jsx)(i.Z,{children:n})};function a(e){let n=Object.assign({h1:"h1"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"DBAlert Migration"}),"\n",(0,r.jsx)(l.default,{})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,Object.assign({},e,{children:(0,r.jsx)(a,e)}))}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=28054)}),_N_E=e.O()}]);