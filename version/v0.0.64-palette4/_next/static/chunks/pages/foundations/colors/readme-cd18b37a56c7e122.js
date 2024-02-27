(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2560],{35255:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors/readme",function(){return r(46894)}])},46894:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var o=r(52322),d=r(25942),c=r(45392),t=r(65854);let s={annotations:t.ds,Code:t.EK},i={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:void 0,showCopyButton:!0,themeName:"nord"};function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return s||a("CH",!1),s.Code||a("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="nord"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #d8dee9ff;--ch-t-background: #2e3440ff;--ch-t-lighter-inlineBackground: #2e3440e6;--ch-t-editor-background: #2e3440;--ch-t-editor-foreground: #d8dee9;--ch-t-editor-lineHighlightBackground: #3b4252;--ch-t-editor-rangeHighlightBackground: #434c5e52;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #434c5ecc;--ch-t-focusBorder: #3b4252;--ch-t-tab-activeBackground: #3b4252;--ch-t-tab-activeForeground: #d8dee9;--ch-t-tab-inactiveBackground: #2e3440;--ch-t-tab-inactiveForeground: #d8dee966;--ch-t-tab-border: #3b425200;--ch-t-tab-activeBorder: #88c0d000;--ch-t-editorGroup-border: #3b425201;--ch-t-editorGroupHeader-tabsBackground: #2e3440;--ch-t-editorLineNumber-foreground: #4c566a;--ch-t-input-background: #3b4252;--ch-t-input-foreground: #d8dee9;--ch-t-input-border: #3b4252;--ch-t-icon-foreground: #C5C5C5;--ch-t-sideBar-background: #2e3440;--ch-t-sideBar-foreground: #d8dee9;--ch-t-sideBar-border: #3b4252;--ch-t-list-activeSelectionBackground: #88c0d0;--ch-t-list-activeSelectionForeground: #2e3440;--ch-t-list-hoverBackground: #3b4252;--ch-t-list-hoverForeground: #eceff4; }'}}),"\n",(0,o.jsx)(n.h1,{children:"Colors"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You use ",(0,o.jsx)(n.code,{children:"Colors"})," to highlight an area with a specific color."]}),"\n",(0,o.jsxs)(n.li,{children:["You can also use it to change the text color for components with the ",(0,o.jsx)(n.code,{children:"*-transparent-semi"})," colors."]}),"\n",(0,o.jsxs)(n.li,{children:["Most classes/placeholders will change ",(0,o.jsx)(n.code,{children:"color"})," and ",(0,o.jsx)(n.code,{children:"background-color"})," and will set properties, which will be passed down to adaptive components."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{children:"How to include colors"}),"\n",(0,o.jsxs)(n.p,{children:["For ",(0,o.jsx)(n.code,{children:"CSS"})," and ",(0,o.jsx)(n.code,{children:"Tailwind"})," you need to use the import ",(0,o.jsx)(n.code,{children:'@import "@db-ui/foundations/build/css/color/classes/all.css";'})," in your root ",(0,o.jsx)(n.code,{children:".css"})," file.\nOr if you only want a single variant e.g. ",(0,o.jsx)(n.code,{children:"informational"})," you can import ",(0,o.jsx)(n.code,{children:'@import "@db-ui/foundations/build/css/color/classes/informational.css";'}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In case that you're either using a bundler (recommended) or importing the CSS within your JavaScript files, please adapt this ",(0,o.jsx)(n.code,{children:"@import"})," syntax accordingly."]}),"\n",(0,o.jsxs)(n.p,{children:["For ",(0,o.jsx)(n.code,{children:"SCSS"})," you need to use the import ",(0,o.jsx)(n.code,{children:"@use @db-ui/foundations/build/scss/color/placeholder"})," in your ",(0,o.jsx)(n.code,{children:".scss"})," file, where you need to reference the specific variable.\nThen you can use e.g. ",(0,o.jsx)(n.code,{children:"informational"})," color by extending our SCSS placeholders like this: ",(0,o.jsx)(n.code,{children:"@extend %db-informational-bg-1"}),"."]}),"\n",(0,o.jsx)(n.h3,{children:"How to use"}),"\n",(0,o.jsxs)(n.p,{children:["We're providing an ",(0,o.jsx)(n.a,{href:"./overview",children:"overview for all possible colors"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["There are several variants: ",(0,o.jsx)(n.code,{children:"base"}),", ",(0,o.jsx)(n.code,{children:"brand"}),", ",(0,o.jsx)(n.code,{children:"neutral"}),", ",(0,o.jsx)(n.code,{children:"critical"}),", ",(0,o.jsx)(n.code,{children:"informational"}),", ",(0,o.jsx)(n.code,{children:"successful"}),", ",(0,o.jsx)(n.code,{children:"warning"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["We use ",(0,o.jsx)(n.code,{children:"XXX"})," here you should replace it with a variant from above."]})}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Variant"}),(0,o.jsx)(n.th,{children:"CSS"}),(0,o.jsx)(n.th,{children:"SCSS"}),(0,o.jsx)(n.th,{children:"Tailwind"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"XXX-bg-1"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'class="db-XXX-bg-1"'})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@extend %db-XXX-bg-1"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'class="db-XXX-bg-1"'})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"XXX-bg-2"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'class="db-XXX-bg-2"'})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@extend %db-XXX-bg-2"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'class="db-XXX-bg-2"'})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"XXX-bg-3"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'class="db-XXX-bg-3"'})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@extend %db-XXX-bg-3"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'class="db-XXX-bg-3"'})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"XXX-transparent-semi"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'class="db-XXX-bg-transparent-semi"'})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@extend %db-XXX-bg-transparent-semi"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'class="db-XXX-bg-transparent-semi"'})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"center"},children:(0,o.jsx)(n.code,{children:"XXX-transparent-full"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'class="db-XXX-bg-transparent-full"'})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"@extend %db-XXX-bg-transparent-full"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'class="db-XXX-bg-transparent-full"'})})]})]})]}),"\n",(0,o.jsx)(n.h3,{children:"Dark- & Light-Mode"}),"\n",(0,o.jsxs)(n.p,{children:["We provide tokens for both dark- and light-mode. If you include the ",(0,o.jsx)(n.code,{children:"db-ui-42"})," style you get a media query ",(0,o.jsx)(n.code,{children:"@media (prefers-color-scheme: dark)"})," with the relevant tokens. You can ",(0,o.jsx)(n.a,{href:"https://developer.chrome.com/docs/devtools/rendering/emulate-css/",children:"emulate"})," the modes inside the devtools.\nWe recommend using the default media query based on the user preference, but if you want to force a mode for your page or a container you can do it with adding the attributes ",(0,o.jsx)(n.code,{children:'data-color-scheme="dark"'})," or ",(0,o.jsx)(n.code,{children:'data-color-scheme="light"'}),":"]}),"\n",(0,o.jsx)(n.h4,{children:"HTML"}),"\n",(0,o.jsx)(s.Code,{codeConfig:i,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"<div ",props:{style:{color:"#81A1C1"}}},{content:"data-color-scheme",props:{style:{color:"#8FBCBB"}}},{content:'="',props:{style:{color:"#ECEFF4"}}},{content:"dark",props:{style:{color:"#A3BE8C"}}},{content:'"',props:{style:{color:"#ECEFF4"}}},{content:">",props:{style:{color:"#81A1C1"}}},{content:"...",props:{style:{color:"#D8DEE9FF"}}},{content:"</div>",props:{style:{color:"#81A1C1"}}}]}],lang:"html"},annotations:[]}]}),"\n",(0,o.jsxs)(n.p,{children:["We're providing an example in our ",(0,o.jsx)(n.a,{href:"./color-schemes",children:"color schemes documentation"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["We need to set the ",(0,o.jsx)(n.code,{children:"base"})," background to the element with ",(0,o.jsx)(n.code,{children:"[data-color-scheme]"})," so if you want to change the background to another color, make sure to use a wrapping tag like ",(0,o.jsx)(n.code,{children:"div"})," with the ",(0,o.jsx)(n.code,{children:"[data-color-scheme]"})," to avoid issues."]})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function a(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let x=e=>{let{children:n}=e;return(0,o.jsx)(d.Z,{children:n})};function u(e){return(0,o.jsx)(h,{})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(x,{...e,children:(0,o.jsx)(u,{...e})})}}},function(e){e.O(0,[64996,23019,23149,25942,92888,49774,40179],function(){return e(e.s=35255)}),_N_E=e.O()}]);