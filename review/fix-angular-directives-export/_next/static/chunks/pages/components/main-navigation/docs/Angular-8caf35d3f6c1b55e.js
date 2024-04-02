(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79306],{68494:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/main-navigation/docs/Angular",function(){return t(11665)}])},11665:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return r}});var i=t(52322),a=t(45392);function o(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"angular",children:"Angular"}),"\n",(0,i.jsxs)(e.p,{children:["For general installation and configuration look at the ",(0,i.jsx)(e.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,i.jsx)(e.h3,{id:"load-component",children:"Load component"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { DBMainNavigation } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [\n	// ...,\n    DBMainNavigation\n  ],\n  // ...\n})\n"})}),"\n",(0,i.jsx)(e.h3,{id:"use-component",children:"Use component"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-main-navigation>\n	<db-navigation-item [active]="true">\n		<ng-container sub-navigation>\n			<db-navigation-item [active]="true">\n				<ng-container *dbNavigationContent>\n					Sub-Navi-Item 1\n				</ng-container>\n				<ng-container sub-navigation>\n					<db-navigation-item [active]="true">\n						<ng-container *dbNavigationContent>\n							<a href="#">Sub-Sub-Navi-Item 1</a>\n						</ng-container>\n					</db-navigation-item>\n					<db-navigation-item>\n						<ng-container *dbNavigationContent>\n							<a href="#">Sub-Sub-Navi-Item 2</a>\n						</ng-container>\n					</db-navigation-item>\n				</ng-container>\n			</db-navigation-item>\n			<db-navigation-item>\n				<ng-container *dbNavigationContent>\n					<a href="#">Sub-Navi-Item 2</a>\n				</ng-container>\n			</db-navigation-item>\n		</ng-container>\n		<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>\n	</db-navigation-item>\n	<db-navigation-item icon="account">\n		<ng-container *dbNavigationContent>\n			<a href="#">Navi-Item 2</a>\n		</ng-container>\n	</db-navigation-item>\n	<db-navigation-item [disabled]="true">\n		<ng-container *dbNavigationContent>\n			<a href="#">Navi-Item 3</a>\n		</ng-container>\n	</db-navigation-item>\n</db-main-navigation>\n'})}),"\n",(0,i.jsx)(e.h3,{id:"angular-router-and-active-state-handling",children:"Angular Router and active state handling"}),"\n",(0,i.jsxs)(e.p,{children:["You can set the property ",(0,i.jsx)(e.code,{children:"active"})," to a boolean value as in the example above.\nIt will cause the navigation item to render in active style and implicitly\nset ",(0,i.jsx)(e.code,{children:'aria-current="page"'})," to the list element."]}),"\n",(0,i.jsxs)(e.p,{children:["The component will also check for child element set to ",(0,i.jsx)(e.code,{children:'aria-current="page"'}),".\nSuch elements are also displayed in active state.\nThis makes the component ",(0,i.jsx)(e.a,{href:"https://angular.dev/best-practices/a11y#active-links-identification",children:"integration with the Angular Router"})," way more elegant\ncompared to the first variant."]}),"\n",(0,i.jsxs)(e.p,{children:["The component first needs to import the ",(0,i.jsx)(e.code,{children:"RouterLink"})," and ",(0,i.jsx)(e.code,{children:"RouterLinkActive"})," directives."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"// app.component.ts\nimport { RouterLink, RouterLinkActive } from '@angular/router';\nimport { DBMainNavigation } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [\n	// ...\n	RouterLink,\n	RouterLinkActive,\n	DBMainNavigation\n  ],\n  // ...\n})\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Now you can use the Angular Routers ",(0,i.jsx)(e.code,{children:"routerLink"})," directive to define your targets.\nThe active style is automatically set once an item receives the ",(0,i.jsx)(e.code,{children:'aria-current="page"'})," attribute."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-main-navigation>\n	<db-navigation-item>\n		<ng-container *dbNavigationContent>\n			<a\n				routerLink="/"\n				ariaCurrentWhenActive="page"\n				[routerLinkActiveOptions]="{ exact: true }"\n			>\n				Home\n			</a>\n		</ng-container>\n	</db-navigation-item>\n	<db-navigation-item>\n		<ng-container *dbNavigationContent> Demo Pages </ng-container>\n		<ng-container sub-navigation>\n			<db-navigation-item>\n				<ng-container *dbNavigationContent>\n					<a routerLink="/demo/1" ariaCurrentWhenActive="page">\n						Demo Page 1\n					</a>\n				</ng-container>\n				<ng-container *dbNavigationContent>\n					<a routerLink="/demo/2" ariaCurrentWhenActive="page">\n						Demo Page 2\n					</a>\n				</ng-container>\n			</db-navigation-item>\n		</ng-container>\n	</db-navigation-item>\n</db-main-navigation>\n'})})]})}function r(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}}},function(n){n.O(0,[92888,49774,40179],function(){return n(n.s=68494)}),_N_E=n.O()}]);