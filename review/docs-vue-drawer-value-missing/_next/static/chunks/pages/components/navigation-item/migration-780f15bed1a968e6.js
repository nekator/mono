(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[48596],{39683:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item/migration",function(){return e(20985)}])},16847:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var r=e(52322),a=e(45392);function i(n){let t={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(t.p,{children:"New Component \uD83E\uDD73"})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(i,{...n})}):i(n)}},20985:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var r=e(52322),a=e(45392),i=e(22116),s=e(16847);let o=n=>{let{children:t}=n;return(0,r.jsx)(i.Z,{children:t})};function l(n){let t={h1:"h1",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbnavigationitem-migration",children:"DBNavigationItem Migration"}),"\n",(0,r.jsx)(s.default,{})]})}function c(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(o,{...n,children:(0,r.jsx)(l,{...n})})}},10326:function(n,t,e){"use strict";var r=e(52322),a=e(2784),i=e(43251);let s=(0,a.forwardRef)(function(n,t){let e=t||(0,a.useRef)(t);return(0,r.jsx)("button",{ref:e,...(0,i.mS)(n,[]),id:n.id,className:(0,i.yI)("db-button",n.className,{"is-icon-text-replace":n.noText}),type:n.type,disabled:n.disabled,"aria-label":n.label,"data-icon":n.icon,"data-size":n.size,"data-state":n.state,"data-width":n.width,"data-variant":n.variant,name:n.name,value:n.value,"aria-describedby":n.describedbyid,"aria-expanded":n.ariaexpanded,"aria-pressed":n.ariapressed,onClick:t=>{n.onClick&&n.onClick(t)},children:n.children})});t.Z=s},55482:function(n,t,e){"use strict";var r,a,i,s,o,l,c;e.d(t,{IY:function(){return u},YP:function(){return d},ce:function(){return N}});let u="OVERWRITE_DEFAULT_ID",d="Back",N="Close Button";(o=r||(r={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(r).map(n=>{let[,t]=n;return t}),(a||(a={})).PRIMARY="primary",(l=i||(i={})).BASE="base",l.BASE_STRONG="base-strong",l.BASE_TRANSPARENT_SEMI="base-transparent-semi",l.BASE_TRANSPARENT_FULL="base-transparent-full",l.NEUTRAL="neutral",l.NEUTRAL_STRONG="neutral-strong",l.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",l.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",l.BRAND="brand",l.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",l.BRAND_TRANSPARENT_FULL="brand-transparent-full",l.SUCCESSFUL="successful",l.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",l.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",l.CRITICAL="critical",l.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",l.CRITICAL_TRANSPARENT_Full="critical-transparent-full",l.WARNING="warning",l.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",l.WARNING_TRANSPARENT_FULL="warning-transparent-full",l.INFORMATIONAL="informational",l.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",l.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(i).map(n=>{let[,t]=n;return t}),Object.entries(a).map(n=>{let[,t]=n;return t}),(c=s||(s={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(s).map(n=>{let[,t]=n;return t})},43251:function(n,t,e){"use strict";e.d(t,{MN:function(){return c},Vj:function(){return r},cd:function(){return l},mS:function(){return o},yI:function(){return i},yn:function(){return a}});let r=()=>{var n,t;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(n,t)=>{Object.values(n.children).forEach(n=>{n.setAttribute(t.key,t.value),n.children.length>0&&a(n,t)})},i=function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];let r="";return t.forEach((n,t)=>{if(n){if("string"==typeof n)r+="".concat(n," ");else for(let t in n)n[t]&&(r+="".concat(t," "))}}),r.trim()},s=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],o=(n,t)=>Object.keys(n).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("item")||n.startsWith("on")||s.includes(n))&&!t.includes(n)).reduce((t,e)=>(t[e]=n[e],t),{}),l=n=>{let{left:t,right:e}=n.getBoundingClientRect(),{innerWidth:r}=window;return t>=0&&e<=r},c=n=>{let{top:t,bottom:e}=n.getBoundingClientRect(),{innerHeight:r}=window;return t>=0&&e<=r}}},function(n){n.O(0,[49710,22116,92888,49774,40179],function(){return n(n.s=39683)}),_N_E=n.O()}]);