"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11803],{11803:function(e,a,t){t.d(a,{Z:function(){return T}});var n=t(52322),i=t(5632),o=t(25237),l=t.n(o),s=t(2784),r=t(61183),d=t(13776);let c=(0,s.forwardRef)(function(e,a){let t=a||(0,s.useRef)(a),[i,o]=(0,s.useState)(()=>!1);return(0,s.useEffect)(()=>{o(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{o(!0)}):o(!0)},[]),(0,n.jsxs)("div",{ref:t,...(0,d.mS)(e,[]),id:e.id,className:(0,d.yI)("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":i,children:[e.slotHeader,(0,n.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})});var u=t(16134),h=t(63900);let b=(0,s.forwardRef)(function(e,a){var t;let i=a||(0,s.useRef)(a),o=(0,s.useRef)(null);function l(a){"Escape"===a.key&&a.preventDefault(),("close"===a||"Escape"===a.key||"DIALOG"===a.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function r(){(null==i?void 0:i.current)&&(e.open&&!i.current.open&&(o.current&&(o.current.hidden=!1),"none"===e.backdrop?i.current.show():i.current.showModal()),!e.open&&i.current.open&&(o.current&&(o.current.hidden=!0),setTimeout(()=>{var e;o.current&&(o.current.hidden=!1),null===(e=i.current)||void 0===e||e.close()},401)))}return(0,s.useEffect)(()=>{r()},[]),(0,s.useEffect)(()=>{r()},[e.open]),(0,n.jsx)("dialog",{className:"db-drawer",id:e.id,ref:i,...(0,d.mS)(e,["onClose"]),onClick:e=>{l(e)},onKeyDown:e=>l(e),"data-backdrop":e.backdrop,children:(0,n.jsxs)("article",{ref:o,className:(0,d.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,n.jsxs)("header",{className:"db-drawer-header",children:[(0,n.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u.Z,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>l("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:h.ce})}):null]}),(0,n.jsx)("div",{className:"db-drawer-content",children:e.children})]})})}),m=(0,s.forwardRef)(function(e,a){var t;let i=a||(0,s.useRef)(a),[o,l]=(0,s.useState)(()=>h.IY),[r,c]=(0,s.useState)(()=>!1),[m,p]=(0,s.useState)(()=>!1),[v,f]=(0,s.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function g(){e.onToggle&&e.onToggle(!e.drawerOpen)}return(0,s.useEffect)(()=>{c(!0),l(e.id||"header-"+(0,d.Vj)())},[]),(0,s.useEffect)(()=>{if(r&&document&&o&&e.forceMobile){let e=document.getElementById(o);e&&(0,d.yn)(e,{key:"data-force-mobile",value:"true"}),p(!0)}},[r]),(0,n.jsxs)("header",{ref:i,...(0,d.mS)(e,[]),className:(0,d.yI)("db-header",e.className),id:o,"data-on-forcing-mobile":e.forceMobile&&!m,children:[(0,n.jsxs)(b,{spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>g(),children:[(0,n.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,n.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,n.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,n.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,n.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation}),(0,n.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,n.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,n.jsxs)("div",{className:"db-header-navigation-container",children:[(0,n.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,n.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,n.jsxs)("div",{className:"db-header-action-container",children:[(0,n.jsx)("div",{className:"db-header-burger-menu-container",children:(0,n.jsx)(u.Z,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>g(),children:null!==(t=e.burgerMenuLabel)&&void 0!==t?t:v.burgerMenuLabel})}),(0,n.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]})]})]})}),p=(0,s.forwardRef)(function(e,a){var t,i,o,l,r;let c=a||(0,s.useRef)(a),[u,h]=(0,s.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"}));return(0,n.jsxs)("div",{ref:c,...(0,d.mS)(e,[]),id:e.id,className:(0,d.yI)("db-brand",e.className),children:[(0,n.jsxs)("a",{href:null!==(t=e.anchorRef)&&void 0!==t?t:u.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("img",{className:"db-logo",src:null!==(i=e.imgSrc)&&void 0!==i?i:u.src,alt:null!==(o=e.imgAlt)&&void 0!==o?o:"",height:null!==(l=e.imgHeight)&&void 0!==l?l:u.height,width:null!==(r=e.imgWidth)&&void 0!==r?r:u.width})}),e.anchorChildren?(0,n.jsx)(n.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,n.jsx)(n.Fragment,{children:e.children})]})}),v=(0,s.forwardRef)(function(e,a){let t=a||(0,s.useRef)(a),[i,o]=(0,s.useState)(()=>h.IY);return(0,s.useEffect)(()=>{o(e.id||"section-"+(0,d.Vj)())},[]),(0,n.jsx)("section",{ref:t,...(0,d.mS)(e,[]),id:i,"data-size":e.size||"medium",className:(0,d.yI)("db-section",e.className),children:(0,n.jsx)("div",{"data-variant":e.variant,children:e.children})})}),f=(0,s.forwardRef)(function(e,a){let t=a||(0,s.useRef)(a),[i,o]=(0,s.useState)(()=>h.IY);return(0,s.useEffect)(()=>{o(e.id||"main-navigation-"+(0,d.Vj)())},[]),(0,n.jsx)("nav",{ref:t,...(0,d.mS)(e,[]),id:i,className:(0,d.yI)("db-main-navigation",e.className),children:(0,n.jsx)("menu",{children:e.children})})}),g=[{label:"Home",path:"/"},{label:"Foundations",path:"/foundations",subNavigation:[{label:"Readme",path:"/foundations/readme"},{label:"Colors",path:"/foundations/colors",subNavigation:[{label:"Readme",path:"/foundations/colors/readme"},{label:"Overview",path:"/foundations/colors/overview"},{label:"Color Schemes",path:"/foundations/colors/color-schemes"}]},{label:"Font Sizes",path:"/foundations/font-sizes",subNavigation:[{label:"Readme",path:"/foundations/font-sizes/readme"},{label:"Overview",path:"/foundations/font-sizes/overview"}]},{label:"Icons",path:"/foundations/icons",subNavigation:[{label:"Readme",path:"/foundations/icons/readme"},{label:"Custom Icons",path:"/foundations/icons/custom-icons"},{label:"Overview",path:"/foundations/icons/overview"}]},{label:"Tonalities",path:"/foundations/tonalities",subNavigation:[{label:"Readme",path:"/foundations/tonalities/readme"},{label:"Examples",path:"/foundations/tonalities/examples"}]},{label:"Variables",path:"/foundations/variables",subNavigation:[{label:"Readme",path:"/foundations/variables/readme"},{label:"Examples",path:"/foundations/variables/examples"}]}]},{label:"Components",path:"/components",subNavigation:[{label:"Readme",path:"/components/readme"},{label:"Router usage",path:"/components/router-usage"},...[{label:"Action",path:"/components/action",subNavigation:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"Data-Display",path:"/components/data-display",subNavigation:[{label:"DBBrand",name:"brand"},{label:"DBTooltip",name:"tooltip"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"},{label:"DBAccordion",name:"accordion"},{label:"DBAccordionItem",name:"accordion-item"},{label:"DBTabs",name:"tabs"},{label:"DBTab",name:"tab"}]},{label:"Data-Input",path:"/components/data-input",subNavigation:[{label:"DBCheckbox",name:"checkbox"},{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBSelect",name:"select"},{label:"DBTextarea",name:"textarea"}]},{label:"Feedback",path:"/components/feedback",subNavigation:[{label:"DBAlert",name:"alert"},{label:"DBBadge",name:"badge"}]},{label:"Layout",path:"/components/layout",subNavigation:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBSection",name:"section"}]},{label:"Navigation",path:"/components/navigation",subNavigation:[{label:"DBMainNavigation",name:"main-navigation"},{label:"DBNavigationItem",name:"navigation-item"}]},{label:"Utilities",path:"/components/utilities",subNavigation:[{label:"DBPopover",name:"popover"}]}].map(e=>{var a;return{...e,subNavigation:null==e?void 0:null===(a=e.subNavigation)||void 0===a?void 0:a.map(e=>({label:e.label,path:"/components/".concat(e.name),subNavigation:[{label:"Overview",path:"/components/".concat(e.name,"/overview")},{label:"Properties",path:"/components/".concat(e.name,"/properties")},{label:"How to use",path:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",path:"/components/".concat(e.name,"/migration")}]}))}})]}];var x=t(39097),N=t.n(x);let j=(0,s.forwardRef)(function(e,a){var t;let i=a||(0,s.useRef)(a),[o,l]=(0,s.useState)(()=>!1),[r,c]=(0,s.useState)(()=>!1),[b,m]=(0,s.useState)(()=>!0),[p,v]=(0,s.useState)(()=>!1),[f,g]=(0,s.useState)(()=>"sub-navigation-"+(0,d.Vj)());return(0,s.useEffect)(()=>{l(!0)},[]),(0,s.useEffect)(()=>{void 0!==e.subNavigationExpanded&&v(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,s.useEffect)(()=>{if(void 0!==e.areaPopup)c(e.areaPopup),m(r);else if(o&&document&&f){var a;let e=null===(a=document)||void 0===a?void 0:a.getElementById(f);if(e){let a=e.children;(null==a?void 0:a.length)>0?(c(!0),(0,d.cd)(e)||e.setAttribute("data-outside-vx","true"),(0,d.MN)(e)||e.setAttribute("data-outside-vy","true")):m(!1)}}},[o,e.areaPopup]),(0,n.jsxs)("li",{ref:i,...(0,d.mS)(e,[]),id:e.id,className:(0,d.yI)("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[b?null:(0,n.jsx)(n.Fragment,{children:e.children}),b?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":r,"aria-expanded":p,disabled:e.disabled,onClick:a=>{e.onClick&&e.onClick(a),r&&v(!0)},children:e.children}),(0,n.jsxs)("menu",{className:"db-sub-navigation",id:f,children:[r?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"db-mobile-navigation-back",children:(0,n.jsx)(u.Z,{icon:"arrow_back",variant:"text",id:e.backButtonId,onClick:e=>{e.stopPropagation(),v(!1)},children:null!==(t=e.backButtonText)&&void 0!==t?t:h.YP})})}):null,e.slotSubNavigation]})]}):null]})}),w=(e,a)=>{var t;return"/"===a.path?"/"===e:e.includes("".concat(a.path,"/"))||e===a.path||!!(null===(t=a.subNavigation)||void 0===t?void 0:t.find(a=>e.includes("".concat(a.path,"/"))))},B=e=>{var a;let{navItem:t}=e,o=w((0,i.useRouter)().pathname,t);return(0,n.jsx)(j,{active:o,backButtonText:"Back to ".concat(t.label),slotSubNavigation:t.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==t?void 0:t.subNavigation.map(e=>(0,n.jsx)(B,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,n.jsx)(N(),{href:null!==(a=t.path)&&void 0!==a?a:"",children:t.label},"router-path-".concat(t.path))})};var y=()=>(0,n.jsx)(f,{children:g.map(e=>(0,n.jsx)(B,{navItem:e},"router-path-".concat(e.path)))}),D=t(35368),S=t(86095);let R=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},k="db-ui",I="mono";var C=()=>{let e=(0,i.useRouter)(),[a,t]=(0,s.useState)(),[o,l]=(0,s.useState)(),r=a=>{let t=e.basePath,n=a.find(e=>t.includes(e));n&&l(n)},d=(e,a)=>{let n=[],i=[],o=[],l=[],s=[],r=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?i.push(e):e.startsWith("fix")||e.startsWith("bugfix")?o.push(e):e.startsWith("refactor")?l.push(e):/^\d*-/.test(e)?s.push(e):e.startsWith("docs")?r.push(e):n.push(e);t({others:n,features:i,docs:r,refactors:l,issues:s,bugfixes:o,versions:e})};(0,s.useEffect)(()=>{(async()=>{let e=await R("https://api.github.com/repos/".concat(k,"/").concat(I,"/branches")),a=(await R("https://api.github.com/repos/".concat(k,"/").concat(I,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));r(t),r(a),d(a,t)})().catch(e=>{console.error(e)})},[]);let c=a=>{let t=e.pathname,n=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,D.sanitize)("https://".concat(k,".github.io/").concat(I).concat(n?"/version":"/review","/").concat(a).concat(t)))};return a?(0,n.jsx)(S.kr,{className:"version-switcher",label:"Version switcher",labelVariant:"floating",value:o,onChange:e=>{c(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,n.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,n.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null};let E=e=>{let{children:a}=e,[t,o]=(0,s.useState)(!1),[l,d]=(0,s.useState)(!1),[h,b]=(0,s.useState)(!1),[f,g]=(0,s.useState)(!1),[x,N]=(0,s.useState)(),j=(0,i.useRouter)();return(0,s.useEffect)(()=>{r.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),r.Z.highlightAll()},[]),(0,s.useEffect)(()=>{if(j.query&&(j.query.fullscreen&&o("true"===j.query.fullscreen),j.query.noh1&&d("true"===j.query.noh1),j.query.properties&&b("true"===j.query.properties),j.query.current)){let a=Array.isArray(j.query.current)?j.query.current[0]:j.query.current;if(x!==a){var e;N(a),null===(e=document.querySelector("#".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}},[j]),(0,n.jsxs)(n.Fragment,{children:[j.isReady&&t&&(0,n.jsx)("div",{className:"".concat(l?"noh1":""," ").concat(h?"is-properties":""),children:a}),j.isReady&&!t&&(0,n.jsx)(c,{fadeIn:!0,type:"fixedHeaderFooter",slotHeader:(0,n.jsx)(m,{drawerOpen:f,onToggle:g,slotBrand:(0,n.jsx)(p,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",title:"DB-UI Mono",anchorChildren:!0,children:"DB-UI Mono"}),slotCallToAction:(0,n.jsx)(u.Z,{icon:"search",variant:"text",noText:!0,children:"Search"}),slotActionBar:(0,n.jsx)(C,{}),children:(0,n.jsx)(y,{})}),children:(0,n.jsx)(v,{size:"none",variant:"large",children:a})})]})};var T=l()(async()=>E,{ssr:!1})}}]);