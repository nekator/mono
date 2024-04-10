(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25649],{50885:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/variables/examples",function(){return i(30666)}])},16134:function(e,n,i){"use strict";var a=i(52322),t=i(2784),r=i(13776);let l=(0,t.forwardRef)(function(e,n){let i=n||(0,t.useRef)(n);return(0,a.jsx)("button",{ref:i,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-button",e.className),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=l},63900:function(e,n,i){"use strict";var a,t,r,l,s,c,d;i.d(n,{IY:function(){return o},YP:function(){return u},ce:function(){return _}});let o="OVERWRITE_DEFAULT_ID",u="Back",_="Close Button";(s=a||(a={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(a).map(e=>{let[,n]=e;return n}),(t||(t={})).PRIMARY="primary",(c=r||(r={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",c.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",c.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",c.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",c.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",c.BRAND_BG_LEVEL_1="brand-bg-lvl-1",c.BRAND_BG_LEVEL_2="brand-bg-lvl-2",c.BRAND_BG_LEVEL_3="brand-bg-lvl-3",c.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",c.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",c.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",c.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",c.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",c.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",c.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",c.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",c.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",c.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",c.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",c.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",c.WARNING_BG_LEVEL_1="warning-bg-lvl-1",c.WARNING_BG_LEVEL_2="warning-bg-lvl-2",c.WARNING_BG_LEVEL_3="warning-bg-lvl-3",c.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",c.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",c.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",c.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",c.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",c.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",c.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(r).map(e=>{let[,n]=e;return n}),Object.entries(t).map(e=>{let[,n]=e;return n}),(d=l||(l={})).CRITICAL="critical",d.INFORMATIONAL="informational",d.WARNING="warning",d.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,n]=e;return n})},13776:function(e,n,i){"use strict";i.d(n,{MN:function(){return c},Vj:function(){return a},cd:function(){return s},mS:function(){return l},yI:function(){return r},yn:function(){return t}});let a=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},t=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&t(e,n)})},r=function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];let a="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let n in e)e[n]&&(a+="".concat(n," "))}}),a.trim()},l=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!n.includes(e)).reduce((n,i)=>(n[i]=e[i],n),{}),s=e=>{let{left:n,right:i}=e.getBoundingClientRect(),{innerWidth:a}=window;return n>=0&&i<=a},c=e=>{let{top:n,bottom:i}=e.getBoundingClientRect(),{innerHeight:a}=window;return n>=0&&i<=a}},30666:function(e,n,i){"use strict";i.r(n);var a=i(52322),t=i(10851),r=i(32924),l=i(6009),s=i(60767),c=i(22003);n.default=()=>(0,a.jsxs)(t.Z,{children:[(0,a.jsx)("h1",{children:"Variable Examples"}),(0,a.jsx)("blockquote",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:'Some of the variables are "missused" to visualize the effect of e.g. a padding.'}),(0,a.jsx)("li",{children:"All orange containers should symbolize the used variable."}),(0,a.jsx)("li",{children:"Don't use it like this in a real app. \uD83D\uDCA2For example `width: var(--db-spacing-fixed-md)`\uD83D\uDCA5"})]})}),["Spacing fixed","Spacing responsive","Sizing"].map(e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:e}),(0,a.jsx)("div",{className:"example-container",children:["functional","regular","expressive"].map(n=>(0,a.jsxs)(l.f,{className:"example-item db-density-".concat(n),spacing:"small",children:[(0,a.jsx)(r.E,{icon:"none",semantic:"informational",children:n.charAt(0).toUpperCase()+n.slice(1)}),(0,a.jsxs)("div",{className:"example-".concat(e.toLowerCase().replaceAll(" ","-")),children:["Spacing fixed"===e&&(0,a.jsxs)("div",{children:[(0,a.jsx)(s.P,{icon:"account",children:"Account"}),(0,a.jsx)("span",{children:"gap:db-spacing-fixed-xl"}),(0,a.jsx)(s.P,{icon:"edit",children:"Edit"}),(0,a.jsx)("div",{className:"gap1",children:"xl"}),(0,a.jsx)("div",{className:"gap2",children:"xl"})]}),"Spacing responsive"===e&&(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"margin1",children:"sm"}),(0,a.jsx)("span",{children:"margin-inline:db-spacing-responsive-sm"}),(0,a.jsx)("div",{className:"margin2",children:"sm"})]}),"Sizing"===e&&(0,a.jsxs)("div",{children:[(0,a.jsx)(c.Y,{children:"height: sm"}),(0,a.jsx)("div",{className:"sizing",children:"sm"})]})]})]}))})]}))]})}},function(e){e.O(0,[49710,10851,92888,49774,40179],function(){return e(e.s=50885)}),_N_E=e.O()}]);