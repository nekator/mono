(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6491],{67452:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab-list/migration",function(){return e(67741)}])},53318:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return s}});var r=e(52322),a=e(45392);function i(t){let n={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",...(0,a.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(n.p,{children:"New Component \uD83E\uDD73"})]})}function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(i,{...t})}):i(t)}},67741:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var r=e(52322),a=e(45392),i=e(11803),s=e(53318);let o=t=>{let{children:n}=t;return(0,r.jsx)(i.Z,{children:n})};function l(t){let n={h1:"h1",...(0,a.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"dbtablist-migration",children:"DBTabList Migration"}),"\n",(0,r.jsx)(s.default,{})]})}function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(o,{...t,children:(0,r.jsx)(l,{...t})})}},16134:function(t,n,e){"use strict";var r=e(52322),a=e(2784),i=e(13776);let s=(0,a.forwardRef)(function(t,n){let e=n||(0,a.useRef)(n);return(0,r.jsx)("button",{ref:e,...(0,i.mS)(t,[]),id:t.id,className:(0,i.yI)("db-button",t.className,{"is-icon-text-replace":t.noText}),type:t.type,disabled:t.disabled,"aria-label":t.label,"data-icon":t.icon,"data-size":t.size,"data-state":t.state,"data-width":t.width,"data-variant":t.variant,name:t.name,value:t.value,"aria-describedby":t.describedbyid,"aria-expanded":t.ariaexpanded,"aria-pressed":t.ariapressed,onClick:n=>{t.onClick&&t.onClick(n)},children:t.children})});n.Z=s},63900:function(t,n,e){"use strict";var r,a,i,s,o,l,c;e.d(n,{IY:function(){return u},YP:function(){return d},ce:function(){return p}});let u="OVERWRITE_DEFAULT_ID",d="Back",p="Close Button";(o=r||(r={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(r).map(t=>{let[,n]=t;return n}),(a||(a={})).PRIMARY="primary",(l=i||(i={})).BASE="base",l.BASE_STRONG="base-strong",l.BASE_TRANSPARENT_SEMI="base-transparent-semi",l.BASE_TRANSPARENT_FULL="base-transparent-full",l.NEUTRAL="neutral",l.NEUTRAL_STRONG="neutral-strong",l.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",l.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",l.BRAND="brand",l.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",l.BRAND_TRANSPARENT_FULL="brand-transparent-full",l.SUCCESSFUL="successful",l.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",l.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",l.CRITICAL="critical",l.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",l.CRITICAL_TRANSPARENT_Full="critical-transparent-full",l.WARNING="warning",l.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",l.WARNING_TRANSPARENT_FULL="warning-transparent-full",l.INFORMATIONAL="informational",l.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",l.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(i).map(t=>{let[,n]=t;return n}),Object.entries(a).map(t=>{let[,n]=t;return n}),(c=s||(s={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(s).map(t=>{let[,n]=t;return n})},13776:function(t,n,e){"use strict";e.d(n,{MN:function(){return c},Vj:function(){return r},cd:function(){return l},mS:function(){return o},yI:function(){return i},yn:function(){return a}});let r=()=>{var t,n;return(null===(t=window.crypto)||void 0===t?void 0:t.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(t,n)=>{Object.values(t.children).forEach(t=>{t.setAttribute(n.key,n.value),t.children.length>0&&a(t,n)})},i=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];let r="";return n.forEach((t,n)=>{if(t){if("string"==typeof t)r+="".concat(t," ");else for(let n in t)t[n]&&(r+="".concat(n," "))}}),r.trim()},s=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],o=(t,n)=>Object.keys(t).filter(t=>(t.startsWith("data-")||t.startsWith("aria-")||t.startsWith("default")||t.startsWith("auto")||t.startsWith("item")||t.startsWith("on")||s.includes(t))&&!n.includes(t)).reduce((n,e)=>(n[e]=t[e],n),{}),l=t=>{let{left:n,right:e}=t.getBoundingClientRect(),{innerWidth:r}=window;return n>=0&&e<=r},c=t=>{let{top:n,bottom:e}=t.getBoundingClientRect(),{innerHeight:r}=window;return n>=0&&e<=r}}},function(t){t.O(0,[49710,11803,92888,49774,40179],function(){return t(t.s=67452)}),_N_E=t.O()}]);