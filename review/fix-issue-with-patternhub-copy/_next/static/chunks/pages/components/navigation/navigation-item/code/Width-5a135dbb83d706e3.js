(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26839],{63496:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/navigation-item/code/Width",function(){return n(92582)}])},10326:function(t,e,n){"use strict";var a=n(52322),i=n(2784),l=n(43251);let o=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e);return(0,a.jsx)("button",{ref:n,...(0,l.mS)(t,[]),id:t.id,className:(0,l.yI)("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:e=>{t.onClick&&t.onClick(e)},children:t.children})});e.Z=o},70741:function(t,e,n){"use strict";var a=n(52322),i=n(2784),l=n(43251);let o=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e);return(0,a.jsx)("div",{ref:n,...(0,l.mS)(t,[]),id:t.id,"data-behaviour":t.behaviour,"data-elevation-level":t.elevationLevel,"data-spacing":t.spacing,role:"interactive"===t.behaviour?"button":void 0,tabIndex:"interactive"===t.behaviour?0:void 0,onClick:e=>{t.onClick&&t.onClick(e)},className:(0,l.yI)("db-card",t.className),children:t.children})});e.Z=o},50350:function(t,e,n){"use strict";var a=n(52322),i=n(2784),l=n(43251),o=n(55482);let r=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e),[r,s]=(0,i.useState)(()=>o.IY);return(0,a.jsxs)("a",{ref:n,...(0,l.mS)(t,[]),id:t.id,className:(0,l.yI)("db-link",t.className),href:t.href,target:t.target,rel:t.rel,role:t.role,hrefLang:t.hreflang,"aria-disabled":t.disabled,tabIndex:t.disabled?-1:0,"aria-selected":t.selected,"aria-label":t.label,"aria-current":t.current,"data-size":t.size,"data-variant":t.variant,"data-content":t.content||"internal",onClick:e=>{t.onClick&&t.onClick(e)},children:[t.text?(0,a.jsx)("span",{children:t.text}):null,t.children]})});e.Z=r},57284:function(t,e,n){"use strict";var a=n(52322),i=n(2784),l=n(43251);let o=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e),[o,r]=(0,i.useState)(()=>!1),[s,c]=(0,i.useState)(()=>!1);return(0,i.useEffect)(()=>{r(!0)},[]),(0,i.useEffect)(()=>{t.active&&o&&n.current&&(n.current.click(),r(!1))},[n.current,o]),(0,a.jsx)("li",{role:"none",className:(0,l.yI)("db-tab-item",t.className),children:(0,a.jsxs)("label",{htmlFor:t.id,"data-icon":t.icon,"data-icon-after":t.iconAfter,"data-no-text":t.noText,children:[(0,a.jsx)("input",{type:"radio",role:"tab",disabled:t.disabled,"aria-selected":s,"aria-controls":t.controls,checked:t.checked,ref:n,...(0,l.mS)(t,[]),id:t.id,onChange:e=>{var n;t.onChange&&t.onChange(e),t.change&&t.change(e),c(null===(n=e.target)||void 0===n?void 0:n.checked)}}),t.label?(0,a.jsx)(a.Fragment,{children:t.label}):null,t.children]})})});e.Z=o},57884:function(t,e,n){"use strict";var a=n(52322),i=n(2784),l=n(43251),o=n(55482);let r=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e),[r,s]=(0,i.useState)(()=>o.IY);return(0,i.useEffect)(()=>{s(t.id||"tab-list-"+(0,l.Vj)())},[]),(0,a.jsx)("div",{ref:n,...(0,l.mS)(t,[]),id:r,className:(0,l.yI)("db-tab-list",t.className),children:(0,a.jsx)("ul",{role:"tablist",children:t.children})})});e.Z=r},49953:function(t,e,n){"use strict";var a=n(52322),i=n(2784),l=n(43251);let o=(0,i.forwardRef)(function(t,e){let n=e||(0,i.useRef)(e);return(0,i.useEffect)(()=>{},[]),(0,a.jsxs)("section",{role:"tabpanel",ref:n,...(0,l.mS)(t,[]),className:(0,l.yI)("db-tab-panel",t.className),id:t.id,"aria-labelledby":t.labelledBy,children:[t.content?(0,a.jsx)(a.Fragment,{children:t.content}):null,t.children]})});e.Z=o},57092:function(t,e,n){"use strict";var a=n(52322),i=n(2784),l=n(43251),o=n(10326),r=n(57884),s=n(57284),c=n(49953);let u=(0,i.forwardRef)(function(t,e){var n,u,d,b;let h=e||(0,i.useRef)(e),[g,v]=(0,i.useState)(()=>"tabs-"+(0,l.Vj)()),[m,f]=(0,i.useState)(()=>""),[p,x]=(0,i.useState)(()=>!1),[N,_]=(0,i.useState)(()=>!1),[A,E]=(0,i.useState)(()=>!1),[j,I]=(0,i.useState)(()=>null);function w(t){try{if("string"==typeof t)return JSON.parse(t);return t}catch(t){console.error(t)}}function L(t){let e=t.scrollWidth>t.clientWidth;_(e&&t.scrollLeft>1),E(e&&t.scrollLeft<t.scrollWidth-t.clientWidth)}function R(e){let n=t.arrowScrollDistance||100;e&&(n*=-1),null==j||j.scrollBy({top:0,left:n,behavior:"smooth"})}function y(){if(null==h?void 0:h.current){let e=h.current.querySelector(".db-tab-list");if(e){let n=e.querySelector('[role="tablist"]');n.setAttribute("aria-orientation",t.orientation||"horizontal"),"arrows"===t.behaviour&&(I(n),L(n),n.addEventListener("scroll",()=>{L(n)}))}}}function B(e){if(h.current){let n=h.current.getElementsByClassName("db-tab-item");(null==n?void 0:n.length)>0&&Array.from(n).forEach((n,a)=>{let i=n.querySelector("label"),l=n.querySelector("input");if(l&&i){if(!l.id){let t="".concat(m,"-tab-").concat(a);i.setAttribute("for",t),l.setAttribute("aria-controls","".concat(m,"-tab-panel-").concat(a)),l.id=t,l.setAttribute("name",m)}if(e){let e=!t.initialSelectedMode||"auto"===t.initialSelectedMode,n=void 0===t.initialSelectedIndex&&0===a||t.initialSelectedIndex===a;e&&n&&l.click()}}});let a=h.current.getElementsByClassName("db-tab-panel");(null==a?void 0:a.length)>0&&Array.from(a).forEach((t,e)=>{t.id||(t.id="".concat(m,"-tab-panel-").concat(e),t.setAttribute("aria-labelledby","".concat(m,"-tab-").concat(e)))})}}return(0,i.useEffect)(()=>{v(t.id||g),f(t.name||(0,l.Vj)()),x(!0)},[]),(0,i.useEffect)(()=>{if(h.current&&p){y(),B(!0);let t=h.current.querySelector(".db-tab-list");t&&new MutationObserver(t=>{t.forEach(t=>{(t.removedNodes.length||t.addedNodes.length)&&(y(),B())})}).observe(t,{childList:!0,subtree:!0}),x(!1)}},[h.current,p]),(0,a.jsxs)("div",{ref:h,...(0,l.mS)(t,[]),id:g,className:(0,l.yI)("db-tabs",t.className),"data-orientation":t.orientation,"data-scroll-behaviour":t.behaviour,"data-alignment":null!==(d=t.alignment)&&void 0!==d?d:"start","data-width":null!==(b=t.width)&&void 0!==b?b:"auto",children:[N?(0,a.jsx)(o.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:t=>R(!0),children:"Scroll left"}):null,t.tabs?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{children:null===(n=w(t.tabs))||void 0===n?void 0:n.map((e,n)=>(0,a.jsx)(s.Z,{active:e.active,label:e.label,iconAfter:e.iconAfter,icon:e.icon,noText:e.noText},t.name+"tab-item"+n))}),null===(u=w(t.tabs))||void 0===u?void 0:u.map((e,n)=>(0,a.jsx)(c.Z,{content:e.content,children:e.children},t.name+"tab-panel"+n))]}):null,A?(0,a.jsx)(o.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:t=>R(),children:"Scroll right"}):null,t.children]})});e.Z=u},55482:function(t,e,n){"use strict";var a,i,l,o,r,s,c;n.d(e,{IY:function(){return u},YP:function(){return d},ce:function(){return b}});let u="OVERWRITE_DEFAULT_ID",d="Back",b="Close Button";(r=a||(a={})).FUNCTIONAL="functional",r.REGULAR="regular",r.EXPRESSIVE="expressive",Object.entries(a).map(t=>{let[,e]=t;return e}),(i||(i={})).PRIMARY="primary",(s=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",s.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",s.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",s.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",s.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",s.BRAND_BG_LEVEL_1="brand-bg-lvl-1",s.BRAND_BG_LEVEL_2="brand-bg-lvl-2",s.BRAND_BG_LEVEL_3="brand-bg-lvl-3",s.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",s.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",s.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",s.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",s.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",s.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",s.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",s.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",s.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",s.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",s.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",s.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",s.WARNING_BG_LEVEL_1="warning-bg-lvl-1",s.WARNING_BG_LEVEL_2="warning-bg-lvl-2",s.WARNING_BG_LEVEL_3="warning-bg-lvl-3",s.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",s.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",s.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",s.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",s.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",s.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",s.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(t=>{let[,e]=t;return e}),Object.entries(i).map(t=>{let[,e]=t;return e}),(c=o||(o={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(o).map(t=>{let[,e]=t;return e})},43251:function(t,e,n){"use strict";n.d(e,{Lp:function(){return c},Vj:function(){return a},mS:function(){return r},yI:function(){return l},yn:function(){return i}});let a=()=>{var t,e;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(t,e)=>{Object.values(t.children).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&i(t,e)})},l=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];let a="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)a+="".concat(t," ");else for(let e in t)t[e]&&(a+="".concat(e," "))}}),a.trim()},o=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],r=(t,e)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||o.includes(t))&&!e.includes(t)).reduce((e,n)=>(e[n]=t[n],e),{}),s=t=>{var e;let{top:n,bottom:a,left:i,right:l,height:o,width:r}=t.getBoundingClientRect(),{innerHeight:s,innerWidth:c}=window,u=n<0,d=a>s,b=i<0,h=l>c,g=t.hasAttribute("data-outside-vy"),v=t.hasAttribute("data-outside-vx"),m=null==t?void 0:null===(e=t.parentElement)||void 0===e?void 0:e.getBoundingClientRect();return m&&(g&&("top"===t.getAttribute("data-outside-vy")?u=m.top-(a-m.bottom)<0:d=m.bottom+(m.top-n)>s),v&&("left"===t.getAttribute("data-outside-vx")?b=m.left-(l-m.right)<0:h=m.right+(m.left-i)>c)),{outTop:u,outBottom:d,outLeft:b,outRight:h}},c=t=>{let{outTop:e,outBottom:n,outLeft:a,outRight:i}=s(t),l={};return e||n?(l={vy:e?"top":"bottom"},t.setAttribute("data-outside-vy",l.vy)):t.removeAttribute("data-outside-vy"),a||i?(l={...l,vx:i?"right":"left"},t.setAttribute("data-outside-vx",l.vx)):t.removeAttribute("data-outside-vx"),l}},92582:function(t,e,n){"use strict";n.r(e);var a=n(52322),i=n(2784),l=n(70741),o=n(57092),r=n(57884),s=n(57284),c=n(49953),u=n(50350),d=n(10326);e.default=()=>{let[t,e]=(0,i.useState)();return(0,i.useEffect)(()=>{t&&setTimeout(()=>e(""),1500)},[t]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(s.Z,{children:"Angular"}),(0,a.jsx)(s.Z,{children:"HTML"}),(0,a.jsx)(s.Z,{children:"React"}),(0,a.jsx)(s.Z,{children:"Vue"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(u.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/navigation-item/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:"<db-navigation-item>(Default) Auto</db-navigation-item>"})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-navigation-item>(Default) Auto</db-navigation-item>"===t?"check":"copy",variant:"ghost",onClick:()=>{e("<db-navigation-item>(Default) Auto</db-navigation-item>"),navigator.clipboard.writeText("<db-navigation-item>(Default) Auto</db-navigation-item>")},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(u.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/navigation-item/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-7658771574899499"></menu>\n</li>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-7658771574899499"></menu>\n</li>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-7658771574899499"></menu>\n</li>'),navigator.clipboard.writeText('<li class="db-navigation-item">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    (Default) Auto\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-7658771574899499"></menu>\n</li>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(u.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/navigation-item/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"===t?"check":"copy",variant:"ghost",onClick:()=>{e("<DBNavigationItem>(Default) Auto</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>(Default) Auto</DBNavigationItem>")},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(u.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/navigation-item/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBNavigationItem>(Default) Auto</DBNavigationItem>"===t?"check":"copy",variant:"ghost",onClick:()=>{e("<DBNavigationItem>(Default) Auto</DBNavigationItem>"),navigator.clipboard.writeText("<DBNavigationItem>(Default) Auto</DBNavigationItem>")},children:"Copy code"})]})]})}),(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(s.Z,{children:"Angular"}),(0,a.jsx)(s.Z,{children:"HTML"}),(0,a.jsx)(s.Z,{children:"React"}),(0,a.jsx)(s.Z,{children:"Vue"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(u.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/navigation-item/how-to-use?current=angular",children:"How to use this in angular"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-navigation-item width="full">Full</db-navigation-item>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-navigation-item width="full">Full</db-navigation-item>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<db-navigation-item width="full">Full</db-navigation-item>'),navigator.clipboard.writeText('<db-navigation-item width="full">Full</db-navigation-item>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(u.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/navigation-item/how-to-use?current=html",children:"How to use this in html"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-45199664944799256"></menu>\n</li>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-45199664944799256"></menu>\n</li>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-45199664944799256"></menu>\n</li>'),navigator.clipboard.writeText('<li class="db-navigation-item" data-width="full">\n  <button\n    class="db-navigation-item-expand-button"\n    aria-haspopup="false"\n    aria-expanded="false"\n  >\n    Full\n  </button>\n  <menu class="db-sub-navigation" id="sub-navigation-45199664944799256"></menu>\n</li>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(u.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/navigation-item/how-to-use?current=react",children:"How to use this in react"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem width="full">Full</DBNavigationItem>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem width="full">Full</DBNavigationItem>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBNavigationItem width="full">Full</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem width="full">Full</DBNavigationItem>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(u.Z,{content:"external",target:"_blank",href:"https://db-ui.github.io/mono/review/main/components/navigation-item/how-to-use?current=vue",children:"How to use this in vue"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBNavigationItem width="full">Full</DBNavigationItem>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBNavigationItem width="full">Full</DBNavigationItem>'===t?"check":"copy",variant:"ghost",onClick:()=>{e('<DBNavigationItem width="full">Full</DBNavigationItem>'),navigator.clipboard.writeText('<DBNavigationItem width="full">Full</DBNavigationItem>')},children:"Copy code"})]})]})})]})}}},function(t){t.O(0,[92888,49774,40179],function(){return t(t.s=63496)}),_N_E=t.O()}]);