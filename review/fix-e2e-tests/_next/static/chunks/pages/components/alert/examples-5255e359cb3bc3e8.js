(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{3876:function(e,n,l){var t={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[6846,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function i(e){if(!l.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],i=n[0];return l.e(n[1]).then(function(){return l(i)})}i.keys=function(){return Object.keys(t)},i.id=3876,e.exports=i},8346:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alert/examples",function(){return l(4105)}])},8429:function(e,n,l){"use strict";l.d(n,{Z:function(){return h}});var t=l(2322),i=l(7900),c=l(2784);let o=()=>{let e=(0,c.useRef)(null),[n,l]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&l(!0)},[]),[n,e]},a=e=>{let{children:n,element:l="div",...t}=e,[i,a]=o();return i?(0,c.createElement)(l,{...t,children:n}):(0,c.createElement)(l,{...t,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var r=l(6666);l(586);var s=l(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,r.e)(e)):[],u=e=>{let{children:n}=e,l=(0,s.useRouter)();return(0,t.jsx)(a,{children:(0,t.jsxs)(i.rG,{children:[(0,t.jsxs)(i.ff,{slot:"header",children:[(0,t.jsx)(i.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(i.Pm,{data:JSON.stringify(d(r.Z,l.pathname))}),(0,t.jsx)(i.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(i.fw,{slot:"footer",copyright:!0})]})})};var h=u},6889:function(e,n,l){"use strict";var t=l(2322),i=l(2784),c=l(6510);let o=(0,i.forwardRef)(function(e,n){function l(e){return e&&"_"!==e&&"none"!==e}let[o,a]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&a(e.stylePath)},[]),(0,t.jsxs)("button",{ref:n,type:e.type,disabled:e.disabled,"aria-label":e.label,className:"db-button"+(e.className?" "+e.className:"")+(l(e.icon)&&!e.icntxt?" is-icon-text-replace":""),"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,onClick:n=>{e.onClick&&e.onClick(n)},children:[o?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:o})}):null,l(e.icon)?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c.P,{icon:e.icon,icntxt:e.icntxt})}):null,e.children,e.text]})});n.Z=o},4938:function(e,n,l){"use strict";l.d(n,{Y:function(){return t.Z}});var t=l(6889)},648:function(e,n,l){"use strict";var t=l(2322),i=l(2784);let c=(0,i.forwardRef)(function(e,n){let[l,c]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,t.jsxs)("span",{"aria-hidden":"true",ref:n,className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[l?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:l})}):null,e.children]})});n.Z=c},6510:function(e,n,l){"use strict";l.d(n,{P:function(){return t.Z}});var t=l(648)},7224:function(e,n,l){"use strict";var t=l(2322),i=l(2784),c=l(6510);let o=(0,i.forwardRef)(function(e,n){let[l,o]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&o(e.stylePath)},[]),(0,t.jsxs)("a",{ref:n,className:"db-link"+(e.className?" "+e.className:""),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:n=>{e.onClick&&e.onClick(n)},children:[l?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:l})}):null,e.children,"inline"!==e.variant?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c.P,{icon:"external"==e.content?"link-external":"link",icntxt:!0})}):null]})});n.Z=o},7233:function(e,n,l){"use strict";l.d(n,{I:function(){return t}});let t={critical:"error",warning:"error-triangle",successful:"check-circle",informational:"info"}},6666:function(e,n,l){"use strict";l.d(n,{Z:function(){return t},e:function(){return i}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],i=e=>({...e,link:"".concat("/mono/review/fix-e2e-tests").concat(e.link)})},4105:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return h}});var t=l(2322),i=l(8429),c=l(2784),o=l(6510),a=l(7233),r=l(4938),s=l(7224);let d={closeButton:"Close Button"},u=(0,c.forwardRef)(function(e,n){var l,i,u,h,x,k,b,j,p,m,f,v,y,g,w,C,T,E,N,B,_;let[L,D]=(0,c.useState)(()=>null);return(0,c.useEffect)(()=>{e.stylePath&&D(e.stylePath)},[]),(0,t.jsxs)("div",{ref:n,className:"db-alert"+(e.className?" "+e.className:""),"data-variant":e.variant,"data-type":e.type,children:[L?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:L})}):null,(0,t.jsx)(o.P,{className:"db-alert-icon",icon:(B=e.icon,_=e.variant,B&&"_"!==B&&"none"!==B?B:a.I[_]||"info")}),(0,t.jsxs)("div",{className:"db-alert-content-container",children:[(0,t.jsxs)("div",{className:"db-alert-headline-container",children:[e.headline?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("strong",{children:e.headline})}):null,e.headline?null:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("span",{children:[e.children,e.text]})}),(0,t.jsxs)("div",{className:"db-alert-close-container",children:["inline"!==e.type?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.Z,{variant:"inline",className:"db-alert-headline-link",href:null===(l=e.link)||void 0===l?void 0:l.href,target:null===(i=e.link)||void 0===i?void 0:i.target,rel:null===(u=e.link)||void 0===u?void 0:u.rel,role:null===(h=e.link)||void 0===h?void 0:h.role,disabled:null===(x=e.link)||void 0===x?void 0:x.disabled,selected:null===(k=e.link)||void 0===k?void 0:k.selected,label:null===(b=e.link)||void 0===b?void 0:b.label,hreflang:null===(j=e.link)||void 0===j?void 0:j.hreflang,current:null===(p=e.link)||void 0===p?void 0:p.current,children:e.slotLink})}):null,(0,t.jsx)(r.Y,{icon:"close",variant:"transparent",size:"small",onClick:n=>{e.onClick&&e.onClick(n)},children:null!==(N=e.closeButtonText)&&void 0!==N?N:d.closeButton})]})]}),e.headline?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("span",{children:[e.children,e.text]})}):null,(0,t.jsx)(s.Z,{variant:"inline",className:"db-alert-content-link",href:null===(m=e.link)||void 0===m?void 0:m.href,target:null===(f=e.link)||void 0===f?void 0:f.target,rel:null===(v=e.link)||void 0===v?void 0:v.rel,role:null===(y=e.link)||void 0===y?void 0:y.role,disabled:null===(g=e.link)||void 0===g?void 0:g.disabled,selected:null===(w=e.link)||void 0===w?void 0:w.selected,label:null===(C=e.link)||void 0===C?void 0:C.label,hreflang:null===(T=e.link)||void 0===T?void 0:T.hreflang,current:null===(E=e.link)||void 0===E?void 0:E.current,children:e.slotLink})]})]})});var h=()=>(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("h1",{children:" DBAlert Examples "}),(0,t.jsxs)("dl",{className:"example-list",children:[(0,t.jsx)("dt",{children:"Default:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{children:"Test"})}),(0,t.jsx)("dt",{children:"closeButtonText:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{closeButtonText:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"closeButtonText, headline, icon, id, link, onClick, slotLink, text, title, type, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{closeButtonText:"account",headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",text:"account",title:"account",type:"inline",variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"headline, icon, id, link, onClick, slotLink, text, title, type, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{headline:"account",icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",text:"account",title:"account",type:"inline",variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"icon, id, link, onClick, slotLink, text, title, type, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",text:"account",title:"account",type:"inline",variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"icon, id, link, onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{icon:"account",id:"account",link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"icon, id, onClick, slotLink, title, type, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{icon:"account",id:"account",onClick:e=>console.log(e),slotLink:"account",title:"account",type:"inline",variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"icon, id, onClick, slotLink, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{icon:"account",id:"account",onClick:e=>console.log(e),slotLink:"account",title:"account",variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"icon, id, onClick, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"icon, id, onClick, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{icon:"account",id:"account",onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"icon, onClick, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{icon:"account",onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"icon, onClick:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{icon:"account",onClick:e=>console.log(e),children:"Test"})}),(0,t.jsx)("dt",{children:"icon:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{icon:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"headline:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{headline:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"text:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{text:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"link:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{link:{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",target:"_blank",rel:"account",role:"account",referrerpolicy:"no-referrer-when-downgrade",selected:!0},children:"Test"})}),(0,t.jsx)("dt",{children:"type:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{type:"inline",children:"Test"})}),(0,t.jsx)("dt",{children:"slotLink:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{slotLink:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{variant:"critical",children:"Test"})}),(0,t.jsx)("dt",{children:"id:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{id:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"onClick:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(u,{onClick:e=>console.log(e),children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=8346)}),_N_E=e.O()}]);