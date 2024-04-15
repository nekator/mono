(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42772],{47304:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio/how-to-use",function(){return t(92473)}])},72111:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return i}});var r=t(52322),a=t(45392);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { DBRadio } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBRadio],\n  // ...\n})\n"})}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n<ul>\n	@for (radioName of radioNames; track radioName) {\n	<li>\n		<db-radio\n			(change)="radio = radioName"\n			[label]="\'Radio \' + radioName"\n			[value]="radioName"\n			name="RadioGroup"\n		></db-radio>\n	</li>\n	}\n</ul>\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'// app.component.ts\nimport { Component } from "@angular/core";\n\n@Component({\n	selector: "app-app",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	radioNames = ["X", "Y", "Z"];\n	radio = "";\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"how-to-use-with-template-driven-forms",children:"How to use with Template Driven Forms"}),"\n",(0,r.jsxs)(e.p,{children:["Third party controls require a ",(0,r.jsx)(e.code,{children:"ControlValueAccessor"})," to function with angular forms. Adding an ",(0,r.jsx)(e.code,{children:"ngDefaultControl"})," attribute will allow them to use that directive.\n",(0,r.jsx)(e.a,{href:"https://stackoverflow.com/a/46465959",children:"Further information"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"//app.component.ts\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n	// ...\n	imports: [\n		// ...,\n		FormsModule\n    ],\n	// ...\n})\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<!-- form.component.html -->\n<form>\n	<DBRadio ngDefaultControl [(ngModel)]="radio">Label</DBRadio>\n	<DBButton type="button" variant="primary" (click)="showValues()"\n		>Get radio value</DBButton\n	>\n</form>\n\n<h2>Output</h2>\n<dl>\n	<dt>radio\'s value</dt>\n	<dd>{{ radio ? radio : "No radio set" }}</dd>\n</dl>\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'// form.component.ts\nexport class FormComponent {\n	radio = "";\n	showValues(): void {\n		alert(JSON.stringify({ radio: this.radio }));\n	}\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"how-to-use-with-reactive-forms",children:"How to use with Reactive Forms"}),"\n",(0,r.jsx)(e.p,{children:"coming soon … if your interested in contributing, you're very welcome ;)"})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},3591:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return i}});var r=t(52322),a=t(45392);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"html",children:"HTML"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<input\n		type="radio"\n		class="db-radio"\n		id="radio-element"\n		name="States"\n		value="Y"\n	/>\n	<label for="radio-element">Label</label>\n</body>\n'})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},19126:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return i}});var r=t(52322),a=t(45392);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBRadio } from "@db-ui/react-components";\n\nconst App = () => (\n	<ul>\n		{["X", "Y", "Z"].map((radioName) => (\n			<li key={radioName}>\n				<DBRadio\n					name="radio-group"\n					value={radioName}\n					onChange={() => {\n						setRadio(radioName);\n					}}\n				>\n					Radio {radioName}\n				</DBRadio>\n			</li>\n		))}\n	</ul>\n);\n\nexport default App;\n'})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},19711:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return i}});var r=t(52322),a=t(45392);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"vue",children:"Vue"}),"\n",(0,r.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,r.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-vue",children:'<!-- App.vue -->\n<script setup lang="ts">\nimport { DBRadio } from "@db-ui/v-components";\nimport { ref } from "vue";\nconst radio = ref("");\n\nconst radioNames = ["X", "Y", "Z"];\n</script>\n\n<template>\n	<ul>\n		<li v-for="radioName in radioNames">\n			<DBRadio\n				@change="radio = radioName"\n				name="radio-group"\n				:value="radioName"\n			>\n				Radio {{ radioName }}\n			</DBRadio>\n		</li>\n	</ul>\n</template>\n'})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},92473:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var r=t(52322),a=t(45392),o=t(22116),i=t(3591),s=t(72111),l=t(19126),c=t(19711);let d=n=>{let{children:e}=n;return(0,r.jsx)(o.Z,{children:e})};function u(n){let e={h1:"h1",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"how-to-use-dbradio",children:"How to use DBRadio"}),"\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsx)(c.default,{})]})}function p(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...n,children:(0,r.jsx)(u,{...n})})}},10326:function(n,e,t){"use strict";var r=t(52322),a=t(2784),o=t(43251);let i=(0,a.forwardRef)(function(n,e){let t=e||(0,a.useRef)(e);return(0,r.jsx)("button",{ref:t,...(0,o.mS)(n,[]),id:n.id,className:(0,o.yI)("db-button",n.className,{"is-icon-text-replace":n.noText}),type:n.type,disabled:n.disabled,"aria-label":n.label,"data-icon":n.icon,"data-size":n.size,"data-state":n.state,"data-width":n.width,"data-variant":n.variant,name:n.name,value:n.value,"aria-describedby":n.describedbyid,"aria-expanded":n.ariaexpanded,"aria-pressed":n.ariapressed,onClick:e=>{n.onClick&&n.onClick(e)},children:n.children})});e.Z=i},55482:function(n,e,t){"use strict";var r,a,o,i,s,l,c;t.d(e,{IY:function(){return d},YP:function(){return u},ce:function(){return p}});let d="OVERWRITE_DEFAULT_ID",u="Back",p="Close Button";(s=r||(r={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(r).map(n=>{let[,e]=n;return e}),(a||(a={})).PRIMARY="primary",(l=o||(o={})).BASE="base",l.BASE_STRONG="base-strong",l.BASE_TRANSPARENT_SEMI="base-transparent-semi",l.BASE_TRANSPARENT_FULL="base-transparent-full",l.NEUTRAL="neutral",l.NEUTRAL_STRONG="neutral-strong",l.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",l.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",l.BRAND="brand",l.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",l.BRAND_TRANSPARENT_FULL="brand-transparent-full",l.SUCCESSFUL="successful",l.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",l.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",l.CRITICAL="critical",l.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",l.CRITICAL_TRANSPARENT_Full="critical-transparent-full",l.WARNING="warning",l.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",l.WARNING_TRANSPARENT_FULL="warning-transparent-full",l.INFORMATIONAL="informational",l.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",l.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(o).map(n=>{let[,e]=n;return e}),Object.entries(a).map(n=>{let[,e]=n;return e}),(c=i||(i={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(i).map(n=>{let[,e]=n;return e})},43251:function(n,e,t){"use strict";t.d(e,{MN:function(){return c},Vj:function(){return r},cd:function(){return l},mS:function(){return s},yI:function(){return o},yn:function(){return a}});let r=()=>{var n,e;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(e=window.crypto)||void 0===e?void 0:e.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},a=(n,e)=>{Object.values(n.children).forEach(n=>{n.setAttribute(e.key,e.value),n.children.length>0&&a(n,e)})},o=function(){for(var n=arguments.length,e=Array(n),t=0;t<n;t++)e[t]=arguments[t];let r="";return e.forEach((n,e)=>{if(n){if("string"==typeof n)r+="".concat(n," ");else for(let e in n)n[e]&&(r+="".concat(e," "))}}),r.trim()},i=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],s=(n,e)=>Object.keys(n).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("item")||n.startsWith("on")||i.includes(n))&&!e.includes(n)).reduce((e,t)=>(e[t]=n[t],e),{}),l=n=>{let{left:e,right:t}=n.getBoundingClientRect(),{innerWidth:r}=window;return e>=0&&t<=r},c=n=>{let{top:e,bottom:t}=n.getBoundingClientRect(),{innerHeight:r}=window;return e>=0&&t<=r}}},function(n){n.O(0,[49710,22116,92888,49774,40179],function(){return n(n.s=47304)}),_N_E=n.O()}]);