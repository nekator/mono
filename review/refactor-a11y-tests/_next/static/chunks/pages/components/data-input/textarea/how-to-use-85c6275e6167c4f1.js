(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3502],{42229:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-input/textarea/how-to-use",function(){return t(50056)}])},200:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBTextarea } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBTextarea],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'import { Component } from "@angular/core";\n\n@Component({\n	selector: "app-root",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	textarea = "default value";\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-textarea\n	name="textarea"\n	label="Textarea Controlled"\n	placeholder="Placeholder"\n	message="Message"\n	icon="person"\n	[value]="textarea"\n	(change)="textarea = $event.target.value"\n></db-textarea>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},75173:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<div class="db-textarea">\n		<label for="textarea">Label</label>\n		<textarea id="textarea" rows="2" cols="33" placeholder=" "></textarea>\n	</div>\n</body>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},59481:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBTextarea } from "@db-ui/react-components";\n\nconst App = () => {\n	const [textarea, setTextarea] = useState("default textarea");\n	return (\n		<DBTextarea\n			label="Textarea Controlled"\n			message="Message"\n			value={textarea}\n			onChange={(event) => {\n				setTextarea(event.target.value);\n			}}\n		/>\n	);\n};\n\nexport default App;\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},19662:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>o});var a=t(31085),r=t(71184);function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(n.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,a.jsxs)(n.p,{children:["You cannot use a default value for ",(0,a.jsx)(n.a,{href:"https://vuejs.org/guide/essentials/forms.html#multiline-text",children:"textarea in vue"}),".\nUse ",(0,a.jsx)(n.code,{children:"v-model:value"})," or ",(0,a.jsx)(n.code,{children:":value"})," instead with a ",(0,a.jsx)(n.code,{children:'ref("My default value")'}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-vue",children:'<!-- App.vue -->\n<script setup lang="ts">\nimport { ref } from "vue";\nimport { DBTextarea } from "@db-ui/v-components";\n\nconst textarea = ref("default value");\n</script>\n\n<template>\n	<DBTextarea\n		label="Textarea value"\n		placeholder="Placeholder"\n		message="Message"\n		icon="person"\n		name="textarevalue-name"\n		v-model:value="textarea"\n	/>\n</template>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},50056:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>h});var a=t(31085),r=t(71184),s=t(83952),o=t(75173),c=t(200),l=t(59481),i=t(19662);let d=e=>{let{children:n}=e;return(0,a.jsx)(s.A,{children:n})};function u(e){let n={h1:"h1",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-use-dbtextarea",children:"How to use DBTextarea"}),"\n",(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(c.default,{}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(i.default,{})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,{...e,children:(0,a.jsx)(u,{...e})})}},83952:(e,n,t)=>{"use strict";t.d(n,{A:()=>E});var a=t(31085),r=t(31242),s=t(83894),o=t.n(s),c=t(14041),l=t(30127),i=t(34747),d=t.n(i),u=t(5188);let h=(0,c.forwardRef)(function(e,n){let t=n||(0,c.useRef)(n),[r,s]=(0,c.useState)(()=>!1),o=(0,c.useRef)(!1);return o.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:t,...(0,u.MD)(e,[]),id:e.id,className:(0,u.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,u.EB)(r),children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=t(23116),m=t(23944),x=t(95374),g=t(12764),f=t(80692),j=t(64286),v=t(42372),b=t(61338),w=t(6900);let y=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:a}=t.query,r=Array.isArray(a)?a:[a];return n.path==="/components/".concat(r.join("/"))},A=e=>{var n;let{navItem:t}=e,s=(0,r.useRouter)(),o=y(s.pathname,t,s);return(0,a.jsx)(w.A,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,a.jsx)(A,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,a.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":o?"page":void 0,children:t.label},"router-path-".concat(t.path))})},N=()=>(0,a.jsx)(b.A,{children:v.bw.map(e=>(0,a.jsx)(A,{navItem:e},"router-path-".concat(e.path)))});var k=t(97519),R=t(47982);let T=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},_="db-ui",q="mono",F=()=>{let e=(0,r.useRouter)(),[n,t]=(0,c.useState)(),[s,o]=(0,c.useState)(),l=n=>{let t=e.basePath,a=n.find(e=>t.includes(e));a&&o(a)},i=(e,n)=>{let a=[],r=[],s=[],o=[],c=[],l=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?o.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):a.push(e);t({others:a,features:r,docs:l,refactors:o,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await T("https://api.github.com/repos/".concat(_,"/").concat(q,"/branches")),n=(await T("https://api.github.com/repos/".concat(_,"/").concat(q,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));n.unshift("latest"),l(t),l(n),i(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,a=3===n.split(".").length&&n.startsWith("v")||"latest"===n;window.location.replace((0,k.sanitize)("https://".concat(_,".github.io/").concat(q).concat(a?"/version":"/review","/").concat(n).concat(t)))};return n?(0,a.jsx)(R.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,a.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,a.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null},S=e=>{var n,t;let{children:s,noNavigation:o}=e,[i,u]=(0,c.useState)(!1),[b,w]=(0,c.useState)(!1),[y,A]=(0,c.useState)(!1),[k,R]=(0,c.useState)(!1),[T,_]=(0,c.useState)(),[q,S]=(0,c.useState)(),[E,B]=(0,c.useState)(),[C,D]=(0,c.useState)(),P=(0,r.useRouter)();return(0,c.useEffect)(()=>{l.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.A.highlightAll()},[]),(0,c.useEffect)(()=>{if(P.query&&(P.query.fullscreen&&u("true"===P.query.fullscreen),P.query.page&&u(!0),P.query.noh1&&w("true"===P.query.noh1),P.query.properties&&A("true"===P.query.properties),P.query.current)){let n=Array.isArray(P.query.current)?P.query.current[0]:P.query.current;if(T!==n){var e;_(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=P.asPath.split("?")[0],{previous:t,next:a}=(0,v.Pb)(n);S(t),B(a),D((0,v.Oj)(n))},[P]),(0,a.jsxs)(a.Fragment,{children:[P.isReady&&i&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(y?"is-properties":""),children:s}),P.isReady&&!i&&(0,a.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.A,{drawerOpen:k,onToggle:R,brand:(0,a.jsx)(m.A,{children:"DB-UX"}),primaryAction:(0,a.jsx)(x.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(F,{}),children:(0,a.jsx)(N,{})}),children:[C&&C.length>1&&(0,a.jsx)(g.A,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==C?void 0:C.map(e=>{var n;return(0,a.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,a.jsx)(f.A,{icon:"chevron_right"}),(0,a.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(g.A,{spacing:"none",width:"large",children:s}),!o&&(null!=q?q:E)&&(0,a.jsxs)(g.A,{width:"large",spacing:"small",className:"link-containers",children:[q&&(0,a.jsx)(d(),{className:"previous-link-container",href:null!==(n=q.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(j.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:q.label})]})}),E&&(0,a.jsx)(d(),{className:"next-link-container",href:null!==(t=E.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(j.A,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:E.label})]})})]})]})]})},E=o()(async()=>S,{ssr:!1})}},e=>{var n=n=>e(e.s=n);e.O(0,[3578,8250,8367,2372,636,6593,8792],()=>n(42229)),_N_E=e.O()}]);