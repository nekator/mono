(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9585],{83876:function(e,n,t){var i={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[76728,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(i)},a.id=83876,e.exports=a},24448:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/infotext/examples",function(){return t(22700)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i=t(52322),a=t(77900),r=t(2784);let l=()=>{let e=(0,r.useRef)(null),[n,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{var n;let i=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";i&&t(!0)},[]),[n,e]};var c=e=>{let{children:n,element:t="div",...i}=e,[a,c]=l();return a?(0,r.createElement)(t,{...i,children:n}):(0,r.createElement)(t,{...i,ref:c,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"},{label:"DBBadge",name:"badge"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/1418-using-a-newer-node-version").concat(e.link)});t(60586);var o=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>d(e)):[];var b=e=>{let{children:n}=e,[t,l]=(0,r.useState)(!1),[d,b]=(0,r.useState)(!1),[h,j]=(0,r.useState)(!1),x=(0,o.useRouter)();return(0,r.useEffect)(()=>{x.query&&(l("true"===x.query.fullscreen),b("true"===x.query.noh1),j("true"===x.query.properties))},[x]),(0,i.jsxs)(c,{children:[x.isReady&&t&&(0,i.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(h?"is-properties":""),children:n}),x.isReady&&!t&&(0,i.jsxs)(a.rG,{children:[(0,i.jsxs)(a.ff,{slot:"header",children:[(0,i.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(a.Pm,{data:JSON.stringify(u(s,x.pathname))}),(0,i.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})}},40816:function(e,n,t){"use strict";var i=t(52322),a=t(2784),r=t(87233),l=t(7070);let c=(0,a.forwardRef)(function(e,n){var t,c;let[s,d]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,i.jsxs)("span",{ref:n,className:(0,l.y)("db-infotext",e.className),title:e.title,"data-icon":(t=e.icon,c=e.variant,t||c&&r.I[c]||"info"),"data-variant":e.variant,"data-size":e.size,children:[s?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:s})}):null,e.children]})});n.Z=c},87233:function(e,n,t){"use strict";t.d(n,{I:function(){return i}});let i={critical:"error",warning:"error-triangle",successful:"check-circle",informational:"info"}},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return i},y:function(){return a}});let i=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},a=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let i="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)i+="".concat(e," ");else for(let n in e)e[n]&&(i+="".concat(n," "))}}),i.trim()}},22700:function(e,n,t){"use strict";t.r(n);var i=t(52322),a=t(70969),r=t(40816);n.default=()=>(0,i.jsxs)(a.Z,{children:[(0,i.jsx)("h1",{children:" DBInfotext Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{describedbyid:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"describedbyid, icon, id, key, size, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{describedbyid:"account",icon:"account",id:"account",size:"small",tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, id, key, size, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{icon:"account",id:"account",size:"small",tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, key, size, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{icon:"account",size:"small",tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"icon, size, tabIndex, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{icon:"account",size:"small",tabIndex:100,title:"account",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, size, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{icon:"account",size:"small",title:"account",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, size, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{icon:"account",size:"small",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"icon, size:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{icon:"account",size:"small",children:"Test"})}),(0,i.jsx)("dt",{children:"size:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{size:"small",children:"Test"})}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{children:"Test"},"account")}),(0,i.jsx)("dt",{children:"tabIndex:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{tabIndex:100,children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"icon:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{icon:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=24448)}),_N_E=e.O()}]);