(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2524],{17151:(e,n,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout/drawer/docs/Angular",function(){return r(93214)}])},93214:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>d});var o=r(31085),a=r(71184);function t(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"angular",children:"Angular"}),"\n",(0,o.jsxs)(n.p,{children:["For general installation and configuration take a look at the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,o.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,o.jsxs)(n.p,{children:["If you use ",(0,o.jsx)(n.code,{children:"width !== full"})," you are able to overwrite the ",(0,o.jsx)(n.code,{children:"max-width"})," with ",(0,o.jsx)(n.code,{children:"--db-drawer-max-width:"})," CSS variable."]}),"\n",(0,o.jsx)(n.h3,{id:"load-component",children:"Load component"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nimport { DBDrawer } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  standalone: true,\n  imports: [..., DBDrawer],\n  // ...\n})\n"})}),"\n",(0,o.jsx)(n.h3,{id:"use-component",children:"Use component"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<db-button (click)="toggleDrawer(true)"> Open me </db-button>\n<db-drawer [open]="openDrawer" (onClose)="toggleDrawer(false)">\n	<header drawer-header>Optional drawer header</header>\n	My Drawer content\n</db-drawer>\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// app.component.ts\nexport class AppComponent {\n	openDrawer: boolean = false;\n	toggleDrawer = (open: boolean) => {\n		this.openDrawer = open;\n	};\n}\n"})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}}},e=>{var n=n=>e(e.s=n);e.O(0,[636,6593,8792],()=>n(17151)),_N_E=e.O()}]);