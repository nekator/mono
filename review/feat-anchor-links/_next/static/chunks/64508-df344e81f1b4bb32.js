"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64508],{64508:function(e,a,t){t.d(a,{Z:function(){return O}});var n,l,i,r,s,o,d,c=t(52322),u=t(5632),h=t(2784);let m=()=>{var e,a;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(a=window.crypto)||void 0===a?void 0:a.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},b=(e,a)=>{Object.values(e.children).forEach(e=>{e.setAttribute(a.key,a.value),e.children.length>0&&b(e,a)})},p=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];let n="";return a.forEach((e,a)=>{if(e){if("string"==typeof e)n+="".concat(e," ");else for(let a in e)e[a]&&(n+="".concat(a," "))}}),n.trim()},f=(e,a)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!a.includes(e)).reduce((a,t)=>(a[t]=e[t],a),{}),v=(0,h.forwardRef)(function(e,a){let t=(0,h.useRef)(a),[n,l]=(0,h.useState)(()=>!1),[i,r]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{l(!e.fadeIn),e.stylePath&&r(e.stylePath),document&&e.fadeIn?document.fonts.ready.then(()=>{l(!0)}):l(!0)},[]),(0,c.jsxs)("div",{ref:t,...f(e,[]),id:e.id,className:p("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":n,children:[i?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:i})}):null,e.slotHeader,(0,c.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})}),g=(0,h.forwardRef)(function(e,a){let t=(0,h.useRef)(a),[n,l]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,c.jsxs)("button",{ref:t,...f(e,[]),id:e.id,className:p("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:a=>{e.onClick&&e.onClick(a)},children:[n?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})}),N="OVERWRITE_DEFAULT_ID";(n=r||(r={})).FUNCTIONAL="functional",n.REGULAR="regular",n.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,a]=e;return a}),(s||(s={})).PRIMARY="primary",(l=o||(o={})).BASE="base",l.BASE_STRONG="base-strong",l.BASE_TRANSPARENT_SEMI="base-transparent-semi",l.BASE_TRANSPARENT_FULL="base-transparent-full",l.NEUTRAL="neutral",l.NEUTRAL_STRONG="neutral-strong",l.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",l.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",l.BRAND="brand",l.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",l.BRAND_TRANSPARENT_FULL="brand-transparent-full",l.SUCCESSFUL="successful",l.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",l.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",l.CRITICAL="critical",l.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",l.CRITICAL_TRANSPARENT_Full="critical-transparent-full",l.WARNING="warning",l.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",l.WARNING_TRANSPARENT_FULL="warning-transparent-full",l.INFORMATIONAL="informational",l.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",l.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(o).map(e=>{let[,a]=e;return a}),Object.entries(s).map(e=>{let[,a]=e;return a}),(i=d||(d={})).CRITICAL="critical",i.INFORMATIONAL="informational",i.WARNING="warning",i.SUCCESSFUL="successful",Object.entries(d).map(e=>{let[,a]=e;return a});let x=(0,h.forwardRef)(function(e,a){var t;let n=(0,h.useRef)(a),l=(0,h.useRef)(null),[i,r]=(0,h.useState)(()=>N);function s(a){"Escape"===a.key&&a.preventDefault(),("close"===a||"Escape"===a.key||"DIALOG"===a.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function o(){(null==n?void 0:n.current)&&(e.open&&!n.current.open&&(l.current&&(l.current.hidden=!1),"none"===e.backdrop?n.current.show():n.current.showModal()),!e.open&&n.current.open&&(l.current&&(l.current.hidden=!0),setTimeout(()=>{var e;l.current&&(l.current.hidden=!1),null===(e=n.current)||void 0===e||e.close()},401)))}let[d,u]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{r(e.id||"drawer-"+m()),e.stylePath&&u(e.stylePath),o()},[]),(0,h.useEffect)(()=>{o()},[e.open]),(0,c.jsxs)("dialog",{className:"db-drawer",id:i,ref:n,...f(e,["onClose"]),onClick:e=>{s(e)},onKeyDown:e=>s(e),"data-backdrop":e.backdrop,children:[d?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:d})}):null,(0,c.jsxs)("article",{ref:l,className:p("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,c.jsxs)("header",{className:"db-drawer-header",children:[(0,c.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(g,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>s("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:"Close Button"})}):null]}),(0,c.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})}),R=(0,h.forwardRef)(function(e,a){var t;let n=(0,h.useRef)(a),[l,i]=(0,h.useState)(()=>N),[r,s]=(0,h.useState)(()=>!1),[o,d]=(0,h.useState)(()=>!1),[u,v]=(0,h.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function R(){e.onToggle&&e.onToggle(!e.drawerOpen)}let[j,S]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{s(!0),i(e.id||"header-"+m()),e.stylePath&&S(e.stylePath)},[]),(0,h.useEffect)(()=>{if(r&&document&&l&&e.forceMobile){let e=document.getElementById(l);e&&b(e,{key:"data-force-mobile",value:"true"}),d(!0)}},[r]),(0,c.jsxs)("header",{ref:n,...f(e,[]),className:p("db-header",e.className),id:l,"data-on-forcing-mobile":e.forceMobile&&!o,children:[j?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:j})}):null,(0,c.jsxs)(x,{"data-hide-on":"desktop",spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>R(),children:[(0,c.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,c.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,c.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,c.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,c.jsx)("div",{className:"db-header-meta-navigation","data-hide-on":"mobile",children:e.slotMetaNavigation}),(0,c.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,c.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,c.jsxs)("div",{className:"db-header-navigation-container",children:[(0,c.jsx)("div",{className:"db-header-navigation","data-hide-on":"mobile",children:e.children}),(0,c.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,c.jsxs)("div",{className:"db-header-action-container",children:[(0,c.jsx)("div",{"data-hide-on":"desktop",children:(0,c.jsx)(g,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>R(),children:null!==(t=e.burgerMenuLabel)&&void 0!==t?t:u.burgerMenuLabel})}),(0,c.jsx)("div",{className:"db-header-action-bar","data-hide-on":"mobile",children:e.slotActionBar})]})]})]})}),j=(0,h.forwardRef)(function(e,a){var t,n,l,i,r;let s=(0,h.useRef)(a),[o,d]=(0,h.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"})),[u,m]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&m(e.stylePath)},[]),(0,c.jsxs)("div",{ref:s,...f(e,[]),id:e.id,className:p("db-brand",e.className),children:[u?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:u})}):null,(0,c.jsxs)("a",{href:null!==(t=e.anchorRef)&&void 0!==t?t:o.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("img",{className:"db-logo",src:null!==(n=e.imgSrc)&&void 0!==n?n:o.src,alt:null!==(l=e.imgAlt)&&void 0!==l?l:"",height:null!==(i=e.imgHeight)&&void 0!==i?i:o.height,width:null!==(r=e.imgWidth)&&void 0!==r?r:o.width})}),e.anchorChildren?(0,c.jsx)(c.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,c.jsx)(c.Fragment,{children:e.children})]})}),S=(0,h.forwardRef)(function(e,a){let t=(0,h.useRef)(a),[n,l]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,c.jsxs)("section",{ref:t,...f(e,[]),id:e.id,"data-size":e.size||"medium",className:p("db-section",e.className),children:[n?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:n})}):null,(0,c.jsx)("div",{"data-variant":e.variant,children:e.children})]})}),A=()=>{let e=(0,h.useRef)(null),[a,t]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{var a;(null===(a=null==e?void 0:e.current)||void 0===a?void 0:a.innerHTML)===""&&t(!0)},[]),[a,e]};var E=e=>{let{children:a,element:t="div",...n}=e,[l,i]=A(),[r,s]=(0,h.useState)(),o=(0,u.useRouter)();return((0,h.useEffect)(()=>{var e;(null==o?void 0:null===(e=o.asPath)||void 0===e?void 0:e.includes("#"))&&r!==o.asPath&&(s(o.asPath),o.push(o.asPath))},[o]),l)?(0,h.createElement)(t,{...n,children:a}):(0,h.createElement)(t,{...n,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let w=(0,h.forwardRef)(function(e,a){let t=(0,h.useRef)(a),[n,l]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,c.jsxs)("nav",{ref:t,...f(e,[]),id:e.id,className:p("db-main-navigation",e.className),children:[n?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:n})}):null,(0,c.jsx)("menu",{children:e.children})]})}),T=[{label:"Home",path:"/"},{label:"Foundations",path:"/foundations",subNavigation:[{label:"Readme",path:"/foundations/readme"},{label:"Colors",path:"/foundations/colors",subNavigation:[{label:"Readme",path:"/foundations/colors/readme"},{label:"Overview",path:"/foundations/colors/overview"},{label:"Color Schemes",path:"/foundations/colors/color-schemes"}]},{label:"Icons",path:"/foundations/icons",subNavigation:[{label:"Readme",path:"/foundations/icons/readme"},{label:"Custom Icons",path:"/foundations/icons/custom-icons"},{label:"Overview",path:"/foundations/icons/overview"}]},{label:"Tonalities",path:"/foundations/tonalities",subNavigation:[{label:"Readme",path:"/foundations/tonalities/readme"},{label:"Examples",path:"/foundations/tonalities/examples"}]},{label:"Variables",path:"/foundations/variables",subNavigation:[{label:"Readme",path:"/foundations/variables/readme"},{label:"Examples",path:"/foundations/variables/examples"}]}]},{label:"Components",path:"/components",subNavigation:[{label:"Readme",path:"/components/readme"},...[{label:"Action",path:"/components/action",subNavigation:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"Data-Display",path:"/components/data-display",subNavigation:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBTooltip",name:"tooltip"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"},{label:"DBAccordion",name:"accordion"},{label:"DBAccordionItem",name:"accordion-item"}]},{label:"Data-Input",path:"/components/data-input",subNavigation:[{label:"DBCheckbox",name:"checkbox"},{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBSelect",name:"select"},{label:"DBTextarea",name:"textarea"}]},{label:"Feedback",path:"/components/feedback",subNavigation:[{label:"DBAlert",name:"alert"},{label:"DBBadge",name:"badge"}]},{label:"Layout",path:"/components/layout",subNavigation:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"Navigation",path:"/components/navigation",subNavigation:[{label:"DBMainNavigation",name:"main-navigation"},{label:"DBNavigationItem",name:"navigation-item"}]},{label:"Utilities",path:"/components/utilities",subNavigation:[{label:"DBPopover",name:"popover"}]}].map(e=>{var a;return{...e,subNavigation:null==e?void 0:null===(a=e.subNavigation)||void 0===a?void 0:a.map(e=>({label:e.label,path:"/components/".concat(e.name),subNavigation:[{label:"Overview",path:"/components/".concat(e.name,"/overview")},{label:"Properties",path:"/components/".concat(e.name,"/properties")},{label:"Examples",path:"/components/".concat(e.name,"/examples")},{label:"How to use",path:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",path:"/components/".concat(e.name,"/migration")}]}))}})]}];var y=t(39097),I=t.n(y);let B=(0,h.forwardRef)(function(e,a){var t;let n=(0,h.useRef)(a),[l,i]=(0,h.useState)(()=>!1),[r,s]=(0,h.useState)(()=>!1),[o,d]=(0,h.useState)(()=>!0),[u,b]=(0,h.useState)(()=>!1),[v,N]=(0,h.useState)(()=>"sub-navigation-"+m()),[x,R]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{i(!0),e.stylePath&&R(e.stylePath)},[]),(0,h.useEffect)(()=>{void 0!==e.subNavigationExpanded&&b(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,h.useEffect)(()=>{if(void 0!==e.areaPopup)s(e.areaPopup),d(r);else if(l&&document&&v){var a;let e=null===(a=document)||void 0===a?void 0:a.getElementById(v);if(e){let a=e.children;(null==a?void 0:a.length)>0?s(!0):d(!1)}}},[l,e.areaPopup]),(0,c.jsxs)("li",{ref:n,...f(e,[]),id:e.id,className:p("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[x?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:x})}):null,o?null:(0,c.jsx)(c.Fragment,{children:e.children}),o?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":r,"aria-expanded":u,disabled:e.disabled,onClick:a=>{e.onClick&&e.onClick(a),r&&b(!0)},children:e.children}),(0,c.jsxs)("menu",{className:"db-sub-navigation",id:v,children:[r?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"db-mobile-navigation-back",children:(0,c.jsx)(g,{icon:"arrow_back",variant:"text",id:e.backButtonId,onClick:e=>{e.stopPropagation(),b(!1)},children:null!==(t=e.backButtonText)&&void 0!==t?t:"Back"})})}):null,e.slotSubNavigation]})]}):null]})}),C=(e,a)=>{var t;return"/"===a.path?"/"===e:e.includes("".concat(a.path,"/"))||e===a.path||!!(null===(t=a.subNavigation)||void 0===t?void 0:t.find(a=>e.includes("".concat(a.path,"/"))))},k=e=>{var a;let{navItem:t}=e,n=C((0,u.useRouter)().pathname,t);return(0,c.jsx)(B,{active:n,backButtonText:"Back to ".concat(t.label),slotSubNavigation:t.subNavigation&&(0,c.jsx)(c.Fragment,{children:null==t?void 0:t.subNavigation.map(e=>(0,c.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,c.jsx)(I(),{href:null!==(a=t.path)&&void 0!==a?a:"",children:t.label},"router-path-".concat(t.path))})};var D=()=>(0,c.jsx)(w,{children:T.map(e=>(0,c.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),P=t(35368),_=t(88451);let L=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},F="db-ui",U="mono";var M=()=>{let e=(0,u.useRouter)(),[a,t]=(0,h.useState)(),[n,l]=(0,h.useState)(),i=a=>{let t=e.basePath,n=a.find(e=>t.includes(e));n&&l(n)},r=(e,a)=>{let n=[],l=[],i=[],r=[],s=[],o=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?l.push(e):e.startsWith("fix")||e.startsWith("bugfix")?i.push(e):e.startsWith("refactor")?r.push(e):/^\d*-/.test(e)?s.push(e):e.startsWith("docs")?o.push(e):n.push(e);t({others:n,features:l,docs:o,refactors:r,issues:s,bugfixes:i,versions:e})};(0,h.useEffect)(()=>{(async()=>{let e=await L("https://api.github.com/repos/".concat(F,"/").concat(U,"/branches")),a=(await L("https://api.github.com/repos/".concat(F,"/").concat(U,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));i(t),i(a),r(a,t)})().catch(e=>{console.error(e)})},[]);let s=a=>{let t=e.pathname,n=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,P.sanitize)("https://".concat(F,".github.io/").concat(U).concat(n?"/version":"/review","/").concat(a).concat(t)))};return a?(0,c.jsx)(_.kr,{className:"version-switcher",label:"Version switcher",labelVariant:"floating",value:n,onChange:e=>{s(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,c.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,c.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null},O=e=>{let{children:a}=e,[t,n]=(0,h.useState)(!1),[l,i]=(0,h.useState)(!1),[r,s]=(0,h.useState)(!1),[o,d]=(0,h.useState)(!1),m=(0,u.useRouter)();return(0,h.useEffect)(()=>{m.query&&(n("true"===m.query.fullscreen),i("true"===m.query.noh1),s("true"===m.query.properties))},[m]),(0,c.jsxs)(E,{children:[m.isReady&&t&&(0,c.jsx)("div",{className:"".concat(l?"noh1":""," ").concat(r?"is-properties":""),children:a}),m.isReady&&!t&&(0,c.jsx)(v,{fadeIn:!0,type:"fixedHeaderFooter",slotHeader:(0,c.jsx)(R,{drawerOpen:o,onToggle:d,slotBrand:(0,c.jsx)(j,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",title:"DB-UI Mono",anchorChildren:!0,children:"DB-UI Mono"}),slotCallToAction:(0,c.jsx)(g,{icon:"search",variant:"text",noText:!0,children:"Search"}),slotActionBar:(0,c.jsx)(M,{}),children:(0,c.jsx)(D,{})}),children:(0,c.jsx)(S,{size:"none",variant:"large",children:a})})]})}}}]);