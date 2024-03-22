"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86747],{37395:function(t,n,a){a.d(n,{P:function(){return i}});let i=(t,n,a)=>t.map((t,i)=>{var e;return{...t,slotCode:null!==(e=null==a?void 0:a.at(i))&&void 0!==e?e:"No code available",examples:t.examples.map(t=>{var a,i,e,o;return{...t,example:n({...t.props,id:null!==(e=null===(a=t.props)||void 0===a?void 0:a.id)&&void 0!==e?e:t.name,children:null!==(o=null===(i=t.props)||void 0===i?void 0:i.children)&&void 0!==o?o:t.name})}})}})},99341:function(t,n,a){var i=a(52322),e=a(5632),o=a(2784),v=a(11803),m=a(86095);let g=t=>{let{examples:n,slotCode:a}=t,[e,v]=(0,o.useState)();return(0,i.jsxs)(m.f,{className:"variants-card db-code-docs",children:[(0,i.jsx)("div",{className:"variants-list",children:n.map((t,n)=>(0,i.jsx)("div",{style:t.style,className:t.className,children:t.example},"".concat(t.name,"-").concat(n)))}),(0,i.jsxs)("details",{className:"code-details",onToggle:()=>{v(!e)},children:[(0,i.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"solid",children:e?"Hide code":"Show code"}),(0,i.jsxs)("div",{className:"db-ui-functional",children:[(0,i.jsx)("div",{className:"backdrop"}),(0,i.jsx)(m.f,{className:"code",spacing:"small",children:a})]})]})]})};n.Z=t=>{let{title:n,variants:a}=t,[r,b]=(0,o.useState)(),u=(0,e.useRouter)();(0,o.useEffect)(()=>{if(u.query){var t;let n=null===(t=u.query.page)||void 0===t?void 0:t.toString();n&&b(a.find(t=>t.name.toLowerCase()===n))}},[u]);let c=t=>window.location.origin&&window.location.href?"".concat(window.location.href.split("?")[0],"?page=").concat(t.name.toLowerCase()):"";return(0,i.jsxs)(i.Fragment,{children:[r&&(0,i.jsx)("div",{children:(0,i.jsx)(g,{...r})}),!r&&(0,i.jsx)(v.Z,{children:(0,i.jsxs)("div",{className:"default-container",children:[(0,i.jsx)("h1",{children:n}),null==a?void 0:a.map((t,n)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(m.oH,{}),(0,i.jsx)("h2",{children:(0,i.jsx)(m.vB,{content:"external",target:"_blank",href:c(t),children:t.name})}),(0,i.jsx)(g,{...t})]},"".concat(t.name,"-").concat(n)))]})})]})}},62698:function(t){t.exports=JSON.parse('[{"name":"Tonality","examples":[{"name":"functional","className":"db-ui-functional","props":{},"code":{"html":"<nav class=\\"db-main-navigation\\">\\n\\t\\t<menu>\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tNavi-Item 1\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t</menu>\\n\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t</menu>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" data-icon=\\"account\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-disabled=\\"true\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t\\t</li>\\n\\t\\t</menu>\\n\\t</nav>","angular":"<db-main-navigation>\\n\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t</ng-container>\\n\\t\\t<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item icon=\\"account\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item [disabled]=\\"true\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n</db-main-navigation>","react":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem\\n\\t\\t\\tactive\\n\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t<DBNavigationItem\\n\\t\\t\\t\\t\\t\\tactive\\n\\t\\t\\t\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem active>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t</>\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t</>\\n\\t\\t\\t}\\n\\t\\t>\\n\\t\\t\\tNavi-Item 1\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem disabled>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>","vue":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\tNavi-Item 1\\n\\t\\t\\t<template v-slot:sub-navigation>\\n\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\n\\t\\t\\t\\t\\t<template v-slot:sub-navigation>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t</template>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t</template>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem :disabled=\\"true\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>"}},{"name":"regular (Default)","className":"db-ui-regular","props":{},"code":{"html":"<nav class=\\"db-main-navigation\\">\\n\\t\\t<menu>\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tNavi-Item 1\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t</menu>\\n\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t</menu>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" data-icon=\\"account\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-disabled=\\"true\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t\\t</li>\\n\\t\\t</menu>\\n\\t</nav>","angular":"<db-main-navigation>\\n\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t</ng-container>\\n\\t\\t<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item icon=\\"account\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item [disabled]=\\"true\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n</db-main-navigation>","react":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem\\n\\t\\t\\tactive\\n\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t<DBNavigationItem\\n\\t\\t\\t\\t\\t\\tactive\\n\\t\\t\\t\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem active>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t</>\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t</>\\n\\t\\t\\t}\\n\\t\\t>\\n\\t\\t\\tNavi-Item 1\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem disabled>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>","vue":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\tNavi-Item 1\\n\\t\\t\\t<template v-slot:sub-navigation>\\n\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\n\\t\\t\\t\\t\\t<template v-slot:sub-navigation>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t</template>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t</template>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem :disabled=\\"true\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>"}},{"name":"expressive","className":"db-ui-expressive","props":{},"code":{"html":"<nav class=\\"db-main-navigation\\">\\n\\t\\t<menu>\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tNavi-Item 1\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"db-navigation-item-expand-button\\"\\n\\t\\t\\t\\t\\t\\t\\taria-haspopup=\\"true\\"\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t\\t<menu class=\\"db-sub-navigation\\">\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\" aria-current=\\"page\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t</menu>\\n\\t\\t\\t\\t\\t</li>\\n\\n\\t\\t\\t\\t\\t<li class=\\"db-navigation-item\\">\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t</menu>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" data-icon=\\"account\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t\\t</li>\\n\\n\\t\\t\\t<li class=\\"db-navigation-item\\" aria-disabled=\\"true\\">\\n\\t\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t\\t</li>\\n\\t\\t</menu>\\n\\t</nav>","angular":"<db-main-navigation>\\n\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t<ng-container sub-navigation>\\n\\t\\t\\t\\t\\t<db-navigation-item [active]=\\"true\\">\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t\\t<db-navigation-item>\\n\\t\\t\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</ng-container>\\n\\t\\t\\t</db-navigation-item>\\n\\t\\t</ng-container>\\n\\t\\t<ng-container *dbNavigationContent> Navi-Item 1 </ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item icon=\\"account\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n\\t<db-navigation-item [disabled]=\\"true\\">\\n\\t\\t<ng-container *dbNavigationContent>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</ng-container>\\n\\t</db-navigation-item>\\n</db-main-navigation>","react":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem\\n\\t\\t\\tactive\\n\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t<DBNavigationItem\\n\\t\\t\\t\\t\\t\\tactive\\n\\t\\t\\t\\t\\t\\tslotSubNavigation={\\n\\t\\t\\t\\t\\t\\t\\t<>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem active>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t</>\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t</>\\n\\t\\t\\t}\\n\\t\\t>\\n\\t\\t\\tNavi-Item 1\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem disabled>\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>","vue":"<DBMainNavigation>\\n\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\tNavi-Item 1\\n\\t\\t\\t<template v-slot:sub-navigation>\\n\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\tSub-Navi-Item 1\\n\\n\\t\\t\\t\\t\\t<template v-slot:sub-navigation>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem :active=\\"true\\">\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 1</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t\\t</template>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t\\t<DBNavigationItem>\\n\\t\\t\\t\\t\\t<a href=\\"#\\">Sub-Navi-Item 2</a>\\n\\t\\t\\t\\t</DBNavigationItem>\\n\\t\\t\\t</template>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem icon=\\"account\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 2</a>\\n\\t\\t</DBNavigationItem>\\n\\t\\t<DBNavigationItem :disabled=\\"true\\">\\n\\t\\t\\t<a href=\\"#\\">Navi-Item 3</a>\\n\\t\\t</DBNavigationItem>\\n\\t</DBMainNavigation>"}}]}]')}}]);