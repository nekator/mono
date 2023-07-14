(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{83876:function(e,n,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(r)},a.id=83876,e.exports=a},37468:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab/examples",function(){return t(66264)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(52322),a=t(77900),i=t(2784);let l=()=>{let e=(0,i.useRef)(null),[n,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let r=(null===(n=e?.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]};var c=e=>{let{children:n,element:t="div",...r}=e,[a,c]=l();return a?(0,i.createElement)(t,{...r,children:n}):(0,i.createElement)(t,{...r,ref:c,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let d=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],s=e=>({...e,link:"".concat("/mono/review/mfranzke-patch-2").concat(e.link)});t(60586);var o=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>s(e)):[];var b=e=>{let{children:n}=e,[t,l]=(0,i.useState)(!1),[s,b]=(0,i.useState)(!1),[h,j]=(0,i.useState)(!1),m=(0,o.useRouter)();return(0,i.useEffect)(()=>{m.query&&(l("true"===m.query.fullscreen),b("true"===m.query.noh1),j("true"===m.query.properties))},[m]),(0,r.jsxs)(c,{children:[m.isReady&&t&&(0,r.jsx)("div",{className:"".concat(s?"noh1":""," ").concat(h?"is-properties":""),children:n}),m.isReady&&!t&&(0,r.jsxs)(a.rG,{children:[(0,r.jsxs)(a.ff,{slot:"header",children:[(0,r.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(a.Pm,{data:JSON.stringify(u(d,m.pathname))}),(0,r.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})}},83437:function(e,n,t){"use strict";var r=t(52322),a=t(2784),i=t(8490),l=t(7070);let c=(0,a.forwardRef)(function(e,n){let t=(0,a.useRef)(null),[c,d]=(0,a.useState)(()=>i.IY),[s,o]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{if(d((0,l.V)()),e.stylePath&&o(e.stylePath),e.active){var n;null===(n=t.current)||void 0===n||n.click()}},[]),(0,r.jsxs)("div",{ref:n,className:(0,l.y)("db-tab",e.className),children:[s?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:s})}):null,(0,r.jsx)("input",{type:"radio",ref:t,name:e.name,id:c}),(0,r.jsx)("label",{role:"tab",htmlFor:c,children:e.label}),(0,r.jsxs)("section",{role:"tabpanel",id:"content-"+c,children:[e.content?(0,r.jsx)(r.Fragment,{children:e.content}):null,e.children]})]})});n.Z=c},8490:function(e,n,t){"use strict";var r,a,i,l,c,d,s;t.d(n,{$f:function(){return h},DM:function(){return j},IY:function(){return o},SU:function(){return u},ce:function(){return b},iw:function(){return r},r$:function(){return i}});let o="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",b="Close Button";(c=r||(r={})).FUNCTIONAL="functional",c.REGULAR="regular",c.EXPRESSIVE="expressive";let h=Object.entries(r).map(e=>{let[,n]=e;return n});(a||(a={})).PRIMARY="primary",(d=i||(i={})).NEUTRAL_0="neutral-0",d.NEUTRAL_1="neutral-1",d.NEUTRAL_2="neutral-2",d.NEUTRAL_3="neutral-3",d.NEUTRAL_4="neutral-4",d.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",d.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",d.PRIMARY="primary",d.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",d.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",d.SECONDARY="secondary",d.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",d.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",d.SUCCESSFUL="successful",d.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",d.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",d.CRITICAL="critical",d.CRITICAL_TRANSPARENT_Full="critical-transparent-full",d.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",d.WARNING="warning",d.WARNING_TRANSPARENT_FULL="warning-transparent-full",d.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",d.INFORMATIONAL="informational",d.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",d.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let j=Object.entries(i).map(e=>{let[,n]=e;return n});Object.entries(a).map(e=>{let[,n]=e;return n}),(s=l||(l={})).CRITICAL="critical",s.INFORMATIONAL="informational",s.WARNING="warning",s.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,n]=e;return n})},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return r},y:function(){return a}});let r=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},a=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()}},66264:function(e,n,t){"use strict";t.r(n);var r=t(52322),a=t(70969),i=t(83437);n.default=()=>(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h1",{children:" DBTab Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"Default:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{children:"Test"})}),(0,r.jsx)("dt",{children:"active:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{active:!0,children:"Test"})}),(0,r.jsx)("dt",{children:"active, content, describedbyid, id, key, label, name, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{active:!0,content:"account",describedbyid:"account",id:"account",label:"account",name:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"content, describedbyid, id, key, label, name, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{content:"account",describedbyid:"account",id:"account",label:"account",name:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"content, describedbyid, id, key, name, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{content:"account",describedbyid:"account",id:"account",name:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"content, describedbyid, id, key, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{content:"account",describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"id, key, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"key, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{tabIndex:100,title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"label:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{label:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"name:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{name:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"content:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{content:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"describedbyid:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{describedbyid:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{id:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{children:"Test"},"account")}),(0,r.jsx)("dt",{children:"tabIndex:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(i.Z,{tabIndex:100,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=37468)}),_N_E=e.O()}]);