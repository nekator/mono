(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80676],{96393:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/utilities/popover/code/Width",function(){return n(42975)}])},10326:function(e,t,n){"use strict";var o=n(52322),i=n(2784),r=n(43251);let a=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t);return(0,o.jsx)("button",{ref:n,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=a},70741:function(e,t,n){"use strict";var o=n(52322),i=n(2784),r=n(43251);let a=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t);return(0,o.jsx)("div",{ref:n,...(0,r.mS)(e,[]),id:e.id,"data-behaviour":e.behaviour,"data-elevation-level":e.elevationLevel,"data-spacing":e.spacing,role:"interactive"===e.behaviour?"button":void 0,tabIndex:"interactive"===e.behaviour?0:void 0,onClick:t=>{e.onClick&&e.onClick(t)},className:(0,r.yI)("db-card",e.className),children:e.children})});t.Z=a},57284:function(e,t,n){"use strict";var o=n(52322),i=n(2784),r=n(43251);let a=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t),[a,s]=(0,i.useState)(()=>!1),[l,c]=(0,i.useState)(()=>!1);return(0,i.useEffect)(()=>{s(!0)},[]),(0,i.useEffect)(()=>{e.active&&a&&n.current&&(n.current.click(),s(!1))},[n.current,a]),(0,o.jsx)("li",{role:"none",className:(0,r.yI)("db-tab-item",e.className),children:(0,o.jsxs)("label",{htmlFor:e.id,"data-icon":e.icon,"data-icon-after":e.iconAfter,"data-no-text":e.noText,children:[(0,o.jsx)("input",{type:"radio",role:"tab",disabled:e.disabled,"aria-selected":l,"aria-controls":e.controls,checked:e.checked,ref:n,...(0,r.mS)(e,[]),id:e.id,onChange:t=>{var n;e.onChange&&e.onChange(t),e.change&&e.change(t),c(null===(n=t.target)||void 0===n?void 0:n.checked)}}),e.label?(0,o.jsx)(o.Fragment,{children:e.label}):null,e.children]})})});t.Z=a},57884:function(e,t,n){"use strict";var o=n(52322),i=n(2784),r=n(43251),a=n(55482);let s=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t),[s,l]=(0,i.useState)(()=>a.IY);return(0,i.useEffect)(()=>{l(e.id||"tab-list-"+(0,r.Vj)())},[]),(0,o.jsx)("div",{ref:n,...(0,r.mS)(e,[]),id:s,className:(0,r.yI)("db-tab-list",e.className),children:(0,o.jsx)("ul",{role:"tablist",children:e.children})})});t.Z=s},49953:function(e,t,n){"use strict";var o=n(52322),i=n(2784),r=n(43251);let a=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t);return(0,i.useEffect)(()=>{},[]),(0,o.jsxs)("section",{role:"tabpanel",ref:n,...(0,r.mS)(e,[]),className:(0,r.yI)("db-tab-panel",e.className),id:e.id,"aria-labelledby":e.labelledBy,children:[e.content?(0,o.jsx)(o.Fragment,{children:e.content}):null,e.children]})});t.Z=a},57092:function(e,t,n){"use strict";var o=n(52322),i=n(2784),r=n(43251),a=n(10326),s=n(57884),l=n(57284),c=n(49953);let d=(0,i.forwardRef)(function(e,t){var n,d,u,p;let v=t||(0,i.useRef)(t),[h,m]=(0,i.useState)(()=>"tabs-"+(0,r.Vj)()),[b,x]=(0,i.useState)(()=>""),[f,g]=(0,i.useState)(()=>!1),[_,N]=(0,i.useState)(()=>!1),[A,E]=(0,i.useState)(()=>!1),[w,j]=(0,i.useState)(()=>null);function L(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}function R(e){let t=e.scrollWidth>e.clientWidth;N(t&&e.scrollLeft>1),E(t&&e.scrollLeft<e.scrollWidth-e.clientWidth)}function y(t){let n=e.arrowScrollDistance||100;t&&(n*=-1),null==w||w.scrollBy({top:0,left:n,behavior:"smooth"})}function B(){if(null==v?void 0:v.current){let t=v.current.querySelector(".db-tab-list");if(t){let n=t.querySelector('[role="tablist"]');n.setAttribute("aria-orientation",e.orientation||"horizontal"),"arrows"===e.behaviour&&(j(n),R(n),n.addEventListener("scroll",()=>{R(n)}))}}}function T(t){if(v.current){let n=v.current.getElementsByClassName("db-tab-item");(null==n?void 0:n.length)>0&&Array.from(n).forEach((n,o)=>{let i=n.querySelector("label"),r=n.querySelector("input");if(r&&i){if(!r.id){let e="".concat(b,"-tab-").concat(o);i.setAttribute("for",e),r.setAttribute("aria-controls","".concat(b,"-tab-panel-").concat(o)),r.id=e,r.setAttribute("name",b)}if(t){let t=!e.initialSelectedMode||"auto"===e.initialSelectedMode,n=void 0===e.initialSelectedIndex&&0===o||e.initialSelectedIndex===o;t&&n&&r.click()}}});let o=v.current.getElementsByClassName("db-tab-panel");(null==o?void 0:o.length)>0&&Array.from(o).forEach((e,t)=>{e.id||(e.id="".concat(b,"-tab-panel-").concat(t),e.setAttribute("aria-labelledby","".concat(b,"-tab-").concat(t)))})}}return(0,i.useEffect)(()=>{m(e.id||h),x(e.name||(0,r.Vj)()),g(!0)},[]),(0,i.useEffect)(()=>{if(v.current&&f){B(),T(!0);let e=v.current.querySelector(".db-tab-list");e&&new MutationObserver(e=>{e.forEach(e=>{(e.removedNodes.length||e.addedNodes.length)&&(B(),T())})}).observe(e,{childList:!0,subtree:!0}),g(!1)}},[v.current,f]),(0,o.jsxs)("div",{ref:v,...(0,r.mS)(e,[]),id:h,className:(0,r.yI)("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behaviour":e.behaviour,"data-alignment":null!==(u=e.alignment)&&void 0!==u?u:"start","data-width":null!==(p=e.width)&&void 0!==p?p:"auto",children:[_?(0,o.jsx)(a.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:e=>y(!0),children:"Scroll left"}):null,e.tabs?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{children:null===(n=L(e.tabs))||void 0===n?void 0:n.map((t,n)=>(0,o.jsx)(l.Z,{active:t.active,label:t.label,iconAfter:t.iconAfter,icon:t.icon,noText:t.noText},e.name+"tab-item"+n))}),null===(d=L(e.tabs))||void 0===d?void 0:d.map((t,n)=>(0,o.jsx)(c.Z,{content:t.content,children:t.children},e.name+"tab-panel"+n))]}):null,A?(0,o.jsx)(a.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:e=>y(),children:"Scroll right"}):null,e.children]})});t.Z=d},55482:function(e,t,n){"use strict";var o,i,r,a,s,l,c;n.d(t,{IY:function(){return d},YP:function(){return u},ce:function(){return p}});let d="OVERWRITE_DEFAULT_ID",u="Back",p="Close Button";(s=o||(o={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(o).map(e=>{let[,t]=e;return t}),(i||(i={})).PRIMARY="primary",(l=r||(r={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",l.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",l.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",l.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",l.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",l.BRAND_BG_LEVEL_1="brand-bg-lvl-1",l.BRAND_BG_LEVEL_2="brand-bg-lvl-2",l.BRAND_BG_LEVEL_3="brand-bg-lvl-3",l.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",l.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",l.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",l.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",l.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",l.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",l.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",l.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",l.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",l.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",l.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",l.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",l.WARNING_BG_LEVEL_1="warning-bg-lvl-1",l.WARNING_BG_LEVEL_2="warning-bg-lvl-2",l.WARNING_BG_LEVEL_3="warning-bg-lvl-3",l.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",l.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",l.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",l.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",l.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",l.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",l.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(r).map(e=>{let[,t]=e;return t}),Object.entries(i).map(e=>{let[,t]=e;return t}),(c=a||(a={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(a).map(e=>{let[,t]=e;return t})},43251:function(e,t,n){"use strict";n.d(t,{Lp:function(){return c},Vj:function(){return o},mS:function(){return s},yI:function(){return r},yn:function(){return i}});let o=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&i(e,t)})},r=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let o="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)o+="".concat(e," ");else for(let t in e)e[t]&&(o+="".concat(t," "))}}),o.trim()},a=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],s=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||a.includes(e))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}),l=e=>{var t;let{top:n,bottom:o,left:i,right:r,height:a,width:s}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:c}=window,d=n<0,u=o>l,p=i<0,v=r>c,h=e.hasAttribute("data-outside-vy"),m=e.hasAttribute("data-outside-vx"),b=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return b&&(h&&("top"===e.getAttribute("data-outside-vy")?d=b.top-(o-b.bottom)<0:u=b.bottom+(b.top-n)>l),m&&("left"===e.getAttribute("data-outside-vx")?p=b.left-(r-b.right)<0:v=b.right+(b.left-i)>c)),{outTop:d,outBottom:u,outLeft:p,outRight:v}},c=e=>{let{outTop:t,outBottom:n,outLeft:o,outRight:i}=l(e),r={};return t||n?(r={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",r.vy)):e.removeAttribute("data-outside-vy"),o||i?(r={...r,vx:i?"right":"left"},e.setAttribute("data-outside-vx",r.vx)):e.removeAttribute("data-outside-vx"),r}},42975:function(e,t,n){"use strict";n.r(t);var o=n(52322),i=n(2784),r=n(70741),a=n(57092),s=n(57884),l=n(57284),c=n(49953),d=n(10326);t.default=()=>{let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{e&&setTimeout(()=>t(""),1500)},[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(l.Z,{children:"Angular"}),(0,o.jsx)(l.Z,{children:"HTML"}),(0,o.jsx)(l.Z,{children:"React"}),(0,o.jsx)(l.Z,{children:"Vue"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</db-popover>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</db-popover>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</db-popover>'),navigator.clipboard.writeText('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</db-popover>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<div\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n  class="db-popover"\n>\n  <article class="db-popover-content">(Default) Auto</article>\n</div>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n  class="db-popover"\n>\n  <article class="db-popover-content">(Default) Auto</article>\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<div\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n  class="db-popover"\n>\n  <article class="db-popover-content">(Default) Auto</article>\n</div>'),navigator.clipboard.writeText('<div\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n  class="db-popover"\n>\n  <article class="db-popover-content">(Default) Auto</article>\n</div>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-17"\n>\n  (Default) Auto\n</DBPopover>')},children:"Copy code"})]})]})}),(0,o.jsx)(r.Z,{className:"tab-container",children:(0,o.jsxs)(a.Z,{children:[(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(l.Z,{children:"Angular"}),(0,o.jsx)(l.Z,{children:"HTML"}),(0,o.jsx)(l.Z,{children:"React"}),(0,o.jsx)(l.Z,{children:"Vue"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>'),navigator.clipboard.writeText('<db-popover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</db-popover>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-html",children:'<div\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-18"\n  class="db-popover"\n>\n  <article class="db-popover-content" data-width="fixed">\n    Fixed\n  </article>\n</div>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<div\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-18"\n  class="db-popover"\n>\n  <article class="db-popover-content" data-width="fixed">\n    Fixed\n  </article>\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<div\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-18"\n  class="db-popover"\n>\n  <article class="db-popover-content" data-width="fixed">\n    Fixed\n  </article>\n</div>'),navigator.clipboard.writeText('<div\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  id="popover-18"\n  class="db-popover"\n>\n  <article class="db-popover-content" data-width="fixed">\n    Fixed\n  </article>\n</div>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>')},children:"Copy code"})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("pre",{children:(0,o.jsx)("code",{className:"hljs language-tsx",children:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'})}),(0,o.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>'),navigator.clipboard.writeText('<DBPopover\n  content="Max width, lorem ipsum dolor sit amet, consetetur sadipscing"\n  width="fixed"\n  id="popover-18"\n>\n  Fixed\n</DBPopover>')},children:"Copy code"})]})]})})]})}}},function(e){e.O(0,[92888,49774,40179],function(){return e(e.s=96393)}),_N_E=e.O()}]);