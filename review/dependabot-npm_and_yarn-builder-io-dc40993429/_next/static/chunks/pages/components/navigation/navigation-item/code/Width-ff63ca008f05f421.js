(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26839],{63496:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/navigation-item/code/Width",function(){return a(92582)}])},10326:function(t,e,a){"use strict";var n=a(52322),i=a(2784),l=a(43251);let o=(0,i.forwardRef)(function(t,e){let a=e||(0,i.useRef)(e);return(0,n.jsx)("button",{ref:a,...(0,l.mS)(t,[]),id:t.id,className:(0,l.yI)("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:e=>{t.onClick&&t.onClick(e)},children:t.children})});e.Z=o},70741:function(t,e,a){"use strict";var n=a(52322),i=a(2784),l=a(43251);let o=(0,i.forwardRef)(function(t,e){let a=e||(0,i.useRef)(e);return(0,n.jsx)("div",{ref:a,...(0,l.mS)(t,[]),id:t.id,"data-behaviour":t.behaviour,"data-elevation-level":t.elevationLevel,"data-spacing":t.spacing,role:"interactive"===t.behaviour?"button":void 0,tabIndex:"interactive"===t.behaviour?0:void 0,onClick:e=>{t.onClick&&t.onClick(e)},className:(0,l.yI)("db-card",t.className),children:t.children})});e.Z=o},57284:function(t,e,a){"use strict";var n=a(52322),i=a(2784),l=a(43251);let o=(0,i.forwardRef)(function(t,e){let a=e||(0,i.useRef)(e),[o,r]=(0,i.useState)(()=>!1),[s,c]=(0,i.useState)(()=>!1);return(0,i.useEffect)(()=>{r(!0)},[]),(0,i.useEffect)(()=>{t.active&&o&&a.current&&(a.current.click(),r(!1))},[a.current,o]),(0,n.jsx)("li",{role:"none",className:(0,l.yI)("db-tab-item",t.className),children:(0,n.jsxs)("label",{htmlFor:t.id,"data-icon":t.icon,"data-icon-after":t.iconAfter,"data-no-text":t.noText,children:[(0,n.jsx)("input",{type:"radio",role:"tab",disabled:t.disabled,"aria-selected":s,"aria-controls":t.controls,checked:t.checked,ref:a,...(0,l.mS)(t,[]),id:t.id,onChange:e=>{var a;t.onChange&&t.onChange(e),t.change&&t.change(e),c(null===(a=e.target)||void 0===a?void 0:a.checked)}}),t.label?(0,n.jsx)(n.Fragment,{children:t.label}):null,t.children]})})});e.Z=o},57884:function(t,e,a){"use strict";var n=a(52322),i=a(2784),l=a(43251),o=a(55482);let r=(0,i.forwardRef)(function(t,e){let a=e||(0,i.useRef)(e),[r,s]=(0,i.useState)(()=>o.IY);return(0,i.useEffect)(()=>{s(t.id||"tab-list-"+(0,l.Vj)())},[]),(0,n.jsx)("div",{ref:a,...(0,l.mS)(t,[]),id:r,className:(0,l.yI)("db-tab-list",t.className),children:(0,n.jsx)("ul",{role:"tablist",children:t.children})})});e.Z=r},49953:function(t,e,a){"use strict";var n=a(52322),i=a(2784),l=a(43251);let o=(0,i.forwardRef)(function(t,e){let a=e||(0,i.useRef)(e);return(0,i.useEffect)(()=>{},[]),(0,n.jsxs)("section",{role:"tabpanel",ref:a,...(0,l.mS)(t,[]),className:(0,l.yI)("db-tab-panel",t.className),id:t.id,"aria-labelledby":t.labelledBy,children:[t.content?(0,n.jsx)(n.Fragment,{children:t.content}):null,t.children]})});e.Z=o},57092:function(t,e,a){"use strict";var n=a(52322),i=a(2784),l=a(43251),o=a(10326),r=a(57884),s=a(57284),c=a(49953);let u=(0,i.forwardRef)(function(t,e){var a,u,d,b;let v=e||(0,i.useRef)(e),[g,h]=(0,i.useState)(()=>"tabs-"+(0,l.Vj)()),[m,f]=(0,i.useState)(()=>""),[p,N]=(0,i.useState)(()=>!1),[x,_]=(0,i.useState)(()=>!1),[A,E]=(0,i.useState)(()=>!1),[I,j]=(0,i.useState)(()=>null);function L(t){try{if("string"==typeof t)return JSON.parse(t);return t}catch(t){console.error(t)}}function R(t){let e=t.scrollWidth>t.clientWidth;_(e&&t.scrollLeft>1),E(e&&t.scrollLeft<t.scrollWidth-t.clientWidth)}function y(e){let a=t.arrowScrollDistance||100;e&&(a*=-1),null==I||I.scrollBy({top:0,left:a,behavior:"smooth"})}function B(){if(null==v?void 0:v.current){let e=v.current.querySelector(".db-tab-list");if(e){let a=e.querySelector('[role="tablist"]');a.setAttribute("aria-orientation",t.orientation||"horizontal"),"arrows"===t.behaviour&&(j(a),R(a),a.addEventListener("scroll",()=>{R(a)}))}}}function T(e){if(v.current){let a=v.current.getElementsByClassName("db-tab-item");(null==a?void 0:a.length)>0&&Array.from(a).forEach((a,n)=>{let i=a.querySelector("label"),l=a.querySelector("input");if(l&&i){if(!l.id){let t="".concat(m,"-tab-").concat(n);i.setAttribute("for",t),l.setAttribute("aria-controls","".concat(m,"-tab-panel-").concat(n)),l.id=t,l.setAttribute("name",m)}if(e){let e=!t.initialSelectedMode||"auto"===t.initialSelectedMode,a=void 0===t.initialSelectedIndex&&0===n||t.initialSelectedIndex===n;e&&a&&l.click()}}});let n=v.current.getElementsByClassName("db-tab-panel");(null==n?void 0:n.length)>0&&Array.from(n).forEach((t,e)=>{t.id||(t.id="".concat(m,"-tab-panel-").concat(e),t.setAttribute("aria-labelledby","".concat(m,"-tab-").concat(e)))})}}return(0,i.useEffect)(()=>{h(t.id||g),f(t.name||(0,l.Vj)()),N(!0)},[]),(0,i.useEffect)(()=>{if(v.current&&p){B(),T(!0);let t=v.current.querySelector(".db-tab-list");t&&new MutationObserver(t=>{t.forEach(t=>{(t.removedNodes.length||t.addedNodes.length)&&(B(),T())})}).observe(t,{childList:!0,subtree:!0}),N(!1)}},[v.current,p]),(0,n.jsxs)("div",{ref:v,...(0,l.mS)(t,[]),id:g,className:(0,l.yI)("db-tabs",t.className),"data-orientation":t.orientation,"data-scroll-behaviour":t.behaviour,"data-alignment":null!==(d=t.alignment)&&void 0!==d?d:"start","data-width":null!==(b=t.width)&&void 0!==b?b:"auto",children:[x?(0,n.jsx)(o.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:t=>y(!0),children:"Scroll left"}):null,t.tabs?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{children:null===(a=L(t.tabs))||void 0===a?void 0:a.map((e,a)=>(0,n.jsx)(s.Z,{active:e.active,label:e.label,iconAfter:e.iconAfter,icon:e.icon,noText:e.noText},t.name+"tab-item"+a))}),null===(u=L(t.tabs))||void 0===u?void 0:u.map((e,a)=>(0,n.jsx)(c.Z,{content:e.content,children:e.children},t.name+"tab-panel"+a))]}):null,A?(0,n.jsx)(o.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:t=>y(),children:"Scroll right"}):null,t.children]})});e.Z=u},55482:function(t,e,a){"use strict";var n,i,l,o,r,s,c;a.d(e,{IY:function(){return u},YP:function(){return d},ce:function(){return b}});let u="OVERWRITE_DEFAULT_ID",d="Back",b="Close Button";(r=n||(n={})).FUNCTIONAL="functional",r.REGULAR="regular",r.EXPRESSIVE="expressive",Object.entries(n).map(t=>{let[,e]=t;return e}),(i||(i={})).PRIMARY="primary",(s=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",s.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",s.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",s.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",s.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",s.BRAND_BG_LEVEL_1="brand-bg-lvl-1",s.BRAND_BG_LEVEL_2="brand-bg-lvl-2",s.BRAND_BG_LEVEL_3="brand-bg-lvl-3",s.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",s.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",s.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",s.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",s.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",s.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",s.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",s.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",s.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",s.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",s.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",s.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",s.WARNING_BG_LEVEL_1="warning-bg-lvl-1",s.WARNING_BG_LEVEL_2="warning-bg-lvl-2",s.WARNING_BG_LEVEL_3="warning-bg-lvl-3",s.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",s.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",s.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",s.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",s.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",s.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",s.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(t=>{let[,e]=t;return e}),Object.entries(i).map(t=>{let[,e]=t;return e}),(c=o||(o={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(o).map(t=>{let[,e]=t;return e})},43251:function(t,e,a){"use strict";a.d(e,{Lp:function(){return c},Vj:function(){return n},mS:function(){return r},yI:function(){return l},yn:function(){return i}});let n=()=>{var t,e;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(t,e)=>{Object.values(t.children).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&i(t,e)})},l=function(){for(var t=arguments.length,e=Array(t),a=0;a<t;a++)e[a]=arguments[a];let n="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)n+="".concat(t," ");else for(let e in t)t[e]&&(n+="".concat(e," "))}}),n.trim()},o=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],r=(t,e)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||o.includes(t))&&!e.includes(t)).reduce((e,a)=>(e[a]=t[a],e),{}),s=t=>{var e;let{top:a,bottom:n,left:i,right:l,height:o,width:r}=t.getBoundingClientRect(),{innerHeight:s,innerWidth:c}=window,u=a<0,d=n>s,b=i<0,v=l>c,g=t.hasAttribute("data-outside-vy"),h=t.hasAttribute("data-outside-vx"),m=null==t?void 0:null===(e=t.parentElement)||void 0===e?void 0:e.getBoundingClientRect();return m&&(g&&("top"===t.getAttribute("data-outside-vy")?u=m.top-(n-m.bottom)<0:d=m.bottom+(m.top-a)>s),h&&("left"===t.getAttribute("data-outside-vx")?b=m.left-(l-m.right)<0:v=m.right+(m.left-i)>c)),{outTop:u,outBottom:d,outLeft:b,outRight:v}},c=t=>{let{outTop:e,outBottom:a,outLeft:n,outRight:i}=s(t),l={};return e||a?(l={vy:e?"top":"bottom"},t.setAttribute("data-outside-vy",l.vy)):t.removeAttribute("data-outside-vy"),n||i?(l={...l,vx:i?"right":"left"},t.setAttribute("data-outside-vx",l.vx)):t.removeAttribute("data-outside-vx"),l}},92582:function(t,e,a){"use strict";a.r(e);var n=a(52322),i=a(2784),l=a(70741),o=a(57092),r=a(57884),s=a(57284),c=a(49953),u=a(10326);e.default=()=>{let[t,e]=(0,i.useState)();return(0,i.useEffect)(()=>{t&&setTimeout(()=>e(""),1500)},[t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(s.Z,{children:"Angular"}),(0,n.jsx)(s.Z,{children:"HTML"}),(0,n.jsx)(s.Z,{children:"React"}),(0,n.jsx)(s.Z,{children:"Vue"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-navigation-item>(Default) Auto</db-navigation-item>"})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:"<db-navigation-item>(Default) Auto</db-navigation-item>"===t?"check":"copy",variant:"ghost",onClick:()=>{e("<db-navigation-item>(Default) Auto</db-navigation-item>"),navigator.clipboard.writeText("<db-navigation-item>(Default) Auto</db-navigation-item>")},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-59431556124879"></menu>\n</li>'})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-59431556124879"></menu>\n</li>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-59431556124879"></menu>\n</li>'),navigator.clipboard.writeText('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-59431556124879"></menu>\n</li>')},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"===t?"check":"copy",variant:"ghost",onClick:()=>{e("<DBNavigationItem>(Default) Auto</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>(Default) Auto</DBNavigationItem>")},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"===t?"check":"copy",variant:"ghost",onClick:()=>{e("<DBNavigationItem>(Default) Auto</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>(Default) Auto</DBNavigationItem>")},children:"Copy code"})]})]})}),(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(s.Z,{children:"Angular"}),(0,n.jsx)(s.Z,{children:"HTML"}),(0,n.jsx)(s.Z,{children:"React"}),(0,n.jsx)(s.Z,{children:"Vue"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item width="full">Full</db-navigation-item>'})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<db-navigation-item width="full">Full</db-navigation-item>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<db-navigation-item width="full">Full</db-navigation-item>'),navigator.clipboard.writeText('<db-navigation-item width="full">Full</db-navigation-item>')},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-9117966859894524"></menu>\n</li>'})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-9117966859894524"></menu>\n</li>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-9117966859894524"></menu>\n</li>'),navigator.clipboard.writeText('<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-9117966859894524"></menu>\n</li>')},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem width="full">Full</DBNavigationItem>'})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem width="full">Full</DBNavigationItem>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBNavigationItem width="full">Full</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem width="full">Full</DBNavigationItem>')},children:"Copy code"})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem width="full">Full</DBNavigationItem>'})}),(0,n.jsx)(u.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem width="full">Full</DBNavigationItem>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBNavigationItem width="full">Full</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem width="full">Full</DBNavigationItem>')},children:"Copy code"})]})]})})]})}}},function(t){t.O(0,[92888,49774,40179],function(){return t(t.s=63496)}),_N_E=t.O()}]);