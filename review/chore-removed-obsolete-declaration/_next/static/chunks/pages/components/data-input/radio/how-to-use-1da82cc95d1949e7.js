(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8569],{12539:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-input/radio/how-to-use",function(){return t(5457)}])},11323:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(31085),r=t(71184);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBRadio } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBRadio],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n<ul>\n	@for (radioName of radioNames; track radioName) {\n	<li>\n		<db-radio\n			(change)="radio = radioName"\n			[label]="\'Radio \' + radioName"\n			[value]="radioName"\n			name="RadioGroup"\n		></db-radio>\n	</li>\n	}\n</ul>\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'// app.component.ts\nimport { Component } from "@angular/core";\n\n@Component({\n	selector: "app-app",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	radioNames = ["X", "Y", "Z"];\n	radio = "";\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"how-to-use-with-template-driven-forms",children:"How to use with Template Driven Forms"}),"\n",(0,a.jsxs)(n.p,{children:["Third party controls require a ",(0,a.jsx)(n.code,{children:"ControlValueAccessor"})," to function with angular forms. Adding an ",(0,a.jsx)(n.code,{children:"ngDefaultControl"})," attribute will allow them to use that directive.\n",(0,a.jsx)(n.a,{href:"https://stackoverflow.com/a/46465959",children:"Further information"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"//app.component.ts\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n	// ...\n	imports: [\n		// ...,\n		FormsModule\n    ],\n	// ...\n})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- form.component.html -->\n<form>\n	<DBRadio ngDefaultControl [(ngModel)]="radio">Label</DBRadio>\n	<DBButton type="button" variant="brand" (click)="showValues()"\n		>Get radio value</DBButton\n	>\n</form>\n\n<h2>Output</h2>\n<dl>\n	<dt>radio\'s value</dt>\n	<dd>{{ radio ? radio : "No radio set" }}</dd>\n</dl>\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'// form.component.ts\nexport class FormComponent {\n	radio = "";\n	showValues(): void {\n		alert(JSON.stringify({ radio: this.radio }));\n	}\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"how-to-use-with-reactive-forms",children:"How to use with Reactive Forms"}),"\n",(0,a.jsx)(n.p,{children:"coming soon … if your interested in contributing, you're very welcome ;)"})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},26336:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(31085),r=t(71184);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<label for="radio-element">\n		<input\n			type="radio"\n			class="db-radio"\n			id="radio-element"\n			name="States"\n			value="Y"\n		/>\n		Label\n	</label>\n</body>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},13214:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(31085),r=t(71184);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBRadio } from "@db-ui/react-components";\n\nconst App = () => (\n	<ul>\n		{["X", "Y", "Z"].map((radioName) => (\n			<li key={radioName}>\n				<DBRadio\n					name="radio-group"\n					value={radioName}\n					onChange={() => {\n						setRadio(radioName);\n					}}\n				>\n					Radio {radioName}\n				</DBRadio>\n			</li>\n		))}\n	</ul>\n);\n\nexport default App;\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},5961:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(31085),r=t(71184);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script setup lang="ts">\nimport { DBRadio } from "@db-ui/v-components";\nimport { ref } from "vue";\nconst radio = ref("");\n\nconst radioNames = ["X", "Y", "Z"];\n</script>\n\n<template>\n	<ul>\n		<li v-for="radioName in radioNames">\n			<DBRadio\n				@change="radio = radioName"\n				name="radio-group"\n				:value="radioName"\n			>\n				Radio {{ radioName }}\n			</DBRadio>\n		</li>\n	</ul>\n</template>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},5457:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>h});var a=t(31085),r=t(71184),o=t(83952),s=t(26336),i=t(11323),c=t(13214),l=t(5961);let d=e=>{let{children:n}=e;return(0,a.jsx)(o.A,{children:n})};function u(e){let n={h1:"h1",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-use-object-object",children:"How to use [object Object]"}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...e,children:(0,a.jsx)(u,{...e})})}},83952:(e,n,t)=>{"use strict";t.d(n,{A:()=>_});var a=t(31085),r=t(31242),o=t(83894),s=t.n(o),i=t(14041),c=t(30127),l=t(34747),d=t.n(l),u=t(5188);let h=(0,i.forwardRef)(function(e,n){let t=n||(0,i.useRef)(n),[r,o]=(0,i.useState)(()=>!1),s=(0,i.useRef)(!1);return s.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),s.current=!0),(0,i.useEffect)(()=>{o(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{o(!0)}):o(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,u.MD)(e,[]),id:e.id,className:(0,u.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,u.EB)(r),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=t(23116),m=t(23944),x=t(95374),f=t(12764),g=t(80692),j=t(64286),v=t(42372),b=t(61338),w=t(6900);let N=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:a}=t.query,r=Array.isArray(a)?a:[a];return n.path==="/components/".concat(r.join("/"))},y=e=>{var n;let{navItem:t}=e,o=(0,r.useRouter)(),s=N(o.pathname,t,o);return(0,a.jsx)(w.A,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,a.jsx)(y,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":s?"page":void 0,children:t.label},"router-path-".concat(t.path))})},R=()=>(0,a.jsx)(b.A,{children:v.bw.map(e=>(0,a.jsx)(y,{navItem:e},"router-path-".concat(e.path)))});var A=t(97519),k=t(47982);let F=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},B="db-ui",D="mono",q=()=>{let e=(0,r.useRouter)(),[n,t]=(0,i.useState)(),[o,s]=(0,i.useState)(),c=n=>{let t=e.basePath,a=n.find(e=>t.includes(e));a&&s(a)},l=(e,n)=>{let a=[],r=[],o=[],s=[],i=[],c=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?o.push(e):e.startsWith("refactor")?s.push(e):/^\d*-/.test(e)?i.push(e):e.startsWith("docs")?c.push(e):a.push(e);t({others:a,features:r,docs:c,refactors:s,issues:i,bugfixes:o,versions:e})};(0,i.useEffect)(()=>{(async()=>{let e=await F("https://api.github.com/repos/".concat(B,"/").concat(D,"/branches")),n=(await F("https://api.github.com/repos/".concat(B,"/").concat(D,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));n.unshift("latest"),c(t),c(n),l(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,a=3===n.split(".").length&&n.startsWith("v")||"latest"===n;window.location.replace(A.A.sanitize("https://".concat(B,".github.io/").concat(D).concat(a?"/version":"/review","/").concat(n).concat(t)))};return n?(0,a.jsx)(k.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:o,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,a.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},S=e=>{var n,t;let{children:o,noNavigation:s}=e,[l,u]=(0,i.useState)(!1),[b,w]=(0,i.useState)(!1),[N,y]=(0,i.useState)(!1),[A,k]=(0,i.useState)(!1),[F,B]=(0,i.useState)(),[D,S]=(0,i.useState)(),[_,E]=(0,i.useState)(),[C,O]=(0,i.useState)(),T=(0,r.useRouter)();return(0,i.useEffect)(()=>{c.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.A.highlightAll()},[]),(0,i.useEffect)(()=>{if(T.query&&(T.query.fullscreen&&u("true"===T.query.fullscreen),T.query.page&&u(!0),T.query.noh1&&w("true"===T.query.noh1),T.query.properties&&y("true"===T.query.properties),T.query.current)){let n=Array.isArray(T.query.current)?T.query.current[0]:T.query.current;if(F!==n){var e;B(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=T.asPath.split("?")[0],{previous:t,next:a}=(0,v.Pb)(n);S(t),E(a),O((0,v.Oj)(n))},[T]),(0,a.jsxs)(a.Fragment,{children:[T.isReady&&l&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(N?"is-properties":""),children:o}),T.isReady&&!l&&(0,a.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.A,{drawerOpen:A,onToggle:k,brand:(0,a.jsx)(m.A,{children:"DB-UX"}),primaryAction:(0,a.jsx)(x.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(q,{}),children:(0,a.jsx)(R,{})}),children:[C&&C.length>1&&(0,a.jsx)(f.A,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==C?void 0:C.map(e=>{var n;return(0,a.jsxs)(i.Fragment,{children:["/"!==e.path&&(0,a.jsx)(g.A,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(f.A,{spacing:"none",width:"large",children:o}),!s&&(null!=D?D:_)&&(0,a.jsxs)(f.A,{width:"large",spacing:"small",className:"link-containers",children:[D&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(n=D.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(j.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:D.label})]})}),_&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=_.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(j.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:_.label})]})})]})]})]})},_=s()(async()=>S,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3578,8250,8367,2372,636,6593,8792],()=>n(12539)),_N_E=e.O()}]);