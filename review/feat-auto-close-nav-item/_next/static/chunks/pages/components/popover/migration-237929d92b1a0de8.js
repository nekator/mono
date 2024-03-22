(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39286],{74160:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popover/migration",function(){return e(5897)}])},73241:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}});var r=e(52322),a=e(45392);function i(n){let t={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),"\nFor a general installation or migration process check out this ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"db-ui-core--db-ui-components",children:"DB UI Core ➡ DB UI Components"}),"\n",(0,r.jsx)(t.p,{children:"New Component \uD83E\uDD73"})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(i,{...n})}):i(n)}},5897:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return l}});var r=e(52322),a=e(45392),i=e(12156),s=e(73241);let o=n=>{let{children:t}=n;return(0,r.jsx)(i.Z,{children:t})};function c(n){let t={h1:"h1",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dbpopover-migration",children:"DBPopover Migration"}),"\n",(0,r.jsx)(s.default,{})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(o,{...n,children:(0,r.jsx)(c,{...n})})}},16134:function(n,t,e){"use strict";var r=e(52322),a=e(2784),i=e(13776);let s=(0,a.forwardRef)(function(n,t){let e=t||(0,a.useRef)(t);return(0,r.jsx)("button",{ref:e,...(0,i.mS)(n,[]),id:n.id,className:(0,i.yI)("db-button",n.className,{"is-icon-text-replace":n.noText}),type:n.type,title:n.title,disabled:n.disabled,"aria-label":n.label,"data-icon":n.icon,"data-size":n.size,"data-state":n.state,"data-width":n.width,"data-variant":n.variant,name:n.name,value:n.value,"aria-describedby":n.describedbyid,"aria-expanded":n.ariaexpanded,"aria-pressed":n.ariapressed,onClick:t=>{n.onClick&&n.onClick(t)},children:n.children})});t.Z=s},63900:function(n,t,e){"use strict";var r,a,i,s,o,c,l;e.d(t,{IY:function(){return u},YP:function(){return d},ce:function(){return N}});let u="OVERWRITE_DEFAULT_ID",d="Back",N="Close Button";(o=r||(r={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(r).map(n=>{let[,t]=n;return t}),(a||(a={})).PRIMARY="primary",(c=i||(i={})).BASE="base",c.BASE_STRONG="base-strong",c.BASE_TRANSPARENT_SEMI="base-transparent-semi",c.BASE_TRANSPARENT_FULL="base-transparent-full",c.NEUTRAL="neutral",c.NEUTRAL_STRONG="neutral-strong",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.BRAND="brand",c.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",c.BRAND_TRANSPARENT_FULL="brand-transparent-full",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.WARNING="warning",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(i).map(n=>{let[,t]=n;return t}),Object.entries(a).map(n=>{let[,t]=n;return t}),(l=s||(s={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(s).map(n=>{let[,t]=n;return t})},13776:function(n,t,e){"use strict";e.d(t,{MN:function(){return c},Vj:function(){return r},cd:function(){return o},mS:function(){return s},yI:function(){return i},yn:function(){return a}});let r=()=>{var n,t;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(n,t)=>{Object.values(n.children).forEach(n=>{n.setAttribute(t.key,t.value),n.children.length>0&&a(n,t)})},i=function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];let r="";return t.forEach((n,t)=>{if(n){if("string"==typeof n)r+="".concat(n," ");else for(let t in n)n[t]&&(r+="".concat(t," "))}}),r.trim()},s=(n,t)=>Object.keys(n).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("on"))&&!t.includes(n)).reduce((t,e)=>(t[e]=n[e],t),{}),o=n=>{let{left:t,right:e}=n.getBoundingClientRect(),{innerWidth:r}=window;return t>=0&&e<=r},c=n=>{let{top:t,bottom:e}=n.getBoundingClientRect(),{innerHeight:r}=window;return t>=0&&e<=r}}},function(n){n.O(0,[49710,12156,92888,49774,40179],function(){return n(n.s=74160)}),_N_E=n.O()}]);