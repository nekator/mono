(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7683],{3876:function(e,n,r){var t={"./db-accordion.entry.js":[4223,4223],"./db-brand.entry.js":[9878,9878],"./db-breadcrumb.entry.js":[6560,6560],"./db-button_2.entry.js":[7250,7250],"./db-card.entry.js":[1187,1187],"./db-cards.entry.js":[4063,4063],"./db-checkbox.entry.js":[3735,3735],"./db-chip.entry.js":[1204,1204],"./db-dropdown.entry.js":[3474,3474],"./db-footer.entry.js":[8795,8795],"./db-header.entry.js":[3954,3954],"./db-headline.entry.js":[4861,4861],"./db-image.entry.js":[6924,6924],"./db-input.entry.js":[3824,3824],"./db-language-switcher.entry.js":[986,986],"./db-link.entry.js":[8105,8105],"./db-linklist.entry.js":[8507,8507],"./db-mainnavigation.entry.js":[4791,4791],"./db-meta.entry.js":[4168,4168],"./db-metanavigation.entry.js":[6134,6134],"./db-notification.entry.js":[2736,2736],"./db-notifications.entry.js":[8929,8929],"./db-overflow-menu.entry.js":[3413,3413],"./db-page.entry.js":[1349,1349],"./db-pagination.entry.js":[8120,8120],"./db-progress.entry.js":[7818,7818],"./db-radio.entry.js":[7686,7686],"./db-select.entry.js":[1346,1346],"./db-sidenavi.entry.js":[6095,6095],"./db-tab-bar.entry.js":[1065,1065],"./db-tab.entry.js":[5964,5964],"./db-table.entry.js":[1029,1029],"./db-tag.entry.js":[8024,8024],"./db-textarea.entry.js":[7410,7410],"./db-toggle.entry.js":[2169,2169],"./github-version-switcher.entry.js":[825,825]};function s(e){if(!r.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],s=n[0];return r.e(n[1]).then(function(){return r(s)})}s.keys=function(){return Object.keys(t)},s.id=3876,e.exports=s},6780:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcases",function(){return r(5467)}])},5554:function(e,n,r){"use strict";r.d(n,{Z:function(){return b}});var t=r(2322),s=r(3948),i=r(2784);let a=()=>{let e=(0,i.useRef)(null),[n,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&r(!0)},[]),[n,e]},l=e=>{let{children:n,element:r="div",...t}=e,[s,l]=a();return s?(0,i.createElement)(r,{...t,children:n}):(0,i.createElement)(r,{...t,ref:l,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var o=r(1092);r(8155);var d=r(5632);let c=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?c(e.children,n):[]})).map(e=>(0,o.e)(e)):[],u=e=>{let{children:n}=e,r=(0,d.useRouter)();return(0,t.jsx)(l,{children:(0,t.jsxs)(s.rG,{children:[(0,t.jsxs)(s.ff,{slot:"header",children:[(0,t.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(s.Pm,{data:JSON.stringify(c(o.Z,r.pathname))}),(0,t.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(s.fw,{slot:"footer",copyright:!0})]})})};var b=u},1092:function(e,n,r){"use strict";r.d(n,{Z:function(){return t},e:function(){return s}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components"},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vue",link:"/showcases/vue"}]}],s=e=>({...e,link:"".concat("/mono/review/fix-link").concat(e.link)})},5467:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r(2322),s=r(5554),i=r(2784);function a(e){let[n,r]=(0,i.useState)(()=>null);return(0,i.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,t.jsxs)("div",{"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-direction":e.direction,onClick:n=>{e.onClick&&e.onClick(n)},className:"db-card"+(e.className?" "+e.className:""),children:[n?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:n})}):null,e.imgSrc?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})}var l=r(1092);let o=()=>{var e;return(0,t.jsxs)(s.Z,{children:[(0,t.jsx)("h1",{children:"Showcases"}),(0,t.jsx)("div",{children:null===(e=l.Z[3].children)||void 0===e?void 0:e.map(e=>(0,l.e)(e)).map(e=>(0,t.jsx)("a",{href:e.link,children:(0,t.jsx)(a,{variant:"ia",children:e.label})},"showcase-card-".concat(e.label)))})]})};var d=o}},function(e){e.O(0,[3092,9774,2888,179],function(){return e(e.s=6780)}),_N_E=e.O()}]);