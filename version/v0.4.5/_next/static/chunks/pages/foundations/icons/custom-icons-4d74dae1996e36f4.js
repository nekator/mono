(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5736],{10029:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/icons/custom-icons",function(){return t(62543)}])},62543:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s=t(52322),a=t(50115),r=t(45392);function o(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"custom-icons",children:"Custom Icons"}),"\n",(0,s.jsxs)(n.p,{children:["If you have custom icons and want to use them for ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/foundations",children:"foundations"})," and/or in ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"}),", you need to generate a ",(0,s.jsx)(n.strong,{children:"woff2"})," file."]}),"\n",(0,s.jsx)(n.h2,{id:"generate",children:"Generate"}),"\n",(0,s.jsx)(n.p,{children:"For this run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npx @db-ui/gif --src ./my-path-to/icons --fontName my-name\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We search for all ",(0,s.jsx)(n.code,{children:"**/*.svg"})," files inside the ",(0,s.jsx)(n.code,{children:"src"})," directory and create a new icon font with the provided name. You can preview all generated icons here: ",(0,s.jsx)(n.code,{children:"./my-path-to/icons/fonts/all/index.html"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"NOTE:"})})," We use four different sizes for components (16, 20, 24, 32) to show more or less details. You can do the same by providing another file with a size suffix for example ",(0,s.jsx)(n.code,{children:"icon_file_name_16.svg"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For more information run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npx @db-ui/gif --help\n"})}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsx)(n.p,{children:"In your app you need to include some of the generated files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"./my-path-to/icons/fonts/my-name.woff2 ./my-path-to/icons/fonts/font-face.css\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"NOTE:"})})," In case you put the files in a separate folder of your ",(0,s.jsx)(n.code,{children:"public"})," directory be aware to adopt the path in your generated ",(0,s.jsx)(n.code,{children:"font-face.css"})," file: ",(0,s.jsx)(n.code,{children:'url("/{YOUR_FOLDER}}/my-name.woff2?t=1698750286189") format("woff2");'})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Now you can use your icons with your ",(0,s.jsx)(n.code,{children:"font-family: my-name"}),", e.g.:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!--example.html-->\n<i class="my-name">icon_file_name</i>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"scss",children:"SCSS"}),"\n",(0,s.jsxs)(n.p,{children:["When using ",(0,s.jsx)(n.strong,{children:"scss"})," you can also use ",(0,s.jsx)(n.code,{children:"@forward"})," to include the generated files:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",children:'@forward "public/font-face";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"data-icon",children:"data-icon"}),"\n",(0,s.jsx)(n.p,{children:"If you like to use a custom icon in one of our components you can do it by overwriting the default font-family like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!--example.html-->\n<p class="icon-family-my-name" data-icon="icon_file_name">Test</p>\n\n<!-- or -->\n<p data-icon-family="my-name" data-icon="icon_file_name">Test</p>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"css",children:"CSS"}),"\n",(0,s.jsx)(n.p,{children:"You can overwrite custom-icons for our components with CSS as well:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:'.db-button {\n	--db-icon-font-family: "my-name";\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"foundation-developer",children:"Foundation Developer"}),"\n",(0,s.jsxs)(n.p,{children:["If you update a ",(0,s.jsx)(n.strong,{children:"svg"})," inside ",(0,s.jsx)(n.code,{children:"assets/icons/functional/images"})," you need to recreate the ",(0,s.jsx)(n.strong,{children:"woff2"})," file."]}),"\n",(0,s.jsx)(n.p,{children:"For this you just need to run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm run generate:icon-fonts\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Your new icon should be inside ",(0,s.jsx)(n.code,{children:"assets/icons/functional/fonts/**/info.json"})," and you should see it inside ",(0,s.jsx)(n.code,{children:"assets/icons/functional/fonts/**/index.html"})," in the browser."]})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}let c=e=>{let{children:n}=e;return(0,s.jsx)(a.Z,{children:n})};function l(e){return(0,s.jsx)(i,{})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(c,{...e,children:(0,s.jsx)(l,{...e})})}},50115:function(e,n,t){"use strict";t.d(n,{Z:function(){return O}});var s=t(52322),a=t(5632),r=t(25237),o=t.n(r),i=t(2784),c=t(61183),l=t(39097),d=t.n(l),h=t(98072);let u=(0,i.forwardRef)(function(e,n){let t=n||(0,i.useRef)(n),[a,r]=(0,i.useState)(()=>!1),o=(0,i.useRef)(!1);return o.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),o.current=!0),(0,i.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,i.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,s.jsxs)("div",{ref:t,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":a,children:[(0,s.jsx)(s.Fragment,{children:e.header}),(0,s.jsx)("main",{className:"db-main",children:e.children}),(0,s.jsx)(s.Fragment,{children:e.footer})]})});var f=t(68908),m=t(48483),p=t(90434),x=t(97689),j=t(85803),g=t(72288),y=t(76460),v=t(40245),b=t(29469);let w=(e,n,t)=>{if(!t.query.slug)return n.path===t.pathname;let{slug:s}=t.query,a=Array.isArray(s)?s:[s];return n.path==="/components/".concat(a.join("/"))},N=e=>{var n;let{navItem:t}=e,r=(0,a.useRouter)(),o=w(r.pathname,t,r);return(0,s.jsx)(b.Z,{backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,s.jsx)(s.Fragment,{children:null==t?void 0:t.subNavigation.filter(e=>{let{isHiddenInMenu:n}=e;return!0!==n}).map(e=>(0,s.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,s.jsx)(d(),{href:null!==(n=t.path)&&void 0!==n?n:"","aria-current":o?"page":void 0,children:t.label},"router-path-".concat(t.path))})};var _=()=>(0,s.jsx)(v.Z,{children:y.Z6.map(e=>(0,s.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),S=t(35368),q=t(9842);let k=async e=>{try{let n=await fetch(e);return await n.json()}catch(e){console.error(e)}return[]},Z="db-ui",E="mono";var I=()=>{let e=(0,a.useRouter)(),[n,t]=(0,i.useState)(),[r,o]=(0,i.useState)(),c=n=>{let t=e.basePath,s=n.find(e=>t.includes(e));s&&o(s)},l=(e,n)=>{let s=[],a=[],r=[],o=[],i=[],c=[];for(let e of n)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?o.push(e):/^\d*-/.test(e)?i.push(e):e.startsWith("docs")?c.push(e):s.push(e);t({others:s,features:a,docs:c,refactors:o,issues:i,bugfixes:r,versions:e})};(0,i.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(Z,"/").concat(E,"/branches")),n=(await k("https://api.github.com/repos/".concat(Z,"/").concat(E,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));c(t),c(n),l(n,t)})().catch(e=>{console.error(e)})},[]);let d=n=>{let t=e.asPath,s=3===n.split(".").length&&n.startsWith("v");window.location.replace((0,S.sanitize)("https://".concat(Z,".github.io/").concat(E).concat(s?"/version":"/review","/").concat(n).concat(t)))};return n?(0,s.jsx)(q.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{d(e.target.value)},children:Object.entries(n).filter(e=>{let[n,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[n,t]=e;return(0,s.jsx)("optgroup",{label:n,children:t.slice(0,15).map((e,t)=>(0,s.jsx)("option",{value:e,children:e},"".concat(n,"-").concat(e,"-").concat(t)))},n)})}):null};let F=e=>{var n,t;let{children:r,noNavigation:o}=e,[l,h]=(0,i.useState)(!1),[v,b]=(0,i.useState)(!1),[w,N]=(0,i.useState)(!1),[S,q]=(0,i.useState)(!1),[k,Z]=(0,i.useState)(),[E,F]=(0,i.useState)(),[O,R]=(0,i.useState)(),[W,T]=(0,i.useState)(),A=(0,a.useRouter)();return(0,i.useEffect)(()=>{c.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),c.Z.highlightAll()},[]),(0,i.useEffect)(()=>{if(A.query&&(A.query.fullscreen&&h("true"===A.query.fullscreen),A.query.page&&h(!0),A.query.noh1&&b("true"===A.query.noh1),A.query.properties&&N("true"===A.query.properties),A.query.current)){let n=Array.isArray(A.query.current)?A.query.current[0]:A.query.current;if(k!==n){var e;Z(n),null===(e=document.querySelector("#".concat(n)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let n=A.asPath.split("?")[0],{previous:t,next:s}=(0,y.vn)(n);F(t),R(s),T((0,y.kn)(n))},[A]),(0,s.jsxs)(s.Fragment,{children:[A.isReady&&l&&(0,s.jsx)("div",{className:"".concat(v?"noh1":""," ").concat(w?"is-properties":""),children:r}),A.isReady&&!l&&(0,s.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,s.jsx)(f.Z,{drawerOpen:S,onToggle:q,brand:(0,s.jsx)(m.Z,{children:"DB-UX"}),primaryAction:(0,s.jsx)(p.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,s.jsx)(I,{}),children:(0,s.jsx)(_,{})}),children:[W&&W.length>1&&(0,s.jsx)(x.Z,{spacing:"none",width:"large",children:(0,s.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==W?void 0:W.map(e=>{var n;return(0,s.jsxs)(i.Fragment,{children:["/"!==e.path&&(0,s.jsx)(j.Z,{icon:"chevron_right"}),(0,s.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(n=e.path)&&void 0!==n?n:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,s.jsx)(x.Z,{spacing:"none",width:"large",children:r}),!o&&(null!=E?E:O)&&(0,s.jsxs)(x.Z,{width:"large",spacing:"small",className:"link-containers",children:[E&&(0,s.jsx)(d(),{className:"previous-link-container",href:null!==(n=E.path)&&void 0!==n?n:"/",children:(0,s.jsxs)(g.Z,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Previous"}),(0,s.jsx)("span",{"data-icon":"arrow_left",children:E.label})]})}),O&&(0,s.jsx)(d(),{className:"next-link-container",href:null!==(t=O.path)&&void 0!==t?t:"/",children:(0,s.jsxs)(g.Z,{behaviour:"interactive",children:[(0,s.jsx)("small",{children:"Next"}),(0,s.jsx)("span",{"data-icon-after":"arrow_right",children:O.label})]})})]})]})]})};var O=o()(async()=>F,{ssr:!1})}},function(e){e.O(0,[6061,1954,4540,6460,2888,9774,179],function(){return e(e.s=10029)}),_N_E=e.O()}]);