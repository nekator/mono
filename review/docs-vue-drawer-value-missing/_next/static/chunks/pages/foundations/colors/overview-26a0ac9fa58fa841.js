(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14643],{16095:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors/overview",function(){return n(91194)}])},10326:function(e,t,n){"use strict";var r=n(52322),a=n(2784),i=n(43251);let s=(0,a.forwardRef)(function(e,t){let n=t||(0,a.useRef)(t);return(0,r.jsx)("button",{ref:n,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=s},55482:function(e,t,n){"use strict";var r,a,i,s,l,c,o;n.d(t,{IY:function(){return u},YP:function(){return d},ce:function(){return N}});let u="OVERWRITE_DEFAULT_ID",d="Back",N="Close Button";(l=r||(r={})).FUNCTIONAL="functional",l.REGULAR="regular",l.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,t]=e;return t}),(a||(a={})).PRIMARY="primary",(c=i||(i={})).BASE="base",c.BASE_STRONG="base-strong",c.BASE_TRANSPARENT_SEMI="base-transparent-semi",c.BASE_TRANSPARENT_FULL="base-transparent-full",c.NEUTRAL="neutral",c.NEUTRAL_STRONG="neutral-strong",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.BRAND="brand",c.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",c.BRAND_TRANSPARENT_FULL="brand-transparent-full",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.WARNING="warning",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(i).map(e=>{let[,t]=e;return t}),Object.entries(a).map(e=>{let[,t]=e;return t}),(o=s||(s={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(s).map(e=>{let[,t]=e;return t})},43251:function(e,t,n){"use strict";n.d(t,{MN:function(){return o},Vj:function(){return r},cd:function(){return c},mS:function(){return l},yI:function(){return i},yn:function(){return a}});let r=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&a(e,t)})},i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let t in e)e[t]&&(r+="".concat(t," "))}}),r.trim()},s=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],l=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||s.includes(e))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}),c=e=>{let{left:t,right:n}=e.getBoundingClientRect(),{innerWidth:r}=window;return t>=0&&n<=r},o=e=>{let{top:t,bottom:n}=e.getBoundingClientRect(),{innerHeight:r}=window;return t>=0&&n<=r}},91194:function(e,t,n){"use strict";n.r(t);var r=n(52322),a=n(2784),i=n(22116),s=n(15859),l=n(71950);t.default=()=>{let[e,t]=(0,a.useState)("");return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h1",{children:"Color Overview"}),(0,r.jsx)("search",{children:(0,r.jsx)(l.aq,{label:"Search",type:"search",onChange:e=>{t(e.target.value)}})}),(0,r.jsx)("h2",{children:"Overview"}),(0,r.jsx)("div",{className:"color-overview-container",children:s.DM.filter(t=>t.includes(e)&&!t.includes("-strong")).map(e=>(0,r.jsx)("div",{className:"db-bg-".concat(e),children:e}))})]})}}},function(e){e.O(0,[49710,22116,92888,49774,40179],function(){return e(e.s=16095)}),_N_E=e.O()}]);