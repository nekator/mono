(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[49946],{54180:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/tooltip/code/Width",function(){return n(51504)}])},10326:function(t,e,n){"use strict";var i=n(52322),o=n(2784),l=n(43251);let a=(0,o.forwardRef)(function(t,e){let n=e||(0,o.useRef)(e);return(0,i.jsx)("button",{ref:n,...(0,l.mS)(t,[]),id:t.id,className:(0,l.yI)("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:e=>{t.onClick&&t.onClick(e)},children:t.children})});e.Z=a},70741:function(t,e,n){"use strict";var i=n(52322),o=n(2784),l=n(43251);let a=(0,o.forwardRef)(function(t,e){let n=e||(0,o.useRef)(e);return(0,i.jsx)("div",{ref:n,...(0,l.mS)(t,[]),id:t.id,"data-behaviour":t.behaviour,"data-elevation-level":t.elevationLevel,"data-spacing":t.spacing,role:"interactive"===t.behaviour?"button":void 0,tabIndex:"interactive"===t.behaviour?0:void 0,onClick:e=>{t.onClick&&t.onClick(e)},className:(0,l.yI)("db-card",t.className),children:t.children})});e.Z=a},57284:function(t,e,n){"use strict";var i=n(52322),o=n(2784),l=n(43251);let a=(0,o.forwardRef)(function(t,e){let n=e||(0,o.useRef)(e),[a,r]=(0,o.useState)(()=>!1),[s,c]=(0,o.useState)(()=>!1);return(0,o.useEffect)(()=>{r(!0)},[]),(0,o.useEffect)(()=>{t.active&&a&&n.current&&(n.current.click(),r(!1))},[n.current,a]),(0,i.jsx)("li",{role:"none",className:(0,l.yI)("db-tab-item",t.className),children:(0,i.jsxs)("label",{htmlFor:t.id,"data-icon":t.icon,"data-icon-after":t.iconAfter,"data-no-text":t.noText,children:[(0,i.jsx)("input",{type:"radio",role:"tab",disabled:t.disabled,"aria-selected":s,"aria-controls":t.controls,checked:t.checked,ref:n,...(0,l.mS)(t,[]),id:t.id,onChange:e=>{var n;t.onChange&&t.onChange(e),t.change&&t.change(e),c(null===(n=e.target)||void 0===n?void 0:n.checked)}}),t.label?(0,i.jsx)(i.Fragment,{children:t.label}):null,t.children]})})});e.Z=a},57884:function(t,e,n){"use strict";var i=n(52322),o=n(2784),l=n(43251),a=n(55482);let r=(0,o.forwardRef)(function(t,e){let n=e||(0,o.useRef)(e),[r,s]=(0,o.useState)(()=>a.IY);return(0,o.useEffect)(()=>{s(t.id||"tab-list-"+(0,l.Vj)())},[]),(0,i.jsx)("div",{ref:n,...(0,l.mS)(t,[]),id:r,className:(0,l.yI)("db-tab-list",t.className),children:(0,i.jsx)("ul",{role:"tablist",children:t.children})})});e.Z=r},49953:function(t,e,n){"use strict";var i=n(52322),o=n(2784),l=n(43251);let a=(0,o.forwardRef)(function(t,e){let n=e||(0,o.useRef)(e);return(0,o.useEffect)(()=>{},[]),(0,i.jsxs)("section",{role:"tabpanel",ref:n,...(0,l.mS)(t,[]),className:(0,l.yI)("db-tab-panel",t.className),id:t.id,"aria-labelledby":t.labelledBy,children:[t.content?(0,i.jsx)(i.Fragment,{children:t.content}):null,t.children]})});e.Z=a},57092:function(t,e,n){"use strict";var i=n(52322),o=n(2784),l=n(43251),a=n(10326),r=n(57884),s=n(57284),c=n(49953);let d=(0,o.forwardRef)(function(t,e){var n,d,u,p;let h=e||(0,o.useRef)(e),[m,b]=(0,o.useState)(()=>"tabs-"+(0,l.Vj)()),[x,f]=(0,o.useState)(()=>""),[g,v]=(0,o.useState)(()=>!1),[_,T]=(0,o.useState)(()=>!1),[N,A]=(0,o.useState)(()=>!1),[E,w]=(0,o.useState)(()=>null);function j(t){try{if("string"==typeof t)return JSON.parse(t);return t}catch(t){console.error(t)}}function L(t){let e=t.scrollWidth>t.clientWidth;T(e&&t.scrollLeft>1),A(e&&t.scrollLeft<t.scrollWidth-t.clientWidth)}function R(e){let n=t.arrowScrollDistance||100;e&&(n*=-1),null==E||E.scrollBy({top:0,left:n,behavior:"smooth"})}function y(){if(null==h?void 0:h.current){let e=h.current.querySelector(".db-tab-list");if(e){let n=e.querySelector('[role="tablist"]');n.setAttribute("aria-orientation",t.orientation||"horizontal"),"arrows"===t.behaviour&&(w(n),L(n),n.addEventListener("scroll",()=>{L(n)}))}}}function B(e){if(h.current){let n=h.current.getElementsByClassName("db-tab-item");(null==n?void 0:n.length)>0&&Array.from(n).forEach((n,i)=>{let o=n.querySelector("label"),l=n.querySelector("input");if(l&&o){if(!l.id){let t="".concat(x,"-tab-").concat(i);o.setAttribute("for",t),l.setAttribute("aria-controls","".concat(x,"-tab-panel-").concat(i)),l.id=t,l.setAttribute("name",x)}if(e){let e=!t.initialSelectedMode||"auto"===t.initialSelectedMode,n=void 0===t.initialSelectedIndex&&0===i||t.initialSelectedIndex===i;e&&n&&l.click()}}});let i=h.current.getElementsByClassName("db-tab-panel");(null==i?void 0:i.length)>0&&Array.from(i).forEach((t,e)=>{t.id||(t.id="".concat(x,"-tab-panel-").concat(e),t.setAttribute("aria-labelledby","".concat(x,"-tab-").concat(e)))})}}return(0,o.useEffect)(()=>{b(t.id||m),f(t.name||(0,l.Vj)()),v(!0)},[]),(0,o.useEffect)(()=>{if(h.current&&g){y(),B(!0);let t=h.current.querySelector(".db-tab-list");t&&new MutationObserver(t=>{t.forEach(t=>{(t.removedNodes.length||t.addedNodes.length)&&(y(),B())})}).observe(t,{childList:!0,subtree:!0}),v(!1)}},[h.current,g]),(0,i.jsxs)("div",{ref:h,...(0,l.mS)(t,[]),id:m,className:(0,l.yI)("db-tabs",t.className),"data-orientation":t.orientation,"data-scroll-behaviour":t.behaviour,"data-alignment":null!==(u=t.alignment)&&void 0!==u?u:"start","data-width":null!==(p=t.width)&&void 0!==p?p:"auto",children:[_?(0,i.jsx)(a.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:t=>R(!0),children:"Scroll left"}):null,t.tabs?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{children:null===(n=j(t.tabs))||void 0===n?void 0:n.map((e,n)=>(0,i.jsx)(s.Z,{active:e.active,label:e.label,iconAfter:e.iconAfter,icon:e.icon,noText:e.noText},t.name+"tab-item"+n))}),null===(d=j(t.tabs))||void 0===d?void 0:d.map((e,n)=>(0,i.jsx)(c.Z,{content:e.content,children:e.children},t.name+"tab-panel"+n))]}):null,N?(0,i.jsx)(a.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:t=>R(),children:"Scroll right"}):null,t.children]})});e.Z=d},55482:function(t,e,n){"use strict";var i,o,l,a,r,s,c;n.d(e,{IY:function(){return d},YP:function(){return u},ce:function(){return p}});let d="OVERWRITE_DEFAULT_ID",u="Back",p="Close Button";(r=i||(i={})).FUNCTIONAL="functional",r.REGULAR="regular",r.EXPRESSIVE="expressive",Object.entries(i).map(t=>{let[,e]=t;return e}),(o||(o={})).PRIMARY="primary",(s=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",s.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",s.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",s.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",s.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",s.BRAND_BG_LEVEL_1="brand-bg-lvl-1",s.BRAND_BG_LEVEL_2="brand-bg-lvl-2",s.BRAND_BG_LEVEL_3="brand-bg-lvl-3",s.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",s.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",s.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",s.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",s.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",s.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",s.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",s.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",s.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",s.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",s.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",s.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",s.WARNING_BG_LEVEL_1="warning-bg-lvl-1",s.WARNING_BG_LEVEL_2="warning-bg-lvl-2",s.WARNING_BG_LEVEL_3="warning-bg-lvl-3",s.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",s.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",s.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",s.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",s.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",s.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",s.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(t=>{let[,e]=t;return e}),Object.entries(o).map(t=>{let[,e]=t;return e}),(c=a||(a={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(a).map(t=>{let[,e]=t;return e})},43251:function(t,e,n){"use strict";n.d(e,{Lp:function(){return c},Vj:function(){return i},mS:function(){return r},yI:function(){return l},yn:function(){return o}});let i=()=>{var t,e;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},o=(t,e)=>{Object.values(t.children).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&o(t,e)})},l=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];let i="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)i+="".concat(t," ");else for(let e in t)t[e]&&(i+="".concat(e," "))}}),i.trim()},a=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],r=(t,e)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||a.includes(t))&&!e.includes(t)).reduce((e,n)=>(e[n]=t[n],e),{}),s=t=>{var e;let{top:n,bottom:i,left:o,right:l,height:a,width:r}=t.getBoundingClientRect(),{innerHeight:s,innerWidth:c}=window,d=n<0,u=i>s,p=o<0,h=l>c,m=t.hasAttribute("data-outside-vy"),b=t.hasAttribute("data-outside-vx"),x=null==t?void 0:null===(e=t.parentElement)||void 0===e?void 0:e.getBoundingClientRect();return x&&(m&&("top"===t.getAttribute("data-outside-vy")?d=x.top-(i-x.bottom)<0:u=x.bottom+(x.top-n)>s),b&&("left"===t.getAttribute("data-outside-vx")?p=x.left-(l-x.right)<0:h=x.right+(x.left-o)>c)),{outTop:d,outBottom:u,outLeft:p,outRight:h}},c=t=>{let{outTop:e,outBottom:n,outLeft:i,outRight:o}=s(t),l={};return e||n?(l={vy:e?"top":"bottom"},t.setAttribute("data-outside-vy",l.vy)):t.removeAttribute("data-outside-vy"),i||o?(l={...l,vx:o?"right":"left"},t.setAttribute("data-outside-vx",l.vx)):t.removeAttribute("data-outside-vx"),l}},51504:function(t,e,n){"use strict";n.r(e);var i=n(52322),o=n(2784),l=n(70741),a=n(57092),r=n(57884),s=n(57284),c=n(49953),d=n(10326);e.default=()=>{let[t,e]=(0,o.useState)();return(0,o.useEffect)(()=>{t&&setTimeout(()=>e(""),1500)},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{className:"tab-container",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(s.Z,{children:"Angular"}),(0,i.jsx)(s.Z,{children:"HTML"}),(0,i.jsx)(s.Z,{children:"React"}),(0,i.jsx)(s.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</db-tooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</db-tooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</db-tooltip>'),navigator.clipboard.writeText('<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</db-tooltip>')},children:"Copy code"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<i\n  role="tooltip"\n  data-gap="true"\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n  class="db-tooltip"\n>\n  (Default) Auto\n</i>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<i\n  role="tooltip"\n  data-gap="true"\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n  class="db-tooltip"\n>\n  (Default) Auto\n</i>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<i\n  role="tooltip"\n  data-gap="true"\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n  class="db-tooltip"\n>\n  (Default) Auto\n</i>'),navigator.clipboard.writeText('<i\n  role="tooltip"\n  data-gap="true"\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n  class="db-tooltip"\n>\n  (Default) Auto\n</i>')},children:"Copy code"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>')},children:"Copy code"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-12"\n>\n  (Default) Auto\n</DBTooltip>')},children:"Copy code"})]})]})}),(0,i.jsx)(l.Z,{className:"tab-container",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(s.Z,{children:"Angular"}),(0,i.jsx)(s.Z,{children:"HTML"}),(0,i.jsx)(s.Z,{children:"React"}),(0,i.jsx)(s.Z,{children:"Vue"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</db-tooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</db-tooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</db-tooltip>'),navigator.clipboard.writeText('<db-tooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</db-tooltip>')},children:"Copy code"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<i\n  role="tooltip"\n  data-gap="true"\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-13"\n  data-width="fixed"\n  class="db-tooltip"\n>\n  Fixed\n</i>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<i\n  role="tooltip"\n  data-gap="true"\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-13"\n  data-width="fixed"\n  class="db-tooltip"\n>\n  Fixed\n</i>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<i\n  role="tooltip"\n  data-gap="true"\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-13"\n  data-width="fixed"\n  class="db-tooltip"\n>\n  Fixed\n</i>'),navigator.clipboard.writeText('<i\n  role="tooltip"\n  data-gap="true"\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="tooltip-13"\n  data-width="fixed"\n  class="db-tooltip"\n>\n  Fixed\n</i>')},children:"Copy code"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>')},children:"Copy code"})]}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'})}),(0,i.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>'),navigator.clipboard.writeText('<DBTooltip\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="tooltip-13"\n>\n  Fixed\n</DBTooltip>')},children:"Copy code"})]})]})})]})}}},function(t){t.O(0,[92888,49774,40179],function(){return t(t.s=54180)}),_N_E=t.O()}]);