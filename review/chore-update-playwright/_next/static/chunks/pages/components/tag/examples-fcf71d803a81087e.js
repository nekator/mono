(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8686],{83876:function(e,n,a){var t={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function c(e){if(!a.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],c=n[0];return a.e(n[1]).then(function(){return a(c)})}c.keys=function(){return Object.keys(t)},c.id=83876,e.exports=c},72779:function(e,n){var a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function c(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var l=c.apply(null,a);l&&e.push(l)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var d in a)t.call(a,d)&&a[d]&&e.push(d)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0!==(a=(function(){return c}).apply(n,[]))&&(e.exports=a)}()},62509:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag/examples",function(){return a(44339)}])},70969:function(e,n,a){"use strict";a.d(n,{Z:function(){return h}});var t=a(52322),c=a(77900),i=a(2784);let l=()=>{let e=(0,i.useRef)(null),[n,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&a(!0)},[]),[n,e]};var d=e=>{let{children:n,element:a="div",...t}=e,[c,d]=l();return c?(0,i.createElement)(a,{...t,children:n}):(0,i.createElement)(a,{...t,ref:d,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let r=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],o=e=>({...e,link:"".concat("/mono/review/chore-update-playwright").concat(e.link)});a(60586);var s=a(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>o(e)):[];var h=e=>{let{children:n}=e,[a,l]=(0,i.useState)(!1),[o,h]=(0,i.useState)(!1),[b,x]=(0,i.useState)(!1),v=(0,s.useRouter)();return(0,i.useEffect)(()=>{v.query&&(l("true"===v.query.fullscreen),h("true"===v.query.noh1),x("true"===v.query.properties))},[v]),(0,t.jsxs)(d,{children:[v.isReady&&a&&(0,t.jsx)("div",{className:"".concat(o?"noh1":""," ").concat(b?"is-properties":""),children:n}),v.isReady&&!a&&(0,t.jsxs)(c.rG,{children:[(0,t.jsxs)(c.ff,{slot:"header",children:[(0,t.jsx)(c.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(c.Pm,{data:JSON.stringify(u(r,v.pathname))}),(0,t.jsx)(c.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(c.fw,{slot:"footer",copyright:!0})]})]})}},96889:function(e,n,a){"use strict";var t=a(52322),c=a(2784),i=a(72779),l=a.n(i);let d=(0,c.forwardRef)(function(e,n){function a(e){return!!(e&&"_"!==e&&"none"!==e)}let[i,d]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,t.jsxs)("button",{id:e.id,ref:n,className:function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return l()(n)}("db-button",e.className,{"is-icon-text-replace":a(e.icon)&&e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":a(e.icon)?e.icon:void 0,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[i?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:i})}):null,e.children]})});n.Z=d},94938:function(e,n,a){"use strict";a.d(n,{Y:function(){return t.Z}});var t=a(96889)},35524:function(e,n,a){"use strict";var t=a(52322),c=a(2784),i=a(94938),l=a(7070),d=a(8490),r=a(72779),o=a.n(r);let s={removeButtonText:"Remove tag"},u=(0,c.forwardRef)(function(e,n){let[a,r]=(0,c.useState)(()=>!1),[u,h]=(0,c.useState)(()=>d.IY),[b,x]=(0,c.useState)(()=>!1),[v,j]=(0,c.useState)(()=>void 0);function m(e){return!!(e&&"_"!==e&&"none"!==e)}function g(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return o()(n)}function f(){return e.removeButton?e.removeButton:s.removeButtonText}function y(){return!!e.behaviour&&e.behaviour.includes("interactive")}let[p,T]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{r(!0),h(e.id||"tag-"+(0,l.V)()),e.stylePath&&T(e.stylePath)},[]),(0,c.useEffect)(()=>{if(e.checked&&a&&document&&u){let e=null==document?void 0:document.getElementById(u);e&&(e.checked=!0,r(!1))}},[a]),(0,t.jsxs)("div",{ref:n,className:g("db-tag",e.className),tabIndex:function(){var n;if(!e.disabled)return null!==(n=e.tabIndex)&&void 0!==n?n:void 0}(),"data-interactive":y(),"data-disabled":e.disabled,"data-variant":e.variant,"data-type":e.type,children:[p?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:p})}):null,y()?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{id:u,type:"interactive-unique"===e.behaviour?"radio":"checkbox",defaultChecked:e.checked,name:e.name,value:e.value,disabled:e.disabled,required:e.required,"aria-invalid":e.invalid,onChange:n=>{var a;e.onChange&&e.onChange(n),e.change&&e.change(n),x(null===(a=n.target)||void 0===a?void 0:a.checked)}}),(0,t.jsx)("label",{className:g("tag-label",{"is-icon-text-replace":m(e.icon)&&e.noText}),htmlFor:u,"data-icon":e.icon,"data-overflow":e.overflow,children:e.children})]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{className:g("tag-label",{"is-icon-text-replace":m(e.icon)&&e.noText}),"data-icon":e.icon,"data-overflow":e.overflow,children:e.children})}),"removable"===e.behaviour?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.Y,{icon:"close",size:"small",variant:"text",onClick:n=>void(e.onRemove&&e.onRemove()),noText:!0,title:f(),children:f()})}):null]})});n.Z=u},8490:function(e,n,a){"use strict";var t,c,i,l,d,r,o;a.d(n,{$f:function(){return b},DM:function(){return x},IY:function(){return s},SU:function(){return u},ce:function(){return h},iw:function(){return t},r$:function(){return i}});let s="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="Close Button";(d=t||(t={})).FUNCTIONAL="functional",d.REGULAR="regular",d.EXPRESSIVE="expressive";let b=Object.entries(t).map(e=>{let[,n]=e;return n});(c||(c={})).PRIMARY="primary",(r=i||(i={})).NEUTRAL_0="neutral-0",r.NEUTRAL_1="neutral-1",r.NEUTRAL_2="neutral-2",r.NEUTRAL_3="neutral-3",r.NEUTRAL_4="neutral-4",r.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",r.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",r.PRIMARY="primary",r.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",r.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",r.SECONDARY="secondary",r.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",r.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",r.SUCCESSFUL="successful",r.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",r.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",r.CRITICAL="critical",r.CRITICAL_TRANSPARENT_Full="critical-transparent-full",r.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",r.WARNING="warning",r.WARNING_TRANSPARENT_FULL="warning-transparent-full",r.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",r.INFORMATIONAL="informational",r.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",r.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let x=Object.entries(i).map(e=>{let[,n]=e;return n});Object.entries(c).map(e=>{let[,n]=e;return n}),(o=l||(l={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,n]=e;return n})},7070:function(e,n,a){"use strict";a.d(n,{V:function(){return t}});let t=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},44339:function(e,n,a){"use strict";a.r(n);var t=a(52322),c=a(70969),i=a(35524);n.default=()=>(0,t.jsxs)(c.Z,{children:[(0,t.jsx)("h1",{children:" DBTag Examples "}),(0,t.jsxs)("dl",{className:"example-list",children:[(0,t.jsx)("dt",{children:"Default:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{children:"Test"})}),(0,t.jsx)("dt",{children:"behaviour:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{behaviour:"interactive-unique",children:"Test"})}),(0,t.jsx)("dt",{children:"behaviour, change, checked, defaultValue, describedbyid, disabled, icon, id, invalid, key, label, name, noText, onChange, onRemove, overflow, removeButton, required, tabIndex, title, type, value, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{behaviour:"interactive-unique",change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,icon:"account",id:"account",invalid:!0,label:"account",name:"account",noText:!0,onChange:e=>console.log(e),onRemove:()=>console.log("Click"),overflow:!0,removeButton:"account",required:!0,tabIndex:100,title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, icon, id, invalid, key, label, name, noText, onChange, onRemove, overflow, removeButton, required, tabIndex, title, type, value, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,icon:"account",id:"account",invalid:!0,label:"account",name:"account",noText:!0,onChange:e=>console.log(e),onRemove:()=>console.log("Click"),overflow:!0,removeButton:"account",required:!0,tabIndex:100,title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, icon, id, invalid, key, label, name, onChange, onRemove, overflow, removeButton, required, tabIndex, title, type, value, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),onRemove:()=>console.log("Click"),overflow:!0,removeButton:"account",required:!0,tabIndex:100,title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, icon, id, invalid, key, label, name, onChange, overflow, removeButton, required, tabIndex, title, type, value, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),overflow:!0,removeButton:"account",required:!0,tabIndex:100,title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, icon, id, invalid, key, label, name, onChange, removeButton, required, tabIndex, title, type, value, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),removeButton:"account",required:!0,tabIndex:100,title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, icon, id, invalid, key, label, name, onChange, required, tabIndex, title, type, value, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),required:!0,tabIndex:100,title:"account",type:"strong",value:"account",variant:"critical",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, icon, id, invalid, key, label, name, onChange, required, tabIndex, title, value, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),required:!0,tabIndex:100,title:"account",value:"account",variant:"critical",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, describedbyid, disabled, icon, id, invalid, key, label, name, onChange, required, tabIndex, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",describedbyid:"account",disabled:!0,icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),required:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, disabled, icon, id, invalid, key, label, name, onChange, required, tabIndex, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,icon:"account",id:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),required:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, disabled, icon, invalid, key, label, name, onChange, required, tabIndex, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,icon:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),required:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"},"account")}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, disabled, icon, invalid, label, name, onChange, required, tabIndex, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,icon:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),required:!0,tabIndex:100,title:"account",variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, disabled, icon, invalid, label, name, onChange, required, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,icon:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),required:!0,title:"account",variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"change, checked, defaultValue, disabled, icon, invalid, label, name, onChange, required, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),checked:!0,defaultValue:"account",disabled:!0,icon:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),required:!0,variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"checked, defaultValue, disabled, icon, invalid, label, name, onChange, required, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{checked:!0,defaultValue:"account",disabled:!0,icon:"account",invalid:!0,label:"account",name:"account",onChange:e=>console.log(e),required:!0,variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"checked, defaultValue, disabled, icon, invalid, label, name, required, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{checked:!0,defaultValue:"account",disabled:!0,icon:"account",invalid:!0,label:"account",name:"account",required:!0,variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"checked, disabled, icon, invalid, label, name, required, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{checked:!0,disabled:!0,icon:"account",invalid:!0,label:"account",name:"account",required:!0,variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"checked, icon, invalid, label, name, required, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{checked:!0,icon:"account",invalid:!0,label:"account",name:"account",required:!0,variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"checked, icon, invalid, name, required, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{checked:!0,icon:"account",invalid:!0,name:"account",required:!0,variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"checked, icon, invalid, required, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{checked:!0,icon:"account",invalid:!0,required:!0,variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"checked, icon, invalid, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{checked:!0,icon:"account",invalid:!0,variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"checked, icon, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{checked:!0,icon:"account",variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"icon, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{icon:"account",variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"noText:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{noText:!0,children:"Test"})}),(0,t.jsx)("dt",{children:"onRemove:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{onRemove:()=>console.log("Click"),children:"Test"})}),(0,t.jsx)("dt",{children:"overflow:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{overflow:!0,children:"Test"})}),(0,t.jsx)("dt",{children:"removeButton:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{removeButton:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"type:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{type:"strong",children:"Test"})}),(0,t.jsx)("dt",{children:"value:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{value:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"describedbyid:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{describedbyid:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"id:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{id:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"key:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{children:"Test"},"account")}),(0,t.jsx)("dt",{children:"tabIndex:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{tabIndex:100,children:"Test"})}),(0,t.jsx)("dt",{children:"title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"change:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{change:e=>console.log(e),children:"Test"})}),(0,t.jsx)("dt",{children:"onChange:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{onChange:e=>console.log(e),children:"Test"})}),(0,t.jsx)("dt",{children:"defaultValue:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{defaultValue:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"disabled:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{disabled:!0,children:"Test"})}),(0,t.jsx)("dt",{children:"label:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{label:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"name:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{name:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"required:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{required:!0,children:"Test"})}),(0,t.jsx)("dt",{children:"invalid:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{invalid:!0,children:"Test"})}),(0,t.jsx)("dt",{children:"checked:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{checked:!0,children:"Test"})}),(0,t.jsx)("dt",{children:"icon:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(i.Z,{icon:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=62509)}),_N_E=e.O()}]);