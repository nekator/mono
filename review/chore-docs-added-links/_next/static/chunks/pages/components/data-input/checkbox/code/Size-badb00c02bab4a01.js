(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56614],{54571:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-input/checkbox/code/Size",function(){return a(82982)}])},10326:function(e,n,a){"use strict";var t=a(52322),i=a(2784),l=a(43251);let s=(0,i.forwardRef)(function(e,n){let a=n||(0,i.useRef)(n);return(0,t.jsx)("button",{ref:a,...(0,l.mS)(e,[]),id:e.id,className:(0,l.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=s},70741:function(e,n,a){"use strict";var t=a(52322),i=a(2784),l=a(43251);let s=(0,i.forwardRef)(function(e,n){let a=n||(0,i.useRef)(n);return(0,t.jsx)("div",{ref:a,...(0,l.mS)(e,[]),id:e.id,"data-behaviour":e.behaviour,"data-elevation-level":e.elevationLevel,"data-spacing":e.spacing,role:"interactive"===e.behaviour?"button":void 0,tabIndex:"interactive"===e.behaviour?0:void 0,onClick:n=>{e.onClick&&e.onClick(n)},className:(0,l.yI)("db-card",e.className),children:e.children})});n.Z=s},57284:function(e,n,a){"use strict";var t=a(52322),i=a(2784),l=a(43251);let s=(0,i.forwardRef)(function(e,n){let a=n||(0,i.useRef)(n),[s,c]=(0,i.useState)(()=>!1),[r,d]=(0,i.useState)(()=>!1);return(0,i.useEffect)(()=>{c(!0)},[]),(0,i.useEffect)(()=>{e.active&&s&&a.current&&(a.current.click(),c(!1))},[a.current,s]),(0,t.jsx)("li",{role:"none",className:(0,l.yI)("db-tab-item",e.className),children:(0,t.jsxs)("label",{htmlFor:e.id,"data-icon":e.icon,"data-icon-after":e.iconAfter,"data-no-text":e.noText,children:[(0,t.jsx)("input",{type:"radio",role:"tab",disabled:e.disabled,"aria-selected":r,"aria-controls":e.controls,checked:e.checked,ref:a,...(0,l.mS)(e,[]),id:e.id,onChange:n=>{var a;e.onChange&&e.onChange(n),e.change&&e.change(n),d(null===(a=n.target)||void 0===a?void 0:a.checked)}}),e.label?(0,t.jsx)(t.Fragment,{children:e.label}):null,e.children]})})});n.Z=s},57884:function(e,n,a){"use strict";var t=a(52322),i=a(2784),l=a(43251),s=a(55482);let c=(0,i.forwardRef)(function(e,n){let a=n||(0,i.useRef)(n),[c,r]=(0,i.useState)(()=>s.IY);return(0,i.useEffect)(()=>{r(e.id||"tab-list-"+(0,l.Vj)())},[]),(0,t.jsx)("div",{ref:a,...(0,l.mS)(e,[]),id:c,className:(0,l.yI)("db-tab-list",e.className),children:(0,t.jsx)("ul",{role:"tablist",children:e.children})})});n.Z=c},49953:function(e,n,a){"use strict";var t=a(52322),i=a(2784),l=a(43251);let s=(0,i.forwardRef)(function(e,n){let a=n||(0,i.useRef)(n);return(0,i.useEffect)(()=>{},[]),(0,t.jsxs)("section",{role:"tabpanel",ref:a,...(0,l.mS)(e,[]),className:(0,l.yI)("db-tab-panel",e.className),id:e.id,"aria-labelledby":e.labelledBy,children:[e.content?(0,t.jsx)(t.Fragment,{children:e.content}):null,e.children]})});n.Z=s},57092:function(e,n,a){"use strict";var t=a(52322),i=a(2784),l=a(43251),s=a(10326),c=a(57884),r=a(57284),d=a(49953);let o=(0,i.forwardRef)(function(e,n){var a,o,u,b;let h=n||(0,i.useRef)(n),[m,E]=(0,i.useState)(()=>"tabs-"+(0,l.Vj)()),[f,x]=(0,i.useState)(()=>""),[v,_]=(0,i.useState)(()=>!1),[p,T]=(0,i.useState)(()=>!1),[g,R]=(0,i.useState)(()=>!1),[D,A]=(0,i.useState)(()=>null);function I(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}function S(e){let n=e.scrollWidth>e.clientWidth;T(n&&e.scrollLeft>1),R(n&&e.scrollLeft<e.scrollWidth-e.clientWidth)}function L(n){let a=e.arrowScrollDistance||100;n&&(a*=-1),null==D||D.scrollBy({top:0,left:a,behavior:"smooth"})}function k(){if(null==h?void 0:h.current){let n=h.current.querySelector(".db-tab-list");if(n){let a=n.querySelector('[role="tablist"]');a.setAttribute("aria-orientation",e.orientation||"horizontal"),"arrows"===e.behaviour&&(A(a),S(a),a.addEventListener("scroll",()=>{S(a)}))}}}function N(n){if(h.current){let a=h.current.getElementsByClassName("db-tab-item");(null==a?void 0:a.length)>0&&Array.from(a).forEach((a,t)=>{let i=a.querySelector("label"),l=a.querySelector("input");if(l&&i){if(!l.id){let e="".concat(f,"-tab-").concat(t);i.setAttribute("for",e),l.setAttribute("aria-controls","".concat(f,"-tab-panel-").concat(t)),l.id=e,l.setAttribute("name",f)}if(n){let n=!e.initialSelectedMode||"auto"===e.initialSelectedMode,a=void 0===e.initialSelectedIndex&&0===t||e.initialSelectedIndex===t;n&&a&&l.click()}}});let t=h.current.getElementsByClassName("db-tab-panel");(null==t?void 0:t.length)>0&&Array.from(t).forEach((e,n)=>{e.id||(e.id="".concat(f,"-tab-panel-").concat(n),e.setAttribute("aria-labelledby","".concat(f,"-tab-").concat(n)))})}}return(0,i.useEffect)(()=>{E(e.id||m),x(e.name||(0,l.Vj)()),_(!0)},[]),(0,i.useEffect)(()=>{if(h.current&&v){k(),N(!0);let e=h.current.querySelector(".db-tab-list");e&&new MutationObserver(e=>{e.forEach(e=>{(e.removedNodes.length||e.addedNodes.length)&&(k(),N())})}).observe(e,{childList:!0,subtree:!0}),_(!1)}},[h.current,v]),(0,t.jsxs)("div",{ref:h,...(0,l.mS)(e,[]),id:m,className:(0,l.yI)("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behaviour":e.behaviour,"data-alignment":null!==(u=e.alignment)&&void 0!==u?u:"start","data-width":null!==(b=e.width)&&void 0!==b?b:"auto",children:[p?(0,t.jsx)(s.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:e=>L(!0),children:"Scroll left"}):null,e.tabs?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{children:null===(a=I(e.tabs))||void 0===a?void 0:a.map((n,a)=>(0,t.jsx)(r.Z,{active:n.active,label:n.label,iconAfter:n.iconAfter,icon:n.icon,noText:n.noText},e.name+"tab-item"+a))}),null===(o=I(e.tabs))||void 0===o?void 0:o.map((n,a)=>(0,t.jsx)(d.Z,{content:n.content,children:n.children},e.name+"tab-panel"+a))]}):null,g?(0,t.jsx)(s.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:e=>L(),children:"Scroll right"}):null,e.children]})});n.Z=o},55482:function(e,n,a){"use strict";var t,i,l,s,c,r,d;a.d(n,{IY:function(){return o},YP:function(){return u},ce:function(){return b}});let o="OVERWRITE_DEFAULT_ID",u="Back",b="Close Button";(c=t||(t={})).FUNCTIONAL="functional",c.REGULAR="regular",c.EXPRESSIVE="expressive",Object.entries(t).map(e=>{let[,n]=e;return n}),(i||(i={})).PRIMARY="primary",(r=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",r.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",r.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",r.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",r.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",r.BRAND_BG_LEVEL_1="brand-bg-lvl-1",r.BRAND_BG_LEVEL_2="brand-bg-lvl-2",r.BRAND_BG_LEVEL_3="brand-bg-lvl-3",r.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",r.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",r.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",r.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",r.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",r.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",r.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",r.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",r.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",r.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",r.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",r.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",r.WARNING_BG_LEVEL_1="warning-bg-lvl-1",r.WARNING_BG_LEVEL_2="warning-bg-lvl-2",r.WARNING_BG_LEVEL_3="warning-bg-lvl-3",r.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",r.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",r.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",r.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",r.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",r.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",r.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(e=>{let[,n]=e;return n}),Object.entries(i).map(e=>{let[,n]=e;return n}),(d=s||(s={})).CRITICAL="critical",d.INFORMATIONAL="informational",d.WARNING="warning",d.SUCCESSFUL="successful",Object.entries(s).map(e=>{let[,n]=e;return n})},43251:function(e,n,a){"use strict";a.d(n,{Lp:function(){return d},Vj:function(){return t},mS:function(){return c},yI:function(){return l},yn:function(){return i}});let t=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&i(e,n)})},l=function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];let t="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)t+="".concat(e," ");else for(let n in e)e[n]&&(t+="".concat(n," "))}}),t.trim()},s=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],c=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||s.includes(e))&&!n.includes(e)).reduce((n,a)=>(n[a]=e[a],n),{}),r=e=>{var n;let{top:a,bottom:t,left:i,right:l,height:s,width:c}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:d}=window,o=a<0,u=t>r,b=i<0,h=l>d,m=e.hasAttribute("data-outside-vy"),E=e.hasAttribute("data-outside-vx"),f=null==e?void 0:null===(n=e.parentElement)||void 0===n?void 0:n.getBoundingClientRect();return f&&(m&&("top"===e.getAttribute("data-outside-vy")?o=f.top-(t-f.bottom)<0:u=f.bottom+(f.top-a)>r),E&&("left"===e.getAttribute("data-outside-vx")?b=f.left-(l-f.right)<0:h=f.right+(f.left-i)>d)),{outTop:o,outBottom:u,outLeft:b,outRight:h}},d=e=>{let{outTop:n,outBottom:a,outLeft:t,outRight:i}=r(e),l={};return n||a?(l={vy:n?"top":"bottom"},e.setAttribute("data-outside-vy",l.vy)):e.removeAttribute("data-outside-vy"),t||i?(l={...l,vx:i?"right":"left"},e.setAttribute("data-outside-vx",l.vx)):e.removeAttribute("data-outside-vx"),l}},82982:function(e,n,a){"use strict";a.r(n);var t=a(52322),i=a(2784),l=a(70741),s=a(57092),c=a(57884),r=a(57284),d=a(49953),o=a(10326);n.default=()=>{let[e,n]=(0,i.useState)();return(0,i.useEffect)(()=>{e&&setTimeout(()=>n(""),1500)},[e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{className:"tab-container",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(r.Z,{children:"Angular"}),(0,t.jsx)(r.Z,{children:"HTML"}),(0,t.jsx)(r.Z,{children:"React"}),(0,t.jsx)(r.Z,{children:"Vue"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<db-checkbox name="Size">(Default) Medium</db-checkbox>'})}),(0,t.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-checkbox name="Size">(Default) Medium</db-checkbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<db-checkbox name="Size">(Default) Medium</db-checkbox>'),navigator.clipboard.writeText('<db-checkbox name="Size">(Default) Medium</db-checkbox>')},children:"Copy code"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<div class="db-checkbox">\n  <label for="OVERWRITE_DEFAULT_ID">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="OVERWRITE_DEFAULT_ID"\n      name="Size"\n      aria-describedby=""\n    />\n    (Default) Medium\n  </label>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'})}),(0,t.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<div class="db-checkbox">\n  <label for="OVERWRITE_DEFAULT_ID">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="OVERWRITE_DEFAULT_ID"\n      name="Size"\n      aria-describedby=""\n    />\n    (Default) Medium\n  </label>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<div class="db-checkbox">\n  <label for="OVERWRITE_DEFAULT_ID">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="OVERWRITE_DEFAULT_ID"\n      name="Size"\n      aria-describedby=""\n    />\n    (Default) Medium\n  </label>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'),navigator.clipboard.writeText('<div class="db-checkbox">\n  <label for="OVERWRITE_DEFAULT_ID">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="OVERWRITE_DEFAULT_ID"\n      name="Size"\n      aria-describedby=""\n    />\n    (Default) Medium\n  </label>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>')},children:"Copy code"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'})}),(0,t.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Size">(Default) Medium</DBCheckbox>')},children:"Copy code"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'})}),(0,t.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<DBCheckbox name="Size">(Default) Medium</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Size">(Default) Medium</DBCheckbox>')},children:"Copy code"})]})]})}),(0,t.jsx)(l.Z,{className:"tab-container",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(r.Z,{children:"Angular"}),(0,t.jsx)(r.Z,{children:"HTML"}),(0,t.jsx)(r.Z,{children:"React"}),(0,t.jsx)(r.Z,{children:"Vue"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<db-checkbox name="Size" size="small">\n  Small\n</db-checkbox>'})}),(0,t.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<db-checkbox name="Size" size="small">\n  Small\n</db-checkbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<db-checkbox name="Size" size="small">\n  Small\n</db-checkbox>'),navigator.clipboard.writeText('<db-checkbox name="Size" size="small">\n  Small\n</db-checkbox>')},children:"Copy code"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-html",children:'<div data-size="small" class="db-checkbox">\n  <label for="OVERWRITE_DEFAULT_ID">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="OVERWRITE_DEFAULT_ID"\n      name="Size"\n      aria-describedby=""\n    />\n    Small\n  </label>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'})}),(0,t.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<div data-size="small" class="db-checkbox">\n  <label for="OVERWRITE_DEFAULT_ID">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="OVERWRITE_DEFAULT_ID"\n      name="Size"\n      aria-describedby=""\n    />\n    Small\n  </label>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<div data-size="small" class="db-checkbox">\n  <label for="OVERWRITE_DEFAULT_ID">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="OVERWRITE_DEFAULT_ID"\n      name="Size"\n      aria-describedby=""\n    />\n    Small\n  </label>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>'),navigator.clipboard.writeText('<div data-size="small" class="db-checkbox">\n  <label for="OVERWRITE_DEFAULT_ID">\n    <input\n      type="checkbox"\n      aria-invalid="false"\n      id="OVERWRITE_DEFAULT_ID"\n      name="Size"\n      aria-describedby=""\n    />\n    Small\n  </label>\n  <span\n    id="OVERWRITE_DEFAULT_ID-valid-message"\n    class="db-infotext"\n    data-semantic="successful"\n    data-size="small"\n  >\n    TODO: Add a validMessage\n  </span>\n  <span\n    id="OVERWRITE_DEFAULT_ID-invalid-message"\n    class="db-infotext"\n    data-semantic="critical"\n    data-size="small"\n  >\n    TODO: Add an invalidMessage\n  </span>\n</div>')},children:"Copy code"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'})}),(0,t.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>')},children:"Copy code"})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"hljs language-tsx",children:'<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'})}),(0,t.jsx)(o.Z,{className:"copy-button",noText:!0,icon:'<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'===e?"check":"copy",variant:"ghost",onClick:()=>{n('<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>'),navigator.clipboard.writeText('<DBCheckbox name="Size" size="small">\n  Small\n</DBCheckbox>')},children:"Copy code"})]})]})})]})}}},function(e){e.O(0,[92888,49774,40179],function(){return e(e.s=54571)}),_N_E=e.O()}]);