(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14643],{16095:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors/overview",function(){return n(87431)}])},16134:function(t,e,n){"use strict";var r=n(52322),a=n(2784),i=n(13776);let l=(0,a.forwardRef)(function(t,e){let n=e||(0,a.useRef)(e);return(0,r.jsx)("button",{ref:n,...(0,i.mS)(t,[]),id:t.id,className:(0,i.yI)("db-button",t.className),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,"data-no-text":t.noText,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:e=>{t.onClick&&t.onClick(e)},children:t.children})});e.Z=l},63900:function(t,e,n){"use strict";var r,a,i,l,s,c,u;n.d(e,{IY:function(){return o},YP:function(){return _},ce:function(){return d}});let o="OVERWRITE_DEFAULT_ID",_="Back",d="Close Button";(s=r||(r={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(r).map(t=>{let[,e]=t;return e}),(a||(a={})).PRIMARY="primary",(c=i||(i={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",c.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",c.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",c.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",c.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",c.BRAND_BG_LEVEL_1="brand-bg-lvl-1",c.BRAND_BG_LEVEL_2="brand-bg-lvl-2",c.BRAND_BG_LEVEL_3="brand-bg-lvl-3",c.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",c.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",c.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",c.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",c.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",c.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",c.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",c.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",c.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",c.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",c.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",c.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",c.WARNING_BG_LEVEL_1="warning-bg-lvl-1",c.WARNING_BG_LEVEL_2="warning-bg-lvl-2",c.WARNING_BG_LEVEL_3="warning-bg-lvl-3",c.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",c.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",c.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",c.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",c.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",c.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",c.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(i).map(t=>{let[,e]=t;return e}),Object.entries(a).map(t=>{let[,e]=t;return e}),(u=l||(l={})).CRITICAL="critical",u.INFORMATIONAL="informational",u.WARNING="warning",u.SUCCESSFUL="successful",Object.entries(l).map(t=>{let[,e]=t;return e})},13776:function(t,e,n){"use strict";n.d(e,{MN:function(){return u},Vj:function(){return r},cd:function(){return c},mS:function(){return s},yI:function(){return i},yn:function(){return a}});let r=()=>{var t,e;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(t,e)=>{Object.values(t.children).forEach(t=>{t.setAttribute(e.key,e.value),t.children.length>0&&a(t,e)})},i=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];let r="";return e.forEach((t,e)=>{if(t){if("string"==typeof t)r+="".concat(t," ");else for(let e in t)t[e]&&(r+="".concat(e," "))}}),r.trim()},l=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],s=(t,e)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||l.includes(t))&&!e.includes(t)).reduce((e,n)=>(e[n]=t[n],e),{}),c=t=>{let{left:e,right:n}=t.getBoundingClientRect(),{innerWidth:r}=window;return e>=0&&n<=r},u=t=>{let{top:e,bottom:n}=t.getBoundingClientRect(),{innerHeight:r}=window;return e>=0&&n<=r}},87431:function(t,e,n){"use strict";n.r(e);var r=n(52322),a=n(2784),i=n(19451),l=n(65982),s=n(25642);e.default=()=>{let[t,e]=(0,a.useState)("");return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h1",{children:"Color Overview"}),(0,r.jsx)("search",{children:(0,r.jsx)(s.aq,{label:"Search",type:"search",onChange:t=>{e(t.target.value)}})}),(0,r.jsx)("h2",{children:"Overview"}),(0,r.jsx)("div",{className:"color-overview-container",children:l.DM.map(t=>(0,r.jsx)("div",{className:"db-".concat(t),children:t}))})]})}}},function(t){t.O(0,[49710,19451,92888,49774,40179],function(){return t(t.s=16095)}),_N_E=t.O()}]);