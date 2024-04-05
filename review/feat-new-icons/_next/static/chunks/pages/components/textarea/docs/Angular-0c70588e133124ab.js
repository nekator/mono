(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25754],{12380:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/textarea/docs/Angular",function(){return t(67726)}])},67726:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c}});var a=t(52322),o=t(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(e.p,{children:["For general installation and configuration look at the ",(0,a.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { DBTextarea } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBTextarea],\n  // ...\n})\n"})}),"\n",(0,a.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:'import { Component } from "@angular/core";\n\n@Component({\n	selector: "app-root",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	textarea = "default value";\n}\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-textarea\n	name="textarea"\n	label="Textarea Controlled"\n	placeholder="Placeholder"\n	description="Description"\n	icon="user"\n	[value]="textarea"\n	(change)="textarea = $event.target.value"\n></db-textarea>\n'})})]})}function c(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(r,{...n})}):r(n)}}},function(n){n.O(0,[92888,49774,40179],function(){return n(n.s=12380)}),_N_E=n.O()}]);