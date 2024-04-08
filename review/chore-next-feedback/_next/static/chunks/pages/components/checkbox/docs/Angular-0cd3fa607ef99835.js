(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68783],{6506:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox/docs/Angular",function(){return o(31453)}])},31453:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return a}});var c=o(52322),t=o(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,c.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,c.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,c.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { DBCheckbox } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBCheckbox],\n  // ...\n})\n"})}),"\n",(0,c.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n<ul>\n	@for (checkboxName of checkboxNames; track checkboxName) {\n	<li>\n		<db-checkbox\n			(change)="checkbox = checkboxName"\n			[label]="\'Checkbox \' + checkboxName"\n			[value]="checkboxName"\n			name="CheckboxGroup"\n		></db-checkbox>\n	</li>\n	}\n</ul>\n'})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:'// app.component.ts\nimport { Component } from "@angular/core";\n\n@Component({\n	selector: "app-app",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	checkboxNames = ["X", "Y", "Z"];\n	checkbox = "";\n}\n'})}),"\n",(0,c.jsx)(e.h2,{id:"how-to-use-with-template-driven-forms",children:"How to use with Template Driven Forms"}),"\n",(0,c.jsxs)(e.p,{children:["Third party controls require a ",(0,c.jsx)(e.code,{children:"ControlValueAccessor"})," to function with angular forms. Adding an ",(0,c.jsx)(e.code,{children:"ngDefaultControl"})," attribute will allow them to use that directive.\n",(0,c.jsx)(e.a,{href:"https://stackoverflow.com/a/46465959",children:"Further information"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"//app.component.ts\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n	// ...\n	imports: [\n		// ...,\n		FormsModule\n    ],\n	// ...\n})\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-html",children:'<!-- form.component.html -->\n<form>\n	<db-checkbox\n		(change)="checkbox = $event.target.checked"\n		name="checkbox"\n		label="Checkbox"\n	></db-checkbox>\n	<db-button type="button" variant="primary" (click)="showValues()"\n		>Get checkbox value</db-button\n	>\n</form>\n\n<h2>Output</h2>\n<dl>\n	<dt>checkbox\'s value</dt>\n	<dd>checkbox {{ checkbox ? "" : "un" }}checked</dd>\n</dl>\n'})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:'// form.component.ts\nexport class FormComponent {\n	checkbox = "";\n	showValues(): void {\n		alert(JSON.stringify({ checkbox: this.checkbox }));\n	}\n}\n'})}),"\n",(0,c.jsx)(e.h2,{id:"how-to-use-with-reactive-forms",children:"How to use with Reactive Forms"}),"\n",(0,c.jsx)(e.p,{children:"coming soon … if your interested in contributing, you're very welcome ;)"})]})}function a(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(r,{...n})}):r(n)}}},function(n){n.O(0,[92888,49774,40179],function(){return n(n.s=6506)}),_N_E=n.O()}]);