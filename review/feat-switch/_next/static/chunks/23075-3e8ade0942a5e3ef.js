"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23075],{23075:function(e,a,t){t.d(a,{Z:function(){return W}});var n,l,i,r,s,o,c,d=t(52322),u=t(5632),h=t(25237),b=t.n(h),m=t(2784);let v=()=>{var e,a;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(a=window.crypto)||void 0===a?void 0:a.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},p=(e,a)=>{Object.values(e.children).forEach(e=>{e.setAttribute(a.key,a.value),e.children.length>0&&p(e,a)})},f=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];let n="";return a.forEach((e,a)=>{if(e){if("string"==typeof e)n+="".concat(e," ");else for(let a in e)e[a]&&(n+="".concat(a," "))}}),n.trim()},g=(e,a)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!a.includes(e)).reduce((a,t)=>(a[t]=e[t],a),{}),N=e=>{let{left:a,right:t}=e.getBoundingClientRect(),{innerWidth:n}=window;return a>=0&&t<=n},x=e=>{let{top:a,bottom:t}=e.getBoundingClientRect(),{innerHeight:n}=window;return a>=0&&t<=n},E="OVERWRITE_DEFAULT_ID";(n=r||(r={})).FUNCTIONAL="functional",n.REGULAR="regular",n.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,a]=e;return a}),(s||(s={})).PRIMARY="primary",(l=o||(o={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",l.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",l.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",l.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",l.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",l.BRAND_BG_LEVEL_1="brand-bg-lvl-1",l.BRAND_BG_LEVEL_2="brand-bg-lvl-2",l.BRAND_BG_LEVEL_3="brand-bg-lvl-3",l.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",l.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",l.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",l.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",l.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",l.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",l.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",l.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",l.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",l.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",l.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",l.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",l.WARNING_BG_LEVEL_1="warning-bg-lvl-1",l.WARNING_BG_LEVEL_2="warning-bg-lvl-2",l.WARNING_BG_LEVEL_3="warning-bg-lvl-3",l.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",l.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",l.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",l.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",l.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",l.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",l.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(o).map(e=>{let[,a]=e;return a}),Object.entries(s).map(e=>{let[,a]=e;return a}),(i=c||(c={})).CRITICAL="critical",i.INFORMATIONAL="informational",i.WARNING="warning",i.SUCCESSFUL="successful",Object.entries(c).map(e=>{let[,a]=e;return a});let _=(0,m.forwardRef)(function(e,a){let t=a||(0,m.useRef)(a),[n,l]=(0,m.useState)(()=>E),[i,r]=(0,m.useState)(()=>!1),[s,o]=(0,m.useState)(()=>null);return(0,m.useEffect)(()=>{l(e.id||"page-"+v()),r(!e.fadeIn),e.stylePath&&o(e.stylePath),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,d.jsxs)("div",{ref:t,...g(e,[]),id:n,className:f("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":i,children:[s?(0,d.jsx)(m.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:s})},v()):null,e.slotHeader,(0,d.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})}),R=(0,m.forwardRef)(function(e,a){let t=a||(0,m.useRef)(a),[n,l]=(0,m.useState)(()=>E),[i,r]=(0,m.useState)(()=>null);return(0,m.useEffect)(()=>{l(e.id||"button-"+v()),e.stylePath&&r(e.stylePath)},[]),(0,d.jsxs)("button",{ref:t,...g(e,[]),id:n,className:f("db-button",e.className),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:a=>{e.onClick&&e.onClick(a)},children:[i?(0,d.jsx)(m.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:i})},v()):null,e.children]})}),B=(0,m.forwardRef)(function(e,a){var t;let n=a||(0,m.useRef)(a),l=(0,m.useRef)(null),[i,r]=(0,m.useState)(()=>E);function s(a){"Escape"===a.key&&a.preventDefault(),("close"===a||"Escape"===a.key||"DIALOG"===a.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function o(){(null==n?void 0:n.current)&&(e.open&&!n.current.open&&(l.current&&(l.current.hidden=!1),"none"===e.backdrop?n.current.show():n.current.showModal()),!e.open&&n.current.open&&(l.current&&(l.current.hidden=!0),setTimeout(()=>{var e;l.current&&(l.current.hidden=!1),null===(e=n.current)||void 0===e||e.close()},401)))}let[c,u]=(0,m.useState)(()=>null);return(0,m.useEffect)(()=>{r(e.id||"drawer-"+v()),e.stylePath&&u(e.stylePath),o()},[]),(0,m.useEffect)(()=>{o()},[e.open]),(0,d.jsxs)("dialog",{className:"db-drawer",id:i,ref:n,...g(e,["onClose"]),onClick:e=>{s(e)},onKeyDown:e=>s(e),"data-backdrop":e.backdrop,children:[c?(0,d.jsx)(m.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:c})},v()):null,(0,d.jsxs)("article",{ref:l,className:f("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,d.jsxs)("header",{className:"db-drawer-header",children:[(0,d.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,d.jsx)(m.Fragment,{children:(0,d.jsx)(R,{icon:"close",variant:"ghost",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>s("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:"Close Button"})},v()):null]}),(0,d.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})}),j=(0,m.forwardRef)(function(e,a){var t;let n=a||(0,m.useRef)(a),[l,i]=(0,m.useState)(()=>E),[r,s]=(0,m.useState)(()=>!1),[o,c]=(0,m.useState)(()=>!1),[u,h]=(0,m.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function b(){e.onToggle&&e.onToggle(!e.drawerOpen)}let[N,x]=(0,m.useState)(()=>null);return(0,m.useEffect)(()=>{s(!0),i(e.id||"header-"+v()),e.stylePath&&x(e.stylePath)},[]),(0,m.useEffect)(()=>{if(r&&document&&l&&e.forceMobile){let e=document.getElementById(l);e&&p(e,{key:"data-force-mobile",value:"true"}),c(!0)}},[r]),(0,d.jsxs)("header",{ref:n,...g(e,[]),className:f("db-header",e.className),id:l,"data-on-forcing-mobile":e.forceMobile&&!o,children:[N?(0,d.jsx)(m.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:N})},v()):null,(0,d.jsxs)(B,{spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>b(),children:[(0,d.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,d.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,d.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,d.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,d.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation}),(0,d.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,d.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,d.jsxs)("div",{className:"db-header-navigation-container",children:[(0,d.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,d.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,d.jsxs)("div",{className:"db-header-action-container",children:[(0,d.jsx)("div",{className:"db-header-burger-menu-container",children:(0,d.jsx)(R,{id:"button-burger-menu",icon:"menu",variant:"ghost",noText:!0,onClick:()=>b(),children:null!==(t=e.burgerMenuLabel)&&void 0!==t?t:u.burgerMenuLabel})}),(0,d.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]})]})]})}),w=(0,m.forwardRef)(function(e,a){var t,n,l,i,r;let s=a||(0,m.useRef)(a),[o,c]=(0,m.useState)(()=>E),[u,h]=(0,m.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"})),[b,p]=(0,m.useState)(()=>null);return(0,m.useEffect)(()=>{c(e.id||"brand-"+v()),e.stylePath&&p(e.stylePath)},[]),(0,d.jsxs)("div",{ref:s,...g(e,[]),id:o,className:f("db-brand",e.className),children:[b?(0,d.jsx)(m.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:b})},v()):null,(0,d.jsxs)("a",{href:null!==(t=e.anchorRef)&&void 0!==t?t:u.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,d.jsx)(m.Fragment,{children:(0,d.jsx)("img",{className:"db-logo",src:null!==(n=e.imgSrc)&&void 0!==n?n:u.src,alt:null!==(l=e.imgAlt)&&void 0!==l?l:"",height:null!==(i=e.imgHeight)&&void 0!==i?i:u.height,width:null!==(r=e.imgWidth)&&void 0!==r?r:u.width})},v()),e.anchorChildren?(0,d.jsx)(m.Fragment,{children:e.children},v()):null]}),e.anchorChildren?null:(0,d.jsx)(m.Fragment,{children:e.children},v())]})}),S=(0,m.forwardRef)(function(e,a){let t=a||(0,m.useRef)(a),[n,l]=(0,m.useState)(()=>E),[i,r]=(0,m.useState)(()=>null);return(0,m.useEffect)(()=>{l(e.id||"section-"+v()),e.stylePath&&r(e.stylePath)},[]),(0,d.jsxs)("section",{ref:t,...g(e,[]),id:n,"data-size":e.size||"medium",className:f("db-section",e.className),children:[i?(0,d.jsx)(m.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:i})},v()):null,(0,d.jsx)("div",{"data-variant":e.variant,children:e.children})]})}),A=(0,m.forwardRef)(function(e,a){let t=a||(0,m.useRef)(a),[n,l]=(0,m.useState)(()=>E),[i,r]=(0,m.useState)(()=>null);return(0,m.useEffect)(()=>{l(e.id||"main-navigation-"+v()),e.stylePath&&r(e.stylePath)},[]),(0,d.jsxs)("nav",{ref:t,...g(e,[]),id:n,className:f("db-main-navigation",e.className),children:[i?(0,d.jsx)(m.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:i})},v()):null,(0,d.jsx)("menu",{children:e.children})]})}),L=[{label:"Home",path:"/"},{label:"Foundations",path:"/foundations",subNavigation:[{label:"Readme",path:"/foundations/readme"},{label:"Colors",path:"/foundations/colors",subNavigation:[{label:"Readme",path:"/foundations/colors/readme"},{label:"Overview",path:"/foundations/colors/overview"},{label:"Color Schemes",path:"/foundations/colors/color-schemes"}]},{label:"Font Sizes",path:"/foundations/font-sizes",subNavigation:[{label:"Readme",path:"/foundations/font-sizes/readme"},{label:"Overview",path:"/foundations/font-sizes/overview"}]},{label:"Icons",path:"/foundations/icons",subNavigation:[{label:"Readme",path:"/foundations/icons/readme"},{label:"Custom Icons",path:"/foundations/icons/custom-icons"},{label:"Overview",path:"/foundations/icons/overview"}]},{label:"Densities",path:"/foundations/densities",subNavigation:[{label:"Readme",path:"/foundations/densities/readme"},{label:"Examples",path:"/foundations/densities/examples"}]},{label:"Variables",path:"/foundations/variables",subNavigation:[{label:"Readme",path:"/foundations/variables/readme"},{label:"Examples",path:"/foundations/variables/examples"}]}]},{label:"Components",path:"/components",subNavigation:[{label:"Readme",path:"/components/readme"},...[{label:"Action",path:"/components/action",subNavigation:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"Data-Display",path:"/components/data-display",subNavigation:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBTooltip",name:"tooltip"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"},{label:"DBAccordion",name:"accordion"},{label:"DBAccordionItem",name:"accordion-item"},{label:"DBTabs",name:"tabs"},{label:"DBTab",name:"tab"}]},{label:"Data-Input",path:"/components/data-input",subNavigation:[{label:"DBCheckbox",name:"checkbox"},{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBSelect",name:"select"},{label:"DBSwitch",name:"switch"},{label:"DBTextarea",name:"textarea"}]},{label:"Feedback",path:"/components/feedback",subNavigation:[{label:"DBNotification",name:"notification"},{label:"DBBadge",name:"badge"}]},{label:"Layout",path:"/components/layout",subNavigation:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"Navigation",path:"/components/navigation",subNavigation:[{label:"DBMainNavigation",name:"main-navigation"},{label:"DBNavigationItem",name:"navigation-item"}]},{label:"Utilities",path:"/components/utilities",subNavigation:[{label:"DBPopover",name:"popover"}]}].map(e=>{var a;return{...e,subNavigation:null==e?void 0:null===(a=e.subNavigation)||void 0===a?void 0:a.map(e=>({label:e.label,path:"/components/".concat(e.name),subNavigation:[{label:"Overview",path:"/components/".concat(e.name,"/overview")},{label:"Properties",path:"/components/".concat(e.name,"/properties")},{label:"How to use",path:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",path:"/components/".concat(e.name,"/migration")}]}))}})]}];var y=t(39097),I=t.n(y);let T=(0,m.forwardRef)(function(e,a){var t;let n=a||(0,m.useRef)(a),[l,i]=(0,m.useState)(()=>E),[r,s]=(0,m.useState)(()=>!1),[o,c]=(0,m.useState)(()=>!1),[u,h]=(0,m.useState)(()=>!0),[b,p]=(0,m.useState)(()=>!1),[_,B]=(0,m.useState)(()=>"sub-navigation-"+v()),[j,w]=(0,m.useState)(()=>null);return(0,m.useEffect)(()=>{i(e.id||"navigation-item-"+v()),s(!0),e.stylePath&&w(e.stylePath)},[]),(0,m.useEffect)(()=>{void 0!==e.subNavigationExpanded&&p(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,m.useEffect)(()=>{if(void 0!==e.areaPopup)c(e.areaPopup),h(o);else if(r&&document&&_){var a;let e=null===(a=document)||void 0===a?void 0:a.getElementById(_);if(e){let a=e.children;(null==a?void 0:a.length)>0?(c(!0),N(e)||e.setAttribute("data-outside-vx","true"),x(e)||e.setAttribute("data-outside-vy","true")):h(!1)}}},[r,e.areaPopup]),(0,d.jsxs)("li",{ref:n,...g(e,[]),id:l,className:f("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[j?(0,d.jsx)(m.Fragment,{children:(0,d.jsx)("link",{rel:"stylesheet",href:j})},v()):null,u?null:(0,d.jsx)(m.Fragment,{children:e.children},v()),u?(0,d.jsxs)(m.Fragment,{children:[(0,d.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":o,"aria-expanded":b,disabled:e.disabled,onClick:a=>{e.onClick&&e.onClick(a),o&&p(!0)},children:e.children}),(0,d.jsxs)("menu",{className:"db-sub-navigation",id:_,children:[o?(0,d.jsx)(m.Fragment,{children:(0,d.jsx)("div",{className:"db-mobile-navigation-back",children:(0,d.jsx)(R,{icon:"arrow_back",variant:"ghost",id:e.backButtonId,onClick:e=>{e.stopPropagation(),p(!1)},children:null!==(t=e.backButtonText)&&void 0!==t?t:"Back"})})},v()):null,e.slotSubNavigation]})]},v()):null]})}),C=(e,a)=>{var t;return"/"===a.path?"/"===e:e.includes("".concat(a.path,"/"))||e===a.path||!!(null===(t=a.subNavigation)||void 0===t?void 0:t.find(a=>e.includes("".concat(a.path,"/"))))},D=e=>{var a;let{navItem:t}=e,n=C((0,u.useRouter)().pathname,t);return(0,d.jsx)(T,{active:n,backButtonText:"Back to ".concat(t.label),slotSubNavigation:t.subNavigation&&(0,d.jsx)(d.Fragment,{children:null==t?void 0:t.subNavigation.map(e=>(0,d.jsx)(D,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,d.jsx)(I(),{href:null!==(a=t.path)&&void 0!==a?a:"",children:t.label},"router-path-".concat(t.path))})};var k=()=>(0,d.jsx)(A,{children:L.map(e=>(0,d.jsx)(D,{navItem:e},"router-path-".concat(e.path)))}),F=t(35368),G=t(73178);let P=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},U="db-ui",O="mono";var M=()=>{let e=(0,u.useRouter)(),[a,t]=(0,m.useState)(),[n,l]=(0,m.useState)(),i=a=>{let t=e.basePath,n=a.find(e=>t.includes(e));n&&l(n)},r=(e,a)=>{let n=[],l=[],i=[],r=[],s=[],o=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?l.push(e):e.startsWith("fix")||e.startsWith("bugfix")?i.push(e):e.startsWith("refactor")?r.push(e):/^\d*-/.test(e)?s.push(e):e.startsWith("docs")?o.push(e):n.push(e);t({others:n,features:l,docs:o,refactors:r,issues:s,bugfixes:i,versions:e})};(0,m.useEffect)(()=>{(async()=>{let e=await P("https://api.github.com/repos/".concat(U,"/").concat(O,"/branches")),a=(await P("https://api.github.com/repos/".concat(U,"/").concat(O,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));i(t),i(a),r(a,t)})().catch(e=>{console.error(e)})},[]);let s=a=>{let t=e.pathname,n=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,F.sanitize)("https://".concat(U,".github.io/").concat(O).concat(n?"/version":"/review","/").concat(a).concat(t)))};return a?(0,d.jsx)(G.kr,{className:"version-switcher",label:"Version switcher",variant:"floating",value:n,onChange:e=>{s(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,d.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,d.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null};let V=e=>{let{children:a}=e,[t,n]=(0,m.useState)(!1),[l,i]=(0,m.useState)(!1),[r,s]=(0,m.useState)(!1),[o,c]=(0,m.useState)(!1),[h,b]=(0,m.useState)(),v=(0,u.useRouter)();return(0,m.useEffect)(()=>{if(v.query&&(v.query.fullscreen&&n("true"===v.query.fullscreen),v.query.noh1&&i("true"===v.query.noh1),v.query.properties&&s("true"===v.query.properties),v.query.current)){let a=Array.isArray(v.query.current)?v.query.current[0]:v.query.current;if(h!==a){var e;b(a),null===(e=document.querySelector("#".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}},[v]),(0,d.jsxs)(d.Fragment,{children:[v.isReady&&t&&(0,d.jsx)("div",{className:"".concat(l?"noh1":""," ").concat(r?"is-properties":""),children:a}),v.isReady&&!t&&(0,d.jsx)(_,{fadeIn:!0,type:"fixedHeaderFooter",slotHeader:(0,d.jsx)(j,{drawerOpen:o,onToggle:c,slotBrand:(0,d.jsx)(w,{imgSrc:"".concat("/mono/review/feat-switch","/assets/images/db_logo.svg"),title:"DB-UI Mono",anchorChildren:!0,children:"DB-UI Mono"}),slotCallToAction:(0,d.jsx)(R,{icon:"search",variant:"ghost",noText:!0,children:"Search"}),slotActionBar:(0,d.jsx)(M,{}),children:(0,d.jsx)(k,{})}),children:(0,d.jsx)(S,{size:"none",variant:"large",children:a})})]})};var W=b()(async()=>V,{ssr:!1})}}]);