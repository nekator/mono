(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{3876:function(e,n,l){var t={"./db-accordion.entry.js":[2164,2164],"./db-brand.entry.js":[2298,2298],"./db-breadcrumb.entry.js":[484,484],"./db-button_2.entry.js":[7834,7834],"./db-card.entry.js":[5061,5061],"./db-cards.entry.js":[1355,1355],"./db-checkbox.entry.js":[5116,5116],"./db-chip.entry.js":[3458,5515],"./db-dropdown.entry.js":[8631,8631],"./db-footer.entry.js":[2550,2550],"./db-header.entry.js":[490,490],"./db-headline.entry.js":[630,630],"./db-image.entry.js":[2339,2339],"./db-input.entry.js":[3813,3595],"./db-language-switcher.entry.js":[1552,1552],"./db-link.entry.js":[5930,5930],"./db-linklist.entry.js":[1576,1576],"./db-logo.entry.js":[3898,3898],"./db-mainnavigation.entry.js":[5939,5939],"./db-meta.entry.js":[6893,6893],"./db-metanavigation.entry.js":[4866,4866],"./db-notification.entry.js":[9358,9358],"./db-notifications.entry.js":[2381,2381],"./db-overflow-menu.entry.js":[4272,4272],"./db-page.entry.js":[2295,2295],"./db-pagination.entry.js":[6337,6337],"./db-progress.entry.js":[6084,6084],"./db-radio.entry.js":[1272,1272],"./db-select.entry.js":[1619,1619],"./db-sidenavi.entry.js":[3380,3380],"./db-tab-bar.entry.js":[9394,9394],"./db-tab.entry.js":[5650,5650],"./db-table.entry.js":[5264,5264],"./db-tag.entry.js":[9616,9616],"./db-textarea.entry.js":[4554,4554],"./db-toggle.entry.js":[1376,1376],"./github-version-switcher.entry.js":[7711,7711]};function i(e){if(!l.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],i=n[0];return l.e(n[1]).then(function(){return l(i)})}i.keys=function(){return Object.keys(t)},i.id=3876,e.exports=i},8346:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/examples",function(){return l(3965)}])},5554:function(e,n,l){"use strict";l.d(n,{Z:function(){return h}});var t=l(2322),i=l(8982),a=l(2784);let o=()=>{let e=(0,a.useRef)(null),[n,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&l(!0)},[]),[n,e]},c=e=>{let{children:n,element:l="div",...t}=e,[i,c]=o();return i?(0,a.createElement)(l,{...t,children:n}):(0,a.createElement)(l,{...t,ref:c,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var r=l(1092);l(1828);var s=l(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,r.e)(e)):[],u=e=>{let{children:n}=e,l=(0,s.useRouter)();return(0,t.jsx)(c,{children:(0,t.jsxs)(i.rG,{children:[(0,t.jsxs)(i.ff,{slot:"header",children:[(0,t.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(i.Pm,{data:JSON.stringify(d(r.Z,l.pathname))}),(0,t.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(i.fw,{slot:"footer",copyright:!0})]})})};var h=u},2038:function(e,n,l){"use strict";var t=l(2322),i=l(2784),a=l(4237);n.Z=function(e){let[n,l]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,t.jsxs)("button",{type:e.type,disabled:e.disabled,"aria-label":e.text,className:"db-button"+(e.className?" "+e.className:"")+(e.icon&&!e.icntxt?" is-icon-text-replace":""),"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,onClick:n=>{e.onClick&&e.onClick(n)},children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,(0,t.jsx)(a.P,{icon:e.icon,icntxt:e.icntxt}),e.children]})}},7754:function(e,n,l){"use strict";var t=l(2322),i=l(2784);n.Z=function(e){let[n,l]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,t.jsxs)("span",{"aria-hidden":"true",className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})}},4237:function(e,n,l){"use strict";l.d(n,{P:function(){return t.Z}});var t=l(7754)},5321:function(e,n,l){"use strict";var t=l(2322),i=l(2784),a=l(4237);n.Z=function(e){let[n,l]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&l(e.stylePath)},[]),(0,t.jsxs)("a",{className:"db-link"+(e.className?" "+e.className:""),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children,"inline"!==e.variant?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.P,{icon:"external"==e.content?"link-external":"link",icntxt:!0})}):null]})}},2110:function(e,n,l){"use strict";l.d(n,{I:function(){return t}});let t={critical:"error",warning:"error-triangle",success:"check-circle",information:"info"}},1092:function(e,n,l){"use strict";l.d(n,{Z:function(){return t},e:function(){return i}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],i=e=>({...e,link:"".concat("/mono/review/feat-fast-and-slow-tagged-component-tests").concat(e.link)})},3965:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return h}});var t=l(2322),i=l(5554),a=l(2784),o=l(4237),c=l(2110),r=l(2038),s=l(5321);let d={closeButton:"Close Button"};var u=function(e){var n,l,i,u,h,k,b,p,m,x,j,f,v,y,g,w,C,T,E,N,B;let[L,_]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{e.stylePath&&_(e.stylePath)},[]),(0,t.jsxs)("div",{className:"db-alert"+(e.className?" "+e.className:""),"data-variant":e.variant,"data-type":e.type,children:[L?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:L})}):null,(0,t.jsx)(o.P,{className:"db-alert-icon",icon:(N=e.icon,B=e.variant,N||c.I[B]||"info")}),(0,t.jsxs)("div",{className:"db-alert-content-container",children:[(0,t.jsxs)("div",{className:"db-alert-headline-container",children:[e.headline?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("strong",{children:e.headline})}):(0,t.jsx)("span",{children:e.children}),(0,t.jsxs)("div",{className:"db-alert-close-container",children:["inline"!==e.type?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.Z,{variant:"inline",className:"db-alert-headline-link",href:null===(n=e.link)||void 0===n?void 0:n.href,target:null===(l=e.link)||void 0===l?void 0:l.target,rel:null===(i=e.link)||void 0===i?void 0:i.rel,role:null===(u=e.link)||void 0===u?void 0:u.role,disabled:null===(h=e.link)||void 0===h?void 0:h.disabled,selected:null===(k=e.link)||void 0===k?void 0:k.selected,label:null===(b=e.link)||void 0===b?void 0:b.label,hreflang:null===(p=e.link)||void 0===p?void 0:p.hreflang,current:null===(m=e.link)||void 0===m?void 0:m.current,children:e.slotLink})}):null,(0,t.jsx)(r.Z,{icon:"close",variant:"ghost",size:"small",onClick:n=>{e.onClick&&e.onClick(n)},children:null!==(E=e.closeButtonText)&&void 0!==E?E:d.closeButton})]})]}),e.headline?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{children:e.children})}):null,(0,t.jsx)(s.Z,{variant:"inline",className:"db-alert-content-link",href:null===(x=e.link)||void 0===x?void 0:x.href,target:null===(j=e.link)||void 0===j?void 0:j.target,rel:null===(f=e.link)||void 0===f?void 0:f.rel,role:null===(v=e.link)||void 0===v?void 0:v.role,disabled:null===(y=e.link)||void 0===y?void 0:y.disabled,selected:null===(g=e.link)||void 0===g?void 0:g.selected,label:null===(w=e.link)||void 0===w?void 0:w.label,hreflang:null===(C=e.link)||void 0===C?void 0:C.hreflang,current:null===(T=e.link)||void 0===T?void 0:T.current,children:e.slotLink})]})]})},h=()=>(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("h1",{children:" DBAlert Examples "}),(0,t.jsxs)("div",{className:"example-list",children:["Default: ",(0,t.jsx)(u,{children:"Test"}),(0,t.jsx)("p",{children:"closeButtonText:"})," ",(0,t.jsx)(u,{closeButtonText:"account",children:"Test"}),(0,t.jsx)("p",{children:"closeButtonText, headline, icon, link, onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)(u,{closeButtonText:"account",headline:"account",icon:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"headline, icon, link, onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)(u,{headline:"account",icon:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"icon, link, onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)(u,{icon:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"link, onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)(u,{link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)(u,{onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"onClick, slotLink, title, variant:"})," ",(0,t.jsx)(u,{onClick:e=>console.log(e),slotLink:"account",title:"account",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"onClick, title, variant:"})," ",(0,t.jsx)(u,{onClick:e=>console.log(e),title:"account",variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"onClick, title:"})," ",(0,t.jsx)(u,{onClick:e=>console.log(e),title:"account",children:"Test"}),(0,t.jsx)("p",{children:"onClick:"})," ",(0,t.jsx)(u,{onClick:e=>console.log(e),children:"Test"}),(0,t.jsx)("p",{children:"headline:"})," ",(0,t.jsx)(u,{headline:"account",children:"Test"}),(0,t.jsx)("p",{children:"icon:"})," ",(0,t.jsx)(u,{icon:"account",children:"Test"}),(0,t.jsx)("p",{children:"link:"})," ",(0,t.jsx)(u,{link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},children:"Test"}),(0,t.jsx)("p",{children:"type:"})," ",(0,t.jsx)(u,{type:"inline",children:"Test"}),(0,t.jsx)("p",{children:"slotLink:"})," ",(0,t.jsx)(u,{slotLink:"account",children:"Test"}),(0,t.jsx)("p",{children:"variant:"})," ",(0,t.jsx)(u,{variant:"critical",children:"Test"}),(0,t.jsx)("p",{children:"title:"})," ",(0,t.jsx)(u,{title:"account",children:"Test"})]})]})}},function(e){e.O(0,[879,9774,2888,179],function(){return e(e.s=8346)}),_N_E=e.O()}]);