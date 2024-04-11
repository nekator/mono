(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15736],{10029:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/icons/custom-icons",function(){return t(55979)}])},55979:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(52322),s=t(12156),i=t(45392);function a(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"custom-icons",children:"Custom Icons"}),"\n",(0,r.jsxs)(n.p,{children:["If you have custom icons and want to use them for ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/foundations",children:"foundations"})," and/or in ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"}),", you need to generate a ",(0,r.jsx)(n.code,{children:"woff2"})," file."]}),"\n",(0,r.jsx)(n.h2,{id:"generate",children:"Generate"}),"\n",(0,r.jsx)(n.p,{children:"For this run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npx @db-ui/gif --src ./my-path-to/icons --fontName my-name\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We search for all ",(0,r.jsx)(n.code,{children:"**/*.svg"})," files inside the ",(0,r.jsx)(n.code,{children:"src"})," directory and create a new icon font with the provided name. You can preview all generated icons here: ",(0,r.jsx)(n.code,{children:"./my-path-to/icons/fonts/all/index.html"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"NOTE:"})}),' We use four different sizes for components (16, 20, 24, 32) to show more or less details. You can do the same by providing another file with a size suffix for example "icon_file_name_16.svg".']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For more information run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npx @db-ui/gif --help\n"})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsx)(n.p,{children:"In your app you need to include some of the generated files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"./my-path-to/icons/fonts/my-name.woff2 ./my-path-to/icons/fonts/font-face.css\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"NOTE:"})})," In case you put the files in a separate folder of your ",(0,r.jsx)(n.code,{children:"public"})," directory be aware to adopt the path in your generated ",(0,r.jsx)(n.code,{children:"font-face.css"})," file: ",(0,r.jsx)(n.code,{children:'url("/{YOUR_FOLDER}}/my-name.woff2?t=1698750286189") format("woff2");'})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Now you can use your icons with your ",(0,r.jsx)(n.code,{children:"font-family: my-name"}),", e.g.:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!--example.html-->\n<i class="my-name">icon_file_name</i>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"scss",children:"SCSS"}),"\n",(0,r.jsxs)(n.p,{children:["When using ",(0,r.jsx)(n.code,{children:"scss"})," you can also use ",(0,r.jsx)(n.code,{children:"@forward"})," to include the generated files:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scss",children:'@forward "public/font-face";\n'})}),"\n",(0,r.jsx)(n.h3,{id:"data-icon",children:"data-icon"}),"\n",(0,r.jsx)(n.p,{children:"If you like to use a custom icon in one of our components you can do it by overwriting the default font-family like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!--example.html-->\n<p class="icon-family-my-name" data-icon="icon_file_name">Test</p>\n\n<!-- or -->\n<p data-icon-family="my-name" data-icon="icon_file_name">Test</p>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"css",children:"CSS"}),"\n",(0,r.jsx)(n.p,{children:"You can overwrite custom-icons for our components with CSS as well:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:'.db-button {\n	--db-icon-font-family: "my-name";\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"foundation-developer",children:"Foundation Developer"}),"\n",(0,r.jsxs)(n.p,{children:["If you update a ",(0,r.jsx)(n.code,{children:"svg"})," inside ",(0,r.jsx)(n.code,{children:"assets/icons/functional/images"})," you need to recreate the ",(0,r.jsx)(n.code,{children:"woff2"})," file."]}),"\n",(0,r.jsx)(n.p,{children:"For this you just need to run"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm run generate:icon-fonts\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Your new icon should be inside ",(0,r.jsx)(n.code,{children:"assets/icons/functional/fonts/info.json"})," and you should see it inside ",(0,r.jsx)(n.code,{children:"assets/icons/functional/fonts/index.html"})," in the browser."]})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}let c=e=>{let{children:n}=e;return(0,r.jsx)(s.Z,{children:n})};function l(e){return(0,r.jsx)(o,{})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(c,{...e,children:(0,r.jsx)(l,{...e})})}},16134:function(e,n,t){"use strict";var r=t(52322),s=t(2784),i=t(13776);let a=(0,s.forwardRef)(function(e,n){let t=n||(0,s.useRef)(n);return(0,r.jsx)("button",{ref:t,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:e.children})});n.Z=a},63900:function(e,n,t){"use strict";var r,s,i,a,o,c,l;t.d(n,{IY:function(){return d},YP:function(){return u},ce:function(){return h}});let d="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(o=r||(r={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,n]=e;return n}),(s||(s={})).PRIMARY="primary",(c=i||(i={})).BASE="base",c.BASE_STRONG="base-strong",c.BASE_TRANSPARENT_SEMI="base-transparent-semi",c.BASE_TRANSPARENT_FULL="base-transparent-full",c.NEUTRAL="neutral",c.NEUTRAL_STRONG="neutral-strong",c.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",c.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",c.BRAND="brand",c.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",c.BRAND_TRANSPARENT_FULL="brand-transparent-full",c.SUCCESSFUL="successful",c.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",c.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",c.CRITICAL="critical",c.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",c.CRITICAL_TRANSPARENT_Full="critical-transparent-full",c.WARNING="warning",c.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",c.WARNING_TRANSPARENT_FULL="warning-transparent-full",c.INFORMATIONAL="informational",c.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",c.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(i).map(e=>{let[,n]=e;return n}),Object.entries(s).map(e=>{let[,n]=e;return n}),(l=a||(a={})).CRITICAL="critical",l.INFORMATIONAL="informational",l.WARNING="warning",l.SUCCESSFUL="successful",Object.entries(a).map(e=>{let[,n]=e;return n})},13776:function(e,n,t){"use strict";t.d(n,{MN:function(){return l},Vj:function(){return r},cd:function(){return c},mS:function(){return o},yI:function(){return i},yn:function(){return s}});let r=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},s=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&s(e,n)})},i=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let r="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)r+="".concat(e," ");else for(let n in e)e[n]&&(r+="".concat(n," "))}}),r.trim()},a=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],o=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||a.includes(e))&&!n.includes(e)).reduce((n,t)=>(n[t]=e[t],n),{}),c=e=>{let{left:n,right:t}=e.getBoundingClientRect(),{innerWidth:r}=window;return n>=0&&t<=r},l=e=>{let{top:n,bottom:t}=e.getBoundingClientRect(),{innerHeight:r}=window;return n>=0&&t<=r}}},function(e){e.O(0,[49710,12156,92888,49774,40179],function(){return e(e.s=10029)}),_N_E=e.O()}]);