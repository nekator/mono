(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16694],{62453:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/card/code/ElevationLevel",function(){return a(4914)}])},10326:function(e,t,a){"use strict";var l=a(52322),n=a(2784),r=a(43251);let i=(0,n.forwardRef)(function(e,t){let a=t||(0,n.useRef)(t);return(0,l.jsx)("button",{ref:a,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=i},70741:function(e,t,a){"use strict";var l=a(52322),n=a(2784),r=a(43251);let i=(0,n.forwardRef)(function(e,t){let a=t||(0,n.useRef)(t);return(0,l.jsx)("div",{ref:a,...(0,r.mS)(e,[]),id:e.id,"data-behaviour":e.behaviour,"data-elevation-level":e.elevationLevel,"data-spacing":e.spacing,role:"interactive"===e.behaviour?"button":void 0,tabIndex:"interactive"===e.behaviour?0:void 0,onClick:t=>{e.onClick&&e.onClick(t)},className:(0,r.yI)("db-card",e.className),children:e.children})});t.Z=i},57284:function(e,t,a){"use strict";var l=a(52322),n=a(2784),r=a(43251);let i=(0,n.forwardRef)(function(e,t){let a=t||(0,n.useRef)(t),[i,c]=(0,n.useState)(()=>!1),[d,o]=(0,n.useState)(()=>!1);return(0,n.useEffect)(()=>{c(!0)},[]),(0,n.useEffect)(()=>{e.active&&i&&a.current&&(a.current.click(),c(!1))},[a.current,i]),(0,l.jsx)("li",{role:"none",className:(0,r.yI)("db-tab-item",e.className),children:(0,l.jsxs)("label",{htmlFor:e.id,"data-icon":e.icon,"data-icon-after":e.iconAfter,"data-no-text":e.noText,children:[(0,l.jsx)("input",{type:"radio",role:"tab",disabled:e.disabled,"aria-selected":d,"aria-controls":e.controls,checked:e.checked,ref:a,...(0,r.mS)(e,[]),id:e.id,onChange:t=>{var a;e.onChange&&e.onChange(t),e.change&&e.change(t),o(null===(a=t.target)||void 0===a?void 0:a.checked)}}),e.label?(0,l.jsx)(l.Fragment,{children:e.label}):null,e.children]})})});t.Z=i},57884:function(e,t,a){"use strict";var l=a(52322),n=a(2784),r=a(43251),i=a(55482);let c=(0,n.forwardRef)(function(e,t){let a=t||(0,n.useRef)(t),[c,d]=(0,n.useState)(()=>i.IY);return(0,n.useEffect)(()=>{d(e.id||"tab-list-"+(0,r.Vj)())},[]),(0,l.jsx)("div",{ref:a,...(0,r.mS)(e,[]),id:c,className:(0,r.yI)("db-tab-list",e.className),children:(0,l.jsx)("ul",{role:"tablist",children:e.children})})});t.Z=c},49953:function(e,t,a){"use strict";var l=a(52322),n=a(2784),r=a(43251);let i=(0,n.forwardRef)(function(e,t){let a=t||(0,n.useRef)(t);return(0,n.useEffect)(()=>{},[]),(0,l.jsxs)("section",{role:"tabpanel",ref:a,...(0,r.mS)(e,[]),className:(0,r.yI)("db-tab-panel",e.className),id:e.id,"aria-labelledby":e.labelledBy,children:[e.content?(0,l.jsx)(l.Fragment,{children:e.content}):null,e.children]})});t.Z=i},57092:function(e,t,a){"use strict";var l=a(52322),n=a(2784),r=a(43251),i=a(10326),c=a(57884),d=a(57284),o=a(49953);let s=(0,n.forwardRef)(function(e,t){var a,s,u,v;let h=t||(0,n.useRef)(t),[b,p]=(0,n.useState)(()=>"tabs-"+(0,r.Vj)()),[f,L]=(0,n.useState)(()=>""),[x,g]=(0,n.useState)(()=>!1),[A,C]=(0,n.useState)(()=>!1),[m,j]=(0,n.useState)(()=>!1),[N,_]=(0,n.useState)(()=>null);function E(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}function y(e){let t=e.scrollWidth>e.clientWidth;C(t&&e.scrollLeft>1),j(t&&e.scrollLeft<e.scrollWidth-e.clientWidth)}function B(t){let a=e.arrowScrollDistance||100;t&&(a*=-1),null==N||N.scrollBy({top:0,left:a,behavior:"smooth"})}function T(){if(null==h?void 0:h.current){let t=h.current.querySelector(".db-tab-list");if(t){let a=t.querySelector('[role="tablist"]');a.setAttribute("aria-orientation",e.orientation||"horizontal"),"arrows"===e.behaviour&&(_(a),y(a),a.addEventListener("scroll",()=>{y(a)}))}}}function R(t){if(h.current){let a=h.current.querySelector(".db-tab-list").getElementsByClassName("db-tab-item");(null==a?void 0:a.length)>0&&Array.from(a).forEach((a,l)=>{let n=a.querySelector("label"),r=a.querySelector("input");if(r&&n){if(!r.id){let e="".concat(f,"-tab-").concat(l);n.setAttribute("for",e),r.setAttribute("aria-controls","".concat(f,"-tab-panel-").concat(l)),r.id=e,r.setAttribute("name",f)}if(t){let t=!e.initialSelectedMode||"auto"===e.initialSelectedMode,a=void 0===e.initialSelectedIndex&&0===l||e.initialSelectedIndex===l;t&&a&&r.click()}}});let l=[...Array.from(h.current.querySelectorAll("& > .db-tab-panel")),...Array.from(h.current.querySelectorAll("& > dbtabpanel > .db-tab-panel")),...Array.from(h.current.querySelectorAll("& > db-tab-panel > .db-tab-panel"))];(null==l?void 0:l.length)>0&&l.forEach((e,t)=>{e.id||(e.id="".concat(f,"-tab-panel-").concat(t),e.setAttribute("aria-labelledby","".concat(f,"-tab-").concat(t)))})}}return(0,n.useEffect)(()=>{p(e.id||b),L(e.name||(0,r.Vj)()),g(!0)},[]),(0,n.useEffect)(()=>{if(h.current&&x){T(),R(!0);let e=h.current.querySelector(".db-tab-list");e&&new MutationObserver(e=>{e.forEach(e=>{(e.removedNodes.length||e.addedNodes.length)&&(T(),R())})}).observe(e,{childList:!0,subtree:!0}),g(!1)}},[h.current,x]),(0,l.jsxs)("div",{ref:h,...(0,r.mS)(e,[]),id:b,className:(0,r.yI)("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behaviour":e.behaviour,"data-alignment":null!==(u=e.alignment)&&void 0!==u?u:"start","data-width":null!==(v=e.width)&&void 0!==v?v:"auto",children:[A?(0,l.jsx)(i.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:e=>B(!0),children:"Scroll left"}):null,e.tabs?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{children:null===(a=E(e.tabs))||void 0===a?void 0:a.map((t,a)=>(0,l.jsx)(d.Z,{active:t.active,label:t.label,iconAfter:t.iconAfter,icon:t.icon,noText:t.noText},e.name+"tab-item"+a))}),null===(s=E(e.tabs))||void 0===s?void 0:s.map((t,a)=>(0,l.jsx)(o.Z,{content:t.content,children:t.children},e.name+"tab-panel"+a))]}):null,m?(0,l.jsx)(i.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:e=>B(),children:"Scroll right"}):null,e.children]})});t.Z=s},55482:function(e,t,a){"use strict";var l,n,r,i,c,d,o;a.d(t,{IY:function(){return s},YP:function(){return u},ce:function(){return v}});let s="OVERWRITE_DEFAULT_ID",u="Back",v="Close Button";(c=l||(l={})).FUNCTIONAL="functional",c.REGULAR="regular",c.EXPRESSIVE="expressive",Object.entries(l).map(e=>{let[,t]=e;return t}),(n||(n={})).PRIMARY="primary",(d=r||(r={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",d.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",d.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",d.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",d.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",d.BRAND_BG_LEVEL_1="brand-bg-lvl-1",d.BRAND_BG_LEVEL_2="brand-bg-lvl-2",d.BRAND_BG_LEVEL_3="brand-bg-lvl-3",d.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",d.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",d.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",d.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",d.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",d.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",d.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",d.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",d.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",d.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",d.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",d.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",d.WARNING_BG_LEVEL_1="warning-bg-lvl-1",d.WARNING_BG_LEVEL_2="warning-bg-lvl-2",d.WARNING_BG_LEVEL_3="warning-bg-lvl-3",d.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",d.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",d.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",d.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",d.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",d.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",d.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(r).map(e=>{let[,t]=e;return t}),Object.entries(n).map(e=>{let[,t]=e;return t}),(o=i||(i={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(i).map(e=>{let[,t]=e;return t})},43251:function(e,t,a){"use strict";a.d(t,{Lp:function(){return o},Vj:function(){return l},mS:function(){return c},yI:function(){return r},yn:function(){return n}});let l=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},n=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&n(e,t)})},r=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];let l="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)l+="".concat(e," ");else for(let t in e)e[t]&&(l+="".concat(t," "))}}),l.trim()},i=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],c=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||i.includes(e))&&!t.includes(e)).reduce((t,a)=>(t[a]=e[a],t),{}),d=e=>{var t;let{top:a,bottom:l,left:n,right:r,height:i,width:c}=e.getBoundingClientRect(),{innerHeight:d,innerWidth:o}=window,s=a<0,u=l>d,v=n<0,h=r>o,b=e.hasAttribute("data-outside-vy"),p=e.hasAttribute("data-outside-vx"),f=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return f&&(b&&("top"===e.getAttribute("data-outside-vy")?s=f.top-(l-f.bottom)<0:u=f.bottom+(f.top-a)>d),p&&("left"===e.getAttribute("data-outside-vx")?v=f.left-(r-f.right)<0:h=f.right+(f.left-n)>o)),{outTop:s,outBottom:u,outLeft:v,outRight:h}},o=e=>{let{outTop:t,outBottom:a,outLeft:l,outRight:n}=d(e),r={};return t||a?(r={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",r.vy)):e.removeAttribute("data-outside-vy"),l||n?(r={...r,vx:n?"right":"left"},e.setAttribute("data-outside-vx",r.vx)):e.removeAttribute("data-outside-vx"),r}},4914:function(e,t,a){"use strict";a.r(t);var l=a(52322),n=a(2784),r=a(70741),i=a(57092),c=a(57884),d=a(57284),o=a(49953),s=a(10326);t.default=()=>{let[e,t]=(0,n.useState)();return(0,n.useEffect)(()=>{e&&setTimeout(()=>t(""),1500)},[e]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{className:"tab-container",children:(0,l.jsxs)(i.Z,{children:[(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(d.Z,{children:"Angular"}),(0,l.jsx)(d.Z,{children:"HTML"}),(0,l.jsx)(d.Z,{children:"React"}),(0,l.jsx)(d.Z,{children:"Vue"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-html",children:'<db-card elevationLevel="1">(Default) Level 1 - Adaptive</db-card>'})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<db-card elevationLevel="1">(Default) Level 1 - Adaptive</db-card>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-card elevationLevel="1">(Default) Level 1 - Adaptive</db-card>'),navigator.clipboard.writeText('<db-card elevationLevel="1">(Default) Level 1 - Adaptive</db-card>')},children:"Copy code"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{t("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-tsx",children:'<DBCard elevationLevel="1">(Default) Level 1 - Adaptive</DBCard>'})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<DBCard elevationLevel="1">(Default) Level 1 - Adaptive</DBCard>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBCard elevationLevel="1">(Default) Level 1 - Adaptive</DBCard>'),navigator.clipboard.writeText('<DBCard elevationLevel="1">(Default) Level 1 - Adaptive</DBCard>')},children:"Copy code"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-tsx",children:'<DBCard elevationLevel="1">(Default) Level 1 - Adaptive</DBCard>'})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<DBCard elevationLevel="1">(Default) Level 1 - Adaptive</DBCard>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBCard elevationLevel="1">(Default) Level 1 - Adaptive</DBCard>'),navigator.clipboard.writeText('<DBCard elevationLevel="1">(Default) Level 1 - Adaptive</DBCard>')},children:"Copy code"})]})]})}),(0,l.jsx)(r.Z,{className:"tab-container",children:(0,l.jsxs)(i.Z,{children:[(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(d.Z,{children:"Angular"}),(0,l.jsx)(d.Z,{children:"HTML"}),(0,l.jsx)(d.Z,{children:"React"}),(0,l.jsx)(d.Z,{children:"Vue"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-html",children:'<db-card elevationLevel="2">Level 2 - Adaptive</db-card>'})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<db-card elevationLevel="2">Level 2 - Adaptive</db-card>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-card elevationLevel="2">Level 2 - Adaptive</db-card>'),navigator.clipboard.writeText('<db-card elevationLevel="2">Level 2 - Adaptive</db-card>')},children:"Copy code"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{t("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-tsx",children:'<DBCard elevationLevel="2">Level 2 - Adaptive</DBCard>'})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<DBCard elevationLevel="2">Level 2 - Adaptive</DBCard>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBCard elevationLevel="2">Level 2 - Adaptive</DBCard>'),navigator.clipboard.writeText('<DBCard elevationLevel="2">Level 2 - Adaptive</DBCard>')},children:"Copy code"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-tsx",children:'<DBCard elevationLevel="2">Level 2 - Adaptive</DBCard>'})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<DBCard elevationLevel="2">Level 2 - Adaptive</DBCard>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBCard elevationLevel="2">Level 2 - Adaptive</DBCard>'),navigator.clipboard.writeText('<DBCard elevationLevel="2">Level 2 - Adaptive</DBCard>')},children:"Copy code"})]})]})}),(0,l.jsx)(r.Z,{className:"tab-container",children:(0,l.jsxs)(i.Z,{children:[(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(d.Z,{children:"Angular"}),(0,l.jsx)(d.Z,{children:"HTML"}),(0,l.jsx)(d.Z,{children:"React"}),(0,l.jsx)(d.Z,{children:"Vue"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-html",children:'<db-card elevationLevel="3">Level 3 - Adaptive</db-card>'})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<db-card elevationLevel="3">Level 3 - Adaptive</db-card>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-card elevationLevel="3">Level 3 - Adaptive</db-card>'),navigator.clipboard.writeText('<db-card elevationLevel="3">Level 3 - Adaptive</db-card>')},children:"Copy code"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{t("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-tsx",children:'<DBCard elevationLevel="3">Level 3 - Adaptive</DBCard>'})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<DBCard elevationLevel="3">Level 3 - Adaptive</DBCard>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBCard elevationLevel="3">Level 3 - Adaptive</DBCard>'),navigator.clipboard.writeText('<DBCard elevationLevel="3">Level 3 - Adaptive</DBCard>')},children:"Copy code"})]}),(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("pre",{children:(0,l.jsx)("code",{className:"hljs language-tsx",children:'<DBCard elevationLevel="3">Level 3 - Adaptive</DBCard>'})}),(0,l.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<DBCard elevationLevel="3">Level 3 - Adaptive</DBCard>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBCard elevationLevel="3">Level 3 - Adaptive</DBCard>'),navigator.clipboard.writeText('<DBCard elevationLevel="3">Level 3 - Adaptive</DBCard>')},children:"Copy code"})]})]})})]})}}},function(e){e.O(0,[92888,49774,40179],function(){return e(e.s=62453)}),_N_E=e.O()}]);