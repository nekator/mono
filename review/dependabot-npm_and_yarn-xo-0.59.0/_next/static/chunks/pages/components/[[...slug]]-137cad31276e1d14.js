(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3581],{2193:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/[[...slug]]",function(){return n(80476)}])},79672:function(e,t,n){"use strict";var a=n(52322),r=n(5632),s=n(39097),i=n.n(s),c=n(53148),l=n(92811),o=n(70741),u=n(74819);t.Z=()=>{var e;let t=(0,r.useRouter)(),n=(0,l.vY)().find(e=>e.path===t.asPath);return(0,a.jsx)(c.Z,{noNavigation:!0,children:n&&(0,a.jsx)("div",{className:"card-navigation",children:null===(e=n.subNavigation)||void 0===e?void 0:e.map((e,t)=>{var n;return(0,a.jsx)(i(),{href:null!==(n=e.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(o.Z,{behaviour:"interactive",spacing:"medium",children:[(0,a.jsxs)("small",{children:[t+1,"."]}),(0,a.jsx)("p",{children:e.label}),(0,a.jsx)(u.Z,{icon:"arrow_right",children:"Next"})]})},"navigation-card-".concat(e.path))})})})}},53148:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var a=n(52322),r=n(5632),s=n(25237),i=n.n(s),c=n(2784),l=n(61183),o=n(39097),u=n.n(o),h=n(43251);let d=(0,c.forwardRef)(function(e,t){let n=t||(0,c.useRef)(t),[r,s]=(0,c.useState)(()=>!1);return(0,c.useEffect)(()=>{document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document")},[]),(0,c.useEffect)(()=>{s(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,c.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,a.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":r,children:[(0,a.jsx)(a.Fragment,{children:e.header}),(0,a.jsx)("main",{className:"db-main",children:e.children}),(0,a.jsx)(a.Fragment,{children:e.footer})]})});var p=n(82664),v=n(98310),f=n(10326),m=n(55327),g=n(74819),x=n(70741),j=n(92811),b=n(33759),y=n(39120);let w=(e,t)=>{var n;return"/"===t.path?"/"===e:e.includes("".concat(t.path,"/"))||e===t.path||!!(null===(n=t.subNavigation)||void 0===n?void 0:n.find(t=>e.includes("".concat(t.path,"/"))))},N=e=>{var t;let{navItem:n}=e,s=w((0,r.useRouter)().pathname,n);return(0,a.jsx)(y.Z,{active:s,backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,a.jsx)(a.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:t}=e;return!0!==t}).map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,a.jsx)(u(),{href:null!==(t=n.path)&&void 0!==t?t:"",children:n.label},"router-path-".concat(n.path))})};var Z=()=>(0,a.jsx)(b.Z,{children:j.Z6.map(e=>(0,a.jsx)(N,{navItem:e},"router-path-".concat(e.path)))}),_=n(35368),E=n(79081);let S=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},q="db-ui",k="mono";var R=()=>{let e=(0,r.useRouter)(),[t,n]=(0,c.useState)(),[s,i]=(0,c.useState)(),l=t=>{let n=e.basePath,a=t.find(e=>n.includes(e));a&&i(a)},o=(e,t)=>{let a=[],r=[],s=[],i=[],c=[],l=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?r.push(e):e.startsWith("fix")||e.startsWith("bugfix")?s.push(e):e.startsWith("refactor")?i.push(e):/^\d*-/.test(e)?c.push(e):e.startsWith("docs")?l.push(e):a.push(e);n({others:a,features:r,docs:l,refactors:i,issues:c,bugfixes:s,versions:e})};(0,c.useEffect)(()=>{(async()=>{let e=await S("https://api.github.com/repos/".concat(q,"/").concat(k,"/branches")),t=(await S("https://api.github.com/repos/".concat(q,"/").concat(k,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(n),l(t),o(t,n)})().catch(e=>{console.error(e)})},[]);let u=t=>{let n=e.pathname,a=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,_.sanitize)("https://".concat(q,".github.io/").concat(k).concat(a?"/version":"/review","/").concat(t).concat(n)))};return t?(0,a.jsx)(E.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:s,onChange:e=>{u(e.target.value)},children:Object.entries(t).filter(e=>{let[t,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[t,n]=e;return(0,a.jsx)("optgroup",{label:t,children:n.slice(0,15).map((e,n)=>(0,a.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(n)))},t)})}):null};let I=e=>{var t,n;let{children:s,noNavigation:i}=e,[o,h]=(0,c.useState)(!1),[b,y]=(0,c.useState)(!1),[w,N]=(0,c.useState)(!1),[_,E]=(0,c.useState)(!1),[S,q]=(0,c.useState)(),[k,I]=(0,c.useState)(),[W,A]=(0,c.useState)(),[P,O]=(0,c.useState)(),F=(0,r.useRouter)();return(0,c.useEffect)(()=>{l.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),l.Z.highlightAll()},[]),(0,c.useEffect)(()=>{if(F.query&&(F.query.fullscreen&&h("true"===F.query.fullscreen),F.query.page&&h(!0),F.query.noh1&&y("true"===F.query.noh1),F.query.properties&&N("true"===F.query.properties),F.query.current)){let t=Array.isArray(F.query.current)?F.query.current[0]:F.query.current;if(S!==t){var e;q(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let t=F.asPath.split("?")[0],{previous:n,next:a}=(0,j.vn)(t);I(n),A(a),O((0,j.kn)(t))},[F]),(0,a.jsxs)(a.Fragment,{children:[F.isReady&&o&&(0,a.jsx)("div",{className:"".concat(b?"noh1":""," ").concat(w?"is-properties":""),children:s}),F.isReady&&!o&&(0,a.jsxs)(d,{fadeIn:!0,variant:"fixed",header:(0,a.jsx)(p.Z,{drawerOpen:_,onToggle:E,brand:(0,a.jsx)(v.Z,{children:"DB-UI Mono"}),primaryAction:(0,a.jsx)(f.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,a.jsx)(R,{}),children:(0,a.jsx)(Z,{})}),children:[P&&P.length>1&&(0,a.jsx)(m.Z,{spacing:"none",width:"large",children:(0,a.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==P?void 0:P.map(e=>{var t;return(0,a.jsxs)(c.Fragment,{children:["/"!==e.path&&(0,a.jsx)(g.Z,{icon:"chevron_right"}),(0,a.jsx)(u(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,a.jsx)(m.Z,{spacing:"none",width:"large",children:s}),!i&&(null!=k?k:W)&&(0,a.jsxs)(m.Z,{width:"large",spacing:"small",className:"link-containers",children:[k&&(0,a.jsx)(u(),{className:"previous-link-container",href:null!==(t=k.path)&&void 0!==t?t:"/",children:(0,a.jsxs)(x.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Previous"}),(0,a.jsx)("span",{"data-icon":"arrow_left",children:k.label})]})}),W&&(0,a.jsx)(u(),{className:"next-link-container",href:null!==(n=W.path)&&void 0!==n?n:"/",children:(0,a.jsxs)(x.Z,{behaviour:"interactive",children:[(0,a.jsx)("small",{children:"Next"}),(0,a.jsx)("span",{"data-icon-after":"arrow_right",children:W.label})]})})]})]})]})};var W=i()(async()=>I,{ssr:!1})},91359:function(e,t,n){"use strict";var a=n(5632),r=n(2784),s=n(92811);t.Z=()=>{let e=(0,a.useRouter)();return(0,r.useEffect)(()=>{if(e){let t=e.asPath.split("?"),n=t[0].replace("/","").split("/"),a=n.length>0&&"components"===n[0],r=n.length>1?n[1]:void 0,i=n.length>2?n[2]:void 0,c=n.length>3?n[3]:void 0,l=2===t.length?"?".concat(t[1]):"";if(a&&r){let t=[];i&&c?t.push(i,c):i?t.push(i):t.push("overview");let n=(0,s.vY)().find(e=>{var t;return null===(t=e.path)||void 0===t?void 0:t.endsWith(r)});(null==n?void 0:n.path)?e.push("".concat(n.path,"/").concat(t.join("/")).concat(l)):e.push("/")}}},[e]),null}},80476:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return h}});var a=n(52322),r=n(5632);n(2784);var s=n(92811),i=n(53148),c=n(79672),l=n(91359);let o=e=>{let t;for(let n of s.Ec)if(n.subNavigation){for(let a of n.subNavigation)if(a.name===e&&a.component){t=a.component;break}if(t)break}return t};var u=!0;function h(){let e=(0,r.useRouter)().query.slug,t=Array.isArray(e)?e:e?[e]:[],n=t.length<1,u=t.at(-1),h=!(0,s.tp)().includes(t[0]);if(!n&&h)return(0,a.jsx)(l.Z,{});if("overview"===u){let e=o(t.at(-2));return(0,a.jsx)(i.Z,{children:e})}return(0,a.jsx)(c.Z,{})}}},function(e){e.O(0,[6061,1954,2182,2811,2888,9774,179],function(){return e(e.s=2193)}),_N_E=e.O()}]);