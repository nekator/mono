"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97335],{10326:function(e,t,a){var n=a(52322),i=a(2784),r=a(43251);let l=(0,i.forwardRef)(function(e,t){let a=t||(0,i.useRef)(t);return(0,n.jsx)("button",{ref:a,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-button",e.className),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,"data-no-text":e.noText,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:t=>{e.onClick&&e.onClick(t)},children:e.children})});t.Z=l},55482:function(e,t,a){var n,i,r,l,o,s,c;a.d(t,{IY:function(){return d},YP:function(){return u},ce:function(){return h}});let d="OVERWRITE_DEFAULT_ID",u="Back",h="Close Button";(o=n||(n={})).FUNCTIONAL="functional",o.REGULAR="regular",o.EXPRESSIVE="expressive",Object.entries(n).map(e=>{let[,t]=e;return t}),(i||(i={})).PRIMARY="primary",(s=r||(r={})).NEUTRAL_BG_LEVEL_1="neutral-bg-lvl-1",s.NEUTRAL_BG_LEVEL_2="neutral-bg-lvl-2",s.NEUTRAL_BG_LEVEL_3="neutral-bg-lvl-3",s.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",s.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",s.BRAND_BG_LEVEL_1="brand-bg-lvl-1",s.BRAND_BG_LEVEL_2="brand-bg-lvl-2",s.BRAND_BG_LEVEL_3="brand-bg-lvl-3",s.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",s.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",s.SUCCESSFUL_BG_LEVEL_1="successful-bg-lvl-1",s.SUCCESSFUL_BG_LEVEL_2="successful-bg-lvl-2",s.SUCCESSFUL_BG_LEVEL_3="successful-bg-lvl-3",s.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",s.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",s.CRITICAL_BG_LEVEL_1="critical-bg-lvl-1",s.CRITICAL_BG_LEVEL_2="critical-bg-lvl-2",s.CRITICAL_BG_LEVEL_3="critical-bg-lvl-3",s.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",s.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",s.WARNING_BG_LEVEL_1="warning-bg-lvl-1",s.WARNING_BG_LEVEL_2="warning-bg-lvl-2",s.WARNING_BG_LEVEL_3="warning-bg-lvl-3",s.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",s.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",s.INFORMATIONAL_BG_LEVEL_1="informational-bg-lvl-1",s.INFORMATIONAL_BG_LEVEL_2="informational-bg-lvl-2",s.INFORMATIONAL_BG_LEVEL_3="informational-bg-lvl-3",s.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",s.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full",Object.entries(r).map(e=>{let[,t]=e;return t}),Object.entries(i).map(e=>{let[,t]=e;return t}),(c=l||(l={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(l).map(e=>{let[,t]=e;return t})},43251:function(e,t,a){a.d(t,{Lp:function(){return c},Vj:function(){return n},mS:function(){return o},yI:function(){return r},yn:function(){return i}});let n=()=>{var e,t;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(t=window.crypto)||void 0===t?void 0:t.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},i=(e,t)=>{Object.values(e.children).forEach(e=>{e.setAttribute(t.key,t.value),e.children.length>0&&i(e,t)})},r=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];let n="";return t.forEach((e,t)=>{if(e){if("string"==typeof e)n+="".concat(e," ");else for(let t in e)e[t]&&(n+="".concat(t," "))}}),n.trim()},l=["suppressHydrationWarning","suppressContentEditableWarning","translate","title","tabIndex","style","spellCheck","nonce","lang","hidden","draggable","dir","contextMenu","contentEditable","autoFocus","accessKey","is","inputMode","unselectable","security","results","vocab","typeof","rev","resource","rel","property","inlist","datatype","content","about","role","radioGroup","color"],o=(e,t)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("item")||e.startsWith("on")||l.includes(e))&&!t.includes(e)).reduce((t,a)=>(t[a]=e[a],t),{}),s=e=>{var t;let{top:a,bottom:n,left:i,right:r,height:l,width:o}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:c}=window,d=a<0,u=n>s,h=i<0,b=r>c,m=e.hasAttribute("data-outside-vy"),v=e.hasAttribute("data-outside-vx"),g=null==e?void 0:null===(t=e.parentElement)||void 0===t?void 0:t.getBoundingClientRect();return g&&(m&&("top"===e.getAttribute("data-outside-vy")?d=g.top-(n-g.bottom)<0:u=g.bottom+(g.top-a)>s),v&&("left"===e.getAttribute("data-outside-vx")?h=g.left-(r-g.right)<0:b=g.right+(g.left-i)>c)),{outTop:d,outBottom:u,outLeft:h,outRight:b}},c=e=>{let{outTop:t,outBottom:a,outLeft:n,outRight:i}=s(e),r={};return t||a?(r={vy:t?"top":"bottom"},e.setAttribute("data-outside-vy",r.vy)):e.removeAttribute("data-outside-vy"),n||i?(r={...r,vx:i?"right":"left"},e.setAttribute("data-outside-vx",r.vx)):e.removeAttribute("data-outside-vx"),r}},97335:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(52322),i=a(5632),r=a(25237),l=a.n(r),o=a(2784),s=a(61183),c=a(39097),d=a.n(c),u=a(43251);let h=(0,o.forwardRef)(function(e,t){let a=t||(0,o.useRef)(t),[i,r]=(0,o.useState)(()=>!1);return(0,o.useEffect)(()=>{document&&("hidden"===e.documentOverflow||"fixed"===e.variant&&"auto"!==e.documentOverflow)&&(document.documentElement.style.blockSize="100%",document.documentElement.style.overflow="hidden")},[]),(0,o.useEffect)(()=>{r(!e.fadeIn),document&&e.fadeIn?document.fonts.ready.then(()=>{r(!0)}):r(!0)},[]),(0,n.jsxs)("div",{ref:a,...(0,u.mS)(e,[]),id:e.id,className:(0,u.yI)("db-page",e.className),"data-variant":e.variant,"data-fade-in":e.fadeIn,"data-fonts-loaded":i,children:[(0,n.jsx)(n.Fragment,{children:e.header}),(0,n.jsx)("main",{className:"db-main",children:e.children}),(0,n.jsx)(n.Fragment,{children:e.footer})]})});var b=a(10326),m=a(55482);let v=(0,o.forwardRef)(function(e,t){var a;let i=t||(0,o.useRef)(t),r=(0,o.useRef)(null);function l(t){"Escape"===t.key&&t.preventDefault(),("close"===t||"Escape"===t.key||"DIALOG"===t.target.nodeName&&"click"===t.type&&"none"!==e.backdrop)&&e.onClose&&e.onClose(t)}function s(){(null==i?void 0:i.current)&&(e.open&&!i.current.open&&(r.current&&(r.current.hidden=!1),"none"===e.backdrop?i.current.show():i.current.showModal()),!e.open&&i.current.open&&(r.current&&(r.current.hidden=!0),setTimeout(()=>{var e;r.current&&(r.current.hidden=!1),null===(e=i.current)||void 0===e||e.close()},401)))}return(0,o.useEffect)(()=>{s()},[]),(0,o.useEffect)(()=>{s()},[e.open]),(0,n.jsx)("dialog",{className:"db-drawer",id:e.id,ref:i,...(0,u.mS)(e,["onClose"]),onClick:e=>{l(e)},onKeyDown:e=>l(e),"data-backdrop":e.backdrop,children:(0,n.jsxs)("article",{ref:r,className:(0,u.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,n.jsxs)("header",{className:"db-drawer-header",children:[(0,n.jsx)("div",{className:"db-drawer-header-text",children:(0,n.jsx)(n.Fragment,{children:e.drawerHeader})}),e.withCloseButton?(0,n.jsx)(b.Z,{icon:"cross",variant:"ghost",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>l("close"),children:null!==(a=e.closeButtonText)&&void 0!==a?a:m.ce}):null]}),(0,n.jsx)("div",{className:"db-drawer-content",children:e.children})]})})}),g=e=>{var t,a;let{target:n}=e;return!!(!(null==n?void 0:null===(t=n.classList)||void 0===t?void 0:t.contains("db-navigation-item-expand-button"))&&(null==n?void 0:null===(a=n.parentElement)||void 0===a?void 0:a.classList.contains("db-navigation-item")))};class p{init(){var e,t;let a=null!==(t=null===(e=this.parentSubNavigation)||void 0===e?void 0:e.getBoundingClientRect().width)&&void 0!==t?t:0;this.element.style.setProperty("--db-navigation-item-inline-size","".concat(a,"px")),this.initialized=!0}enableFollow(){var e,t;if(!this.initialized||this.triangleData)return;let a=(0,u.Lp)(this.subNavigation),n=this.element.getBoundingClientRect(),i=null!==(t=null===(e=this.parentSubNavigation)||void 0===e?void 0:e.getBoundingClientRect().width)&&void 0!==t?t:0;this.triangleData={itemRect:n,parentElementWidth:i,subNavigationHeight:this.subNavigation.getBoundingClientRect().height,padding:(i-n.width)/2,outsideVX:a.vx,outsideVY:a.vy}}disableFollow(){this.triangleData=void 0}getTriangleTipX(){return this.triangleData?"right"===this.triangleData.outsideVX?this.triangleData.itemRect.width-this.mouseX:Math.min(this.mouseX,.75*this.triangleData.itemRect.width):0}getTriangleTipY(){if(!this.triangleData)return 0;let e=Math.max(Math.min(this.mouseY,this.triangleData.itemRect.height),0)+this.triangleData.padding;return"bottom"===this.triangleData.outsideVY?e+(this.triangleData.subNavigationHeight-2*this.triangleData.padding-this.triangleData.itemRect.height):e}hasMouseEnteredSubNavigation(){if(!this.triangleData)return!1;let e="right"===this.triangleData.outsideVX;return!!e&&this.mouseX<-1*this.triangleData.padding||!e&&this.mouseX>this.triangleData.parentElementWidth-this.triangleData.padding}getTriangleCoordinates(e){if(!this.triangleData)return;if("fill-gap"===e){let e="".concat(this.triangleData.itemRect.height+2*this.triangleData.padding,"px"),t="".concat(this.triangleData.parentElementWidth-this.triangleData.padding,"px");return{lb:"".concat(t," ").concat(e),lt:"".concat(t," 0"),rt:"100% 0",rb:"100% ".concat(e)}}let t=this.getTriangleTipX(),a=this.getTriangleTipY();return{lb:"".concat(t,"px ").concat(a+this.triangleData.padding,"px"),lt:"".concat(t,"px ").concat(a-this.triangleData.padding,"px"),rt:"100% 0",rb:"100% 100%"}}followByMouseEvent(e){if(!this.initialized||!this.triangleData)return;this.mouseX=e.clientX-this.triangleData.itemRect.left,this.mouseY=e.clientY-this.triangleData.itemRect.top;let t=this.hasMouseEnteredSubNavigation(),a=this.getTriangleCoordinates(t?"fill-gap":"safe-triangle");a&&(this.element.style.setProperty("--db-navigation-item-clip-path","polygon(".concat(a.lb,", ").concat(a.lt,", ").concat(a.rt,", ").concat(a.rb,")")),t&&(this.triangleData=void 0))}constructor(e,t){this.initialized=!1,this.mouseX=0,this.mouseY=0,this.element=e,this.subNavigation=t,this.parentSubNavigation=this.element.closest(".db-sub-navigation"),this.parentSubNavigation&&!this.element.closest(".db-drawer")&&this.init()}}let f=(0,o.forwardRef)(function(e,t){var a;let i=t||(0,o.useRef)(t),[r,l]=(0,o.useState)(()=>m.IY),[s,c]=(0,o.useState)(()=>!1),[d,h]=(0,o.useState)(()=>!1),[p,f]=(0,o.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function N(){e.onToggle&&e.onToggle(!e.drawerOpen)}return(0,o.useEffect)(()=>{c(!0),l(e.id||"header-"+(0,u.Vj)())},[]),(0,o.useEffect)(()=>{if(s&&document&&r&&e.forceMobile){let e=document.getElementById(r);e&&(0,u.yn)(e,{key:"data-force-mobile",value:"true"}),h(!0)}},[s]),(0,n.jsxs)("header",{ref:i,...(0,u.mS)(e,[]),className:(0,u.yI)("db-header",e.className),id:r,"data-width":e.width,"data-on-forcing-mobile":e.forceMobile&&!d,children:[(0,n.jsxs)(v,{spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>N(),children:[(0,n.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,n.jsx)("div",{className:"db-header-navigation",onClick:e=>{g(e)&&N()},children:e.children}),(0,n.jsx)("div",{className:"db-header-meta-navigation",children:(0,n.jsx)(n.Fragment,{children:e.metaNavigation})})]}),(0,n.jsx)("div",{className:"db-header-secondary-action",children:(0,n.jsx)(n.Fragment,{children:e.secondaryAction})})]}),(0,n.jsx)("div",{className:"db-header-meta-navigation",children:(0,n.jsx)(n.Fragment,{children:e.metaNavigation})}),(0,n.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,n.jsx)("div",{className:"db-header-brand-container",children:(0,n.jsx)(n.Fragment,{children:e.brand})}),(0,n.jsxs)("div",{className:"db-header-navigation-container",children:[(0,n.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,n.jsx)("div",{className:"db-header-primary-action",children:(0,n.jsx)(n.Fragment,{children:e.primaryAction})})]}),(0,n.jsxs)("div",{className:"db-header-action-container",children:[(0,n.jsx)("div",{className:"db-header-burger-menu-container",children:(0,n.jsx)(b.Z,{id:"button-burger-menu",icon:"menu",variant:"ghost",noText:!0,onClick:()=>N(),children:null!==(a=e.burgerMenuLabel)&&void 0!==a?a:p.burgerMenuLabel})}),(0,n.jsx)("div",{className:"db-header-secondary-action",children:(0,n.jsx)(n.Fragment,{children:e.secondaryAction})})]})]})]})}),N=(0,o.forwardRef)(function(e,t){var a;let i=t||(0,o.useRef)(t),[r,l]=(0,o.useState)(()=>({icon:"db"}));return(0,n.jsx)("div",{ref:i,...(0,u.mS)(e,[]),"data-icon":e.hideLogo?"none":null!==(a=e.icon)&&void 0!==a?a:r.icon,id:e.id,className:(0,u.yI)("db-brand",e.className),children:e.children})}),x=(0,o.forwardRef)(function(e,t){let a=t||(0,o.useRef)(t),[i,r]=(0,o.useState)(()=>m.IY);return(0,o.useEffect)(()=>{r(e.id||"section-"+(0,u.Vj)())},[]),(0,n.jsx)("section",{ref:a,...(0,u.mS)(e,[]),id:i,"data-spacing":e.spacing||"medium",className:(0,u.yI)("db-section",e.className),children:(0,n.jsx)("div",{"data-width":e.width,children:e.children})})});var E=a(43313);let R=(0,o.forwardRef)(function(e,t){let a=t||(0,o.useRef)(t),[i,r]=(0,o.useState)(()=>m.IY);return(0,o.useEffect)(()=>{r(e.id||"navigation-"+(0,u.Vj)())},[]),(0,n.jsx)("nav",{ref:a,...(0,u.mS)(e,[]),id:i,"aria-labelledby":e.labelledBy,className:(0,u.yI)("db-navigation",e.className),children:(0,n.jsx)("menu",{children:e.children})})}),_=(0,o.forwardRef)(function(e,t){var a;let i=t||(0,o.useRef)(t),[r,l]=(0,o.useState)(()=>!1),[s,c]=(0,o.useState)(()=>!1),[d,h]=(0,o.useState)(()=>!0),[v,g]=(0,o.useState)(()=>!1),[f,N]=(0,o.useState)(()=>"sub-navigation-"+(0,u.Vj)()),[x,E]=(0,o.useState)(()=>void 0);return(0,o.useEffect)(()=>{l(!0)},[]),(0,o.useEffect)(()=>{void 0!==e.subNavigationExpanded&&g(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,o.useEffect)(()=>{!function(){if(r&&document&&f){var e,t;let a=null===(e=document)||void 0===e?void 0:e.getElementById(f);a&&((null===(t=a.children)||void 0===t?void 0:t.length)>0?(c(!0),x||E(new p(i.current,a))):h(!1))}}()},[r]),(0,n.jsxs)("li",{ref:i,...(0,u.mS)(e,[]),id:e.id,onMouseOver:e=>null==x?void 0:x.enableFollow(),onMouseLeave:e=>null==x?void 0:x.disableFollow(),onMouseMove:e=>null==x?void 0:x.followByMouseEvent(e),className:(0,u.yI)("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[d?null:(0,n.jsx)(n.Fragment,{children:e.children}),d?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":s,"aria-expanded":v,disabled:e.disabled,onClick:t=>{e.onClick&&e.onClick(t),s&&g(!0)},children:e.children}),(0,n.jsxs)("menu",{className:"db-sub-navigation",id:f,children:[s?(0,n.jsx)("div",{className:"db-mobile-navigation-back",children:(0,n.jsx)(b.Z,{icon:"arrow_left",variant:"ghost",id:e.backButtonId,onClick:e=>{e.stopPropagation(),g(!1)},children:null!==(a=e.backButtonText)&&void 0!==a?a:m.YP})}):null,(0,n.jsx)(n.Fragment,{children:e.subNavigation})]})]}):null]})}),w=(e,t)=>{var a;return"/"===t.path?"/"===e:e.includes("".concat(t.path,"/"))||e===t.path||!!(null===(a=t.subNavigation)||void 0===a?void 0:a.find(t=>e.includes("".concat(t.path,"/"))))},j=e=>{var t;let{navItem:a}=e,r=w((0,i.useRouter)().pathname,a);return(0,n.jsx)(_,{active:r,backButtonText:"Back to ".concat(a.label),subNavigation:a.subNavigation&&(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.subNavigation.map(e=>(0,n.jsx)(j,{navItem:e},"router-path-".concat(e.path)))}),children:a.subNavigation?a.label:(0,n.jsx)(d(),{href:null!==(t=a.path)&&void 0!==t?t:"",children:a.label},"router-path-".concat(a.path))})};var y=()=>(0,n.jsx)(R,{children:E.Z6.map(e=>(0,n.jsx)(j,{navItem:e},"router-path-".concat(e.path)))}),B=a(35368),S=a(12480);let A=async e=>{try{let t=await fetch(e);return await t.json()}catch(e){console.error(e)}return[]},L="db-ui",I="mono";var D=()=>{let e=(0,i.useRouter)(),[t,a]=(0,o.useState)(),[r,l]=(0,o.useState)(),s=t=>{let a=e.basePath,n=t.find(e=>a.includes(e));n&&l(n)},c=(e,t)=>{let n=[],i=[],r=[],l=[],o=[],s=[];for(let e of t)e.startsWith("feat")||e.startsWith("feature")?i.push(e):e.startsWith("fix")||e.startsWith("bugfix")?r.push(e):e.startsWith("refactor")?l.push(e):/^\d*-/.test(e)?o.push(e):e.startsWith("docs")?s.push(e):n.push(e);a({others:n,features:i,docs:s,refactors:l,issues:o,bugfixes:r,versions:e})};(0,o.useEffect)(()=>{(async()=>{let e=await A("https://api.github.com/repos/".concat(L,"/").concat(I,"/branches")),t=(await A("https://api.github.com/repos/".concat(L,"/").concat(I,"/tags"))).map(e=>e.name),a=e.map(e=>e.name).filter(e=>"gh-pages"!==e&&!e.includes("dependabot"));s(a),s(t),c(t,a)})().catch(e=>{console.error(e)})},[]);let d=t=>{let a=e.pathname,n=3===t.split(".").length&&t.startsWith("v");window.location.replace((0,B.sanitize)("https://".concat(L,".github.io/").concat(I).concat(n?"/version":"/review","/").concat(t).concat(a)))};return t?(0,n.jsx)(S.kr,{className:"version-switcher",label:"Version switcher",variant:"floating",value:r,onChange:e=>{d(e.target.value)},children:Object.entries(t).filter(e=>{let[t,a]=e;return(null==a?void 0:a.length)>0}).map(e=>{let[t,a]=e;return(0,n.jsx)("optgroup",{label:t,children:a.slice(0,15).map((e,a)=>(0,n.jsx)("option",{value:e,children:e},"".concat(t,"-").concat(e,"-").concat(a)))},t)})}):null};let T=e=>{var t,a;let{children:r,noNavigation:l}=e,[c,u]=(0,o.useState)(!1),[m,v]=(0,o.useState)(!1),[g,p]=(0,o.useState)(!1),[R,_]=(0,o.useState)(!1),[w,j]=(0,o.useState)(),[B,A]=(0,o.useState)(),[L,I]=(0,o.useState)(),[T,C]=(0,o.useState)(),k=(0,i.useRouter)();return(0,o.useEffect)(()=>{s.Z.configure({languages:["js","ts","jsx","tsx","css","scss","html","shell"]}),s.Z.highlightAll()},[]),(0,o.useEffect)(()=>{if(k.query&&(k.query.fullscreen&&u("true"===k.query.fullscreen),k.query.noh1&&v("true"===k.query.noh1),k.query.properties&&p("true"===k.query.properties),k.query.current)){let t=Array.isArray(k.query.current)?k.query.current[0]:k.query.current;if(w!==t){var e;j(t),null===(e=document.querySelector("#".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"})}}let{previous:t,next:a}=(0,E.vn)(k.pathname);A(t),I(a),C((0,E.kn)(k.pathname))},[k]),(0,n.jsxs)(n.Fragment,{children:[k.isReady&&c&&(0,n.jsx)("div",{className:"".concat(m?"noh1":""," ").concat(g?"is-properties":""),children:r}),k.isReady&&!c&&(0,n.jsxs)(h,{fadeIn:!0,variant:"fixed",header:(0,n.jsx)(f,{drawerOpen:R,onToggle:_,brand:(0,n.jsx)(N,{children:"DB-UI Mono"}),primaryAction:(0,n.jsx)(b.Z,{icon:"magnifying_glass",variant:"ghost",noText:!0,children:"Search"}),secondaryAction:(0,n.jsx)(D,{}),children:(0,n.jsx)(y,{})}),children:[T&&T.length>1&&(0,n.jsx)(x,{spacing:"none",width:"large",children:(0,n.jsx)("div",{"data-density":"functional",className:"breadcrumb-container",children:null==T?void 0:T.map(e=>{var t;return(0,n.jsxs)(o.Fragment,{children:["/"!==e.path&&(0,n.jsx)(S.Pg,{icon:"chevron_right"}),(0,n.jsx)(d(),{className:"db-button","data-variant":"ghost","data-icon":"/"===e.path?"house":"none","data-no-text":"/"===e.path,href:null!==(t=e.path)&&void 0!==t?t:"/",children:e.label})]},"breadcrumb-".concat(e.path))})})}),(0,n.jsx)(x,{spacing:"none",width:"large",children:r}),!l&&(null!=B?B:L)&&(0,n.jsxs)(x,{width:"large",spacing:"small",className:"link-containers",children:[B&&(0,n.jsx)(d(),{className:"previous-link-container",href:null!==(t=B.path)&&void 0!==t?t:"/",children:(0,n.jsxs)(S.f,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Previous"}),(0,n.jsx)("span",{"data-icon":"arrow_left",children:B.label})]})}),L&&(0,n.jsx)(d(),{className:"next-link-container",href:null!==(a=L.path)&&void 0!==a?a:"/",children:(0,n.jsxs)(S.f,{behaviour:"interactive",children:[(0,n.jsx)("small",{children:"Next"}),(0,n.jsx)("span",{"data-icon-after":"arrow_right",children:L.label})]})})]})]})]})};var C=l()(async()=>T,{ssr:!1})},43313:function(e,t,a){a.d(t,{Z6:function(){return n},vY:function(){return r},kn:function(){return o},vn:function(){return l}});let n=[{label:"Home",path:"/"},{label:"Foundations",path:"/foundations",subNavigation:[{label:"Readme",path:"/foundations/readme"},{label:"Colors",path:"/foundations/colors",subNavigation:[{label:"Readme",path:"/foundations/colors/readme"},{label:"Overview",path:"/foundations/colors/overview"},{label:"Color Schemes",path:"/foundations/colors/color-schemes"}]},{label:"Font Sizes",path:"/foundations/font-sizes",subNavigation:[{label:"Readme",path:"/foundations/font-sizes/readme"},{label:"Overview",path:"/foundations/font-sizes/overview"}]},{label:"Icons",path:"/foundations/icons",subNavigation:[{label:"Readme",path:"/foundations/icons/readme"},{label:"Custom Icons",path:"/foundations/icons/custom-icons"},{label:"Overview",path:"/foundations/icons/overview"}]},{label:"Densities",path:"/foundations/densities",subNavigation:[{label:"Readme",path:"/foundations/densities/readme"},{label:"Examples",path:"/foundations/densities/examples"}]},{label:"Variables",path:"/foundations/variables",subNavigation:[{label:"Readme",path:"/foundations/variables/readme"},{label:"Examples",path:"/foundations/variables/examples"}]}]},{label:"Components",path:"/components",subNavigation:[{label:"Readme",path:"/components/readme"},{label:"Router usage",path:"/components/router-usage"},{label:"Validation",path:"/components/validation"},...JSON.parse('[{"label":"Action","name":"action","path":"/components/action","subNavigation":[{"label":"DBButton","name":"button"},{"label":"DBLink","name":"link"}]},{"label":"Data-Display","path":"/components/data-display","name":"data-display","subNavigation":[{"label":"DBBrand","name":"brand"},{"label":"DBTooltip","name":"tooltip"},{"label":"DBInfotext","name":"infotext"},{"label":"DBTag","name":"tag"},{"label":"DBAccordion","name":"accordion","subNavigation":[{"label":"DBAccordionItem Properties","path":"/components/accordion-item/properties"}]},{"label":"DBTabs","name":"tabs","subNavigation":[{"label":"DBTabItem Properties","path":"/components/tab-item/properties"}]}]},{"label":"Data-Input","path":"/components/data-input","name":"data-input","subNavigation":[{"label":"DBCheckbox","name":"checkbox"},{"label":"DBInput","name":"input"},{"label":"DBRadio","name":"radio"},{"label":"DBSelect","name":"select"},{"label":"DBSwitch","name":"switch"},{"label":"DBTextarea","name":"textarea"}]},{"label":"Feedback","path":"/components/feedback","name":"feedback","subNavigation":[{"label":"DBNotification","name":"notification"},{"label":"DBBadge","name":"badge"}]},{"label":"Layout","path":"/components/layout","name":"layout","subNavigation":[{"label":"DBCard","name":"card"},{"label":"DBDivider","name":"divider"},{"label":"DBDrawer","name":"drawer"},{"label":"DBHeader","name":"header"},{"label":"DBSection","name":"section"}]},{"label":"Navigation","path":"/components/navigation","name":"navigation","subNavigation":[{"label":"DBNavigation","name":"navigation","subNavigation":[{"label":"DBNavigationItem Properties","path":"/components/navigation-item/properties"}]}]},{"label":"Utilities","path":"/components/utilities","name":"utilities","subNavigation":[{"label":"DBPopover","name":"popover"}]}]').map(e=>{var t;return{...e,subNavigation:null==e?void 0:null===(t=e.subNavigation)||void 0===t?void 0:t.map(t=>{var a;return{label:t.label,path:"/components/".concat(e.name,"/").concat(t.name),subNavigation:[{label:"Overview",path:"/components/".concat(e.name,"/").concat(t.name,"/overview")},{label:"Properties",path:"/components/".concat(e.name,"/").concat(t.name,"/properties")},{label:"How to use",path:"/components/".concat(e.name,"/").concat(t.name,"/how-to-use")},{label:"Migration",path:"/components/".concat(e.name,"/").concat(t.name,"/migration")},...null!==(a=t.subNavigation)&&void 0!==a?a:[]]}})}})]}],i=(e,t,a,n)=>{for(let l of e){var r;t.push(a?l:{...l,label:n?"".concat(n,":").concat(l.label):l.label}),l.subNavigation&&(null===(r=l.subNavigation)||void 0===r?void 0:r.length)>0&&i(l.subNavigation,t,a,a?void 0:l.label)}},r=e=>{let t=[];return i(n,t,e),t},l=e=>{let t=r().filter(e=>!e.subNavigation),a=t.findIndex(t=>t.path===e);return{previous:0===a?void 0:t[a-1],next:a+1===t.length?void 0:t[a+1]}},o=e=>r(!0).filter(t=>{var a;return e.includes(null!==(a=t.path)&&void 0!==a?a:"")})}}]);