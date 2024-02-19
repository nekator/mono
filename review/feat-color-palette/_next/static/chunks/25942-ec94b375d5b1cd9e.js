"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25942],{25942:function(e,a,t){t.d(a,{Z:function(){return V}});var n,l,i,r,s,o,c,d=t(52322),u=t(5632),h=t(2784);let b=()=>{var e,a;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(a=window.crypto)||void 0===a?void 0:a.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},m=(e,a)=>{Object.values(e.children).forEach(e=>{e.setAttribute(a.key,a.value),e.children.length>0&&m(e,a)})},v=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];let n="";return a.forEach((e,a)=>{if(e){if("string"==typeof e)n+="".concat(e," ");else for(let a in e)e[a]&&(n+="".concat(a," "))}}),n.trim()},p=(e,a)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!a.includes(e)).reduce((a,t)=>(a[t]=e[t],a),{}),f=e=>{let{left:a,right:t}=e.getBoundingClientRect(),{innerWidth:n}=window;return a>=0&&t<=n},g=e=>{let{top:a,bottom:t}=e.getBoundingClientRect(),{innerHeight:n}=window;return a>=0&&t<=n},N=(0,h.forwardRef)(function(e,a){let t=a||(0,h.useRef)(a),[n,l]=(0,h.useState)(()=>!1),[i,r]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{l(!e.fadeIn),e.stylePath&&r(e.stylePath),document&&e.fadeIn?document.fonts.ready.then(()=>{l(!0)}):l(!0)},[]),(0,d.jsxs)("div",{ref:t,...p(e,[]),id:e.id,className:v("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":n,children:[i?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:i})}):null,e.slotHeader,(0,d.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})}),x=(0,h.forwardRef)(function(e,a){let t=a||(0,h.useRef)(a),[n,l]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,d.jsxs)("button",{ref:t,...p(e,[]),id:e.id,className:v("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:a=>{e.onClick&&e.onClick(a)},children:[n?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})}),E="OVERWRITE_DEFAULT_ID";(n=r||(r={})).FUNCTIONAL="functional",n.REGULAR="regular",n.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,a]=e;return a}),(s||(s={})).PRIMARY="primary",(l=o||(o={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",l.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",l.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",l.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",l.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",l.BRAND_BG_LEVEL_1="brand-bg-lvl-1",l.BRAND_BG_LEVEL_2="brand-bg-lvl-2",l.BRAND_BG_LEVEL_3="brand-bg-lvl-3",l.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",l.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",l.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",l.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",l.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",l.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",l.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",l.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",l.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",l.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",l.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",l.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",l.WARNING_BG_LEVEL_1="warning-bg-lvl-1",l.WARNING_BG_LEVEL_2="warning-bg-lvl-2",l.WARNING_BG_LEVEL_3="warning-bg-lvl-3",l.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",l.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",l.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",l.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",l.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",l.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",l.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(o).map(e=>{let[,a]=e;return a}),Object.entries(s).map(e=>{let[,a]=e;return a}),(i=c||(c={})).CRITICAL="critical",i.INFORMATIONAL="informational",i.WARNING="warning",i.SUCCESSFUL="successful",Object.entries(c).map(e=>{let[,a]=e;return a});let _=(0,h.forwardRef)(function(e,a){var t;let n=a||(0,h.useRef)(a),l=(0,h.useRef)(null),[i,r]=(0,h.useState)(()=>E);function s(a){"Escape"===a.key&&a.preventDefault(),("close"===a||"Escape"===a.key||"DIALOG"===a.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function o(){(null==n?void 0:n.current)&&(e.open&&!n.current.open&&(l.current&&(l.current.hidden=!1),"none"===e.backdrop?n.current.show():n.current.showModal()),!e.open&&n.current.open&&(l.current&&(l.current.hidden=!0),setTimeout(()=>{var e;l.current&&(l.current.hidden=!1),null===(e=n.current)||void 0===e||e.close()},401)))}let[c,u]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{r(e.id||"drawer-"+b()),e.stylePath&&u(e.stylePath),o()},[]),(0,h.useEffect)(()=>{o()},[e.open]),(0,d.jsxs)("dialog",{className:"db-drawer",id:i,ref:n,...p(e,["onClose"]),onClick:e=>{s(e)},onKeyDown:e=>s(e),"data-backdrop":e.backdrop,children:[c?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:c})}):null,(0,d.jsxs)("article",{ref:l,className:v("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,d.jsxs)("header",{className:"db-drawer-header",children:[(0,d.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(x,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>s("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:"Close Button"})}):null]}),(0,d.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})}),R=(0,h.forwardRef)(function(e,a){var t;let n=a||(0,h.useRef)(a),[l,i]=(0,h.useState)(()=>E),[r,s]=(0,h.useState)(()=>!1),[o,c]=(0,h.useState)(()=>!1),[u,f]=(0,h.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function g(){e.onToggle&&e.onToggle(!e.drawerOpen)}let[N,R]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{s(!0),i(e.id||"header-"+b()),e.stylePath&&R(e.stylePath)},[]),(0,h.useEffect)(()=>{if(r&&document&&l&&e.forceMobile){let e=document.getElementById(l);e&&m(e,{key:"data-force-mobile",value:"true"}),c(!0)}},[r]),(0,d.jsxs)("header",{ref:n,...p(e,[]),className:v("db-header",e.className),id:l,"data-on-forcing-mobile":e.forceMobile&&!o,children:[N?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:N})}):null,(0,d.jsxs)(_,{spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>g(),children:[(0,d.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,d.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,d.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,d.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,d.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation}),(0,d.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,d.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,d.jsxs)("div",{className:"db-header-navigation-container",children:[(0,d.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,d.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,d.jsxs)("div",{className:"db-header-action-container",children:[(0,d.jsx)("div",{className:"db-header-burger-menu-container",children:(0,d.jsx)(x,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>g(),children:null!==(t=e.burgerMenuLabel)&&void 0!==t?t:u.burgerMenuLabel})}),(0,d.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]})]})]})}),j=(0,h.forwardRef)(function(e,a){var t,n,l,i,r;let s=a||(0,h.useRef)(a),[o,c]=(0,h.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"})),[u,b]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&b(e.stylePath)},[]),(0,d.jsxs)("div",{ref:s,...p(e,[]),id:e.id,className:v("db-brand",e.className),children:[u?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:u})}):null,(0,d.jsxs)("a",{href:null!==(t=e.anchorRef)&&void 0!==t?t:o.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("img",{className:"db-logo",src:null!==(n=e.imgSrc)&&void 0!==n?n:o.src,alt:null!==(l=e.imgAlt)&&void 0!==l?l:"",height:null!==(i=e.imgHeight)&&void 0!==i?i:o.height,width:null!==(r=e.imgWidth)&&void 0!==r?r:o.width})}),e.anchorChildren?(0,d.jsx)(d.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,d.jsx)(d.Fragment,{children:e.children})]})}),B=(0,h.forwardRef)(function(e,a){let t=a||(0,h.useRef)(a),[n,l]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,d.jsxs)("section",{ref:t,...p(e,[]),id:e.id,"data-size":e.size||"medium",className:v("db-section",e.className),children:[n?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:n})}):null,(0,d.jsx)("div",{"data-variant":e.variant,children:e.children})]})}),L=()=>{let e=(0,h.useRef)(null),[a,t]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{var a;(null==e?void 0:null===(a=e.current)||void 0===a?void 0:a.innerHTML)===""&&t(!0)},[]),[a,e]};var A=e=>{let{children:a,element:t="div",...n}=e,[l,i]=L();return l?(0,h.createElement)(t,{...n,children:a}):(0,h.createElement)(t,{...n,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let w=(0,h.forwardRef)(function(e,a){let t=a||(0,h.useRef)(a),[n,l]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,d.jsxs)("nav",{ref:t,...p(e,[]),id:e.id,className:v("db-main-navigation",e.className),children:[n?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:n})}):null,(0,d.jsx)("menu",{children:e.children})]})}),S=[{label:"Home",path:"/"},{label:"Foundations",path:"/foundations",subNavigation:[{label:"Readme",path:"/foundations/readme"},{label:"Colors",path:"/foundations/colors",subNavigation:[{label:"Readme",path:"/foundations/colors/readme"},{label:"Overview",path:"/foundations/colors/overview"},{label:"Color Schemes",path:"/foundations/colors/color-schemes"}]},{label:"Icons",path:"/foundations/icons",subNavigation:[{label:"Readme",path:"/foundations/icons/readme"},{label:"Custom Icons",path:"/foundations/icons/custom-icons"},{label:"Overview",path:"/foundations/icons/overview"}]},{label:"Tonalities",path:"/foundations/tonalities",subNavigation:[{label:"Readme",path:"/foundations/tonalities/readme"},{label:"Examples",path:"/foundations/tonalities/examples"}]},{label:"Variables",path:"/foundations/variables",subNavigation:[{label:"Readme",path:"/foundations/variables/readme"},{label:"Examples",path:"/foundations/variables/examples"}]}]},{label:"Components",path:"/components",subNavigation:[{label:"Readme",path:"/components/readme"},...[{label:"Action",path:"/components/action",subNavigation:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"Data-Display",path:"/components/data-display",subNavigation:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBTooltip",name:"tooltip"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"},{label:"DBAccordion",name:"accordion"},{label:"DBAccordionItem",name:"accordion-item"},{label:"DBTabs",name:"tabs"},{label:"DBTab",name:"tab"}]},{label:"Data-Input",path:"/components/data-input",subNavigation:[{label:"DBCheckbox",name:"checkbox"},{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBSelect",name:"select"},{label:"DBTextarea",name:"textarea"}]},{label:"Feedback",path:"/components/feedback",subNavigation:[{label:"DBAlert",name:"alert"},{label:"DBBadge",name:"badge"}]},{label:"Layout",path:"/components/layout",subNavigation:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"Navigation",path:"/components/navigation",subNavigation:[{label:"DBMainNavigation",name:"main-navigation"},{label:"DBNavigationItem",name:"navigation-item"}]},{label:"Utilities",path:"/components/utilities",subNavigation:[{label:"DBPopover",name:"popover"}]}].map(e=>{var a;return{...e,subNavigation:null==e?void 0:null===(a=e.subNavigation)||void 0===a?void 0:a.map(e=>({label:e.label,path:"/components/".concat(e.name),subNavigation:[{label:"Overview",path:"/components/".concat(e.name,"/overview")},{label:"Properties",path:"/components/".concat(e.name,"/properties")},{label:"How to use",path:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",path:"/components/".concat(e.name,"/migration")}]}))}})]}];var T=t(39097),I=t.n(T);let y=(0,h.forwardRef)(function(e,a){var t;let n=a||(0,h.useRef)(a),[l,i]=(0,h.useState)(()=>!1),[r,s]=(0,h.useState)(()=>!1),[o,c]=(0,h.useState)(()=>!0),[u,m]=(0,h.useState)(()=>!1),[N,E]=(0,h.useState)(()=>"sub-navigation-"+b()),[_,R]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{i(!0),e.stylePath&&R(e.stylePath)},[]),(0,h.useEffect)(()=>{void 0!==e.subNavigationExpanded&&m(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,h.useEffect)(()=>{if(void 0!==e.areaPopup)s(e.areaPopup),c(r);else if(l&&document&&N){var a;let e=null===(a=document)||void 0===a?void 0:a.getElementById(N);if(e){let a=e.children;(null==a?void 0:a.length)>0?(s(!0),f(e)||e.setAttribute("data-outside-vx","true"),g(e)||e.setAttribute("data-outside-vy","true")):c(!1)}}},[l,e.areaPopup]),(0,d.jsxs)("li",{ref:n,...p(e,[]),id:e.id,className:v("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[_?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:_})}):null,o?null:(0,d.jsx)(d.Fragment,{children:e.children}),o?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":r,"aria-expanded":u,disabled:e.disabled,onClick:a=>{e.onClick&&e.onClick(a),r&&m(!0)},children:e.children}),(0,d.jsxs)("menu",{className:"db-sub-navigation",id:N,children:[r?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:"db-mobile-navigation-back",children:(0,d.jsx)(x,{icon:"arrow_back",variant:"text",id:e.backButtonId,onClick:e=>{e.stopPropagation(),m(!1)},children:null!==(t=e.backButtonText)&&void 0!==t?t:"Back"})})}):null,e.slotSubNavigation]})]}):null]})}),C=(e,a)=>{var t;return"/"===a.path?"/"===e:e.includes("".concat(a.path,"/"))||e===a.path||!!(null===(t=a.subNavigation)||void 0===t?void 0:t.find(a=>e.includes("".concat(a.path,"/"))))},D=e=>{var a;let{navItem:t}=e,n=C((0,u.useRouter)().pathname,t);return(0,d.jsx)(y,{active:n,backButtonText:"Back to ".concat(t.label),slotSubNavigation:t.subNavigation&&(0,d.jsx)(d.Fragment,{children:null==t?void 0:t.subNavigation.map(e=>(0,d.jsx)(D,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,d.jsx)(I(),{href:null!==(a=t.path)&&void 0!==a?a:"",children:t.label},"router-path-".concat(t.path))})};var k=()=>(0,d.jsx)(w,{children:S.map(e=>(0,d.jsx)(D,{navItem:e},"router-path-".concat(e.path)))}),F=t(35368),P=t(8674);let G=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},U="db-ui",M="mono";var O=()=>{let e=(0,u.useRouter)(),[a,t]=(0,h.useState)(),[n,l]=(0,h.useState)(),i=a=>{let t=e.basePath,n=a.find(e=>t.includes(e));n&&l(n)},r=(e,a)=>{let n=[],l=[],i=[],r=[],s=[],o=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?l.push(e):e.startsWith("fix")||e.startsWith("bugfix")?i.push(e):e.startsWith("refactor")?r.push(e):/^\d*-/.test(e)?s.push(e):e.startsWith("docs")?o.push(e):n.push(e);t({others:n,features:l,docs:o,refactors:r,issues:s,bugfixes:i,versions:e})};(0,h.useEffect)(()=>{(async()=>{let e=await G("https://api.github.com/repos/".concat(U,"/").concat(M,"/branches")),a=(await G("https://api.github.com/repos/".concat(U,"/").concat(M,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));i(t),i(a),r(a,t)})().catch(e=>{console.error(e)})},[]);let s=a=>{let t=e.pathname,n=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,F.sanitize)("https://".concat(U,".github.io/").concat(M).concat(n?"/version":"/review","/").concat(a).concat(t)))};return a?(0,d.jsx)(P.kr,{className:"version-switcher",label:"Version switcher",labelVariant:"floating",value:n,onChange:e=>{s(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,d.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,d.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null},V=e=>{let{children:a}=e,[t,n]=(0,h.useState)(!1),[l,i]=(0,h.useState)(!1),[r,s]=(0,h.useState)(!1),[o,c]=(0,h.useState)(!1),b=(0,u.useRouter)();return(0,h.useEffect)(()=>{b.query&&(n("true"===b.query.fullscreen),i("true"===b.query.noh1),s("true"===b.query.properties))},[b]),(0,d.jsxs)(A,{children:[b.isReady&&t&&(0,d.jsx)("div",{className:"".concat(l?"noh1":""," ").concat(r?"is-properties":""),children:a}),b.isReady&&!t&&(0,d.jsx)(N,{fadeIn:!0,type:"fixedHeaderFooter",slotHeader:(0,d.jsx)(R,{drawerOpen:o,onToggle:c,slotBrand:(0,d.jsx)(j,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",title:"DB-UI Mono",anchorChildren:!0,children:"DB-UI Mono"}),slotMetaNavigation:(0,d.jsx)(O,{}),slotCallToAction:(0,d.jsx)(x,{icon:"search",variant:"text",noText:!0,children:"Search"}),slotActionBar:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{icon:"account",variant:"text",noText:!0,children:"Profile"}),(0,d.jsx)(x,{icon:"alert",variant:"text",noText:!0,children:"Notification"}),(0,d.jsx)(x,{icon:"help",variant:"text",noText:!0,children:"Help"})]}),children:(0,d.jsx)(k,{})}),children:(0,d.jsx)(B,{size:"none",variant:"large",children:a})})]})}}}]);