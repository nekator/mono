(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3391],{83876:function(e,t,n){var o={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function c(e){if(!n.o(o,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=o[e],c=t[0];return n.e(t[1]).then(function(){return n(c)})}c.keys=function(){return Object.keys(o)},c.id=83876,e.exports=c},36238:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer/examples",function(){return n(20263)}])},70969:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var o=n(52322),c=n(77900),d=n(2784);let l=()=>{let e=(0,d.useRef)(null),[t,n]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{var t;let o=(null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.innerHTML)==="";o&&n(!0)},[]),[t,e]};var s=e=>{let{children:t,element:n="div",...o}=e,[c,s]=l();return c?(0,d.createElement)(n,{...o,children:t}):(0,d.createElement)(n,{...o,ref:s,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let i=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"05 Navigation",link:"/components/05-navigation",children:[{label:"DBNavigationItem",name:"navigation-item"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],r=e=>({...e,link:"".concat("/mono/review/main").concat(e.link)});n(60586);var a=n(5632);let u=(e,t)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===t||"/"!==e.link&&t.includes(e.link),children:e.children?u(e.children,t):[]})).map(e=>r(e)):[];var h=e=>{let{children:t}=e,[n,l]=(0,d.useState)(!1),[r,h]=(0,d.useState)(!1),[x,b]=(0,d.useState)(!1),j=(0,a.useRouter)();return(0,d.useEffect)(()=>{j.query&&(l("true"===j.query.fullscreen),h("true"===j.query.noh1),b("true"===j.query.properties))},[j]),(0,o.jsxs)(s,{children:[j.isReady&&n&&(0,o.jsx)("div",{className:"".concat(r?"noh1":""," ").concat(x?"is-properties":""),children:t}),j.isReady&&!n&&(0,o.jsxs)(c.rG,{children:[(0,o.jsxs)(c.ff,{slot:"header",children:[(0,o.jsx)(c.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,o.jsx)(c.Pm,{data:JSON.stringify(u(i,j.pathname))}),(0,o.jsx)(c.T2,{owner:"db-ui",repo:"mono"})]}),(0,o.jsx)("div",{children:t}),(0,o.jsx)(c.fw,{slot:"footer",copyright:!0})]})]})}},96889:function(e,t,n){"use strict";var o=n(52322),c=n(2784),d=n(7070);let l=(0,c.forwardRef)(function(e,t){function n(e){return!!(e&&"_"!==e&&"none"!==e)}let[l,s]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,o.jsxs)("button",{id:e.id,ref:t,className:(0,d.y)("db-button",e.className,{"is-icon-text-replace":n(e.icon)&&e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":n(e.icon)?e.icon:void 0,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:[l?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("link",{rel:"stylesheet",href:l})}):null,e.children]})});t.Z=l},94938:function(e,t,n){"use strict";n.d(t,{Y:function(){return o.Z}});var o=n(96889)},37008:function(e,t,n){"use strict";var o=n(52322),c=n(2784),d=n(94938),l=n(8490),s=n(7070);let i=(0,c.forwardRef)(function(e,t){var n;let i=(0,c.useRef)(t),r=(0,c.useRef)(null),[a,u]=(0,c.useState)(()=>l.IY);function h(t){"Escape"===t.key&&t.preventDefault(),("close"===t||"Escape"===t.key||"DIALOG"===t.target.nodeName&&!e.noBackdrop)&&e.onClose&&e.onClose()}function x(){i.current&&(e.open&&!i.current.open&&(r.current&&(r.current.hidden=!1),e.noBackdrop?i.current.show():i.current.showModal()),!e.open&&i.current.open&&(r.current&&(r.current.hidden=!0),setTimeout(()=>{var e;r.current&&(r.current.hidden=!1),null===(e=i.current)||void 0===e||e.close()},401)))}let[b,j]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{u(e.id||"drawer-"+(0,s.V)()),e.stylePath&&j(e.stylePath),x()},[]),(0,c.useEffect)(()=>{x()},[e.open]),(0,o.jsxs)("dialog",{className:"db-drawer",id:a,ref:i,onClick:e=>{h(e)},onKeyDown:e=>h(e),"data-backdrop":!e.noBackdrop,"data-emphasis":e.emphasis,children:[b?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("link",{rel:"stylesheet",href:b})}):null,(0,o.jsxs)("article",{ref:r,className:(0,s.y)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,o.jsxs)("header",{className:"db-drawer-header",children:[e.slotDrawerHeader,e.withCloseButton?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(d.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>h("close"),children:null!==(n=e.closeButtonText)&&void 0!==n?n:l.ce})}):null]}),(0,o.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})});t.Z=i},8490:function(e,t,n){"use strict";var o,c,d,l,s,i,r;n.d(t,{$f:function(){return x},DM:function(){return b},IY:function(){return a},SU:function(){return u},ce:function(){return h},iw:function(){return o},r$:function(){return d}});let a="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="Close Button";(s=o||(o={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let x=Object.entries(o).map(e=>{let[,t]=e;return t});(c||(c={})).PRIMARY="primary",(i=d||(d={})).NEUTRAL_0="neutral-0",i.NEUTRAL_1="neutral-1",i.NEUTRAL_2="neutral-2",i.NEUTRAL_3="neutral-3",i.NEUTRAL_4="neutral-4",i.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",i.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",i.PRIMARY="primary",i.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",i.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",i.SECONDARY="secondary",i.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",i.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",i.SUCCESSFUL="successful",i.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",i.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",i.CRITICAL="critical",i.CRITICAL_TRANSPARENT_Full="critical-transparent-full",i.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",i.WARNING="warning",i.WARNING_TRANSPARENT_FULL="warning-transparent-full",i.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",i.INFORMATIONAL="informational",i.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",i.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let b=Object.entries(d).map(e=>{let[,t]=e;return t});Object.entries(c).map(e=>{let[,t]=e;return t}),(r=l||(l={})).CRITICAL="critical",r.INFORMATIONAL="informational",r.WARNING="warning",r.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,t]=e;return t})},7070:function(e,t,n){"use strict";n.d(t,{V:function(){return o},y:function(){return c}});let o=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},c=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let o="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)o+="".concat(e," ");else for(let t in e)e[t]&&(o+="".concat(t," "))}}),o.trim()}},20263:function(e,t,n){"use strict";n.r(t);var o=n(52322),c=n(70969),d=n(37008);t.default=()=>(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("h1",{children:" DBDrawer Examples "}),(0,o.jsxs)("dl",{className:"example-list",children:[(0,o.jsx)("dt",{children:"Default:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{children:"Test"})}),(0,o.jsx)("dt",{children:"direction:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{direction:"right",children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, direction, emphasis, id, key, noBackdrop, onClose, open, rounded, slotDrawerHeader, spacing, tabIndex, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",direction:"right",emphasis:"weak",id:"account",noBackdrop:!0,onClose:()=>console.log("Click"),open:!0,rounded:!0,slotDrawerHeader:"account",spacing:"small",tabIndex:100,title:"account",width:"auto",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, emphasis, id, key, noBackdrop, onClose, open, rounded, slotDrawerHeader, spacing, tabIndex, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",emphasis:"weak",id:"account",noBackdrop:!0,onClose:()=>console.log("Click"),open:!0,rounded:!0,slotDrawerHeader:"account",spacing:"small",tabIndex:100,title:"account",width:"auto",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, id, key, noBackdrop, onClose, open, rounded, slotDrawerHeader, spacing, tabIndex, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",id:"account",noBackdrop:!0,onClose:()=>console.log("Click"),open:!0,rounded:!0,slotDrawerHeader:"account",spacing:"small",tabIndex:100,title:"account",width:"auto",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, id, key, onClose, open, rounded, slotDrawerHeader, spacing, tabIndex, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",id:"account",onClose:()=>console.log("Click"),open:!0,rounded:!0,slotDrawerHeader:"account",spacing:"small",tabIndex:100,title:"account",width:"auto",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, id, key, onClose, rounded, slotDrawerHeader, spacing, tabIndex, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",id:"account",onClose:()=>console.log("Click"),rounded:!0,slotDrawerHeader:"account",spacing:"small",tabIndex:100,title:"account",width:"auto",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, id, key, onClose, slotDrawerHeader, spacing, tabIndex, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",id:"account",onClose:()=>console.log("Click"),slotDrawerHeader:"account",spacing:"small",tabIndex:100,title:"account",width:"auto",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, id, key, onClose, spacing, tabIndex, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",id:"account",onClose:()=>console.log("Click"),spacing:"small",tabIndex:100,title:"account",width:"auto",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, id, key, onClose, tabIndex, title, width, withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",id:"account",onClose:()=>console.log("Click"),tabIndex:100,title:"account",width:"auto",withCloseButton:!0,children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, describedbyid, id, key, onClose, tabIndex, title, width:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",describedbyid:"account",id:"account",onClose:()=>console.log("Click"),tabIndex:100,title:"account",width:"auto",children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, id, key, onClose, tabIndex, title, width:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",id:"account",onClose:()=>console.log("Click"),tabIndex:100,title:"account",width:"auto",children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, key, onClose, tabIndex, title, width:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",onClose:()=>console.log("Click"),tabIndex:100,title:"account",width:"auto",children:"Test"},"account")}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, onClose, tabIndex, title, width:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",onClose:()=>console.log("Click"),tabIndex:100,title:"account",width:"auto",children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, onClose, title, width:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",onClose:()=>console.log("Click"),title:"account",width:"auto",children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, onClose, width:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",onClose:()=>console.log("Click"),width:"auto",children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonId, closeButtonText, width:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",closeButtonText:"account",width:"auto",children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonText, width:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonText:"account",width:"auto",children:"Test"})}),(0,o.jsx)("dt",{children:"width:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{width:"auto",children:"Test"})}),(0,o.jsx)("dt",{children:"emphasis:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{emphasis:"weak",children:"Test"})}),(0,o.jsx)("dt",{children:"noBackdrop:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{noBackdrop:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"open:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{open:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"rounded:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{rounded:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"slotDrawerHeader:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{slotDrawerHeader:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"spacing:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{spacing:"small",children:"Test"})}),(0,o.jsx)("dt",{children:"withCloseButton:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{withCloseButton:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"describedbyid:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{describedbyid:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"id:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{id:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"key:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{children:"Test"},"account")}),(0,o.jsx)("dt",{children:"tabIndex:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{tabIndex:100,children:"Test"})}),(0,o.jsx)("dt",{children:"title:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{title:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"onClose:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{onClose:()=>console.log("Click"),children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonId:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonId:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"closeButtonText:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(d.Z,{closeButtonText:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=36238)}),_N_E=e.O()}]);