(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19282],{56475:function(t,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation/overview",function(){return a(40992)}])},20260:function(t,n,a){"use strict";a.r(n);var i=a(52322),e=a(48452),o=a(66248),v=a(36533),m=a(43570),g=a(12480),r=a(47439),b=a(89267),u=a(45016);let N=t=>{let{children:n,icon:a,disabled:e,active:o,width:v,areaPopup:m}=t;return(0,i.jsx)("ul",{children:(0,i.jsx)(g.pK,{icon:a,disabled:e,active:o,width:v,onClick:()=>{alert(n.toString())},subNavigation:m&&(0,i.jsxs)("ul",{children:[(0,i.jsx)(g.pK,{children:(0,i.jsx)("a",{href:"#",children:"Test1"})}),(0,i.jsx)(g.pK,{children:(0,i.jsx)("a",{href:"#",children:"Test2"})})]}),children:m?n:(0,i.jsx)("a",{href:"#",children:n})})})};n.default=t=>(0,i.jsx)(r.Z,{title:"DBNavigationItem",isSubComponent:t.isSubComponent,componentName:t.componentName,variants:(0,u.P)(b,N,[(0,i.jsx)(e.default,{}),(0,i.jsx)(o.default,{}),(0,i.jsx)(v.default,{}),(0,i.jsx)(m.default,{})])})},40992:function(t,n,a){"use strict";a.r(n);var i=a(52322),e=a(26179),o=a(12480),v=a(47439),m=a(70483),g=a(45016),r=a(20260);let b=t=>{let{children:n}=t,a="".concat(n.replaceAll(/\W/g,"_").toLowerCase());return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.EZ,{id:a,size:"small",semantic:"informational",icon:"none",children:n}),(0,i.jsxs)(o.Dh,{labelledBy:a,children:[(0,i.jsx)(o.pK,{active:!0,subNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.pK,{active:!0,subNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.pK,{active:!0,children:(0,i.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 1"})}),(0,i.jsx)(o.pK,{children:(0,i.jsx)("a",{href:"#",children:"Sub-Sub-Navi-Item 2"})})]}),children:"Sub-Navi-Item 1"}),(0,i.jsx)(o.pK,{children:(0,i.jsx)("a",{href:"#",children:"Sub-Navi-Item 2"})})]}),children:"Navi-Item 1"}),(0,i.jsx)(o.pK,{icon:"user",children:(0,i.jsx)("a",{href:"#",children:"Navi-Item 2"})}),(0,i.jsx)(o.pK,{disabled:!0,children:(0,i.jsx)("a",{href:"#",children:"Navi-Item 3"})})]})]})};n.default=()=>(0,i.jsx)(v.Z,{title:"DBNavigation",subComponent:(0,i.jsx)(r.default,{isSubComponent:!0,componentName:"navigation-item"}),variants:(0,g.P)(m,b,[(0,i.jsx)(e.default,{})])})},70483:function(t){"use strict";t.exports=JSON.parse('[{"name":"Density","examples":[{"name":"Functional","className":"db-density-functional","props":{},"code":{"html":"<nav class=\\"db-main-navigation\\">\\n\\t\\t<menu>\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tNavi-Item 1\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t</menu>\\n\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t</menu>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" data-icon=\\"account\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-disabled=\\"true\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t\\t</li>\\n\\t\\t</menu>\\n\\t</nav>","angular":"<db-main-navigation>\\n\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t</ng-container>\\n\\t\\t<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item icon=\\"account\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item [disabled]=\\"true\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n</db-main-navigation>","react":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem\\n\\t\\t\\tactive\\n\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t<DBNavigationItem\\n\\t\\t\\t\\t\\t\\tactive\\n\\t\\t\\t\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem active>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t</>\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t</>\\n\\t\\t\\t}\\n\\t\\t>\\n\\t\\t\\tNavi-Item 1\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem disabled>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>","vue":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\tNavi-Item 1\\n\\t\\t\\t<template v-slot:subnavigation>\\n\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\n\\t\\t\\t\\t\\t<template v-slot:subnavigation>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t</template>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t</template>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem :disabled=\\"true\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>"}},{"name":"(Default) Regular","className":"db-density-regular","props":{},"code":{"html":"<nav class=\\"db-main-navigation\\">\\n\\t\\t<menu>\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tNavi-Item 1\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t</menu>\\n\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t</menu>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" data-icon=\\"account\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-disabled=\\"true\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t\\t</li>\\n\\t\\t</menu>\\n\\t</nav>","angular":"<db-main-navigation>\\n\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t</ng-container>\\n\\t\\t<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item icon=\\"account\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item [disabled]=\\"true\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n</db-main-navigation>","react":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem\\n\\t\\t\\tactive\\n\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t<DBNavigationItem\\n\\t\\t\\t\\t\\t\\tactive\\n\\t\\t\\t\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem active>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t</>\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t</>\\n\\t\\t\\t}\\n\\t\\t>\\n\\t\\t\\tNavi-Item 1\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem disabled>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>","vue":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\tNavi-Item 1\\n\\t\\t\\t<template v-slot:subnavigation>\\n\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\n\\t\\t\\t\\t\\t<template v-slot:subnavigation>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t</template>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t</template>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem :disabled=\\"true\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>"}},{"name":"Expressive","className":"db-density-expressive","props":{},"code":{"html":"<nav class=\\"db-main-navigation\\">\\n\\t\\t<menu>\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tNavi-Item 1\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t</menu>\\n\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t</menu>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" data-icon=\\"account\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-disabled=\\"true\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t\\t</li>\\n\\t\\t</menu>\\n\\t</nav>","angular":"<db-main-navigation>\\n\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t</ng-container>\\n\\t\\t<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item icon=\\"account\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item [disabled]=\\"true\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n</db-main-navigation>","react":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem\\n\\t\\t\\tactive\\n\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t<DBNavigationItem\\n\\t\\t\\t\\t\\t\\tactive\\n\\t\\t\\t\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem active>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t</>\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t</>\\n\\t\\t\\t}\\n\\t\\t>\\n\\t\\t\\tNavi-Item 1\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem disabled>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>","vue":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\tNavi-Item 1\\n\\t\\t\\t<template v-slot:subnavigation>\\n\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\n\\t\\t\\t\\t\\t<template v-slot:subnavigation>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t</template>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t</template>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem :disabled=\\"true\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>"}}]}]')}},function(t){t.O(0,[49710,9572,55216,36533,48452,26347,26179,92888,49774,40179],function(){return t(t.s=56475)}),_N_E=t.O()}]);