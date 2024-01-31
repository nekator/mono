"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61624],{53608:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077),i=t(65982);let s=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[s,d]=(0,l.useState)(()=>i.IY),[c,o]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{d(e.id||"accordion-item-"+(0,r.Vj)()),e.stylePath&&o(e.stylePath)},[]),(0,a.jsxs)("details",{ref:t,...(0,r.mS)(e,[]),id:s,className:(0,r.yI)("db-accordion-item",e.className),"aria-disabled":e.disabled,open:e.open,name:e.name,children:[c?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:c})}):null,(0,a.jsxs)("summary",{onClick:n=>{null==n||n.preventDefault(),e.onToggle&&e.onToggle(!e.open)},children:[e.title?(0,a.jsx)(a.Fragment,{children:e.title}):null,e.title?null:(0,a.jsx)(a.Fragment,{children:e.slotTitle})]}),(0,a.jsxs)("div",{children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.content?null:(0,a.jsx)(a.Fragment,{children:e.children})]})]})});n.Z=s},64586:function(e,n,t){t.d(n,{k:function(){return a.Z}});var a=t(53608)},34941:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077),i=t(64586);let s=(0,l.forwardRef)(function(e,n){var t;let s=(0,l.useRef)(n),[d,c]=(0,l.useState)(()=>[]),[o,u]=(0,l.useState)(()=>""),[h,f]=(0,l.useState)(()=>!1),[m,v]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&v(e.stylePath),f(!0)},[]),(0,l.useEffect)(()=>{if(s.current&&h){let n=s.current.getElementsByTagName("details");if(n){let t=[];Array.from(n).forEach((n,a)=>{var l;let r=n.id;(n.open||(null===(l=e.initOpenIndex)||void 0===l?void 0:l.includes(a)))&&t.push(r);let i=n.getElementsByTagName("summary");(null==i?void 0:i.length)>0&&i[0].addEventListener("click",()=>{u(r)})}),"single"===e.behaviour&&t.length>1&&(t=[t[0]]),c(t),f(!1)}}},[s.current,h]),(0,l.useEffect)(()=>{(null==o?void 0:o.length)>0&&(d.includes(o)?"single"===e.behaviour?c([]):c(d.filter(e=>e!==o)):"single"===e.behaviour?c([o]):c([...d,o]),e.onChange&&e.onChange(d),u(""))},[o]),(0,l.useEffect)(()=>{if(null==s?void 0:s.current){let e=s.current.getElementsByTagName("details");e&&Array.from(e).forEach(e=>{e.open=d.includes(e.id)})}},[d]),(0,a.jsxs)("div",{ref:s,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-accordion",e.className),children:[m?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:m})}):null,e.items?null:(0,a.jsx)(a.Fragment,{children:e.children}),e.items?(0,a.jsx)(a.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.items))||void 0===t?void 0:t.map((e,n)=>(0,a.jsx)(i.k,{title:e.title,disabled:e.disabled,content:e.content},"accordion-item-".concat(e.title,"-").concat(n)))}):null]})});n.Z=s},72323:function(e,n,t){var a=t(52322),l=t(2784),r=t(23036),i=t(11969),s=t(65982),d=t(58077);let c=(0,l.forwardRef)(function(e,n){var t;let c=(0,l.useRef)(n),[o,u]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&u(e.stylePath)},[]),(0,a.jsxs)("div",{ref:c,...(0,d.mS)(e,[]),id:e.id,className:(0,d.yI)("db-alert",e.className),"aria-live":e.ariaLive,"data-variant":e.variant,"data-type":e.type,"data-icon":e.icon,"data-elevation":e.elevation,children:[o?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:o})}):null,e.headline?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("strong",{className:"db-alert-headline",children:e.headline})}):null,(0,a.jsx)("p",{className:"db-alert-content",children:e.children}),e.link?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.v,{variant:"inline",className:"db-alert-link",href:e.link.href,hreflang:e.link.hreflang,target:e.link.target,rel:e.link.rel,role:e.link.role,disabled:e.link.disabled,selected:e.link.selected,label:e.link.label,current:e.link.current,text:e.link.text})}):null,"permanent"!==e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Y,{icon:"close",variant:"text",size:"small",className:"db-alert-close",id:e.closeButtonId,noText:!0,onClick:n=>{e.onClick&&e.onClick(n)},children:null!==(t=e.closeButtonText)&&void 0!==t?t:s.ce})}):null]})});n.Z=c},35107:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077);let i=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[i,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("span",{ref:t,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-badge",e.className),"data-variant":e.variant,"data-size":e.size,"data-emphasis":e.emphasis,"data-placement":e.placement,children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,e.children]})});n.Z=i},79383:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077);let i=(0,l.forwardRef)(function(e,n){var t,i,s,d,c;let o=(0,l.useRef)(n),[u,h]=(0,l.useState)(()=>({anchorRef:"/",src:"./assets/images/db_logo.svg",width:"34",height:"24"})),[f,m]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&m(e.stylePath)},[]),(0,a.jsxs)("div",{ref:o,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-brand",e.className),children:[f?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:f})}):null,(0,a.jsxs)("a",{href:null!==(t=e.anchorRef)&&void 0!==t?t:u.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-logo",src:null!==(i=e.imgSrc)&&void 0!==i?i:u.src,alt:null!==(s=e.imgAlt)&&void 0!==s?s:"",height:null!==(d=e.imgHeight)&&void 0!==d?d:u.height,width:null!==(c=e.imgWidth)&&void 0!==c?c:u.width})}),e.anchorChildren?(0,a.jsx)(a.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,a.jsx)(a.Fragment,{children:e.children})]})});n.Z=i},47943:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077);let i=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[i,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("button",{ref:t,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-button",e.className,{"is-icon-text-replace":e.noText}),type:e.type,title:e.title,disabled:e.disabled,"aria-label":e.label,"data-icon":e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-describedby":e.describedbyid,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,e.children]})});n.Z=i},23036:function(e,n,t){t.d(n,{Y:function(){return a.Z}});var a=t(47943)},96936:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077);let i=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[i,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("div",{ref:t,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-card",e.className),"data-variant":e.variant,"data-elevation":e.elevation,"data-spacing":e.spacing,onClick:n=>{e.onClick&&e.onClick(n)},children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,e.imgSrc?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});n.Z=i},22935:function(e,n,t){t.d(n,{f:function(){return a.Z}});var a=t(96936)},44925:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077),i=t(65982);let s=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[s,d]=(0,l.useState)(()=>!1),[c,o]=(0,l.useState)(()=>i.IY),[u,h]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{d(!0),o(e.id||"checkbox-"+(0,r.Vj)()),e.stylePath&&h(e.stylePath)},[]),(0,l.useEffect)(()=>{if(s&&document&&c){var n;let t=null===(n=document)||void 0===n?void 0:n.getElementById(c);t&&(void 0!=e.checked&&(t.checked=e.checked),void 0!==e.indeterminate&&(t.indeterminate=e.indeterminate))}},[s,e.indeterminate,e.checked]),(0,a.jsxs)("label",{"data-size":e.size,"data-label-variant":e.labelVariant,htmlFor:c,className:(0,r.yI)("db-checkbox",e.className),children:[u?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:u})}):null,(0,a.jsx)("input",{type:"checkbox",ref:t,...(0,r.mS)(e,[]),id:c,name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,required:e.required,onChange:n=>{e.onChange&&e.onChange(n),e.change&&e.change(n),n.target},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})});n.Z=s},36743:function(e,n,t){var a=t(52322),l=t(2784),r=t(22935),i=t(58077);let s=(0,l.forwardRef)(function(e,n){var t,s;let d=(0,l.useRef)(n),[c,o]=(0,l.useState)(()=>!1),[u,h]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&h(e.stylePath)},[]),(0,a.jsxs)(r.f,{ref:d,...(0,i.mS)(e,[]),className:(0,i.yI)("db-code-docs",e.className),children:[u?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:u})}):null,e.children,(0,a.jsxs)("details",{className:"code-details",onToggle:e=>void o(!c),children:[(0,a.jsx)("summary",{className:"db-button code-button","data-size":"small","data-variant":"primary",children:c?null!==(t=e.hideCodeLabel)&&void 0!==t?t:"Hide Code":null!==(s=e.showCodeLabel)&&void 0!==s?s:"Show Code"}),(0,a.jsx)("div",{className:"db-ui-functional code",children:e.slotCode})]})]})});n.Z=s},39609:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077);let i=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[i,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsx)("div",{ref:t,...(0,r.mS)(e,[]),id:e.id,"data-margin":e.margin,"data-variant":e.variant,"data-emphasis":e.emphasis,className:(0,r.yI)("db-divider",e.className),children:i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null})});n.Z=i},32029:function(e,n,t){var a=t(52322),l=t(2784),r=t(23036),i=t(65982),s=t(58077);let d=(0,l.forwardRef)(function(e,n){var t;let d=(0,l.useRef)(n),c=(0,l.useRef)(null),[o,u]=(0,l.useState)(()=>i.IY);function h(n){"Escape"===n.key&&n.preventDefault(),("close"===n||"Escape"===n.key||"DIALOG"===n.target.nodeName&&"none"!==e.backdrop)&&e.onClose&&e.onClose()}function f(){(null==d?void 0:d.current)&&(e.open&&!d.current.open&&(c.current&&(c.current.hidden=!1),"none"===e.backdrop?d.current.show():d.current.showModal()),!e.open&&d.current.open&&(c.current&&(c.current.hidden=!0),setTimeout(()=>{var e;c.current&&(c.current.hidden=!1),null===(e=d.current)||void 0===e||e.close()},401)))}let[m,v]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{u(e.id||"drawer-"+(0,s.Vj)()),e.stylePath&&v(e.stylePath),f()},[]),(0,l.useEffect)(()=>{f()},[e.open]),(0,a.jsxs)("dialog",{className:"db-drawer",id:o,ref:d,...(0,s.mS)(e,["onClose"]),onClick:e=>{h(e)},onKeyDown:e=>h(e),"data-backdrop":e.backdrop,children:[m?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:m})}):null,(0,a.jsxs)("article",{ref:c,className:(0,s.yI)("db-drawer-container",e.className),"data-spacing":e.spacing,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,a.jsxs)("header",{className:"db-drawer-header",children:[(0,a.jsx)("div",{className:"db-drawer-header-text",children:e.slotDrawerHeader}),e.withCloseButton?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Y,{icon:"close",variant:"text",className:"button-close-drawer",id:e.closeButtonId,noText:!0,onClick:e=>h("close"),children:null!==(t=e.closeButtonText)&&void 0!==t?t:i.ce})}):null]}),(0,a.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})});n.Z=d},63403:function(e,n,t){t.d(n,{T:function(){return a.Z}});var a=t(32029)},83371:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077),i=t(23036),s=t(63403),d=t(65982);let c=(0,l.forwardRef)(function(e,n){var t;let c=(0,l.useRef)(n),[o,u]=(0,l.useState)(()=>d.IY),[h,f]=(0,l.useState)(()=>!1),[m,v]=(0,l.useState)(()=>!1),[g,b]=(0,l.useState)(()=>({burgerMenuLabel:"BurgerMenu"}));function x(){e.onToggle&&e.onToggle(!e.drawerOpen)}let[j,p]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{f(!0),u(e.id||"header-"+(0,r.Vj)()),e.stylePath&&p(e.stylePath)},[]),(0,l.useEffect)(()=>{if(h&&document&&o&&e.forceMobile){let e=document.getElementById(o);e&&(0,r.yn)(e,{key:"data-force-mobile",value:"true"}),v(!0)}},[h]),(0,a.jsxs)("header",{ref:c,...(0,r.mS)(e,[]),className:(0,r.yI)("db-header",e.className),id:o,"data-on-forcing-mobile":e.forceMobile&&!m,children:[j?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:j})}):null,(0,a.jsxs)(s.T,{spacing:"small",className:"db-header-drawer",rounded:!0,withCloseButton:!0,open:e.drawerOpen,onClose:()=>x(),children:[(0,a.jsxs)("div",{className:"db-header-drawer-navigation",children:[(0,a.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,a.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation})]}),(0,a.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]}),(0,a.jsx)("div",{className:"db-header-meta-navigation",children:e.slotMetaNavigation}),(0,a.jsxs)("div",{className:"db-header-navigation-bar",children:[(0,a.jsx)("div",{className:"db-header-brand-container",children:e.slotBrand}),(0,a.jsxs)("div",{className:"db-header-navigation-container",children:[(0,a.jsx)("div",{className:"db-header-navigation",children:e.children}),(0,a.jsx)("div",{className:"db-header-call-to-action",children:e.slotCallToAction})]}),(0,a.jsxs)("div",{className:"db-header-action-container",children:[(0,a.jsx)("div",{className:"db-header-burger-menu-container",children:(0,a.jsx)(i.Y,{id:"button-burger-menu",icon:"menu",variant:"text",noText:!0,onClick:()=>x(),children:null!==(t=e.burgerMenuLabel)&&void 0!==t?t:g.burgerMenuLabel})}),(0,a.jsx)("div",{className:"db-header-action-bar",children:e.slotActionBar})]})]})]})});n.Z=c},71537:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077);let i=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[i,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("span",{"aria-hidden":"true",ref:t,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-icon",e.className),"data-icon":e.icon,"data-icon-weight":e.weight,"data-icon-variant":e.variant,title:e.title,children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,e.children]})});n.Z=i},4378:function(e,n,t){t.d(n,{P:function(){return a.Z}});var a=t(71537)},13081:function(e,n,t){t.d(n,{E:function(){return a.Z}});var a=t(88193)},88193:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077);let i=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[i,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("span",{ref:t,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-infotext",e.className),title:e.title,"data-icon":e.icon,"data-variant":e.variant,"data-size":e.size,children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,e.children]})});n.Z=i},74093:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077),i=t(65982),s=t(13081);let d=(0,l.forwardRef)(function(e,n){var t,d,c;let o=(0,l.useRef)(n),[u,h]=(0,l.useState)(()=>i.IY),[f,m]=(0,l.useState)(()=>i.IY+i.Kn),[v,g]=(0,l.useState)(()=>i.IY),[b,x]=(0,l.useState)(()=>({label:i.SU,placeholder:" "})),[j,p]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{h(e.id||"input-"+(0,r.Vj)()),m(u+i.Kn),g(e.dataListId||"datalist-".concat((0,r.Vj)())),e.stylePath&&p(e.stylePath)},[]),(0,a.jsxs)("div",{className:(0,r.yI)("db-input",e.className),"data-variant":e.variant,"data-label-variant":e.labelVariant,"data-icon":e.icon,"data-icon-after":e.iconAfter,children:[j?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:j})}):null,(0,a.jsx)("label",{htmlFor:u,children:null!==(d=e.label)&&void 0!==d?d:b.label}),(0,a.jsx)("input",{ref:o,...(0,r.mS)(e,[]),id:u,name:e.name,type:e.type||"text",placeholder:null!==(c=e.placeholder)&&void 0!==c?c:b.placeholder,disabled:e.disabled,required:e.required,step:e.step,value:e.value,"aria-invalid":e.invalid,maxLength:e.maxLength,minLength:e.minLength,max:e.max,min:e.min,readOnly:e.readOnly,form:e.form,pattern:e.pattern,autoComplete:e.autocomplete,onChange:n=>{e.onChange&&e.onChange(n),e.change&&e.change(n),n.target},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},list:e.dataList&&v,"aria-describedby":e.message&&f}),e.dataList?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("datalist",{id:v,children:null===(t=e.dataList)||void 0===t?void 0:t.map(e=>(0,a.jsx)("option",{value:e.key,children:e.value},v+"-option-"+e.key))})}):null,e.children,e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.E,{size:"small",variant:e.variant,icon:(0,r.mT)(e.variant,e.messageIcon),id:f,children:e.message})}):null]})});n.Z=d},11969:function(e,n,t){t.d(n,{v:function(){return a.Z}});var a=t(562)},562:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077);let i=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[i,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("a",{ref:t,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-link",e.className),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,hrefLang:e.hreflang,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,e.text?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.text})}):null,e.children]})});n.Z=i},75376:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077);let i=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[i,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("nav",{ref:t,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-main-navigation",e.className),children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,(0,a.jsx)("menu",{children:e.children})]})});n.Z=i},4988:function(e,n,t){var a=t(52322),l=t(2784),r=t(23036),i=t(58077),s=t(65982);let d=(0,l.forwardRef)(function(e,n){var t;let d=(0,l.useRef)(n),[c,o]=(0,l.useState)(()=>!1),[u,h]=(0,l.useState)(()=>!1),[f,m]=(0,l.useState)(()=>!0),[v,g]=(0,l.useState)(()=>!1),[b,x]=(0,l.useState)(()=>"sub-navigation-"+(0,i.Vj)()),[j,p]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{o(!0),e.stylePath&&p(e.stylePath)},[]),(0,l.useEffect)(()=>{void 0!==e.subNavigationExpanded&&g(!!e.subNavigationExpanded)},[e.subNavigationExpanded]),(0,l.useEffect)(()=>{if(void 0!==e.areaPopup)h(e.areaPopup),m(u);else if(c&&document&&b){var n;let e=null===(n=document)||void 0===n?void 0:n.getElementById(b);if(e){let n=e.children;(null==n?void 0:n.length)>0?h(!0):m(!1)}}},[c,e.areaPopup]),(0,a.jsxs)("li",{ref:d,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-navigation-item",e.className),"data-width":e.width,"data-icon":e.icon,"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled,children:[j?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:j})}):null,f?null:(0,a.jsx)(a.Fragment,{children:e.children}),f?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"db-navigation-item-expand-button","aria-haspopup":u,"aria-expanded":v,disabled:e.disabled,onClick:n=>{e.onClick&&e.onClick(n),u&&g(!0)},children:e.children}),(0,a.jsxs)("menu",{className:"db-sub-navigation",id:b,children:[u?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"db-mobile-navigation-back",children:(0,a.jsx)(r.Y,{icon:"arrow_back",variant:"text",id:e.backButtonId,onClick:e=>{e.stopPropagation(),g(!1)},children:null!==(t=e.backButtonText)&&void 0!==t?t:s.YP})})}):null,e.slotSubNavigation]})]}):null]})});n.Z=d},85016:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077);let i=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[i,s]=(0,l.useState)(()=>!1),[d,c]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{s(!e.fadeIn),e.stylePath&&c(e.stylePath),document&&e.fadeIn?document.fonts.ready.then(()=>{s(!0)}):s(!0)},[]),(0,a.jsxs)("div",{ref:t,...(0,r.mS)(e,[]),id:e.id,className:(0,r.yI)("db-page",e.className,{"fixed-header-footer":"fixedHeaderFooter"===e.type}),"data-fade-in":e.fadeIn,"data-fonts-loaded":i,children:[d?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:d})}):null,e.slotHeader,(0,a.jsx)("main",{className:"db-main",children:e.children}),e.slotFooter]})});n.Z=i},36802:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077),i=t(65982);let s=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[s,d]=(0,l.useState)(()=>i.IY),[c,o]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{d(e.id||"popover-"+(0,r.Vj)()),e.stylePath&&o(e.stylePath)},[]),(0,a.jsxs)("i",{ref:t,...(0,r.mS)(e,[]),id:s,className:(0,r.yI)("db-popover",e.className),"data-spacing":e.spacing,"data-gap":e.gap,"data-animation":e.animation,"data-open":e.open,"data-delay":e.delay,"data-width":e.width,"data-placement":e.placement,onClick:e=>(function(e){e.stopPropagation()})(e),children:[c?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:c})}):null,e.children]})});n.Z=s},35404:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077),i=t(65982);let s=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[s,d]=(0,l.useState)(()=>!1),[c,o]=(0,l.useState)(()=>i.IY),[u,h]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{d(!0),o(e.id||"radio-"+(0,r.Vj)()),e.stylePath&&h(e.stylePath)},[]),(0,l.useEffect)(()=>{if(e.checked&&s&&document&&c){var n;let t=null===(n=document)||void 0===n?void 0:n.getElementById(c);t&&void 0!=e.checked&&(t.checked=!0)}},[s,e.checked]),(0,a.jsxs)("label",{"data-size":e.size,"data-label-variant":e.labelVariant,className:(0,r.yI)("db-radio",e.className),htmlFor:c,children:[u?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:u})}):null,(0,a.jsx)("input",{type:"radio",ref:t,...(0,r.mS)(e,[]),id:c,name:e.name,checked:e.checked,disabled:e.disabled,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,value:e.value,required:e.required,onChange:n=>{e.onChange&&e.onChange(n),e.change&&e.change(n),n.target},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),e.label?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("span",{children:e.label})}):null,e.children]})});n.Z=s},88773:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077);let i=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[i,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,a.jsxs)("section",{ref:t,...(0,r.mS)(e,[]),id:e.id,"data-size":e.size||"medium",className:(0,r.yI)("db-section",e.className),children:[i?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:i})}):null,(0,a.jsx)("div",{"data-variant":e.variant,children:e.children})]})});n.Z=i},48166:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077),i=t(65982),s=t(13081);let d=(0,l.forwardRef)(function(e,n){var t,d,c;let o=(0,l.useRef)(n),[u,h]=(0,l.useState)(()=>i.IY),[f,m]=(0,l.useState)(()=>i.IY+i.Kn),[v,g]=(0,l.useState)(()=>i.IY+i.D_);function b(e){var n;return null!==(n=e.label)&&void 0!==n?n:e.value.toString()}let[x,j]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{let n=e.id||"select-"+(0,r.Vj)();h(n),m(n+i.Kn),g(n+i.D_),e.stylePath&&j(e.stylePath)},[]),(0,a.jsxs)("div",{className:(0,r.yI)("db-select",e.className),"data-variant":e.variant,"data-label-variant":e.labelVariant,"data-icon":e.icon,children:[x?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:x})}):null,(0,a.jsx)("label",{htmlFor:u,children:null!==(d=e.label)&&void 0!==d?d:i.SU}),(0,a.jsxs)("select",{ref:o,...(0,r.mS)(e,[]),"aria-invalid":e.invalid,required:e.required,disabled:e.disabled,id:u,name:e.name,value:e.value,autoComplete:e.autocomplete,onClick:n=>{e.onClick&&e.onClick(n)},onChange:n=>{e.onChange&&e.onChange(n),e.change&&e.change(n),n.target},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},"aria-describedby":e.message&&f||v,children:[(0,a.jsx)("option",{hidden:!0}),e.options?(0,a.jsx)(a.Fragment,{children:null===(t=e.options)||void 0===t?void 0:t.map(e=>{var n;return(0,a.jsxs)(a.Fragment,{children:[e.options?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("optgroup",{label:b(e),children:null===(n=e.options)||void 0===n?void 0:n.map(e=>(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:b(e)},"option-"+e.value))},"optgroup-"+e.value)}):null,e.options?null:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("option",{value:e.value,disabled:e.disabled,children:b(e)},"option-"+e.value)})]})})}):null,e.children]}),(0,a.jsx)("span",{id:v,children:null!==(c=e.placeholder)&&void 0!==c?c:e.label}),e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.E,{size:"small",variant:e.variant,icon:(0,r.mT)(e.variant,e.messageIcon),id:f,children:e.message})}):null]})});n.Z=d},26092:function(e,n,t){var a=t(52322),l=t(2784),r=t(59696),i=t(58077);let s=(0,l.forwardRef)(function(e,n){var t;let s=(0,l.useRef)(n),[d,c]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,a.jsxs)("div",{role:"tablist",ref:s,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("cmp-tab-bar",e.className),children:[d?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:d})}):null,e.tabs?(0,a.jsx)(a.Fragment,{children:null===(t=function(e){try{if("string"==typeof e)return JSON.parse(e);return e}catch(e){console.error(e)}}(e.tabs))||void 0===t?void 0:t.map(e=>(0,a.jsx)(r.Q,{name:e.name,active:e.active,label:e.label,content:e.content,children:e.children},e.name))}):null,e.children]})});n.Z=s},59696:function(e,n,t){t.d(n,{Q:function(){return a.Z}});var a=t(5951)},5951:function(e,n,t){var a=t(52322),l=t(2784),r=t(65982),i=t(58077);let s=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),s=(0,l.useRef)(null),[d,c]=(0,l.useState)(()=>r.IY),[o,u]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{if(c((0,i.Vj)()),e.stylePath&&u(e.stylePath),e.active){var n;null===(n=s.current)||void 0===n||n.click()}},[]),(0,a.jsxs)("div",{ref:t,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-tab",e.className),children:[o?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:o})}):null,(0,a.jsx)("input",{type:"radio",ref:s,name:e.name,id:d}),(0,a.jsx)("label",{role:"tab",htmlFor:d,children:e.label}),(0,a.jsxs)("section",{role:"tabpanel",id:"content-"+d,children:[e.content?(0,a.jsx)(a.Fragment,{children:e.content}):null,e.children]})]})});n.Z=s},15720:function(e,n,t){var a=t(52322),l=t(2784),r=t(23036),i=t(58077);let s=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n);function s(){return e.removeButton?e.removeButton:"Remove tag"}let[d,c]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,a.jsxs)("div",{ref:t,...(0,i.mS)(e,[]),id:e.id,className:(0,i.yI)("db-tag",e.className),"data-disabled":e.disabled,"data-variant":e.variant,"data-emphasis":e.emphasis,"data-icon":e.icon,"data-no-text":e.noText,"data-overflow":e.overflow,children:[d?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:d})}):null,e.children,e.text?(0,a.jsx)(a.Fragment,{children:e.text}):null,"removable"===e.behaviour?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Y,{icon:"close",size:"small",variant:"text",className:"db-tab-remove-button",onClick:n=>void(e.onRemove&&e.onRemove()),noText:!0,title:s(),children:s()})}):null]})});n.Z=s},13767:function(e,n,t){var a=t(52322),l=t(2784),r=t(13081),i=t(58077),s=t(65982);let d=(0,l.forwardRef)(function(e,n){var t,d,c;let o=(0,l.useRef)(n),[u,h]=(0,l.useState)(()=>s.IY),[f,m]=(0,l.useState)(()=>s.IY+s.Kn),[v,g]=(0,l.useState)(()=>({label:s.SU,placeholder:" ",rows:"4"})),[b,x]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&x(e.stylePath),h(e.id||"textarea-"+(0,i.Vj)()),m(u+s.Kn)},[]),(0,a.jsxs)("div",{className:(0,i.yI)("db-textarea",e.className),"data-label-variant":e.labelVariant,"data-variant":e.variant,children:[b?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:b})}):null,(0,a.jsx)("label",{htmlFor:u,children:null!==(t=e.label)&&void 0!==t?t:v.label}),(0,a.jsx)("textarea",{ref:o,...(0,i.mS)(e,[]),id:u,"data-resize":e.resize,disabled:e.disabled,required:e.required,readOnly:e.readOnly,"aria-invalid":e.invalid,form:e.form,maxLength:e.maxLength,minLength:e.minLength,name:e.name,wrap:e.wrap,spellCheck:e.spellCheck,autoComplete:e.autocomplete,onChange:n=>{e.onChange&&e.onChange(n),e.change&&e.change(n),n.target},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)},value:e.value,"aria-describedby":e.message&&f,placeholder:null!==(d=e.placeholder)&&void 0!==d?d:v.placeholder,rows:null!==(c=e.rows)&&void 0!==c?c:v.rows,cols:e.cols}),e.message?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.E,{size:"small",variant:e.variant,icon:(0,i.mT)(e.variant,e.messageIcon),id:f,children:e.message})}):null]})});n.Z=d},19429:function(e,n,t){var a=t(52322),l=t(2784),r=t(58077),i=t(65982);let s=(0,l.forwardRef)(function(e,n){let t=(0,l.useRef)(n),[s,d]=(0,l.useState)(()=>i.IY),[c,o]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{d(e.id||"tooltip-"+(0,r.Vj)()),e.stylePath&&o(e.stylePath)},[]),(0,a.jsxs)("i",{role:"tooltip","data-gap":"true",ref:t,...(0,r.mS)(e,[]),id:s,"data-emphasis":e.emphasis,"data-animation":e.animation,"data-delay":e.delay,"data-width":e.width,"data-variant":e.variant,"data-placement":e.placement,onClick:e=>(function(e){e.stopPropagation()})(e),className:(0,r.yI)("db-tooltip",e.className),children:[c?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"stylesheet",href:c})}):null,e.children]})});n.Z=s},61624:function(e,n,t){t.d(n,{aw:function(){return S.Z},kC:function(){return R.k},H3:function(){return a.Z},aE:function(){return l.Z},mX:function(){return r.Z},Y1:function(){return i.Y},f:function(){return s.f},I3:function(){return d.Z},wq:function(){return c.Z},oH:function(){return o.Z},TG:function(){return u.T},W4:function(){return h.Z},Pg:function(){return f.P},EZ:function(){return m.E},aq:function(){return v.Z},vB:function(){return g.v},Cc:function(){return k.Z},pK:function(){return b.Z},Ys:function(){return E.Z},an:function(){return x.Z},cN:function(){return j.Z},kr:function(){return p.Z},k8:function(){return y.Z},GI:function(){return N.Z},Nd:function(){return I.Z}});var a=t(72323),l=t(35107),r=t(79383),i=t(23036),s=t(22935),d=t(44925),c=t(36743),o=t(39609),u=t(63403),h=t(83371),f=t(4378),m=t(13081),v=t(74093),g=t(11969),b=t(4988);t(85016);var x=t(35404),j=t(88773),p=t(48166);t(59696),t(26092);var y=t(15720),N=t(13767),S=t(34941),R=t(64586),k=t(75376),E=t(36802),I=t(19429)},65982:function(e,n,t){var a,l,r,i,s,d,c;t.d(n,{$f:function(){return g},DM:function(){return b},D_:function(){return f},IY:function(){return o},Kn:function(){return h},SU:function(){return u},YP:function(){return m},ce:function(){return v},iw:function(){return a},r$:function(){return r}});let o="OVERWRITE_DEFAULT_ID",u="LABEL SHOULD BE SET",h="-message",f="-placeholder",m="Back",v="Close Button";(s=a||(a={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let g=Object.entries(a).map(e=>{let[,n]=e;return n});(l||(l={})).PRIMARY="primary",(d=r||(r={})).BASE_BG_1="base-bg-1",d.BASE_BG_2="base-bg-2",d.BASE_BG_3="base-bg-3",d.BASE_BG_TRANSPARENT_SEMI="base-bg-transparent-semi",d.BASE_BG_TRANSPARENT_FULL="base-bg-transparent-full",d.NEUTRAL_BG_1="neutral-bg-1",d.NEUTRAL_BG_2="neutral-bg-2",d.NEUTRAL_BG_3="neutral-bg-3",d.NEUTRAL_BG_TRANSPARENT_SEMI="neutral-bg-transparent-semi",d.NEUTRAL_BG_TRANSPARENT_FULL="neutral-bg-transparent-full",d.BRAND_BG_1="brand-bg-1",d.BRAND_BG_2="brand-bg-2",d.BRAND_BG_3="brand-bg-3",d.BRAND_BG_TRANSPARENT_SEMI="brand-bg-transparent-semi",d.BRAND_BG_TRANSPARENT_FULL="brand-bg-transparent-full",d.SUCCESSFUL_BG_1="successful-bg-1",d.SUCCESSFUL_BG_2="successful-bg-2",d.SUCCESSFUL_BG_3="successful-bg-3",d.SUCCESSFUL_BG_TRANSPARENT_SEMI="successful-bg-transparent-semi",d.SUCCESSFUL_BG_TRANSPARENT_FULL="successful-bg-transparent-full",d.CRITICAL_BG_1="critical-bg-1",d.CRITICAL_BG_2="critical-bg-2",d.CRITICAL_BG_3="critical-bg-3",d.CRITICAL_BG_TRANSPARENT_SEMI="critical-bg-transparent-semi",d.CRITICAL_BG_TRANSPARENT_Full="critical-bg-transparent-full",d.WARNING_BG_1="warning-bg-1",d.WARNING_BG_2="warning-bg-2",d.WARNING_BG_3="warning-bg-3",d.WARNING_BG_TRANSPARENT_SEMI="warning-bg-transparent-semi",d.WARNING_BG_TRANSPARENT_FULL="warning-bg-transparent-full",d.INFORMATIONAL_BG_1="informational-bg-1",d.INFORMATIONAL_BG_2="informational-bg-2",d.INFORMATIONAL_BG_3="informational-bg-3",d.INFORMATIONAL_BG_TRANSPARENT_SEMI="informational-bg-transparent-semi",d.INFORMATIONAL_BG_TRANSPARENT_FULL="informational-bg-transparent-full";let b=Object.entries(r).map(e=>{let[,n]=e;return n});Object.entries(l).map(e=>{let[,n]=e;return n}),(c=i||(i={})).CRITICAL="critical",c.INFORMATIONAL="informational",c.WARNING="warning",c.SUCCESSFUL="successful",Object.entries(i).map(e=>{let[,n]=e;return n})},58077:function(e,n,t){t.d(n,{Vj:function(){return a},mS:function(){return s},mT:function(){return i},yI:function(){return r},yn:function(){return l}});let a=()=>{var e,n;return(null===(e=window.crypto)||void 0===e?void 0:e.randomUUID)?window.crypto.randomUUID():(null===(n=window.crypto)||void 0===n?void 0:n.getRandomValues)?window.crypto.getRandomValues(new Uint32Array(3)).join("-"):Math.random().toString().substring(2)},l=(e,n)=>{Object.values(e.children).forEach(e=>{e.setAttribute(n.key,n.value),e.children.length>0&&l(e,n)})},r=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];let a="";return n.forEach((e,n)=>{if(e){if("string"==typeof e)a+="".concat(e," ");else for(let n in e)e[n]&&(a+="".concat(n," "))}}),a.trim()},i=(e,n)=>n||(e&&"adaptive"!==e?void 0:"none"),s=(e,n)=>Object.keys(e).filter(e=>(e.startsWith("data-")||e.startsWith("aria-")||e.startsWith("default")||e.startsWith("auto")||e.startsWith("on"))&&!n.includes(e)).reduce((n,t)=>(n[t]=e[t],n),{})}}]);