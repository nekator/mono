(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8757],{87691:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header/examples",function(){return t(61650)}])},96889:function(e,n,t){"use strict";var r=t(52322),i=t(2784),d=t(7070);let l=(0,i.forwardRef)(function(e,n){let[t,l]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,r.jsxs)("button",{id:e.id,ref:n,className:(0,d.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=l},94938:function(e,n,t){"use strict";t.d(n,{Y:function(){return r.Z}});var r=t(96889)},37008:function(e,n,t){"use strict";var r=t(52322),i=t(2784),d=t(94938),l=t(8490),a=t(7070);let c=(0,i.forwardRef)(function(e,n){var t;let c=(0,i.useRef)(n),o=(0,i.useRef)(null),[s,u]=(0,i.useState)(()=>l.IY);function h(n){"Escape"===n.key&&n.preventDefault(),("close"===n||"Escape"===n.key||"DIALOG"===n.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function b(){c.current&&(e.open&&!c.current.open&&(o.current&&(o.current.hidden=!1),"none"===e.backdrop?c.current.show():c.current.showModal()),!e.open&&c.current.open&&(o.current&&(o.current.hidden=!0),setTimeout(()=>{var e;o.current&&(o.current.hidden=!1),null===(e=c.current)||void 0===e||e.close()},401)))}let[x,g]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{u(e.id||"drawer-"+(0,a.Vj)()),e.stylePath&&g(e.stylePath),b()},[]),(0,i.useEffect)(()=>{b()},[e.open]),(0,r.jsxs)("dialog",{className:"db-drawer",id:s,ref:c,onClick:e=>{h(e)},onKeyDown:e=>h(e),"data-backdrop":e.backdrop,children:[x?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:x})}):null,(0,r.jsxs)("article",{ref:o,className:(0,a.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,r.jsxs)("header",{className:"db-drawer-header",children:[(0,r.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>h("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:l.ce})}):null]}),(0,r.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})});n.Z=c},19571:function(e,n,t){"use strict";t.d(n,{T:function(){return r.Z}});var r=t(37008)},32046:function(e,n,t){"use strict";var r=t(52322),i=t(2784),d=t(7070),l=t(94938),a=t(19571),c=t(8490);let o=(0,i.forwardRef)(function(e,n){var t;let[o,s]=(0,i.useState)(()=>c.IY),[u,h]=(0,i.useState)(()=>!1),[b,x]=(0,i.useState)(()=>!1),[g,j]=(0,i.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function T(){e.onToggle&&e.onToggle(!e.drawerOpen)}let[f,N]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{h(!0),s(e.id||"header-"+(0,d.Vj)()),e.stylePath&&N(e.stylePath)},[]),(0,i.useEffect)(()=>{if(u&&document&&o&&e.forceMobile){let e=document.getElementById(o);e&&(0,d.yn)(e,{key:"force-mobile",value:""}),x(!0)}},[u]),(0,r.jsxs)("header",{ref:n,className:(0,d.yI)("db-header",e.className),id:o,"data-on-forcing-mobile":e.forceMobile&&!b,children:[f?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:f})}):null,(0,r.jsxs)(a.T,{"data-hide-on":"desktop",spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>T(),children:[(0,r.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,r.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,r.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,r.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,r.jsx)("div",{className:"db-header-meta-navigation","data-hide-on":"mobile",children:e.slotMetaNavigation}),(0,r.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,r.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,r.jsxs)("div",{className:"db-header-navigation-container",children:[(0,r.jsx)("div",{className:"db-header-navigation","data-hide-on":"mobile",children:e.children}),(0,r.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,r.jsxs)("div",{className:"db-header-action-container",children:[(0,r.jsx)("div",{"data-hide-on":"desktop",children:(0,r.jsx)(l.Y,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>T(),children:null!==(t=e.burgerMenuLabel)&&void 0!==t?t:g.burgerMenuLabel})}),(0,r.jsx)("div",{className:"db-header-action-bar","data-hide-on":"mobile",children:e.slotActionBar})]})]})]})});n.Z=o},8490:function(e,n,t){"use strict";var r,i,d,l,a,c,o;t.d(n,{$f:function(){return x},DM:function(){return g},IY:function(){return s},SU:function(){return u},YP:function(){return h},ce:function(){return b},iw:function(){return r},r$:function(){return d}});let s="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="Back",b="Close Button";(a=r||(r={})).FUNCTIONAL="functional",a.REGULAR="regular",a.EXPRESSIVE="expressive";let x=Object.entries(r).map(e=>{let[,n]=e;return n});(i||(i={})).PRIMARY="primary",(c=d||(d={})).NEUTRAL="neutral",c.NEUTRAL_STRONG="neutral-strong",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.PRIMARY="primary",c.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",c.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.WARNING="warning",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let g=Object.entries(d).map(e=>{let[,n]=e;return n});Object.entries(i).map(e=>{let[,n]=e;return n}),(o=l||(l={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,n]=e;return n})},7070:function(e,n,t){"use strict";t.d(n,{Vj:function(){return r},mT:function(){return l},yI:function(){return d},yn:function(){return i}});let r=()=>{try{if(window.crypto){if(window.crypto.randomUUID)return window.crypto.randomUUID();if(window.crypto.getRandomValues)return window.crypto.getRandomValues(new Uint32Array(3)).join("-")}}catch(e){console.warn(e)}return Math.random().toString()},i=(e,n)=>{let t=e.children;Object.values(t).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&i(e,n)})},d=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()},l=(e,n)=>n||(e&&"adaptive"!==e?void 0:"none")},61650:function(e,n,t){"use strict";t.r(n);var r=t(52322),i=t(18338),d=t(32046);n.default=()=>(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h1",{children:" DBHeader Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"slotBrand:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{slotBrand:(0,r.jsx)("div",{children:"slotBrand"}),children:"Test"})]}),(0,r.jsx)("dt",{children:"burgerMenuLabel, describedbyid, drawerOpen, forceMobile, id, key, onToggle, slotActionBar, slotBrand, slotCallToAction, slotMetaNavigation, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{burgerMenuLabel:"account",describedbyid:"account",drawerOpen:!0,forceMobile:!0,id:"account",onToggle:e=>console.log(e),slotActionBar:(0,r.jsx)("div",{children:"slotActionBar"}),slotBrand:(0,r.jsx)("div",{children:"slotBrand"}),slotCallToAction:(0,r.jsx)("div",{children:"slotCallToAction"}),slotMetaNavigation:(0,r.jsx)("div",{children:"slotMetaNavigation"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"burgerMenuLabel, describedbyid, drawerOpen, forceMobile, id, key, onToggle, slotActionBar, slotCallToAction, slotMetaNavigation, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{burgerMenuLabel:"account",describedbyid:"account",drawerOpen:!0,forceMobile:!0,id:"account",onToggle:e=>console.log(e),slotActionBar:(0,r.jsx)("div",{children:"slotActionBar"}),slotCallToAction:(0,r.jsx)("div",{children:"slotCallToAction"}),slotMetaNavigation:(0,r.jsx)("div",{children:"slotMetaNavigation"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"burgerMenuLabel, describedbyid, drawerOpen, forceMobile, id, key, onToggle, slotActionBar, slotCallToAction, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{burgerMenuLabel:"account",describedbyid:"account",drawerOpen:!0,forceMobile:!0,id:"account",onToggle:e=>console.log(e),slotActionBar:(0,r.jsx)("div",{children:"slotActionBar"}),slotCallToAction:(0,r.jsx)("div",{children:"slotCallToAction"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"burgerMenuLabel, describedbyid, drawerOpen, forceMobile, id, key, onToggle, slotActionBar, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{burgerMenuLabel:"account",describedbyid:"account",drawerOpen:!0,forceMobile:!0,id:"account",onToggle:e=>console.log(e),slotActionBar:(0,r.jsx)("div",{children:"slotActionBar"}),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"burgerMenuLabel, describedbyid, drawerOpen, forceMobile, id, key, onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{burgerMenuLabel:"account",describedbyid:"account",drawerOpen:!0,forceMobile:!0,id:"account",onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"burgerMenuLabel, describedbyid, forceMobile, id, key, onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{burgerMenuLabel:"account",describedbyid:"account",forceMobile:!0,id:"account",onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"burgerMenuLabel, describedbyid, id, key, onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{burgerMenuLabel:"account",describedbyid:"account",id:"account",onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"describedbyid, id, key, onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{describedbyid:"account",id:"account",onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"id, key, onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{id:"account",onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"key, onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"onToggle, tabIndex, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{onToggle:e=>console.log(e),tabIndex:100,title:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"onToggle, title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{onToggle:e=>console.log(e),title:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"onToggle:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{onToggle:e=>console.log(e),children:"Test"})]}),(0,r.jsx)("dt",{children:"slotMetaNavigation:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{slotMetaNavigation:(0,r.jsx)("div",{children:"slotMetaNavigation"}),children:"Test"})]}),(0,r.jsx)("dt",{children:"slotCallToAction:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{slotCallToAction:(0,r.jsx)("div",{children:"slotCallToAction"}),children:"Test"})]}),(0,r.jsx)("dt",{children:"slotActionBar:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{slotActionBar:(0,r.jsx)("div",{children:"slotActionBar"}),children:"Test"})]}),(0,r.jsx)("dt",{children:"drawerOpen:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{drawerOpen:!0,children:"Test"})]}),(0,r.jsx)("dt",{children:"forceMobile:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{forceMobile:!0,children:"Test"})]}),(0,r.jsx)("dt",{children:"burgerMenuLabel:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{burgerMenuLabel:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"describedbyid:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{describedbyid:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{id:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"tabIndex:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{tabIndex:100,children:"Test"})]}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{title:"account",children:"Test"})]})]})]})}},function(e){e.O(0,[4375,8338,9774,2888,179],function(){return e(e.s=87691)}),_N_E=e.O()}]);