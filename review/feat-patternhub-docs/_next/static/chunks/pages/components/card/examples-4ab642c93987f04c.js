(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1650],{3876:function(e,n,i){var t={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function l(e){if(!i.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],l=n[0];return i.e(n[1]).then(function(){return i(l)})}l.keys=function(){return Object.keys(t)},l.id=3876,e.exports=l},280:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/card/examples",function(){return i(7269)}])},8429:function(e,n,i){"use strict";i.d(n,{Z:function(){return m}});var t=i(2322),l=i(7900),s=i(2784);let o=()=>{let e=(0,s.useRef)(null),[n,i]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&i(!0)},[]),[n,e]},c=e=>{let{children:n,element:i="div",...t}=e,[l,c]=o();return l?(0,s.createElement)(i,{...t,children:n}):(0,s.createElement)(i,{...t,ref:c,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var d=i(6666);i(586);var r=i(5632);let a=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?a(e.children,n):[]})).map(e=>(0,d.e)(e)):[],h=e=>{let{children:n}=e,[i,o]=(0,s.useState)(!1),[h,m]=(0,s.useState)(!1),g=(0,r.useRouter)();return(0,s.useEffect)(()=>{g.query&&(o("true"===g.query.fullscreen),m("true"===g.query.noh1))},[g]),(0,t.jsxs)(c,{children:[g.isReady&&i&&(0,t.jsx)("div",{className:h?"noh1":"",children:n}),g.isReady&&!i&&(0,t.jsxs)(l.rG,{children:[(0,t.jsxs)(l.ff,{slot:"header",children:[(0,t.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(l.Pm,{data:JSON.stringify(a(d.Z,g.pathname))}),(0,t.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(l.fw,{slot:"footer",copyright:!0})]})]})};var m=h},4728:function(e,n,i){"use strict";var t=i(2322),l=i(2784);let s=(0,l.forwardRef)(function(e,n){let[i,s]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,t.jsxs)("div",{ref:n,className:"db-card"+(e.className?" "+e.className:""),"data-variant":e.variant,"data-color-variant":e.colorVariant,"data-direction":e.direction,onClick:n=>{e.onClick&&e.onClick(n)},children:[i?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:i})}):null,e.imgSrc?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("img",{className:"db-card-image",src:e.imgSrc,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}):null,e.children]})});n.Z=s},6666:function(e,n,i){"use strict";i.d(n,{Z:function(){return t},e:function(){return l}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"HTML",link:"/showcases/html"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],l=e=>({...e,link:"".concat("/mono/review/feat-patternhub-docs").concat(e.link)})},7269:function(e,n,i){"use strict";i.r(n);var t=i(2322),l=i(8429),s=i(4728);n.default=()=>(0,t.jsxs)(l.Z,{children:[(0,t.jsx)("h1",{children:" DBCard Examples "}),(0,t.jsxs)("dl",{className:"example-list",children:[(0,t.jsx)("dt",{children:"Default:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{children:"Test"})}),(0,t.jsx)("dt",{children:"colorVariant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{colorVariant:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"colorVariant, direction, id, imgAlt, imgHeight, imgSrc, imgWidth, onClick, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{colorVariant:"account",direction:"row",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",variant:"interactive",children:"Test"})}),(0,t.jsx)("dt",{children:"direction, id, imgAlt, imgHeight, imgSrc, imgWidth, onClick, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{direction:"row",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",variant:"interactive",children:"Test"})}),(0,t.jsx)("dt",{children:"id, imgAlt, imgHeight, imgSrc, imgWidth, onClick, title, variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",variant:"interactive",children:"Test"})}),(0,t.jsx)("dt",{children:"id, imgAlt, imgHeight, imgSrc, imgWidth, onClick, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth, onClick, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth, onClick:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,onClick:e=>console.log(e),children:"Test"})}),(0,t.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,t.jsx)("dt",{children:"imgHeight, imgSrc, imgWidth:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,t.jsx)("dt",{children:"imgHeight, imgWidth:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{imgHeight:100,imgWidth:100,children:"Test"})}),(0,t.jsx)("dt",{children:"imgWidth:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{imgWidth:100,children:"Test"})}),(0,t.jsx)("dt",{children:"direction:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{direction:"row",children:"Test"})}),(0,t.jsx)("dt",{children:"variant:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{variant:"interactive",children:"Test"})}),(0,t.jsx)("dt",{children:"id:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{id:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"onClick:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{onClick:e=>console.log(e),children:"Test"})}),(0,t.jsx)("dt",{children:"imgAlt:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{imgAlt:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"imgSrc:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"Test"})}),(0,t.jsx)("dt",{children:"imgHeight:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(s.Z,{imgHeight:100,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=280)}),_N_E=e.O()}]);