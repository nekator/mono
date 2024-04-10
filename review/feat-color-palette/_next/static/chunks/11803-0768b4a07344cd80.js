"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11803],{11803:function(e,a,t){t.d(a,{Z:function(){return F}});var n=t(52322),i=t(5632),o=t(25237),r=t.n(o),s=t(2784),l=t(61183),d=t(13776);let c=(0,s.forwardRef)(function(e,a){let t=a||(0,s.useRef)(a),[i,o]=(0,s.useState)(()=>!1);return(0,s.useEffect)(()=>{o(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{o(!0)}):o(!0)},[]),(0,n.jsxs)("div",{ref:t,...(0,d.mS)(e,[]),id:e.id,className:(0,d.yI)("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":i,children:[(0,n.jsx)(n.Fragment,{children:e.header}),(0,n.jsx)("main",{className:"db-main",children:e.children}),(0,n.jsx)(n.Fragment,{children:e.footer})]})});var u=t(16134),h=t(63900);let m=(0,s.forwardRef)(function(e,a){var t;let i=a||(0,s.useRef)(a),o=(0,s.useRef)(null);function r(a){"Escape"===a.key&&a.preventDefault(),("close"===a||"Escape"===a.key||"DIALOG"===a.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function l(){(null==i?void 0:i.current)&&(e.open&&!i.current.open&&(o.current&&(o.current.hidden=!1),"none"===e.backdrop?i.current.show():i.current.showModal()),!e.open&&i.current.open&&(o.current&&(o.current.hidden=!0),setTimeout(()=>{var e;o.current&&(o.current.hidden=!1),null===(e=i.current)||void 0===e||e.close()},401)))}return(0,s.useEffect)(()=>{l()},[]),(0,s.useEffect)(()=>{l()},[e.open]),(0,n.jsx)("dialog",{className:"db-drawer",id:e.id,ref:i,...(0,d.mS)(e,["onClose"]),onClick:e=>{r(e)},onKeyDown:e=>r(e),"data-backdrop":e.backdrop,children:(0,n.jsxs)("article",{ref:o,className:(0,d.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,n.jsxs)("header",{className:"db-drawer-header",children:[(0,n.jsx)("div",{className:"db-drawer-header-text",children:(0,n.jsx)(n.Fragment,{children:e.drawerHeader})}),e.withCloseButton?(0,n.jsx)(u.Z,{icon:"close",variant:"ghost",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>r("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:h.ce}):null]}),(0,n.jsx)("div",{className:"db-drawer-content",children:e.children})]})})}),b=(0,s.forwardRef)(function(e,a){var t;let i=a||(0,s.useRef)(a),[o,r]=(0,s.useState)(()=>h.IY),[l,c]=(0,s.useState)(()=>!1),[b,p]=(0,s.useState)(()=>!1),[v,f]=(0,s.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function g(){e.onToggle&&e.onToggle(!e.drawerOpen)}return(0,s.useEffect)(()=>{c(!0),r(e.id||"header-"+(0,d.Vj)())},[]),(0,s.useEffect)(()=>{if(l&&document&&o&&e.forceMobile){let e=document.getElementById(o);e&&(0,d.yn)(e,{key:"data-force-mobile",value:"true"}),p(!0)}},[l]),(0,n.jsxs)("header",{ref:i,...(0,d.mS)(e,[]),className:(0,d.yI)("db-header",e.className),id:o,"data-on-forcing-mobile":e.forceMobile&&!b,children:[(0,n.jsxs)(m,{spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>g(),children:[(0,n.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,n.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,n.jsx)("div",{className:"db-header-meta-navigation",children:(0,n.jsx)(n.Fragment,{children:e.metaNavigation})})]}),(0,n.jsx)("div",{className:"db-header-action-bar",children:(0,n.jsx)(n.Fragment,{children:e.actionBar})})]}),(0,n.jsx)("div",{className:"db-header-meta-navigation",children:(0,n.jsx)(n.Fragment,{children:e.metaNavigation})}),(0,n.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,n.jsx)("div",{className:"db-header-brand-container",children:(0,n.jsx)(n.Fragment,{children:e.brand})}),(0,n.jsxs)("div",{className:"db-header-navigation-container",children:[(0,n.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,n.jsx)("div",{className:"db-header-call-to-action",children:(0,n.jsx)(n.Fragment,{children:e.callToAction})})]}),(0,n.jsxs)("div",{className:"db-header-action-container",children:[(0,n.jsx)("div",{className:"db-header-burger-menu-container",children:(0,n.jsx)(u.Z,{id:"button-burger-menu",icon:"menu",variant:"ghost",noText:!0,onClick:()=>g(),children:null!==(t=e.burgerMenuLabel)&&void 0!==t?t:v.burgerMenuLabel})}),(0,n.jsx)("div",{className:"db-header-action-bar",children:(0,n.jsx)(n.Fragment,{children:e.actionBar})})]})]})]})}),p=(0,s.forwardRef)(function(e,a){var t,i,o,r;let l=a||(0,s.useRef)(a),[c,u]=(0,s.useState)(()=>({src:"./assets/images/db_logo.svg",width:"34",height:"24"}));return(0,n.jsx)("div",{ref:l,...(0,d.mS)(e,[]),id:e.id,className:(0,d.yI)("db-brand",e.className),children:(0,n.jsxs)("a",{href:e.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,n.jsx)("img",{className:"db-logo",src:null!==(t=e.imgSrc)&&void 0!==t?t:c.src,alt:null!==(i=e.imgAlt)&&void 0!==i?i:"",height:null!==(o=e.imgHeight)&&void 0!==o?o:c.height,width:null!==(r=e.imgWidth)&&void 0!==r?r:c.width}),e.children]})})}),v=(0,s.forwardRef)(function(e,a){let t=a||(0,s.useRef)(a),[i,o]=(0,s.useState)(()=>h.IY);return(0,s.useEffect)(()=>{o(e.id||"section-"+(0,d.Vj)())},[]),(0,n.jsx)("section",{ref:t,...(0,d.mS)(e,[]),id:i,"data-size":e.size||"medium",className:(0,d.yI)("db-section",e.className),children:(0,n.jsx)("div",{"data-variant":e.variant,children:e.children})})}),f=(0,s.forwardRef)(function(e,a){let t=a||(0,s.useRef)(a),[i,o]=(0,s.useState)(()=>h.IY);return(0,s.useEffect)(()=>{o(e.id||"main-navigation-"+(0,d.Vj)())},[]),(0,n.jsx)("nav",{ref:t,...(0,d.mS)(e,[]),id:i,className:(0,d.yI)("db-main-navigation",e.className),children:(0,n.jsx)("menu",{children:e.children})})}),g=[{label:"Home",path:"/"},{label:"Foundations",path:"/foundations",subNavigation:[{label:"Readme",path:"/foundations/readme"},{label:"Colors",path:"/foundations/colors",subNavigation:[{label:"Readme",path:"/foundations/colors/readme"},{label:"Overview",path:"/foundations/colors/overview"},{label:"Color Schemes",path:"/foundations/colors/color-schemes"}]},{label:"Font Sizes",path:"/foundations/font-sizes",subNavigation:[{label:"Readme",path:"/foundations/font-sizes/readme"},{label:"Overview",path:"/foundations/font-sizes/overview"}]},{label:"Icons",path:"/foundations/icons",subNavigation:[{label:"Readme",path:"/foundations/icons/readme"},{label:"Custom Icons",path:"/foundations/icons/custom-icons"},{label:"Overview",path:"/foundations/icons/overview"}]},{label:"Densities",path:"/foundations/densities",subNavigation:[{label:"Readme",path:"/foundations/densities/readme"},{label:"Examples",path:"/foundations/densities/examples"}]},{label:"Variables",path:"/foundations/variables",subNavigation:[{label:"Readme",path:"/foundations/variables/readme"},{label:"Examples",path:"/foundations/variables/examples"}]}]},{label:"Components",path:"/components",subNavigation:[{label:"Readme",path:"/components/readme"},{label:"Router usage",path:"/components/router-usage"},{label:"Validation",path:"/components/validation"},...[{label:"Action",path:"/components/action",subNavigation:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"Data-Display",path:"/components/data-display",subNavigation:[{label:"DBBrand",name:"brand"},{label:"DBTooltip",name:"tooltip"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"},{label:"DBAccordion",name:"accordion"},{label:"DBAccordionItem",name:"accordion-item"},{label:"DBTabs",name:"tabs"},{label:"DBTab",name:"tab"}]},{label:"Data-Input",path:"/components/data-input",subNavigation:[{label:"DBCheckbox",name:"checkbox"},{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBSelect",name:"select"},{label:"DBTextarea",name:"textarea"}]},{label:"Feedback",path:"/components/feedback",subNavigation:[{label:"DBNotification",name:"notification"},{label:"DBBadge",name:"badge"}]},{label:"Layout",path:"/components/layout",subNavigation:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBSection",name:"section"}]},{label:"Navigation",path:"/components/navigation",subNavigation:[{label:"DBMainNavigation",name:"main-navigation"},{label:"DBNavigationItem",name:"navigation-item"}]},{label:"Utilities",path:"/components/utilities",subNavigation:[{label:"DBPopover",name:"popover"}]}].map(e=>{var a;return{...e,subNavigation:null==e?void 0:null===(a=e.subNavigation)||void 0===a?void 0:a.map(e=>({label:e.label,path:"/components/".concat(e.name),subNavigation:[{label:"Overview",path:"/components/".concat(e.name,"/overview")},{label:"Properties",path:"/components/".concat(e.name,"/properties")},{label:"How to use",path:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",path:"/components/".concat(e.name,"/migration")}]}))}})]}];var x=t(39097),N=t.n(x);let j=(0,s.forwardRef)(function(e,a){var t;let i=a||(0,s.useRef)(a),[o,r]=(0,s.useState)(()=>!1),[l,c]=(0,s.useState)(()=>!1),[m,b]=(0,s.useState)(()=>!0),[p,v]=(0,s.useState)(()=>!1),[f,g]=(0,s.useState)(()=>"sub-navigation-"+(0,d.Vj)());return(0,s.useEffect)(()=>{r(!0)},[]),(0,s.useEffect)(()=>{void 0!==e.subNavigationExpanded&&v(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,s.useEffect)(()=>{if(void 0!==e.areaPopup)c(e.areaPopup),b(l);else if(o&&document&&f){var a;let e=null===(a=document)||void 0===a?void 0:a.getElementById(f);if(e){let a=e.children;(null==a?void 0:a.length)>0?(c(!0),(0,d.cd)(e)||e.setAttribute("data-outside-vx","true"),(0,d.MN)(e)||e.setAttribute("data-outside-vy","true")):b(!1)}}},[o,e.areaPopup]),(0,n.jsxs)("li",{ref:i,...(0,d.mS)(e,[]),id:e.id,className:(0,d.yI)("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[m?null:(0,n.jsx)(n.Fragment,{children:e.children}),m?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":l,"aria-expanded":p,disabled:e.disabled,onClick:a=>{e.onClick&&e.onClick(a),l&&v(!0)},children:e.children}),(0,n.jsxs)("menu",{className:"db-sub-navigation",id:f,children:[l?(0,n.jsx)("div",{className:"db-mobile-navigation-back",children:(0,n.jsx)(u.Z,{icon:"arrow_back",variant:"ghost",id:e.backButtonId,onClick:e=>{e.stopPropagation(),v(!1)},children:null!==(t=e.backButtonText)&&void 0!==t?t:h.YP})}):null,(0,n.jsx)(n.Fragment,{children:e.subNavigation})]})]}):null]})}),w=(e,a)=>{var t;return"/"===a.path?"/"===e:e.includes("".concat(a.path,"/"))||e===a.path||!!(null===(t=a.subNavigation)||void 0===t?void 0:t.find(a=>e.includes("".concat(a.path,"/"))))},B=e=>{var a;let{navItem:t}=e,o=w((0,i.useRouter)().pathname,t);return(0,n.jsx)(j,{active:o,backButtonText:"Back to ".concat(t.label),subNavigation:t.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==t?void 0:t.subNavigation.map(e=>(0,n.jsx)(B,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,n.jsx)(N(),{href:null!==(a=t.path)&&void 0!==a?a:"",children:t.label},"router-path-".concat(t.path))})};var y=()=>(0,n.jsx)(f,{children:g.map(e=>(0,n.jsx)(B,{navItem:e},"router-path-".concat(e.path)))}),D=t(35368),S=t(28148);let k=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},I="db-ui",R="mono";var E=()=>{let e=(0,i.useRouter)(),[a,t]=(0,s.useState)(),[o,r]=(0,s.useState)(),l=a=>{let t=e.basePath,n=a.find(e=>t.includes(e));n&&r(n)},d=(e,a)=>{let n=[],i=[],o=[],r=[],s=[],l=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?i.push(e):e.startsWith("fix")||e.startsWith("bugfix")?o.push(e):e.startsWith("refactor")?r.push(e):/^\d*-/.test(e)?s.push(e):e.startsWith("docs")?l.push(e):n.push(e);t({others:n,features:i,docs:l,refactors:r,issues:s,bugfixes:o,versions:e})};(0,s.useEffect)(()=>{(async()=>{let e=await k("https://api.github.com/repos/".concat(I,"/").concat(R,"/branches")),a=(await k("https://api.github.com/repos/".concat(I,"/").concat(R,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));l(t),l(a),d(a,t)})().catch(e=>{console.error(e)})},[]);let c=a=>{let t=e.pathname,n=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,D.sanitize)("https://".concat(I,".github.io/").concat(R).concat(n?"/version":"/review","/").concat(a).concat(t)))};return a?(0,n.jsx)(S.kr,{className:"version-switcher",label:"Version switcher",variant:"floating",value:o,onChange:e=>{c(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,n.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,n.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null};let C=e=>{let{children:a}=e,[t,o]=(0,s.useState)(!1),[r,d]=(0,s.useState)(!1),[h,m]=(0,s.useState)(!1),[f,g]=(0,s.useState)(!1),[x,N]=(0,s.useState)(),j=(0,i.useRouter)();return(0,s.useEffect)(()=>{l.Z.highlightAll()},[]),(0,s.useEffect)(()=>{if(j.query&&(j.query.fullscreen&&o("true"===j.query.fullscreen),j.query.noh1&&d("true"===j.query.noh1),j.query.properties&&m("true"===j.query.properties),j.query.current)){let a=Array.isArray(j.query.current)?j.query.current[0]:j.query.current;if(x!==a){var e;N(a),null===(e=document.querySelector("#".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}},[j]),(0,n.jsxs)(n.Fragment,{children:[j.isReady&&t&&(0,n.jsx)("div",{className:"".concat(r?"noh1":""," ").concat(h?"is-properties":""),children:a}),j.isReady&&!t&&(0,n.jsx)(c,{fadeIn:!0,type:"fixedHeaderFooter",header:(0,n.jsx)(b,{drawerOpen:f,onToggle:g,brand:(0,n.jsx)(p,{imgSrc:"".concat("/mono/review/feat-color-palette","/assets/images/db_logo.svg"),title:"DB-UI Mono",anchorChildren:!0,children:"DB-UI Mono"}),callToAction:(0,n.jsx)(u.Z,{icon:"search",variant:"ghost",noText:!0,children:"Search"}),actionBar:(0,n.jsx)(E,{}),children:(0,n.jsx)(y,{})}),children:(0,n.jsx)(v,{size:"none",variant:"large",children:a})})]})};var F=r()(async()=>C,{ssr:!1})}}]);