(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42735],{59675:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/textarea/how-to-use",function(){return t(94802)}])},67726:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var a=t(52322),r=t(45392);function l(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBTextarea } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBTextarea],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'import { Component } from "@angular/core";\n\n@Component({\n	selector: "app-root",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	textarea = "default value";\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-textarea\n	name="textarea"\n	label="Textarea Controlled"\n	placeholder="Placeholder"\n	description="Description"\n	icon="account"\n	[value]="textarea"\n	(change)="textarea = $event.target.value"\n></db-textarea>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},77935:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var a=t(52322),r=t(45392);function l(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-textarea">\n		<label for="textarea">Label</label>\n		<textarea id="textarea" rows="2" cols="33" placeholder=" "></textarea>\n	</div>\n</body>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},74900:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var a=t(52322),r=t(45392);function l(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBTextarea } from "@db-ui/react-components";\n\nconst App = () => {\n	const [textarea, setTextarea] = useState("default textarea");\n	return (\n		<DBTextarea\n			label="Textarea Controlled"\n			value={textarea}\n			onChange={(event) => {\n				setTextarea(event.target.value);\n			}}\n		/>\n	);\n};\n\nexport default App;\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8687:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var a=t(52322),r=t(45392);function l(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,a.jsxs)(n.p,{children:["You cannot use a default value for ",(0,a.jsx)(n.a,{href:"https://vuejs.org/guide/essentials/forms.html#multiline-text",children:"textarea in vue"}),".\nUse ",(0,a.jsx)(n.code,{children:"v-model:value"})," or ",(0,a.jsx)(n.code,{children:":value"})," instead with a ",(0,a.jsx)(n.code,{children:'ref("My default value")'}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script setup lang="ts">\nimport { ref } from "vue";\nimport { DBTextarea } from "@db-ui/v-components";\n\nconst textarea = ref("default value");\n</script>\n\n<template>\n	<DBTextarea\n		label="Textarea value"\n		placeholder="Placeholder"\n		description="Description"\n		icon="account"\n		name="textarevalue-name"\n		v-model:value="textarea"\n	/>\n</template>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},94802:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var a=t(52322),r=t(45392),l=t(10851),o=t(77935),i=t(67726),c=t(74900),s=t(8687);let u=e=>{let{children:n}=e;return(0,a.jsx)(l.Z,{children:n})};function d(e){let n={h1:"h1",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-use-dbtextarea",children:"How to use DBTextarea"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(s.default,{})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(u,{...e,children:(0,a.jsx)(d,{...e})})}},16134:function(e,n,t){"use strict";var a=t(52322),r=t(2784),l=t(13776);let o=(0,r.forwardRef)(function(e,n){let t=n||(0,r.useRef)(n);return(0,a.jsx)("button",{ref:t,...(0,l.mS)(e,[]),id:e.id,className:(0,l.yI)("db-button",e.className),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=o},63900:function(e,n,t){"use strict";var a,r,l,o,i,c,s;t.d(n,{IY:function(){return u},YP:function(){return d},ce:function(){return p}});let u="OVERWRITE_DEFAULT_ID",d="Back",p="Close Button";(i=a||(a={})).FUNCTIONAL="functional",i.REGULAR="regular",i.EXPRESSIVE="expressive",Object.entries(a).map(e=>{let[,n]=e;return n}),(r||(r={})).PRIMARY="primary",(c=l||(l={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",c.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",c.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",c.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",c.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",c.BRAND_BG_LEVEL_1="brand-bg-lvl-1",c.BRAND_BG_LEVEL_2="brand-bg-lvl-2",c.BRAND_BG_LEVEL_3="brand-bg-lvl-3",c.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",c.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",c.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",c.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",c.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",c.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",c.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",c.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",c.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",c.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",c.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",c.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",c.WARNING_BG_LEVEL_1="warning-bg-lvl-1",c.WARNING_BG_LEVEL_2="warning-bg-lvl-2",c.WARNING_BG_LEVEL_3="warning-bg-lvl-3",c.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",c.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",c.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",c.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",c.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",c.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",c.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(l).map(e=>{let[,n]=e;return n}),Object.entries(r).map(e=>{let[,n]=e;return n}),(s=o||(o={})).CRITICAL="critical",s.INFORMATIONAL="informational",s.WARNING="warning",s.SUCCESSFUL="successful",Object.entries(o).map(e=>{let[,n]=e;return n})},13776:function(e,n,t){"use strict";t.d(n,{MN:function(){return c},Vj:function(){return a},cd:function(){return i},mS:function(){return o},yI:function(){return l},yn:function(){return r}});let a=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},r=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&r(e,n)})},l=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let a="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let n in e)e[n]&&(a+="".concat(n," "))}}),a.trim()},o=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!n.includes(e)).reduce((n,t)=>(n[t]=e[t],n),{}),i=e=>{let{left:n,right:t}=e.getBoundingClientRect(),{innerWidth:a}=window;return n>=0&&t<=a},c=e=>{let{top:n,bottom:t}=e.getBoundingClientRect(),{innerHeight:a}=window;return n>=0&&t<=a}}},function(e){e.O(0,[49710,10851,92888,49774,40179],function(){return e(e.s=59675)}),_N_E=e.O()}]);