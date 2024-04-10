(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35585],{68406:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tonalities/examples",function(){return n(79531)}])},16134:function(e,t,n){"use strict";var a=n(52322),r=n(2784),i=n(13776);let s=(0,r.forwardRef)(function(e,t){let n=t||(0,r.useRef)(t);return(0,a.jsx)("button",{ref:n,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=s},63900:function(e,t,n){"use strict";var a,r,i,s,l,c,o;n.d(t,{IY:function(){return d},YP:function(){return u},ce:function(){return p}});let d="OVERWRITE_DEFAULT_ID",u="Back",p="Close Button";(l=a||(a={})).FUNCTIONAL="functional",l.REGULAR="regular",l.EXPRESSIVE="expressive",Object.entries(a).map(e=>{let[,t]=e;return t}),(r||(r={})).PRIMARY="primary",(c=i||(i={})).BASE="base",c.BASE_STRONG="base-strong",c.BASE_TRANSPARENT_SEMI="base-transparent-semi",c.BASE_TRANSPARENT_FULL="base-transparent-full",c.NEUTRAL="neutral",c.NEUTRAL_STRONG="neutral-strong",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.BRAND="brand",c.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",c.BRAND_TRANSPARENT_FULL="brand-transparent-full",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.WARNING="warning",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(i).map(e=>{let[,t]=e;return t}),Object.entries(r).map(e=>{let[,t]=e;return t}),(o=s||(s={})).CRITICAL="critical",o.INFORMATIONAL="informational",o.WARNING="warning",o.SUCCESSFUL="successful",Object.entries(s).map(e=>{let[,t]=e;return t})},13776:function(e,t,n){"use strict";n.d(t,{MN:function(){return o},Vj:function(){return a},cd:function(){return c},mS:function(){return l},yI:function(){return i},yn:function(){return r}});let a=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&r(e,t)})},i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let a="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let t in e)e[t]&&(a+="".concat(t," "))}}),a.trim()},s=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],l=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||s.includes(e))&&!t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}),c=e=>{let{left:t,right:n}=e.getBoundingClientRect(),{innerWidth:a}=window;return t>=0&&n<=a},o=e=>{let{top:t,bottom:n}=e.getBoundingClientRect(),{innerHeight:a}=window;return t>=0&&n<=a}},79531:function(e,t,n){"use strict";n.r(t);var a=n(52322),r=n(11803),i=n(86095);let s=["functional","regular","expressive"];t.default=()=>(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("h1",{children:"Tonality Examples"}),(0,a.jsx)("p",{children:'Open "inspect" to see the different spacings & sizing applied to the cards and components.'}),(0,a.jsx)("h2",{children:"Example side by side:"}),(0,a.jsxs)("div",{className:"tonality-example-grid",children:[s.map(e=>(0,a.jsx)("h3",{children:e.charAt(0).toUpperCase()+e.slice(1)},"grid-headline-".concat(e))),s.map(e=>(0,a.jsx)("article",{"data-tonality":e,children:(0,a.jsxs)(i.f,{spacing:"small",children:[(0,a.jsx)("h4",{children:"Login"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}),(0,a.jsx)(i.aq,{label:"Username"}),(0,a.jsx)(i.aq,{label:"Password",type:"password"}),(0,a.jsx)(i.Y1,{width:"full",variant:"primary",children:"Login"})]})},"grid-card-".concat(e)))]}),(0,a.jsx)("h2",{children:"Example multiple tonalities working together:"}),(0,a.jsxs)("div",{className:"tonality-example-page",children:[(0,a.jsxs)("div",{className:"tonality-example-page-functional","data-tonality":"functional",children:[(0,a.jsx)(i.f,{colorVariant:"neutral",spacing:"small",children:"We are functional"}),(0,a.jsx)(i.f,{colorVariant:"informational",spacing:"small",children:"even that we have"}),(0,a.jsx)(i.f,{colorVariant:"successful",spacing:"small",children:"a color"}),(0,a.jsx)(i.f,{colorVariant:"warning",spacing:"small",children:"the user shouldn't"}),(0,a.jsx)(i.f,{colorVariant:"critical",spacing:"small",children:"focus us"})]}),(0,a.jsx)("div",{className:"tonality-example-page-expressive","data-tonality":"expressive",children:(0,a.jsx)(i.f,{spacing:"medium",children:"I'm expressive the user should focus me first"})}),(0,a.jsxs)("div",{className:"tonality-example-page-regular","data-tonality":"regular",children:[(0,a.jsx)(i.f,{spacing:"small",children:"We"}),(0,a.jsx)(i.f,{spacing:"small",children:"are"}),(0,a.jsx)(i.f,{spacing:"small",children:"regular"})]})]})]})}},function(e){e.O(0,[49710,11803,92888,49774,40179],function(){return e(e.s=68406)}),_N_E=e.O()}]);