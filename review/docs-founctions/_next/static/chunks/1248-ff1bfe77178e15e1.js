"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1248],{61248:function(o,t,e){e.r(t),e.d(t,{CH:function(){return s},chCodeConfig:function(){return p}});var n=e(52322),r=e(45392),c=e(65854);let s={annotations:c.ds,Code:c.EK},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function _createMdxContent(o){let t=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",h4:"h4"},(0,r.ah)(),o.components);return s||_missingMdxReference("CH",!1),s.Code||_missingMdxReference("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,n.jsx)(t.h2,{children:"Angular"}),"\n",(0,n.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,n.jsx)(t.h3,{children:"Load component"}),"\n",(0,n.jsx)(s.Code,{codeConfig:p,northPanel:{tabs:["app.module.ts"],active:"app.module.ts",heightRatio:1},files:[{name:"app.module.ts",focus:"",code:{lines:[{tokens:[{content:"//app.module.ts",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:"{ ",props:{style:{color:"#ECEFF4"}}},{content:"DBHeaderModule ",props:{style:{color:"#D8DEE9"}}},{content:"} ",props:{style:{color:"#ECEFF4"}}},{content:"from ",props:{style:{color:"#81A1C1"}}},{content:"'",props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/ngx-components",props:{style:{color:"#A3BE8C"}}},{content:"'",props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"@NgModule",props:{style:{color:"#D08770"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"  ...",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"  declarations",props:{style:{color:"#D08770"}}},{content:": [",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"        ...",props:{style:{color:"#81A1C1"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	NavigationDirective",props:{style:{color:"#D08770"}}},{content:", ",props:{style:{color:"#ECEFF4"}}},{content:"// Optional: If you want to use a Navigation",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"	ActionBarDirective",props:{style:{color:"#D08770"}}},{content:", ",props:{style:{color:"#ECEFF4"}}},{content:"// Optional: If you want to use ActionBar",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"	MetaNavigationDirective",props:{style:{color:"#D08770"}}},{content:", ",props:{style:{color:"#ECEFF4"}}},{content:"// Optional: If you want to use MetaNavigation",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"  ]",props:{style:{color:"#D8DEE9FF"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"  imports",props:{style:{color:"#D8DEE9"}}},{content:":",props:{style:{color:"#ECEFF4"}}},{content:" [",props:{style:{color:"#D8DEE9FF"}}},{content:"...",props:{style:{color:"#81A1C1"}}},{content:", ",props:{style:{color:"#ECEFF4"}}},{content:"DBHeaderModule",props:{style:{color:"#D08770"}}},{content:"]",props:{style:{color:"#D8DEE9FF"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"  ...",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]}],lang:"ts"},annotations:[]}]}),"\n",(0,n.jsx)(t.h3,{children:"Use component"}),"\n",(0,n.jsx)(t.h4,{children:"Simple"}),"\n",(0,n.jsx)(s.Code,{codeConfig:p,northPanel:{tabs:["app.component.html"],active:"app.component.html",heightRatio:1},files:[{name:"app.component.html",focus:"",code:{lines:[{tokens:[{content:"<!-- app.component.html -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"<db-header>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<db-brand ",props:{style:{color:"#81A1C1"}}},{content:"brand",props:{style:{color:"#8FBCBB"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Header",props:{style:{color:"#D8DEE9FF"}}},{content:"</db-brand>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"</db-header>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,n.jsx)(t.h4,{children:"Full"}),"\n",(0,n.jsx)(s.Code,{codeConfig:p,northPanel:{tabs:["app.component.ts"],active:"app.component.ts",heightRatio:1},files:[{name:"app.component.ts",focus:"",code:{lines:[{tokens:[{content:"// File: app.component.ts",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:"{ ",props:{style:{color:"#ECEFF4"}}},{content:"Component ",props:{style:{color:"#D8DEE9"}}},{content:"} ",props:{style:{color:"#ECEFF4"}}},{content:"from ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"@angular/core",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"@Component",props:{style:{color:"#D08770"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	selector",props:{style:{color:"#D8DEE9"}}},{content:': "',props:{style:{color:"#ECEFF4"}}},{content:"app-root",props:{style:{color:"#A3BE8C"}}},{content:'",',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	templateUrl",props:{style:{color:"#D8DEE9"}}},{content:': "',props:{style:{color:"#ECEFF4"}}},{content:"./app.component.html",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"export class ",props:{style:{color:"#81A1C1"}}},{content:"AppComponent ",props:{style:{color:"#8FBCBB"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	drawerOpen ",props:{style:{color:"#D8DEE9FF"}}},{content:"= false;",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"	toggleDrawer ",props:{style:{color:"#88C0D0"}}},{content:"= ",props:{style:{color:"#81A1C1"}}},{content:"(",props:{style:{color:"#ECEFF4"}}},{content:"open",props:{style:{color:"#D8DEE9"}}},{content:": ",props:{style:{color:"#81A1C1"}}},{content:"boolean",props:{style:{color:"#8FBCBB"}}},{content:") ",props:{style:{color:"#ECEFF4"}}},{content:"=> ",props:{style:{color:"#81A1C1"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"		this",props:{style:{color:"#81A1C1"}}},{content:".",props:{style:{color:"#ECEFF4"}}},{content:"drawerOpen ",props:{style:{color:"#D8DEE9"}}},{content:"= ",props:{style:{color:"#81A1C1"}}},{content:"open",props:{style:{color:"#D8DEE9"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	}",props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}}]}],lang:"ts"},annotations:[]}]}),"\n",(0,n.jsx)(s.Code,{codeConfig:p,northPanel:{tabs:["app.component.html"],active:"app.component.html",heightRatio:1},files:[{name:"app.component.html",focus:"",code:{lines:[{tokens:[{content:"<!-- app.component.html -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"<db-header ",props:{style:{color:"#81A1C1"}}},{content:"[drawerOpen]",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"drawerOpen",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"(onToggle)",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"toggleDrawer($event)",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<db-brand ",props:{style:{color:"#81A1C1"}}},{content:"brand",props:{style:{color:"#8FBCBB"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"My Awesome App",props:{style:{color:"#D8DEE9FF"}}},{content:"</db-brand>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<db-main-navigation ",props:{style:{color:"#81A1C1"}}},{content:"*dbNavigation",props:{style:{color:"#8FBCBB"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<!-- https://github.com/db-ui/mono/blob/main/packages/components/src/components/main-navigation/docs/Angular.md -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"	</db-main-navigation>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<ng-container ",props:{style:{color:"#81A1C1"}}},{content:"*dbMetaNavigation",props:{style:{color:"#8FBCBB"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<",props:{style:{color:"#81A1C1"}}},{content:"DBLink ",props:{style:{color:"#D8DEE9"}}},{content:"href",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"#",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Imprint",props:{style:{color:"#D8DEE9FF"}}},{content:"</",props:{style:{color:"#81A1C1"}}},{content:"DBLink",props:{style:{color:"#D8DEE9"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<",props:{style:{color:"#81A1C1"}}},{content:"DBLink ",props:{style:{color:"#D8DEE9"}}},{content:"href",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"#",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Help",props:{style:{color:"#D8DEE9FF"}}},{content:"</",props:{style:{color:"#81A1C1"}}},{content:"DBLink",props:{style:{color:"#D8DEE9"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	</ng-container>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<ng-container ",props:{style:{color:"#81A1C1"}}},{content:"call-to-action",props:{style:{color:"#8FBCBB"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<",props:{style:{color:"#81A1C1"}}},{content:"DBButton ",props:{style:{color:"#D8DEE9"}}},{content:"icon",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"search",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"variant",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"text",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"[noText]",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"true",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"			Search",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"		</",props:{style:{color:"#81A1C1"}}},{content:"DBButton",props:{style:{color:"#D8DEE9"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	</ng-container>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<ng-container ",props:{style:{color:"#81A1C1"}}},{content:"*dbActionBar",props:{style:{color:"#8FBCBB"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<",props:{style:{color:"#81A1C1"}}},{content:"DBButton ",props:{style:{color:"#D8DEE9"}}},{content:"icon",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"account",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"variant",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"text",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"[noText]",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"true",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"			Profile",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"		</",props:{style:{color:"#81A1C1"}}},{content:"DBButton",props:{style:{color:"#D8DEE9"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<",props:{style:{color:"#81A1C1"}}},{content:"DBButton ",props:{style:{color:"#D8DEE9"}}},{content:"icon",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"alert",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"variant",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"text",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"[noText]",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"true",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"			Notification",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"		</",props:{style:{color:"#81A1C1"}}},{content:"DBButton",props:{style:{color:"#D8DEE9"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<",props:{style:{color:"#81A1C1"}}},{content:"DBButton ",props:{style:{color:"#D8DEE9"}}},{content:"icon",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"help",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"variant",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"text",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"[noText]",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"true",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:" Help ",props:{style:{color:"#D8DEE9FF"}}},{content:"</",props:{style:{color:"#81A1C1"}}},{content:"DBButton",props:{style:{color:"#D8DEE9"}}},{content:">",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	</ng-container>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"</db-header>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]})]})}function _missingMdxReference(o,t){throw Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}t.default=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),o.components);return t?(0,n.jsx)(t,Object.assign({},o,{children:(0,n.jsx)(_createMdxContent,o)})):_createMdxContent(o)}}}]);