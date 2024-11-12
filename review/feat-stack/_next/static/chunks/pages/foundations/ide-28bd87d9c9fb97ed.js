(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1435],{12448:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/ide",function(){return s(29785)}])},29785:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var n=s(31085),r=s(83952),i=s(71184);function a(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"ide-support",children:"IDE Support"}),"\n",(0,n.jsx)(t.p,{children:"We try to support those IDEs:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.jetbrains.com/",children:"JetBrain"})," IDEs (like. IntelliJ IDEA, WebStorm, etc.)"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code (VSCode)"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Most use cases of the Design System might work in other IDEs as well."}),"\n",(0,n.jsx)(t.h2,{id:"autocomplete-for-css-classes-and-css-custom-properties-variables",children:"Autocomplete for CSS classes and CSS Custom Properties (Variables)"}),"\n",(0,n.jsxs)(t.p,{children:["You can enable auto-complete of CSS classes (like e.g. ",(0,n.jsx)(t.code,{children:"db-container-color-cyan"}),")  for ",(0,n.jsx)(t.code,{children:"HTML"})," or ",(0,n.jsx)(t.code,{children:"JSX"})," and CSS Custom Properties (like e.g. ",(0,n.jsx)(t.code,{children:"var(--db-bg-basic-level-1-default)"}),") in ",(0,n.jsx)(t.code,{children:".css"})," or ",(0,n.jsx)(t.code,{children:".scss"})," files by including ",(0,n.jsx)(t.code,{children:"@db-ui/foundations/build/ide"}),"."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," The contents of this directory shouldn't be included/referenced inside your app. It's only serving as a file containing declarations for autocompletion inside your IDE. All values for classes and properties don't reflect the real values, and neither does the CSS selector. The correct values my differ based on multiple circumstances like light-/dark-mode or screen-size etc. Therefore, there isn't a 1:1 mapping."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"jetbrain-ides-like-intellij-idea-webstorm-etc",children:"JetBrain IDEs (like. IntelliJ IDEA, WebStorm, etc.)"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Goto ",(0,n.jsx)(t.code,{children:"File/Settings/Languages & Frameworks/Javascript/Libraries"})]}),"\n",(0,n.jsxs)(t.li,{children:["Press the ",(0,n.jsx)(t.code,{children:"Add"})," button and write ",(0,n.jsx)(t.code,{children:"db-ui"}),' into the "name" input. This name will be shown in the auto-complete popup during coding. You can change the name if you want to. Keep the rest of the settings as default: ',(0,n.jsx)(t.code,{children:"Framework type: <Custom>"})," and ",(0,n.jsx)(t.code,{children:"Visibility: Project"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Next press the ➕ button below ",(0,n.jsx)(t.code,{children:"Visibility"})," and select ",(0,n.jsx)(t.code,{children:"Attach Directories..."})]}),"\n",(0,n.jsxs)(t.li,{children:["This will open a file manager. Navigate to your current projects ",(0,n.jsx)(t.code,{children:"node_modules/@db-ui/foundations/build/ide"})," and select the ",(0,n.jsx)(t.code,{children:"ide"})," folder. Press ",(0,n.jsx)(t.code,{children:"OK"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The folder should be included in the list below the ➕ button. Press ",(0,n.jsx)(t.code,{children:"Apply"})," on the bottom."]}),"\n",(0,n.jsxs)(t.li,{children:["Everything should work now. Close the settings and move to a ",(0,n.jsx)(t.code,{children:"html"})," or ",(0,n.jsx)(t.code,{children:"jsx/tsx"})," file and write ",(0,n.jsx)(t.code,{children:'class="db-'})," as attribute to an element. You should see all ",(0,n.jsx)(t.code,{children:"db-*"})," classes for auto-completion. Furthermore, you can go to a ",(0,n.jsx)(t.code,{children:".css"})," file and write inside a selector ",(0,n.jsx)(t.code,{children:"color: db-"}),". You should see the autocomplete for CSS Custom Properties. By pressing ",(0,n.jsx)(t.code,{children:"ENTER"})," this will automatically add ",(0,n.jsx)(t.code,{children:"var(--db-xxx)"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"vs-code",children:"VS Code"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Install ",(0,n.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables",children:"the CSS Variable Autocomplete extesion"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If it doesn't exist, create a new file ",(0,n.jsx)(t.code,{children:".vscode/settings.json"})," in your project"]}),"\n",(0,n.jsxs)(t.li,{children:["Add this to ",(0,n.jsx)(t.code,{children:"settings.json"}),":"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "cssVariables.lookupFiles": [\n    "**/*.css",\n    "**/*.scss",\n    "**/*.sass",\n    "**/*.less",\n	  "node_modules/@db-ui/foundations/build/ide/db.ide.css"\n  ]\n}\n'})}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["Go to a ",(0,n.jsx)(t.code,{children:".css"})," file and write inside a selector ",(0,n.jsx)(t.code,{children:"color: db-"}),". You should see the autocomplete for CSS Custom Properties. By pressing ",(0,n.jsx)(t.code,{children:"ENTER"})," this will automatically add ",(0,n.jsx)(t.code,{children:"var(--db-xxx)"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," We couldn't find a good extension to work properly with the classes you could try out ",(0,n.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=gencer.html-slim-scss-css-class-completion",children:"the SCSS Everywhere extension"}),". But we encountered some issues with this one."]}),"\n"]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}let l=e=>{let{children:t}=e;return(0,n.jsx)(r.A,{children:t})};function c(e){return(0,n.jsx)(o,{})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(l,{...e,children:(0,n.jsx)(c,{...e})})}},83952:(e,t,s)=>{"use strict";s.d(t,{A:()=>P});var n=s(31085),r=s(31242),i=s(83894),a=s.n(i),o=s(14041),l=s(30127),c=s(34747),d=s.n(c),h=s(5188);let u=(0,o.forwardRef)(function(e,t){let s=t||(0,o.useRef)(t),[r,i]=(0,o.useState)(()=>!1),a=(0,o.useRef)(!1);return a.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),a.current=!0),(0,o.useEffect)(()=>{i(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{i(!0)}):i(!0)},[]),(0,o.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,n.jsxs)("div",{ref:s,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(r),children:[(0,n.jsx)(n.Fragment,{children:e.header}),(0,n.jsx)("main",{className:"db-main",children:e.children}),(0,n.jsx)(n.Fragment,{children:e.footer})]})});var p=s(23116),x=s(23944),j=s(95374),m=s(12764),f=s(80692),b=s(64286),g=s(32825),v=s(61338),y=s(6900);let w=(e,t,s)=>{if(!s.query.slug)return t.path===s.pathname;let{slug:n}=s.query,r=Array.isArray(n)?n:[n];return t.path==="/components/".concat(r.join("/"))},S=e=>{var t;let{navItem:s}=e,i=(0,r.useRouter)(),a=w(i.pathname,s,i);return(0,n.jsx)(y.A,{backButtonText:"Back to ".concat(s.label),subNavigation:s.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==s?void 0:s.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,n.jsx)(S,{navItem:e},"router-path-".concat(e.path)))}),children:s.subNavigation?s.label:(0,n.jsx)(d(),{href:null!==(t=s.path)&&void 0!==t?t:"","aria-current":a?"page":void 0,children:s.label},"router-path-".concat(s.path))})},A=()=>(0,n.jsx)(v.A,{children:g.bw.map(e=>(0,n.jsx)(S,{navItem:e},"router-path-".concat(e.path)))});var N=s(97519),k=s(47982);let E=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},C="db-ui",I="mono",q=()=>{let e=(0,r.useRouter)(),[t,s]=(0,o.useState)(),[i,a]=(0,o.useState)(),l=t=>{let s=e.basePath,n=t.find(e=>s.includes(e));n&&a(n)},c=(e,t)=>{let n=[],r=[],i=[],a=[],o=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?i.push(e):e.startsWith("refactor")?a.push(e):/^\d*-/.test(e)?o.push(e):e.startsWith("docs")?l.push(e):n.push(e);s({others:n,features:r,docs:l,refactors:a,issues:o,bugfixes:i,versions:e})};(0,o.useEffect)(()=>{(async()=>{let e=await E("https://api.github.com/repos/".concat(C,"/").concat(I,"/branches")),t=(await E("https://api.github.com/repos/".concat(C,"/").concat(I,"/tags"))).map(e=>e.name),s=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.unshift("latest"),l(s),l(t),c(t,s)})().catch(e=>{console.error(e)})},[]);let d=t=>{let s=e.asPath,n=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace((0,N.sanitize)("https://".concat(C,".github.io/").concat(I).concat(n?"/version":"/review","/").concat(t).concat(s)))};return t?(0,n.jsx)(k.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:i,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,s]=e;return(null==s?void 0:s.length)>0}).map(e=>{let[t,s]=e;return(0,n.jsx)("optgroup",{label:t,children:s.slice(0,15).map((e,s)=>(0,n.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(s)))},t)})}):null},_=e=>{var t,s;let{children:i,noNavigation:a}=e,[c,h]=(0,o.useState)(!1),[v,y]=(0,o.useState)(!1),[w,S]=(0,o.useState)(!1),[N,k]=(0,o.useState)(!1),[E,C]=(0,o.useState)(),[I,_]=(0,o.useState)(),[P,T]=(0,o.useState)(),[D,F]=(0,o.useState)(),R=(0,r.useRouter)();return(0,o.useEffect)(()=>{l.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.A.highlightAll()},[]),(0,o.useEffect)(()=>{if(R.query&&(R.query.fullscreen&&h("true"===R.query.fullscreen),R.query.page&&h(!0),R.query.noh1&&y("true"===R.query.noh1),R.query.properties&&S("true"===R.query.properties),R.query.current)){let t=Array.isArray(R.query.current)?R.query.current[0]:R.query.current;if(E!==t){var e;C(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=R.asPath.split("?")[0],{previous:s,next:n}=(0,g.Pb)(t);_(s),T(n),F((0,g.Oj)(t))},[R]),(0,n.jsxs)(n.Fragment,{children:[R.isReady&&c&&(0,n.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:i}),R.isReady&&!c&&(0,n.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,n.jsx)(p.A,{drawerOpen:N,onToggle:k,brand:(0,n.jsx)(x.A,{children:"DB-UX"}),primaryAction:(0,n.jsx)(j.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,n.jsx)(q,{}),children:(0,n.jsx)(A,{})}),children:[D&&D.length>1&&(0,n.jsx)(m.A,{spacing:"none",width:"large",children:(0,n.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==D?void 0:D.map(e=>{var t;return(0,n.jsxs)(o.Fragment,{children:["/"!==e.path&&(0,n.jsx)(f.A,{icon:"chevron_right"}),(0,n.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,n.jsx)(m.A,{spacing:"none",width:"large",children:i}),!a&&(null!=I?I:P)&&(0,n.jsxs)(m.A,{width:"large",spacing:"small",className:"link-containers",children:[I&&(0,n.jsx)(d(),{className:"previous-link-container",href:null!==(t=I.path)&&void 0!==t?t:"/",children:(0,n.jsxs)(b.A,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Previous"}),(0,n.jsx)("span",{"data-icon":"arrow_left",children:I.label})]})}),P&&(0,n.jsx)(d(),{className:"next-link-container",href:null!==(s=P.path)&&void 0!==s?s:"/",children:(0,n.jsxs)(b.A,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Next"}),(0,n.jsx)("span",{"data-icon-after":"arrow_right",children:P.label})]})})]})]})]})},P=a()(async()=>_,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,8250,1446,2825,636,6593,8792],()=>t(12448)),_N_E=e.O()}]);