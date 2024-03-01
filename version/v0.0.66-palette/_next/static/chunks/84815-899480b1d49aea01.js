"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84815],{84815:function(o,t,e){e.r(t),e.d(t,{CH:function(){return s},chCodeConfig:function(){return l},default:function(){return a}});var n=e(52322),r=e(45392),c=e(65854);let s={annotations:c.ds,Code:c.EK},l={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function p(o){let t={a:"a",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...o.components};return s||d("CH",!1),s.Code||d("CH.Code",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,n.jsx)(t.h2,{id:"angular",children:"Angular"}),"\n",(0,n.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,n.jsx)(t.h3,{id:"load-component",children:"Load component"}),"\n",(0,n.jsx)(t.p,{children:"You can't use the component standalone!"}),"\n",(0,n.jsx)(s.Code,{codeConfig:l,northPanel:{tabs:["app.module.ts"],active:"app.module.ts",heightRatio:1},files:[{name:"app.module.ts",focus:"",code:{lines:[{tokens:[{content:"//app.module.ts",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"import ",props:{style:{color:"#81A1C1"}}},{content:"{ ",props:{style:{color:"#ECEFF4"}}},{content:"DBTab",props:{style:{color:"#D8DEE9"}}},{content:", ",props:{style:{color:"#ECEFF4"}}},{content:"DBTabList",props:{style:{color:"#D8DEE9"}}},{content:", ",props:{style:{color:"#ECEFF4"}}},{content:"DBTabPanel",props:{style:{color:"#D8DEE9"}}},{content:", ",props:{style:{color:"#ECEFF4"}}},{content:"DBTabs ",props:{style:{color:"#D8DEE9"}}},{content:"} ",props:{style:{color:"#ECEFF4"}}},{content:"from ",props:{style:{color:"#81A1C1"}}},{content:"'",props:{style:{color:"#ECEFF4"}}},{content:"@db-ui/ngx-components",props:{style:{color:"#A3BE8C"}}},{content:"'",props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"@NgModule",props:{style:{color:"#D08770"}}},{content:"(",props:{style:{color:"#D8DEE9FF"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"  ...",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"  standalone",props:{style:{color:"#D08770"}}},{content:": ",props:{style:{color:"#D8DEE9FF"}}},{content:"true",props:{style:{color:"#81A1C1"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"  imports",props:{style:{color:"#D8DEE9"}}},{content:":",props:{style:{color:"#ECEFF4"}}},{content:" [",props:{style:{color:"#D8DEE9FF"}}},{content:"...",props:{style:{color:"#81A1C1"}}},{content:", ",props:{style:{color:"#ECEFF4"}}},{content:"DBTab",props:{style:{color:"#D08770"}}},{content:",",props:{style:{color:"#ECEFF4"}}},{content:"DBTabList",props:{style:{color:"#D08770"}}},{content:",",props:{style:{color:"#ECEFF4"}}},{content:"DBTabPanel",props:{style:{color:"#D08770"}}},{content:",",props:{style:{color:"#ECEFF4"}}},{content:"DBTabs",props:{style:{color:"#D08770"}}},{content:"]",props:{style:{color:"#D8DEE9FF"}}},{content:",",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"  ...",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}},{content:")",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]}],lang:"ts"},annotations:[]}]}),"\n",(0,n.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,n.jsx)(s.Code,{codeConfig:l,northPanel:{tabs:["app.component.html"],active:"app.component.html",heightRatio:1},files:[{name:"app.component.html",focus:"",code:{lines:[{tokens:[{content:"<!-- app.component.html -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"<db-tabs>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<db-tab-list>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<db-tab>",props:{style:{color:"#81A1C1"}}},{content:"Tab 1",props:{style:{color:"#D8DEE9FF"}}},{content:"</db-tab>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<db-tab>",props:{style:{color:"#81A1C1"}}},{content:"Tab 2",props:{style:{color:"#D8DEE9FF"}}},{content:"</db-tab>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"		<db-tab>",props:{style:{color:"#81A1C1"}}},{content:"Tab 3",props:{style:{color:"#D8DEE9FF"}}},{content:"</db-tab>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	</db-tab-list>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<db-tab-panel>",props:{style:{color:"#81A1C1"}}},{content:"Tab Panel 1",props:{style:{color:"#D8DEE9FF"}}},{content:"</db-tab-panel>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<db-tab-panel>",props:{style:{color:"#81A1C1"}}},{content:"Tab Panel 2",props:{style:{color:"#D8DEE9FF"}}},{content:"</db-tab-panel>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"	<db-tab-panel>",props:{style:{color:"#81A1C1"}}},{content:"Tab Panel 3",props:{style:{color:"#D8DEE9FF"}}},{content:"</db-tab-panel>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"</db-tabs>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]})]})}function a(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,r.a)(),...o.components};return t?(0,n.jsx)(t,{...o,children:(0,n.jsx)(p,{...o})}):p(o)}function d(o,t){throw Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);