(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5558],{83876:function(e,n,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function a(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],a=n[0];return t.e(n[1]).then(function(){return t(a)})}a.keys=function(){return Object.keys(r)},a.id=83876,e.exports=a},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var l=typeof t;if("string"===l||"number"===l)e.push(t);else if(Array.isArray(t)){if(t.length){var i=a.apply(null,t);i&&e.push(i)}}else if("object"===l){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)r.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(t=(function(){return a}).apply(n,[]))&&(e.exports=t)}()},18275:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab-bar/examples",function(){return t(5256)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(52322),a=t(77900),l=t(2784);let i=()=>{let e=(0,l.useRef)(null),[n,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]};var s=e=>{let{children:n,element:t="div",...r}=e,[a,s]=i();return a?(0,l.createElement)(t,{...r,children:n}):(0,l.createElement)(t,{...r,ref:s,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let c=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/chore-update-playwright").concat(e.link)});t(60586);var o=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>d(e)):[];var b=e=>{let{children:n}=e,[t,i]=(0,l.useState)(!1),[d,b]=(0,l.useState)(!1),[h,f]=(0,l.useState)(!1),j=(0,o.useRouter)();return(0,l.useEffect)(()=>{j.query&&(i("true"===j.query.fullscreen),b("true"===j.query.noh1),f("true"===j.query.properties))},[j]),(0,r.jsxs)(s,{children:[j.isReady&&t&&(0,r.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(h?"is-properties":""),children:n}),j.isReady&&!t&&(0,r.jsxs)(a.rG,{children:[(0,r.jsxs)(a.ff,{slot:"header",children:[(0,r.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(a.Pm,{data:JSON.stringify(u(c,j.pathname))}),(0,r.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})}},14870:function(e,n,t){"use strict";var r=t(52322),a=t(2784),l=t(55136),i=t(72779),s=t.n(i);let c=(0,a.forwardRef)(function(e,n){var t;let[i,c]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,r.jsxs)("div",{role:"tablist",ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return s()(n)}("cmp-tab-bar",e.className),children:[i?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:i})}):null,e.tabs?(0,r.jsx)(r.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.tabs))||void 0===t?void 0:t.map(e=>(0,r.jsx)(l.Q,{name:e.name,active:e.active,label:e.label,content:e.content,children:e.children},e.name))}):null,e.children]})});n.Z=c},55136:function(e,n,t){"use strict";t.d(n,{Q:function(){return r.Z}});var r=t(83437)},83437:function(e,n,t){"use strict";var r=t(52322),a=t(2784),l=t(8490),i=t(7070),s=t(72779),c=t.n(s);let d=(0,a.forwardRef)(function(e,n){let t=(0,a.useRef)(null),[s,d]=(0,a.useState)(()=>l.IY),[o,u]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{if(d((0,i.V)()),e.stylePath&&u(e.stylePath),e.active){var n;null===(n=t.current)||void 0===n||n.click()}},[]),(0,r.jsxs)("div",{ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return c()(n)}("db-tab",e.className),children:[o?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:o})}):null,(0,r.jsx)("input",{type:"radio",ref:t,name:e.name,id:s}),(0,r.jsx)("label",{role:"tab",htmlFor:s,children:e.label}),(0,r.jsxs)("section",{role:"tabpanel",id:"content-"+s,children:[e.content?(0,r.jsx)(r.Fragment,{children:e.content}):null,e.children]})]})});n.Z=d},8490:function(e,n,t){"use strict";var r,a,l,i,s,c,d;t.d(n,{$f:function(){return h},DM:function(){return f},IY:function(){return o},SU:function(){return u},ce:function(){return b},iw:function(){return r},r$:function(){return l}});let o="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",b="Close Button";(s=r||(r={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let h=Object.entries(r).map(e=>{let[,n]=e;return n});(a||(a={})).PRIMARY="primary",(c=l||(l={})).NEUTRAL_0="neutral-0",c.NEUTRAL_1="neutral-1",c.NEUTRAL_2="neutral-2",c.NEUTRAL_3="neutral-3",c.NEUTRAL_4="neutral-4",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.PRIMARY="primary",c.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",c.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",c.SECONDARY="secondary",c.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",c.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.WARNING="warning",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let f=Object.entries(l).map(e=>{let[,n]=e;return n});Object.entries(a).map(e=>{let[,n]=e;return n}),(d=i||(i={})).CRITICAL="critical",d.INFORMATIONAL="informational",d.WARNING="warning",d.SUCCESSFUL="successful",Object.entries(i).map(e=>{let[,n]=e;return n})},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return r}});let r=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},5256:function(e,n,t){"use strict";t.r(n);var r=t(52322),a=t(70969),l=t(14870);n.default=()=>(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h1",{children:" DBTabBar Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"Default:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{children:"Test"})}),(0,r.jsx)("dt",{children:"name:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{name:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"describedbyid, id, key, name, tabIndex, tabs, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{describedbyid:"account",id:"account",name:"account",tabIndex:100,tabs:"undefined",title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"describedbyid, id, key, tabIndex, tabs, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{describedbyid:"account",id:"account",tabIndex:100,tabs:"undefined",title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"describedbyid, id, key, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{describedbyid:"account",id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"id, key, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{id:"account",tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"key, tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{tabIndex:100,title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"tabIndex, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{tabIndex:100,title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"tabs:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{tabs:"undefined",children:"Test"})}),(0,r.jsx)("dt",{children:"describedbyid:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{describedbyid:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{id:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{children:"Test"},"account")}),(0,r.jsx)("dt",{children:"tabIndex:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(l.Z,{tabIndex:100,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=18275)}),_N_E=e.O()}]);