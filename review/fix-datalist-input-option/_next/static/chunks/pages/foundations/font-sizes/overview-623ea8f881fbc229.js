(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82089],{4470:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/font-sizes/overview",function(){return n(8203)}])},10326:function(t,e,n){"use strict";var r=n(52322),a=n(2784),i=n(43251);let l=(0,a.forwardRef)(function(t,e){let n=e||(0,a.useRef)(e);return(0,r.jsx)("button",{ref:n,...(0,i.mS)(t,[]),id:t.id,className:(0,i.yI)("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:e=>{t.onClick&&t.onClick(e)},children:t.children})});e.Z=l},55482:function(t,e,n){"use strict";var r,a,i,l,s,o,u;n.d(e,{IY:function(){return c},YP:function(){return d},ce:function(){return _}});let c="OVERWRITE_DEFAULT_ID",d="Back",_="Close Button";(s=r||(r={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(r).map(t=>{let[,e]=t;return e}),(a||(a={})).PRIMARY="primary",(o=i||(i={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",o.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",o.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",o.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",o.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",o.BRAND_BG_LEVEL_1="brand-bg-lvl-1",o.BRAND_BG_LEVEL_2="brand-bg-lvl-2",o.BRAND_BG_LEVEL_3="brand-bg-lvl-3",o.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",o.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",o.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",o.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",o.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",o.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",o.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",o.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",o.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",o.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",o.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",o.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",o.WARNING_BG_LEVEL_1="warning-bg-lvl-1",o.WARNING_BG_LEVEL_2="warning-bg-lvl-2",o.WARNING_BG_LEVEL_3="warning-bg-lvl-3",o.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",o.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",o.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",o.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",o.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",o.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",o.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(i).map(t=>{let[,e]=t;return e}),Object.entries(a).map(t=>{let[,e]=t;return e}),(u=l||(l={})).CRITICAL="critical",u.INFORMATIONAL="informational",u.WARNING="warning",u.SUCCESSFUL="successful",Object.entries(l).map(t=>{let[,e]=t;return e})},43251:function(t,e,n){"use strict";n.d(e,{Lp:function(){return u},Vj:function(){return r},mS:function(){return s},yI:function(){return i},yn:function(){return a}});let r=()=>{var t,e;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(t,e)=>{Object.values(t.children).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&a(t,e)})},i=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];let r="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)r+="".concat(t," ");else for(let e in t)t[e]&&(r+="".concat(e," "))}}),r.trim()},l=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],s=(t,e)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||l.includes(t))&&!e.includes(t)).reduce((e,n)=>(e[n]=t[n],e),{}),o=t=>{var e;let{top:n,bottom:r,left:a,right:i,height:l,width:s}=t.getBoundingClientRect(),{innerHeight:o,innerWidth:u}=window,c=n<0,d=r>o,_=a<0,E=i>u,b=t.hasAttribute("data-outside-vy"),A=t.hasAttribute("data-outside-vx"),L=null==t?void 0:null===(e=t.parentElement)||void 0===e?void 0:e.getBoundingClientRect();return L&&(b&&("top"===t.getAttribute("data-outside-vy")?c=L.top-(r-L.bottom)<0:d=L.bottom+(L.top-n)>o),A&&("left"===t.getAttribute("data-outside-vx")?_=L.left-(i-L.right)<0:E=L.right+(L.left-a)>u)),{outTop:c,outBottom:d,outLeft:_,outRight:E}},u=t=>{let{outTop:e,outBottom:n,outLeft:r,outRight:a}=o(t),i={};return e||n?(i={vy:e?"top":"bottom"},t.setAttribute("data-outside-vy",i.vy)):t.removeAttribute("data-outside-vy"),r||a?(i={...i,vx:a?"right":"left"},t.setAttribute("data-outside-vx",i.vx)):t.removeAttribute("data-outside-vx"),i}},8203:function(t,e,n){"use strict";n.r(e);var r=n(52322),a=n(55216),i=n(12480);e.default=()=>(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h1",{children:"FontsSizes Overview"}),(0,r.jsx)("h2",{children:"Body"}),(0,r.jsx)(i.EZ,{semantic:"warning",children:"Some font-sizes are the same for a specific device type. For example in mobile all `xl` sizes are the same."}),(0,r.jsx)("div",{children:["3xl","2xl","xl","lg","md","sm","xs","2xs","3xs"].map(t=>(0,r.jsxs)("p",{className:"db-font-size-".concat(t),children:["I am size: ",(0,r.jsx)("strong",{children:t})]}))})]})}},function(t){t.O(0,[49710,55216,92888,49774,40179],function(){return t(t.s=4470)}),_N_E=t.O()}]);