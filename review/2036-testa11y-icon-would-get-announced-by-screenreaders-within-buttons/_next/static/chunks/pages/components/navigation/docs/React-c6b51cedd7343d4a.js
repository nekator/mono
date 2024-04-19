(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51714],{42936:function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/docs/React",function(){return t(83568)}])},83568:function(n,a,t){"use strict";t.r(a),t.d(a,{default:function(){return c}});var e=t(52322),i=t(45392);function o(n){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.h2,{id:"react",children:"React"}),"\n",(0,e.jsxs)(a.p,{children:["For general installation and configuration look at the ",(0,e.jsx)(a.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,e.jsx)(a.h3,{id:"use-component",children:"Use component"}),"\n",(0,e.jsx)(a.pre,{children:(0,e.jsx)(a.code,{className:"language-tsx",children:'// App.tsx\nimport { DBNavigation, DBNavigationItem } from "@db-ui/react-components";\n\nconst App = () => (\n	<DBNavigation>\n		<DBNavigationItem\n			active\n			slotSubNavigation={\n				<>\n					<DBNavigationItem\n						active\n						slotSubNavigation={\n							<>\n								<DBNavigationItem active>\n									<a href="#">Sub-Sub-Navi-Item 1</a>\n								</DBNavigationItem>\n								<DBNavigationItem>\n									<a href="#">Sub-Sub-Navi-Item 2</a>\n								</DBNavigationItem>\n							</>\n						}\n					>\n						Sub-Navi-Item 1\n					</DBNavigationItem>\n					<DBNavigationItem>\n						<a href="#">Sub-Navi-Item 2</a>\n					</DBNavigationItem>\n				</>\n			}\n		>\n			Navi-Item 1\n		</DBNavigationItem>\n		<DBNavigationItem icon="user">\n			<a href="#">Navi-Item 2</a>\n		</DBNavigationItem>\n		<DBNavigationItem disabled>\n			<a href="#">Navi-Item 3</a>\n		</DBNavigationItem>\n	</DBNavigation>\n);\n\nexport default App;\n'})})]})}function c(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}={...(0,i.a)(),...n.components};return a?(0,e.jsx)(a,{...n,children:(0,e.jsx)(o,{...n})}):o(n)}}},function(n){n.O(0,[92888,49774,40179],function(){return n(n.s=42936)}),_N_E=n.O()}]);