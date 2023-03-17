(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6398],{3876:function(e,n,t){var i={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function l(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],l=n[0];return t.e(n[1]).then(function(){return t(l)})}l.keys=function(){return Object.keys(i)},l.id=3876,e.exports=l},6259:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/brand/examples",function(){return t(8227)}])},8429:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var i=t(2322),l=t(7900),s=t(2784);let o=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let i=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";i&&t(!0)},[]),[n,e]},c=e=>{let{children:n,element:t="div",...i}=e,[l,c]=o();return l?(0,s.createElement)(t,{...i,children:n}):(0,s.createElement)(t,{...i,ref:c,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var d=t(6666);t(586);var a=t(5632);let r=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?r(e.children,n):[]})).map(e=>(0,d.e)(e)):[],h=e=>{let{children:n}=e,t=(0,a.useRouter)();return(0,i.jsx)(c,{children:(0,i.jsxs)(l.rG,{children:[(0,i.jsxs)(l.ff,{slot:"header",children:[(0,i.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,i.jsx)(l.Pm,{data:JSON.stringify(r(d.Z,t.pathname))}),(0,i.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(l.fw,{slot:"footer",copyright:!0})]})})};var m=h},3882:function(e,n,t){"use strict";var i=t(2322),l=t(2784);let s={anchorRef:"/",src:"./assets/images/db_logo.svg"},o=(0,l.forwardRef)(function(e,n){var t,o;let[c,d]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&d(e.stylePath)},[]),(0,i.jsxs)("div",{ref:n,className:"db-brand"+(e.className?" "+e.className:""),children:[c?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("link",{rel:"stylesheet",href:c})}):null,(0,i.jsxs)("a",{href:null!==(t=e.anchorRef)&&void 0!==t?t:s.anchorRef,title:e.anchorTitle,rel:e.anchorRelation,children:[e.hideDefaultAsset?null:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("img",{className:"db-logo",src:null!==(o=e.imgSrc)&&void 0!==o?o:s.src,alt:e.imgAlt,height:e.imgHeight,width:e.imgWidth})}),e.anchorChildren?(0,i.jsx)(i.Fragment,{children:e.children}):null]}),e.anchorChildren?null:(0,i.jsx)(i.Fragment,{children:e.children})]})});n.Z=o},6666:function(e,n,t){"use strict";t.d(n,{Z:function(){return i},e:function(){return l}});let i=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],l=e=>({...e,link:"".concat("/mono/review/chore-radio-optimizations").concat(e.link)})},8227:function(e,n,t){"use strict";t.r(n);var i=t(2322),l=t(8429),s=t(3882);n.default=()=>(0,i.jsxs)(l.Z,{children:[(0,i.jsx)("h1",{children:" DBBrand Examples "}),(0,i.jsxs)("dl",{className:"example-list",children:[(0,i.jsx)("dt",{children:"Default:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{children:"Test"})}),(0,i.jsx)("dt",{children:"anchorChildren:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{anchorChildren:!0,children:"Test"})}),(0,i.jsx)("dt",{children:"anchorChildren, anchorRef, anchorRelation, anchorTitle, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{anchorChildren:!0,anchorRef:"account",anchorRelation:"account",anchorTitle:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"anchorRef, anchorRelation, anchorTitle, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{anchorRef:"account",anchorRelation:"account",anchorTitle:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"anchorRelation, anchorTitle, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{anchorRelation:"account",anchorTitle:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"anchorRelation, hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{anchorRelation:"account",hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"hideDefaultAsset, id, imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{hideDefaultAsset:"account",id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"id, imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{id:"account",imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth, title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"imgAlt, imgHeight, imgSrc, imgWidth:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{imgAlt:"account",imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,i.jsx)("dt",{children:"imgHeight, imgSrc, imgWidth:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{imgHeight:100,imgSrc:"https://db-ui.github.io/images/db_logo.svg",imgWidth:100,children:"Test"})}),(0,i.jsx)("dt",{children:"imgHeight, imgWidth:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{imgHeight:100,imgWidth:100,children:"Test"})}),(0,i.jsx)("dt",{children:"imgWidth:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{imgWidth:100,children:"Test"})}),(0,i.jsx)("dt",{children:"anchorRef:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{anchorRef:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"anchorTitle:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{anchorTitle:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"anchorRelation:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{anchorRelation:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"hideDefaultAsset:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{hideDefaultAsset:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"id:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{id:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"title:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{title:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"imgAlt:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{imgAlt:"account",children:"Test"})}),(0,i.jsx)("dt",{children:"imgSrc:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{imgSrc:"https://db-ui.github.io/images/db_logo.svg",children:"Test"})}),(0,i.jsx)("dt",{children:"imgHeight:"})," ",(0,i.jsx)("dd",{children:(0,i.jsx)(s.Z,{imgHeight:100,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=6259)}),_N_E=e.O()}]);