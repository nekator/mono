(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15736],{10029:function(o,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/icons/custom-icons",function(){return n(55979)}])},55979:function(o,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var t=n(52322),s=n(64508),c=n(45392),r=n(65854);let l={annotations:r.ds,Code:r.EK},i={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function a(o){let e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,c.a)(),...o.components};return l||p("CH",!1),l.Code||p("CH.Code",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,t.jsx)(e.h1,{children:"Custom Icons"}),"\n",(0,t.jsxs)(e.p,{children:["If you have custom icons and want to use them for ",(0,t.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/foundations",children:"foundations"})," and/or in ",(0,t.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"}),", you need to generate a ",(0,t.jsx)(e.code,{children:"woff2"})," file."]}),"\n",(0,t.jsx)(e.h2,{children:"Generate"}),"\n",(0,t.jsx)(e.p,{children:"For this run:"}),"\n",(0,t.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"npx ",props:{style:{color:"#D8DEE9FF"}}},{content:"@db-ui/gif --src ./my-path-to/icons --fontName my-name",props:{style:{color:"#A3BE8C"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,t.jsxs)(e.p,{children:["We search for all ",(0,t.jsx)(e.code,{children:"**/*.svg"})," files inside the ",(0,t.jsx)(e.code,{children:"src"})," directory and create a new icon font with the provided name. You can preview all generated icons here: ",(0,t.jsx)(e.code,{children:"./my-path-to/icons/fonts/all/index.html"}),"."]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.em,{children:"NOTE:"})}),' We use four different sizes for components (16, 20, 24, 32) to show more or less details. You can do the same by providing another file with a size suffix for example "icon_file_name_16.svg".']}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"For more information run:"}),"\n",(0,t.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"npx ",props:{style:{color:"#D8DEE9FF"}}},{content:"@db-ui/gif --help",props:{style:{color:"#A3BE8C"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,t.jsx)(e.h2,{children:"How to use"}),"\n",(0,t.jsx)(e.p,{children:"In your app you need to include some of the generated files:"}),"\n",(0,t.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"./my-path-to/icons/fonts/my-name.woff2 ./my-path-to/icons/fonts/font-face.css",props:{style:{color:"#D8DEE9FF"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.em,{children:"NOTE:"})})," In case you put the files in a separate folder of your ",(0,t.jsx)(e.code,{children:"public"})," directory be aware to adopt the path in your generated ",(0,t.jsx)(e.code,{children:"font-face.css"})," file: ",(0,t.jsx)(e.code,{children:'url("/{YOUR_FOLDER}}/my-name.woff2?t=1698750286189") format("woff2");'})]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Now you can use your icons with your ",(0,t.jsx)(e.code,{children:"font-family: my-name"}),", e.g.:"]}),"\n",(0,t.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<!--example.html-->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"<i ",props:{style:{color:"#81A1C1"}}},{content:"class",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"my-name",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"icon_file_name",props:{style:{color:"#D8DEE9FF"}}},{content:"</i>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,t.jsx)(e.h3,{children:"SCSS"}),"\n",(0,t.jsxs)(e.p,{children:["When using ",(0,t.jsx)(e.code,{children:"scss"})," you can also use ",(0,t.jsx)(e.code,{children:"@forward"})," to include the generated files:"]}),"\n",(0,t.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"@forward ",props:{style:{color:"#81A1C1"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:"public/font-face",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]}],lang:"scss"},annotations:[]}]}),"\n",(0,t.jsx)(e.h3,{children:"data-icon"}),"\n",(0,t.jsx)(e.p,{children:"If you like to use a custom icon in one of our components you can do it by overwriting the default font-family like this:"}),"\n",(0,t.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<!--example.html-->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"<p ",props:{style:{color:"#81A1C1"}}},{content:"class",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"icon-family-my-name",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"data-icon",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"icon_file_name",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Test",props:{style:{color:"#D8DEE9FF"}}},{content:"</p>",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"",props:{style:{color:"#D8DEE9FF"}}}]},{tokens:[{content:"<!-- or -->",props:{style:{color:"#616E88"}}}]},{tokens:[{content:"<p ",props:{style:{color:"#81A1C1"}}},{content:"data-icon-family",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"my-name",props:{style:{color:"#A3BE8C"}}},{content:'" ',props:{style:{color:"#ECEFF4"}}},{content:"data-icon",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"icon_file_name",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"Test",props:{style:{color:"#D8DEE9FF"}}},{content:"</p>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,t.jsx)(e.h3,{children:"CSS"}),"\n",(0,t.jsx)(e.p,{children:"You can overwrite custom-icons for our components with CSS as well:"}),"\n",(0,t.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:".",props:{style:{color:"#ECEFF4"}}},{content:"db-button ",props:{style:{color:"#8FBCBB"}}},{content:"{",props:{style:{color:"#ECEFF4"}}}]},{tokens:[{content:"	--db-icon-font-family",props:{style:{color:"#D8DEE9FF"}}},{content:': "',props:{style:{color:"#ECEFF4"}}},{content:"my-name",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:";",props:{style:{color:"#81A1C1"}}}]},{tokens:[{content:"}",props:{style:{color:"#ECEFF4"}}}]}],lang:"css"},annotations:[]}]}),"\n",(0,t.jsx)(e.h2,{children:"Foundation Developer"}),"\n",(0,t.jsxs)(e.p,{children:["If you update a ",(0,t.jsx)(e.code,{children:"svg"})," inside ",(0,t.jsx)(e.code,{children:"assets/icons/functional/images"})," you need to recreate the ",(0,t.jsx)(e.code,{children:"woff2"})," file."]}),"\n",(0,t.jsx)(e.p,{children:"For this you just need to run"}),"\n",(0,t.jsx)(l.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"npm ",props:{style:{color:"#D8DEE9FF"}}},{content:"run generate:icon-fonts",props:{style:{color:"#A3BE8C"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,t.jsxs)(e.p,{children:["Your new icon should be inside ",(0,t.jsx)(e.code,{children:"assets/icons/functional/fonts/info.json"})," and you should see it inside ",(0,t.jsx)(e.code,{children:"assets/icons/functional/fonts/index.html"})," in the browser."]})]})}function d(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,c.a)(),...o.components};return e?(0,t.jsx)(e,{...o,children:(0,t.jsx)(a,{...o})}):a(o)}function p(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}let h=o=>{let{children:e}=o;return(0,t.jsx)(s.Z,{children:e})};function u(o){return(0,t.jsx)(d,{})}function f(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(h,{...o,children:(0,t.jsx)(u,{...o})})}}},function(o){o.O(0,[64996,78410,88451,64508,49774,92888,40179],function(){return o(o.s=10029)}),_N_E=o.O()}]);