(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{13730:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundations/colors/color-usage-guide",function(){return n(35871)}])},53148:function(e,r,n){"use strict";n.d(r,{Z:function(){return q}});var t=n(52322),o=n(5632),c=n(25237),s=n.n(c),a=n(2784),i=n(61183),l=n(39097),d=n.n(l),h=n(43251);let u=(0,a.forwardRef)(function(e,r){let n=r||(0,a.useRef)(r),[o,c]=(0,a.useState)(()=>!1),s=(0,a.useRef)(!1);return s.current||(document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&document.documentElement.classList.add("db-page-document"),s.current=!0),(0,a.useEffect)(()=>{c(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{c(!0)}):c(!0)},[]),(0,a.useEffect)(()=>()=>{document.documentElement.classList.contains("db-page-document")&&document.documentElement.classList.remove("db-page-document")},[]),(0,t.jsxs)("div",{ref:n,...(0,h.mS)(e,[]),id:e.id,className:(0,h.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":o,children:[(0,t.jsx)(t.Fragment,{children:e.header}),(0,t.jsx)("main",{className:"db-main",children:e.children}),(0,t.jsx)(t.Fragment,{children:e.footer})]})});var m=n(82664),x=n(98310),j=n(10326),p=n(55327),v=n(74819),g=n(70741),b=n(92811),f=n(33759),N=n(39120);let A=(e,r)=>{var n;return"/"===r.path?"/"===e:e.includes("".concat(r.path,"/"))||e===r.path||!!(null===(n=r.subNavigation)||void 0===n?void 0:n.find(r=>e.includes("".concat(r.path,"/"))))},w=e=>{var r;let{navItem:n}=e,c=A((0,o.useRouter)().pathname,n);return(0,t.jsx)(N.Z,{active:c,backButtonText:"Back to ".concat(n.label),subNavigation:n.subNavigation&&(0,t.jsx)(t.Fragment,{children:null==n?void 0:n.subNavigation.filter(e=>{let{isHiddenInMenu:r}=e;return!0!==r}).map(e=>(0,t.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),children:n.subNavigation?n.label:(0,t.jsx)(d(),{href:null!==(r=n.path)&&void 0!==r?r:"",children:n.label},"router-path-".concat(n.path))})};var k=()=>(0,t.jsx)(f.Z,{children:b.Z6.map(e=>(0,t.jsx)(w,{navItem:e},"router-path-".concat(e.path)))}),y=n(35368),Z=n(79081);let E=async e=>{try{let r=await fetch(e);return await r.json()}catch(e){console.error(e)}return[]},I="db-ui",S="mono";var _=()=>{let e=(0,o.useRouter)(),[r,n]=(0,a.useState)(),[c,s]=(0,a.useState)(),i=r=>{let n=e.basePath,t=r.find(e=>n.includes(e));t&&s(t)},l=(e,r)=>{let t=[],o=[],c=[],s=[],a=[],i=[];for(let e of r)e.startsWith("feat")||e.startsWith("feature")?o.push(e):e.startsWith("fix")||e.startsWith("bugfix")?c.push(e):e.startsWith("refactor")?s.push(e):/^\d*-/.test(e)?a.push(e):e.startsWith("docs")?i.push(e):t.push(e);n({others:t,features:o,docs:i,refactors:s,issues:a,bugfixes:c,versions:e})};(0,a.useEffect)(()=>{(async()=>{let e=await E("https://api.github.com/repos/".concat(I,"/").concat(S,"/branches")),r=(await E("https://api.github.com/repos/".concat(I,"/").concat(S,"/tags"))).map(e=>e.name),n=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));i(n),i(r),l(r,n)})().catch(e=>{console.error(e)})},[]);let d=r=>{let n=e.asPath,t=3===r.split(".").length&&r.startsWith("v");window.location.replace((0,y.sanitize)("https://".concat(I,".github.io/").concat(S).concat(t?"/version":"/review","/").concat(r).concat(n)))};return r?(0,t.jsx)(Z.Z,{className:"version-switcher",label:"Version switcher",variant:"floating",value:c,onChange:e=>{d(e.target.value)},children:Object.entries(r).filter(e=>{let[r,n]=e;return(null==n?void 0:n.length)>0}).map(e=>{let[r,n]=e;return(0,t.jsx)("optgroup",{label:r,children:n.slice(0,15).map((e,n)=>(0,t.jsx)("option",{value:e,children:e},"".concat(r,"-").concat(e,"-").concat(n)))},r)})}):null};let L=e=>{var r,n;let{children:c,noNavigation:s}=e,[l,h]=(0,a.useState)(!1),[f,N]=(0,a.useState)(!1),[A,w]=(0,a.useState)(!1),[y,Z]=(0,a.useState)(!1),[E,I]=(0,a.useState)(),[S,L]=(0,a.useState)(),[q,T]=(0,a.useState)(),[C,z]=(0,a.useState)(),O=(0,o.useRouter)();return(0,a.useEffect)(()=>{i.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),i.Z.highlightAll()},[]),(0,a.useEffect)(()=>{if(O.query&&(O.query.fullscreen&&h("true"===O.query.fullscreen),O.query.page&&h(!0),O.query.noh1&&N("true"===O.query.noh1),O.query.properties&&w("true"===O.query.properties),O.query.current)){let r=Array.isArray(O.query.current)?O.query.current[0]:O.query.current;if(E!==r){var e;I(r),null===(e=document.querySelector("#".concat(r)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let r=O.asPath.split("?")[0],{previous:n,next:t}=(0,b.vn)(r);L(n),T(t),z((0,b.kn)(r))},[O]),(0,t.jsxs)(t.Fragment,{children:[O.isReady&&l&&(0,t.jsx)("div",{className:"".concat(f?"noh1":""," ").concat(A?"is-properties":""),children:c}),O.isReady&&!l&&(0,t.jsxs)(u,{fadeIn:!0,variant:"fixed",header:(0,t.jsx)(m.Z,{drawerOpen:y,onToggle:Z,brand:(0,t.jsx)(x.Z,{children:"DB-UX"}),primaryAction:(0,t.jsx)(j.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,t.jsx)(_,{}),children:(0,t.jsx)(k,{})}),children:[C&&C.length>1&&(0,t.jsx)(p.Z,{spacing:"none",width:"large",children:(0,t.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==C?void 0:C.map(e=>{var r;return(0,t.jsxs)(a.Fragment,{children:["/"!==e.path&&(0,t.jsx)(v.Z,{icon:"chevron_right"}),(0,t.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(r=e.path)&&void 0!==r?r:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,t.jsx)(p.Z,{spacing:"none",width:"large",children:c}),!s&&(null!=S?S:q)&&(0,t.jsxs)(p.Z,{width:"large",spacing:"small",className:"link-containers",children:[S&&(0,t.jsx)(d(),{className:"previous-link-container",href:null!==(r=S.path)&&void 0!==r?r:"/",children:(0,t.jsxs)(g.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Previous"}),(0,t.jsx)("span",{"data-icon":"arrow_left",children:S.label})]})}),q&&(0,t.jsx)(d(),{className:"next-link-container",href:null!==(n=q.path)&&void 0!==n?n:"/",children:(0,t.jsxs)(g.Z,{behaviour:"interactive",children:[(0,t.jsx)("small",{children:"Next"}),(0,t.jsx)("span",{"data-icon-after":"arrow_right",children:q.label})]})})]})]})]})};var q=s()(async()=>L,{ssr:!1})},35871:function(e,r,n){"use strict";n.r(r);var t=n(52322),o=n(53291),c=n(39097),s=n.n(c),a=n(53148),i=n(55327),l=n(70741),d=n(50350);r.default=()=>(0,t.jsxs)(a.Z,{children:[(0,t.jsx)("h1",{children:"How to apply colors"}),(0,t.jsx)("p",{children:"This decision tree can help you to find out which method is the most suitable and easiest to color layouts, elements or components in your project."}),(0,t.jsx)(i.Z,{children:(0,t.jsx)(o.ArcherContainer,{strokeColor:"#c3c7cc",endMarker:!0,endShape:{arrow:{arrowLength:5,arrowThickness:5}},children:(0,t.jsxs)("div",{className:"decision-tree","data-density":"functional",children:[(0,t.jsxs)("div",{className:"decision-tree-row grid-1-1-1",children:[(0,t.jsx)("span",{}),(0,t.jsx)(o.ArcherElement,{id:"start",relations:[{targetId:"dst-layout",sourceAnchor:"bottom",targetAnchor:"top"},{targetId:"advanced-coloring",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{elevationLevel:"2",children:(0,t.jsx)("div",{className:"card-inner",children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"What would you like to color?"})})})})}),(0,t.jsx)("span",{})]}),(0,t.jsxs)("div",{className:"decision-tree-row grid-1-1-1",children:[(0,t.jsx)(o.ArcherElement,{id:"dst-layout",relations:[{targetId:"semantic-container-color",sourceAnchor:"bottom",targetAnchor:"top"},{targetId:"background-text-color",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{className:"column-1-3",elevationLevel:"2",children:(0,t.jsx)("div",{className:"card-inner",children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Coloring using the DST layout"})})})})}),(0,t.jsx)(o.ArcherElement,{id:"advanced-coloring",relations:[{targetId:"custom-components",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{elevationLevel:"2",children:(0,t.jsx)("div",{className:"card-inner",children:(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Advanced and detailed coloring"})})})})})]}),(0,t.jsxs)("div",{className:"decision-tree-row grid-1-1-1",children:[(0,t.jsx)(o.ArcherElement,{id:"semantic-container-color",relations:[{targetId:"semantic-container-color-explanation",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{className:"db-container-color-blue",elevationLevel:"3",children:(0,t.jsx)("div",{className:"card-inner",children:(0,t.jsx)("p",{children:"Change semantic / contextual container color"})})})}),(0,t.jsx)(o.ArcherElement,{id:"background-text-color",relations:[{targetId:"background-icon-text-color",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{className:"db-container-color-violet",elevationLevel:"3",children:(0,t.jsx)("div",{className:"card-inner",children:(0,t.jsx)("p",{children:"Backgrounds or texts and icons"})})})}),(0,t.jsx)(o.ArcherElement,{id:"custom-components",relations:[{targetId:"custom-components-explanation",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{className:"db-container-color-yellow",elevationLevel:"3",children:(0,t.jsx)("div",{className:"card-inner",children:(0,t.jsx)("p",{children:"Parts of custom components"})})})})]}),(0,t.jsxs)("div",{className:"decision-tree-row grid-1-1-1",children:[(0,t.jsx)(o.ArcherElement,{id:"semantic-container-color-explanation",relations:[{targetId:"semantic-container-color-link",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{className:"db-container-color-blue",children:(0,t.jsx)("div",{className:"card-inner",children:(0,t.jsx)("span",{className:"db-font-size-sm",children:"This will change the whole semantic / contextual color set used by backgrounds, texts, icons and DST Components (using adaptive colors) within a container."})})})}),(0,t.jsx)(o.ArcherElement,{id:"background-icon-text-color",relations:[{targetId:"background-color",sourceAnchor:"bottom",targetAnchor:"top"},{targetId:"text-icon-color",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{className:"db-container-color-violet",children:(0,t.jsxs)("div",{className:"card-inner db-font-size-sm",children:[(0,t.jsxs)("p",{children:["Change ",(0,t.jsx)("strong",{children:"background"})," ","or ",(0,t.jsx)("strong",{children:"text and icon"})," ","color gradation within a container or for an certain element."]}),(0,t.jsxs)("p",{children:[" ","Only colors that are permitted for the corresponding purposes can be selected here."]})]})})}),(0,t.jsx)(o.ArcherElement,{id:"custom-components-explanation",relations:[{targetId:"adaptive-color",sourceAnchor:"bottom",targetAnchor:"top"},{targetId:"explicit-color",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{className:"db-container-color-yellow",children:(0,t.jsx)("div",{className:"card-inner db-font-size-sm",children:(0,t.jsx)("p",{children:"Parts of custom components (texts, backgrounds, borders, interactive states, etc.) are colored in the css / scss with variables."})})})})]}),(0,t.jsxs)("div",{className:"decision-tree-row grid-1-1-1",children:[(0,t.jsx)("div",{}),(0,t.jsxs)("div",{className:"decision-tree-row grid-1-1",children:[(0,t.jsx)(o.ArcherElement,{id:"background-color",relations:[{targetId:"background-color-link",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{className:"db-container-color-violet",children:(0,t.jsxs)("div",{className:"card-inner db-font-size-sm",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Background color"})}),(0,t.jsx)("p",{children:"Changes the elevation or transparency of a container."})]})})}),(0,t.jsx)(o.ArcherElement,{id:"text-icon-color",relations:[{targetId:"text-icon-color-link",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{className:"db-container-color-violet",children:(0,t.jsx)("div",{className:"card-inner",children:(0,t.jsx)("p",{className:"db-font-size-sm",children:(0,t.jsx)("strong",{children:"Text and icon color"})})})})})]}),(0,t.jsxs)("div",{className:"decision-tree-row grid-1-1",children:[(0,t.jsx)(o.ArcherElement,{id:"adaptive-color",relations:[{targetId:"adaptive-color-link",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{className:"db-container-color-yellow",children:(0,t.jsxs)("div",{className:"card-inner db-font-size-sm",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Default: Adaptive colors"})}),(0,t.jsx)("p",{children:"Adaptive to surrounding semantic container color and dark mode"})]})})}),(0,t.jsx)(o.ArcherElement,{id:"explicit-color",relations:[{targetId:"explicit-color-link",sourceAnchor:"bottom",targetAnchor:"top"}],children:(0,t.jsx)(l.Z,{className:"db-container-color-yellow",children:(0,t.jsxs)("div",{className:"card-inner db-font-size-sm",children:[(0,t.jsx)("p",{children:(0,t.jsx)("strong",{children:"Optional: Explicit colors"})}),(0,t.jsx)("p",{children:"Still adaptive to dark mode"})]})})})]})]}),(0,t.jsxs)("div",{className:"decision-tree-row grid-1-1-1",children:[(0,t.jsx)(o.ArcherElement,{id:"semantic-container-color-link",children:(0,t.jsx)(s(),{href:"./color-classes#container-color-classes",children:(0,t.jsx)(l.Z,{className:"db-container-color-blue",role:"button",elevationLevel:"3",behaviour:"interactive",children:(0,t.jsx)("div",{className:"card-inner",children:(0,t.jsx)(d.Z,{children:"Use container color class"})})})})}),(0,t.jsxs)("div",{className:"decision-tree-row grid-1-1",children:[(0,t.jsx)(o.ArcherElement,{id:"background-color-link",children:(0,t.jsx)(s(),{href:"./color-classes#background-color-modifier-classes",children:(0,t.jsx)(l.Z,{className:"db-container-color-violet",role:"button",elevationLevel:"3",behaviour:"interactive",children:(0,t.jsx)("div",{className:"card-inner",children:(0,t.jsx)(d.Z,{children:"Use background color modifier classes"})})})})}),(0,t.jsx)(o.ArcherElement,{id:"text-icon-color-link",children:(0,t.jsx)(s(),{href:"./color-classes#on-background-color-modifier-classes",children:(0,t.jsx)(l.Z,{className:"db-container-color-violet",role:"button",elevationLevel:"3",behaviour:"interactive",children:(0,t.jsx)("div",{className:"card-inner",children:(0,t.jsx)(d.Z,{children:"Use on-background color modifier classes"})})})})})]}),(0,t.jsxs)("div",{className:"decision-tree-row grid-1-1",children:[(0,t.jsx)(o.ArcherElement,{id:"adaptive-color-link",children:(0,t.jsx)(l.Z,{className:"db-container-color-yellow",role:"button",elevationLevel:"3",children:(0,t.jsx)("div",{className:"card-inner",children:"Use adaptive color variables (link will follow)"})})}),(0,t.jsx)(o.ArcherElement,{id:"explicit-color-link",children:(0,t.jsx)(l.Z,{className:"db-container-color-yellow",role:"button",elevationLevel:"3",children:(0,t.jsx)("div",{className:"card-inner",children:"Use explicit color variables (link will follow)"})})})]})]})]})})})]})}},function(e){e.O(0,[6061,1954,3291,2182,2811,2888,9774,179],function(){return e(e.s=13730)}),_N_E=e.O()}]);