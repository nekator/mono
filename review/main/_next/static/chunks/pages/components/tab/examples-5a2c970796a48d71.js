(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[633],{83876:function(e,n,t){var r={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function i(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],i=n[0];return t.e(n[1]).then(function(){return t(i)})}i.keys=function(){return Object.keys(r)},i.id=83876,e.exports=i},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var c=typeof t;if("string"===c||"number"===c)e.push(t);else if(Array.isArray(t)){if(t.length){var a=i.apply(null,t);a&&e.push(a)}}else if("object"===c){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)r.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(t=(function(){return i}).apply(n,[]))&&(e.exports=t)}()},37468:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab/examples",function(){return t(66264)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(52322),i=t(77900),c=t(2784);let a=()=>{let e=(0,c.useRef)(null),[n,t]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var n;let r=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";r&&t(!0)},[]),[n,e]},l=e=>{let{children:n,element:t="div",...r}=e,[i,l]=a();return i?(0,c.createElement)(t,{...r,children:n}):(0,c.createElement)(t,{...r,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},s=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/main").concat(e.link)});t(60586);var o=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>d(e)):[],b=e=>{let{children:n}=e,[t,a]=(0,c.useState)(!1),[d,b]=(0,c.useState)(!1),[h,j]=(0,c.useState)(!1),m=(0,o.useRouter)();return(0,c.useEffect)(()=>{m.query&&(a("true"===m.query.fullscreen),b("true"===m.query.noh1),j("true"===m.query.properties))},[m]),(0,r.jsxs)(l,{children:[m.isReady&&t&&(0,r.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(h?"is-properties":""),children:n}),m.isReady&&!t&&(0,r.jsxs)(i.rG,{children:[(0,r.jsxs)(i.ff,{slot:"header",children:[(0,r.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,r.jsx)(i.Pm,{data:JSON.stringify(u(s,m.pathname))}),(0,r.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,r.jsx)("div",{children:n}),(0,r.jsx)(i.fw,{slot:"footer",copyright:!0})]})]})};var h=b},83437:function(e,n,t){"use strict";var r=t(52322),i=t(2784),c=t(8490),a=t(7070),l=t(72779),s=t.n(l);let d=(0,i.forwardRef)(function(e,n){let t=(0,i.useRef)(null),[l,d]=(0,i.useState)(()=>c.IY),[o,u]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{if(d((0,a.V)()),e.stylePath&&u(e.stylePath),e.active){var n;null===(n=t.current)||void 0===n||n.click()}},[]),(0,r.jsxs)("div",{ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return s()(n)}("db-tab",e.className),children:[o?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:o})}):null,(0,r.jsx)("input",{type:"radio",ref:t,name:e.name,id:l}),(0,r.jsx)("label",{role:"tab",htmlFor:l,children:e.label}),(0,r.jsxs)("section",{role:"tabpanel",id:"content-"+l,children:[e.content?(0,r.jsx)(r.Fragment,{children:e.content}):null,e.children]})]})});n.Z=d},8490:function(e,n,t){"use strict";var r,i,c,a,l,s;t.d(n,{$f:function(){return u},DM:function(){return b},IY:function(){return d},SU:function(){return o},iw:function(){return r},r$:function(){return i}});let d="OVERWRITE_DEFAULT_ID",o="LABEL SHOULD BE SET";(a=r||(r={})).FUNCTIONAL="functional",a.REGULAR="regular",a.EXPRESSIVE="expressive";let u=Object.entries(r).map(e=>{let[,n]=e;return n});(l=i||(i={})).NEUTRAL_0="neutral-0",l.NEUTRAL_1="neutral-1",l.NEUTRAL_2="neutral-2",l.NEUTRAL_3="neutral-3",l.NEUTRAL_4="neutral-4",l.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",l.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",l.PRIMARY="primary",l.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",l.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",l.SECONDARY="secondary",l.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",l.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",l.SUCCESSFUL="successful",l.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",l.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",l.CRITICAL="critical",l.CRITICAL_TRANSPARENT_Full="critical-transparent-full",l.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",l.WARNING="warning",l.WARNING_TRANSPARENT_FULL="warning-transparent-full",l.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",l.INFORMATIONAL="informational",l.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",l.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let b=Object.entries(i).map(e=>{let[,n]=e;return n});(s=c||(c={})).CRITICAL="critical",s.INFORMATIONAL="informational",s.WARNING="warning",s.SUCCESSFUL="successful",Object.entries(c).map(e=>{let[,n]=e;return n})},7070:function(e,n,t){"use strict";t.d(n,{V:function(){return r}});let r=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},66264:function(e,n,t){"use strict";t.r(n);var r=t(52322),i=t(70969),c=t(83437);n.default=()=>(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h1",{children:" DBTab Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"Default:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{children:"Test"})}),(0,r.jsx)("dt",{children:"active:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{active:!0,children:"Test"})}),(0,r.jsx)("dt",{children:"active, content, describedbyid, id, key, label, name, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{active:!0,content:"account",describedbyid:"account",id:"account",label:"account",name:"account",title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"content, describedbyid, id, key, label, name, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{content:"account",describedbyid:"account",id:"account",label:"account",name:"account",title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"content, describedbyid, id, key, name, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{content:"account",describedbyid:"account",id:"account",name:"account",title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"content, describedbyid, id, key, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{content:"account",describedbyid:"account",id:"account",title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"describedbyid, id, key, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{describedbyid:"account",id:"account",title:"account",children:"Test"},"account")}),(0,r.jsx)("dt",{children:"describedbyid, id, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{describedbyid:"account",id:"account",title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"describedbyid, title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{describedbyid:"account",title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{title:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"label:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{label:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"name:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{name:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"content:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{content:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{children:"Test"},"account")}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{id:"account",children:"Test"})}),(0,r.jsx)("dt",{children:"describedbyid:"})," ",(0,r.jsx)("dd",{children:(0,r.jsx)(c.Z,{describedbyid:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=37468)}),_N_E=e.O()}]);