(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88585],{79676:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tag/code/Behaviour",function(){return n(49170)}])},10326:function(t,e,n){"use strict";var a=n(52322),r=n(2784),i=n(43251);let l=(0,r.forwardRef)(function(t,e){let n=e||(0,r.useRef)(e);return(0,a.jsx)("button",{ref:n,...(0,i.mS)(t,[]),id:t.id,className:(0,i.yI)("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:e=>{t.onClick&&t.onClick(e)},children:t.children})});e.Z=l},70741:function(t,e,n){"use strict";var a=n(52322),r=n(2784),i=n(43251);let l=(0,r.forwardRef)(function(t,e){let n=e||(0,r.useRef)(e);return(0,a.jsx)("div",{ref:n,...(0,i.mS)(t,[]),id:t.id,"data-behaviour":t.behaviour,"data-elevation-level":t.elevationLevel,"data-spacing":t.spacing,role:"interactive"===t.behaviour?"button":void 0,tabIndex:"interactive"===t.behaviour?0:void 0,onClick:e=>{t.onClick&&t.onClick(e)},className:(0,i.yI)("db-card",t.className),children:t.children})});e.Z=l},57284:function(t,e,n){"use strict";var a=n(52322),r=n(2784),i=n(43251);let l=(0,r.forwardRef)(function(t,e){let n=e||(0,r.useRef)(e),[l,o]=(0,r.useState)(()=>!1),[c,s]=(0,r.useState)(()=>!1);return(0,r.useEffect)(()=>{o(!0)},[]),(0,r.useEffect)(()=>{t.active&&l&&n.current&&(n.current.click(),o(!1))},[n.current,l]),(0,a.jsx)("li",{role:"none",className:(0,i.yI)("db-tab-item",t.className),children:(0,a.jsxs)("label",{htmlFor:t.id,"data-icon":t.icon,"data-icon-after":t.iconAfter,"data-no-text":t.noText,children:[(0,a.jsx)("input",{type:"radio",role:"tab",disabled:t.disabled,"aria-selected":c,"aria-controls":t.controls,checked:t.checked,ref:n,...(0,i.mS)(t,[]),id:t.id,onChange:e=>{var n;t.onChange&&t.onChange(e),t.change&&t.change(e),s(null===(n=e.target)||void 0===n?void 0:n.checked)}}),t.label?(0,a.jsx)(a.Fragment,{children:t.label}):null,t.children]})})});e.Z=l},57884:function(t,e,n){"use strict";var a=n(52322),r=n(2784),i=n(43251),l=n(55482);let o=(0,r.forwardRef)(function(t,e){let n=e||(0,r.useRef)(e),[o,c]=(0,r.useState)(()=>l.IY);return(0,r.useEffect)(()=>{c(t.id||"tab-list-"+(0,i.Vj)())},[]),(0,a.jsx)("div",{ref:n,...(0,i.mS)(t,[]),id:o,className:(0,i.yI)("db-tab-list",t.className),children:(0,a.jsx)("ul",{role:"tablist",children:t.children})})});e.Z=o},49953:function(t,e,n){"use strict";var a=n(52322),r=n(2784),i=n(43251);let l=(0,r.forwardRef)(function(t,e){let n=e||(0,r.useRef)(e);return(0,r.useEffect)(()=>{},[]),(0,a.jsxs)("section",{role:"tabpanel",ref:n,...(0,i.mS)(t,[]),className:(0,i.yI)("db-tab-panel",t.className),id:t.id,"aria-labelledby":t.labelledBy,children:[t.content?(0,a.jsx)(a.Fragment,{children:t.content}):null,t.children]})});e.Z=l},57092:function(t,e,n){"use strict";var a=n(52322),r=n(2784),i=n(43251),l=n(10326),o=n(57884),c=n(57284),s=n(49953);let u=(0,r.forwardRef)(function(t,e){var n,u,d,b;let f=e||(0,r.useRef)(e),[_,v]=(0,r.useState)(()=>"tabs-"+(0,i.Vj)()),[E,h]=(0,r.useState)(()=>""),[g,N]=(0,r.useState)(()=>!1),[A,L]=(0,r.useState)(()=>!1),[m,R]=(0,r.useState)(()=>!1),[p,S]=(0,r.useState)(()=>null);function I(t){try{if("string"==typeof t)return JSON.parse(t);return t}catch(t){console.error(t)}}function y(t){let e=t.scrollWidth>t.clientWidth;L(e&&t.scrollLeft>1),R(e&&t.scrollLeft<t.scrollWidth-t.clientWidth)}function T(e){let n=t.arrowScrollDistance||100;e&&(n*=-1),null==p||p.scrollBy({top:0,left:n,behavior:"smooth"})}function C(){if(null==f?void 0:f.current){let e=f.current.querySelector(".db-tab-list");if(e){let n=e.querySelector('[role="tablist"]');n.setAttribute("aria-orientation",t.orientation||"horizontal"),"arrows"===t.behaviour&&(S(n),y(n),n.addEventListener("scroll",()=>{y(n)}))}}}function B(e){if(f.current){let n=f.current.getElementsByClassName("db-tab-item");(null==n?void 0:n.length)>0&&Array.from(n).forEach((n,a)=>{let r=n.querySelector("label"),i=n.querySelector("input");if(i&&r){if(!i.id){let t="".concat(E,"-tab-").concat(a);r.setAttribute("for",t),i.setAttribute("aria-controls","".concat(E,"-tab-panel-").concat(a)),i.id=t,i.setAttribute("name",E)}if(e){let e=!t.initialSelectedMode||"auto"===t.initialSelectedMode,n=void 0===t.initialSelectedIndex&&0===a||t.initialSelectedIndex===a;e&&n&&i.click()}}});let a=f.current.getElementsByClassName("db-tab-panel");(null==a?void 0:a.length)>0&&Array.from(a).forEach((t,e)=>{t.id||(t.id="".concat(E,"-tab-panel-").concat(e),t.setAttribute("aria-labelledby","".concat(E,"-tab-").concat(e)))})}}return(0,r.useEffect)(()=>{v(t.id||_),h(t.name||(0,i.Vj)()),N(!0)},[]),(0,r.useEffect)(()=>{if(f.current&&g){C(),B(!0);let t=f.current.querySelector(".db-tab-list");t&&new MutationObserver(t=>{t.forEach(t=>{(t.removedNodes.length||t.addedNodes.length)&&(C(),B())})}).observe(t,{childList:!0,subtree:!0}),N(!1)}},[f.current,g]),(0,a.jsxs)("div",{ref:f,...(0,i.mS)(t,[]),id:_,className:(0,i.yI)("db-tabs",t.className),"data-orientation":t.orientation,"data-scroll-behaviour":t.behaviour,"data-alignment":null!==(d=t.alignment)&&void 0!==d?d:"start","data-width":null!==(b=t.width)&&void 0!==b?b:"auto",children:[A?(0,a.jsx)(l.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:t=>T(!0),children:"Scroll left"}):null,t.tabs?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{children:null===(n=I(t.tabs))||void 0===n?void 0:n.map((e,n)=>(0,a.jsx)(c.Z,{active:e.active,label:e.label,iconAfter:e.iconAfter,icon:e.icon,noText:e.noText},t.name+"tab-item"+n))}),null===(u=I(t.tabs))||void 0===u?void 0:u.map((e,n)=>(0,a.jsx)(s.Z,{content:e.content,children:e.children},t.name+"tab-panel"+n))]}):null,m?(0,a.jsx)(l.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:t=>T(),children:"Scroll right"}):null,t.children]})});e.Z=u},55482:function(t,e,n){"use strict";var a,r,i,l,o,c,s;n.d(e,{IY:function(){return u},YP:function(){return d},ce:function(){return b}});let u="OVERWRITE_DEFAULT_ID",d="Back",b="Close Button";(o=a||(a={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(a).map(t=>{let[,e]=t;return e}),(r||(r={})).PRIMARY="primary",(c=i||(i={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",c.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",c.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",c.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",c.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",c.BRAND_BG_LEVEL_1="brand-bg-lvl-1",c.BRAND_BG_LEVEL_2="brand-bg-lvl-2",c.BRAND_BG_LEVEL_3="brand-bg-lvl-3",c.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",c.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",c.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",c.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",c.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",c.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",c.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",c.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",c.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",c.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",c.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",c.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",c.WARNING_BG_LEVEL_1="warning-bg-lvl-1",c.WARNING_BG_LEVEL_2="warning-bg-lvl-2",c.WARNING_BG_LEVEL_3="warning-bg-lvl-3",c.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",c.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",c.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",c.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",c.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",c.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",c.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(i).map(t=>{let[,e]=t;return e}),Object.entries(r).map(t=>{let[,e]=t;return e}),(s=l||(l={})).CRITICAL="critical",s.INFORMATIONAL="informational",s.WARNING="warning",s.SUCCESSFUL="successful",Object.entries(l).map(t=>{let[,e]=t;return e})},43251:function(t,e,n){"use strict";n.d(e,{Lp:function(){return s},Vj:function(){return a},mS:function(){return o},yI:function(){return i},yn:function(){return r}});let a=()=>{var t,e;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(t,e)=>{Object.values(t.children).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&r(t,e)})},i=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];let a="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)a+="".concat(t," ");else for(let e in t)t[e]&&(a+="".concat(e," "))}}),a.trim()},l=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],o=(t,e)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||l.includes(t))&&!e.includes(t)).reduce((e,n)=>(e[n]=t[n],e),{}),c=t=>{var e;let{top:n,bottom:a,left:r,right:i,height:l,width:o}=t.getBoundingClientRect(),{innerHeight:c,innerWidth:s}=window,u=n<0,d=a>c,b=r<0,f=i>s,_=t.hasAttribute("data-outside-vy"),v=t.hasAttribute("data-outside-vx"),E=null==t?void 0:null===(e=t.parentElement)||void 0===e?void 0:e.getBoundingClientRect();return E&&(_&&("top"===t.getAttribute("data-outside-vy")?u=E.top-(a-E.bottom)<0:d=E.bottom+(E.top-n)>c),v&&("left"===t.getAttribute("data-outside-vx")?b=E.left-(i-E.right)<0:f=E.right+(E.left-r)>s)),{outTop:u,outBottom:d,outLeft:b,outRight:f}},s=t=>{let{outTop:e,outBottom:n,outLeft:a,outRight:r}=c(t),i={};return e||n?(i={vy:e?"top":"bottom"},t.setAttribute("data-outside-vy",i.vy)):t.removeAttribute("data-outside-vy"),a||r?(i={...i,vx:r?"right":"left"},t.setAttribute("data-outside-vx",i.vx)):t.removeAttribute("data-outside-vx"),i}}},function(t){t.O(0,[49170,92888,49774,40179],function(){return t(t.s=79676)}),_N_E=t.O()}]);