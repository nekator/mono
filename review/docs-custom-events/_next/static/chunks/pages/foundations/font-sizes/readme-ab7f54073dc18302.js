(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21996],{16208:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/font-sizes/readme",function(){return t(9210)}])},9210:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(52322),s=t(12156),i=t(45392);function l(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"font-sizes",children:"Font-Sizes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You should use our provided ",(0,r.jsx)(n.code,{children:"Font-Sizes"})," to change the size of text elements like ",(0,r.jsx)(n.code,{children:"<p>"})," etc."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"NOTE:"})})," Some sizes may stay the same because of screen-width or density."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"how-to-include-colors",children:"How to include colors"}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"CSS"})," and ",(0,r.jsx)(n.code,{children:"Tailwind"})," you need to use the import ",(0,r.jsx)(n.code,{children:'@import "@db-ui/foundations/build/css/fonts/classes/all.css";'})," in your root ",(0,r.jsx)(n.code,{children:".css"})," file."]}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"SCSS"})," you can use the ",(0,r.jsx)(n.code,{children:"css"})," file, or you can use a placeholder by importing ",(0,r.jsx)(n.code,{children:"@use @db-ui/foundations/build/scss/fonts"})," in your ",(0,r.jsx)(n.code,{children:".scss"})," file, where you need to reference the specific font size.\nThen you can use e.g. ",(0,r.jsx)(n.code,{children:"sm"})," font-size by extending our SCSS placeholders like this: ",(0,r.jsx)(n.code,{children:"@extend %db-overwrite-font-size-sm"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"NOTE:"})})," Make sure that you import the file after all other ",(0,r.jsx)(n.code,{children:"foundation"})," css files, otherwise you should overwrite a specific ",(0,r.jsx)(n.code,{children:"font-size"})," with the global selector"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:"/* Global selector */\n* {\n	font-size: inherit;\n	line-height: inherit;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsxs)(n.p,{children:["We're providing an ",(0,r.jsx)(n.a,{href:"./overview",children:"overview for all possible font-sizes"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["There are several variants: ",(0,r.jsx)(n.code,{children:"3xl"}),", ",(0,r.jsx)(n.code,{children:"2xl"}),", ",(0,r.jsx)(n.code,{children:"xl"}),", ",(0,r.jsx)(n.code,{children:"lg"}),", ",(0,r.jsx)(n.code,{children:"md"}),", ",(0,r.jsx)(n.code,{children:"sm"}),", ",(0,r.jsx)(n.code,{children:"xs"}),", ",(0,r.jsx)(n.code,{children:"2xs"}),", ",(0,r.jsx)(n.code,{children:"3xs"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["We use ",(0,r.jsx)(n.code,{children:"XX"})," here you should replace it with a variant from above."]})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Variant"}),(0,r.jsx)(n.th,{children:"CSS"}),(0,r.jsx)(n.th,{children:"SCSS"}),(0,r.jsx)(n.th,{children:"Tailwind"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"XX"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'class="db-font-size-XX"'})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"@extend %db-overwrite-font-size-XX"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'class="db-font-size-XX"'})})]})})]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}let c=e=>{let{children:n}=e;return(0,r.jsx)(s.Z,{children:n})};function a(e){return(0,r.jsx)(o,{})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(a,{...e})})}},16134:function(e,n,t){"use strict";var r=t(52322),s=t(2784),i=t(13776);let l=(0,s.forwardRef)(function(e,n){let t=n||(0,s.useRef)(n);return(0,r.jsx)("button",{ref:t,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=l},63900:function(e,n,t){"use strict";var r,s,i,l,o,c,a;t.d(n,{IY:function(){return d},YP:function(){return u},ce:function(){return h}});let d="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(o=r||(r={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,n]=e;return n}),(s||(s={})).PRIMARY="primary",(c=i||(i={})).BASE="base",c.BASE_STRONG="base-strong",c.BASE_TRANSPARENT_SEMI="base-transparent-semi",c.BASE_TRANSPARENT_FULL="base-transparent-full",c.NEUTRAL="neutral",c.NEUTRAL_STRONG="neutral-strong",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.BRAND="brand",c.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",c.BRAND_TRANSPARENT_FULL="brand-transparent-full",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.WARNING="warning",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(i).map(e=>{let[,n]=e;return n}),Object.entries(s).map(e=>{let[,n]=e;return n}),(a=l||(l={})).CRITICAL="critical",a.INFORMATIONAL="informational",a.WARNING="warning",a.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,n]=e;return n})},13776:function(e,n,t){"use strict";t.d(n,{MN:function(){return a},Vj:function(){return r},cd:function(){return c},mS:function(){return o},yI:function(){return i},yn:function(){return s}});let r=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},s=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&s(e,n)})},i=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()},l=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],o=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||l.includes(e))&&!n.includes(e)).reduce((n,t)=>(n[t]=e[t],n),{}),c=e=>{let{left:n,right:t}=e.getBoundingClientRect(),{innerWidth:r}=window;return n>=0&&t<=r},a=e=>{let{top:n,bottom:t}=e.getBoundingClientRect(),{innerHeight:r}=window;return n>=0&&t<=r}}},function(e){e.O(0,[49710,12156,92888,49774,40179],function(){return e(e.s=16208)}),_N_E=e.O()}]);