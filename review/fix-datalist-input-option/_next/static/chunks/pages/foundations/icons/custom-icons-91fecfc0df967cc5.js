(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15736],{10029:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/icons/custom-icons",function(){return s(55979)}])},55979:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var o=s(52322),i=s(97335),c=s(45392);function r(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"custom-icons",children:"Custom Icons"}),"\n",(0,o.jsxs)(n.p,{children:["If you have custom icons and want to use them for ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/foundations",children:"foundations"})," and/or in ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"}),", you need to generate a ",(0,o.jsx)(n.strong,{children:"woff2"})," file."]}),"\n",(0,o.jsx)(n.h2,{id:"generate",children:"Generate"}),"\n",(0,o.jsx)(n.p,{children:"For this run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npx @db-ui/gif --src ./my-path-to/icons --fontName my-name\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We search for all ",(0,o.jsx)(n.code,{children:"**/*.svg"})," files inside the ",(0,o.jsx)(n.code,{children:"src"})," directory and create a new icon font with the provided name. You can preview all generated icons here: ",(0,o.jsx)(n.code,{children:"./my-path-to/icons/fonts/all/index.html"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"NOTE:"})})," We use four different sizes for components (16, 20, 24, 32) to show more or less details. You can do the same by providing another file with a size suffix for example ",(0,o.jsx)(n.code,{children:"icon_file_name_16.svg"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For more information run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npx @db-ui/gif --help\n"})}),"\n",(0,o.jsx)(n.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,o.jsx)(n.p,{children:"In your app you need to include some of the generated files:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:"./my-path-to/icons/fonts/my-name.woff2 ./my-path-to/icons/fonts/font-face.css\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"NOTE:"})})," In case you put the files in a separate folder of your ",(0,o.jsx)(n.code,{children:"public"})," directory be aware to adopt the path in your generated ",(0,o.jsx)(n.code,{children:"font-face.css"})," file: ",(0,o.jsx)(n.code,{children:'url("/{YOUR_FOLDER}}/my-name.woff2?t=1698750286189") format("woff2");'})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Now you can use your icons with your ",(0,o.jsx)(n.code,{children:"font-family: my-name"}),", e.g.:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<!--example.html-->\n<i class="my-name">icon_file_name</i>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"scss",children:"SCSS"}),"\n",(0,o.jsxs)(n.p,{children:["When using ",(0,o.jsx)(n.strong,{children:"scss"})," you can also use ",(0,o.jsx)(n.code,{children:"@forward"})," to include the generated files:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scss",children:'@forward "public/font-face";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"data-icon",children:"data-icon"}),"\n",(0,o.jsx)(n.p,{children:"If you like to use a custom icon in one of our components you can do it by overwriting the default font-family like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<!--example.html-->\n<p class="icon-family-my-name" data-icon="icon_file_name">Test</p>\n\n<!-- or -->\n<p data-icon-family="my-name" data-icon="icon_file_name">Test</p>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"css",children:"CSS"}),"\n",(0,o.jsx)(n.p,{children:"You can overwrite custom-icons for our components with CSS as well:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:'.db-button {\n	--db-icon-font-family: "my-name";\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"foundation-developer",children:"Foundation Developer"}),"\n",(0,o.jsxs)(n.p,{children:["If you update a ",(0,o.jsx)(n.strong,{children:"svg"})," inside ",(0,o.jsx)(n.code,{children:"assets/icons/functional/images"})," you need to recreate the ",(0,o.jsx)(n.strong,{children:"woff2"})," file."]}),"\n",(0,o.jsx)(n.p,{children:"For this you just need to run"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npm run generate:icon-fonts\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Your new icon should be inside ",(0,o.jsx)(n.code,{children:"assets/icons/functional/fonts/info.json"})," and you should see it inside ",(0,o.jsx)(n.code,{children:"assets/icons/functional/fonts/index.html"})," in the browser."]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}let l=e=>{let{children:n}=e;return(0,o.jsx)(i.Z,{children:n})};function d(e){return(0,o.jsx)(t,{})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(l,{...e,children:(0,o.jsx)(d,{...e})})}}},function(e){e.O(0,[49710,97335,92888,49774,40179],function(){return e(e.s=10029)}),_N_E=e.O()}]);