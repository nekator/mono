(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4297],{83876:function(e,n,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(r)},a.id=83876,e.exports=a},41013:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab/how-to-use",function(){return t(45764)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(52322),a=t(77900),s=t(2784);let l=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let r=(null===(n=e?.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]};var i=e=>{let{children:n,element:t="div",...r}=e,[a,i]=l();return a?(0,s.createElement)(t,{...r,children:n}):(0,s.createElement)(t,{...r,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/docs-added-bugreport-template").concat(e.link)});t(60586);var d=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>c(e)):[];var b=e=>{let{children:n}=e,[t,l]=(0,s.useState)(!1),[c,b]=(0,s.useState)(!1),[h,j]=(0,s.useState)(!1),p=(0,d.useRouter)();return(0,s.useEffect)(()=>{p.query&&(l("true"===p.query.fullscreen),b("true"===p.query.noh1),j("true"===p.query.properties))},[p]),(0,r.jsxs)(i,{children:[p.isReady&&t&&(0,r.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(h?"is-properties":""),children:n}),p.isReady&&!t&&(0,r.jsxs)(a.rG,{children:[(0,r.jsxs)(a.ff,{slot:"header",children:[(0,r.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(a.Pm,{data:JSON.stringify(u(o,p.pathname))}),(0,r.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})}},52413:function(e,n,t){"use strict";t.r(n);var r=t(52322),a=t(45392);function s(e){let n=Object.assign({h2:"h2",p:"p"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Angular"}),"\n",(0,r.jsx)(n.p,{children:"TODO"})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},91318:function(e,n,t){"use strict";t.r(n);var r=t(52322),a=t(45392);function s(e){let n=Object.assign({h2:"h2",p:"p"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"HTML"}),"\n",(0,r.jsx)(n.p,{children:"TODO"})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},35958:function(e,n,t){"use strict";t.r(n);var r=t(52322),a=t(45392);function s(e){let n=Object.assign({h2:"h2",p:"p"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"React"}),"\n",(0,r.jsx)(n.p,{children:"TODO"})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},3210:function(e,n,t){"use strict";t.r(n);var r=t(52322),a=t(45392);function s(e){let n=Object.assign({h2:"h2",p:"p"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Vue"}),"\n",(0,r.jsx)(n.p,{children:"TODO"})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},45764:function(e,n,t){"use strict";t.r(n);var r=t(52322),a=t(45392),s=t(70969),l=t(91318),i=t(52413),o=t(35958),c=t(3210);let d=e=>{let{children:n}=e;return(0,r.jsx)(s.Z,{children:n})};function u(e){let n=Object.assign({h1:"h1"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"How to use DBTab"}),"\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(c.default,{})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,Object.assign({},e,{children:(0,r.jsx)(u,e)}))}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=41013)}),_N_E=e.O()}]);