(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177],{91907:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/router-usage",function(){return t(24415)}])},24415:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(52322),i=t(11803),a=t(45392);function s(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"router-usage",children:"Router usage"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," At the moment, router links can only be used within the ",(0,r.jsx)(n.strong,{children:"DBNavigationItem"})," component!"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Unfortunately, the ",(0,r.jsx)(n.strong,{children:"DBLink"})," and ",(0,r.jsx)(n.strong,{children:"DBButton"})," components do not support router links. Explanation: Router links are usually rendered as anchor tags, which are not permitted within anchor or button tags."]}),"\n",(0,r.jsx)(n.h2,{id:"supported-routers",children:"Supported routers"}),"\n",(0,r.jsx)(n.p,{children:"The following standard routers have been successfully implemented in the corresponding frameworks (Angular, React, Vue). Other routers should work in the same way, but have not yet been tested."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://angular.io/api/router",children:"Angular router"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://reactrouter.com/en/main",children:"React router"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://v3.router.vuejs.org/",children:"Vue router"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The routers are installed and used in accordance with the official docs:"}),"\n",(0,r.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsxs)(n.p,{children:["To create a DB Brand styled router link, place the corresponding router link component in the default slot of ",(0,r.jsx)(n.strong,{children:"DBNavigationItem"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://db-ui.github.io/mono/review/main/components/navigation-item/overview",children:"How to use DBNavigationItem"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Angular"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"RouterLink"})," must be imported from the ",(0,r.jsx)(n.code,{children:"@angular/router"})," package."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<db-navigation-item>\n	<a [routerLink]="link.path"> {{ link.label }} </a>\n</db-navigation-item>\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"React"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Link"})," must be imported from the ",(0,r.jsx)(n.code,{children:"react-router-dom"})," package."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<DBNavigationItem>\n	<Link to={link.path}>\n		{link.label}\n	</Link>\n</DBNavigationItem>\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Vue"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"RouterLink"})," can be used directly, as it is available globally."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<DBNavigationItem>\n	<RouterLink :to="link.path"> {{ link.label }} </RouterLink>\n</DBNavigationItem>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}let l=e=>{let{children:n}=e;return(0,r.jsx)(i.Z,{children:n})};function c(e){return(0,r.jsx)(o,{})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(l,{...e,children:(0,r.jsx)(c,{...e})})}},16134:function(e,n,t){"use strict";var r=t(52322),i=t(2784),a=t(13776);let s=(0,i.forwardRef)(function(e,n){let t=n||(0,i.useRef)(n);return(0,r.jsx)("button",{ref:t,...(0,a.mS)(e,[]),id:e.id,className:(0,a.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=s},63900:function(e,n,t){"use strict";var r,i,a,s,o,l,c;t.d(n,{IY:function(){return u},YP:function(){return d},ce:function(){return h}});let u="OVERWRITE_DEFAULT_ID",d="Back",h="Close Button";(o=r||(r={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,n]=e;return n}),(i||(i={})).PRIMARY="primary",(l=a||(a={})).BASE="base",l.BASE_STRONG="base-strong",l.BASE_TRANSPARENT_SEMI="base-transparent-semi",l.BASE_TRANSPARENT_FULL="base-transparent-full",l.NEUTRAL="neutral",l.NEUTRAL_STRONG="neutral-strong",l.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",l.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",l.BRAND="brand",l.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",l.BRAND_TRANSPARENT_FULL="brand-transparent-full",l.SUCCESSFUL="successful",l.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",l.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",l.CRITICAL="critical",l.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",l.CRITICAL_TRANSPARENT_Full="critical-transparent-full",l.WARNING="warning",l.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",l.WARNING_TRANSPARENT_FULL="warning-transparent-full",l.INFORMATIONAL="informational",l.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",l.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(a).map(e=>{let[,n]=e;return n}),Object.entries(i).map(e=>{let[,n]=e;return n}),(c=s||(s={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(s).map(e=>{let[,n]=e;return n})},13776:function(e,n,t){"use strict";t.d(n,{MN:function(){return l},Vj:function(){return r},cd:function(){return o},mS:function(){return s},yI:function(){return a},yn:function(){return i}});let r=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&i(e,n)})},a=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()},s=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!n.includes(e)).reduce((n,t)=>(n[t]=e[t],n),{}),o=e=>{let{left:n,right:t}=e.getBoundingClientRect(),{innerWidth:r}=window;return n>=0&&t<=r},l=e=>{let{top:n,bottom:t}=e.getBoundingClientRect(),{innerHeight:r}=window;return n>=0&&t<=r}}},function(e){e.O(0,[49710,11803,92888,49774,40179],function(){return e(e.s=91907)}),_N_E=e.O()}]);