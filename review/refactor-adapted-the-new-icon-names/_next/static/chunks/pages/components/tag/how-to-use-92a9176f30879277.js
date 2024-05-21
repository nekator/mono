(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11250],{27107:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag/how-to-use",function(){return e(31557)}])},3378:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return i}});var a=e(52322),r=e(45392);function o(n){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// app.component.ts\nimport { DBTag } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBTag],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!-- app.component.html -->\n<db-tag><db-button>Tag as Button</db-button></db-tag>\n<db-tag>\n	<db-link> Tag as Link </db-link>\n</db-tag>\n<db-tag><db-checkbox>Tag as Checkbox</db-checkbox></db-tag>\n<db-tag><db-radio>Tag as Radio</db-radio></db-tag>\n<db-tag>Static Tag</db-tag>\n<db-tag [overflow]="true"><span>Static Tag with overflow</span></db-tag>\n'})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},22223:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return i}});var a=e(52322),r=e(45392);function o(n){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-tag">\n		<span class="tag-label">Regular (Default)</span>\n	</div>\n</body>\n'})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},79011:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return i}});var a=e(52322),r=e(45392);function o(n){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'// App.tsx\nimport { DBTag } from "@db-ui/react-components";\n\nconst App = () => (\n	<>\n		<DBTag>\n			<DBButton>Tag as Button</DBButton>\n		</DBTag>\n		<DBTag>\n			<DBLink>Tag as Link</DBLink>\n		</DBTag>\n		<DBTag>\n			<DBCheckbox>Tag as Checkbox</DBCheckbox>\n		</DBTag>\n		<DBTag>\n			<DBRadio>Tag as Radio</DBRadio>\n		</DBTag>\n		<DBTag>Static Tag</DBTag>\n		<DBTag overflow={true}>\n			<span>Static Tag with overflow</span>\n		</DBTag>\n	</>\n);\n\nexport default App;\n'})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},98587:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return i}});var a=e(52322),r=e(45392);function o(n){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBTag } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBTag><DBButton>Tag as Button</DBButton></DBTag>\n	<DBTag>\n		<DBLink> Tag as Link </DBLink>\n	</DBTag>\n	<DBTag><DBCheckbox>Tag as Checkbox</DBCheckbox></DBTag>\n	<DBTag><DBRadio>Tag as Radio</DBRadio></DBTag>\n	<DBTag>Static Tag</DBTag>\n	<DBTag :overflow="true">\n		<span>Static Tag with overflow</span>\n	</DBTag>\n</template>\n'})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},31557:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return g}});var a=e(52322),r=e(45392),o=e(55216),i=e(22223),s=e(3378),l=e(79011),c=e(98587);let d=n=>{let{children:t}=n;return(0,a.jsx)(o.Z,{children:t})};function u(n){let t={h1:"h1",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-use-dbtag",children:"How to use DBTag"}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(c.default,{})]})}function g(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...n,children:(0,a.jsx)(u,{...n})})}},10326:function(n,t,e){"use strict";var a=e(52322),r=e(2784),o=e(43251);let i=(0,r.forwardRef)(function(n,t){let e=t||(0,r.useRef)(t);return(0,a.jsx)("button",{ref:e,...(0,o.mS)(n,[]),id:n.id,className:(0,o.yI)("db-button",n.className),type:n.type,disabled:n.disabled,"aria-label":n.label,"data-icon":n.icon,"data-size":n.size,"data-state":n.state,"data-width":n.width,"data-variant":n.variant,"data-no-text":n.noText,name:n.name,value:n.value,"aria-describedby":n.describedbyid,"aria-expanded":n.ariaexpanded,"aria-pressed":n.ariapressed,onClick:t=>{n.onClick&&n.onClick(t)},children:n.children})});t.Z=i},55482:function(n,t,e){"use strict";var a,r,o,i,s,l,c;e.d(t,{IY:function(){return d},YP:function(){return u},ce:function(){return g}});let d="OVERWRITE_DEFAULT_ID",u="Back",g="Close Button";(s=a||(a={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(a).map(n=>{let[,t]=n;return t}),(r||(r={})).PRIMARY="primary",(l=o||(o={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",l.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",l.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",l.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",l.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",l.BRAND_BG_LEVEL_1="brand-bg-lvl-1",l.BRAND_BG_LEVEL_2="brand-bg-lvl-2",l.BRAND_BG_LEVEL_3="brand-bg-lvl-3",l.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",l.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",l.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",l.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",l.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",l.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",l.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",l.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",l.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",l.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",l.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",l.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",l.WARNING_BG_LEVEL_1="warning-bg-lvl-1",l.WARNING_BG_LEVEL_2="warning-bg-lvl-2",l.WARNING_BG_LEVEL_3="warning-bg-lvl-3",l.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",l.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",l.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",l.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",l.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",l.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",l.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(o).map(n=>{let[,t]=n;return t}),Object.entries(r).map(n=>{let[,t]=n;return t}),(c=i||(i={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(i).map(n=>{let[,t]=n;return t})},43251:function(n,t,e){"use strict";e.d(t,{Lp:function(){return c},Vj:function(){return a},mS:function(){return s},yI:function(){return o},yn:function(){return r}});let a=()=>{var n,t;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(n,t)=>{Object.values(n.children).forEach(n=>{n.setAttribute(t.key,t.value),n.children.length>0&&r(n,t)})},o=function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];let a="";return t.forEach((n,t)=>{if(n){if("string"==typeof n)a+="".concat(n," ");else for(let t in n)n[t]&&(a+="".concat(t," "))}}),a.trim()},i=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],s=(n,t)=>Object.keys(n).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("item")||n.startsWith("on")||i.includes(n))&&!t.includes(n)).reduce((t,e)=>(t[e]=n[e],t),{}),l=n=>{var t;let{top:e,bottom:a,left:r,right:o,height:i,width:s}=n.getBoundingClientRect(),{innerHeight:l,innerWidth:c}=window,d=e<0,u=a>l,g=r<0,p=o>c,h=n.hasAttribute("data-outside-vy"),b=n.hasAttribute("data-outside-vx"),f=null==n?void 0:null===(t=n.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return f&&(h&&("top"===n.getAttribute("data-outside-vy")?d=f.top-(a-f.bottom)<0:u=f.bottom+(f.top-e)>l),b&&("left"===n.getAttribute("data-outside-vx")?g=f.left-(o-f.right)<0:p=f.right+(f.left-r)>c)),{outTop:d,outBottom:u,outLeft:g,outRight:p}},c=n=>{let{outTop:t,outBottom:e,outLeft:a,outRight:r}=l(n),o={};return t||e?(o={vy:t?"top":"bottom"},n.setAttribute("data-outside-vy",o.vy)):n.removeAttribute("data-outside-vy"),a||r?(o={...o,vx:r?"right":"left"},n.setAttribute("data-outside-vx",o.vx)):n.removeAttribute("data-outside-vx"),o}}},function(n){n.O(0,[49710,55216,92888,49774,40179],function(){return n(n.s=27107)}),_N_E=n.O()}]);