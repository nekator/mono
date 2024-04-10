(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24297],{41013:function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tab/how-to-use",function(){return t(75183)}])},19608:function(n,a,t){"use strict";t.r(a),t.d(a,{default:function(){return s}});var e=t(52322),r=t(45392);function l(n){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.h2,{id:"angular",children:"Angular"}),"\n",(0,e.jsxs)(a.p,{children:["For general installation and configuration take a look at the ",(0,e.jsx)(a.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,e.jsx)(a.h3,{id:"load-component",children:"Load component"}),"\n",(0,e.jsx)(a.p,{children:"You can't use the component standalone!"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-ts",children:"//app.module.ts\nimport { DBTab, DBTabList, DBTabPanel, DBTabs } from '@db-ui/ngx-components';\n\n@NgModule({\n  ...\n  standalone: true,\n  imports: [..., DBTab,DBTabList,DBTabPanel,DBTabs],\n  ...\n})\n\n"})}),"\n",(0,e.jsx)(a.h3,{id:"use-component",children:"Use component"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-html",children:"<!-- app.component.html -->\n<db-tabs>\n	<db-tab-list>\n		<db-tab>Tab 1</db-tab>\n		<db-tab>Tab 2</db-tab>\n		<db-tab>Tab 3</db-tab>\n	</db-tab-list>\n	<db-tab-panel>Tab Panel 1</db-tab-panel>\n	<db-tab-panel>Tab Panel 2</db-tab-panel>\n	<db-tab-panel>Tab Panel 3</db-tab-panel>\n</db-tabs>\n"})})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,r.a)(),...n.components};return a?(0,e.jsx)(a,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},45152:function(n,a,t){"use strict";t.r(a),t.d(a,{default:function(){return s}});var e=t(52322),r=t(45392);function l(n){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.h2,{id:"html",children:"HTML"}),"\n",(0,e.jsxs)(a.p,{children:["For general installation and configuration take a look at the ",(0,e.jsx)(a.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,e.jsx)(a.h3,{id:"use-component",children:"Use component"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-tabs">\n		<div role="tablist" class="db-tab-list" aria-orientation="horizontal">\n			<div class="db-tab-list-scroll-container">\n				<label\n					role="tab"\n					for="my-tabs-tab-0"\n					class="db-tab"\n					data-width="auto"\n					data-alignment="start"\n					aria-controls="my-tabs-tab-panel-0"\n					><input\n						type="radio"\n						id="my-tabs-tab-0"\n						name="my-tabs"\n					/>Test 1</label\n				><label\n					role="tab"\n					for="my-tabs-tab-1"\n					class="db-tab"\n					data-width="auto"\n					data-alignment="start"\n					aria-controls="my-tabs-tab-panel-1"\n					><input\n						type="radio"\n						id="my-tabs-tab-1"\n						name="my-tabs"\n					/>Test 2</label\n				><label\n					role="tab"\n					for="my-tabs-tab-2"\n					class="db-tab"\n					data-width="auto"\n					data-alignment="start"\n					aria-controls="my-tabs-tab-panel-2"\n					><input\n						type="radio"\n						id="my-tabs-tab-2"\n						name="my-tabs"\n					/>Test 3</label\n				>\n			</div>\n		</div>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-0"\n			aria-labelledby="my-tabs-tab-0"\n		>\n			Tab Panel 1\n		</article>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-1"\n			aria-labelledby="my-tabs-tab-1"\n		>\n			Tab Panel 2\n		</article>\n		<article\n			role="tabpanel"\n			class="db-tab-panel"\n			id="my-tabs-tab-panel-2"\n			aria-labelledby="my-tabs-tab-2"\n		>\n			Tab Panel 3\n		</article>\n	</div>\n</body>\n'})})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,r.a)(),...n.components};return a?(0,e.jsx)(a,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},91961:function(n,a,t){"use strict";t.r(a),t.d(a,{default:function(){return s}});var e=t(52322),r=t(45392);function l(n){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.h2,{id:"react",children:"React"}),"\n",(0,e.jsxs)(a.p,{children:["For general installation and configuration take a look at the ",(0,e.jsx)(a.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,e.jsx)(a.h3,{id:"use-component",children:"Use component"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-tsx",children:'// App.tsx\nimport { DBTab, DBTabList, DBTabs, DBTabPanel } from "@db-ui/react-components";\n\nconst App = () => (\n	<DBTabs>\n		<DBTabList>\n			<DBTab>Tab 1</DBTab>\n			<DBTab>Tab 2</DBTab>\n			<DBTab>Tab 3</DBTab>\n		</DBTabList>\n		<DBTabPanel>Tab Panel 1</DBTabPanel>\n		<DBTabPanel>Tab Panel 2</DBTabPanel>\n		<DBTabPanel>Tab Panel 3</DBTabPanel>\n	</DBTabs>\n);\n\nexport default App;\n'})})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,r.a)(),...n.components};return a?(0,e.jsx)(a,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},62194:function(n,a,t){"use strict";t.r(a),t.d(a,{default:function(){return s}});var e=t(52322),r=t(45392);function l(n){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.h2,{id:"vue",children:"Vue"}),"\n",(0,e.jsxs)(a.p,{children:["For general installation and configuration take a look at the ",(0,e.jsx)(a.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,e.jsx)(a.h3,{id:"use-component",children:"Use component"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBTabPanel, DBTabs, DBTabList, DBTab } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBTabs>\n		<DBTabList>\n			<DBTab>Tab 1</DBTab>\n			<DBTab>Tab 2</DBTab>\n			<DBTab>Tab 3</DBTab>\n		</DBTabList>\n		<DBTabPanel>Tab Panel 1</DBTabPanel>\n		<DBTabPanel>Tab Panel 2</DBTabPanel>\n		<DBTabPanel>Tab Panel 3</DBTabPanel>\n	</DBTabs>\n</template>\n'})})]})}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,r.a)(),...n.components};return a?(0,e.jsx)(a,{...n,children:(0,e.jsx)(l,{...n})}):l(n)}},75183:function(n,a,t){"use strict";t.r(a),t.d(a,{default:function(){return u}});var e=t(52322),r=t(45392),l=t(10851),s=t(45152),i=t(19608),o=t(91961),c=t(62194);let b=n=>{let{children:a}=n;return(0,e.jsx)(l.Z,{children:a})};function d(n){let a={h1:"h1",...(0,r.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.h1,{id:"how-to-use-dbtab",children:"How to use DBTab"}),"\n",(0,e.jsx)(s.default,{}),"\n",(0,e.jsx)(i.default,{}),"\n",(0,e.jsx)(o.default,{}),"\n",(0,e.jsx)(c.default,{})]})}function u(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,e.jsx)(b,{...n,children:(0,e.jsx)(d,{...n})})}},16134:function(n,a,t){"use strict";var e=t(52322),r=t(2784),l=t(13776);let s=(0,r.forwardRef)(function(n,a){let t=a||(0,r.useRef)(a);return(0,e.jsx)("button",{ref:t,...(0,l.mS)(n,[]),id:n.id,className:(0,l.yI)("db-button",n.className),type:n.type,title:n.title,disabled:n.disabled,"aria-label":n.label,"data-icon":n.icon,"data-size":n.size,"data-state":n.state,"data-width":n.width,"data-variant":n.variant,"data-no-text":n.noText,name:n.name,value:n.value,"aria-describedby":n.describedbyid,"aria-expanded":n.ariaexpanded,"aria-pressed":n.ariapressed,onClick:a=>{n.onClick&&n.onClick(a)},children:n.children})});a.Z=s},63900:function(n,a,t){"use strict";var e,r,l,s,i,o,c;t.d(a,{IY:function(){return b},YP:function(){return d},ce:function(){return u}});let b="OVERWRITE_DEFAULT_ID",d="Back",u="Close Button";(i=e||(e={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive",Object.entries(e).map(n=>{let[,a]=n;return a}),(r||(r={})).PRIMARY="primary",(o=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",o.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",o.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",o.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",o.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",o.BRAND_BG_LEVEL_1="brand-bg-lvl-1",o.BRAND_BG_LEVEL_2="brand-bg-lvl-2",o.BRAND_BG_LEVEL_3="brand-bg-lvl-3",o.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",o.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",o.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",o.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",o.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",o.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",o.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",o.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",o.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",o.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",o.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",o.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",o.WARNING_BG_LEVEL_1="warning-bg-lvl-1",o.WARNING_BG_LEVEL_2="warning-bg-lvl-2",o.WARNING_BG_LEVEL_3="warning-bg-lvl-3",o.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",o.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",o.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",o.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",o.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",o.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",o.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(n=>{let[,a]=n;return a}),Object.entries(r).map(n=>{let[,a]=n;return a}),(c=s||(s={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(s).map(n=>{let[,a]=n;return a})},13776:function(n,a,t){"use strict";t.d(a,{MN:function(){return o},Vj:function(){return e},cd:function(){return i},mS:function(){return s},yI:function(){return l},yn:function(){return r}});let e=()=>{var n,a;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(a=window.crypto)||void 0===a?void 0:a.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(n,a)=>{Object.values(n.children).forEach(n=>{n.setAttribute(a.key,a.value),n.children.length>0&&r(n,a)})},l=function(){for(var n=arguments.length,a=Array(n),t=0;t<n;t++)a[t]=arguments[t];let e="";return a.forEach((n,a)=>{if(n){if("string"==typeof n)e+="".concat(n," ");else for(let a in n)n[a]&&(e+="".concat(a," "))}}),e.trim()},s=(n,a)=>Object.keys(n).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("on"))&&!a.includes(n)).reduce((a,t)=>(a[t]=n[t],a),{}),i=n=>{let{left:a,right:t}=n.getBoundingClientRect(),{innerWidth:e}=window;return a>=0&&t<=e},o=n=>{let{top:a,bottom:t}=n.getBoundingClientRect(),{innerHeight:e}=window;return a>=0&&t<=e}}},function(n){n.O(0,[49710,10851,92888,49774,40179],function(){return n(n.s=41013)}),_N_E=n.O()}]);