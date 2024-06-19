"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50231],{70741:function(e,t,a){var n=a(52322),l=a(2784),i=a(43251);let r=(0,l.forwardRef)(function(e,t){let a=t||(0,l.useRef)(t);return(0,n.jsx)("div",{ref:a,...(0,i.mS)(e,[]),id:e.id,"data-behaviour":e.behaviour,"data-elevation-level":e.elevationLevel,"data-spacing":e.spacing,role:"interactive"===e.behaviour?"button":void 0,tabIndex:"interactive"===e.behaviour?0:void 0,onClick:t=>{e.onClick&&e.onClick(t)},className:(0,i.yI)("db-card",e.className),children:e.children})});t.Z=r},50350:function(e,t,a){var n=a(52322),l=a(2784),i=a(43251),r=a(55482);let c=(0,l.forwardRef)(function(e,t){let a=t||(0,l.useRef)(t),[c,o]=(0,l.useState)(()=>r.IY);return(0,n.jsxs)("a",{ref:a,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-link",e.className),href:e.href,target:e.target,rel:e.rel,role:e.role,hrefLang:e.hreflang,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:t=>{e.onClick&&e.onClick(t)},children:[e.text?(0,n.jsx)("span",{children:e.text}):null,e.children]})});t.Z=c},57284:function(e,t,a){var n=a(52322),l=a(2784),i=a(43251);let r=(0,l.forwardRef)(function(e,t){let a=t||(0,l.useRef)(t),[r,c]=(0,l.useState)(()=>!1),[o,s]=(0,l.useState)(()=>!1);return(0,l.useEffect)(()=>{c(!0)},[]),(0,l.useEffect)(()=>{e.active&&r&&a.current&&(a.current.click(),c(!1))},[a.current,r]),(0,n.jsx)("li",{role:"none",className:(0,i.yI)("db-tab-item",e.className),children:(0,n.jsxs)("label",{htmlFor:e.id,"data-icon":e.icon,"data-icon-after":e.iconAfter,"data-no-text":e.noText,children:[(0,n.jsx)("input",{type:"radio",role:"tab",disabled:e.disabled,"aria-selected":o,"aria-controls":e.controls,checked:e.checked,ref:a,...(0,i.mS)(e,[]),id:e.id,onChange:t=>{var a;e.onChange&&e.onChange(t),e.change&&e.change(t),s(null===(a=t.target)||void 0===a?void 0:a.checked)}}),e.label?(0,n.jsx)(n.Fragment,{children:e.label}):null,e.children]})})});t.Z=r},57884:function(e,t,a){var n=a(52322),l=a(2784),i=a(43251),r=a(55482);let c=(0,l.forwardRef)(function(e,t){let a=t||(0,l.useRef)(t),[c,o]=(0,l.useState)(()=>r.IY);return(0,l.useEffect)(()=>{o(e.id||"tab-list-"+(0,i.Vj)())},[]),(0,n.jsx)("div",{ref:a,...(0,i.mS)(e,[]),id:c,className:(0,i.yI)("db-tab-list",e.className),children:(0,n.jsx)("ul",{role:"tablist",children:e.children})})});t.Z=c},49953:function(e,t,a){var n=a(52322),l=a(2784),i=a(43251);let r=(0,l.forwardRef)(function(e,t){let a=t||(0,l.useRef)(t);return(0,l.useEffect)(()=>{},[]),(0,n.jsxs)("section",{role:"tabpanel",ref:a,...(0,i.mS)(e,[]),className:(0,i.yI)("db-tab-panel",e.className),id:e.id,"aria-labelledby":e.labelledBy,children:[e.content?(0,n.jsx)(n.Fragment,{children:e.content}):null,e.children]})});t.Z=r},57092:function(e,t,a){var n=a(52322),l=a(2784),i=a(43251),r=a(10326),c=a(57884),o=a(57284),s=a(49953);let d=(0,l.forwardRef)(function(e,t){var a,d,u,f;let h=t||(0,l.useRef)(t),[b,v]=(0,l.useState)(()=>"tabs-"+(0,i.Vj)()),[m,x]=(0,l.useState)(()=>""),[j,p]=(0,l.useState)(()=>!1),[g,N]=(0,l.useState)(()=>!1),[S,y]=(0,l.useState)(()=>!1),[w,k]=(0,l.useState)(()=>null);function C(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}function E(e){let t=e.scrollWidth>e.clientWidth;N(t&&e.scrollLeft>1),y(t&&e.scrollLeft<e.scrollWidth-e.clientWidth)}function I(t){let a=e.arrowScrollDistance||100;t&&(a*=-1),null==w||w.scrollBy({top:0,left:a,behavior:"smooth"})}function R(){if(null==h?void 0:h.current){let t=h.current.querySelector(".db-tab-list");if(t){let a=t.querySelector('[role="tablist"]');a.setAttribute("aria-orientation",e.orientation||"horizontal"),"arrows"===e.behaviour&&(k(a),E(a),a.addEventListener("scroll",()=>{E(a)}))}}}function Z(t){if(h.current){let a=h.current.getElementsByClassName("db-tab-item");(null==a?void 0:a.length)>0&&Array.from(a).forEach((a,n)=>{let l=a.querySelector("label"),i=a.querySelector("input");if(i&&l){if(!i.id){let e="".concat(m,"-tab-").concat(n);l.setAttribute("for",e),i.setAttribute("aria-controls","".concat(m,"-tab-panel-").concat(n)),i.id=e,i.setAttribute("name",m)}if(t){let t=!e.initialSelectedMode||"auto"===e.initialSelectedMode,a=(void 0===e.initialSelectedIndex||null===e.initialSelectedIndex)&&0===n||e.initialSelectedIndex===n;t&&a&&i.click()}}});let n=h.current.getElementsByClassName("db-tab-panel");(null==n?void 0:n.length)>0&&Array.from(n).forEach((e,t)=>{e.id||(e.id="".concat(m,"-tab-panel-").concat(t),e.setAttribute("aria-labelledby","".concat(m,"-tab-").concat(t)))})}}return(0,l.useEffect)(()=>{v(e.id||b),x(e.name||(0,i.Vj)()),p(!0)},[]),(0,l.useEffect)(()=>{if(h.current&&j){R(),Z(!0);let e=h.current.querySelector(".db-tab-list");e&&new MutationObserver(e=>{e.forEach(e=>{(e.removedNodes.length||e.addedNodes.length)&&(R(),Z())})}).observe(e,{childList:!0,subtree:!0}),p(!1)}},[h.current,j]),(0,n.jsxs)("div",{ref:h,...(0,i.mS)(e,[]),id:b,className:(0,i.yI)("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behaviour":e.behaviour,"data-alignment":null!==(u=e.alignment)&&void 0!==u?u:"start","data-width":null!==(f=e.width)&&void 0!==f?f:"auto",children:[g?(0,n.jsx)(r.Z,{variant:"ghost",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:e=>I(!0),children:"Scroll left"}):null,e.tabs?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{children:null===(a=C(e.tabs))||void 0===a?void 0:a.map((t,a)=>(0,n.jsx)(o.Z,{active:t.active,label:t.label,iconAfter:t.iconAfter,icon:t.icon,noText:t.noText},e.name+"tab-item"+a))}),null===(d=C(e.tabs))||void 0===d?void 0:d.map((t,a)=>(0,n.jsx)(s.Z,{content:t.content,children:t.children},e.name+"tab-panel"+a))]}):null,S?(0,n.jsx)(r.Z,{variant:"ghost",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:e=>I(),children:"Scroll right"}):null,e.children]})});t.Z=d},45016:function(e,t,a){a.d(t,{P:function(){return n}});let n=(e,t,a)=>e.map((e,n)=>{var l;return{...e,slotCode:null!==(l=null==a?void 0:a.at(n))&&void 0!==l?l:"No code available",examples:e.examples.map(e=>{var a,n,l,i;return{...e,example:t({...e.props,id:null!==(l=null===(a=e.props)||void 0===a?void 0:a.id)&&void 0!==l?l:e.name,children:null!==(i=null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==i?i:e.name})}})}})},47439:function(e,t,a){var n=a(52322),l=a(5632),i=a(2784),r=a(97335),c=a(12480);let o=e=>{let{examples:t,slotCode:a}=e,[l,r]=(0,i.useState)();return(0,n.jsxs)(c.f,{className:"variants-card db-code-docs",children:[(0,n.jsx)("div",{className:"variants-list",children:t.map((e,t)=>(0,n.jsx)("div",{style:e.style,className:e.className,children:e.example},"".concat(e.name,"-").concat(t)))}),(0,n.jsxs)("details",{className:"code-details",onToggle:()=>{r(!l)},children:[(0,n.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"filled",children:l?"Hide code":"Show code"}),(0,n.jsxs)("div",{className:"db-density-functional",children:[(0,n.jsx)("div",{className:"backdrop"}),(0,n.jsx)(c.f,{className:"code",spacing:"small",children:a})]})]})]})},s=e=>{let{variants:t,componentName:a}=e,l=(e,t)=>{if(!window.location.origin||!window.location.href)return"";let a=window.location.href.split("?")[0],n="?page=".concat(e.name.toLowerCase());return t?"".concat(a.split("components")[0],"/components/").concat(t).concat(n):"".concat(a).concat(n)};return(0,n.jsx)(n.Fragment,{children:null==t?void 0:t.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsx)(c.oH,{}),(0,n.jsx)("h2",{children:(0,n.jsx)(c.vB,{content:"external",target:"_blank",href:l(e,a),children:e.name})}),(0,n.jsx)(o,{...e})]},"".concat(e.name,"-").concat(t)))})};t.Z=e=>{let{title:t,variants:a,subComponent:c,isSubComponent:d,componentName:u}=e,[f,h]=(0,i.useState)(),b=(0,l.useRouter)();return(0,i.useEffect)(()=>{if(b.query){var e;let t=null===(e=b.query.page)||void 0===e?void 0:e.toString();t&&h(a.find(e=>e.name.toLowerCase()===t))}},[b]),(0,n.jsxs)(n.Fragment,{children:[f&&(0,n.jsx)("div",{children:(0,n.jsx)(o,{...f})}),!f&&!d&&(0,n.jsxs)(r.Z,{children:[(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h1",{children:t}),(0,n.jsx)(s,{variants:a,componentName:u})]}),c]}),!f&&d&&(0,n.jsxs)("div",{className:"default-container",children:[(0,n.jsx)("h2",{children:t}),(0,n.jsx)(s,{variants:a,componentName:u})]})]})}}}]);