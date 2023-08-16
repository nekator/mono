"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8338],{18338:function(e,a,n){n.d(a,{Z:function(){return L}});var t,l,i,r,s,o,d,c=n(52322),u=n(5632),h=n(2784);let m=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()},b=(e,a)=>{let n=e.children;Object.values(n).forEach(e=>{e.setAttribute(a.key,a.value),e.children.length>0&&b(e,a)})},p=function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];let t="";return a.forEach((e,a)=>{if(e){if("string"==typeof e)t+="".concat(e," ");else for(let a in e)e[a]&&(t+="".concat(a," "))}}),t.trim()},v=(0,h.forwardRef)(function(e,a){let[n,t]=(0,h.useState)(()=>!1),[l,i]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{t(!e.fadeIn),e.stylePath&&i(e.stylePath),document&&e.fadeIn?document.fonts.ready.then(()=>{t(!0)}):t(!0)},[]),(0,c.jsxs)("div",{ref:a,className:p("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":n,children:[l?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:l})}):null,e.slotHeader,(0,c.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})}),f=(0,h.forwardRef)(function(e,a){function n(e){return!!(e&&"_"!==e&&"none"!==e)}let[t,l]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,c.jsxs)("button",{id:e.id,ref:a,className:p("db-button",e.className,{"is-icon-text-replace":n(e.icon)&&e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":n(e.icon)?e.icon:void 0,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:a=>{e.onClick&&e.onClick(a)},children:[t?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})}),N="OVERWRITE_DEFAULT_ID";(t=r||(r={})).FUNCTIONAL="functional",t.REGULAR="regular",t.EXPRESSIVE="expressive",Object.entries(r).map(e=>{let[,a]=e;return a}),(s||(s={})).PRIMARY="primary",(l=o||(o={})).NEUTRAL_0="neutral-0",l.NEUTRAL_1="neutral-1",l.NEUTRAL_2="neutral-2",l.NEUTRAL_3="neutral-3",l.NEUTRAL_4="neutral-4",l.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",l.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",l.PRIMARY="primary",l.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",l.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",l.SECONDARY="secondary",l.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",l.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",l.SUCCESSFUL="successful",l.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",l.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",l.CRITICAL="critical",l.CRITICAL_TRANSPARENT_Full="critical-transparent-full",l.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",l.WARNING="warning",l.WARNING_TRANSPARENT_FULL="warning-transparent-full",l.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",l.INFORMATIONAL="informational",l.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",l.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi",Object.entries(o).map(e=>{let[,a]=e;return a}),Object.entries(s).map(e=>{let[,a]=e;return a}),(i=d||(d={})).CRITICAL="critical",i.INFORMATIONAL="informational",i.WARNING="warning",i.SUCCESSFUL="successful",Object.entries(d).map(e=>{let[,a]=e;return a});let g=(0,h.forwardRef)(function(e,a){var n;let t=(0,h.useRef)(a),l=(0,h.useRef)(null),[i,r]=(0,h.useState)(()=>N);function s(a){"Escape"===a.key&&a.preventDefault(),("close"===a||"Escape"===a.key||"DIALOG"===a.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function o(){t.current&&(e.open&&!t.current.open&&(l.current&&(l.current.hidden=!1),"none"===e.backdrop?t.current.show():t.current.showModal()),!e.open&&t.current.open&&(l.current&&(l.current.hidden=!0),setTimeout(()=>{var e;l.current&&(l.current.hidden=!1),null===(e=t.current)||void 0===e||e.close()},401)))}let[d,u]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{r(e.id||"drawer-"+m()),e.stylePath&&u(e.stylePath),o()},[]),(0,h.useEffect)(()=>{o()},[e.open]),(0,c.jsxs)("dialog",{className:"db-drawer",id:i,ref:t,onClick:e=>{s(e)},onKeyDown:e=>s(e),"data-backdrop":e.backdrop,children:[d?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:d})}):null,(0,c.jsxs)("article",{ref:l,className:p("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,c.jsxs)("header",{className:"db-drawer-header",children:[e.slotDrawerHeader,e.withCloseButton?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(f,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>s("close"),children:null!==(n=e.closeButtonText)&&void 0!==n?n:"Close Button"})}):null]}),(0,c.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})}),x=(0,h.forwardRef)(function(e,a){var n;let[t,l]=(0,h.useState)(()=>N),[i,r]=(0,h.useState)(()=>!1),[s,o]=(0,h.useState)(()=>!1),[d,u]=(0,h.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function v(){e.onToggle&&e.onToggle(!e.drawerOpen)}let[x,j]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{r(!0),l(e.id||"header-"+m()),e.stylePath&&j(e.stylePath)},[]),(0,h.useEffect)(()=>{if(i&&document&&t&&e.forceMobile){let e=document.getElementById(t);e&&b(e,{key:"force-mobile",value:""}),o(!0)}},[i]),(0,c.jsxs)("header",{ref:a,className:p("db-header",e.className),id:t,"data-on-forcing-mobile":e.forceMobile&&!s,children:[x?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:x})}):null,(0,c.jsxs)(g,{"data-hide-on":"desktop",spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>v(),children:[(0,c.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,c.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,c.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,c.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,c.jsx)("div",{className:"db-header-meta-navigation","data-hide-on":"mobile",children:e.slotMetaNavigation}),(0,c.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,c.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,c.jsxs)("div",{className:"db-header-navigation-container",children:[(0,c.jsx)("div",{className:"db-header-navigation","data-hide-on":"mobile",children:e.children}),(0,c.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,c.jsxs)("div",{className:"db-header-action-container",children:[(0,c.jsx)("div",{"data-hide-on":"desktop",children:(0,c.jsx)(f,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>v(),children:null!==(n=e.burgerMenuLabel)&&void 0!==n?n:d.burgerMenuLabel})}),(0,c.jsx)("div",{className:"db-header-action-bar","data-hide-on":"mobile",children:e.slotActionBar})]})]})]})}),j=(0,h.forwardRef)(function(e,a){var n,t,l,i,r;let[s,o]=(0,h.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"})),[d,u]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&u(e.stylePath)},[]),(0,c.jsxs)("div",{ref:a,className:p("db-brand",e.className),children:[d?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:d})}):null,(0,c.jsxs)("a",{href:null!==(n=e.anchorRef)&&void 0!==n?n:s.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("img",{className:"db-logo",src:null!==(t=e.imgSrc)&&void 0!==t?t:s.src,alt:null!==(l=e.imgAlt)&&void 0!==l?l:"",height:null!==(i=e.imgHeight)&&void 0!==i?i:s.height,width:null!==(r=e.imgWidth)&&void 0!==r?r:s.width})}),e.anchorChildren?(0,c.jsx)(c.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,c.jsx)(c.Fragment,{children:e.children})]})}),R=(0,h.forwardRef)(function(e,a){let[n,t]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&t(e.stylePath)},[]),(0,c.jsxs)("section",{ref:a,"data-size":e.size||"medium",className:p("db-section",e.className),children:[n?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:n})}):null,(0,c.jsx)("div",{"data-variant":e.variant,children:e.children})]})}),A=()=>{let e=(0,h.useRef)(null),[a,n]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{var a;let t=(null===(a=null==e?void 0:e.current)||void 0===a?void 0:a.innerHTML)==="";t&&n(!0)},[]),[a,e]};var E=e=>{let{children:a,element:n="div",...t}=e,[l,i]=A();return l?(0,h.createElement)(n,{...t,children:a}):(0,h.createElement)(n,{...t,ref:i,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let S=(0,h.forwardRef)(function(e,a){let[n,t]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{e.stylePath&&t(e.stylePath)},[]),(0,c.jsxs)("nav",{ref:a,className:p("db-main-navigation",e.className),children:[n?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:n})}):null,(0,c.jsx)("menu",{children:e.children})]})}),T=[{label:"Home",path:"/"},{label:"Foundations",path:"/foundations",subNavigation:[{label:"Readme",path:"/foundations/readme"},{label:"Colors",path:"/foundations/colors",subNavigation:[{label:"Readme",path:"/foundations/colors/readme"},{label:"Examples",path:"/foundations/colors/examples"}]},{label:"Icons",path:"/foundations/icons"}]},{label:"Components",path:"/components",subNavigation:[{label:"Readme",path:"/components/readme"},...[{label:"Action",path:"/components/action",subNavigation:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"Data-Display",path:"/components/data-display",subNavigation:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"Data-Input",path:"/components/data-input",subNavigation:[{label:"DBCheckbox",name:"checkbox"},{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBSelect",name:"select"}]},{label:"Feedback",path:"/components/feedback",subNavigation:[{label:"DBAlert",name:"alert"},{label:"DBBadge",name:"badge"}]},{label:"Layout",path:"/components/layout",subNavigation:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"Navigation",path:"/components/navigation",subNavigation:[{label:"DBMainNavigation",name:"main-navigation"},{label:"DBNavigationItem",name:"navigation-item"}]}].map(e=>{var a;return{...e,subNavigation:null==e?void 0:null===(a=e.subNavigation)||void 0===a?void 0:a.map(e=>({label:e.label,path:"/components/".concat(e.name),subNavigation:[{label:"Overview",path:"/components/".concat(e.name,"/overview")},{label:"Properties",path:"/components/".concat(e.name,"/properties")},{label:"Examples",path:"/components/".concat(e.name,"/examples")},{label:"How to use",path:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",path:"/components/".concat(e.name,"/migration")}]}))}})]}];var y=n(39097),I=n.n(y);let w=(0,h.forwardRef)(function(e,a){var n,t;let[l,i]=(0,h.useState)(()=>!1),[r,s]=(0,h.useState)(()=>!1),[o,d]=(0,h.useState)(()=>!0),[u,b]=(0,h.useState)(()=>!1),[v,N]=(0,h.useState)(()=>"sub-navigation-"+m()),[g,x]=(0,h.useState)(()=>null);return(0,h.useEffect)(()=>{i(!0),e.stylePath&&x(e.stylePath)},[]),(0,h.useEffect)(()=>{void 0!==e.subNavigationExpanded&&b(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,h.useEffect)(()=>{if(void 0!==e.areaPopup)s(e.areaPopup),d(r);else if(l&&document&&v){var a;let e=null===(a=document)||void 0===a?void 0:a.getElementById(v);if(e){let a=e.children;(null==a?void 0:a.length)>0?s(!0):d(!1)}}},[l,e.areaPopup]),(0,c.jsxs)("li",{ref:a,className:p("db-navigation-item",e.className),"data-width":e.width,"data-icon":(t=e.icon)&&"_"!==t&&"none"!==t?e.icon:void 0,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[g?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("link",{rel:"stylesheet",href:g})}):null,o?null:(0,c.jsx)(c.Fragment,{children:e.children}),o?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":r,"aria-expanded":u,disabled:e.disabled,onClick:a=>{e.onClick&&e.onClick(a),r&&b(!0)},children:e.children}),(0,c.jsxs)("menu",{className:"db-sub-navigation",id:v,children:[r?(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"db-mobile-navigation-back",children:(0,c.jsx)(f,{icon:"arrow-back",variant:"text",id:e.backButtonId,onClick:e=>{e.stopPropagation(),b(!1)},children:null!==(n=e.backButtonText)&&void 0!==n?n:"Back"})})}):null,e.slotSubNavigation]})]}):null]})}),k=e=>{var a,n,t,l,i,r,s;let{navItem:o}=e,d=(0,u.useRouter)(),h="/"===o.path?"/"===d.pathname:d.pathname.includes(null!==(t=o.path)&&void 0!==t?t:"")||!!(null===(a=o.subNavigation)||void 0===a?void 0:a.find(e=>d.pathname.includes(null!==(l=e.path)&&void 0!==l?l:"")))||!!(null===(n=o.subNavigation)||void 0===n?void 0:n.find(e=>{var a;return null===(a=e.subNavigation)||void 0===a?void 0:a.find(e=>d.pathname.includes(null!==(i=e.path)&&void 0!==i?i:"")&&d.pathname.includes(null!==(r=o.path)&&void 0!==r?r:""))}));return(0,c.jsx)(w,{active:h,backButtonText:"Back to ".concat(o.label),slotSubNavigation:o.subNavigation&&(0,c.jsx)(c.Fragment,{children:null==o?void 0:o.subNavigation.map(e=>(0,c.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),children:o.subNavigation?o.label:(0,c.jsx)(I(),{href:null!==(s=o.path)&&void 0!==s?s:"",children:o.label},"router-path-".concat(o.path))})};var C=()=>(0,c.jsx)(S,{children:T.map(e=>(0,c.jsx)(k,{navItem:e},"router-path-".concat(e.path)))}),L=e=>{let{children:a}=e,[n,t]=(0,h.useState)(!1),[l,i]=(0,h.useState)(!1),[r,s]=(0,h.useState)(!1),[o,d]=(0,h.useState)(!1),m=(0,u.useRouter)();return(0,h.useEffect)(()=>{m.query&&(t("true"===m.query.fullscreen),i("true"===m.query.noh1),s("true"===m.query.properties))},[m]),(0,c.jsxs)(E,{children:[m.isReady&&n&&(0,c.jsx)("div",{className:"".concat(l?"noh1":""," ").concat(r?"is-properties":""),children:a}),m.isReady&&!n&&(0,c.jsx)(v,{className:"db-bg-neutral-0",fadeIn:!0,type:"fixedHeaderFooter",slotHeader:(0,c.jsx)(x,{drawerOpen:o,onToggle:d,slotBrand:(0,c.jsx)(j,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",title:"DB-UI Mono",anchorChildren:!0,children:"DB-UI Mono"}),slotMetaNavigation:(0,c.jsxs)(c.Fragment,{children:["/* TODO: Add github version switcher */",(0,c.jsx)("a",{href:"#",children:"Link1"}),(0,c.jsx)("a",{href:"#",children:"Link2"}),(0,c.jsx)("a",{href:"#",children:"Link3"})]}),slotCallToAction:(0,c.jsx)(f,{icon:"search",variant:"text",noText:!0,children:"Search"}),slotActionBar:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(f,{icon:"account",variant:"text",noText:!0,children:"Profile"}),(0,c.jsx)(f,{icon:"alert",variant:"text",noText:!0,children:"Notification"}),(0,c.jsx)(f,{icon:"help",variant:"text",noText:!0,children:"Help"})]}),children:(0,c.jsx)(C,{})}),children:(0,c.jsx)(R,{size:"none",children:a})})]})}}}]);