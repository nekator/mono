(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57137],{8499:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tabs/code/Examples",function(){return a(59024)}])},10326:function(t,e,a){"use strict";var n=a(52322),r=a(2784),l=a(43251);let i=(0,r.forwardRef)(function(t,e){let a=e||(0,r.useRef)(e);return(0,n.jsx)("button",{ref:a,...(0,l.mS)(t,[]),id:t.id,className:(0,l.yI)("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:e=>{t.onClick&&t.onClick(e)},children:t.children})});e.Z=i},70741:function(t,e,a){"use strict";var n=a(52322),r=a(2784),l=a(43251);let i=(0,r.forwardRef)(function(t,e){let a=e||(0,r.useRef)(e);return(0,n.jsx)("div",{ref:a,...(0,l.mS)(t,[]),id:t.id,"data-behaviour":t.behaviour,"data-elevation-level":t.elevationLevel,"data-spacing":t.spacing,role:"interactive"===t.behaviour?"button":void 0,tabIndex:"interactive"===t.behaviour?0:void 0,onClick:e=>{t.onClick&&t.onClick(e)},className:(0,l.yI)("db-card",t.className),children:t.children})});e.Z=i},50350:function(t,e,a){"use strict";var n=a(52322),r=a(2784),l=a(43251),i=a(55482);let o=(0,r.forwardRef)(function(t,e){let a=e||(0,r.useRef)(e),[o,s]=(0,r.useState)(()=>i.IY);return(0,n.jsxs)("a",{ref:a,...(0,l.mS)(t,[]),id:t.id,className:(0,l.yI)("db-link",t.className),href:t.href,target:t.target,rel:t.rel,role:t.role,hrefLang:t.hreflang,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:0,"aria-selected":t.selected,"aria-label":t.label,"aria-current":t.current,"data-size":t.size,"data-variant":t.variant,"data-content":t.content||"internal",onClick:e=>{t.onClick&&t.onClick(e)},children:[t.text?(0,n.jsx)("span",{children:t.text}):null,t.children]})});e.Z=o},57284:function(t,e,a){"use strict";var n=a(52322),r=a(2784),l=a(43251);let i=(0,r.forwardRef)(function(t,e){let a=e||(0,r.useRef)(e),[i,o]=(0,r.useState)(()=>!1),[s,c]=(0,r.useState)(()=>!1);return(0,r.useEffect)(()=>{o(!0)},[]),(0,r.useEffect)(()=>{t.active&&i&&a.current&&(a.current.click(),o(!1))},[a.current,i]),(0,n.jsx)("li",{role:"none",className:(0,l.yI)("db-tab-item",t.className),children:(0,n.jsxs)("label",{htmlFor:t.id,"data-icon":t.icon,"data-icon-after":t.iconAfter,"data-no-text":t.noText,children:[(0,n.jsx)("input",{type:"radio",role:"tab",disabled:t.disabled,"aria-selected":s,"aria-controls":t.controls,checked:t.checked,ref:a,...(0,l.mS)(t,[]),id:t.id,onChange:e=>{var a;t.onChange&&t.onChange(e),t.change&&t.change(e),c(null===(a=e.target)||void 0===a?void 0:a.checked)}}),t.label?(0,n.jsx)(n.Fragment,{children:t.label}):null,t.children]})})});e.Z=i},57884:function(t,e,a){"use strict";var n=a(52322),r=a(2784),l=a(43251),i=a(55482);let o=(0,r.forwardRef)(function(t,e){let a=e||(0,r.useRef)(e),[o,s]=(0,r.useState)(()=>i.IY);return(0,r.useEffect)(()=>{s(t.id||"tab-list-"+(0,l.Vj)())},[]),(0,n.jsx)("div",{ref:a,...(0,l.mS)(t,[]),id:o,className:(0,l.yI)("db-tab-list",t.className),children:(0,n.jsx)("ul",{role:"tablist",children:t.children})})});e.Z=o},49953:function(t,e,a){"use strict";var n=a(52322),r=a(2784),l=a(43251);let i=(0,r.forwardRef)(function(t,e){let a=e||(0,r.useRef)(e);return(0,r.useEffect)(()=>{},[]),(0,n.jsxs)("section",{role:"tabpanel",ref:a,...(0,l.mS)(t,[]),className:(0,l.yI)("db-tab-panel",t.className),id:t.id,"aria-labelledby":t.labelledBy,children:[t.content?(0,n.jsx)(n.Fragment,{children:t.content}):null,t.children]})});e.Z=i},57092:function(t,e,a){"use strict";var n=a(52322),r=a(2784),l=a(43251),i=a(10326),o=a(57884),s=a(57284),c=a(49953);let u=(0,r.forwardRef)(function(t,e){var a,u,d,b;let f=e||(0,r.useRef)(e),[_,v]=(0,r.useState)(()=>"tabs-"+(0,l.Vj)()),[h,E]=(0,r.useState)(()=>""),[g,N]=(0,r.useState)(()=>!1),[A,m]=(0,r.useState)(()=>!1),[L,R]=(0,r.useState)(()=>!1),[p,S]=(0,r.useState)(()=>null);function I(t){try{if("string"==typeof t)return JSON.parse(t);return t}catch(t){console.error(t)}}function y(t){let e=t.scrollWidth>t.clientWidth;m(e&&t.scrollLeft>1),R(e&&t.scrollLeft<t.scrollWidth-t.clientWidth)}function T(e){let a=t.arrowScrollDistance||100;e&&(a*=-1),null==p||p.scrollBy({top:0,left:a,behavior:"smooth"})}function C(){if(null==f?void 0:f.current){let e=f.current.querySelector(".db-tab-list");if(e){let a=e.querySelector('[role="tablist"]');a.setAttribute("aria-orientation",t.orientation||"horizontal"),"arrows"===t.behaviour&&(S(a),y(a),a.addEventListener("scroll",()=>{y(a)}))}}}function x(e){if(f.current){let a=f.current.getElementsByClassName("db-tab-item");(null==a?void 0:a.length)>0&&Array.from(a).forEach((a,n)=>{let r=a.querySelector("label"),l=a.querySelector("input");if(l&&r){if(!l.id){let t="".concat(h,"-tab-").concat(n);r.setAttribute("for",t),l.setAttribute("aria-controls","".concat(h,"-tab-panel-").concat(n)),l.id=t,l.setAttribute("name",h)}if(e){let e=!t.initialSelectedMode||"auto"===t.initialSelectedMode,a=void 0===t.initialSelectedIndex&&0===n||t.initialSelectedIndex===n;e&&a&&l.click()}}});let n=f.current.getElementsByClassName("db-tab-panel");(null==n?void 0:n.length)>0&&Array.from(n).forEach((t,e)=>{t.id||(t.id="".concat(h,"-tab-panel-").concat(e),t.setAttribute("aria-labelledby","".concat(h,"-tab-").concat(e)))})}}return(0,r.useEffect)(()=>{v(t.id||_),E(t.name||(0,l.Vj)()),N(!0)},[]),(0,r.useEffect)(()=>{if(f.current&&g){C(),x(!0);let t=f.current.querySelector(".db-tab-list");t&&new MutationObserver(t=>{t.forEach(t=>{(t.removedNodes.length||t.addedNodes.length)&&(C(),x())})}).observe(t,{childList:!0,subtree:!0}),N(!1)}},[f.current,g]),(0,n.jsxs)("div",{ref:f,...(0,l.mS)(t,[]),id:_,className:(0,l.yI)("db-tabs",t.className),"data-orientation":t.orientation,"data-scroll-behaviour":t.behaviour,"data-alignment":null!==(d=t.alignment)&&void 0!==d?d:"start","data-width":null!==(b=t.width)&&void 0!==b?b:"auto",children:[A?(0,n.jsx)(i.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:t=>T(!0),children:"Scroll left"}):null,t.tabs?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{children:null===(a=I(t.tabs))||void 0===a?void 0:a.map((e,a)=>(0,n.jsx)(s.Z,{active:e.active,label:e.label,iconAfter:e.iconAfter,icon:e.icon,noText:e.noText},t.name+"tab-item"+a))}),null===(u=I(t.tabs))||void 0===u?void 0:u.map((e,a)=>(0,n.jsx)(c.Z,{content:e.content,children:e.children},t.name+"tab-panel"+a))]}):null,L?(0,n.jsx)(i.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:t=>T(),children:"Scroll right"}):null,t.children]})});e.Z=u},55482:function(t,e,a){"use strict";var n,r,l,i,o,s,c;a.d(e,{IY:function(){return u},YP:function(){return d},ce:function(){return b}});let u="OVERWRITE_DEFAULT_ID",d="Back",b="Close Button";(o=n||(n={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(n).map(t=>{let[,e]=t;return e}),(r||(r={})).PRIMARY="primary",(s=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",s.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",s.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",s.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",s.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",s.BRAND_BG_LEVEL_1="brand-bg-lvl-1",s.BRAND_BG_LEVEL_2="brand-bg-lvl-2",s.BRAND_BG_LEVEL_3="brand-bg-lvl-3",s.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",s.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",s.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",s.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",s.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",s.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",s.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",s.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",s.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",s.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",s.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",s.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",s.WARNING_BG_LEVEL_1="warning-bg-lvl-1",s.WARNING_BG_LEVEL_2="warning-bg-lvl-2",s.WARNING_BG_LEVEL_3="warning-bg-lvl-3",s.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",s.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",s.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",s.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",s.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",s.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",s.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(t=>{let[,e]=t;return e}),Object.entries(r).map(t=>{let[,e]=t;return e}),(c=i||(i={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(i).map(t=>{let[,e]=t;return e})},43251:function(t,e,a){"use strict";a.d(e,{Lp:function(){return c},Vj:function(){return n},mS:function(){return o},yI:function(){return l},yn:function(){return r}});let n=()=>{var t,e;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(t,e)=>{Object.values(t.children).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&r(t,e)})},l=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];let n="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)n+="".concat(t," ");else for(let e in t)t[e]&&(n+="".concat(e," "))}}),n.trim()},i=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],o=(t,e)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||i.includes(t))&&!e.includes(t)).reduce((e,a)=>(e[a]=t[a],e),{}),s=t=>{var e;let{top:a,bottom:n,left:r,right:l,height:i,width:o}=t.getBoundingClientRect(),{innerHeight:s,innerWidth:c}=window,u=a<0,d=n>s,b=r<0,f=l>c,_=t.hasAttribute("data-outside-vy"),v=t.hasAttribute("data-outside-vx"),h=null==t?void 0:null===(e=t.parentElement)||void 0===e?void 0:e.getBoundingClientRect();return h&&(_&&("top"===t.getAttribute("data-outside-vy")?u=h.top-(n-h.bottom)<0:d=h.bottom+(h.top-a)>s),v&&("left"===t.getAttribute("data-outside-vx")?b=h.left-(l-h.right)<0:f=h.right+(h.left-r)>c)),{outTop:u,outBottom:d,outLeft:b,outRight:f}},c=t=>{let{outTop:e,outBottom:a,outLeft:n,outRight:r}=s(t),l={};return e||a?(l={vy:e?"top":"bottom"},t.setAttribute("data-outside-vy",l.vy)):t.removeAttribute("data-outside-vy"),n||r?(l={...l,vx:r?"right":"left"},t.setAttribute("data-outside-vx",l.vx)):t.removeAttribute("data-outside-vx"),l}}},function(t){t.O(0,[59024,92888,49774,40179],function(){return t(t.s=8499)}),_N_E=t.O()}]);