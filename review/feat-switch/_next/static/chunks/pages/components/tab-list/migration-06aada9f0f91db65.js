(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6491],{67452:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab-list/migration",function(){return n(67741)}])},47865:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var r=n(52322),a=n(45392);function i(t){let e={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",...(0,a.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(e.p,{children:"New Component \uD83E\uDD73"})]})}function l(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(i,{...t})}):i(t)}},67741:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(52322),a=n(45392),i=n(55216),l=n(47865);let s=t=>{let{children:e}=t;return(0,r.jsx)(i.Z,{children:e})};function o(t){let e={h1:"h1",...(0,a.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"dbtablist-migration",children:"DBTabList Migration"}),"\n",(0,r.jsx)(l.default,{})]})}function u(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(s,{...t,children:(0,r.jsx)(o,{...t})})}},10326:function(t,e,n){"use strict";var r=n(52322),a=n(2784),i=n(43251);let l=(0,a.forwardRef)(function(t,e){let n=e||(0,a.useRef)(e);return(0,r.jsx)("button",{ref:n,...(0,i.mS)(t,[]),id:t.id,className:(0,i.yI)("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:e=>{t.onClick&&t.onClick(e)},children:t.children})});e.Z=l},55482:function(t,e,n){"use strict";var r,a,i,l,s,o,u;n.d(e,{IY:function(){return c},YP:function(){return d},ce:function(){return _}});let c="OVERWRITE_DEFAULT_ID",d="Back",_="Close Button";(s=r||(r={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(r).map(t=>{let[,e]=t;return e}),(a||(a={})).PRIMARY="primary",(o=i||(i={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",o.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",o.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",o.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",o.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",o.BRAND_BG_LEVEL_1="brand-bg-lvl-1",o.BRAND_BG_LEVEL_2="brand-bg-lvl-2",o.BRAND_BG_LEVEL_3="brand-bg-lvl-3",o.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",o.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",o.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",o.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",o.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",o.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",o.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",o.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",o.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",o.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",o.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",o.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",o.WARNING_BG_LEVEL_1="warning-bg-lvl-1",o.WARNING_BG_LEVEL_2="warning-bg-lvl-2",o.WARNING_BG_LEVEL_3="warning-bg-lvl-3",o.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",o.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",o.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",o.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",o.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",o.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",o.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(i).map(t=>{let[,e]=t;return e}),Object.entries(a).map(t=>{let[,e]=t;return e}),(u=l||(l={})).CRITICAL="critical",u.INFORMATIONAL="informational",u.WARNING="warning",u.SUCCESSFUL="successful",Object.entries(l).map(t=>{let[,e]=t;return e})},43251:function(t,e,n){"use strict";n.d(e,{Lp:function(){return u},Vj:function(){return r},mS:function(){return s},yI:function(){return i},yn:function(){return a}});let r=()=>{var t,e;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(t,e)=>{Object.values(t.children).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&a(t,e)})},i=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];let r="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)r+="".concat(t," ");else for(let e in t)t[e]&&(r+="".concat(e," "))}}),r.trim()},l=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],s=(t,e)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||l.includes(t))&&!e.includes(t)).reduce((e,n)=>(e[n]=t[n],e),{}),o=t=>{var e;let{top:n,bottom:r,left:a,right:i,height:l,width:s}=t.getBoundingClientRect(),{innerHeight:o,innerWidth:u}=window,c=n<0,d=r>o,_=a<0,b=i>u,E=t.hasAttribute("data-outside-vy"),L=t.hasAttribute("data-outside-vx"),A=null==t?void 0:null===(e=t.parentElement)||void 0===e?void 0:e.getBoundingClientRect();return A&&(E&&("top"===t.getAttribute("data-outside-vy")?c=A.top-(r-A.bottom)<0:d=A.bottom+(A.top-n)>o),L&&("left"===t.getAttribute("data-outside-vx")?_=A.left-(i-A.right)<0:b=A.right+(A.left-a)>u)),{outTop:c,outBottom:d,outLeft:_,outRight:b}},u=t=>{let{outTop:e,outBottom:n,outLeft:r,outRight:a}=o(t),i={};return e||n?(i={vy:e?"top":"bottom"},t.setAttribute("data-outside-vy",i.vy)):t.removeAttribute("data-outside-vy"),r||a?(i={...i,vx:a?"right":"left"},t.setAttribute("data-outside-vx",i.vx)):t.removeAttribute("data-outside-vx"),i}}},function(t){t.O(0,[49710,55216,92888,49774,40179],function(){return t(t.s=67452)}),_N_E=t.O()}]);