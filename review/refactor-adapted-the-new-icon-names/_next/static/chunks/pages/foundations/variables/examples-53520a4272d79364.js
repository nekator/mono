(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25649],{50885:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/variables/examples",function(){return n(45547)}])},10326:function(e,t,n){"use strict";var i=n(52322),a=n(2784),r=n(43251);let s=(0,a.forwardRef)(function(e,t){let n=t||(0,a.useRef)(t);return(0,i.jsx)("button",{ref:n,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=s},55482:function(e,t,n){"use strict";var i,a,r,s,l,c,o;n.d(t,{IY:function(){return d},YP:function(){return u},ce:function(){return _}});let d="OVERWRITE_DEFAULT_ID",u="Back",_="Close Button";(l=i||(i={})).FUNCTIONAL="functional",l.REGULAR="regular",l.EXPRESSIVE="expressive",Object.entries(i).map(e=>{let[,t]=e;return t}),(a||(a={})).PRIMARY="primary",(c=r||(r={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",c.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",c.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",c.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",c.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",c.BRAND_BG_LEVEL_1="brand-bg-lvl-1",c.BRAND_BG_LEVEL_2="brand-bg-lvl-2",c.BRAND_BG_LEVEL_3="brand-bg-lvl-3",c.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",c.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",c.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",c.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",c.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",c.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",c.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",c.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",c.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",c.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",c.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",c.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",c.WARNING_BG_LEVEL_1="warning-bg-lvl-1",c.WARNING_BG_LEVEL_2="warning-bg-lvl-2",c.WARNING_BG_LEVEL_3="warning-bg-lvl-3",c.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",c.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",c.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",c.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",c.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",c.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",c.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(r).map(e=>{let[,t]=e;return t}),Object.entries(a).map(e=>{let[,t]=e;return t}),(o=s||(s={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(s).map(e=>{let[,t]=e;return t})},43251:function(e,t,n){"use strict";n.d(t,{Lp:function(){return o},Vj:function(){return i},mS:function(){return l},yI:function(){return r},yn:function(){return a}});let i=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&a(e,t)})},r=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let i="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)i+="".concat(e," ");else for(let t in e)e[t]&&(i+="".concat(t," "))}}),i.trim()},s=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],l=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||s.includes(e))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}),c=e=>{var t;let{top:n,bottom:i,left:a,right:r,height:s,width:l}=e.getBoundingClientRect(),{innerHeight:c,innerWidth:o}=window,d=n<0,u=i>c,_=a<0,E=r>o,b=e.hasAttribute("data-outside-vy"),g=e.hasAttribute("data-outside-vx"),p=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return p&&(b&&("top"===e.getAttribute("data-outside-vy")?d=p.top-(i-p.bottom)<0:u=p.bottom+(p.top-n)>c),g&&("left"===e.getAttribute("data-outside-vx")?_=p.left-(r-p.right)<0:E=p.right+(p.left-a)>o)),{outTop:d,outBottom:u,outLeft:_,outRight:E}},o=e=>{let{outTop:t,outBottom:n,outLeft:i,outRight:a}=c(e),r={};return t||n?(r={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",r.vy)):e.removeAttribute("data-outside-vy"),i||a?(r={...r,vx:a?"right":"left"},e.setAttribute("data-outside-vx",r.vx)):e.removeAttribute("data-outside-vx"),r}},45547:function(e,t,n){"use strict";n.r(t);var i=n(52322),a=n(55216),r=n(2926),s=n(89426),l=n(62594),c=n(46823);t.default=()=>(0,i.jsxs)(a.Z,{children:[(0,i.jsx)("h1",{children:"Variable Examples"}),(0,i.jsx)("blockquote",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:'Some of the variables are "missused" to visualize the effect of e.g. a padding.'}),(0,i.jsx)("li",{children:"All orange containers should symbolize the used variable."}),(0,i.jsx)("li",{children:"Don't use it like this in a real app. \uD83D\uDCA2For example `width: var(--db-spacing-fixed-md)`\uD83D\uDCA5"})]})}),["Spacing fixed","Spacing responsive","Sizing"].map(e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:e}),(0,i.jsx)("div",{className:"example-container",children:["functional","regular","expressive"].map(t=>(0,i.jsxs)(s.f,{className:"example-item db-density-".concat(t),spacing:"small",children:[(0,i.jsx)(r.E,{icon:"none",semantic:"informational",children:t.charAt(0).toUpperCase()+t.slice(1)}),(0,i.jsxs)("div",{className:"example-".concat(e.toLowerCase().replaceAll(" ","-")),children:["Spacing fixed"===e&&(0,i.jsxs)("div",{children:[(0,i.jsx)(l.P,{icon:"user",children:"User"}),(0,i.jsx)("span",{children:"gap:db-spacing-fixed-xl"}),(0,i.jsx)(l.P,{icon:"edit",children:"Edit"}),(0,i.jsx)("div",{className:"gap1",children:"xl"}),(0,i.jsx)("div",{className:"gap2",children:"xl"})]}),"Spacing responsive"===e&&(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"margin1",children:"sm"}),(0,i.jsx)("span",{children:"margin-inline:db-spacing-responsive-sm"}),(0,i.jsx)("div",{className:"margin2",children:"sm"})]}),"Sizing"===e&&(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Y,{children:"height: sm"}),(0,i.jsx)("div",{className:"sizing",children:"sm"})]})]})]}))})]}))]})}},function(e){e.O(0,[49710,55216,92888,49774,40179],function(){return e(e.s=50885)}),_N_E=e.O()}]);