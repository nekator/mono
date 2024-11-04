(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9346],{48954:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-input/radio/how-to-use",function(){return t(59924)}])},79092:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(52322),r=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBRadio } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBRadio],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n<ul>\n	@for (radioName of radioNames; track radioName) {\n	<li>\n		<db-radio\n			(change)="radio = radioName"\n			[label]="\'Radio \' + radioName"\n			[value]="radioName"\n			name="RadioGroup"\n		></db-radio>\n	</li>\n	}\n</ul>\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'// app.component.ts\nimport { Component } from "@angular/core";\n\n@Component({\n	selector: "app-app",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	radioNames = ["X", "Y", "Z"];\n	radio = "";\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"how-to-use-with-template-driven-forms",children:"How to use with Template Driven Forms"}),"\n",(0,a.jsxs)(n.p,{children:["Third party controls require a ",(0,a.jsx)(n.code,{children:"ControlValueAccessor"})," to function with angular forms. Adding an ",(0,a.jsx)(n.code,{children:"ngDefaultControl"})," attribute will allow them to use that directive.\n",(0,a.jsx)(n.a,{href:"https://stackoverflow.com/a/46465959",children:"Further information"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"//app.component.ts\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n	// ...\n	imports: [\n		// ...,\n		FormsModule\n    ],\n	// ...\n})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- form.component.html -->\n<form>\n	<DBRadio ngDefaultControl [(ngModel)]="radio">Label</DBRadio>\n	<DBButton type="button" variant="brand" (click)="showValues()"\n		>Get radio value</DBButton\n	>\n</form>\n\n<h2>Output</h2>\n<dl>\n	<dt>radio\'s value</dt>\n	<dd>{{ radio ? radio : "No radio set" }}</dd>\n</dl>\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'// form.component.ts\nexport class FormComponent {\n	radio = "";\n	showValues(): void {\n		alert(JSON.stringify({ radio: this.radio }));\n	}\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"how-to-use-with-reactive-forms",children:"How to use with Reactive Forms"}),"\n",(0,a.jsx)(n.p,{children:"coming soon … if your interested in contributing, you're very welcome ;)"})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},53765:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(52322),r=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<label for="radio-element">\n		<input\n			type="radio"\n			class="db-radio"\n			id="radio-element"\n			name="States"\n			value="Y"\n		/>\n		Label\n	</label>\n</body>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},14353:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(52322),r=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBRadio } from "@db-ui/react-components";\n\nconst App = () => (\n	<ul>\n		{["X", "Y", "Z"].map((radioName) => (\n			<li key={radioName}>\n				<DBRadio\n					name="radio-group"\n					value={radioName}\n					onChange={() => {\n						setRadio(radioName);\n					}}\n				>\n					Radio {radioName}\n				</DBRadio>\n			</li>\n		))}\n	</ul>\n);\n\nexport default App;\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},24227:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var a=t(52322),r=t(45392);function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script setup lang="ts">\nimport { DBRadio } from "@db-ui/v-components";\nimport { ref } from "vue";\nconst radio = ref("");\n\nconst radioNames = ["X", "Y", "Z"];\n</script>\n\n<template>\n	<ul>\n		<li v-for="radioName in radioNames">\n			<DBRadio\n				@change="radio = radioName"\n				name="radio-group"\n				:value="radioName"\n			>\n				Radio {{ radioName }}\n			</DBRadio>\n		</li>\n	</ul>\n</template>\n'})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},59924:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>h});var a=t(52322),r=t(45392),o=t(50115),s=t(53765),i=t(79092),c=t(14353),l=t(24227);let d=e=>{let{children:n}=e;return(0,a.jsx)(o.Z,{children:n})};function u(e){let n={h1:"h1",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-use-dbradio",children:"How to use DBRadio"}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(l.default,{})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...e,children:(0,a.jsx)(u,{...e})})}},50115:(e,n,t)=>{"use strict";t.d(n,{Z:()=>_});var a=t(52322),r=t(5632),o=t(25237),s=t.n(o),i=t(2784),c=t(61183),l=t(39097),d=t.n(l),u=t(98072);let h=(0,i.forwardRef)(function(e,n){let t=n||(0,i.useRef)(n),[r,o]=(0,i.useState)(()=>!1),s=(0,i.useRef)(!1);return s.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),s.current=!0),(0,i.useEffect)(()=>{o(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{o(!0)}):o(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,u.mS)(e,[]),id:e.id,className:(0,u.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,u.X)(r),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=t(68908),m=t(48483),x=t(90434),f=t(97689),g=t(85803),j=t(72288),v=t(2700),b=t(40245),w=t(29469);let N=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:a}=t.query,r=Array.isArray(a)?a:[a];return n.path==="/components/".concat(r.join("/"))},y=e=>{var n;let{navItem:t}=e,o=(0,r.useRouter)(),s=N(o.pathname,t,o);return(0,a.jsx)(w.Z,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,a.jsx)(y,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":s?"page":void 0,children:t.label},"router-path-".concat(t.path))})},k=()=>(0,a.jsx)(b.Z,{children:v.Z6.map(e=>(0,a.jsx)(y,{navItem:e},"router-path-".concat(e.path)))});var R=t(35368),F=t(9842);let Z=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},B="db-ui",D="mono",S=()=>{let e=(0,r.useRouter)(),[n,t]=(0,i.useState)(),[o,s]=(0,i.useState)(),c=n=>{let t=e.basePath,a=n.find(e=>t.includes(e));a&&s(a)},l=(e,n)=>{let a=[],r=[],o=[],s=[],i=[],c=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?o.push(e):e.startsWith("refactor")?s.push(e):/^\d*-/.test(e)?i.push(e):e.startsWith("docs")?c.push(e):a.push(e);t({others:a,features:r,docs:c,refactors:s,issues:i,bugfixes:o,versions:e})};(0,i.useEffect)(()=>{(async()=>{let e=await Z("https://api.github.com/repos/".concat(B,"/").concat(D,"/branches")),n=(await Z("https://api.github.com/repos/".concat(B,"/").concat(D,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(t),c(n),l(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,a=3===n.split(".").length&&n.startsWith("v");window.location.replace((0,R.sanitize)("https://".concat(B,".github.io/").concat(D).concat(a?"/version":"/review","/").concat(n).concat(t)))};return n?(0,a.jsx)(F.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:o,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,a.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},q=e=>{var n,t;let{children:o,noNavigation:s}=e,[l,u]=(0,i.useState)(!1),[b,w]=(0,i.useState)(!1),[N,y]=(0,i.useState)(!1),[R,F]=(0,i.useState)(!1),[Z,B]=(0,i.useState)(),[D,q]=(0,i.useState)(),[_,A]=(0,i.useState)(),[C,E]=(0,i.useState)(),I=(0,r.useRouter)();return(0,i.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,i.useEffect)(()=>{if(I.query&&(I.query.fullscreen&&u("true"===I.query.fullscreen),I.query.page&&u(!0),I.query.noh1&&w("true"===I.query.noh1),I.query.properties&&y("true"===I.query.properties),I.query.current)){let n=Array.isArray(I.query.current)?I.query.current[0]:I.query.current;if(Z!==n){var e;B(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=I.asPath.split("?")[0],{previous:t,next:a}=(0,v.vn)(n);q(t),A(a),E((0,v.kn)(n))},[I]),(0,a.jsxs)(a.Fragment,{children:[I.isReady&&l&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(N?"is-properties":""),children:o}),I.isReady&&!l&&(0,a.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.Z,{drawerOpen:R,onToggle:F,brand:(0,a.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,a.jsx)(x.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(S,{}),children:(0,a.jsx)(k,{})}),children:[C&&C.length>1&&(0,a.jsx)(f.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==C?void 0:C.map(e=>{var n;return(0,a.jsxs)(i.Fragment,{children:["/"!==e.path&&(0,a.jsx)(g.Z,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(f.Z,{spacing:"none",width:"large",children:o}),!s&&(null!=D?D:_)&&(0,a.jsxs)(f.Z,{width:"large",spacing:"small",className:"link-containers",children:[D&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(n=D.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:D.label})]})}),_&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=_.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(j.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:_.label})]})})]})]})]})},_=s()(async()=>q,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3430,1954,4540,2700,2888,9774,179],()=>n(48954)),_N_E=e.O()}]);