(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9486],{31478:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/data-input/radio/docs/React",function(){return a(86681)}])},86681:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return i}});var o=a(52322),t=a(45392);function r(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"react",children:"React"}),"\n",(0,o.jsxs)(e.p,{children:["For general installation and configuration take a look at the ",(0,o.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,o.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'// App.tsx\nimport { useState } from "react";\nimport { DBRadio } from "@db-ui/react-components";\n\nconst App = () => (\n	<ul>\n		{["X", "Y", "Z"].map((radioName) => (\n			<li key={radioName}>\n				<DBRadio\n					name="radio-group"\n					value={radioName}\n					onChange={() => {\n						setRadio(radioName);\n					}}\n				>\n					Radio {radioName}\n				</DBRadio>\n			</li>\n		))}\n	</ul>\n);\n\nexport default App;\n'})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}}},function(n){n.O(0,[2888,9774,179],function(){return n(n.s=31478)}),_N_E=n.O()}]);