(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30097],{86788:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox/how-to-use",function(){return t(2219)}])},31453:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var r=t(52322),o=t(45392);function c(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { DBCheckbox } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBCheckbox],\n  // ...\n})\n"})}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n<ul>\n	@for (checkboxName of checkboxNames; track checkboxName) {\n	<li>\n		<db-checkbox\n			(change)="checkbox = checkboxName"\n			[label]="\'Checkbox \' + checkboxName"\n			[value]="checkboxName"\n			name="CheckboxGroup"\n		></db-checkbox>\n	</li>\n	}\n</ul>\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'// app.component.ts\nimport { Component } from "@angular/core";\n\n@Component({\n	selector: "app-app",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	checkboxNames = ["X", "Y", "Z"];\n	checkbox = "";\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"how-to-use-with-template-driven-forms",children:"How to use with Template Driven Forms"}),"\n",(0,r.jsxs)(e.p,{children:["Third party controls require a ",(0,r.jsx)(e.code,{children:"ControlValueAccessor"})," to function with angular forms. Adding an ",(0,r.jsx)(e.code,{children:"ngDefaultControl"})," attribute will allow them to use that directive.\n",(0,r.jsx)(e.a,{href:"https://stackoverflow.com/a/46465959",children:"Further information"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"//app.component.ts\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n	// ...\n	imports: [\n		// ...,\n		FormsModule\n    ],\n	// ...\n})\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<!-- form.component.html -->\n<form>\n	<db-checkbox\n		(change)="checkbox = $event.target.checked"\n		name="checkbox"\n		label="Checkbox"\n	></db-checkbox>\n	<db-button type="button" variant="primary" (click)="showValues()"\n		>Get checkbox value</db-button\n	>\n</form>\n\n<h2>Output</h2>\n<dl>\n	<dt>checkbox\'s value</dt>\n	<dd>checkbox {{ checkbox ? "" : "un" }}checked</dd>\n</dl>\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'// form.component.ts\nexport class FormComponent {\n	checkbox = "";\n	showValues(): void {\n		alert(JSON.stringify({ checkbox: this.checkbox }));\n	}\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"how-to-use-with-reactive-forms",children:"How to use with Reactive Forms"}),"\n",(0,r.jsx)(e.p,{children:"coming soon … if your interested in contributing, you're very welcome ;)"})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},3992:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var r=t(52322),o=t(45392);function c(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"html",children:"HTML"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<label class="db-checkbox" for="checkbox-element">\n		<input type="checkbox" id="checkbox-element" name="States" />\n		Label\n	</label>\n</body>\n'})})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},88664:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var r=t(52322),o=t(45392);function c(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBCheckbox } from "@db-ui/react-components";\n\nconst App = () => {\n	const [checkbox, setCheckbox] = useState("");\n\n	return (\n		<DBCheckbox\n			name="checkbox"\n			value="Checkbox checked"\n			onChange={(event) => {\n				setCheckbox(event.target.checked);\n			}}\n		>\n			Checkbox\n		</DBCheckbox>\n	);\n};\n\nexport default App;\n'})})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},52023:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var r=t(52322),o=t(45392);function c(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"vue",children:"Vue"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script setup lang="ts">\nimport { DBCheckbox } from "@db-ui/v-components";\nimport { ref } from "vue";\nconst checkbox = ref("");\n</script>\n\n<template>\n	<DBCheckbox @change="checkbox = $event.target.checked" name="checkbox">\n		Checkbox\n	</DBCheckbox>\n</template>\n'})})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},2219:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var r=t(52322),o=t(45392),c=t(12156),a=t(3992),s=t(31453),i=t(88664),l=t(52023);let d=n=>{let{children:e}=n;return(0,r.jsx)(c.Z,{children:e})};function u(n){let e={h1:"h1",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"how-to-use-dbcheckbox",children:"How to use DBCheckbox"}),"\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(l.default,{})]})}function h(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...n,children:(0,r.jsx)(u,{...n})})}},16134:function(n,e,t){"use strict";var r=t(52322),o=t(2784),c=t(13776);let a=(0,o.forwardRef)(function(n,e){let t=e||(0,o.useRef)(e);return(0,r.jsx)("button",{ref:t,...(0,c.mS)(n,[]),id:n.id,className:(0,c.yI)("db-button",n.className,{"is-icon-text-replace":n.noText}),type:n.type,title:n.title,disabled:n.disabled,"aria-label":n.label,"data-icon":n.icon,"data-size":n.size,"data-state":n.state,"data-width":n.width,"data-variant":n.variant,name:n.name,value:n.value,"aria-describedby":n.describedbyid,"aria-expanded":n.ariaexpanded,"aria-pressed":n.ariapressed,onClick:e=>{n.onClick&&n.onClick(e)},children:n.children})});e.Z=a},63900:function(n,e,t){"use strict";var r,o,c,a,s,i,l;t.d(e,{IY:function(){return d},YP:function(){return u},ce:function(){return h}});let d="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(s=r||(r={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(r).map(n=>{let[,e]=n;return e}),(o||(o={})).PRIMARY="primary",(i=c||(c={})).BASE="base",i.BASE_STRONG="base-strong",i.BASE_TRANSPARENT_SEMI="base-transparent-semi",i.BASE_TRANSPARENT_FULL="base-transparent-full",i.NEUTRAL="neutral",i.NEUTRAL_STRONG="neutral-strong",i.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",i.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",i.BRAND="brand",i.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",i.BRAND_TRANSPARENT_FULL="brand-transparent-full",i.SUCCESSFUL="successful",i.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",i.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",i.CRITICAL="critical",i.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",i.CRITICAL_TRANSPARENT_Full="critical-transparent-full",i.WARNING="warning",i.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",i.WARNING_TRANSPARENT_FULL="warning-transparent-full",i.INFORMATIONAL="informational",i.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",i.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(c).map(n=>{let[,e]=n;return e}),Object.entries(o).map(n=>{let[,e]=n;return e}),(l=a||(a={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(a).map(n=>{let[,e]=n;return e})},13776:function(n,e,t){"use strict";t.d(e,{MN:function(){return i},Vj:function(){return r},cd:function(){return s},mS:function(){return a},yI:function(){return c},yn:function(){return o}});let r=()=>{var n,e;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},o=(n,e)=>{Object.values(n.children).forEach(n=>{n.setAttribute(e.key,e.value),n.children.length>0&&o(n,e)})},c=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];let r="";return e.forEach((n,e)=>{if(n){if("string"==typeof n)r+="".concat(n," ");else for(let e in n)n[e]&&(r+="".concat(e," "))}}),r.trim()},a=(n,e)=>Object.keys(n).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("on"))&&!e.includes(n)).reduce((e,t)=>(e[t]=n[t],e),{}),s=n=>{let{left:e,right:t}=n.getBoundingClientRect(),{innerWidth:r}=window;return e>=0&&t<=r},i=n=>{let{top:e,bottom:t}=n.getBoundingClientRect(),{innerHeight:r}=window;return e>=0&&t<=r}}},function(n){n.O(0,[49710,12156,92888,49774,40179],function(){return n(n.s=86788)}),_N_E=n.O()}]);