(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59065],{37853:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tooltip/code/Emphasis",function(){return n(56702)}])},10326:function(t,e,n){"use strict";var o=n(52322),i=n(2784),l=n(43251);let a=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e);return(0,o.jsx)("button",{ref:n,...(0,l.mS)(t,[]),id:t.id,className:(0,l.yI)("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:e=>{t.onClick&&t.onClick(e)},children:t.children})});e.Z=a},70741:function(t,e,n){"use strict";var o=n(52322),i=n(2784),l=n(43251);let a=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e);return(0,o.jsx)("div",{ref:n,...(0,l.mS)(t,[]),id:t.id,"data-behaviour":t.behaviour,"data-elevation-level":t.elevationLevel,"data-spacing":t.spacing,role:"interactive"===t.behaviour?"button":void 0,tabIndex:"interactive"===t.behaviour?0:void 0,onClick:e=>{t.onClick&&t.onClick(e)},className:(0,l.yI)("db-card",t.className),children:t.children})});e.Z=a},57284:function(t,e,n){"use strict";var o=n(52322),i=n(2784),l=n(43251);let a=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e),[a,r]=(0,i.useState)(()=>!1),[s,c]=(0,i.useState)(()=>!1);return(0,i.useEffect)(()=>{r(!0)},[]),(0,i.useEffect)(()=>{t.active&&a&&n.current&&(n.current.click(),r(!1))},[n.current,a]),(0,o.jsx)("li",{role:"none",className:(0,l.yI)("db-tab-item",t.className),children:(0,o.jsxs)("label",{htmlFor:t.id,"data-icon":t.icon,"data-icon-after":t.iconAfter,"data-no-text":t.noText,children:[(0,o.jsx)("input",{type:"radio",role:"tab",disabled:t.disabled,"aria-selected":s,"aria-controls":t.controls,checked:t.checked,ref:n,...(0,l.mS)(t,[]),id:t.id,onChange:e=>{var n;t.onChange&&t.onChange(e),t.change&&t.change(e),c(null===(n=e.target)||void 0===n?void 0:n.checked)}}),t.label?(0,o.jsx)(o.Fragment,{children:t.label}):null,t.children]})})});e.Z=a},57884:function(t,e,n){"use strict";var o=n(52322),i=n(2784),l=n(43251),a=n(55482);let r=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e),[r,s]=(0,i.useState)(()=>a.IY);return(0,i.useEffect)(()=>{s(t.id||"tab-list-"+(0,l.Vj)())},[]),(0,o.jsx)("div",{ref:n,...(0,l.mS)(t,[]),id:r,className:(0,l.yI)("db-tab-list",t.className),children:(0,o.jsx)("ul",{role:"tablist",children:t.children})})});e.Z=r},49953:function(t,e,n){"use strict";var o=n(52322),i=n(2784),l=n(43251);let a=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e);return(0,i.useEffect)(()=>{},[]),(0,o.jsxs)("section",{role:"tabpanel",ref:n,...(0,l.mS)(t,[]),className:(0,l.yI)("db-tab-panel",t.className),id:t.id,"aria-labelledby":t.labelledBy,children:[t.content?(0,o.jsx)(o.Fragment,{children:t.content}):null,t.children]})});e.Z=a},57092:function(t,e,n){"use strict";var o=n(52322),i=n(2784),l=n(43251),a=n(10326),r=n(57884),s=n(57284),c=n(49953);let d=(0,i.forwardRef)(function(t,e){var n,d,u,p;let h=e||(0,i.useRef)(e),[b,g]=(0,i.useState)(()=>"tabs-"+(0,l.Vj)()),[f,T]=(0,i.useState)(()=>""),[v,m]=(0,i.useState)(()=>!1),[x,_]=(0,i.useState)(()=>!1),[N,E]=(0,i.useState)(()=>!1),[A,S]=(0,i.useState)(()=>null);function j(t){try{if("string"==typeof t)return JSON.parse(t);return t}catch(t){console.error(t)}}function L(t){let e=t.scrollWidth>t.clientWidth;_(e&&t.scrollLeft>1),E(e&&t.scrollLeft<t.scrollWidth-t.clientWidth)}function R(e){let n=t.arrowScrollDistance||100;e&&(n*=-1),null==A||A.scrollBy({top:0,left:n,behavior:"smooth"})}function y(){if(null==h?void 0:h.current){let e=h.current.querySelector(".db-tab-list");if(e){let n=e.querySelector('[role="tablist"]');n.setAttribute("aria-orientation",t.orientation||"horizontal"),"arrows"===t.behaviour&&(S(n),L(n),n.addEventListener("scroll",()=>{L(n)}))}}}function B(e){if(h.current){let n=h.current.getElementsByClassName("db-tab-item");(null==n?void 0:n.length)>0&&Array.from(n).forEach((n,o)=>{let i=n.querySelector("label"),l=n.querySelector("input");if(l&&i){if(!l.id){let t="".concat(f,"-tab-").concat(o);i.setAttribute("for",t),l.setAttribute("aria-controls","".concat(f,"-tab-panel-").concat(o)),l.id=t,l.setAttribute("name",f)}if(e){let e=!t.initialSelectedMode||"auto"===t.initialSelectedMode,n=void 0===t.initialSelectedIndex&&0===o||t.initialSelectedIndex===o;e&&n&&l.click()}}});let o=h.current.getElementsByClassName("db-tab-panel");(null==o?void 0:o.length)>0&&Array.from(o).forEach((t,e)=>{t.id||(t.id="".concat(f,"-tab-panel-").concat(e),t.setAttribute("aria-labelledby","".concat(f,"-tab-").concat(e)))})}}return(0,i.useEffect)(()=>{g(t.id||b),T(t.name||(0,l.Vj)()),m(!0)},[]),(0,i.useEffect)(()=>{if(h.current&&v){y(),B(!0);let t=h.current.querySelector(".db-tab-list");t&&new MutationObserver(t=>{t.forEach(t=>{(t.removedNodes.length||t.addedNodes.length)&&(y(),B())})}).observe(t,{childList:!0,subtree:!0}),m(!1)}},[h.current,v]),(0,o.jsxs)("div",{ref:h,...(0,l.mS)(t,[]),id:b,className:(0,l.yI)("db-tabs",t.className),"data-orientation":t.orientation,"data-scroll-behaviour":t.behaviour,"data-alignment":null!==(u=t.alignment)&&void 0!==u?u:"start","data-width":null!==(p=t.width)&&void 0!==p?p:"auto",children:[x?(0,o.jsx)(a.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:t=>R(!0),children:"Scroll left"}):null,t.tabs?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{children:null===(n=j(t.tabs))||void 0===n?void 0:n.map((e,n)=>(0,o.jsx)(s.Z,{active:e.active,label:e.label,iconAfter:e.iconAfter,icon:e.icon,noText:e.noText},t.name+"tab-item"+n))}),null===(d=j(t.tabs))||void 0===d?void 0:d.map((e,n)=>(0,o.jsx)(c.Z,{content:e.content,children:e.children},t.name+"tab-panel"+n))]}):null,N?(0,o.jsx)(a.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:t=>R(),children:"Scroll right"}):null,t.children]})});e.Z=d},55482:function(t,e,n){"use strict";var o,i,l,a,r,s,c;n.d(e,{IY:function(){return d},YP:function(){return u},ce:function(){return p}});let d="OVERWRITE_DEFAULT_ID",u="Back",p="Close Button";(r=o||(o={})).FUNCTIONAL="functional",r.REGULAR="regular",r.EXPRESSIVE="expressive",Object.entries(o).map(t=>{let[,e]=t;return e}),(i||(i={})).PRIMARY="primary",(s=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",s.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",s.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",s.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",s.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",s.BRAND_BG_LEVEL_1="brand-bg-lvl-1",s.BRAND_BG_LEVEL_2="brand-bg-lvl-2",s.BRAND_BG_LEVEL_3="brand-bg-lvl-3",s.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",s.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",s.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",s.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",s.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",s.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",s.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",s.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",s.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",s.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",s.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",s.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",s.WARNING_BG_LEVEL_1="warning-bg-lvl-1",s.WARNING_BG_LEVEL_2="warning-bg-lvl-2",s.WARNING_BG_LEVEL_3="warning-bg-lvl-3",s.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",s.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",s.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",s.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",s.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",s.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",s.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(t=>{let[,e]=t;return e}),Object.entries(i).map(t=>{let[,e]=t;return e}),(c=a||(a={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(a).map(t=>{let[,e]=t;return e})},43251:function(t,e,n){"use strict";n.d(e,{Lp:function(){return c},Vj:function(){return o},mS:function(){return r},yI:function(){return l},yn:function(){return i}});let o=()=>{var t,e;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(t,e)=>{Object.values(t.children).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&i(t,e)})},l=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];let o="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)o+="".concat(t," ");else for(let e in t)t[e]&&(o+="".concat(e," "))}}),o.trim()},a=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],r=(t,e)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||a.includes(t))&&!e.includes(t)).reduce((e,n)=>(e[n]=t[n],e),{}),s=t=>{var e;let{top:n,bottom:o,left:i,right:l,height:a,width:r}=t.getBoundingClientRect(),{innerHeight:s,innerWidth:c}=window,d=n<0,u=o>s,p=i<0,h=l>c,b=t.hasAttribute("data-outside-vy"),g=t.hasAttribute("data-outside-vx"),f=null==t?void 0:null===(e=t.parentElement)||void 0===e?void 0:e.getBoundingClientRect();return f&&(b&&("top"===t.getAttribute("data-outside-vy")?d=f.top-(o-f.bottom)<0:u=f.bottom+(f.top-n)>s),g&&("left"===t.getAttribute("data-outside-vx")?p=f.left-(l-f.right)<0:h=f.right+(f.left-i)>c)),{outTop:d,outBottom:u,outLeft:p,outRight:h}},c=t=>{let{outTop:e,outBottom:n,outLeft:o,outRight:i}=s(t),l={};return e||n?(l={vy:e?"top":"bottom"},t.setAttribute("data-outside-vy",l.vy)):t.removeAttribute("data-outside-vy"),o||i?(l={...l,vx:i?"right":"left"},t.setAttribute("data-outside-vx",l.vx)):t.removeAttribute("data-outside-vx"),l}},56702:function(t,e,n){"use strict";n.r(e);var o=n(52322),i=n(2784),l=n(70741),a=n(57092),r=n(57884),s=n(57284),c=n(49953),d=n(10326);e.default=()=>{let[t,e]=(0,i.useState)();return(0,i.useEffect)(()=>{t&&setTimeout(()=>e(""),1500)},[t]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(s.Z,{children:"Angular"}),(0,o.jsx)(s.Z,{children:"HTML"}),(0,o.jsx)(s.Z,{children:"React"}),(0,o.jsx)(s.Z,{children:"Vue"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</db-tooltip>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</db-tooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<db-tooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</db-tooltip>'),navigator.clipboard.writeText('<db-tooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</db-tooltip>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<i\n  role="tooltip"\n  aria-hidden="true"\n  data-gap="true"\n  content="Tooltip"\n  id="tooltip-06"\n  class="db-tooltip"\n>\n  (Default) Weak\n</i>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<i\n  role="tooltip"\n  aria-hidden="true"\n  data-gap="true"\n  content="Tooltip"\n  id="tooltip-06"\n  class="db-tooltip"\n>\n  (Default) Weak\n</i>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<i\n  role="tooltip"\n  aria-hidden="true"\n  data-gap="true"\n  content="Tooltip"\n  id="tooltip-06"\n  class="db-tooltip"\n>\n  (Default) Weak\n</i>'),navigator.clipboard.writeText('<i\n  role="tooltip"\n  aria-hidden="true"\n  data-gap="true"\n  content="Tooltip"\n  id="tooltip-06"\n  class="db-tooltip"\n>\n  (Default) Weak\n</i>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" id="tooltip-06">\n  (Default) Weak\n</DBTooltip>')},children:"Copy code"})]})]})}),(0,o.jsx)(l.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(s.Z,{children:"Angular"}),(0,o.jsx)(s.Z,{children:"HTML"}),(0,o.jsx)(s.Z,{children:"React"}),(0,o.jsx)(s.Z,{children:"Vue"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-tooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</db-tooltip>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</db-tooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<db-tooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</db-tooltip>'),navigator.clipboard.writeText('<db-tooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</db-tooltip>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<i\n  role="tooltip"\n  aria-hidden="true"\n  data-gap="true"\n  content="Tooltip"\n  id="tooltip-07"\n  data-emphasis="strong"\n  class="db-tooltip"\n>\n  Strong\n</i>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<i\n  role="tooltip"\n  aria-hidden="true"\n  data-gap="true"\n  content="Tooltip"\n  id="tooltip-07"\n  data-emphasis="strong"\n  class="db-tooltip"\n>\n  Strong\n</i>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<i\n  role="tooltip"\n  aria-hidden="true"\n  data-gap="true"\n  content="Tooltip"\n  id="tooltip-07"\n  data-emphasis="strong"\n  class="db-tooltip"\n>\n  Strong\n</i>'),navigator.clipboard.writeText('<i\n  role="tooltip"\n  aria-hidden="true"\n  data-gap="true"\n  content="Tooltip"\n  id="tooltip-07"\n  data-emphasis="strong"\n  class="db-tooltip"\n>\n  Strong\n</i>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip content="Tooltip" emphasis="strong" id="tooltip-07">\n  Strong\n</DBTooltip>')},children:"Copy code"})]})]})})]})}}},function(t){t.O(0,[92888,49774,40179],function(){return t(t.s=37853)}),_N_E=t.O()}]);