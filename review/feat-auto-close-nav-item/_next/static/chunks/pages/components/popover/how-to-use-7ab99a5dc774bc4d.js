(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21086],{467:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popover/how-to-use",function(){return t(69040)}])},52584:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(52322),o=t(45392);function a(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { DBPopover } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBPopover],\n  // ...\n})\n"})}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n<db-popover>\n	<db-button trigger> Hover on me to open Popover </db-button>\n	Use any html code here like e.g. a <code>button</code>:\n	<button type="button">Test</button>\n</db-popover>\n'})})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},20089:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(52322),o=t(45392);function a(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"html",children:"HTML"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-popover">\n		<button aria-haspopup="true" class="db-button" type="button">\n			Hover on me to open Popover\n		</button>\n		<article class="db-popover-content">\n			Use any html code here like e.g. a <code>button</code>:\n			<button type="button">Test</button>\n		</article>\n	</div>\n</body>\n'})})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},60380:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(52322),o=t(45392);function a(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { DBPopover, DBButton } from "@db-ui/react-components";\n\nconst App = () => (\n	<DBPopover slotTrigger={<DBButton>Hover on me to open Popover</DBButton>}>\n		Use any html code here like e.g. a <code>button</code>:\n		<button type="button">Test</button>\n	</DBPopover>\n);\n\nexport default App;\n'})})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},90798:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(52322),o=t(45392);function a(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"vue",children:"Vue"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBPopover, DBButton } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBPopover>\n		<template v-slot:trigger>\n			<DBButton> Hover on me to open Popover </DBButton>\n		</template>\n		Use any html code here like e.g. a <code>button</code>:\n		<button type="button">Test</button>\n	</DBPopover>\n</template>\n'})})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},69040:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var r=t(52322),o=t(45392),a=t(12156),s=t(20089),i=t(52584),c=t(60380),l=t(90798);let u=n=>{let{children:e}=n;return(0,r.jsx)(a.Z,{children:e})};function d(n){let e={h1:"h1",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"how-to-use-dbpopover",children:"How to use DBPopover"}),"\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsx)(l.default,{})]})}function p(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(u,{...n,children:(0,r.jsx)(d,{...n})})}},16134:function(n,e,t){"use strict";var r=t(52322),o=t(2784),a=t(13776);let s=(0,o.forwardRef)(function(n,e){let t=e||(0,o.useRef)(e);return(0,r.jsx)("button",{ref:t,...(0,a.mS)(n,[]),id:n.id,className:(0,a.yI)("db-button",n.className,{"is-icon-text-replace":n.noText}),type:n.type,title:n.title,disabled:n.disabled,"aria-label":n.label,"data-icon":n.icon,"data-size":n.size,"data-state":n.state,"data-width":n.width,"data-variant":n.variant,name:n.name,value:n.value,"aria-describedby":n.describedbyid,"aria-expanded":n.ariaexpanded,"aria-pressed":n.ariapressed,onClick:e=>{n.onClick&&n.onClick(e)},children:n.children})});e.Z=s},63900:function(n,e,t){"use strict";var r,o,a,s,i,c,l;t.d(e,{IY:function(){return u},YP:function(){return d},ce:function(){return p}});let u="OVERWRITE_DEFAULT_ID",d="Back",p="Close Button";(i=r||(r={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive",Object.entries(r).map(n=>{let[,e]=n;return e}),(o||(o={})).PRIMARY="primary",(c=a||(a={})).BASE="base",c.BASE_STRONG="base-strong",c.BASE_TRANSPARENT_SEMI="base-transparent-semi",c.BASE_TRANSPARENT_FULL="base-transparent-full",c.NEUTRAL="neutral",c.NEUTRAL_STRONG="neutral-strong",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.BRAND="brand",c.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",c.BRAND_TRANSPARENT_FULL="brand-transparent-full",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.WARNING="warning",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(a).map(n=>{let[,e]=n;return e}),Object.entries(o).map(n=>{let[,e]=n;return e}),(l=s||(s={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(s).map(n=>{let[,e]=n;return e})},13776:function(n,e,t){"use strict";t.d(e,{MN:function(){return c},Vj:function(){return r},cd:function(){return i},mS:function(){return s},yI:function(){return a},yn:function(){return o}});let r=()=>{var n,e;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},o=(n,e)=>{Object.values(n.children).forEach(n=>{n.setAttribute(e.key,e.value),n.children.length>0&&o(n,e)})},a=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];let r="";return e.forEach((n,e)=>{if(n){if("string"==typeof n)r+="".concat(n," ");else for(let e in n)n[e]&&(r+="".concat(e," "))}}),r.trim()},s=(n,e)=>Object.keys(n).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("on"))&&!e.includes(n)).reduce((e,t)=>(e[t]=n[t],e),{}),i=n=>{let{left:e,right:t}=n.getBoundingClientRect(),{innerWidth:r}=window;return e>=0&&t<=r},c=n=>{let{top:e,bottom:t}=n.getBoundingClientRect(),{innerHeight:r}=window;return e>=0&&t<=r}}},function(n){n.O(0,[49710,12156,92888,49774,40179],function(){return n(n.s=467)}),_N_E=n.O()}]);