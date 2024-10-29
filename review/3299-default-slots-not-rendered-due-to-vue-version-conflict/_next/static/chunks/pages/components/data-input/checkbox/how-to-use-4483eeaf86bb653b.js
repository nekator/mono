(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9675],{11442:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-input/checkbox/how-to-use",function(){return t(2051)}])},58947:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(52322),c=t(45392);function r(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBCheckbox } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBCheckbox],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n<ul>\n	@for (checkboxName of checkboxNames; track checkboxName) {\n	<li>\n		<db-checkbox\n			(change)="checkbox = checkboxName"\n			[label]="\'Checkbox \' + checkboxName"\n			[value]="checkboxName"\n			name="CheckboxGroup"\n		></db-checkbox>\n	</li>\n	}\n</ul>\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'// app.component.ts\nimport { Component } from "@angular/core";\n\n@Component({\n	selector: "app-app",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	checkboxNames = ["X", "Y", "Z"];\n	checkbox = "";\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"how-to-use-with-template-driven-forms",children:"How to use with Template Driven Forms"}),"\n",(0,a.jsxs)(n.p,{children:["Third party controls require a ",(0,a.jsx)(n.code,{children:"ControlValueAccessor"})," to function with angular forms. Adding an ",(0,a.jsx)(n.code,{children:"ngDefaultControl"})," attribute will allow them to use that directive.\n",(0,a.jsx)(n.a,{href:"https://stackoverflow.com/a/46465959",children:"Further information"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"//app.component.ts\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n	// ...\n	imports: [\n		// ...,\n		FormsModule\n    ],\n	// ...\n})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- form.component.html -->\n<form>\n	<db-checkbox\n		(change)="checkbox = $event.target.checked"\n		name="checkbox"\n		label="Checkbox"\n	></db-checkbox>\n	<db-button type="button" variant="brand" (click)="showValues()"\n		>Get checkbox value</db-button\n	>\n</form>\n\n<h2>Output</h2>\n<dl>\n	<dt>checkbox\'s value</dt>\n	<dd>checkbox {{ checkbox ? "" : "un" }}checked</dd>\n</dl>\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'// form.component.ts\nexport class FormComponent {\n	checkbox = "";\n	showValues(): void {\n		alert(JSON.stringify({ checkbox: this.checkbox }));\n	}\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"how-to-use-with-reactive-forms",children:"How to use with Reactive Forms"}),"\n",(0,a.jsx)(n.p,{children:"coming soon … if your interested in contributing, you're very welcome ;)"})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},95376:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(52322),c=t(45392);function r(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<label class="db-checkbox" for="checkbox-element">\n		<input type="checkbox" id="checkbox-element" name="States" />\n		Label\n	</label>\n</body>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},13242:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(52322),c=t(45392);function r(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBCheckbox } from "@db-ui/react-components";\n\nconst App = () => {\n	const [checkbox, setCheckbox] = useState("");\n\n	return (\n		<DBCheckbox\n			name="checkbox"\n			value="Checkbox checked"\n			onChange={(event) => {\n				setCheckbox(event.target.checked);\n			}}\n		>\n			Checkbox\n		</DBCheckbox>\n	);\n};\n\nexport default App;\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},65480:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(52322),c=t(45392);function r(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script setup lang="ts">\nimport { DBCheckbox } from "@db-ui/v-components";\nimport { ref } from "vue";\nconst checkbox = ref("");\n</script>\n\n<template>\n	<DBCheckbox @change="checkbox = $event.target.checked" name="checkbox">\n		Checkbox\n	</DBCheckbox>\n</template>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},2051:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var a=t(52322),c=t(45392),r=t(50115),o=t(95376),s=t(58947),l=t(13242),i=t(65480);let h=e=>{let{children:n}=e;return(0,a.jsx)(r.Z,{children:n})};function d(e){let n={h1:"h1",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-use-dbcheckbox",children:"How to use DBCheckbox"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(i.default,{})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(h,{...e,children:(0,a.jsx)(d,{...e})})}},50115:(e,n,t)=>{"use strict";t.d(n,{Z:()=>E});var a=t(52322),c=t(5632),r=t(25237),o=t.n(r),s=t(2784),l=t(61183),i=t(39097),h=t.n(i),d=t(98072);let u=(0,s.forwardRef)(function(e,n){let t=n||(0,s.useRef)(n),[c,r]=(0,s.useState)(()=>!1),o=(0,s.useRef)(!1);return o.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,s.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,s.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,d.mS)(e,[]),id:e.id,className:(0,d.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":c,children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=t(68908),m=t(48483),x=t(90434),b=t(97689),g=t(85803),f=t(72288),j=t(76460),v=t(40245),k=t(29469);let w=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:a}=t.query,c=Array.isArray(a)?a:[a];return n.path==="/components/".concat(c.join("/"))},y=e=>{var n;let{navItem:t}=e,r=(0,c.useRouter)(),o=w(r.pathname,t,r);return(0,a.jsx)(k.Z,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,a.jsx)(y,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(h(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":o?"page":void 0,children:t.label},"router-path-".concat(t.path))})},N=()=>(0,a.jsx)(v.Z,{children:j.Z6.map(e=>(0,a.jsx)(y,{navItem:e},"router-path-".concat(e.path)))});var C=t(35368),F=t(9842);let S=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},Z="db-ui",q="mono",_=()=>{let e=(0,c.useRouter)(),[n,t]=(0,s.useState)(),[r,o]=(0,s.useState)(),l=n=>{let t=e.basePath,a=n.find(e=>t.includes(e));a&&o(a)},i=(e,n)=>{let a=[],c=[],r=[],o=[],s=[],l=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?c.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?o.push(e):/^\d*-/.test(e)?s.push(e):e.startsWith("docs")?l.push(e):a.push(e);t({others:a,features:c,docs:l,refactors:o,issues:s,bugfixes:r,versions:e})};(0,s.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(Z,"/").concat(q,"/branches")),n=(await S("https://api.github.com/repos/".concat(Z,"/").concat(q,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(t),l(n),i(n,t)})().catch(e=>{console.error(e)})},[]);let h=n=>{let t=e.asPath,a=3===n.split(".").length&&n.startsWith("v");window.location.replace((0,C.sanitize)("https://".concat(Z,".github.io/").concat(q).concat(a?"/version":"/review","/").concat(n).concat(t)))};return n?(0,a.jsx)(F.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{h(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,a.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},A=e=>{var n,t;let{children:r,noNavigation:o}=e,[i,d]=(0,s.useState)(!1),[v,k]=(0,s.useState)(!1),[w,y]=(0,s.useState)(!1),[C,F]=(0,s.useState)(!1),[S,Z]=(0,s.useState)(),[q,A]=(0,s.useState)(),[E,B]=(0,s.useState)(),[D,R]=(0,s.useState)(),I=(0,c.useRouter)();return(0,s.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,s.useEffect)(()=>{if(I.query&&(I.query.fullscreen&&d("true"===I.query.fullscreen),I.query.page&&d(!0),I.query.noh1&&k("true"===I.query.noh1),I.query.properties&&y("true"===I.query.properties),I.query.current)){let n=Array.isArray(I.query.current)?I.query.current[0]:I.query.current;if(S!==n){var e;Z(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=I.asPath.split("?")[0],{previous:t,next:a}=(0,j.vn)(n);A(t),B(a),R((0,j.kn)(n))},[I]),(0,a.jsxs)(a.Fragment,{children:[I.isReady&&i&&(0,a.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:r}),I.isReady&&!i&&(0,a.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.Z,{drawerOpen:C,onToggle:F,brand:(0,a.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,a.jsx)(x.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(_,{}),children:(0,a.jsx)(N,{})}),children:[D&&D.length>1&&(0,a.jsx)(b.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==D?void 0:D.map(e=>{var n;return(0,a.jsxs)(s.Fragment,{children:["/"!==e.path&&(0,a.jsx)(g.Z,{icon:"chevron_right"}),(0,a.jsx)(h(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(b.Z,{spacing:"none",width:"large",children:r}),!o&&(null!=q?q:E)&&(0,a.jsxs)(b.Z,{width:"large",spacing:"small",className:"link-containers",children:[q&&(0,a.jsx)(h(),{className:"previous-link-container",href:null!==(n=q.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(f.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:q.label})]})}),E&&(0,a.jsx)(h(),{className:"next-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(f.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:E.label})]})})]})]})]})},E=o()(async()=>A,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3430,1954,4540,6460,2888,9774,179],()=>n(11442)),_N_E=e.O()}]);