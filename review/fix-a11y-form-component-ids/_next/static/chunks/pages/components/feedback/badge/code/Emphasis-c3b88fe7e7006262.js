(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19524],{1379:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/feedback/badge/code/Emphasis",function(){return a(58737)}])},10326:function(e,t,a){"use strict";var n=a(52322),r=a(2784),l=a(43251);let i=(0,r.forwardRef)(function(e,t){let a=t||(0,r.useRef)(t);return(0,n.jsx)("button",{ref:a,...(0,l.mS)(e,[]),id:e.id,className:(0,l.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=i},70741:function(e,t,a){"use strict";var n=a(52322),r=a(2784),l=a(43251);let i=(0,r.forwardRef)(function(e,t){let a=t||(0,r.useRef)(t);return(0,n.jsx)("div",{ref:a,...(0,l.mS)(e,[]),id:e.id,"data-behaviour":e.behaviour,"data-elevation-level":e.elevationLevel,"data-spacing":e.spacing,role:"interactive"===e.behaviour?"button":void 0,tabIndex:"interactive"===e.behaviour?0:void 0,onClick:t=>{e.onClick&&e.onClick(t)},className:(0,l.yI)("db-card",e.className),children:e.children})});t.Z=i},57284:function(e,t,a){"use strict";var n=a(52322),r=a(2784),l=a(43251);let i=(0,r.forwardRef)(function(e,t){let a=t||(0,r.useRef)(t),[i,s]=(0,r.useState)(()=>!1),[c,o]=(0,r.useState)(()=>!1);return(0,r.useEffect)(()=>{s(!0)},[]),(0,r.useEffect)(()=>{e.active&&i&&a.current&&(a.current.click(),s(!1))},[a.current,i]),(0,n.jsx)("li",{role:"none",className:(0,l.yI)("db-tab-item",e.className),children:(0,n.jsxs)("label",{htmlFor:e.id,"data-icon":e.icon,"data-icon-after":e.iconAfter,"data-no-text":e.noText,children:[(0,n.jsx)("input",{type:"radio",role:"tab",disabled:e.disabled,"aria-selected":c,"aria-controls":e.controls,checked:e.checked,ref:a,...(0,l.mS)(e,[]),id:e.id,onChange:t=>{var a;e.onChange&&e.onChange(t),e.change&&e.change(t),o(null===(a=t.target)||void 0===a?void 0:a.checked)}}),e.label?(0,n.jsx)(n.Fragment,{children:e.label}):null,e.children]})})});t.Z=i},57884:function(e,t,a){"use strict";var n=a(52322),r=a(2784),l=a(43251),i=a(55482);let s=(0,r.forwardRef)(function(e,t){let a=t||(0,r.useRef)(t),[s,c]=(0,r.useState)(()=>i.IY);return(0,r.useEffect)(()=>{c(e.id||"tab-list-"+(0,l.Vj)())},[]),(0,n.jsx)("div",{ref:a,...(0,l.mS)(e,[]),id:s,className:(0,l.yI)("db-tab-list",e.className),children:(0,n.jsx)("ul",{role:"tablist",children:e.children})})});t.Z=s},49953:function(e,t,a){"use strict";var n=a(52322),r=a(2784),l=a(43251);let i=(0,r.forwardRef)(function(e,t){let a=t||(0,r.useRef)(t);return(0,r.useEffect)(()=>{},[]),(0,n.jsxs)("section",{role:"tabpanel",ref:a,...(0,l.mS)(e,[]),className:(0,l.yI)("db-tab-panel",e.className),id:e.id,"aria-labelledby":e.labelledBy,children:[e.content?(0,n.jsx)(n.Fragment,{children:e.content}):null,e.children]})});t.Z=i},57092:function(e,t,a){"use strict";var n=a(52322),r=a(2784),l=a(43251),i=a(10326),s=a(57884),c=a(57284),o=a(49953);let d=(0,r.forwardRef)(function(e,t){var a,d,u,b;let g=t||(0,r.useRef)(t),[h,f]=(0,r.useState)(()=>"tabs-"+(0,l.Vj)()),[p,v]=(0,r.useState)(()=>""),[m,x]=(0,r.useState)(()=>!1),[B,_]=(0,r.useState)(()=>!1),[N,E]=(0,r.useState)(()=>!1),[A,S]=(0,r.useState)(()=>null);function j(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}function y(e){let t=e.scrollWidth>e.clientWidth;_(t&&e.scrollLeft>1),E(t&&e.scrollLeft<e.scrollWidth-e.clientWidth)}function L(t){let a=e.arrowScrollDistance||100;t&&(a*=-1),null==A||A.scrollBy({top:0,left:a,behavior:"smooth"})}function R(){if(null==g?void 0:g.current){let t=g.current.querySelector(".db-tab-list");if(t){let a=t.querySelector('[role="tablist"]');a.setAttribute("aria-orientation",e.orientation||"horizontal"),"arrows"===e.behaviour&&(S(a),y(a),a.addEventListener("scroll",()=>{y(a)}))}}}function T(t){if(g.current){let a=g.current.querySelector(".db-tab-list").getElementsByClassName("db-tab-item");(null==a?void 0:a.length)>0&&Array.from(a).forEach((a,n)=>{let r=a.querySelector("label"),l=a.querySelector("input");if(l&&r){if(!l.id){let e="".concat(p,"-tab-").concat(n);r.setAttribute("for",e),l.setAttribute("aria-controls","".concat(p,"-tab-panel-").concat(n)),l.id=e,l.setAttribute("name",p)}if(t){let t=!e.initialSelectedMode||"auto"===e.initialSelectedMode,a=void 0===e.initialSelectedIndex&&0===n||e.initialSelectedIndex===n;t&&a&&l.click()}}});let n=[...Array.from(g.current.querySelectorAll("& > .db-tab-panel")),...Array.from(g.current.querySelectorAll("& > dbtabpanel > .db-tab-panel")),...Array.from(g.current.querySelectorAll("& > db-tab-panel > .db-tab-panel"))];(null==n?void 0:n.length)>0&&n.forEach((e,t)=>{e.id||(e.id="".concat(p,"-tab-panel-").concat(t),e.setAttribute("aria-labelledby","".concat(p,"-tab-").concat(t)))})}}return(0,r.useEffect)(()=>{f(e.id||h),v(e.name||(0,l.Vj)()),x(!0)},[]),(0,r.useEffect)(()=>{if(g.current&&m){R(),T(!0);let e=g.current.querySelector(".db-tab-list");e&&new MutationObserver(e=>{e.forEach(e=>{(e.removedNodes.length||e.addedNodes.length)&&(R(),T())})}).observe(e,{childList:!0,subtree:!0}),x(!1)}},[g.current,m]),(0,n.jsxs)("div",{ref:g,...(0,l.mS)(e,[]),id:h,className:(0,l.yI)("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behaviour":e.behaviour,"data-alignment":null!==(u=e.alignment)&&void 0!==u?u:"start","data-width":null!==(b=e.width)&&void 0!==b?b:"auto",children:[B?(0,n.jsx)(i.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:e=>L(!0),children:"Scroll left"}):null,e.tabs?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{children:null===(a=j(e.tabs))||void 0===a?void 0:a.map((t,a)=>(0,n.jsx)(c.Z,{active:t.active,label:t.label,iconAfter:t.iconAfter,icon:t.icon,noText:t.noText},e.name+"tab-item"+a))}),null===(d=j(e.tabs))||void 0===d?void 0:d.map((t,a)=>(0,n.jsx)(o.Z,{content:t.content,children:t.children},e.name+"tab-panel"+a))]}):null,N?(0,n.jsx)(i.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:e=>L(),children:"Scroll right"}):null,e.children]})});t.Z=d},55482:function(e,t,a){"use strict";var n,r,l,i,s,c,o;a.d(t,{IY:function(){return d},YP:function(){return u},ce:function(){return b}});let d="OVERWRITE_DEFAULT_ID",u="Back",b="Close Button";(s=n||(n={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(n).map(e=>{let[,t]=e;return t}),(r||(r={})).PRIMARY="primary",(c=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",c.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",c.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",c.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",c.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",c.BRAND_BG_LEVEL_1="brand-bg-lvl-1",c.BRAND_BG_LEVEL_2="brand-bg-lvl-2",c.BRAND_BG_LEVEL_3="brand-bg-lvl-3",c.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",c.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",c.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",c.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",c.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",c.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",c.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",c.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",c.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",c.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",c.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",c.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",c.WARNING_BG_LEVEL_1="warning-bg-lvl-1",c.WARNING_BG_LEVEL_2="warning-bg-lvl-2",c.WARNING_BG_LEVEL_3="warning-bg-lvl-3",c.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",c.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",c.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",c.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",c.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",c.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",c.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(e=>{let[,t]=e;return t}),Object.entries(r).map(e=>{let[,t]=e;return t}),(o=i||(i={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(i).map(e=>{let[,t]=e;return t})},43251:function(e,t,a){"use strict";a.d(t,{Lp:function(){return o},Vj:function(){return n},mS:function(){return s},yI:function(){return l},yn:function(){return r}});let n=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&r(e,t)})},l=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];let n="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)n+="".concat(e," ");else for(let t in e)e[t]&&(n+="".concat(t," "))}}),n.trim()},i=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],s=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||i.includes(e))&&!t.includes(e)).reduce((t,a)=>(t[a]=e[a],t),{}),c=e=>{var t;let{top:a,bottom:n,left:r,right:l,height:i,width:s}=e.getBoundingClientRect(),{innerHeight:c,innerWidth:o}=window,d=a<0,u=n>c,b=r<0,g=l>o,h=e.hasAttribute("data-outside-vy"),f=e.hasAttribute("data-outside-vx"),p=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return p&&(h&&("top"===e.getAttribute("data-outside-vy")?d=p.top-(n-p.bottom)<0:u=p.bottom+(p.top-a)>c),f&&("left"===e.getAttribute("data-outside-vx")?b=p.left-(l-p.right)<0:g=p.right+(p.left-r)>o)),{outTop:d,outBottom:u,outLeft:b,outRight:g}},o=e=>{let{outTop:t,outBottom:a,outLeft:n,outRight:r}=c(e),l={};return t||a?(l={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",l.vy)):e.removeAttribute("data-outside-vy"),n||r?(l={...l,vx:r?"right":"left"},e.setAttribute("data-outside-vx",l.vx)):e.removeAttribute("data-outside-vx"),l}},58737:function(e,t,a){"use strict";a.r(t);var n=a(52322),r=a(2784),l=a(70741),i=a(57092),s=a(57884),c=a(57284),o=a(49953),d=a(10326);t.default=()=>{let[e,t]=(0,r.useState)();return(0,r.useEffect)(()=>{e&&setTimeout(()=>t(""),1500)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:"<db-badge>(Default) Weak</db-badge>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<db-badge>(Default) Weak</db-badge>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<db-badge>(Default) Weak</db-badge>"),navigator.clipboard.writeText("<db-badge>(Default) Weak</db-badge>")},children:"Copy code"})]}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge">(Default) Weak</span>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<span class="db-badge">(Default) Weak</span>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<span class="db-badge">(Default) Weak</span>'),navigator.clipboard.writeText('<span class="db-badge">(Default) Weak</span>')},children:"Copy code"})]}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Weak</DBBadge>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>(Default) Weak</DBBadge>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<DBBadge>(Default) Weak</DBBadge>"),navigator.clipboard.writeText("<DBBadge>(Default) Weak</DBBadge>")},children:"Copy code"})]}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:"<DBBadge>(Default) Weak</DBBadge>"})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBBadge>(Default) Weak</DBBadge>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<DBBadge>(Default) Weak</DBBadge>"),navigator.clipboard.writeText("<DBBadge>(Default) Weak</DBBadge>")},children:"Copy code"})]})]})}),(0,n.jsx)(l.Z,{className:"tab-container",children:(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(c.Z,{children:"Angular"}),(0,n.jsx)(c.Z,{children:"HTML"}),(0,n.jsx)(c.Z,{children:"React"}),(0,n.jsx)(c.Z,{children:"Vue"})]}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<db-badge emphasis="strong">Strong</db-badge>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-badge emphasis="strong">Strong</db-badge>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-badge emphasis="strong">Strong</db-badge>'),navigator.clipboard.writeText('<db-badge emphasis="strong">Strong</db-badge>')},children:"Copy code"})]}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-html",children:'<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>'),navigator.clipboard.writeText('<span class="db-badge" data-emphasis="strong">\n  Strong\n</span>')},children:"Copy code"})]}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge emphasis="strong">Strong</DBBadge>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBBadge emphasis="strong">Strong</DBBadge>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBBadge emphasis="strong">Strong</DBBadge>'),navigator.clipboard.writeText('<DBBadge emphasis="strong">Strong</DBBadge>')},children:"Copy code"})]}),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("pre",{children:(0,n.jsx)("code",{className:"hljs language-tsx",children:'<DBBadge emphasis="strong">Strong</DBBadge>'})}),(0,n.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBBadge emphasis="strong">Strong</DBBadge>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBBadge emphasis="strong">Strong</DBBadge>'),navigator.clipboard.writeText('<DBBadge emphasis="strong">Strong</DBBadge>')},children:"Copy code"})]})]})})]})}}},function(e){e.O(0,[92888,49774,40179],function(){return e(e.s=1379)}),_N_E=e.O()}]);