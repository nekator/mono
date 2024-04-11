"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14863],{16134:function(e,t,n){var a=n(52322),r=n(2784),i=n(13776);let l=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsx)("button",{ref:n,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=l},9513:function(e,t,n){var a=n(52322),r=n(2784),i=n(13776);let l=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsxs)("div",{ref:n,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-card",e.className),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:t=>{e.onClick&&e.onClick(t)},children:[e.imgSrc?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});t.Z=l},95696:function(e,t,n){var a=n(52322),r=n(2784),i=n(13776),l=n(63900);let s=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[s,c]=(0,r.useState)(()=>l.IY);return(0,a.jsx)("div",{role:"tablist",ref:n,...(0,i.mS)(e,[]),id:s,className:(0,i.yI)("db-tab-list",e.className),children:(0,a.jsx)("ul",{children:e.children})})});t.Z=s},16909:function(e,t,n){var a=n(52322),r=n(2784),i=n(13776),l=n(63900);let s=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[s,c]=(0,r.useState)(()=>l.IY);return(0,r.useEffect)(()=>{},[]),(0,a.jsxs)("article",{role:"tabpanel",ref:n,...(0,i.mS)(e,[]),className:(0,i.yI)("db-tab-panel",e.className),id:s,children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.children]})});t.Z=s},79041:function(e,t,n){var a=n(52322),r=n(2784),i=n(13776),l=n(63900);let s=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t),[s,c]=(0,r.useState)(()=>l.IY),[o,u]=(0,r.useState)(()=>!1);return(0,r.useEffect)(()=>{u(!0)},[]),(0,r.useEffect)(()=>{e.active&&o&&(n.current.click(),u(!1))},[n.current,o]),(0,a.jsx)("li",{role:"tab",className:(0,i.yI)("db-tab",e.className),children:(0,a.jsxs)("label",{htmlFor:s,"data-icon":e.icon,"data-icon-after":e.iconAfter,className:(0,i.yI)({"is-icon-text-replace":e.noText}),children:[(0,a.jsx)("input",{type:"radio",disabled:e.disabled,ref:n,...(0,i.mS)(e,[]),id:s}),e.label?(0,a.jsx)(a.Fragment,{children:e.label}):null,e.children]})})});t.Z=s},33878:function(e,t,n){var a=n(52322),r=n(2784),i=n(13776),l=n(16134),s=n(95696),c=n(79041),o=n(16909),u=n(63900);let d=(0,r.forwardRef)(function(e,t){var n,d,f,b;let m=t||(0,r.useRef)(t),[N,h]=(0,r.useState)(()=>u.IY),[A,R]=(0,r.useState)(()=>""),[S,p]=(0,r.useState)(()=>!1),[E,v]=(0,r.useState)(()=>!1),[g,I]=(0,r.useState)(()=>!1),[T,y]=(0,r.useState)(()=>null);function x(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}function _(e){let t=e.scrollWidth>e.clientWidth;v(t&&e.scrollLeft>1),I(t&&e.scrollLeft<e.scrollWidth-e.clientWidth)}function C(t){let n=e.arrowScrollDistance||100;t&&(n*=-1),null==T||T.scrollBy({top:0,left:n,behavior:"smooth"})}return(0,r.useEffect)(()=>{h(e.id||"tabs-"+(0,i.Vj)()),R(e.name||(0,i.Vj)()),p(!0)},[]),(0,r.useEffect)(()=>{if(m.current&&S){let t=m.current.getElementsByClassName("db-tab-list");if((null==t?void 0:t.length)>0){let n=t.item(0);if(n){if("arrows"===e.behaviour){let e=n.querySelector("ul");y(e),_(e),e.addEventListener("scroll",()=>{_(e)})}let t=n.getElementsByClassName("db-tab");(null==t?void 0:t.length)>0&&Array.from(t).forEach((t,n)=>{let a=t.querySelector("label"),r=t.querySelector("input");if(r&&a){if(r.id===u.IY){let e="".concat(A,"-tab-").concat(n);a.setAttribute("for",e),a.setAttribute("aria-controls","".concat(A,"-tab-panel-").concat(n)),r.id=e,r.setAttribute("name",A)}let t=!e.initialSelectedMode||"auto"===e.initialSelectedMode,i=void 0===e.initialSelectedIndex&&0===n||e.initialSelectedIndex===n;t&&i&&r.click()}})}}let n=m.current.getElementsByClassName("db-tab-panel");(null==n?void 0:n.length)>0&&Array.from(n).forEach((e,t)=>{e.id===u.IY&&(e.id="".concat(A,"-tab-panel-").concat(t),e.setAttribute("aria-labelledby","".concat(A,"-tab-").concat(t)))}),p(!1)}},[m.current,S]),(0,a.jsxs)("div",{ref:m,...(0,i.mS)(e,[]),id:N,className:(0,i.yI)("db-tabs",e.className),"data-orientation":e.orientation,"data-scroll-behaviour":e.behaviour,"data-alignment":null!==(f=e.alignment)&&void 0!==f?f:"start","data-width":null!==(b=e.width)&&void 0!==b?b:"auto",children:[E?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.Z,{variant:"text",icon:"chevron_left",className:"tabs-scroll-left",noText:!0,onClick:e=>C(!0),children:"Scroll left"})}):null,e.tabs?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{children:null===(n=x(e.tabs))||void 0===n?void 0:n.map((t,n)=>(0,a.jsx)(c.Z,{active:t.active,label:t.label,iconAfter:t.iconAfter,icon:t.icon,noText:t.noText},e.name+"tab"+n))}),null===(d=x(e.tabs))||void 0===d?void 0:d.map((t,n)=>(0,a.jsx)(o.Z,{content:t.content,children:t.children},e.name+"tab-panel"+n))]}):null,g?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.Z,{variant:"text",icon:"chevron_right",className:"tabs-scroll-right",noText:!0,onClick:e=>C(),children:"Scroll right"})}):null,e.children]})});t.Z=d},63900:function(e,t,n){var a,r,i,l,s,c,o;n.d(t,{IY:function(){return u},YP:function(){return d},ce:function(){return f}});let u="OVERWRITE_DEFAULT_ID",d="Back",f="Close Button";(s=a||(a={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(a).map(e=>{let[,t]=e;return t}),(r||(r={})).PRIMARY="primary",(c=i||(i={})).BASE="base",c.BASE_STRONG="base-strong",c.BASE_TRANSPARENT_SEMI="base-transparent-semi",c.BASE_TRANSPARENT_FULL="base-transparent-full",c.NEUTRAL="neutral",c.NEUTRAL_STRONG="neutral-strong",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.BRAND="brand",c.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",c.BRAND_TRANSPARENT_FULL="brand-transparent-full",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.WARNING="warning",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(i).map(e=>{let[,t]=e;return t}),Object.entries(r).map(e=>{let[,t]=e;return t}),(o=l||(l={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,t]=e;return t})},13776:function(e,t,n){n.d(t,{MN:function(){return o},Vj:function(){return a},cd:function(){return c},mS:function(){return s},yI:function(){return i},yn:function(){return r}});let a=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&r(e,t)})},i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let a="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let t in e)e[t]&&(a+="".concat(t," "))}}),a.trim()},l=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],s=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||l.includes(e))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}),c=e=>{let{left:t,right:n}=e.getBoundingClientRect(),{innerWidth:a}=window;return t>=0&&n<=a},o=e=>{let{top:t,bottom:n}=e.getBoundingClientRect(),{innerHeight:a}=window;return t>=0&&n<=a}}}]);