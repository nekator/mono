(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72685],{91660:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-input/radio/code/InteractionStates",function(){return n(3731)}])},10326:function(e,t,n){"use strict";var a=n(52322),i=n(2784),r=n(43251);let l=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t);return(0,a.jsx)("button",{ref:n,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=l},70741:function(e,t,n){"use strict";var a=n(52322),i=n(2784),r=n(43251);let l=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t);return(0,a.jsx)("div",{ref:n,...(0,r.mS)(e,[]),id:e.id,"data-behaviour":e.behaviour,"data-elevation-level":e.elevationLevel,"data-spacing":e.spacing,role:"interactive"===e.behaviour?"button":void 0,tabIndex:"interactive"===e.behaviour?0:void 0,onClick:t=>{e.onClick&&e.onClick(t)},className:(0,r.yI)("db-card",e.className),children:e.children})});t.Z=l},50350:function(e,t,n){"use strict";var a=n(52322),i=n(2784),r=n(43251),l=n(55482);let o=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t),[o,s]=(0,i.useState)(()=>l.IY);return(0,a.jsxs)("a",{ref:n,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-link",e.className),href:e.href,target:e.target,rel:e.rel,role:e.role,hrefLang:e.hreflang,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:t=>{e.onClick&&e.onClick(t)},children:[e.text?(0,a.jsx)("span",{children:e.text}):null,e.children]})});t.Z=o},57284:function(e,t,n){"use strict";var a=n(52322),i=n(2784),r=n(43251);let l=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t),[l,o]=(0,i.useState)(()=>!1),[s,c]=(0,i.useState)(()=>!1);return(0,i.useEffect)(()=>{o(!0)},[]),(0,i.useEffect)(()=>{e.active&&l&&n.current&&(n.current.click(),o(!1))},[n.current,l]),(0,a.jsx)("li",{role:"none",className:(0,r.yI)("db-tab-item",e.className),children:(0,a.jsxs)("label",{htmlFor:e.id,"data-icon":e.icon,"data-icon-after":e.iconAfter,"data-no-text":e.noText,children:[(0,a.jsx)("input",{type:"radio",role:"tab",disabled:e.disabled,"aria-selected":s,"aria-controls":e.controls,checked:e.checked,ref:n,...(0,r.mS)(e,[]),id:e.id,onChange:t=>{var n;e.onChange&&e.onChange(t),e.change&&e.change(t),c(null===(n=t.target)||void 0===n?void 0:n.checked)}}),e.label?(0,a.jsx)(a.Fragment,{children:e.label}):null,e.children]})})});t.Z=l},57884:function(e,t,n){"use strict";var a=n(52322),i=n(2784),r=n(43251),l=n(55482);let o=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t),[o,s]=(0,i.useState)(()=>l.IY);return(0,i.useEffect)(()=>{s(e.id||"tab-list-"+(0,r.Vj)())},[]),(0,a.jsx)("div",{ref:n,...(0,r.mS)(e,[]),id:o,className:(0,r.yI)("db-tab-list",e.className),children:(0,a.jsx)("ul",{role:"tablist",children:e.children})})});t.Z=o},49953:function(e,t,n){"use strict";var a=n(52322),i=n(2784),r=n(43251);let l=(0,i.forwardRef)(function(e,t){let n=t||(0,i.useRef)(t);return(0,i.useEffect)(()=>{},[]),(0,a.jsxs)("section",{role:"tabpanel",ref:n,...(0,r.mS)(e,[]),className:(0,r.yI)("db-tab-panel",e.className),id:e.id,"aria-labelledby":e.labelledBy,children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.children]})});t.Z=l},57092:function(e,t,n){"use strict";var a=n(52322),i=n(2784),r=n(43251),l=n(10326),o=n(57884),s=n(57284),c=n(49953);let d=(0,i.forwardRef)(function(e,t){var n,d,u,b;let h=t||(0,i.useRef)(t),[f,m]=(0,i.useState)(()=>"tabs-"+(0,r.Vj)()),[g,v]=(0,i.useState)(()=>""),[x,p]=(0,i.useState)(()=>!1),[_,R]=(0,i.useState)(()=>!1),[E,N]=(0,i.useState)(()=>!1),[S,j]=(0,i.useState)(()=>null);function A(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}function I(e){let t=e.scrollWidth>e.clientWidth;R(t&&e.scrollLeft>1),N(t&&e.scrollLeft<e.scrollWidth-e.clientWidth)}function L(t){let n=e.arrowScrollDistance||100;t&&(n*=-1),null==S||S.scrollBy({top:0,left:n,behavior:"smooth"})}function y(){if(null==h?void 0:h.current){let t=h.current.querySelector(".db-tab-list");if(t){let n=t.querySelector('[role="tablist"]');n.setAttribute("aria-orientation",e.orientation||"horizontal"),"arrows"===e.behaviour&&(j(n),I(n),n.addEventListener("scroll",()=>{I(n)}))}}}function B(t){if(h.current){let n=h.current.getElementsByClassName("db-tab-item");(null==n?void 0:n.length)>0&&Array.from(n).forEach((n,a)=>{let i=n.querySelector("label"),r=n.querySelector("input");if(r&&i){if(!r.id){let e="".concat(g,"-tab-").concat(a);i.setAttribute("for",e),r.setAttribute("aria-controls","".concat(g,"-tab-panel-").concat(a)),r.id=e,r.setAttribute("name",g)}if(t){let t=!e.initialSelectedMode||"auto"===e.initialSelectedMode,n=(void 0===e.initialSelectedIndex||null===e.initialSelectedIndex)&&0===a||e.initialSelectedIndex===a;t&&n&&r.click()}}});let a=h.current.getElementsByClassName("db-tab-panel");(null==a?void 0:a.length)>0&&Array.from(a).forEach((e,t)=>{e.id||(e.id="".concat(g,"-tab-panel-").concat(t),e.setAttribute("aria-labelledby","".concat(g,"-tab-").concat(t)))})}}return(0,i.useEffect)(()=>{m(e.id||f),v(e.name||(0,r.Vj)()),p(!0)},[]),(0,i.useEffect)(()=>{if(h.current&&x){y(),B(!0);let e=h.current.querySelector(".db-tab-list");e&&new MutationObserver(e=>{e.forEach(e=>{(e.removedNodes.length||e.addedNodes.length)&&(y(),B())})}).observe(e,{childList:!0,subtree:!0}),p(!1)}},[h.current,x]),(0,a.jsxs)("div",{ref:h,...(0,r.mS)(e,[]),id:f,className:(0,r.yI)("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behaviour":e.behaviour,"data-alignment":null!==(u=e.alignment)&&void 0!==u?u:"start","data-width":null!==(b=e.width)&&void 0!==b?b:"auto",children:[_?(0,a.jsx)(l.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:e=>L(!0),children:"Scroll left"}):null,e.tabs?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{children:null===(n=A(e.tabs))||void 0===n?void 0:n.map((t,n)=>(0,a.jsx)(s.Z,{active:t.active,label:t.label,iconAfter:t.iconAfter,icon:t.icon,noText:t.noText},e.name+"tab-item"+n))}),null===(d=A(e.tabs))||void 0===d?void 0:d.map((t,n)=>(0,a.jsx)(c.Z,{content:t.content,children:t.children},e.name+"tab-panel"+n))]}):null,E?(0,a.jsx)(l.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:e=>L(),children:"Scroll right"}):null,e.children]})});t.Z=d},55482:function(e,t,n){"use strict";var a,i,r,l,o,s,c;n.d(t,{IY:function(){return d},YP:function(){return u},ce:function(){return b}});let d="OVERWRITE_DEFAULT_ID",u="Back",b="Close Button";(o=a||(a={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(a).map(e=>{let[,t]=e;return t}),(i||(i={})).PRIMARY="primary",(s=r||(r={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",s.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",s.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",s.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",s.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",s.BRAND_BG_LEVEL_1="brand-bg-lvl-1",s.BRAND_BG_LEVEL_2="brand-bg-lvl-2",s.BRAND_BG_LEVEL_3="brand-bg-lvl-3",s.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",s.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",s.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",s.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",s.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",s.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",s.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",s.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",s.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",s.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",s.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",s.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",s.WARNING_BG_LEVEL_1="warning-bg-lvl-1",s.WARNING_BG_LEVEL_2="warning-bg-lvl-2",s.WARNING_BG_LEVEL_3="warning-bg-lvl-3",s.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",s.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",s.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",s.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",s.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",s.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",s.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(r).map(e=>{let[,t]=e;return t}),Object.entries(i).map(e=>{let[,t]=e;return t}),(c=l||(l={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,t]=e;return t})},43251:function(e,t,n){"use strict";n.d(t,{Lp:function(){return c},Vj:function(){return a},mS:function(){return o},yI:function(){return r},yn:function(){return i}});let a=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&i(e,t)})},r=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let a="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let t in e)e[t]&&(a+="".concat(t," "))}}),a.trim()},l=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],o=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||l.includes(e))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}),s=e=>{var t;let{top:n,bottom:a,left:i,right:r,height:l,width:o}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:c}=window,d=n<0,u=a>s,b=i<0,h=r>c,f=e.hasAttribute("data-outside-vy"),m=e.hasAttribute("data-outside-vx"),g=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return g&&(f&&("top"===e.getAttribute("data-outside-vy")?d=g.top-(a-g.bottom)<0:u=g.bottom+(g.top-n)>s),m&&("left"===e.getAttribute("data-outside-vx")?b=g.left-(r-g.right)<0:h=g.right+(g.left-i)>c)),{outTop:d,outBottom:u,outLeft:b,outRight:h}},c=e=>{let{outTop:t,outBottom:n,outLeft:a,outRight:i}=s(e),r={};return t||n?(r={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",r.vy)):e.removeAttribute("data-outside-vy"),a||i?(r={...r,vx:i?"right":"left"},e.setAttribute("data-outside-vx",r.vx)):e.removeAttribute("data-outside-vx"),r}},3731:function(e,t,n){"use strict";n.r(t);var a=n(52322),i=n(2784),r=n(70741),l=n(57092),o=n(57884),s=n(57284),c=n(49953),d=n(50350),u=n(10326);t.default=()=>{let[e,t]=(0,i.useState)();return(0,i.useEffect)(()=>{e&&setTimeout(()=>t(""),1500)},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{className:"tab-container",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(s.Z,{children:"Angular"}),(0,a.jsx)(s.Z,{children:"HTML"}),(0,a.jsx)(s.Z,{children:"React"}),(0,a.jsx)(s.Z,{children:"Vue"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/radio/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Interaction States"> (Default) Enabled </db-radio>'})}),(0,a.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<db-radio name="Interaction States"> (Default) Enabled </db-radio>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-radio name="Interaction States"> (Default) Enabled </db-radio>'),navigator.clipboard.writeText('<db-radio name="Interaction States"> (Default) Enabled </db-radio>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/radio/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,a.jsx)(u.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{t("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/radio/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Interaction States">(Default) Enabled</DBRadio>'})}),(0,a.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBRadio name="Interaction States">(Default) Enabled</DBRadio>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBRadio name="Interaction States">(Default) Enabled</DBRadio>'),navigator.clipboard.writeText('<DBRadio name="Interaction States">(Default) Enabled</DBRadio>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/radio/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Interaction States">\n(Default) Enabled\n</DBRadio>'})}),(0,a.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBRadio name="Interaction States">\n(Default) Enabled\n</DBRadio>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBRadio name="Interaction States">\n(Default) Enabled\n</DBRadio>'),navigator.clipboard.writeText('<DBRadio name="Interaction States">\n(Default) Enabled\n</DBRadio>')},children:"Copy code"})]})]})}),(0,a.jsx)(r.Z,{className:"tab-container",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(s.Z,{children:"Angular"}),(0,a.jsx)(s.Z,{children:"HTML"}),(0,a.jsx)(s.Z,{children:"React"}),(0,a.jsx)(s.Z,{children:"Vue"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/radio/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-radio name="Interaction States" [disabled]="true"> Disabled </db-radio>'})}),(0,a.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<db-radio name="Interaction States" [disabled]="true"> Disabled </db-radio>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-radio name="Interaction States" [disabled]="true"> Disabled </db-radio>'),navigator.clipboard.writeText('<db-radio name="Interaction States" [disabled]="true"> Disabled </db-radio>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/radio/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"undefined"})}),(0,a.jsx)(u.Z,{className:"copy-button",noText:!0,icon:"undefined"===e?"check":"copy",variant:"ghost",onClick:()=>{t("undefined"),navigator.clipboard.writeText("undefined")},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/radio/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Interaction States" disabled>\n  Disabled\n</DBRadio>'})}),(0,a.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBRadio name="Interaction States" disabled>\n  Disabled\n</DBRadio>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBRadio name="Interaction States" disabled>\n  Disabled\n</DBRadio>'),navigator.clipboard.writeText('<DBRadio name="Interaction States" disabled>\n  Disabled\n</DBRadio>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/radio/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBRadio name="Interaction States" :disabled="true">\nDisabled\n</DBRadio>'})}),(0,a.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBRadio name="Interaction States" :disabled="true">\nDisabled\n</DBRadio>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBRadio name="Interaction States" :disabled="true">\nDisabled\n</DBRadio>'),navigator.clipboard.writeText('<DBRadio name="Interaction States" :disabled="true">\nDisabled\n</DBRadio>')},children:"Copy code"})]})]})})]})}}},function(e){e.O(0,[92888,49774,40179],function(){return e(e.s=91660)}),_N_E=e.O()}]);