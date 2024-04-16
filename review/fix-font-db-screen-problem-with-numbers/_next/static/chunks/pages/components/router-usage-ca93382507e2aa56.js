(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177],{69929:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/router-usage",function(){return t(97687)}])},97687:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(52322),i=t(55216),a=t(45392);function l(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"router-usage",children:"Router usage"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," At the moment, router links can only be used within the ",(0,r.jsx)(n.strong,{children:"DBNavigationItem"})," component!"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Unfortunately, the ",(0,r.jsx)(n.strong,{children:"DBLink"})," and ",(0,r.jsx)(n.strong,{children:"DBButton"})," components do not support router links. Explanation: Router links are usually rendered as anchor tags, which are not permitted within anchor or button tags."]}),"\n",(0,r.jsx)(n.h2,{id:"supported-routers",children:"Supported routers"}),"\n",(0,r.jsx)(n.p,{children:"The following standard routers have been successfully implemented in the corresponding frameworks (Angular, React, Vue). Other routers should work in the same way, but have not yet been tested."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://angular.io/api/router",children:"Angular router"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main",children:"React router"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://v3.router.vuejs.org/",children:"Vue router"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The routers are installed and used in accordance with the official docs:"}),"\n",(0,r.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsxs)(n.p,{children:["To create a DB Brand styled router link, place the corresponding router link component in the default slot of ",(0,r.jsx)(n.strong,{children:"DBNavigationItem"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://db-ui.github.io/mono/review/main/components/navigation-item/overview",children:"How to use DBNavigationItem"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Angular"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"RouterLink"})," must be imported from the ",(0,r.jsx)(n.code,{children:"@angular/router"})," package."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<db-navigation-item>\n	<a [routerLink]="link.path"> {{ link.label }} </a>\n</db-navigation-item>\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"React"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Link"})," must be imported from the ",(0,r.jsx)(n.code,{children:"react-router-dom"})," package."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<DBNavigationItem>\n	<Link to={link.path}>\n		{link.label}\n	</Link>\n</DBNavigationItem>\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Vue"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"RouterLink"})," can be used directly, as it is available globally."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<DBNavigationItem>\n	<RouterLink :to="link.path"> {{ link.label }} </RouterLink>\n</DBNavigationItem>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}let o=e=>{let{children:n}=e;return(0,r.jsx)(i.Z,{children:n})};function c(e){return(0,r.jsx)(s,{})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})})}},10326:function(e,n,t){"use strict";var r=t(52322),i=t(2784),a=t(43251);let l=(0,i.forwardRef)(function(e,n){let t=n||(0,i.useRef)(n);return(0,r.jsx)("button",{ref:t,...(0,a.mS)(e,[]),id:e.id,className:(0,a.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=l},55482:function(e,n,t){"use strict";var r,i,a,l,s,o,c;t.d(n,{IY:function(){return u},YP:function(){return d},ce:function(){return h}});let u="OVERWRITE_DEFAULT_ID",d="Back",h="Close Button";(s=r||(r={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,n]=e;return n}),(i||(i={})).PRIMARY="primary",(o=a||(a={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",o.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",o.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",o.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",o.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",o.BRAND_BG_LEVEL_1="brand-bg-lvl-1",o.BRAND_BG_LEVEL_2="brand-bg-lvl-2",o.BRAND_BG_LEVEL_3="brand-bg-lvl-3",o.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",o.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",o.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",o.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",o.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",o.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",o.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",o.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",o.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",o.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",o.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",o.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",o.WARNING_BG_LEVEL_1="warning-bg-lvl-1",o.WARNING_BG_LEVEL_2="warning-bg-lvl-2",o.WARNING_BG_LEVEL_3="warning-bg-lvl-3",o.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",o.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",o.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",o.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",o.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",o.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",o.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(a).map(e=>{let[,n]=e;return n}),Object.entries(i).map(e=>{let[,n]=e;return n}),(c=l||(l={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,n]=e;return n})},43251:function(e,n,t){"use strict";t.d(n,{MN:function(){return c},Vj:function(){return r},cd:function(){return o},mS:function(){return s},yI:function(){return a},yn:function(){return i}});let r=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&i(e,n)})},a=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()},l=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],s=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||l.includes(e))&&!n.includes(e)).reduce((n,t)=>(n[t]=e[t],n),{}),o=e=>{let{left:n,right:t}=e.getBoundingClientRect(),{innerWidth:r}=window;return n>=0&&t<=r},c=e=>{let{top:n,bottom:t}=e.getBoundingClientRect(),{innerHeight:r}=window;return n>=0&&t<=r}}},function(e){e.O(0,[49710,55216,92888,49774,40179],function(){return e(e.s=69929)}),_N_E=e.O()}]);