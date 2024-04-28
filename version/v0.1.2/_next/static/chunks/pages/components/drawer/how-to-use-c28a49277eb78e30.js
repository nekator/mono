(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43920],{34764:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer/how-to-use",function(){return t(84294)}])},699:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var r=t(52322),a=t(45392);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"general",children:"General"}),"\n",(0,r.jsxs)(e.p,{children:["If you use ",(0,r.jsx)(e.code,{children:"width !== full"})," you are able to overwrite the ",(0,r.jsx)(e.code,{children:"max-width"})," with ",(0,r.jsx)(e.code,{children:"--db-drawer-max-width:"})," CSS variable."]}),"\n",(0,r.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { DBDrawer } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBDrawer],\n  // ...\n})\n"})}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-drawer [open]="openDrawer" (onClose)="toggleDrawer(false)">\n	My Drawer content\n</db-drawer>\n<db-button (click)="toggleDrawer(true)"> Open me </db-button>\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nexport class AppComponent {\n	openDrawer: boolean = false;\n	toggleDrawer = (open: boolean) => {\n		this.openDrawer = open;\n	};\n}\n"})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},2461:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var r=t(52322),a=t(45392);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"html",children:"HTML"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"general",children:"General"}),"\n",(0,r.jsxs)(e.p,{children:["If you use ",(0,r.jsx)(e.code,{children:"width !== full"})," you are able to overwrite the ",(0,r.jsx)(e.code,{children:"max-width"})," with ",(0,r.jsx)(e.code,{children:"--db-drawer-max-width:"})," CSS variable."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<dialog class="db-drawer" data-backdrop="true" open>\n		<article class="db-drawer-container">\n			<header class="db-drawer-header">\n				<button\n					class="db-button button-close-drawer is-icon-text-replace"\n					data-icon="cross"\n					data-variant="ghost"\n				>\n					Close Button\n				</button>\n			</header>\n			<div class="db-drawer-content">My Drawer content</div>\n		</article>\n	</dialog>\n</body>\n'})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},57838:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var r=t(52322),a=t(45392);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"general",children:"General"}),"\n",(0,r.jsxs)(e.p,{children:["If you use ",(0,r.jsx)(e.code,{children:"width !== full"})," you are able to overwrite the ",(0,r.jsx)(e.code,{children:"max-width"})," with ",(0,r.jsx)(e.code,{children:"--db-drawer-max-width:"})," CSS variable."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBButton, DBDrawer } from "@db-ui/react-components";\n\nconst App = () => {\n	const [open, setOpen] = useState<boolean>(false);\n	return (\n		<div>\n			<DBDrawer\n				open={open}\n				onClose={() => {\n					setOpen(false);\n				}}\n			>\n				My Drawer content\n			</DBDrawer>\n			<DBButton\n				onClick={() => {\n					setOpen(true);\n				}}\n			>\n				Open Me\n			</DBButton>\n		</div>\n	);\n};\n\nexport default App;\n'})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},19204:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var r=t(52322),a=t(45392);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"vue",children:"Vue"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"general",children:"General"}),"\n",(0,r.jsxs)(e.p,{children:["If you use ",(0,r.jsx)(e.code,{children:"width !== full"})," you are able to overwrite the ",(0,r.jsx)(e.code,{children:"max-width"})," with ",(0,r.jsx)(e.code,{children:"--db-drawer-max-width:"})," CSS variable."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script setup lang="ts">\nimport { ref } from "vue";\nimport { DBDrawer } from "@db-ui/v-components";\n\nconst openDrawer = ref<boolean>(false);\n\nconst toggleDrawer = (open: boolean) => {\n	openDrawer.value = open;\n};\n</script>\n\n<template>\n	<DBDrawer :open="openDrawer" @close="toggleDrawer(false)">\n		My Drawer content\n	</DBDrawer>\n	<DBButton @click="toggleDrawer(true)">Open me</DBButton>\n</template>\n'})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},84294:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var r=t(52322),a=t(45392),o=t(55216),l=t(2461),i=t(699),s=t(57838),c=t(19204);let d=n=>{let{children:e}=n;return(0,r.jsx)(o.Z,{children:e})};function u(n){let e={h1:"h1",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"how-to-use-dbdrawer",children:"How to use DBDrawer"}),"\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(c.default,{})]})}function p(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...n,children:(0,r.jsx)(u,{...n})})}},10326:function(n,e,t){"use strict";var r=t(52322),a=t(2784),o=t(43251);let l=(0,a.forwardRef)(function(n,e){let t=e||(0,a.useRef)(e);return(0,r.jsx)("button",{ref:t,...(0,o.mS)(n,[]),id:n.id,className:(0,o.yI)("db-button",n.className),type:n.type,disabled:n.disabled,"aria-label":n.label,"data-icon":n.icon,"data-size":n.size,"data-state":n.state,"data-width":n.width,"data-variant":n.variant,"data-no-text":n.noText,name:n.name,value:n.value,"aria-describedby":n.describedbyid,"aria-expanded":n.ariaexpanded,"aria-pressed":n.ariapressed,onClick:e=>{n.onClick&&n.onClick(e)},children:n.children})});e.Z=l},55482:function(n,e,t){"use strict";var r,a,o,l,i,s,c;t.d(e,{IY:function(){return d},YP:function(){return u},ce:function(){return p}});let d="OVERWRITE_DEFAULT_ID",u="Back",p="Close Button";(i=r||(r={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive",Object.entries(r).map(n=>{let[,e]=n;return e}),(a||(a={})).PRIMARY="primary",(s=o||(o={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",s.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",s.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",s.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",s.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",s.BRAND_BG_LEVEL_1="brand-bg-lvl-1",s.BRAND_BG_LEVEL_2="brand-bg-lvl-2",s.BRAND_BG_LEVEL_3="brand-bg-lvl-3",s.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",s.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",s.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",s.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",s.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",s.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",s.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",s.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",s.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",s.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",s.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",s.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",s.WARNING_BG_LEVEL_1="warning-bg-lvl-1",s.WARNING_BG_LEVEL_2="warning-bg-lvl-2",s.WARNING_BG_LEVEL_3="warning-bg-lvl-3",s.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",s.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",s.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",s.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",s.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",s.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",s.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(o).map(n=>{let[,e]=n;return e}),Object.entries(a).map(n=>{let[,e]=n;return e}),(c=l||(l={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(l).map(n=>{let[,e]=n;return e})},43251:function(n,e,t){"use strict";t.d(e,{MN:function(){return c},Vj:function(){return r},cd:function(){return s},mS:function(){return i},yI:function(){return o},yn:function(){return a}});let r=()=>{var n,e;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(n,e)=>{Object.values(n.children).forEach(n=>{n.setAttribute(e.key,e.value),n.children.length>0&&a(n,e)})},o=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];let r="";return e.forEach((n,e)=>{if(n){if("string"==typeof n)r+="".concat(n," ");else for(let e in n)n[e]&&(r+="".concat(e," "))}}),r.trim()},l=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],i=(n,e)=>Object.keys(n).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("item")||n.startsWith("on")||l.includes(n))&&!e.includes(n)).reduce((e,t)=>(e[t]=n[t],e),{}),s=n=>{let{left:e,right:t}=n.getBoundingClientRect(),{innerWidth:r}=window;return e>=0&&t<=r},c=n=>{let{top:e,bottom:t}=n.getBoundingClientRect(),{innerHeight:r}=window;return e>=0&&t<=r}}},function(n){n.O(0,[49710,55216,92888,49774,40179],function(){return n(n.s=34764)}),_N_E=n.O()}]);