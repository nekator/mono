(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{83876:function(e,n,t){var l={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function i(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],i=n[0];return t.e(n[1]).then(function(){return t(i)})}i.keys=function(){return Object.keys(l)},i.id=83876,e.exports=i},68346:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/examples",function(){return t(21786)}])},70969:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var l=t(52322),i=t(77900),c=t(2784);let a=()=>{let e=(0,c.useRef)(null),[n,t]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},r=e=>{let{children:n,element:t="div",...l}=e,[i,r]=a();return i?(0,c.createElement)(t,{...l,children:n}):(0,c.createElement)(t,{...l,ref:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],d=e=>({...e,link:"".concat("/mono/review/docs-button").concat(e.link)});t(60586);var s=t(5632);let u=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?u(e.children,n):[]})).map(e=>d(e)):[],h=e=>{let{children:n}=e,[t,a]=(0,c.useState)(!1),[d,h]=(0,c.useState)(!1),[j,x]=(0,c.useState)(!1),v=(0,s.useRouter)();return(0,c.useEffect)(()=>{v.query&&(a("true"===v.query.fullscreen),h("true"===v.query.noh1),x("true"===v.query.properties))},[v]),(0,l.jsxs)(r,{children:[v.isReady&&t&&(0,l.jsx)("div",{className:"".concat(d?"noh1":""," ").concat(j?"is-properties":""),children:n}),v.isReady&&!t&&(0,l.jsxs)(i.rG,{children:[(0,l.jsxs)(i.ff,{slot:"header",children:[(0,l.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(i.Pm,{data:JSON.stringify(u(o,v.pathname))}),(0,l.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(i.fw,{slot:"footer",copyright:!0})]})]})};var j=h},4312:function(e,n,t){"use strict";var l=t(52322),i=t(2784),c=t(16510),a=t(87233),r=t(94938),o=t(9076);let d={closeButton:"Close Button"},s=(0,i.forwardRef)(function(e,n){var t,s,u,h,j,x,v,b,k,f,m,y,p,g,C,T,Z,w,N,B,_;let[D,L]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&L(e.stylePath)},[]),(0,l.jsxs)("div",{ref:n,className:"db-alert"+(e.className?" "+e.className:""),"data-variant":e.variant,"data-type":e.type,"data-elevation":e.elevation,children:[D?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:D})}):null,(0,l.jsx)(c.P,{className:"db-alert-icon",icon:(B=e.icon,_=e.variant,B&&"_"!==B&&"none"!==B?B:_&&a.I[_]||"info")}),(0,l.jsxs)("div",{className:"db-alert-content-container",children:[(0,l.jsxs)("div",{className:"db-alert-headline-container",children:[e.headline?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("strong",{children:e.headline})}):null,e.headline?null:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("span",{children:[e.children,e.text]})}),(0,l.jsxs)("div",{className:"db-alert-close-container",children:[(0,l.jsx)(o.v,{variant:"inline",className:"db-alert-headline-link",href:null===(t=e.link)||void 0===t?void 0:t.href,target:null===(s=e.link)||void 0===s?void 0:s.target,rel:null===(u=e.link)||void 0===u?void 0:u.rel,role:null===(h=e.link)||void 0===h?void 0:h.role,disabled:null===(j=e.link)||void 0===j?void 0:j.disabled,selected:null===(x=e.link)||void 0===x?void 0:x.selected,label:null===(v=e.link)||void 0===v?void 0:v.label,hreflang:null===(b=e.link)||void 0===b?void 0:b.hreflang,current:null===(k=e.link)||void 0===k?void 0:k.current,children:e.slotLink}),"permanent"!==e.behaviour?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.Y,{icon:"close",variant:"text",size:"small",noText:!0,onClick:n=>{e.onClick&&e.onClick(n)},children:null!==(N=e.closeButtonText)&&void 0!==N?N:d.closeButton})}):null]})]}),e.headline?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("span",{children:[e.children,e.text]})}):null,(0,l.jsx)(o.v,{variant:"inline",className:"db-alert-content-link",href:null===(f=e.link)||void 0===f?void 0:f.href,target:null===(m=e.link)||void 0===m?void 0:m.target,rel:null===(y=e.link)||void 0===y?void 0:y.rel,role:null===(p=e.link)||void 0===p?void 0:p.role,disabled:null===(g=e.link)||void 0===g?void 0:g.disabled,selected:null===(C=e.link)||void 0===C?void 0:C.selected,label:null===(T=e.link)||void 0===T?void 0:T.label,hreflang:null===(Z=e.link)||void 0===Z?void 0:Z.hreflang,current:null===(w=e.link)||void 0===w?void 0:w.current,children:e.slotLink})]})]})});n.Z=s},96889:function(e,n,t){"use strict";var l=t(52322),i=t(2784);let c=(0,i.forwardRef)(function(e,n){function t(e){return!!(e&&"_"!==e&&"none"!==e)}let[c,a]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,l.jsxs)("button",{ref:n,className:"db-button"+(e.className?" "+e.className:"")+(t(e.icon)&&e.noText?" is-icon-text-replace":""),type:e.type,disabled:e.disabled,"aria-label":e.label,"data-icon":t(e.icon)&&e.icon,"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,name:e.name,value:e.value,"aria-expanded":e.ariaexpanded,"aria-pressed":e.ariapressed,onClick:n=>{e.onClick&&e.onClick(n)},children:[c?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:c})}):null,e.children]})});n.Z=c},94938:function(e,n,t){"use strict";t.d(n,{Y:function(){return l.Z}});var l=t(96889)},648:function(e,n,t){"use strict";var l=t(52322),i=t(2784);let c=(0,i.forwardRef)(function(e,n){let[t,c]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,l.jsxs)("span",{"aria-hidden":"true",ref:n,className:"db-icon"+(e.className?" "+e.className:"")+(e.withText?" is-icon-text-replace":""),"data-icon":e.icon,children:[t?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=c},16510:function(e,n,t){"use strict";t.d(n,{P:function(){return l.Z}});var l=t(648)},9076:function(e,n,t){"use strict";t.d(n,{v:function(){return l.Z}});var l=t(87224)},87224:function(e,n,t){"use strict";var l=t(52322),i=t(2784);let c=(0,i.forwardRef)(function(e,n){let[t,c]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,l.jsxs)("a",{ref:n,className:"db-link"+(e.className?" "+e.className:""),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[t?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=c},87233:function(e,n,t){"use strict";t.d(n,{I:function(){return l}});let l={critical:"error",warning:"error-triangle",successful:"check-circle",informational:"info"}},21786:function(e,n,t){"use strict";t.r(n);var l=t(52322),i=t(70969),c=t(4312);n.default=()=>(0,l.jsxs)(i.Z,{children:[(0,l.jsx)("h1",{children:" DBAlert Examples "}),(0,l.jsxs)("dl",{className:"example-list",children:[(0,l.jsx)("dt",{children:"Default:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{children:"Test"})}),(0,l.jsx)("dt",{children:"closeButtonText:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{closeButtonText:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"behaviour, closeButtonText, elevation, headline, icon, id, key, link, onClick, slotLink, text, title, type, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{behaviour:"permanent",closeButtonText:"account",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",text:"account",title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"behaviour, elevation, headline, icon, id, key, link, onClick, slotLink, text, title, type, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{behaviour:"permanent",elevation:"none",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",text:"account",title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"behaviour, elevation, icon, id, key, link, onClick, slotLink, text, title, type, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{behaviour:"permanent",elevation:"none",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",text:"account",title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"behaviour, elevation, icon, id, key, link, onClick, slotLink, title, type, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{behaviour:"permanent",elevation:"none",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"behaviour, elevation, icon, id, key, onClick, slotLink, title, type, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{behaviour:"permanent",elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"behaviour, elevation, icon, id, key, onClick, slotLink, title, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{behaviour:"permanent",elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),slotLink:"account",title:"account",variant:"critical",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"behaviour, elevation, icon, id, key, onClick, title, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{behaviour:"permanent",elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),title:"account",variant:"critical",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"elevation, icon, id, key, onClick, title, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),title:"account",variant:"critical",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"elevation, icon, id, key, onClick, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),title:"account",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"elevation, icon, id, onClick, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{elevation:"none",icon:"account",id:"account",onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"elevation, icon, onClick, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{elevation:"none",icon:"account",onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"elevation, icon, onClick:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{elevation:"none",icon:"account",onClick:e=>console.log(e),children:"Test"})}),(0,l.jsx)("dt",{children:"elevation, icon:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{elevation:"none",icon:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"elevation:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{elevation:"none",children:"Test"})}),(0,l.jsx)("dt",{children:"headline:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{headline:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"text:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{text:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"link:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},children:"Test"})}),(0,l.jsx)("dt",{children:"type:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{type:"inline",children:"Test"})}),(0,l.jsx)("dt",{children:"slotLink:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{slotLink:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"behaviour:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{behaviour:"permanent",children:"Test"})}),(0,l.jsx)("dt",{children:"variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{variant:"critical",children:"Test"})}),(0,l.jsx)("dt",{children:"key:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{children:"Test"},"account")}),(0,l.jsx)("dt",{children:"id:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{id:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"onClick:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{onClick:e=>console.log(e),children:"Test"})}),(0,l.jsx)("dt",{children:"icon:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{icon:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=68346)}),_N_E=e.O()}]);