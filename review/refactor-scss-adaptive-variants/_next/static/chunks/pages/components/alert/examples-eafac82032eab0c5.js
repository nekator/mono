(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{83876:function(e,n,t){var i={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function l(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],l=n[0];return t.e(n[1]).then(function(){return t(l)})}l.keys=function(){return Object.keys(i)},l.id=83876,e.exports=l},72779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function l(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var a=l.apply(null,t);a&&e.push(a)}}else if("object"===r){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var c in t)i.call(t,c)&&t[c]&&e.push(c)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0!==(t=(function(){return l}).apply(n,[]))&&(e.exports=t)}()},68346:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/examples",function(){return t(21786)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(52322),l=t(77900),r=t(2784);let a=()=>{let e=(0,r.useRef)(null),[n,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{var n;let i=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";i&&t(!0)},[]),[n,e]},c=e=>{let{children:n,element:t="div",...i}=e,[l,c]=a();return l?(0,r.createElement)(t,{...i,children:n}):(0,r.createElement)(t,{...i,ref:c,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/refactor-scss-adaptive-variants").concat(e.link)});t(60586);var s=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>d(e)):[],h=e=>{let{children:n}=e,[t,a]=(0,r.useState)(!1),[d,h]=(0,r.useState)(!1),[v,j]=(0,r.useState)(!1),x=(0,s.useRouter)();return(0,r.useEffect)(()=>{x.query&&(a("true"===x.query.fullscreen),h("true"===x.query.noh1),j("true"===x.query.properties))},[x]),(0,i.jsxs)(c,{children:[x.isReady&&t&&(0,i.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(v?"is-properties":""),children:n}),x.isReady&&!t&&(0,i.jsxs)(l.rG,{children:[(0,i.jsxs)(l.ff,{slot:"header",children:[(0,i.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(l.Pm,{data:JSON.stringify(u(o,x.pathname))}),(0,i.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(l.fw,{slot:"footer",copyright:!0})]})]})};var v=h},4312:function(e,n,t){"use strict";var i=t(52322),l=t(2784),r=t(16510),a=t(87233),c=t(94938),o=t(9076),d=t(72779),s=t.n(d);let u={closeButton:"Close Button"},h=(0,l.forwardRef)(function(e,n){var t,d,h,v,j,x,b,f,k,p,y,m,g,T,C,w,Z,B,L,_,N;let[D,E]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&E(e.stylePath)},[]),(0,i.jsxs)("div",{ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return s()(n)}("db-alert",e.className),"aria-live":e.ariaLive,"data-variant":e.variant,"data-type":e.type,"data-elevation":e.elevation,children:[D?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:D})}):null,(0,i.jsx)(r.P,{className:"db-alert-icon",icon:(_=e.icon,N=e.variant,_&&"_"!==_&&"none"!==_?_:N&&a.I[N]||"info")}),(0,i.jsxs)("div",{className:"db-alert-content-container",children:[(0,i.jsxs)("div",{className:"db-alert-headline-container",children:[e.headline?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("strong",{children:e.headline})}):null,e.headline?null:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{children:e.children})}),(0,i.jsxs)("div",{className:"db-alert-close-container",children:[(0,i.jsx)(o.v,{variant:"inline",className:"db-alert-headline-link",href:null===(t=e.link)||void 0===t?void 0:t.href,target:null===(d=e.link)||void 0===d?void 0:d.target,rel:null===(h=e.link)||void 0===h?void 0:h.rel,role:null===(v=e.link)||void 0===v?void 0:v.role,disabled:null===(j=e.link)||void 0===j?void 0:j.disabled,selected:null===(x=e.link)||void 0===x?void 0:x.selected,label:null===(b=e.link)||void 0===b?void 0:b.label,hreflang:null===(f=e.link)||void 0===f?void 0:f.hreflang,current:null===(k=e.link)||void 0===k?void 0:k.current,children:e.slotLink}),"permanent"!==e.behaviour?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.Y,{icon:"close",variant:"text",size:"small",noText:!0,onClick:n=>{e.onClick&&e.onClick(n)},children:null!==(L=e.closeButtonText)&&void 0!==L?L:u.closeButton})}):null]})]}),e.headline?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{children:e.children})}):null,(0,i.jsx)(o.v,{variant:"inline",className:"db-alert-content-link",href:null===(p=e.link)||void 0===p?void 0:p.href,target:null===(y=e.link)||void 0===y?void 0:y.target,rel:null===(m=e.link)||void 0===m?void 0:m.rel,role:null===(g=e.link)||void 0===g?void 0:g.role,disabled:null===(T=e.link)||void 0===T?void 0:T.disabled,selected:null===(C=e.link)||void 0===C?void 0:C.selected,label:null===(w=e.link)||void 0===w?void 0:w.label,hreflang:null===(Z=e.link)||void 0===Z?void 0:Z.hreflang,current:null===(B=e.link)||void 0===B?void 0:B.current,children:e.slotLink})]})]})});n.Z=h},96889:function(e,n,t){"use strict";var i=t(52322),l=t(2784),r=t(72779),a=t.n(r);let c=(0,l.forwardRef)(function(e,n){function t(e){return!!(e&&"_"!==e&&"none"!==e)}let[r,c]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,i.jsxs)("button",{ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return a()(n)}("db-button",e.className,{"is-icon-text-replace":t(e.icon)&&e.noText}),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":t(e.icon)?e.icon:void 0,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[r?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:r})}):null,e.children]})});n.Z=c},94938:function(e,n,t){"use strict";t.d(n,{Y:function(){return i.Z}});var i=t(96889)},648:function(e,n,t){"use strict";var i=t(52322),l=t(2784),r=t(72779),a=t.n(r);let c=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,i.jsxs)("span",{"aria-hidden":"true",ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return a()(n)}("db-icon",e.className,{"is-icon-text-replace":e.withText}),"data-icon":e.icon,children:[t?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=c},16510:function(e,n,t){"use strict";t.d(n,{P:function(){return i.Z}});var i=t(648)},9076:function(e,n,t){"use strict";t.d(n,{v:function(){return i.Z}});var i=t(87224)},87224:function(e,n,t){"use strict";var i=t(52322),l=t(2784),r=t(72779),a=t.n(r);let c=(0,l.forwardRef)(function(e,n){let[t,r]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,i.jsxs)("a",{ref:n,className:function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return a()(n)}("db-link",e.className),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=c},87233:function(e,n,t){"use strict";t.d(n,{I:function(){return i}});let i={critical:"error",warning:"error-triangle",successful:"check-circle",informational:"info"}},21786:function(e,n,t){"use strict";t.r(n);var i=t(52322),l=t(70969),r=t(4312);n.default=()=>(0,i.jsxs)(l.Z,{children:[(0,i.jsx)("h1",{children:" DBAlert Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"ariaLive:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{ariaLive:"polite",children:"Test"})}),(0,i.jsx)("dt",{children:"ariaLive, behaviour, closeButtonText, elevation, headline, icon, id, key, link, onClick, slotLink, title, type, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{ariaLive:"polite",behaviour:"permanent",closeButtonText:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"behaviour, closeButtonText, elevation, headline, icon, id, key, link, onClick, slotLink, title, type, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{behaviour:"permanent",closeButtonText:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"closeButtonText, elevation, headline, icon, id, key, link, onClick, slotLink, title, type, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{closeButtonText:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"elevation, headline, icon, id, key, link, onClick, slotLink, title, type, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"elevation, icon, id, key, link, onClick, slotLink, title, type, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{elevation:"none",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"elevation, icon, id, key, onClick, slotLink, title, type, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"elevation, icon, id, key, onClick, title, type, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"elevation, icon, id, key, onClick, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),title:"account",variant:"critical",children:"Test"},"account")}),(0,i.jsx)("dt",{children:"elevation, icon, id, onClick, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),title:"account",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"elevation, icon, onClick, title, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{elevation:"none",icon:"account",onClick:e=>console.log(e),title:"account",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"elevation, icon, onClick, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{elevation:"none",icon:"account",onClick:e=>console.log(e),variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"elevation, icon, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{elevation:"none",icon:"account",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"elevation, variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{elevation:"none",variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"variant:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{variant:"critical",children:"Test"})}),(0,i.jsx)("dt",{children:"behaviour:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{behaviour:"permanent",children:"Test"})}),(0,i.jsx)("dt",{children:"closeButtonText:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{closeButtonText:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"headline:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{headline:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"link:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},children:"Test"})}),(0,i.jsx)("dt",{children:"slotLink:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{slotLink:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"type:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{type:"inline",children:"Test"})}),(0,i.jsx)("dt",{children:"key:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{children:"Test"},"account")}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"onClick:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{onClick:e=>console.log(e),children:"Test"})}),(0,i.jsx)("dt",{children:"icon:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{icon:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"elevation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(r.Z,{elevation:"none",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=68346)}),_N_E=e.O()}]);