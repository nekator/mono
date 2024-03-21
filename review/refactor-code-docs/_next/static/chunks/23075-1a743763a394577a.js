"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23075],{23075:function(e,a,t){t.d(a,{Z:function(){return z}});var n,i,r,l,o,s,d,c=t(52322),u=t(5632),h=t(25237),b=t.n(h),m=t(2784);let p=()=>{var e,a;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(a=window.crypto)||void 0===a?void 0:a.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},v=(e,a)=>{Object.values(e.children).forEach(e=>{e.setAttribute(a.key,a.value),e.children.length>0&&v(e,a)})},f=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];let n="";return a.forEach((e,a)=>{if(e){if("string"==typeof e)n+="".concat(e," ");else for(let a in e)e[a]&&(n+="".concat(a," "))}}),n.trim()},g=(e,a)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!a.includes(e)).reduce((a,t)=>(a[t]=e[t],a),{}),N=e=>{let{left:a,right:t}=e.getBoundingClientRect(),{innerWidth:n}=window;return a>=0&&t<=n},x=e=>{let{top:a,bottom:t}=e.getBoundingClientRect(),{innerHeight:n}=window;return a>=0&&t<=n},R=(0,m.forwardRef)(function(e,a){let t=a||(0,m.useRef)(a),[n,i]=(0,m.useState)(()=>!1);return(0,m.useEffect)(()=>{i(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{i(!0)}):i(!0)},[]),(0,c.jsxs)("div",{ref:t,...g(e,[]),id:e.id,className:f("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":n,children:[e.slotHeader,(0,c.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})}),A=(0,m.forwardRef)(function(e,a){let t=a||(0,m.useRef)(a);return(0,c.jsx)("button",{ref:t,...g(e,[]),id:e.id,className:f("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:a=>{e.onClick&&e.onClick(a)},children:e.children})}),w="OVERWRITE_DEFAULT_ID";(n=l||(l={})).FUNCTIONAL="functional",n.REGULAR="regular",n.EXPRESSIVE="expressive",Object.entries(l).map(e=>{let[,a]=e;return a}),(o||(o={})).PRIMARY="primary",(i=s||(s={})).BASE="base",i.BASE_STRONG="base-strong",i.BASE_TRANSPARENT_SEMI="base-transparent-semi",i.BASE_TRANSPARENT_FULL="base-transparent-full",i.NEUTRAL="neutral",i.NEUTRAL_STRONG="neutral-strong",i.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",i.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",i.BRAND="brand",i.BRAND_TRANSPARENT_SEMI="brand-transparent-semi",i.BRAND_TRANSPARENT_FULL="brand-transparent-full",i.SUCCESSFUL="successful",i.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",i.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",i.CRITICAL="critical",i.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",i.CRITICAL_TRANSPARENT_Full="critical-transparent-full",i.WARNING="warning",i.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",i.WARNING_TRANSPARENT_FULL="warning-transparent-full",i.INFORMATIONAL="informational",i.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",i.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",Object.entries(s).map(e=>{let[,a]=e;return a}),Object.entries(o).map(e=>{let[,a]=e;return a}),(r=d||(d={})).CRITICAL="critical",r.INFORMATIONAL="informational",r.WARNING="warning",r.SUCCESSFUL="successful",Object.entries(d).map(e=>{let[,a]=e;return a});let S=(0,m.forwardRef)(function(e,a){var t;let n=a||(0,m.useRef)(a),i=(0,m.useRef)(null);function r(a){"Escape"===a.key&&a.preventDefault(),("close"===a||"Escape"===a.key||"DIALOG"===a.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function l(){(null==n?void 0:n.current)&&(e.open&&!n.current.open&&(i.current&&(i.current.hidden=!1),"none"===e.backdrop?n.current.show():n.current.showModal()),!e.open&&n.current.open&&(i.current&&(i.current.hidden=!0),setTimeout(()=>{var e;i.current&&(i.current.hidden=!1),null===(e=n.current)||void 0===e||e.close()},401)))}return(0,m.useEffect)(()=>{l()},[]),(0,m.useEffect)(()=>{l()},[e.open]),(0,c.jsx)("dialog",{className:"db-drawer",id:e.id,ref:n,...g(e,["onClose"]),onClick:e=>{r(e)},onKeyDown:e=>r(e),"data-backdrop":e.backdrop,children:(0,c.jsxs)("article",{ref:i,className:f("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,c.jsxs)("header",{className:"db-drawer-header",children:[(0,c.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(A,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>r("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:"Close Button"})}):null]}),(0,c.jsx)("div",{className:"db-drawer-content",children:e.children})]})})}),j=(0,m.forwardRef)(function(e,a){var t;let n=a||(0,m.useRef)(a),[i,r]=(0,m.useState)(()=>w),[l,o]=(0,m.useState)(()=>!1),[s,d]=(0,m.useState)(()=>!1),[u,h]=(0,m.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function b(){e.onToggle&&e.onToggle(!e.drawerOpen)}return(0,m.useEffect)(()=>{o(!0),r(e.id||"header-"+p())},[]),(0,m.useEffect)(()=>{if(l&&document&&i&&e.forceMobile){let e=document.getElementById(i);e&&v(e,{key:"data-force-mobile",value:"true"}),d(!0)}},[l]),(0,c.jsxs)("header",{ref:n,...g(e,[]),className:f("db-header",e.className),id:i,"data-on-forcing-mobile":e.forceMobile&&!s,children:[(0,c.jsxs)(S,{spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>b(),children:[(0,c.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,c.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,c.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,c.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,c.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation}),(0,c.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,c.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,c.jsxs)("div",{className:"db-header-navigation-container",children:[(0,c.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,c.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,c.jsxs)("div",{className:"db-header-action-container",children:[(0,c.jsx)("div",{className:"db-header-burger-menu-container",children:(0,c.jsx)(A,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>b(),children:null!==(t=e.burgerMenuLabel)&&void 0!==t?t:u.burgerMenuLabel})}),(0,c.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]})]})]})}),E=(0,m.forwardRef)(function(e,a){var t,n,i,r,l;let o=a||(0,m.useRef)(a),[s,d]=(0,m.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"}));return(0,c.jsxs)("div",{ref:o,...g(e,[]),id:e.id,className:f("db-brand",e.className),children:[(0,c.jsxs)("a",{href:null!==(t=e.anchorRef)&&void 0!==t?t:s.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("img",{className:"db-logo",src:null!==(n=e.imgSrc)&&void 0!==n?n:s.src,alt:null!==(i=e.imgAlt)&&void 0!==i?i:"",height:null!==(r=e.imgHeight)&&void 0!==r?r:s.height,width:null!==(l=e.imgWidth)&&void 0!==l?l:s.width})}),e.anchorChildren?(0,c.jsx)(c.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,c.jsx)(c.Fragment,{children:e.children})]})}),T=(0,m.forwardRef)(function(e,a){let t=a||(0,m.useRef)(a),[n,i]=(0,m.useState)(()=>w);return(0,m.useEffect)(()=>{i(e.id||"section-"+p())},[]),(0,c.jsx)("section",{ref:t,...g(e,[]),id:n,"data-size":e.size||"medium",className:f("db-section",e.className),children:(0,c.jsx)("div",{"data-variant":e.variant,children:e.children})})}),B=(0,m.forwardRef)(function(e,a){let t=a||(0,m.useRef)(a),[n,i]=(0,m.useState)(()=>w);return(0,m.useEffect)(()=>{i(e.id||"main-navigation-"+p())},[]),(0,c.jsx)("nav",{ref:t,...g(e,[]),id:n,className:f("db-main-navigation",e.className),children:(0,c.jsx)("menu",{children:e.children})})}),I=[{label:"Home",path:"/"},{label:"Foundations",path:"/foundations",subNavigation:[{label:"Readme",path:"/foundations/readme"},{label:"Colors",path:"/foundations/colors",subNavigation:[{label:"Readme",path:"/foundations/colors/readme"},{label:"Overview",path:"/foundations/colors/overview"},{label:"Color Schemes",path:"/foundations/colors/color-schemes"}]},{label:"Font Sizes",path:"/foundations/font-sizes",subNavigation:[{label:"Readme",path:"/foundations/font-sizes/readme"},{label:"Overview",path:"/foundations/font-sizes/overview"}]},{label:"Icons",path:"/foundations/icons",subNavigation:[{label:"Readme",path:"/foundations/icons/readme"},{label:"Custom Icons",path:"/foundations/icons/custom-icons"},{label:"Overview",path:"/foundations/icons/overview"}]},{label:"Tonalities",path:"/foundations/tonalities",subNavigation:[{label:"Readme",path:"/foundations/tonalities/readme"},{label:"Examples",path:"/foundations/tonalities/examples"}]},{label:"Variables",path:"/foundations/variables",subNavigation:[{label:"Readme",path:"/foundations/variables/readme"},{label:"Examples",path:"/foundations/variables/examples"}]}]},{label:"Components",path:"/components",subNavigation:[{label:"Readme",path:"/components/readme"},...[{label:"Action",path:"/components/action",subNavigation:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"Data-Display",path:"/components/data-display",subNavigation:[{label:"DBBrand",name:"brand"},{label:"DBTooltip",name:"tooltip"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"},{label:"DBAccordion",name:"accordion"},{label:"DBAccordionItem",name:"accordion-item"},{label:"DBTabs",name:"tabs"},{label:"DBTab",name:"tab"}]},{label:"Data-Input",path:"/components/data-input",subNavigation:[{label:"DBCheckbox",name:"checkbox"},{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBSelect",name:"select"},{label:"DBTextarea",name:"textarea"}]},{label:"Feedback",path:"/components/feedback",subNavigation:[{label:"DBAlert",name:"alert"},{label:"DBBadge",name:"badge"}]},{label:"Layout",path:"/components/layout",subNavigation:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBSection",name:"section"}]},{label:"Navigation",path:"/components/navigation",subNavigation:[{label:"DBMainNavigation",name:"main-navigation"},{label:"DBNavigationItem",name:"navigation-item"}]},{label:"Utilities",path:"/components/utilities",subNavigation:[{label:"DBPopover",name:"popover"}]}].map(e=>{var a;return{...e,subNavigation:null==e?void 0:null===(a=e.subNavigation)||void 0===a?void 0:a.map(e=>({label:e.label,path:"/components/".concat(e.name),subNavigation:[{label:"Overview",path:"/components/".concat(e.name,"/overview")},{label:"Properties",path:"/components/".concat(e.name,"/properties")},{label:"How to use",path:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",path:"/components/".concat(e.name,"/migration")}]}))}})]}];var C=t(39097),y=t.n(C);let D=(0,m.forwardRef)(function(e,a){var t;let n=a||(0,m.useRef)(a),[i,r]=(0,m.useState)(()=>!1),[l,o]=(0,m.useState)(()=>!1),[s,d]=(0,m.useState)(()=>!0),[u,h]=(0,m.useState)(()=>!1),[b,v]=(0,m.useState)(()=>"sub-navigation-"+p());return(0,m.useEffect)(()=>{r(!0)},[]),(0,m.useEffect)(()=>{void 0!==e.subNavigationExpanded&&h(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,m.useEffect)(()=>{if(void 0!==e.areaPopup)o(e.areaPopup),d(l);else if(i&&document&&b){var a;let e=null===(a=document)||void 0===a?void 0:a.getElementById(b);if(e){let a=e.children;(null==a?void 0:a.length)>0?(o(!0),N(e)||e.setAttribute("data-outside-vx","true"),x(e)||e.setAttribute("data-outside-vy","true")):d(!1)}}},[i,e.areaPopup]),(0,c.jsxs)("li",{ref:n,...g(e,[]),id:e.id,className:f("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[s?null:(0,c.jsx)(c.Fragment,{children:e.children}),s?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":l,"aria-expanded":u,disabled:e.disabled,onClick:a=>{e.onClick&&e.onClick(a),l&&h(!0)},children:e.children}),(0,c.jsxs)("menu",{className:"db-sub-navigation",id:b,children:[l?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"db-mobile-navigation-back",children:(0,c.jsx)(A,{icon:"arrow_back",variant:"text",id:e.backButtonId,onClick:e=>{e.stopPropagation(),h(!1)},children:null!==(t=e.backButtonText)&&void 0!==t?t:"Back"})})}):null,e.slotSubNavigation]})]}):null]})}),_=(e,a)=>{var t;return"/"===a.path?"/"===e:e.includes("".concat(a.path,"/"))||e===a.path||!!(null===(t=a.subNavigation)||void 0===t?void 0:t.find(a=>e.includes("".concat(a.path,"/"))))},k=e=>{var a;let{navItem:t}=e,n=_((0,u.useRouter)().pathname,t);return(0,c.jsx)(D,{active:n,backButtonText:"Back to ".concat(t.label),slotSubNavigation:t.subNavigation&&(0,c.jsx)(c.Fragment,{children:null==t?void 0:t.subNavigation.map(e=>(0,c.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:t.subNavigation?t.label:(0,c.jsx)(y(),{href:null!==(a=t.path)&&void 0!==a?a:"",children:t.label},"router-path-".concat(t.path))})};var L=()=>(0,c.jsx)(B,{children:I.map(e=>(0,c.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),F=t(35368),U=t(86095);let O=async e=>{try{let a=await fetch(e);return await a.json()}catch(e){console.error(e)}return[]},M="db-ui",P="mono";var W=()=>{let e=(0,u.useRouter)(),[a,t]=(0,m.useState)(),[n,i]=(0,m.useState)(),r=a=>{let t=e.basePath,n=a.find(e=>t.includes(e));n&&i(n)},l=(e,a)=>{let n=[],i=[],r=[],l=[],o=[],s=[];for(let e of a)e.startsWith("feat")||e.startsWith("feature")?i.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?l.push(e):/^\d*-/.test(e)?o.push(e):e.startsWith("docs")?s.push(e):n.push(e);t({others:n,features:i,docs:s,refactors:l,issues:o,bugfixes:r,versions:e})};(0,m.useEffect)(()=>{(async()=>{let e=await O("https://api.github.com/repos/".concat(M,"/").concat(P,"/branches")),a=(await O("https://api.github.com/repos/".concat(M,"/").concat(P,"/tags"))).map(e=>e.name),t=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));r(t),r(a),l(a,t)})().catch(e=>{console.error(e)})},[]);let o=a=>{let t=e.pathname,n=3===a.split(".").length&&a.startsWith("v");window.location.replace((0,F.sanitize)("https://".concat(M,".github.io/").concat(P).concat(n?"/version":"/review","/").concat(a).concat(t)))};return a?(0,c.jsx)(U.kr,{className:"version-switcher",label:"Version switcher",labelVariant:"floating",value:n,onChange:e=>{o(e.target.value)},children:Object.entries(a).filter(e=>{let[a,t]=e;return(null==t?void 0:t.length)>0}).map(e=>{let[a,t]=e;return(0,c.jsx)("optgroup",{label:a,children:t.slice(0,15).map((e,t)=>(0,c.jsx)("option",{value:e,children:e},"".concat(a,"-").concat(e,"-").concat(t)))},a)})}):null};let q=e=>{let{children:a}=e,[t,n]=(0,m.useState)(!1),[i,r]=(0,m.useState)(!1),[l,o]=(0,m.useState)(!1),[s,d]=(0,m.useState)(!1),[h,b]=(0,m.useState)(),p=(0,u.useRouter)();return(0,m.useEffect)(()=>{if(p.query&&(p.query.fullscreen&&n("true"===p.query.fullscreen),p.query.noh1&&r("true"===p.query.noh1),p.query.properties&&o("true"===p.query.properties),p.query.current)){let a=Array.isArray(p.query.current)?p.query.current[0]:p.query.current;if(h!==a){var e;b(a),null===(e=document.querySelector("#".concat(a)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}},[p]),(0,c.jsxs)(c.Fragment,{children:[p.isReady&&t&&(0,c.jsx)("div",{className:"".concat(i?"noh1":""," ").concat(l?"is-properties":""),children:a}),p.isReady&&!t&&(0,c.jsx)(R,{fadeIn:!0,type:"fixedHeaderFooter",slotHeader:(0,c.jsx)(j,{drawerOpen:s,onToggle:d,slotBrand:(0,c.jsx)(E,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",title:"DB-UI Mono",anchorChildren:!0,children:"DB-UI Mono"}),slotCallToAction:(0,c.jsx)(A,{icon:"search",variant:"text",noText:!0,children:"Search"}),slotActionBar:(0,c.jsx)(W,{}),children:(0,c.jsx)(L,{})}),children:(0,c.jsx)(T,{size:"none",variant:"large",children:a})})]})};var z=b()(async()=>q,{ssr:!1})}}]);