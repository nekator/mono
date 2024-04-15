(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77656],{75664:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/tonalities/readme",function(){return t(65235)}])},65235:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(52322),i=t(22116),a=t(45392);function s(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tonalities",children:"Tonalities"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You could use ",(0,r.jsx)(n.code,{children:"Tonalities"}),' to create visual "volume levels"']}),"\n",(0,r.jsx)(n.li,{children:"You could change the appearance of a container rather than a component"}),"\n",(0,r.jsxs)(n.li,{children:["Best example is the navigation on our ",(0,r.jsx)(n.a,{href:"https://db-ui.github.io/mono/review/main/",children:"main page"}),'. Above the navigation is a smaller meta-navigation and even the component inside is smaller as well as all the spacings. The meta-navigation is above the real navigation, but focus of the user is on the real navigation, because the meta-navigation has less "volume"']}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["There are three different ",(0,r.jsx)(n.code,{children:"Tonalities"}),", you can use them to change the volume of a specific container or even the entire page based on the use-case, so change the default ",(0,r.jsx)(n.code,{children:"tonality"})," when:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"functional"}),": e.g. use this for business apps with large tables"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"regular"}),": e.g. use this for normal consumer apps"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"expressive"}),": e.g. use this for marketing apps/ single pages"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"how-to-include",children:"How to include"}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"CSS"}),", ",(0,r.jsx)(n.code,{children:"SCSS"})," and ",(0,r.jsx)(n.code,{children:"Tailwind"})," you don't have to include a specific file, just follow the documentation for ",(0,r.jsx)(n.a,{href:"../../foundations/readme",children:"foundations"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsxs)(n.p,{children:["We're providing ",(0,r.jsx)(n.a,{href:"./examples",children:"examples"})," to see the differences."]}),"\n",(0,r.jsxs)(n.p,{children:["We set the ",(0,r.jsx)(n.code,{children:"data-tonality"})," on a container like a ",(0,r.jsx)(n.code,{children:"div"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div data-tonality="functional">\n	<!-- Everything inside here will be smaller -->\n	<DBButton>Test</DBButton>\n	<DBInput label="Test" />\n</div>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Variants:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Variant"}),(0,r.jsx)(n.th,{children:"CSS/SCSS/Tailwind"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"functional"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'data-tonality="functional"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,r.jsx)(n.code,{children:"regular"})," (default)"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'data-tonality="regular"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"expressive"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'data-tonality="expressive"'})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["To change the ",(0,r.jsx)(n.code,{children:"tonality"})," of the entire page use:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<body data-tonality="functional">\n	...\n</body>\n'})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}let o=e=>{let{children:n}=e;return(0,r.jsx)(i.Z,{children:n})};function c(e){return(0,r.jsx)(l,{})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})})}},10326:function(e,n,t){"use strict";var r=t(52322),i=t(2784),a=t(43251);let s=(0,i.forwardRef)(function(e,n){let t=n||(0,i.useRef)(n);return(0,r.jsx)("button",{ref:t,...(0,a.mS)(e,[]),id:e.id,className:(0,a.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=s},55482:function(e,n,t){"use strict";var r,i,a,s,l,o,c;t.d(n,{IY:function(){return d},YP:function(){return u},ce:function(){return h}});let d="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(l=r||(r={})).FUNCTIONAL="functional",l.REGULAR="regular",l.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,n]=e;return n}),(i||(i={})).PRIMARY="primary",(o=a||(a={})).BASE="base",o.BASE_STRONG="base-strong",o.BASE_TRANSPARENT_SEMI="base-transparent-semi",o.BASE_TRANSPARENT_FULL="base-transparent-full",o.NEUTRAL="neutral",o.NEUTRAL_STRONG="neutral-strong",o.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",o.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",o.BRAND="brand",o.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",o.BRAND_TRANSPARENT_FULL="brand-transparent-full",o.SUCCESSFUL="successful",o.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",o.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",o.CRITICAL="critical",o.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",o.CRITICAL_TRANSPARENT_Full="critical-transparent-full",o.WARNING="warning",o.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",o.WARNING_TRANSPARENT_FULL="warning-transparent-full",o.INFORMATIONAL="informational",o.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",o.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(a).map(e=>{let[,n]=e;return n}),Object.entries(i).map(e=>{let[,n]=e;return n}),(c=s||(s={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(s).map(e=>{let[,n]=e;return n})},43251:function(e,n,t){"use strict";t.d(n,{MN:function(){return c},Vj:function(){return r},cd:function(){return o},mS:function(){return l},yI:function(){return a},yn:function(){return i}});let r=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&i(e,n)})},a=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()},s=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],l=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||s.includes(e))&&!n.includes(e)).reduce((n,t)=>(n[t]=e[t],n),{}),o=e=>{let{left:n,right:t}=e.getBoundingClientRect(),{innerWidth:r}=window;return n>=0&&t<=r},c=e=>{let{top:n,bottom:t}=e.getBoundingClientRect(),{innerHeight:r}=window;return n>=0&&t<=r}}},function(e){e.O(0,[49710,22116,92888,49774,40179],function(){return e(e.s=75664)}),_N_E=e.O()}]);