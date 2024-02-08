"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72111],{72111:function(o,t,e){e.r(t),e.d(t,{CH:function(){return c},chCodeConfig:function(){return l},default:function(){return E}});var n=e(52322),r=e(45392),s=e(65854);let c={annotations:s.ds,Code:s.EK},l={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function p(o){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...o.components};return c||y("CH",!1),c.Code||y("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,n.jsx)(t.h2,{children:"Angular"}),"\n",(0,n.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,n.jsx)(t.h3,{children:"Load component"}),"\n",(0,n.jsx)(c.Code,{codeConfig:l,northPanel:{tabs:["app.component.ts"],active:"app.component.ts",heightRatio:1},files:[{name:"app.component.ts",focus:"",code:{lines:[{tokens:[{content:"// app.component.ts",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:"{ ",props:{style:{color:"#ECEFF4"}}},{content:"DBRadio ",props:{style:{color:"#D8DEE9"}}},{content:"} ",props:{style:{color:"#ECEFF4"}}},{content:"from ",props:{style:{color:"#81A1C1"}}},{content:"'",props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/ngx-components",props:{style:{color:"#A3BE8C"}}},{content:"'",props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"@Component",props:{style:{color:"#D08770"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"  // ...",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"  standalone",props:{style:{color:"#D8DEE9"}}},{content:": ",props:{style:{color:"#ECEFF4"}}},{content:"true",props:{style:{color:"#81A1C1"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"  imports",props:{style:{color:"#D8DEE9"}}},{content:":",props:{style:{color:"#ECEFF4"}}},{content:" [",props:{style:{color:"#D8DEE9FF"}}},{content:"...",props:{style:{color:"#81A1C1"}}},{content:", ",props:{style:{color:"#ECEFF4"}}},{content:"DBRadio",props:{style:{color:"#D08770"}}},{content:"]",props:{style:{color:"#D8DEE9FF"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"  // ...",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]}],lang:"ts"},annotations:[]}]}),"\n",(0,n.jsx)(t.h3,{children:"Use component"}),"\n",(0,n.jsx)(c.Code,{codeConfig:l,northPanel:{tabs:["app.component.html"],active:"app.component.html",heightRatio:1},files:[{name:"app.component.html",focus:"",code:{lines:[{tokens:[{content:"<!-- app.component.html -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"<ul>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<li ",props:{style:{color:"#81A1C1"}}},{content:"*ngFor",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"let radioName of radioNames",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<db-radio",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"			(change)",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"radio = radioName",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"			[label]",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"'Radio ' + radioName",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"			[value]",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"radioName",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"			name",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"RadioGroup",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"		></db-radio>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	</li>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"</ul>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,n.jsx)(c.Code,{codeConfig:l,northPanel:{tabs:["app.component.ts"],active:"app.component.ts",heightRatio:1},files:[{name:"app.component.ts",focus:"",code:{lines:[{tokens:[{content:"// app.component.ts",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:"{ ",props:{style:{color:"#ECEFF4"}}},{content:"Component ",props:{style:{color:"#D8DEE9"}}},{content:"} ",props:{style:{color:"#ECEFF4"}}},{content:"from ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@angular/core",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"@Component",props:{style:{color:"#D08770"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	selector",props:{style:{color:"#D8DEE9"}}},{content:': "',props:{style:{color:"#ECEFF4"}}},{content:"app-app",props:{style:{color:"#A3BE8C"}}},{content:'",',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	templateUrl",props:{style:{color:"#D8DEE9"}}},{content:': "',props:{style:{color:"#ECEFF4"}}},{content:"./app.component.html",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"export class ",props:{style:{color:"#81A1C1"}}},{content:"AppComponent ",props:{style:{color:"#8FBCBB"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	radioNames ",props:{style:{color:"#D8DEE9FF"}}},{content:"=",props:{style:{color:"#81A1C1"}}},{content:" [",props:{style:{color:"#D8DEE9FF"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"X",props:{style:{color:"#A3BE8C"}}},{content:'", "',props:{style:{color:"#ECEFF4"}}},{content:"Y",props:{style:{color:"#A3BE8C"}}},{content:'", "',props:{style:{color:"#ECEFF4"}}},{content:"Z",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"]",props:{style:{color:"#D8DEE9FF"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	radio ",props:{style:{color:"#D8DEE9FF"}}},{content:"= ",props:{style:{color:"#81A1C1"}}},{content:'""',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}}]}],lang:"ts"},annotations:[]}]}),"\n",(0,n.jsx)(t.h2,{children:"How to use with Template Driven Forms"}),"\n",(0,n.jsxs)(t.p,{children:["Third party controls require a ",(0,n.jsx)(t.code,{children:"ControlValueAccessor"})," to function with angular forms. Adding an ",(0,n.jsx)(t.code,{children:"ngDefaultControl"})," attribute will allow them to use that directive.\n",(0,n.jsx)(t.a,{href:"https://stackoverflow.com/a/46465959",children:"Further information"})]}),"\n",(0,n.jsx)(c.Code,{codeConfig:l,northPanel:{tabs:["app.component.ts"],active:"app.component.ts",heightRatio:1},files:[{name:"app.component.ts",focus:"",code:{lines:[{tokens:[{content:"//app.component.ts",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:"{ ",props:{style:{color:"#ECEFF4"}}},{content:"FormsModule ",props:{style:{color:"#D8DEE9"}}},{content:"} ",props:{style:{color:"#ECEFF4"}}},{content:"from ",props:{style:{color:"#81A1C1"}}},{content:"'",props:{style:{color:"#ECEFF4"}}},{content:"@angular/forms",props:{style:{color:"#A3BE8C"}}},{content:"'",props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"@Component",props:{style:{color:"#D08770"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	// ...",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"	imports",props:{style:{color:"#D8DEE9"}}},{content:":",props:{style:{color:"#ECEFF4"}}},{content:" [",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"		// ...,",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"		FormsModule",props:{style:{color:"#D08770"}}}]},{tokens:[{content:"    ]",props:{style:{color:"#D8DEE9FF"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	// ...",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]}],lang:"ts"},annotations:[]}]}),"\n",(0,n.jsx)(c.Code,{codeConfig:l,northPanel:{tabs:["form.component.html"],active:"form.component.html",heightRatio:1},files:[{name:"form.component.html",focus:"",code:{lines:[{tokens:[{content:"<!-- form.component.html -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"<form>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<",props:{style:{color:"#81A1C1"}}},{content:"DBRadio ",props:{style:{color:"#D8DEE9"}}},{content:"ngDefaultControl [(ngModel)]",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"radio",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Label",props:{style:{color:"#D8DEE9FF"}}},{content:"</",props:{style:{color:"#81A1C1"}}},{content:"DBRadio",props:{style:{color:"#D8DEE9"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<",props:{style:{color:"#81A1C1"}}},{content:"DBButton ",props:{style:{color:"#D8DEE9"}}},{content:"type",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"button",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"variant",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"primary",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"(click)",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"showValues()",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"		>",props:{style:{color:"#81A1C1"}}},{content:"Get radio value",props:{style:{color:"#D8DEE9FF"}}},{content:"</",props:{style:{color:"#81A1C1"}}},{content:"DBButton",props:{style:{color:"#D8DEE9"}}}]},{tokens:[{content:"	>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"</form>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"<h2>",props:{style:{color:"#81A1C1"}}},{content:"Output",props:{style:{color:"#D8DEE9FF"}}},{content:"</h2>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"<dl>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<dt>",props:{style:{color:"#81A1C1"}}},{content:"radio's value",props:{style:{color:"#D8DEE9FF"}}},{content:"</dt>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<dd>",props:{style:{color:"#81A1C1"}}},{content:'{{ radio ? radio : "No radio set" }}',props:{style:{color:"#D8DEE9FF"}}},{content:"</dd>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"</dl>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,n.jsx)(c.Code,{codeConfig:l,northPanel:{tabs:["form.component.ts"],active:"form.component.ts",heightRatio:1},files:[{name:"form.component.ts",focus:"",code:{lines:[{tokens:[{content:"// form.component.ts",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"export class ",props:{style:{color:"#81A1C1"}}},{content:"FormComponent ",props:{style:{color:"#8FBCBB"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	radio ",props:{style:{color:"#D8DEE9FF"}}},{content:"= ",props:{style:{color:"#81A1C1"}}},{content:'""',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	showValues",props:{style:{color:"#88C0D0"}}},{content:"()",props:{style:{color:"#ECEFF4"}}},{content:": ",props:{style:{color:"#81A1C1"}}},{content:"void ",props:{style:{color:"#8FBCBB"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"		alert",props:{style:{color:"#88C0D0"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:"JSON",props:{style:{color:"#D8DEE9"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"stringify",props:{style:{color:"#88C0D0"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:"{ ",props:{style:{color:"#ECEFF4"}}},{content:"radio",props:{style:{color:"#D8DEE9"}}},{content:": ",props:{style:{color:"#ECEFF4"}}},{content:"this",props:{style:{color:"#81A1C1"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"radio ",props:{style:{color:"#D8DEE9"}}},{content:"}",props:{style:{color:"#ECEFF4"}}},{content:"))",props:{style:{color:"#D8DEE9FF"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	}",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}}]}],lang:"ts"},annotations:[]}]}),"\n",(0,n.jsx)(t.h2,{children:"How to use with Reactive Forms"}),"\n",(0,n.jsx)(t.p,{children:"coming soon … if your interested in contributing, you're very welcome ;)"})]})}function E(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(p,{...o})}):p(o)}function y(o,t){throw Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);