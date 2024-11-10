(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6706],{21885:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/router-usage",function(){return n(35942)}])},35942:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(31085),a=n(83952),s=n(71184);function i(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"router-usage",children:"Router usage"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," At the moment, router links can only be used within the ",(0,r.jsx)(t.strong,{children:"DBNavigationItem"})," component!"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Unfortunately, the ",(0,r.jsx)(t.strong,{children:"DBLink"})," and ",(0,r.jsx)(t.strong,{children:"DBButton"})," components do not support router links. Explanation: Router links are usually rendered as anchor tags, which are not permitted within anchor or button tags."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-routers",children:"Supported routers"}),"\n",(0,r.jsx)(t.p,{children:"The following standard routers have been successfully implemented in the corresponding frameworks (Angular, React, Vue). Other routers should work in the same way, but have not yet been tested."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://angular.io/api/router",children:"Angular router"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://reactrouter.com/en/main",children:"React router"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://v3.router.vuejs.org/",children:"Vue router"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The routers are installed and used in accordance with the official docs:"}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsxs)(t.p,{children:["To create a DB Brand styled router link, place the corresponding router link component in the default slot of ",(0,r.jsx)(t.strong,{children:"DBNavigationItem"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://db-ui.github.io/mono/review/main/components/navigation-item/overview",children:"How to use DBNavigationItem"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Angular"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"RouterLink"})," must be imported from the ",(0,r.jsx)(t.code,{children:"@angular/router"})," package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<db-navigation-item>\n	<a [routerLink]="link.path"> {{ link.label }} </a>\n</db-navigation-item>\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"React"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Link"})," must be imported from the ",(0,r.jsx)(t.code,{children:"react-router-dom"})," package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<DBNavigationItem>\n	<Link to={link.path}>\n		{link.label}\n	</Link>\n</DBNavigationItem>\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Vue"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"RouterLink"})," can be used directly, as it is available globally."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<DBNavigationItem>\n	<RouterLink :to="link.path"> {{ link.label }} </RouterLink>\n</DBNavigationItem>\n'})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}let l=e=>{let{children:t}=e;return(0,r.jsx)(a.A,{children:t})};function c(e){return(0,r.jsx)(o,{})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(l,{...e,children:(0,r.jsx)(c,{...e})})}},83952:(e,t,n)=>{"use strict";n.d(t,{A:()=>S});var r=n(31085),a=n(31242),s=n(83894),i=n.n(s),o=n(14041),l=n(30127),c=n(34747),u=n.n(c),h=n(5188);let d=(0,o.forwardRef)(function(e,t){let n=t||(0,o.useRef)(t),[a,s]=(0,o.useState)(()=>!1),i=(0,o.useRef)(!1);return i.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),i.current=!0),(0,o.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,o.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,r.jsxs)("div",{ref:n,...(0,h.MD)(e,[]),id:e.id,className:(0,h.xF)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":(0,h.EB)(a),children:[(0,r.jsx)(r.Fragment,{children:e.header}),(0,r.jsx)("main",{className:"db-main",children:e.children}),(0,r.jsx)(r.Fragment,{children:e.footer})]})});var p=n(23116),m=n(23944),x=n(95374),g=n(12764),j=n(80692),f=n(64286),v=n(42372),b=n(61338),w=n(6900);let y=(e,t,n)=>{if(!n.query.slug)return t.path===n.pathname;let{slug:r}=n.query,a=Array.isArray(r)?r:[r];return t.path==="/components/".concat(a.join("/"))},k=e=>{var t;let{navItem:n}=e,s=(0,a.useRouter)(),i=y(s.pathname,n,s);return(0,r.jsx)(w.A,{backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,r.jsx)(r.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,r.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,r.jsx)(u(),{href:null!==(t=n.path)&&void 0!==t?t:"","aria-current":i?"page":void 0,children:n.label},"router-path-".concat(n.path))})},N=()=>(0,r.jsx)(b.A,{children:v.bw.map(e=>(0,r.jsx)(k,{navItem:e},"router-path-".concat(e.path)))});var A=n(71651),R=n(47982);let q=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},B="db-ui",_="mono",E=()=>{let e=(0,a.useRouter)(),[t,n]=(0,o.useState)(),[s,i]=(0,o.useState)(),l=t=>{let n=e.basePath,r=t.find(e=>n.includes(e));r&&i(r)},c=(e,t)=>{let r=[],a=[],s=[],i=[],o=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?a.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?o.push(e):e.startsWith("docs")?l.push(e):r.push(e);n({others:r,features:a,docs:l,refactors:i,issues:o,bugfixes:s,versions:e})};(0,o.useEffect)(()=>{(async()=>{let e=await q("https://api.github.com/repos/".concat(B,"/").concat(_,"/branches")),t=(await q("https://api.github.com/repos/".concat(B,"/").concat(_,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));t.unshift("latest"),l(n),l(t),c(t,n)})().catch(e=>{console.error(e)})},[]);let u=t=>{let n=e.asPath,r=3===t.split(".").length&&t.startsWith("v")||"latest"===t;window.location.replace((0,A.sanitize)("https://".concat(B,".github.io/").concat(_).concat(r?"/version":"/review","/").concat(t).concat(n)))};return t?(0,r.jsx)(R.A,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{u(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,r.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,r.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null},I=e=>{var t,n;let{children:s,noNavigation:i}=e,[c,h]=(0,o.useState)(!1),[b,w]=(0,o.useState)(!1),[y,k]=(0,o.useState)(!1),[A,R]=(0,o.useState)(!1),[q,B]=(0,o.useState)(),[_,I]=(0,o.useState)(),[S,D]=(0,o.useState)(),[L,O]=(0,o.useState)(),T=(0,a.useRouter)();return(0,o.useEffect)(()=>{l.A.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.A.highlightAll()},[]),(0,o.useEffect)(()=>{if(T.query&&(T.query.fullscreen&&h("true"===T.query.fullscreen),T.query.page&&h(!0),T.query.noh1&&w("true"===T.query.noh1),T.query.properties&&k("true"===T.query.properties),T.query.current)){let t=Array.isArray(T.query.current)?T.query.current[0]:T.query.current;if(q!==t){var e;B(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=T.asPath.split("?")[0],{previous:n,next:r}=(0,v.Pb)(t);I(n),D(r),O((0,v.Oj)(t))},[T]),(0,r.jsxs)(r.Fragment,{children:[T.isReady&&c&&(0,r.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(y?"is-properties":""),children:s}),T.isReady&&!c&&(0,r.jsxs)(d,{fadeIn:!0,variant:"fixed",header:(0,r.jsx)(p.A,{drawerOpen:A,onToggle:R,brand:(0,r.jsx)(m.A,{children:"DB-UX"}),primaryAction:(0,r.jsx)(x.A,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,r.jsx)(E,{}),children:(0,r.jsx)(N,{})}),children:[L&&L.length>1&&(0,r.jsx)(g.A,{spacing:"none",width:"large",children:(0,r.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==L?void 0:L.map(e=>{var t;return(0,r.jsxs)(o.Fragment,{children:["/"!==e.path&&(0,r.jsx)(j.A,{icon:"chevron_right"}),(0,r.jsx)(u(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,r.jsx)(g.A,{spacing:"none",width:"large",children:s}),!i&&(null!=_?_:S)&&(0,r.jsxs)(g.A,{width:"large",spacing:"small",className:"link-containers",children:[_&&(0,r.jsx)(u(),{className:"previous-link-container",href:null!==(t=_.path)&&void 0!==t?t:"/",children:(0,r.jsxs)(f.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Previous"}),(0,r.jsx)("span",{"data-icon":"arrow_left",children:_.label})]})}),S&&(0,r.jsx)(u(),{className:"next-link-container",href:null!==(n=S.path)&&void 0!==n?n:"/",children:(0,r.jsxs)(f.A,{behaviour:"interactive",children:[(0,r.jsx)("small",{children:"Next"}),(0,r.jsx)("span",{"data-icon-after":"arrow_right",children:S.label})]})})]})]})]})},S=i()(async()=>I,{ssr:!1})}},e=>{var t=t=>e(e.s=t);e.O(0,[3578,6800,8367,2372,636,6593,8792],()=>t(21885)),_N_E=e.O()}]);