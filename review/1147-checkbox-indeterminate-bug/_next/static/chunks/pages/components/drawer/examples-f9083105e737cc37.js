(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3391],{36238:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer/examples",function(){return t(20263)}])},96889:function(e,n,t){"use strict";var r=t(52322),s=t(2784),l=t(7070);let i=(0,s.forwardRef)(function(e,n){function t(e){return!!(e&&"_"!==e&&"none"!==e)}let[i,c]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,r.jsxs)("button",{id:e.id,ref:n,className:(0,l.yI)("db-button",e.className,{"is-icon-text-replace":t(e.icon)&&e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":t(e.icon)?e.icon:void 0,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[i?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:i})}):null,e.children]})});n.Z=i},94938:function(e,n,t){"use strict";t.d(n,{Y:function(){return r.Z}});var r=t(96889)},37008:function(e,n,t){"use strict";var r=t(52322),s=t(2784),l=t(94938),i=t(8490),c=t(7070);let d=(0,s.forwardRef)(function(e,n){var t;let d=(0,s.useRef)(n),o=(0,s.useRef)(null),[a,u]=(0,s.useState)(()=>i.IY);function h(n){"Escape"===n.key&&n.preventDefault(),("close"===n||"Escape"===n.key||"DIALOG"===n.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function x(){d.current&&(e.open&&!d.current.open&&(o.current&&(o.current.hidden=!1),"none"===e.backdrop?d.current.show():d.current.showModal()),!e.open&&d.current.open&&(o.current&&(o.current.hidden=!0),setTimeout(()=>{var e;o.current&&(o.current.hidden=!1),null===(e=d.current)||void 0===e||e.close()},401)))}let[p,j]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{u(e.id||"drawer-"+(0,c.Vj)()),e.stylePath&&j(e.stylePath),x()},[]),(0,s.useEffect)(()=>{x()},[e.open]),(0,r.jsxs)("dialog",{className:"db-drawer",id:a,ref:d,onClick:e=>{h(e)},onKeyDown:e=>h(e),"data-backdrop":e.backdrop,children:[p?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"stylesheet",href:p})}):null,(0,r.jsxs)("article",{ref:o,className:(0,c.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,r.jsxs)("header",{className:"db-drawer-header",children:[(0,r.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>h("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:i.ce})}):null]}),(0,r.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})});n.Z=d},8490:function(e,n,t){"use strict";var r,s,l,i,c,d,o;t.d(n,{$f:function(){return p},DM:function(){return j},IY:function(){return a},SU:function(){return u},YP:function(){return h},ce:function(){return x},iw:function(){return r},r$:function(){return l}});let a="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="Back",x="Close Button";(c=r||(r={})).FUNCTIONAL="functional",c.REGULAR="regular",c.EXPRESSIVE="expressive";let p=Object.entries(r).map(e=>{let[,n]=e;return n});(s||(s={})).PRIMARY="primary",(d=l||(l={})).NEUTRAL="neutral",d.NEUTRAL_STRONG="neutral-strong",d.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",d.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",d.PRIMARY="primary",d.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",d.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",d.SUCCESSFUL="successful",d.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",d.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",d.CRITICAL="critical",d.CRITICAL_TRANSPARENT_Full="critical-transparent-full",d.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",d.WARNING="warning",d.WARNING_TRANSPARENT_FULL="warning-transparent-full",d.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",d.INFORMATIONAL="informational",d.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",d.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let j=Object.entries(l).map(e=>{let[,n]=e;return n});Object.entries(s).map(e=>{let[,n]=e;return n}),(o=i||(i={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(i).map(e=>{let[,n]=e;return n})},7070:function(e,n,t){"use strict";t.d(n,{Vj:function(){return r},yI:function(){return l},yn:function(){return s}});let r=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},s=(e,n)=>{let t=e.children;Object.values(t).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&s(e,n)})},l=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()}},20263:function(e,n,t){"use strict";t.r(n);var r=t(52322),s=t(2784),l=t(96889),i=t(18338),c=t(37008);n.default=()=>{let[e,n]=(0,s.useState)(-1);return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h1",{children:" DBDrawer Examples "}),(0,r.jsxs)("dl",{className:"example-list",children:[(0,r.jsx)("dt",{children:"direction:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(0)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:0===e,onClose:()=>n(-1),direction:"right",children:"Test"})]}),(0,r.jsx)("dt",{children:"closeButtonId, closeButtonText, width:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(1)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:1===e,onClose:()=>n(-1),closeButtonId:"account",closeButtonText:"account",width:"auto",children:"Test"})]}),(0,r.jsx)("dt",{children:"closeButtonText, width:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(2)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:2===e,onClose:()=>n(-1),closeButtonText:"account",width:"auto",children:"Test"})]}),(0,r.jsx)("dt",{children:"width:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(3)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:3===e,onClose:()=>n(-1),width:"auto",children:"Test"})]}),(0,r.jsx)("dt",{children:"backdrop:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(4)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:4===e,onClose:()=>n(-1),backdrop:"weak",children:"Test"})]}),(0,r.jsx)("dt",{children:"rounded:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(5)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:5===e,onClose:()=>n(-1),rounded:!0,children:"Test"})]}),(0,r.jsx)("dt",{children:"slotDrawerHeader:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(6)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:6===e,onClose:()=>n(-1),slotDrawerHeader:(0,r.jsx)("div",{children:"slotDrawerHeader"}),children:"Test"})]}),(0,r.jsx)("dt",{children:"spacing:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(7)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:7===e,onClose:()=>n(-1),spacing:"small",children:"Test"})]}),(0,r.jsx)("dt",{children:"withCloseButton:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(8)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:8===e,onClose:()=>n(-1),withCloseButton:!0,children:"Test"})]}),(0,r.jsx)("dt",{children:"describedbyid:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(9)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:9===e,onClose:()=>n(-1),describedbyid:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"id:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(10)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:10===e,onClose:()=>n(-1),id:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"key:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(11)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:11===e,onClose:()=>n(-1),children:"Test"},"account")]}),(0,r.jsx)("dt",{children:"tabIndex:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(12)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:12===e,onClose:()=>n(-1),tabIndex:100,children:"Test"})]}),(0,r.jsx)("dt",{children:"title:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(13)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:13===e,onClose:()=>n(-1),title:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"closeButtonId:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(14)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:14===e,onClose:()=>n(-1),closeButtonId:"account",children:"Test"})]}),(0,r.jsx)("dt",{children:"closeButtonText:"})," ",(0,r.jsx)(l.Z,{onClick:()=>{n(15)},children:"Open Dialog"}),(0,r.jsxs)("dd",{children:[" ",(0,r.jsx)(c.Z,{open:15===e,onClose:()=>n(-1),closeButtonText:"account",children:"Test"})]})]})]})}}},function(e){e.O(0,[4375,8338,9774,2888,179],function(){return e(e.s=36238)}),_N_E=e.O()}]);