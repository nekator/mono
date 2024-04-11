(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25649],{50885:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/variables/examples",function(){return t(30666)}])},16134:function(e,n,t){"use strict";var a=t(52322),i=t(2784),r=t(13776);let s=(0,i.forwardRef)(function(e,n){let t=n||(0,i.useRef)(n);return(0,a.jsx)("button",{ref:t,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=s},63900:function(e,n,t){"use strict";var a,i,r,s,l,c,o;t.d(n,{IY:function(){return d},YP:function(){return u},ce:function(){return p}});let d="OVERWRITE_DEFAULT_ID",u="Back",p="Close Button";(l=a||(a={})).FUNCTIONAL="functional",l.REGULAR="regular",l.EXPRESSIVE="expressive",Object.entries(a).map(e=>{let[,n]=e;return n}),(i||(i={})).PRIMARY="primary",(c=r||(r={})).BASE="base",c.BASE_STRONG="base-strong",c.BASE_TRANSPARENT_SEMI="base-transparent-semi",c.BASE_TRANSPARENT_FULL="base-transparent-full",c.NEUTRAL="neutral",c.NEUTRAL_STRONG="neutral-strong",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.BRAND="brand",c.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",c.BRAND_TRANSPARENT_FULL="brand-transparent-full",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.WARNING="warning",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(r).map(e=>{let[,n]=e;return n}),Object.entries(i).map(e=>{let[,n]=e;return n}),(o=s||(s={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(s).map(e=>{let[,n]=e;return n})},13776:function(e,n,t){"use strict";t.d(n,{MN:function(){return o},Vj:function(){return a},cd:function(){return c},mS:function(){return l},yI:function(){return r},yn:function(){return i}});let a=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&i(e,n)})},r=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let a="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let n in e)e[n]&&(a+="".concat(n," "))}}),a.trim()},s=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],l=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||s.includes(e))&&!n.includes(e)).reduce((n,t)=>(n[t]=e[t],n),{}),c=e=>{let{left:n,right:t}=e.getBoundingClientRect(),{innerWidth:a}=window;return n>=0&&t<=a},o=e=>{let{top:n,bottom:t}=e.getBoundingClientRect(),{innerHeight:a}=window;return n>=0&&t<=a}},30666:function(e,n,t){"use strict";t.r(n);var a=t(52322),i=t(11803),r=t(32924),s=t(6009),l=t(60767),c=t(22003);n.default=()=>(0,a.jsxs)(i.Z,{children:[(0,a.jsx)("h1",{children:"Variable Examples"}),(0,a.jsx)("blockquote",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:'Some of the variables are "missused" to visualize the effect of e.g. a padding.'}),(0,a.jsx)("li",{children:"All orange containers should symbolize the used variable."}),(0,a.jsx)("li",{children:"Don't use it like this in a real app. \uD83D\uDCA2For example `width: var(--db-spacing-fixed-md)`\uD83D\uDCA5"})]})}),["Spacing fixed","Spacing responsive","Sizing"].map(e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:e}),(0,a.jsx)("div",{className:"example-container",children:["functional","regular","expressive"].map(n=>(0,a.jsxs)(s.f,{className:"example-item db-ui-".concat(n),spacing:"small",children:[(0,a.jsx)(r.E,{icon:"none",variant:"informational",children:n.charAt(0).toUpperCase()+n.slice(1)}),(0,a.jsxs)("div",{className:"example-".concat(e.toLowerCase().replaceAll(" ","-")),children:["Spacing fixed"===e&&(0,a.jsxs)("div",{children:[(0,a.jsx)(l.P,{icon:"account",children:"Account"}),(0,a.jsx)("span",{children:"gap:db-spacing-fixed-xl"}),(0,a.jsx)(l.P,{icon:"edit",children:"Edit"}),(0,a.jsx)("div",{className:"gap1",children:"xl"}),(0,a.jsx)("div",{className:"gap2",children:"xl"})]}),"Spacing responsive"===e&&(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"margin1",children:"sm"}),(0,a.jsx)("span",{children:"margin-inline:db-spacing-responsive-sm"}),(0,a.jsx)("div",{className:"margin2",children:"sm"})]}),"Sizing"===e&&(0,a.jsxs)("div",{children:[(0,a.jsx)(c.Y,{children:"height: sm"}),(0,a.jsx)("div",{className:"sizing",children:"sm"})]})]})]}))})]}))]})}},function(e){e.O(0,[49710,11803,92888,49774,40179],function(){return e(e.s=50885)}),_N_E=e.O()}]);