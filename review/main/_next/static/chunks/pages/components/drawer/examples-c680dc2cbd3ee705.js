(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3391],{36238:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer/examples",function(){return t(38701)}])},5239:function(e,n,t){"use strict";var r=t(52322),s=t(2784),l=t(36029);let i=(0,s.forwardRef)(function(e,n){let[t,i]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&i(e.stylePath)},[]),(0,r.jsxs)("button",{id:e.id,ref:n,className:(0,l.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=i},57334:function(e,n,t){"use strict";t.d(n,{Y:function(){return r.Z}});var r=t(5239)},65383:function(e,n,t){"use strict";var r=t(52322),s=t(2784),l=t(57334),i=t(41220),d=t(36029);let o=(0,s.forwardRef)(function(e,n){var t;let o=(0,s.useRef)(n),c=(0,s.useRef)(null),[a,u]=(0,s.useState)(()=>i.IY);function handleClose(n){"Escape"===n.key&&n.preventDefault(),("close"===n||"Escape"===n.key||"DIALOG"===n.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function handleDialogOpen(){o.current&&(e.open&&!o.current.open&&(c.current&&(c.current.hidden=!1),"none"===e.backdrop?o.current.show():o.current.showModal()),!e.open&&o.current.open&&(c.current&&(c.current.hidden=!0),setTimeout(()=>{var e;c.current&&(c.current.hidden=!1),null===(e=o.current)||void 0===e||e.close()},401)))}let[h,x]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{u(e.id||"drawer-"+(0,d.Vj)()),e.stylePath&&x(e.stylePath),handleDialogOpen()},[]),(0,s.useEffect)(()=>{handleDialogOpen()},[e.open]),(0,r.jsxs)("dialog",{className:"db-drawer",id:a,ref:o,onClick:e=>{handleClose(e)},onKeyDown:e=>handleClose(e),"data-backdrop":e.backdrop,children:[h?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:h})}):null,(0,r.jsxs)("article",{ref:c,className:(0,d.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,r.jsxs)("header",{className:"db-drawer-header",children:[(0,r.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>handleClose("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:i.ce})}):null]}),(0,r.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})});n.Z=o},41220:function(e,n,t){"use strict";var r,s,l,i,d,o,c;t.d(n,{$f:function(){return j},DM:function(){return T},IY:function(){return a},Kn:function(){return h},SU:function(){return u},YP:function(){return x},ce:function(){return p},iw:function(){return r},r$:function(){return l}});let a="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="-message",x="Back",p="Close Button";(d=r||(r={})).FUNCTIONAL="functional",d.REGULAR="regular",d.EXPRESSIVE="expressive";let j=Object.entries(r).map(e=>{let[,n]=e;return n});(s||(s={})).PRIMARY="primary",(o=l||(l={})).BASE="base",o.BASE_STRONG="base-strong",o.BASE_TRANSPARENT_FULL="base-transparent-full",o.BASE_TRANSPARENT_SEMI="base-transparent-semi",o.NEUTRAL="neutral",o.NEUTRAL_STRONG="neutral-strong",o.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",o.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",o.BRAND="brand",o.BRAND_TRANSPARENT_FULL="brand-transparent-full",o.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",o.SUCCESSFUL="successful",o.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",o.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",o.CRITICAL="critical",o.CRITICAL_TRANSPARENT_Full="critical-transparent-full",o.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",o.WARNING="warning",o.WARNING_TRANSPARENT_FULL="warning-transparent-full",o.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",o.INFORMATIONAL="informational",o.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",o.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let T=Object.entries(l).map(e=>{let[,n]=e;return n});Object.entries(s).map(e=>{let[,n]=e;return n}),(c=i||(i={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(i).map(e=>{let[,n]=e;return n})},36029:function(e,n,t){"use strict";t.d(n,{Vj:function(){return uuid},mT:function(){return getMessageIcon},yI:function(){return cls},yn:function(){return addAttributeToChildren}});let uuid=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},addAttributeToChildren=(e,n)=>{let t=e.children;Object.values(t).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&addAttributeToChildren(e,n)})},cls=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()},getMessageIcon=(e,n)=>n||(e&&"adaptive"!==e?void 0:"none")},38701:function(e,n,t){"use strict";t.r(n);var r=t(52322),s=t(2784),l=t(5239),i=t(2087),d=t(65383);n.default=()=>{let[e,n]=(0,s.useState)(-1);return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h1",{children:" DBDrawer Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"direction:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(0)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:0===e,onClose:()=>n(-1),direction:"right",children:"Test"})]}),(0,r.jsx)("dt",{children:"closeButtonId, closeButtonText, width:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(1)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:1===e,onClose:()=>n(-1),closeButtonId:"account",closeButtonText:"account",width:"auto",children:"Test"})]}),(0,r.jsx)("dt",{children:"closeButtonText, width:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(2)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:2===e,onClose:()=>n(-1),closeButtonText:"account",width:"auto",children:"Test"})]}),(0,r.jsx)("dt",{children:"width:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(3)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:3===e,onClose:()=>n(-1),width:"auto",children:"Test"})]}),(0,r.jsx)("dt",{children:"backdrop:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(4)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:4===e,onClose:()=>n(-1),backdrop:"weak",children:"Test"})]}),(0,r.jsx)("dt",{children:"rounded:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(5)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:5===e,onClose:()=>n(-1),rounded:!0,children:"Test"})]}),(0,r.jsx)("dt",{children:"slotDrawerHeader:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(6)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:6===e,onClose:()=>n(-1),slotDrawerHeader:(0,r.jsx)("div",{children:"slotDrawerHeader"}),children:"Test"})]}),(0,r.jsx)("dt",{children:"spacing:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(7)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:7===e,onClose:()=>n(-1),spacing:"small",children:"Test"})]}),(0,r.jsx)("dt",{children:"withCloseButton:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(8)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:8===e,onClose:()=>n(-1),withCloseButton:!0,children:"Test"})]}),(0,r.jsx)("dt",{children:"describedbyid:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(9)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:9===e,onClose:()=>n(-1),describedbyid:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(10)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:10===e,onClose:()=>n(-1),id:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(11)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:11===e,onClose:()=>n(-1),children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"tabIndex:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(12)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:12===e,onClose:()=>n(-1),tabIndex:100,children:"Test"})]}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(13)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:13===e,onClose:()=>n(-1),title:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"closeButtonId:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(14)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:14===e,onClose:()=>n(-1),closeButtonId:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"closeButtonText:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(15)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(d.Z,{open:15===e,onClose:()=>n(-1),closeButtonText:"account",children:"Test"})]})]})]})}}},function(e){e.O(0,[4375,2087,9774,2888,179],function(){return e(e.s=36238)}),_N_E=e.O()}]);