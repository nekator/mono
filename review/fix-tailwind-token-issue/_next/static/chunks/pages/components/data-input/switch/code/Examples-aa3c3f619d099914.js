(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68474],{32557:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-input/switch/code/Examples",function(){return n(82385)}])},10326:function(t,e,n){"use strict";var i=n(52322),a=n(2784),s=n(43251);let c=(0,a.forwardRef)(function(t,e){let n=e||(0,a.useRef)(e);return(0,i.jsx)("button",{ref:n,...(0,s.mS)(t,[]),id:t.id,className:(0,s.yI)("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:e=>{t.onClick&&t.onClick(e)},children:t.children})});e.Z=c},70741:function(t,e,n){"use strict";var i=n(52322),a=n(2784),s=n(43251);let c=(0,a.forwardRef)(function(t,e){let n=e||(0,a.useRef)(e);return(0,i.jsx)("div",{ref:n,...(0,s.mS)(t,[]),id:t.id,"data-behaviour":t.behaviour,"data-elevation-level":t.elevationLevel,"data-spacing":t.spacing,role:"interactive"===t.behaviour?"button":void 0,tabIndex:"interactive"===t.behaviour?0:void 0,onClick:e=>{t.onClick&&t.onClick(e)},className:(0,s.yI)("db-card",t.className),children:t.children})});e.Z=c},50350:function(t,e,n){"use strict";var i=n(52322),a=n(2784),s=n(43251),c=n(55482);let o=(0,a.forwardRef)(function(t,e){let n=e||(0,a.useRef)(e),[o,r]=(0,a.useState)(()=>c.IY);return(0,i.jsxs)("a",{ref:n,...(0,s.mS)(t,[]),id:t.id,className:(0,s.yI)("db-link",t.className),href:t.href,target:t.target,rel:t.rel,role:t.role,hrefLang:t.hreflang,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:0,"aria-selected":t.selected,"aria-label":t.label,"aria-current":t.current,"data-size":t.size,"data-variant":t.variant,"data-content":t.content||"internal",onClick:e=>{t.onClick&&t.onClick(e)},children:[t.text?(0,i.jsx)("span",{children:t.text}):null,t.children]})});e.Z=o},57284:function(t,e,n){"use strict";var i=n(52322),a=n(2784),s=n(43251);let c=(0,a.forwardRef)(function(t,e){let n=e||(0,a.useRef)(e),[c,o]=(0,a.useState)(()=>!1),[r,l]=(0,a.useState)(()=>!1);return(0,a.useEffect)(()=>{o(!0)},[]),(0,a.useEffect)(()=>{t.active&&c&&n.current&&(n.current.click(),o(!1))},[n.current,c]),(0,i.jsx)("li",{role:"none",className:(0,s.yI)("db-tab-item",t.className),children:(0,i.jsxs)("label",{htmlFor:t.id,"data-icon":t.icon,"data-icon-after":t.iconAfter,"data-no-text":t.noText,children:[(0,i.jsx)("input",{type:"radio",role:"tab",disabled:t.disabled,"aria-selected":r,"aria-controls":t.controls,checked:t.checked,ref:n,...(0,s.mS)(t,[]),id:t.id,onChange:e=>{var n;t.onChange&&t.onChange(e),t.change&&t.change(e),l(null===(n=e.target)||void 0===n?void 0:n.checked)}}),t.label?(0,i.jsx)(i.Fragment,{children:t.label}):null,t.children]})})});e.Z=c},57884:function(t,e,n){"use strict";var i=n(52322),a=n(2784),s=n(43251),c=n(55482);let o=(0,a.forwardRef)(function(t,e){let n=e||(0,a.useRef)(e),[o,r]=(0,a.useState)(()=>c.IY);return(0,a.useEffect)(()=>{r(t.id||"tab-list-"+(0,s.Vj)())},[]),(0,i.jsx)("div",{ref:n,...(0,s.mS)(t,[]),id:o,className:(0,s.yI)("db-tab-list",t.className),children:(0,i.jsx)("ul",{role:"tablist",children:t.children})})});e.Z=o},49953:function(t,e,n){"use strict";var i=n(52322),a=n(2784),s=n(43251);let c=(0,a.forwardRef)(function(t,e){let n=e||(0,a.useRef)(e);return(0,a.useEffect)(()=>{},[]),(0,i.jsxs)("section",{role:"tabpanel",ref:n,...(0,s.mS)(t,[]),className:(0,s.yI)("db-tab-panel",t.className),id:t.id,"aria-labelledby":t.labelledBy,children:[t.content?(0,i.jsx)(i.Fragment,{children:t.content}):null,t.children]})});e.Z=c},57092:function(t,e,n){"use strict";var i=n(52322),a=n(2784),s=n(43251),c=n(10326),o=n(57884),r=n(57284),l=n(49953);let d=(0,a.forwardRef)(function(t,e){var n,d,u,h;let b=e||(0,a.useRef)(e),[f,m]=(0,a.useState)(()=>"tabs-"+(0,s.Vj)()),[p,_]=(0,a.useState)(()=>""),[g,v]=(0,a.useState)(()=>!1),[E,A]=(0,a.useState)(()=>!1),[w,x]=(0,a.useState)(()=>!1),[I,R]=(0,a.useState)(()=>null);function N(t){try{if("string"==typeof t)return JSON.parse(t);return t}catch(t){console.error(t)}}function S(t){let e=t.scrollWidth>t.clientWidth;A(e&&t.scrollLeft>1),x(e&&t.scrollLeft<t.scrollWidth-t.clientWidth)}function T(e){let n=t.arrowScrollDistance||100;e&&(n*=-1),null==I||I.scrollBy({top:0,left:n,behavior:"smooth"})}function y(){if(null==b?void 0:b.current){let e=b.current.querySelector(".db-tab-list");if(e){let n=e.querySelector('[role="tablist"]');n.setAttribute("aria-orientation",t.orientation||"horizontal"),"arrows"===t.behaviour&&(R(n),S(n),n.addEventListener("scroll",()=>{S(n)}))}}}function L(e){if(b.current){let n=b.current.getElementsByClassName("db-tab-item");(null==n?void 0:n.length)>0&&Array.from(n).forEach((n,i)=>{let a=n.querySelector("label"),s=n.querySelector("input");if(s&&a){if(!s.id){let t="".concat(p,"-tab-").concat(i);a.setAttribute("for",t),s.setAttribute("aria-controls","".concat(p,"-tab-panel-").concat(i)),s.id=t,s.setAttribute("name",p)}if(e){let e=!t.initialSelectedMode||"auto"===t.initialSelectedMode,n=void 0===t.initialSelectedIndex&&0===i||t.initialSelectedIndex===i;e&&n&&s.click()}}});let i=b.current.getElementsByClassName("db-tab-panel");(null==i?void 0:i.length)>0&&Array.from(i).forEach((t,e)=>{t.id||(t.id="".concat(p,"-tab-panel-").concat(e),t.setAttribute("aria-labelledby","".concat(p,"-tab-").concat(e)))})}}return(0,a.useEffect)(()=>{m(t.id||f),_(t.name||(0,s.Vj)()),v(!0)},[]),(0,a.useEffect)(()=>{if(b.current&&g){y(),L(!0);let t=b.current.querySelector(".db-tab-list");t&&new MutationObserver(t=>{t.forEach(t=>{(t.removedNodes.length||t.addedNodes.length)&&(y(),L())})}).observe(t,{childList:!0,subtree:!0}),v(!1)}},[b.current,g]),(0,i.jsxs)("div",{ref:b,...(0,s.mS)(t,[]),id:f,className:(0,s.yI)("db-tabs",t.className),"data-orientation":t.orientation,"data-scroll-behaviour":t.behaviour,"data-alignment":null!==(u=t.alignment)&&void 0!==u?u:"start","data-width":null!==(h=t.width)&&void 0!==h?h:"auto",children:[E?(0,i.jsx)(c.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:t=>T(!0),children:"Scroll left"}):null,t.tabs?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{children:null===(n=N(t.tabs))||void 0===n?void 0:n.map((e,n)=>(0,i.jsx)(r.Z,{active:e.active,label:e.label,iconAfter:e.iconAfter,icon:e.icon,noText:e.noText},t.name+"tab-item"+n))}),null===(d=N(t.tabs))||void 0===d?void 0:d.map((e,n)=>(0,i.jsx)(l.Z,{content:e.content,children:e.children},t.name+"tab-panel"+n))]}):null,w?(0,i.jsx)(c.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:t=>T(),children:"Scroll right"}):null,t.children]})});e.Z=d},55482:function(t,e,n){"use strict";var i,a,s,c,o,r,l;n.d(e,{IY:function(){return d},YP:function(){return u},ce:function(){return h}});let d="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(o=i||(i={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(i).map(t=>{let[,e]=t;return e}),(a||(a={})).PRIMARY="primary",(r=s||(s={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",r.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",r.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",r.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",r.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",r.BRAND_BG_LEVEL_1="brand-bg-lvl-1",r.BRAND_BG_LEVEL_2="brand-bg-lvl-2",r.BRAND_BG_LEVEL_3="brand-bg-lvl-3",r.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",r.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",r.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",r.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",r.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",r.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",r.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",r.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",r.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",r.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",r.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",r.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",r.WARNING_BG_LEVEL_1="warning-bg-lvl-1",r.WARNING_BG_LEVEL_2="warning-bg-lvl-2",r.WARNING_BG_LEVEL_3="warning-bg-lvl-3",r.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",r.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",r.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",r.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",r.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",r.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",r.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(s).map(t=>{let[,e]=t;return e}),Object.entries(a).map(t=>{let[,e]=t;return e}),(l=c||(c={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(c).map(t=>{let[,e]=t;return e})},43251:function(t,e,n){"use strict";n.d(e,{Lp:function(){return l},Vj:function(){return i},mS:function(){return o},yI:function(){return s},yn:function(){return a}});let i=()=>{var t,e;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(t,e)=>{Object.values(t.children).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&a(t,e)})},s=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];let i="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)i+="".concat(t," ");else for(let e in t)t[e]&&(i+="".concat(e," "))}}),i.trim()},c=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],o=(t,e)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||c.includes(t))&&!e.includes(t)).reduce((e,n)=>(e[n]=t[n],e),{}),r=t=>{var e;let{top:n,bottom:i,left:a,right:s,height:c,width:o}=t.getBoundingClientRect(),{innerHeight:r,innerWidth:l}=window,d=n<0,u=i>r,h=a<0,b=s>l,f=t.hasAttribute("data-outside-vy"),m=t.hasAttribute("data-outside-vx"),p=null==t?void 0:null===(e=t.parentElement)||void 0===e?void 0:e.getBoundingClientRect();return p&&(f&&("top"===t.getAttribute("data-outside-vy")?d=p.top-(i-p.bottom)<0:u=p.bottom+(p.top-n)>r),m&&("left"===t.getAttribute("data-outside-vx")?h=p.left-(s-p.right)<0:b=p.right+(p.left-a)>l)),{outTop:d,outBottom:u,outLeft:h,outRight:b}},l=t=>{let{outTop:e,outBottom:n,outLeft:i,outRight:a}=r(t),s={};return e||n?(s={vy:e?"top":"bottom"},t.setAttribute("data-outside-vy",s.vy)):t.removeAttribute("data-outside-vy"),i||a?(s={...s,vx:a?"right":"left"},t.setAttribute("data-outside-vx",s.vx)):t.removeAttribute("data-outside-vx"),s}},82385:function(t,e,n){"use strict";n.r(e);var i=n(52322),a=n(2784),s=n(70741),c=n(57092),o=n(57884),r=n(57284),l=n(49953),d=n(50350),u=n(10326);e.default=()=>{let[t,e]=(0,a.useState)();return(0,a.useEffect)(()=>{t&&setTimeout(()=>e(""),1500)},[t]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{className:"tab-container",children:(0,i.jsxs)(c.Z,{children:[(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/switch/how-to-use?current=angular",children:"How to use this in angular"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-switch [visualAid]="true" icon="night" iconAfter="day">Custom Icons</db-switch>'})}),(0,i.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<db-switch [visualAid]="true" icon="night" iconAfter="day">Custom Icons</db-switch>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<db-switch [visualAid]="true" icon="night" iconAfter="day">Custom Icons</db-switch>'),navigator.clipboard.writeText('<db-switch [visualAid]="true" icon="night" iconAfter="day">Custom Icons</db-switch>')},children:"Copy code"})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/switch/how-to-use?current=html",children:"How to use this in html"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label data-visual-aid="true" for="OVERWRITE_DEFAULT_ID" class="db-switch">\n  <input\n    type="checkbox"\n    role="switch"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-invalid="false"\n    data-aid-icon="night"\n    data-aid-icon-after="day"\n  />\n  Custom Icons\n</label>'})}),(0,i.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<label data-visual-aid="true" for="OVERWRITE_DEFAULT_ID" class="db-switch">\n  <input\n    type="checkbox"\n    role="switch"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-invalid="false"\n    data-aid-icon="night"\n    data-aid-icon-after="day"\n  />\n  Custom Icons\n</label>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<label data-visual-aid="true" for="OVERWRITE_DEFAULT_ID" class="db-switch">\n  <input\n    type="checkbox"\n    role="switch"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-invalid="false"\n    data-aid-icon="night"\n    data-aid-icon-after="day"\n  />\n  Custom Icons\n</label>'),navigator.clipboard.writeText('<label data-visual-aid="true" for="OVERWRITE_DEFAULT_ID" class="db-switch">\n  <input\n    type="checkbox"\n    role="switch"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-invalid="false"\n    data-aid-icon="night"\n    data-aid-icon-after="day"\n  />\n  Custom Icons\n</label>')},children:"Copy code"})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/switch/how-to-use?current=react",children:"How to use this in react"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBSwitch visualAid icon="night" iconAfter="day">\n  Custom Icons\n</DBSwitch>'})}),(0,i.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBSwitch visualAid icon="night" iconAfter="day">\n  Custom Icons\n</DBSwitch>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBSwitch visualAid icon="night" iconAfter="day">\n  Custom Icons\n</DBSwitch>'),navigator.clipboard.writeText('<DBSwitch visualAid icon="night" iconAfter="day">\n  Custom Icons\n</DBSwitch>')},children:"Copy code"})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/switch/how-to-use?current=vue",children:"How to use this in vue"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBSwitch :visualAid="true" icon="night" iconAfter="day">Custom Icons</DBSwitch>'})}),(0,i.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBSwitch :visualAid="true" icon="night" iconAfter="day">Custom Icons</DBSwitch>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBSwitch :visualAid="true" icon="night" iconAfter="day">Custom Icons</DBSwitch>'),navigator.clipboard.writeText('<DBSwitch :visualAid="true" icon="night" iconAfter="day">Custom Icons</DBSwitch>')},children:"Copy code"})]})]})}),(0,i.jsx)(s.Z,{className:"tab-container",children:(0,i.jsxs)(c.Z,{children:[(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(r.Z,{children:"Angular"}),(0,i.jsx)(r.Z,{children:"HTML"}),(0,i.jsx)(r.Z,{children:"React"}),(0,i.jsx)(r.Z,{children:"Vue"})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/switch/how-to-use?current=angular",children:"How to use this in angular"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<db-switch [visualAid]="true" icon="lock_closed" iconAfter="lock_open" emphasis="strong">Custom Icons+ Emphasis</db-switch>'})}),(0,i.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<db-switch [visualAid]="true" icon="lock_closed" iconAfter="lock_open" emphasis="strong">Custom Icons+ Emphasis</db-switch>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<db-switch [visualAid]="true" icon="lock_closed" iconAfter="lock_open" emphasis="strong">Custom Icons+ Emphasis</db-switch>'),navigator.clipboard.writeText('<db-switch [visualAid]="true" icon="lock_closed" iconAfter="lock_open" emphasis="strong">Custom Icons+ Emphasis</db-switch>')},children:"Copy code"})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/switch/how-to-use?current=html",children:"How to use this in html"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-html",children:'<label\n  data-visual-aid="true"\n  data-emphasis="strong"\n  for="OVERWRITE_DEFAULT_ID"\n  class="db-switch"\n>\n  <input\n    type="checkbox"\n    role="switch"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-invalid="false"\n    data-aid-icon="lock_closed"\n    data-aid-icon-after="lock_open"\n  />\n  Custom Icons+ Emphasis\n</label>'})}),(0,i.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<label\n  data-visual-aid="true"\n  data-emphasis="strong"\n  for="OVERWRITE_DEFAULT_ID"\n  class="db-switch"\n>\n  <input\n    type="checkbox"\n    role="switch"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-invalid="false"\n    data-aid-icon="lock_closed"\n    data-aid-icon-after="lock_open"\n  />\n  Custom Icons+ Emphasis\n</label>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<label\n  data-visual-aid="true"\n  data-emphasis="strong"\n  for="OVERWRITE_DEFAULT_ID"\n  class="db-switch"\n>\n  <input\n    type="checkbox"\n    role="switch"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-invalid="false"\n    data-aid-icon="lock_closed"\n    data-aid-icon-after="lock_open"\n  />\n  Custom Icons+ Emphasis\n</label>'),navigator.clipboard.writeText('<label\n  data-visual-aid="true"\n  data-emphasis="strong"\n  for="OVERWRITE_DEFAULT_ID"\n  class="db-switch"\n>\n  <input\n    type="checkbox"\n    role="switch"\n    id="OVERWRITE_DEFAULT_ID"\n    aria-invalid="false"\n    data-aid-icon="lock_closed"\n    data-aid-icon-after="lock_open"\n  />\n  Custom Icons+ Emphasis\n</label>')},children:"Copy code"})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/switch/how-to-use?current=react",children:"How to use this in react"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBSwitch visualAid icon="lock_closed" iconAfter="lock_open" emphasis="strong">\n  Custom Icons+ Emphasis\n</DBSwitch>'})}),(0,i.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBSwitch visualAid icon="lock_closed" iconAfter="lock_open" emphasis="strong">\n  Custom Icons+ Emphasis\n</DBSwitch>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBSwitch visualAid icon="lock_closed" iconAfter="lock_open" emphasis="strong">\n  Custom Icons+ Emphasis\n</DBSwitch>'),navigator.clipboard.writeText('<DBSwitch visualAid icon="lock_closed" iconAfter="lock_open" emphasis="strong">\n  Custom Icons+ Emphasis\n</DBSwitch>')},children:"Copy code"})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/switch/how-to-use?current=vue",children:"How to use this in vue"}),(0,i.jsx)("pre",{children:(0,i.jsx)("code",{className:"hljs language-tsx",children:'<DBSwitch :visualAid="true" icon="lock_closed" iconAfter="lock_open" emphasis="strong">Custom Icons+ Emphasis</DBSwitch>'})}),(0,i.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBSwitch :visualAid="true" icon="lock_closed" iconAfter="lock_open" emphasis="strong">Custom Icons+ Emphasis</DBSwitch>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBSwitch :visualAid="true" icon="lock_closed" iconAfter="lock_open" emphasis="strong">Custom Icons+ Emphasis</DBSwitch>'),navigator.clipboard.writeText('<DBSwitch :visualAid="true" icon="lock_closed" iconAfter="lock_open" emphasis="strong">Custom Icons+ Emphasis</DBSwitch>')},children:"Copy code"})]})]})})]})}}},function(t){t.O(0,[92888,49774,40179],function(){return t(t.s=32557)}),_N_E=t.O()}]);