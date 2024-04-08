(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95440],{92346:function(n,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio/docs/Angular",function(){return e(72111)}])},72111:function(n,o,e){"use strict";e.r(o),e.d(o,{default:function(){return i}});var r=e(52322),a=e(45392);function t(n){let o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"angular",children:"Angular"}),"\n",(0,r.jsxs)(o.p,{children:["For general installation and configuration take a look at the ",(0,r.jsx)(o.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,r.jsx)(o.h3,{id:"load-component",children:"Load component"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"// app.component.ts\nimport { DBRadio } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBRadio],\n  // ...\n})\n"})}),"\n",(0,r.jsx)(o.h3,{id:"use-component",children:"Use component"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-html",children:'<!-- app.component.html -->\n<ul>\n	@for (radioName of radioNames; track radioName) {\n	<li>\n		<db-radio\n			(change)="radio = radioName"\n			[label]="\'Radio \' + radioName"\n			[value]="radioName"\n			name="RadioGroup"\n		></db-radio>\n	</li>\n	}\n</ul>\n'})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:'// app.component.ts\nimport { Component } from "@angular/core";\n\n@Component({\n	selector: "app-app",\n	templateUrl: "./app.component.html"\n})\nexport class AppComponent {\n	radioNames = ["X", "Y", "Z"];\n	radio = "";\n}\n'})}),"\n",(0,r.jsx)(o.h2,{id:"how-to-use-with-template-driven-forms",children:"How to use with Template Driven Forms"}),"\n",(0,r.jsxs)(o.p,{children:["Third party controls require a ",(0,r.jsx)(o.code,{children:"ControlValueAccessor"})," to function with angular forms. Adding an ",(0,r.jsx)(o.code,{children:"ngDefaultControl"})," attribute will allow them to use that directive.\n",(0,r.jsx)(o.a,{href:"https://stackoverflow.com/a/46465959",children:"Further information"})]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"//app.component.ts\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n	// ...\n	imports: [\n		// ...,\n		FormsModule\n    ],\n	// ...\n})\n"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-html",children:'<!-- form.component.html -->\n<form>\n	<DBRadio ngDefaultControl [(ngModel)]="radio">Label</DBRadio>\n	<DBButton type="button" variant="primary" (click)="showValues()"\n		>Get radio value</DBButton\n	>\n</form>\n\n<h2>Output</h2>\n<dl>\n	<dt>radio\'s value</dt>\n	<dd>{{ radio ? radio : "No radio set" }}</dd>\n</dl>\n'})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:'// form.component.ts\nexport class FormComponent {\n	radio = "";\n	showValues(): void {\n		alert(JSON.stringify({ radio: this.radio }));\n	}\n}\n'})}),"\n",(0,r.jsx)(o.h2,{id:"how-to-use-with-reactive-forms",children:"How to use with Reactive Forms"}),"\n",(0,r.jsx)(o.p,{children:"coming soon … if your interested in contributing, you're very welcome ;)"})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}={...(0,a.a)(),...n.components};return o?(0,r.jsx)(o,{...n,children:(0,r.jsx)(t,{...n})}):t(n)}}},function(n){n.O(0,[92888,49774,40179],function(){return n(n.s=92346)}),_N_E=n.O()}]);