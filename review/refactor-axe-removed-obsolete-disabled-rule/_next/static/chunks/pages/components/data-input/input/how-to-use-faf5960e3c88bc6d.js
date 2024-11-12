(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6062],{58965:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-input/input/how-to-use",function(){return t(42706)}])},52170:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var r=t(31085),a=t(71184);function s(e){let n={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,r.jsxs)(n.p,{children:["Load SCSS globally within ",(0,r.jsx)(n.code,{children:"styles.scss"})," in your app:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:'@forward "@db-ui/components/build/styles/db-ui-42-rollup";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Load component within ",(0,r.jsx)(n.code,{children:"app.component.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"//app.component.ts\nimport { DBInput } from '@db-ui/ngx-components';\n\n@Component({\n	// ...\n	imports: [\n		// ...,\n		DBInput\n    ],\n	// ...\n})\n"})}),"\n",(0,r.jsx)(n.p,{children:"Use component in template:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<DBInput\n	label="Label"\n	placeholder="placeholder"\n	description="Description"\n	(change)="onInputChange()"\n></DBInput>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-use-with-reactive-forms",children:"How to use with Reactive Forms"}),"\n",(0,r.jsx)(n.p,{children:"Third party controls require a ControlValueAccessor to function with angular forms.\nOur input component implements this interface so you can use it like any other native element with reactive Forms:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Currently we do not support onTouch/touched and native validation via FormControl. If your interested in contributing, you're very welcome ;)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"//app.component.ts\nimport { ReactiveFormsModule } from '@angular/forms';\n\n@Component({\n	// ...\n	imports: [\n		// ...,\n		ReactiveFormsModule\n    ],\n	// ...\n})\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!-- form.component.html-->\n<form [formGroup]="form" (submit)="onFormSubmit()">\n	<db-input label="Input" placeholder="Placeholder" formControlName="input">\n	</db-input>\n</form>\n\n<h2>Output</h2>\n<dl>\n	<dt>input\'s value</dt>\n	<dd>\n		{{ form.get("input")?.value ? form.get("input")?.value : "No Input set"\n		}}\n	</dd>\n</dl>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// form.component.ts\nexport class FormComponent {\n	form = new FormGroup({\n		input: new FormControl("Filled with formControl")\n	});\n\n	onFormSubmit(): void {\n		alert(JSON.stringify(this.form.value));\n	}\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-use-with-template-driven-forms",children:"How to use with Template driven Forms"}),"\n",(0,r.jsx)(n.p,{children:"Third party controls require a ControlValueAccessor to function with angular forms.\nOur input component implements this interface so you can use it like any other native element with ngModel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"//app.component.ts\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n	// ...\n	imports: [\n		// ...,\n		FormsModule\n    ],\n	// ...\n})\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!-- form.component.html-->\n<form>\n	<DBInput\n		ngDefaultControl\n		[(ngModel)]="input"\n		label="Textinput"\n		placeholder="Placeholder"\n		description="Description"\n	></DBInput>\n	<DBButton type="button" variant="brand" (click)="showValues()"\n		>Get input value</DBButton\n	>\n</form>\n\n<h2>Output</h2>\n<dl>\n	<dt>input\'s value</dt>\n	<dd>{{ input ? input : "No Input set" }}</dd>\n</dl>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'// form.component.ts\nexport class FormComponent {\n	input = "";\n	showValues(): void {\n		alert(JSON.stringify({ input: this.input }));\n	}\n}\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},59351:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var r=t(31085),a=t(71184);function s(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,r.jsx)(n.p,{children:"Load SCSS globally somewhere in your app:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:'@forward "@db-ui/components/build/styles/db-ui-42";\n'})}),"\n",(0,r.jsx)(n.p,{children:"Use it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div class="db-input">\n	<label for="username">Label</label>\n	<input type="text" name="username" id="username" />\n</div>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},19703:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var r=t(31085),a=t(71184);function s(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,r.jsxs)(n.p,{children:["Load SCSS globally in a ",(0,r.jsx)(n.code,{children:"index.scss"})," file inside ",(0,r.jsx)(n.code,{children:"main.tsx"}),"/",(0,r.jsx)(n.code,{children:"main.jsx"})," within your app:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:'@forward "@db-ui/components/build/styles/db-ui-42-rollup";\n'})}),"\n",(0,r.jsx)(n.p,{children:"Import component:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'import { DBInput } from "@db-ui/react-components";\n\n<DBInput\n	label={label}\n	placeholder={description}\n	description={description}\n	onChange={handleChange}\n></DBInput>;\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},98088:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var r=t(31085),a=t(71184);function s(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,r.jsxs)(n.p,{children:["Load SCSS globally in a ",(0,r.jsx)(n.code,{children:"index.scss"})," file and import it in your ",(0,r.jsx)(n.code,{children:"main.ts"}),"/",(0,r.jsx)(n.code,{children:"main.js"})," file in your app:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:'@forward "@db-ui/components/build/styles/db-ui-42-rollup";\n'})}),"\n",(0,r.jsx)(n.p,{children:"Use component:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vue",children:'<script>\nimport { DBInput } from "@db-ui/v-components";\n</script>\n\n<template>\n	<DBInput\n		label="Label"\n		placeholder="Placeholder"\n		@change="onChange($event)"\n	></DBInput>\n</template>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To get DBInput work with ",(0,r.jsx)(n.code,{children:"v-model"})," you have to use v-model argument syntax:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'<DBInput\n	label="Textlabel"\n	placeholder="Start typing"\n	v-model:value="value"\n></DBInput>\n'})}),"\n",(0,r.jsx)(n.p,{children:"or using on-change listener:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'<DBInput label="Textlabel" placeholder="Start" :value="modelAndChange" @change="($event) => { modelAndChange = $event.target.value;\n}"/> {{ modelAndChange }}\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},42706:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>h});var r=t(31085),a=t(71184),s=t(83952),o=t(59351),l=t(52170),i=t(19703),c=t(98088);let d=e=>{let{children:n}=e;return(0,r.jsx)(s.A,{children:n})};function u(e){let n={h1:"h1",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"how-to-use-object-object",children:"How to use [object Object]"}),"\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(c.default,{})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...e,children:(0,r.jsx)(u,{...e})})}},83952:(e,n,t)=>{"use strict";t.d(n,{A:()=>q});var r=t(31085),a=t(31242),s=t(83894),o=t.n(s),l=t(14041),i=t(30127),c=t(34747),d=t.n(c),u=t(5188);let h=(0,l.forwardRef)(function(e,n){let t=n||(0,l.useRef)(n),[a,s]=(0,l.useState)(()=>!1),o=(0,l.useRef)(!1);return o.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,l.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,l.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:t,...(0,u.MD)(e,[]),id:e.id,className:(0,u.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,u.EB)(a),children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var p=t(23116),m=t(23944),x=t(95374),j=t(12764),g=t(80692),f=t(64286),v=t(42372),b=t(61338),y=t(6900);let w=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:r}=t.query,a=Array.isArray(r)?r:[r];return n.path==="/components/".concat(a.join("/"))},N=e=>{var n;let{navItem:t}=e,s=(0,a.useRouter)(),o=w(s.pathname,t,s);return(0,r.jsx)(y.A,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,r.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":o?"page":void 0,children:t.label},"router-path-".concat(t.path))})},S=()=>(0,r.jsx)(b.A,{children:v.bw.map(e=>(0,r.jsx)(N,{navItem:e},"router-path-".concat(e.path)))});var A=t(97519),I=t(47982);let C=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},F="db-ui",B="mono",D=()=>{let e=(0,a.useRouter)(),[n,t]=(0,l.useState)(),[s,o]=(0,l.useState)(),i=n=>{let t=e.basePath,r=n.find(e=>t.includes(e));r&&o(r)},c=(e,n)=>{let r=[],a=[],s=[],o=[],l=[],i=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?o.push(e):/^\d*-/.test(e)?l.push(e):e.startsWith("docs")?i.push(e):r.push(e);t({others:r,features:a,docs:i,refactors:o,issues:l,bugfixes:s,versions:e})};(0,l.useEffect)(()=>{(async()=>{let e=await C("https://api.github.com/repos/".concat(F,"/").concat(B,"/branches")),n=(await C("https://api.github.com/repos/".concat(F,"/").concat(B,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));n.unshift("latest"),i(t),i(n),c(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,r=3===n.split(".").length&&n.startsWith("v")||"latest"===n;window.location.replace((0,A.sanitize)("https://".concat(F,".github.io/").concat(B).concat(r?"/version":"/review","/").concat(n).concat(t)))};return n?(0,r.jsx)(I.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,r.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,r.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},R=e=>{var n,t;let{children:s,noNavigation:o}=e,[c,u]=(0,l.useState)(!1),[b,y]=(0,l.useState)(!1),[w,N]=(0,l.useState)(!1),[A,I]=(0,l.useState)(!1),[C,F]=(0,l.useState)(),[B,R]=(0,l.useState)(),[q,k]=(0,l.useState)(),[_,E]=(0,l.useState)(),O=(0,a.useRouter)();return(0,l.useEffect)(()=>{i.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.A.highlightAll()},[]),(0,l.useEffect)(()=>{if(O.query&&(O.query.fullscreen&&u("true"===O.query.fullscreen),O.query.page&&u(!0),O.query.noh1&&y("true"===O.query.noh1),O.query.properties&&N("true"===O.query.properties),O.query.current)){let n=Array.isArray(O.query.current)?O.query.current[0]:O.query.current;if(C!==n){var e;F(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=O.asPath.split("?")[0],{previous:t,next:r}=(0,v.Pb)(n);R(t),k(r),E((0,v.Oj)(n))},[O]),(0,r.jsxs)(r.Fragment,{children:[O.isReady&&c&&(0,r.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:s}),O.isReady&&!c&&(0,r.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(p.A,{drawerOpen:A,onToggle:I,brand:(0,r.jsx)(m.A,{children:"DB-UX"}),primaryAction:(0,r.jsx)(x.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(D,{}),children:(0,r.jsx)(S,{})}),children:[_&&_.length>1&&(0,r.jsx)(j.A,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==_?void 0:_.map(e=>{var n;return(0,r.jsxs)(l.Fragment,{children:["/"!==e.path&&(0,r.jsx)(g.A,{icon:"chevron_right"}),(0,r.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(j.A,{spacing:"none",width:"large",children:s}),!o&&(null!=B?B:q)&&(0,r.jsxs)(j.A,{width:"large",spacing:"small",className:"link-containers",children:[B&&(0,r.jsx)(d(),{className:"previous-link-container",href:null!==(n=B.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(f.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:B.label})]})}),q&&(0,r.jsx)(d(),{className:"next-link-container",href:null!==(t=q.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(f.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:q.label})]})})]})]})]})},q=o()(async()=>R,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3578,8250,8367,2372,636,6593,8792],()=>n(58965)),_N_E=e.O()}]);