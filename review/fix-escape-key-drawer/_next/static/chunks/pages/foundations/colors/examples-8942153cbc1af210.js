(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3243],{83876:function(e,n,t){var a={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function r(e){if(!t.o(a,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=a[e],r=n[0];return t.e(n[1]).then(function(){return t(r)})}r.keys=function(){return Object.keys(a)},r.id=83876,e.exports=r},40121:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors/examples",function(){return t(33226)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(52322),r=t(77900),l=t(2784);let o=()=>{let e=(0,l.useRef)(null),[n,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var n;let a=(null===(n=e?.current)||void 0===n?void 0:n.innerHTML)==="";a&&t(!0)},[]),[n,e]};var i=e=>{let{children:n,element:t="div",...a}=e,[r,i]=o();return r?(0,l.createElement)(t,{...a,children:n}):(0,l.createElement)(t,{...a,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],c=e=>({...e,link:"".concat("/mono/review/fix-escape-key-drawer").concat(e.link)});t(60586);var d=t(5632);let b=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?b(e.children,n):[]})).map(e=>c(e)):[];var u=e=>{let{children:n}=e,[t,o]=(0,l.useState)(!1),[c,u]=(0,l.useState)(!1),[m,p]=(0,l.useState)(!1),h=(0,d.useRouter)();return(0,l.useEffect)(()=>{h.query&&(o("true"===h.query.fullscreen),u("true"===h.query.noh1),p("true"===h.query.properties))},[h]),(0,a.jsxs)(i,{children:[h.isReady&&t&&(0,a.jsx)("div",{className:"".concat(c?"noh1":""," ").concat(m?"is-properties":""),children:n}),h.isReady&&!t&&(0,a.jsxs)(r.rG,{children:[(0,a.jsxs)(r.ff,{slot:"header",children:[(0,a.jsx)(r.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,a.jsx)(r.Pm,{data:JSON.stringify(b(s,h.pathname))}),(0,a.jsx)(r.T2,{owner:"db-ui",repo:"mono"})]}),(0,a.jsx)("div",{children:n}),(0,a.jsx)(r.fw,{slot:"footer",copyright:!0})]})]})}},33226:function(e,n,t){"use strict";t.r(n);var a=t(52322),r=t(45392),l=t(70969);let o=e=>{let{children:n}=e;return(0,a.jsx)(l.Z,{children:n})};function i(e){let n=Object.assign({h1:"h1",p:"p"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Colors Examples"}),"\n",(0,a.jsx)(n.p,{children:"TODO: Color Examples"})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(o,Object.assign({},e,{children:(0,a.jsx)(i,e)}))}}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=40121)}),_N_E=e.O()}]);