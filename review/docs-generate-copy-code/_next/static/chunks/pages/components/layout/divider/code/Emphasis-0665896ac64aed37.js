(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4257],{91302:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/divider/code/Emphasis",function(){return i(94759)}])},10326:function(e,t,i){"use strict";var n=i(52322),r=i(2784),a=i(43251);let l=(0,r.forwardRef)(function(e,t){let i=t||(0,r.useRef)(t);return(0,n.jsx)("button",{ref:i,...(0,a.mS)(e,[]),id:e.id,className:(0,a.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=l},70741:function(e,t,i){"use strict";var n=i(52322),r=i(2784),a=i(43251);let l=(0,r.forwardRef)(function(e,t){let i=t||(0,r.useRef)(t);return(0,n.jsx)("div",{ref:i,...(0,a.mS)(e,[]),id:e.id,"data-behaviour":e.behaviour,"data-elevation-level":e.elevationLevel,"data-spacing":e.spacing,role:"interactive"===e.behaviour?"button":void 0,tabIndex:"interactive"===e.behaviour?0:void 0,onClick:t=>{e.onClick&&e.onClick(t)},className:(0,a.yI)("db-card",e.className),children:e.children})});t.Z=l},50350:function(e,t,i){"use strict";var n=i(52322),r=i(2784),a=i(43251),l=i(55482);let s=(0,r.forwardRef)(function(e,t){let i=t||(0,r.useRef)(t),[s,o]=(0,r.useState)(()=>l.IY);return(0,n.jsxs)("a",{ref:i,...(0,a.mS)(e,[]),id:e.id,className:(0,a.yI)("db-link",e.className),href:e.href,target:e.target,rel:e.rel,role:e.role,hrefLang:e.hreflang,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:t=>{e.onClick&&e.onClick(t)},children:[e.text?(0,n.jsx)("span",{children:e.text}):null,e.children]})});t.Z=s},57284:function(e,t,i){"use strict";var n=i(52322),r=i(2784),a=i(43251);let l=(0,r.forwardRef)(function(e,t){let i=t||(0,r.useRef)(t),[l,s]=(0,r.useState)(()=>!1),[o,c]=(0,r.useState)(()=>!1);return(0,r.useEffect)(()=>{s(!0)},[]),(0,r.useEffect)(()=>{e.active&&l&&i.current&&(i.current.click(),s(!1))},[i.current,l]),(0,n.jsx)("li",{role:"none",className:(0,a.yI)("db-tab-item",e.className),children:(0,n.jsxs)("label",{htmlFor:e.id,"data-icon":e.icon,"data-icon-after":e.iconAfter,"data-no-text":e.noText,children:[(0,n.jsx)("input",{type:"radio",role:"tab",disabled:e.disabled,"aria-selected":o,"aria-controls":e.controls,checked:e.checked,ref:i,...(0,a.mS)(e,[]),id:e.id,onChange:t=>{var i;e.onChange&&e.onChange(t),e.change&&e.change(t),c(null===(i=t.target)||void 0===i?void 0:i.checked)}}),e.label?(0,n.jsx)(n.Fragment,{children:e.label}):null,e.children]})})});t.Z=l},57884:function(e,t,i){"use strict";var n=i(52322),r=i(2784),a=i(43251),l=i(55482);let s=(0,r.forwardRef)(function(e,t){let i=t||(0,r.useRef)(t),[s,o]=(0,r.useState)(()=>l.IY);return(0,r.useEffect)(()=>{o(e.id||"tab-list-"+(0,a.Vj)())},[]),(0,n.jsx)("div",{ref:i,...(0,a.mS)(e,[]),id:s,className:(0,a.yI)("db-tab-list",e.className),children:(0,n.jsx)("ul",{role:"tablist",children:e.children})})});t.Z=s},49953:function(e,t,i){"use strict";var n=i(52322),r=i(2784),a=i(43251);let l=(0,r.forwardRef)(function(e,t){let i=t||(0,r.useRef)(t);return(0,r.useEffect)(()=>{},[]),(0,n.jsxs)("section",{role:"tabpanel",ref:i,...(0,a.mS)(e,[]),className:(0,a.yI)("db-tab-panel",e.className),id:e.id,"aria-labelledby":e.labelledBy,children:[e.content?(0,n.jsx)(n.Fragment,{children:e.content}):null,e.children]})});t.Z=l},57092:function(e,t,i){"use strict";var n=i(52322),r=i(2784),a=i(43251),l=i(10326),s=i(57884),o=i(57284),c=i(49953);let d=(0,r.forwardRef)(function(e,t){var i,d,u,h;let v=t||(0,r.useRef)(t),[b,g]=(0,r.useState)(()=>"tabs-"+(0,a.Vj)()),[f,m]=(0,r.useState)(()=>""),[p,x]=(0,r.useState)(()=>!1),[_,N]=(0,r.useState)(()=>!1),[E,j]=(0,r.useState)(()=>!1),[A,L]=(0,r.useState)(()=>null);function R(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}function y(e){let t=e.scrollWidth>e.clientWidth;N(t&&e.scrollLeft>1),j(t&&e.scrollLeft<e.scrollWidth-e.clientWidth)}function B(t){let i=e.arrowScrollDistance||100;t&&(i*=-1),null==A||A.scrollBy({top:0,left:i,behavior:"smooth"})}function D(){if(null==v?void 0:v.current){let t=v.current.querySelector(".db-tab-list");if(t){let i=t.querySelector('[role="tablist"]');i.setAttribute("aria-orientation",e.orientation||"horizontal"),"arrows"===e.behaviour&&(L(i),y(i),i.addEventListener("scroll",()=>{y(i)}))}}}function S(t){if(v.current){let i=v.current.getElementsByClassName("db-tab-item");(null==i?void 0:i.length)>0&&Array.from(i).forEach((i,n)=>{let r=i.querySelector("label"),a=i.querySelector("input");if(a&&r){if(!a.id){let e="".concat(f,"-tab-").concat(n);r.setAttribute("for",e),a.setAttribute("aria-controls","".concat(f,"-tab-panel-").concat(n)),a.id=e,a.setAttribute("name",f)}if(t){let t=!e.initialSelectedMode||"auto"===e.initialSelectedMode,i=(void 0===e.initialSelectedIndex||null===e.initialSelectedIndex)&&0===n||e.initialSelectedIndex===n;t&&i&&a.click()}}});let n=v.current.getElementsByClassName("db-tab-panel");(null==n?void 0:n.length)>0&&Array.from(n).forEach((e,t)=>{e.id||(e.id="".concat(f,"-tab-panel-").concat(t),e.setAttribute("aria-labelledby","".concat(f,"-tab-").concat(t)))})}}return(0,r.useEffect)(()=>{g(e.id||b),m(e.name||(0,a.Vj)()),x(!0)},[]),(0,r.useEffect)(()=>{if(v.current&&p){D(),S(!0);let e=v.current.querySelector(".db-tab-list");e&&new MutationObserver(e=>{e.forEach(e=>{(e.removedNodes.length||e.addedNodes.length)&&(D(),S())})}).observe(e,{childList:!0,subtree:!0}),x(!1)}},[v.current,p]),(0,n.jsxs)("div",{ref:v,...(0,a.mS)(e,[]),id:b,className:(0,a.yI)("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behaviour":e.behaviour,"data-alignment":null!==(u=e.alignment)&&void 0!==u?u:"start","data-width":null!==(h=e.width)&&void 0!==h?h:"auto",children:[_?(0,n.jsx)(l.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:e=>B(!0),children:"Scroll left"}):null,e.tabs?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{children:null===(i=R(e.tabs))||void 0===i?void 0:i.map((t,i)=>(0,n.jsx)(o.Z,{active:t.active,label:t.label,iconAfter:t.iconAfter,icon:t.icon,noText:t.noText},e.name+"tab-item"+i))}),null===(d=R(e.tabs))||void 0===d?void 0:d.map((t,i)=>(0,n.jsx)(c.Z,{content:t.content,children:t.children},e.name+"tab-panel"+i))]}):null,E?(0,n.jsx)(l.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:e=>B(),children:"Scroll right"}):null,e.children]})});t.Z=d},55482:function(e,t,i){"use strict";var n,r,a,l,s,o,c;i.d(t,{IY:function(){return d},YP:function(){return u},ce:function(){return h}});let d="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(s=n||(n={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(n).map(e=>{let[,t]=e;return t}),(r||(r={})).PRIMARY="primary",(o=a||(a={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",o.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",o.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",o.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",o.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",o.BRAND_BG_LEVEL_1="brand-bg-lvl-1",o.BRAND_BG_LEVEL_2="brand-bg-lvl-2",o.BRAND_BG_LEVEL_3="brand-bg-lvl-3",o.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",o.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",o.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",o.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",o.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",o.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",o.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",o.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",o.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",o.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",o.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",o.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",o.WARNING_BG_LEVEL_1="warning-bg-lvl-1",o.WARNING_BG_LEVEL_2="warning-bg-lvl-2",o.WARNING_BG_LEVEL_3="warning-bg-lvl-3",o.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",o.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",o.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",o.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",o.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",o.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",o.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(a).map(e=>{let[,t]=e;return t}),Object.entries(r).map(e=>{let[,t]=e;return t}),(c=l||(l={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,t]=e;return t})},43251:function(e,t,i){"use strict";i.d(t,{Lp:function(){return c},Vj:function(){return n},mS:function(){return s},yI:function(){return a},yn:function(){return r}});let n=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&r(e,t)})},a=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];let n="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)n+="".concat(e," ");else for(let t in e)e[t]&&(n+="".concat(t," "))}}),n.trim()},l=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],s=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||l.includes(e))&&!t.includes(e)).reduce((t,i)=>(t[i]=e[i],t),{}),o=e=>{var t;let{top:i,bottom:n,left:r,right:a,height:l,width:s}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:c}=window,d=i<0,u=n>o,h=r<0,v=a>c,b=e.hasAttribute("data-outside-vy"),g=e.hasAttribute("data-outside-vx"),f=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return f&&(b&&("top"===e.getAttribute("data-outside-vy")?d=f.top-(n-f.bottom)<0:u=f.bottom+(f.top-i)>o),g&&("left"===e.getAttribute("data-outside-vx")?h=f.left-(a-f.right)<0:v=f.right+(f.left-r)>c)),{outTop:d,outBottom:u,outLeft:h,outRight:v}},c=e=>{let{outTop:t,outBottom:i,outLeft:n,outRight:r}=o(e),a={};return t||i?(a={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",a.vy)):e.removeAttribute("data-outside-vy"),n||r?(a={...a,vx:r?"right":"left"},e.setAttribute("data-outside-vx",a.vx)):e.removeAttribute("data-outside-vx"),a}},94759:function(e,t,i){"use strict";i.r(t);var n=i(52322),r=i(2784),a=i(70741),l=i(57092),s=i(57884),o=i(57284),c=i(49953),d=i(50350),u=i(10326);t.default=()=>{let[e,t]=(0,r.useState)();return(0,r.useEffect)(()=>{e&&setTimeout(()=>t(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{className:"tab-container",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(o.Z,{children:"Angular"}),(0,n.jsx)(o.Z,{children:"HTML"}),(0,n.jsx)(o.Z,{children:"React"}),(0,n.jsx)(o.Z,{children:"Vue"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/divider/how-to-use?current=angular",children:"How to use this in angular"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-divider> </db-divider>"})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:"<db-divider> </db-divider>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<db-divider> </db-divider>"),navigator.clipboard.writeText("<db-divider> </db-divider>")},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/divider/how-to-use?current=html",children:"How to use this in html"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div class="db-divider"></div>'})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<div class="db-divider"></div>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<div class="db-divider"></div>'),navigator.clipboard.writeText('<div class="db-divider"></div>')},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/divider/how-to-use?current=react",children:"How to use this in react"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider></DBDivider>"})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:"<DBDivider></DBDivider>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<DBDivider></DBDivider>"),navigator.clipboard.writeText("<DBDivider></DBDivider>")},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/divider/how-to-use?current=vue",children:"How to use this in vue"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBDivider>\n\n</DBDivider>"})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:"<DBDivider>\n\n</DBDivider>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<DBDivider>\n\n</DBDivider>"),navigator.clipboard.writeText("<DBDivider>\n\n</DBDivider>")},children:"Copy code"})]})]})}),(0,n.jsx)(a.Z,{className:"tab-container",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(o.Z,{children:"Angular"}),(0,n.jsx)(o.Z,{children:"HTML"}),(0,n.jsx)(o.Z,{children:"React"}),(0,n.jsx)(o.Z,{children:"Vue"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/divider/how-to-use?current=angular",children:"How to use this in angular"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-divider emphasis="strong"> </db-divider>'})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<db-divider emphasis="strong"> </db-divider>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-divider emphasis="strong"> </db-divider>'),navigator.clipboard.writeText('<db-divider emphasis="strong"> </db-divider>')},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/divider/how-to-use?current=html",children:"How to use this in html"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<div data-emphasis="strong" class="db-divider"></div>'})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<div data-emphasis="strong" class="db-divider"></div>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<div data-emphasis="strong" class="db-divider"></div>'),navigator.clipboard.writeText('<div data-emphasis="strong" class="db-divider"></div>')},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/divider/how-to-use?current=react",children:"How to use this in react"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBDivider emphasis="strong"></DBDivider>'})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBDivider emphasis="strong"></DBDivider>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBDivider emphasis="strong"></DBDivider>'),navigator.clipboard.writeText('<DBDivider emphasis="strong"></DBDivider>')},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(d.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/divider/how-to-use?current=vue",children:"How to use this in vue"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBDivider emphasis="strong">\n\n</DBDivider>'})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBDivider emphasis="strong">\n\n</DBDivider>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBDivider emphasis="strong">\n\n</DBDivider>'),navigator.clipboard.writeText('<DBDivider emphasis="strong">\n\n</DBDivider>')},children:"Copy code"})]})]})})]})}}},function(e){e.O(0,[92888,49774,40179],function(){return e(e.s=91302)}),_N_E=e.O()}]);