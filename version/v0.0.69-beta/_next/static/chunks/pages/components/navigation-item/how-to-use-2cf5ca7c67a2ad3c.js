(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79521],{28808:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navigation-item/how-to-use",function(){return e(36498)}])},64737:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var a=e(52322),i=e(45392);function o(n){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"angular",children:"Angular"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/ngx-components",children:"ngx-components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"load-component",children:"Load component"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"//app.component.ts\nimport { DBNavigationItem, NavigationContentDirective } from '@db-ui/ngx-components';\n\n@Component({\n  // ...\n  imports: [..., DBNavigationItem, NavigationContentDirective],\n  // ...\n})\n\n"})}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsxs)(t.p,{children:["We try to set ",(0,a.jsx)(t.code,{children:"areaPopup"})," (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set ",(0,a.jsx)(t.code,{children:"areaPopup"})," with ",(0,a.jsx)(t.code,{children:"true/false"})," for sub-navigation or link"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!-- app.component.html -->\n\n<!-- Only link -->\n<db-navigation-item [areaPopup]="false">\n	<ng-container *dbNavigationContent>\n		<a routerLink="mypath">NavigationItem</a>\n	</ng-container>\n</db-navigation-item>\n\n<!-- With Sub-Navigation -->\n\n<db-navigation-item [areaPopup]="true">\n	<ng-container *dbNavigationContent>Navi-Item 1</ng-container>\n	<ng-container sub-navigation>\n		<db-navigation-item [areaPopup]="false">\n			<ng-container *dbNavigationContent>\n				<a routerLink="mypath">Sub-Navi-Item 1</a>\n			</ng-container>\n		</db-navigation-item>\n\n		<db-navigation-item [areaPopup]="false">\n			<ng-container *dbNavigationContent>\n				<a routerLink="mypath">Sub-Navi-Item 2</a>\n			</ng-container>\n		</db-navigation-item>\n	</ng-container>\n</db-navigation-item>\n'})})]})}function r(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},43080:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var a=e(52322),i=e(45392);function o(n){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"html",children:"HTML"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/components",children:"components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to use sub-navigations for mobile you need to add a ",(0,a.jsx)(t.code,{children:"eventListner:click"})," on the ",(0,a.jsx)(t.code,{children:"db-navigation-item-expand-button"}),". This eventListener should set ",(0,a.jsx)(t.code,{children:"aria-expanded"})," to ",(0,a.jsx)(t.code,{children:"true"})," for the ",(0,a.jsx)(t.code,{children:"button"}),". This will open a static overlay for mobile/tablet devices with your ",(0,a.jsx)(t.code,{children:"db-sub-navigation"}),". For desktop devices it works by default with ",(0,a.jsx)(t.code,{children:":hover"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!-- index.html -->\n...\n<body>\n	<!-- Only link	-->\n	<li class="db-navigation-item">\n		<a href="mypath">NavigationItem</a>\n	</li>\n\n	<!-- With Sub-Navigation -->\n	<li class="db-navigation-item">\n		<button class="db-navigation-item-expand-button" aria-haspopup="true">\n			Navi-Item 1\n		</button>\n		<menu class="db-sub-navigation">\n			<a href="mypath">Sub-Navi-Item 1</a>\n			<a href="mypath">Sub-Navi-Item 2</a>\n		</menu>\n	</li>\n</body>\n'})})]})}function r(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},49310:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var a=e(52322),i=e(45392);function o(n){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"react",children:"React"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/react-components",children:"react-components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsxs)(t.p,{children:["We try to set ",(0,a.jsx)(t.code,{children:"areaPopup"})," (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set ",(0,a.jsx)(t.code,{children:"areaPopup"})," with ",(0,a.jsx)(t.code,{children:"true/false"})," for sub-navigation or link"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'// App.tsx\nimport { Link } from "react-router-dom";\nimport { DBNavigationItem } from "@db-ui/react-components";\n\nconst App = () => (\n	<>\n		{/* Only link */}\n		<DBNavigationItem>\n			<Link to="mypath">NavigationItem</Link>\n		</DBNavigationItem>\n\n		{/* With Sub-Navigation */}\n		<DBNavigationItem\n			slotSubNavigation={\n				<>\n					<DBNavigationItem>\n						<Link to="mypath">Sub-Navi-Item 1</Link>\n					</DBNavigationItem>\n					<DBNavigationItem>\n						<Link to="mypath">Sub-Navi-Item 2</Link>\n					</DBNavigationItem>\n				</>\n			}\n		>\n			Navi-Item 1\n		</DBNavigationItem>\n	</>\n);\n\nexport default App;\n'})})]})}function r(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},50551:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return r}});var a=e(52322),i=e(45392);function o(n){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"vue",children:"Vue"}),"\n",(0,a.jsxs)(t.p,{children:["For general installation and configuration take a look at the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/@db-ui/v-components",children:"v-components"})," package."]}),"\n",(0,a.jsx)(t.h3,{id:"use-component",children:"Use component"}),"\n",(0,a.jsxs)(t.p,{children:["We try to set ",(0,a.jsx)(t.code,{children:"areaPopup"})," (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set ",(0,a.jsx)(t.code,{children:"areaPopup"})," with ",(0,a.jsx)(t.code,{children:"true/false"})," for sub-navigation or link"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-vue",children:'<!-- App.vue -->\n<script>\nimport { DBNavigationItem } from "@db-ui/v-components";\n</script>\n\n<template>\n	<!-- Only link	-->\n	<DBNavigationItem>\n		<router-link to="mypath">NavigationItem</router-link>\n	</DBNavigationItem>\n\n	<!-- With Sub-Navigation -->\n	<DBNavigationItem>\n		<template #sub-navigation>\n			<DBNavigationItem>\n				<router-link to="mypath">Sub-Navi-Item 1</router-link>\n			</DBNavigationItem>\n			<DBNavigationItem>\n				<router-link to="mypath">Sub-Navi-Item 2</router-link>\n			</DBNavigationItem>\n		</template>\n		Navi-Item 1\n	</DBNavigationItem>\n</template>\n'})})]})}function r(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},36498:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return p}});var a=e(52322),i=e(45392),o=e(11803),r=e(43080),s=e(64737),l=e(49310),c=e(50551);let u=n=>{let{children:t}=n;return(0,a.jsx)(o.Z,{children:t})};function d(n){let t={h1:"h1",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-to-use-dbnavigationitem",children:"How to use DBNavigationItem"}),"\n",(0,a.jsx)(r.default,{}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(c.default,{})]})}function p(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(u,{...n,children:(0,a.jsx)(d,{...n})})}},16134:function(n,t,e){"use strict";var a=e(52322),i=e(2784),o=e(13776);let r=(0,i.forwardRef)(function(n,t){let e=t||(0,i.useRef)(t);return(0,a.jsx)("button",{ref:e,...(0,o.mS)(n,[]),id:n.id,className:(0,o.yI)("db-button",n.className),type:n.type,title:n.title,disabled:n.disabled,"aria-label":n.label,"data-icon":n.icon,"data-size":n.size,"data-state":n.state,"data-width":n.width,"data-variant":n.variant,"data-no-text":n.noText,name:n.name,value:n.value,"aria-describedby":n.describedbyid,"aria-expanded":n.ariaexpanded,"aria-pressed":n.ariapressed,onClick:t=>{n.onClick&&n.onClick(t)},children:n.children})});t.Z=r},63900:function(n,t,e){"use strict";var a,i,o,r,s,l,c;e.d(t,{IY:function(){return u},YP:function(){return d},ce:function(){return p}});let u="OVERWRITE_DEFAULT_ID",d="Back",p="Close Button";(s=a||(a={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive",Object.entries(a).map(n=>{let[,t]=n;return t}),(i||(i={})).PRIMARY="primary",(l=o||(o={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",l.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",l.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",l.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",l.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",l.BRAND_BG_LEVEL_1="brand-bg-lvl-1",l.BRAND_BG_LEVEL_2="brand-bg-lvl-2",l.BRAND_BG_LEVEL_3="brand-bg-lvl-3",l.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",l.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",l.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",l.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",l.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",l.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",l.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",l.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",l.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",l.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",l.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",l.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",l.WARNING_BG_LEVEL_1="warning-bg-lvl-1",l.WARNING_BG_LEVEL_2="warning-bg-lvl-2",l.WARNING_BG_LEVEL_3="warning-bg-lvl-3",l.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",l.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",l.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",l.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",l.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",l.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",l.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(o).map(n=>{let[,t]=n;return t}),Object.entries(i).map(n=>{let[,t]=n;return t}),(c=r||(r={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(r).map(n=>{let[,t]=n;return t})},13776:function(n,t,e){"use strict";e.d(t,{MN:function(){return l},Vj:function(){return a},cd:function(){return s},mS:function(){return r},yI:function(){return o},yn:function(){return i}});let a=()=>{var n,t;return(null===(n=window.crypto)||void 0===n?void 0:n.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(n,t)=>{Object.values(n.children).forEach(n=>{n.setAttribute(t.key,t.value),n.children.length>0&&i(n,t)})},o=function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];let a="";return t.forEach((n,t)=>{if(n){if("string"==typeof n)a+="".concat(n," ");else for(let t in n)n[t]&&(a+="".concat(t," "))}}),a.trim()},r=(n,t)=>Object.keys(n).filter(n=>(n.startsWith("data-")||n.startsWith("aria-")||n.startsWith("default")||n.startsWith("auto")||n.startsWith("on"))&&!t.includes(n)).reduce((t,e)=>(t[e]=n[e],t),{}),s=n=>{let{left:t,right:e}=n.getBoundingClientRect(),{innerWidth:a}=window;return t>=0&&e<=a},l=n=>{let{top:t,bottom:e}=n.getBoundingClientRect(),{innerHeight:a}=window;return t>=0&&e<=a}}},function(n){n.O(0,[49710,11803,92888,49774,40179],function(){return n(n.s=28808)}),_N_E=n.O()}]);