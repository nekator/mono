(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58645],{91384:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/drawer/code/Size",function(){return n(9337)}])},10326:function(e,t,n){"use strict";var a=n(52322),r=n(2784),l=n(43251);let o=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsx)("button",{ref:n,...(0,l.mS)(e,[]),id:e.id,className:(0,l.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=o},70741:function(e,t,n){"use strict";var a=n(52322),r=n(2784),l=n(43251);let o=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsx)("div",{ref:n,...(0,l.mS)(e,[]),id:e.id,"data-behaviour":e.behaviour,"data-elevation-level":e.elevationLevel,"data-spacing":e.spacing,role:"interactive"===e.behaviour?"button":void 0,tabIndex:"interactive"===e.behaviour?0:void 0,onClick:t=>{e.onClick&&e.onClick(t)},className:(0,l.yI)("db-card",e.className),children:e.children})});t.Z=o},57284:function(e,t,n){"use strict";var a=n(52322),r=n(2784),l=n(43251);let o=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[o,i]=(0,r.useState)(()=>!1),[s,c]=(0,r.useState)(()=>!1);return(0,r.useEffect)(()=>{i(!0)},[]),(0,r.useEffect)(()=>{e.active&&o&&n.current&&(n.current.click(),i(!1))},[n.current,o]),(0,a.jsx)("li",{role:"none",className:(0,l.yI)("db-tab-item",e.className),children:(0,a.jsxs)("label",{htmlFor:e.id,"data-icon":e.icon,"data-icon-after":e.iconAfter,"data-no-text":e.noText,children:[(0,a.jsx)("input",{type:"radio",role:"tab",disabled:e.disabled,"aria-selected":s,"aria-controls":e.controls,checked:e.checked,ref:n,...(0,l.mS)(e,[]),id:e.id,onChange:t=>{var n;e.onChange&&e.onChange(t),e.change&&e.change(t),c(null===(n=t.target)||void 0===n?void 0:n.checked)}}),e.label?(0,a.jsx)(a.Fragment,{children:e.label}):null,e.children]})})});t.Z=o},57884:function(e,t,n){"use strict";var a=n(52322),r=n(2784),l=n(43251),o=n(55482);let i=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[i,s]=(0,r.useState)(()=>o.IY);return(0,r.useEffect)(()=>{s(e.id||"tab-list-"+(0,l.Vj)())},[]),(0,a.jsx)("div",{ref:n,...(0,l.mS)(e,[]),id:i,className:(0,l.yI)("db-tab-list",e.className),children:(0,a.jsx)("ul",{role:"tablist",children:e.children})})});t.Z=i},49953:function(e,t,n){"use strict";var a=n(52322),r=n(2784),l=n(43251);let o=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,r.useEffect)(()=>{},[]),(0,a.jsxs)("section",{role:"tabpanel",ref:n,...(0,l.mS)(e,[]),className:(0,l.yI)("db-tab-panel",e.className),id:e.id,"aria-labelledby":e.labelledBy,children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.children]})});t.Z=o},57092:function(e,t,n){"use strict";var a=n(52322),r=n(2784),l=n(43251),o=n(10326),i=n(57884),s=n(57284),c=n(49953);let d=(0,r.forwardRef)(function(e,t){var n,d,u,b;let h=t||(0,r.useRef)(t),[p,w]=(0,r.useState)(()=>"tabs-"+(0,l.Vj)()),[f,g]=(0,r.useState)(()=>""),[v,x]=(0,r.useState)(()=>!1),[D,C]=(0,r.useState)(()=>!1),[B,_]=(0,r.useState)(()=>!1),[m,N]=(0,r.useState)(()=>null);function E(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}function A(e){let t=e.scrollWidth>e.clientWidth;C(t&&e.scrollLeft>1),_(t&&e.scrollLeft<e.scrollWidth-e.clientWidth)}function j(t){let n=e.arrowScrollDistance||100;t&&(n*=-1),null==m||m.scrollBy({top:0,left:n,behavior:"smooth"})}function y(){if(null==h?void 0:h.current){let t=h.current.querySelector(".db-tab-list");if(t){let n=t.querySelector('[role="tablist"]');n.setAttribute("aria-orientation",e.orientation||"horizontal"),"arrows"===e.behaviour&&(N(n),A(n),n.addEventListener("scroll",()=>{A(n)}))}}}function L(t){if(h.current){let n=h.current.querySelector(".db-tab-list").getElementsByClassName("db-tab-item");(null==n?void 0:n.length)>0&&Array.from(n).forEach((n,a)=>{let r=n.querySelector("label"),l=n.querySelector("input");if(l&&r){if(!l.id){let e="".concat(f,"-tab-").concat(a);r.setAttribute("for",e),l.setAttribute("aria-controls","".concat(f,"-tab-panel-").concat(a)),l.id=e,l.setAttribute("name",f)}if(t){let t=!e.initialSelectedMode||"auto"===e.initialSelectedMode,n=void 0===e.initialSelectedIndex&&0===a||e.initialSelectedIndex===a;t&&n&&l.click()}}});let a=[...Array.from(h.current.querySelectorAll("& > .db-tab-panel")),...Array.from(h.current.querySelectorAll("& > dbtabpanel > .db-tab-panel")),...Array.from(h.current.querySelectorAll("& > db-tab-panel > .db-tab-panel"))];(null==a?void 0:a.length)>0&&a.forEach((e,t)=>{e.id||(e.id="".concat(f,"-tab-panel-").concat(t),e.setAttribute("aria-labelledby","".concat(f,"-tab-").concat(t)))})}}return(0,r.useEffect)(()=>{w(e.id||p),g(e.name||(0,l.Vj)()),x(!0)},[]),(0,r.useEffect)(()=>{if(h.current&&v){y(),L(!0);let e=h.current.querySelector(".db-tab-list");e&&new MutationObserver(e=>{e.forEach(e=>{(e.removedNodes.length||e.addedNodes.length)&&(y(),L())})}).observe(e,{childList:!0,subtree:!0}),x(!1)}},[h.current,v]),(0,a.jsxs)("div",{ref:h,...(0,l.mS)(e,[]),id:p,className:(0,l.yI)("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behaviour":e.behaviour,"data-alignment":null!==(u=e.alignment)&&void 0!==u?u:"start","data-width":null!==(b=e.width)&&void 0!==b?b:"auto",children:[D?(0,a.jsx)(o.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:e=>j(!0),children:"Scroll left"}):null,e.tabs?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{children:null===(n=E(e.tabs))||void 0===n?void 0:n.map((t,n)=>(0,a.jsx)(s.Z,{active:t.active,label:t.label,iconAfter:t.iconAfter,icon:t.icon,noText:t.noText},e.name+"tab-item"+n))}),null===(d=E(e.tabs))||void 0===d?void 0:d.map((t,n)=>(0,a.jsx)(c.Z,{content:t.content,children:t.children},e.name+"tab-panel"+n))]}):null,B?(0,a.jsx)(o.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:e=>j(),children:"Scroll right"}):null,e.children]})});t.Z=d},55482:function(e,t,n){"use strict";var a,r,l,o,i,s,c;n.d(t,{IY:function(){return d},YP:function(){return u},ce:function(){return b}});let d="OVERWRITE_DEFAULT_ID",u="Back",b="Close Button";(i=a||(a={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive",Object.entries(a).map(e=>{let[,t]=e;return t}),(r||(r={})).PRIMARY="primary",(s=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",s.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",s.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",s.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",s.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",s.BRAND_BG_LEVEL_1="brand-bg-lvl-1",s.BRAND_BG_LEVEL_2="brand-bg-lvl-2",s.BRAND_BG_LEVEL_3="brand-bg-lvl-3",s.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",s.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",s.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",s.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",s.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",s.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",s.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",s.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",s.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",s.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",s.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",s.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",s.WARNING_BG_LEVEL_1="warning-bg-lvl-1",s.WARNING_BG_LEVEL_2="warning-bg-lvl-2",s.WARNING_BG_LEVEL_3="warning-bg-lvl-3",s.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",s.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",s.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",s.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",s.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",s.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",s.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(e=>{let[,t]=e;return t}),Object.entries(r).map(e=>{let[,t]=e;return t}),(c=o||(o={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(o).map(e=>{let[,t]=e;return t})},43251:function(e,t,n){"use strict";n.d(t,{Lp:function(){return c},Vj:function(){return a},mS:function(){return i},yI:function(){return l},yn:function(){return r}});let a=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&r(e,t)})},l=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let a="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let t in e)e[t]&&(a+="".concat(t," "))}}),a.trim()},o=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],i=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||o.includes(e))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}),s=e=>{var t;let{top:n,bottom:a,left:r,right:l,height:o,width:i}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:c}=window,d=n<0,u=a>s,b=r<0,h=l>c,p=e.hasAttribute("data-outside-vy"),w=e.hasAttribute("data-outside-vx"),f=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return f&&(p&&("top"===e.getAttribute("data-outside-vy")?d=f.top-(a-f.bottom)<0:u=f.bottom+(f.top-n)>s),w&&("left"===e.getAttribute("data-outside-vx")?b=f.left-(l-f.right)<0:h=f.right+(f.left-r)>c)),{outTop:d,outBottom:u,outLeft:b,outRight:h}},c=e=>{let{outTop:t,outBottom:n,outLeft:a,outRight:r}=s(e),l={};return t||n?(l={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",l.vy)):e.removeAttribute("data-outside-vy"),a||r?(l={...l,vx:r?"right":"left"},e.setAttribute("data-outside-vx",l.vx)):e.removeAttribute("data-outside-vx"),l}},9337:function(e,t,n){"use strict";n.r(t);var a=n(52322),r=n(2784),l=n(70741),o=n(57092),i=n(57884),s=n(57284),c=n(49953),d=n(10326);t.default=()=>{let[e,t]=(0,r.useState)();return(0,r.useEffect)(()=>{e&&setTimeout(()=>t(""),1500)},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{children:"Angular"}),(0,a.jsx)(s.Z,{children:"HTML"}),(0,a.jsx)(s.Z,{children:"React"}),(0,a.jsx)(s.Z,{children:"Vue"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-drawer [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">\n	With padding (Default)\n</db-drawer>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-drawer [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">\n	With padding (Default)\n</db-drawer>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-drawer [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">\n	With padding (Default)\n</db-drawer>'),navigator.clipboard.writeText('<db-drawer [withCloseButton]="true" [open]="openDrawer" (onClose)="toggleDrawer(false)">\n	With padding (Default)\n</db-drawer>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<dialog class="db-drawer" data-backdrop="strong" open>\n  <article class="db-drawer-container">\n    <header class="db-drawer-header">\n      <button\n        class="db-button button-close-drawer is-icon-text-replace"\n        data-icon="close"\n        data-variant="text"\n      >\n        Close Button\n      </button>\n    </header>\n    <div class="db-drawer-content">With padding (Default)</div>\n  </article>\n</dialog>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<dialog class="db-drawer" data-backdrop="strong" open>\n  <article class="db-drawer-container">\n    <header class="db-drawer-header">\n      <button\n        class="db-button button-close-drawer is-icon-text-replace"\n        data-icon="close"\n        data-variant="text"\n      >\n        Close Button\n      </button>\n    </header>\n    <div class="db-drawer-content">With padding (Default)</div>\n  </article>\n</dialog>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<dialog class="db-drawer" data-backdrop="strong" open>\n  <article class="db-drawer-container">\n    <header class="db-drawer-header">\n      <button\n        class="db-button button-close-drawer is-icon-text-replace"\n        data-icon="close"\n        data-variant="text"\n      >\n        Close Button\n      </button>\n    </header>\n    <div class="db-drawer-content">With padding (Default)</div>\n  </article>\n</dialog>'),navigator.clipboard.writeText('<dialog class="db-drawer" data-backdrop="strong" open>\n  <article class="db-drawer-container">\n    <header class="db-drawer-header">\n      <button\n        class="db-button button-close-drawer is-icon-text-replace"\n        data-icon="close"\n        data-variant="text"\n      >\n        Close Button\n      </button>\n    </header>\n    <div class="db-drawer-content">With padding (Default)</div>\n  </article>\n</dialog>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:"<DBDrawer\n  withCloseButton\n  open={open}\n  onClose={() => {\n    setOpen(false)\n  }}\n>\n  With padding (Default)\n</DBDrawer>"})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:"<DBDrawer\n  withCloseButton\n  open={open}\n  onClose={() => {\n    setOpen(false)\n  }}\n>\n  With padding (Default)\n</DBDrawer>"===e?"check":"copy",variant:"ghost",onClick:()=>{t("<DBDrawer\n  withCloseButton\n  open={open}\n  onClose={() => {\n    setOpen(false)\n  }}\n>\n  With padding (Default)\n</DBDrawer>"),navigator.clipboard.writeText("<DBDrawer\n  withCloseButton\n  open={open}\n  onClose={() => {\n    setOpen(false)\n  }}\n>\n  With padding (Default)\n</DBDrawer>")},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBDrawer :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">With padding (Default)</DBDrawer>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBDrawer :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">With padding (Default)</DBDrawer>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBDrawer :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">With padding (Default)</DBDrawer>'),navigator.clipboard.writeText('<DBDrawer :withCloseButton="true" :open="openDrawer" @close="toggleDrawer(false)">With padding (Default)</DBDrawer>')},children:"Copy code"})]})]})}),(0,a.jsx)(l.Z,{className:"tab-container",children:(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(s.Z,{children:"Angular"}),(0,a.jsx)(s.Z,{children:"HTML"}),(0,a.jsx)(s.Z,{children:"React"}),(0,a.jsx)(s.Z,{children:"Vue"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<db-drawer [withCloseButton]="true" width="full" [open]="openDrawer" (onClose)="toggleDrawer(false)">\n	Full\n</db-drawer>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<db-drawer [withCloseButton]="true" width="full" [open]="openDrawer" (onClose)="toggleDrawer(false)">\n	Full\n</db-drawer>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<db-drawer [withCloseButton]="true" width="full" [open]="openDrawer" (onClose)="toggleDrawer(false)">\n	Full\n</db-drawer>'),navigator.clipboard.writeText('<db-drawer [withCloseButton]="true" width="full" [open]="openDrawer" (onClose)="toggleDrawer(false)">\n	Full\n</db-drawer>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-html",children:'<dialog class="db-drawer" width="full" data-backdrop="strong" open>\n  <article class="db-drawer-container">\n    <header class="db-drawer-header">\n      <button\n        class="db-button button-close-drawer is-icon-text-replace"\n        data-icon="close"\n        data-variant="text"\n      >\n        Close Button\n      </button>\n    </header>\n    <div class="db-drawer-content">Full</div>\n  </article>\n</dialog>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<dialog class="db-drawer" width="full" data-backdrop="strong" open>\n  <article class="db-drawer-container">\n    <header class="db-drawer-header">\n      <button\n        class="db-button button-close-drawer is-icon-text-replace"\n        data-icon="close"\n        data-variant="text"\n      >\n        Close Button\n      </button>\n    </header>\n    <div class="db-drawer-content">Full</div>\n  </article>\n</dialog>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<dialog class="db-drawer" width="full" data-backdrop="strong" open>\n  <article class="db-drawer-container">\n    <header class="db-drawer-header">\n      <button\n        class="db-button button-close-drawer is-icon-text-replace"\n        data-icon="close"\n        data-variant="text"\n      >\n        Close Button\n      </button>\n    </header>\n    <div class="db-drawer-content">Full</div>\n  </article>\n</dialog>'),navigator.clipboard.writeText('<dialog class="db-drawer" width="full" data-backdrop="strong" open>\n  <article class="db-drawer-container">\n    <header class="db-drawer-header">\n      <button\n        class="db-button button-close-drawer is-icon-text-replace"\n        data-icon="close"\n        data-variant="text"\n      >\n        Close Button\n      </button>\n    </header>\n    <div class="db-drawer-content">Full</div>\n  </article>\n</dialog>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBDrawer\n  withCloseButton\n  width="full"\n  open={open}\n  onClose={() => {\n    setOpen(false)\n  }}\n>\n  Full\n</DBDrawer>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBDrawer\n  withCloseButton\n  width="full"\n  open={open}\n  onClose={() => {\n    setOpen(false)\n  }}\n>\n  Full\n</DBDrawer>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBDrawer\n  withCloseButton\n  width="full"\n  open={open}\n  onClose={() => {\n    setOpen(false)\n  }}\n>\n  Full\n</DBDrawer>'),navigator.clipboard.writeText('<DBDrawer\n  withCloseButton\n  width="full"\n  open={open}\n  onClose={() => {\n    setOpen(false)\n  }}\n>\n  Full\n</DBDrawer>')},children:"Copy code"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("pre",{children:(0,a.jsx)("code",{className:"hljs language-tsx",children:'<DBDrawer :withCloseButton="true" width="full" :open="openDrawer" @close="toggleDrawer(false)">\n		Full\n	</DBDrawer>'})}),(0,a.jsx)(d.Z,{className:"copy-button",noText:!0,icon:'<DBDrawer :withCloseButton="true" width="full" :open="openDrawer" @close="toggleDrawer(false)">\n		Full\n	</DBDrawer>'===e?"check":"copy",variant:"ghost",onClick:()=>{t('<DBDrawer :withCloseButton="true" width="full" :open="openDrawer" @close="toggleDrawer(false)">\n		Full\n	</DBDrawer>'),navigator.clipboard.writeText('<DBDrawer :withCloseButton="true" width="full" :open="openDrawer" @close="toggleDrawer(false)">\n		Full\n	</DBDrawer>')},children:"Copy code"})]})]})})]})}}},function(e){e.O(0,[92888,49774,40179],function(){return e(e.s=91384)}),_N_E=e.O()}]);