(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95591],{61553:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-display/brand/code/Variants",function(){return n(50258)}])},10326:function(e,t,n){"use strict";var a=n(52322),o=n(2784),r=n(43251);let i=(0,o.forwardRef)(function(e,t){let n=t||(0,o.useRef)(t);return(0,a.jsx)("button",{ref:n,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=i},70741:function(e,t,n){"use strict";var a=n(52322),o=n(2784),r=n(43251);let i=(0,o.forwardRef)(function(e,t){let n=t||(0,o.useRef)(t);return(0,a.jsx)("div",{ref:n,...(0,r.mS)(e,[]),id:e.id,"data-behaviour":e.behaviour,"data-elevation-level":e.elevationLevel,"data-spacing":e.spacing,role:"interactive"===e.behaviour?"button":void 0,tabIndex:"interactive"===e.behaviour?0:void 0,onClick:t=>{e.onClick&&e.onClick(t)},className:(0,r.yI)("db-card",e.className),children:e.children})});t.Z=i},57284:function(e,t,n){"use strict";var a=n(52322),o=n(2784),r=n(43251);let i=(0,o.forwardRef)(function(e,t){let n=t||(0,o.useRef)(t),[i,l]=(0,o.useState)(()=>!1),[c,d]=(0,o.useState)(()=>!1);return(0,o.useEffect)(()=>{l(!0)},[]),(0,o.useEffect)(()=>{e.active&&i&&n.current&&(n.current.click(),l(!1))},[n.current,i]),(0,a.jsx)("li",{role:"none",className:(0,r.yI)("db-tab-item",e.className),children:(0,a.jsxs)("label",{htmlFor:e.id,"data-icon":e.icon,"data-icon-after":e.iconAfter,"data-no-text":e.noText,children:[(0,a.jsx)("input",{type:"radio",role:"tab",disabled:e.disabled,"aria-selected":c,"aria-controls":e.controls,checked:e.checked,ref:n,...(0,r.mS)(e,[]),id:e.id,onChange:t=>{var n;e.onChange&&e.onChange(t),e.change&&e.change(t),d(null===(n=t.target)||void 0===n?void 0:n.checked)}}),e.label?(0,a.jsx)(a.Fragment,{children:e.label}):null,e.children]})})});t.Z=i},57884:function(e,t,n){"use strict";var a=n(52322),o=n(2784),r=n(43251),i=n(55482);let l=(0,o.forwardRef)(function(e,t){let n=t||(0,o.useRef)(t),[l,c]=(0,o.useState)(()=>i.IY);return(0,o.useEffect)(()=>{c(e.id||"tab-list-"+(0,r.Vj)())},[]),(0,a.jsx)("div",{ref:n,...(0,r.mS)(e,[]),id:l,className:(0,r.yI)("db-tab-list",e.className),children:(0,a.jsx)("ul",{role:"tablist",children:e.children})})});t.Z=l},49953:function(e,t,n){"use strict";var a=n(52322),o=n(2784),r=n(43251);let i=(0,o.forwardRef)(function(e,t){let n=t||(0,o.useRef)(t);return(0,o.useEffect)(()=>{},[]),(0,a.jsxs)("section",{role:"tabpanel",ref:n,...(0,r.mS)(e,[]),className:(0,r.yI)("db-tab-panel",e.className),id:e.id,"aria-labelledby":e.labelledBy,children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.children]})});t.Z=i},57092:function(e,t,n){"use strict";var a=n(52322),o=n(2784),r=n(43251),i=n(10326),l=n(57884),c=n(57284),d=n(49953);let s=(0,o.forwardRef)(function(e,t){var n,s,u,b;let h=t||(0,o.useRef)(t),[g,L]=(0,o.useState)(()=>"tabs-"+(0,r.Vj)()),[v,f]=(0,o.useState)(()=>""),[m,x]=(0,o.useState)(()=>!1),[B,p]=(0,o.useState)(()=>!1),[N,j]=(0,o.useState)(()=>!1),[_,E]=(0,o.useState)(()=>null);function y(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}function A(e){let t=e.scrollWidth>e.clientWidth;p(t&&e.scrollLeft>1),j(t&&e.scrollLeft<e.scrollWidth-e.clientWidth)}function C(t){let n=e.arrowScrollDistance||100;t&&(n*=-1),null==_||_.scrollBy({top:0,left:n,behavior:"smooth"})}function T(){if(null==h?void 0:h.current){let t=h.current.querySelector(".db-tab-list");if(t){let n=t.querySelector('[role="tablist"]');n.setAttribute("aria-orientation",e.orientation||"horizontal"),"arrows"===e.behaviour&&(E(n),A(n),n.addEventListener("scroll",()=>{A(n)}))}}}function R(t){if(h.current){let n=h.current.getElementsByClassName("db-tab-item");(null==n?void 0:n.length)>0&&Array.from(n).forEach((n,a)=>{let o=n.querySelector("label"),r=n.querySelector("input");if(r&&o){if(!r.id){let e="".concat(v,"-tab-").concat(a);o.setAttribute("for",e),r.setAttribute("aria-controls","".concat(v,"-tab-panel-").concat(a)),r.id=e,r.setAttribute("name",v)}if(t){let t=!e.initialSelectedMode||"auto"===e.initialSelectedMode,n=void 0===e.initialSelectedIndex&&0===a||e.initialSelectedIndex===a;t&&n&&r.click()}}});let a=h.current.getElementsByClassName("db-tab-panel");(null==a?void 0:a.length)>0&&Array.from(a).forEach((e,t)=>{e.id||(e.id="".concat(v,"-tab-panel-").concat(t),e.setAttribute("aria-labelledby","".concat(v,"-tab-").concat(t)))})}}return(0,o.useEffect)(()=>{L(e.id||g),f(e.name||(0,r.Vj)()),x(!0)},[]),(0,o.useEffect)(()=>{if(h.current&&m){T(),R(!0);let e=h.current.querySelector(".db-tab-list");e&&new MutationObserver(e=>{e.forEach(e=>{(e.removedNodes.length||e.addedNodes.length)&&(T(),R())})}).observe(e,{childList:!0,subtree:!0}),x(!1)}},[h.current,m]),(0,a.jsxs)("div",{ref:h,...(0,r.mS)(e,[]),id:g,className:(0,r.yI)("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behaviour":e.behaviour,"data-alignment":null!==(u=e.alignment)&&void 0!==u?u:"start","data-width":null!==(b=e.width)&&void 0!==b?b:"auto",children:[B?(0,a.jsx)(i.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:e=>C(!0),children:"Scroll left"}):null,e.tabs?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{children:null===(n=y(e.tabs))||void 0===n?void 0:n.map((t,n)=>(0,a.jsx)(c.Z,{active:t.active,label:t.label,iconAfter:t.iconAfter,icon:t.icon,noText:t.noText},e.name+"tab-item"+n))}),null===(s=y(e.tabs))||void 0===s?void 0:s.map((t,n)=>(0,a.jsx)(d.Z,{content:t.content,children:t.children},e.name+"tab-panel"+n))]}):null,N?(0,a.jsx)(i.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:e=>C(),children:"Scroll right"}):null,e.children]})});t.Z=s},55482:function(e,t,n){"use strict";var a,o,r,i,l,c,d;n.d(t,{IY:function(){return s},YP:function(){return u},ce:function(){return b}});let s="OVERWRITE_DEFAULT_ID",u="Back",b="Close Button";(l=a||(a={})).FUNCTIONAL="functional",l.REGULAR="regular",l.EXPRESSIVE="expressive",Object.entries(a).map(e=>{let[,t]=e;return t}),(o||(o={})).PRIMARY="primary",(c=r||(r={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",c.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",c.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",c.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",c.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",c.BRAND_BG_LEVEL_1="brand-bg-lvl-1",c.BRAND_BG_LEVEL_2="brand-bg-lvl-2",c.BRAND_BG_LEVEL_3="brand-bg-lvl-3",c.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",c.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",c.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",c.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",c.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",c.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",c.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",c.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",c.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",c.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",c.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",c.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",c.WARNING_BG_LEVEL_1="warning-bg-lvl-1",c.WARNING_BG_LEVEL_2="warning-bg-lvl-2",c.WARNING_BG_LEVEL_3="warning-bg-lvl-3",c.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",c.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",c.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",c.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",c.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",c.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",c.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(r).map(e=>{let[,t]=e;return t}),Object.entries(o).map(e=>{let[,t]=e;return t}),(d=i||(i={})).CRITICAL="critical",d.INFORMATIONAL="informational",d.WARNING="warning",d.SUCCESSFUL="successful",Object.entries(i).map(e=>{let[,t]=e;return t})},43251:function(e,t,n){"use strict";n.d(t,{Lp:function(){return d},Vj:function(){return a},mS:function(){return l},yI:function(){return r},yn:function(){return o}});let a=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},o=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&o(e,t)})},r=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let a="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let t in e)e[t]&&(a+="".concat(t," "))}}),a.trim()},i=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],l=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||i.includes(e))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}),c=e=>{var t;let{top:n,bottom:a,left:o,right:r,height:i,width:l}=e.getBoundingClientRect(),{innerHeight:c,innerWidth:d}=window,s=n<0,u=a>c,b=o<0,h=r>d,g=e.hasAttribute("data-outside-vy"),L=e.hasAttribute("data-outside-vx"),v=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return v&&(g&&("top"===e.getAttribute("data-outside-vy")?s=v.top-(a-v.bottom)<0:u=v.bottom+(v.top-n)>c),L&&("left"===e.getAttribute("data-outside-vx")?b=v.left-(r-v.right)<0:h=v.right+(v.left-o)>d)),{outTop:s,outBottom:u,outLeft:b,outRight:h}},d=e=>{let{outTop:t,outBottom:n,outLeft:a,outRight:o}=c(e),r={};return t||n?(r={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",r.vy)):e.removeAttribute("data-outside-vy"),a||o?(r={...r,vx:o?"right":"left"},e.setAttribute("data-outside-vx",r.vx)):e.removeAttribute("data-outside-vx"),r}},50258:function(e,t,n){"use strict";n.r(t);var a=n(52322),o=n(2784),r=n(70741),i=n(57092),l=n(57884),c=n(57284),d=n(49953),s=n(10326);t.default=()=>{let[e,t]=(0,o.useState)();return(0,o.useEffect)(()=>{e&&setTimeout(()=>t(""),1500)},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{className:"tab-container",children:(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"<db-brand>(Default) With Logo</db-brand>"})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:"<db-brand>(Default) With Logo</db-brand>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<db-brand>(Default) With Logo</db-brand>"),navigator.clipboard.writeText("<db-brand>(Default) With Logo</db-brand>")},children:"Copy code"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<div data-icon="db" class="db-brand">\n  (Default) With Logo\n</div>'})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<div data-icon="db" class="db-brand">\n  (Default) With Logo\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<div data-icon="db" class="db-brand">\n  (Default) With Logo\n</div>'),navigator.clipboard.writeText('<div data-icon="db" class="db-brand">\n  (Default) With Logo\n</div>')},children:"Copy code"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBBrand>(Default) With Logo</DBBrand>"})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:"<DBBrand>(Default) With Logo</DBBrand>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<DBBrand>(Default) With Logo</DBBrand>"),navigator.clipboard.writeText("<DBBrand>(Default) With Logo</DBBrand>")},children:"Copy code"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBBrand>(Default) With Logo</DBBrand>"})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:"<DBBrand>(Default) With Logo</DBBrand>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<DBBrand>(Default) With Logo</DBBrand>"),navigator.clipboard.writeText("<DBBrand>(Default) With Logo</DBBrand>")},children:"Copy code"})]})]})}),(0,a.jsx)(r.Z,{className:"tab-container",children:(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-brand [hideLogo]="true">No Logo</db-brand>'})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<db-brand [hideLogo]="true">No Logo</db-brand>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-brand [hideLogo]="true">No Logo</db-brand>'),navigator.clipboard.writeText('<db-brand [hideLogo]="true">No Logo</db-brand>')},children:"Copy code"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<div data-icon="none" class="db-brand">\n  No Logo\n</div>'})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<div data-icon="none" class="db-brand">\n  No Logo\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<div data-icon="none" class="db-brand">\n  No Logo\n</div>'),navigator.clipboard.writeText('<div data-icon="none" class="db-brand">\n  No Logo\n</div>')},children:"Copy code"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBBrand hideLogo>No Logo</DBBrand>"})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:"<DBBrand hideLogo>No Logo</DBBrand>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<DBBrand hideLogo>No Logo</DBBrand>"),navigator.clipboard.writeText("<DBBrand hideLogo>No Logo</DBBrand>")},children:"Copy code"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBBrand :hideLogo="true">No Logo</DBBrand>'})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<DBBrand :hideLogo="true">No Logo</DBBrand>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBBrand :hideLogo="true">No Logo</DBBrand>'),navigator.clipboard.writeText('<DBBrand :hideLogo="true">No Logo</DBBrand>')},children:"Copy code"})]})]})}),(0,a.jsx)(r.Z,{className:"tab-container",children:(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(c.Z,{children:"Angular"}),(0,a.jsx)(c.Z,{children:"HTML"}),(0,a.jsx)(c.Z,{children:"React"}),(0,a.jsx)(c.Z,{children:"Vue"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-brand [hideLogo]="true" [customLogo]="true">Custom Logo</db-brand>'})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<db-brand [hideLogo]="true" [customLogo]="true">Custom Logo</db-brand>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-brand [hideLogo]="true" [customLogo]="true">Custom Logo</db-brand>'),navigator.clipboard.writeText('<db-brand [hideLogo]="true" [customLogo]="true">Custom Logo</db-brand>')},children:"Copy code"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<div data-icon="none" class="db-brand">\n  Custom Logo\n</div>'})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<div data-icon="none" class="db-brand">\n  Custom Logo\n</div>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<div data-icon="none" class="db-brand">\n  Custom Logo\n</div>'),navigator.clipboard.writeText('<div data-icon="none" class="db-brand">\n  Custom Logo\n</div>')},children:"Copy code"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBBrand hideLogo customLogo>\n  Custom Logo\n</DBBrand>"})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:"<DBBrand hideLogo customLogo>\n  Custom Logo\n</DBBrand>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<DBBrand hideLogo customLogo>\n  Custom Logo\n</DBBrand>"),navigator.clipboard.writeText("<DBBrand hideLogo customLogo>\n  Custom Logo\n</DBBrand>")},children:"Copy code"})]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBBrand :hideLogo="true" :customLogo="true">Custom Logo</DBBrand>'})}),(0,a.jsx)(s.Z,{className:"copy-button",noText:!0,icon:'<DBBrand :hideLogo="true" :customLogo="true">Custom Logo</DBBrand>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBBrand :hideLogo="true" :customLogo="true">Custom Logo</DBBrand>'),navigator.clipboard.writeText('<DBBrand :hideLogo="true" :customLogo="true">Custom Logo</DBBrand>')},children:"Copy code"})]})]})})]})}}},function(e){e.O(0,[92888,49774,40179],function(){return e(e.s=61553)}),_N_E=e.O()}]);