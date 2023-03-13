(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2416],{3876:function(e,n,l){var t={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[6846,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function s(e){if(!l.o(t,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=t[e],s=n[0];return l.e(n[1]).then(function(){return l(s)})}s.keys=function(){return Object.keys(t)},s.id=3876,e.exports=s},5376:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/icon/examples",function(){return l(3046)}])},8429:function(e,n,l){"use strict";l.d(n,{Z:function(){return b}});var t=l(2322),s=l(7900),o=l(2784);let i=()=>{let e=(0,o.useRef)(null),[n,l]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{var n;let t=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";t&&l(!0)},[]),[n,e]},a=e=>{let{children:n,element:l="div",...t}=e,[s,a]=i();return s?(0,o.createElement)(l,{...t,children:n}):(0,o.createElement)(l,{...t,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var c=l(6666);l(586);var r=l(5632);let d=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?d(e.children,n):[]})).map(e=>(0,c.e)(e)):[],u=e=>{let{children:n}=e,l=(0,r.useRouter)();return(0,t.jsx)(a,{children:(0,t.jsxs)(s.rG,{children:[(0,t.jsxs)(s.ff,{slot:"header",children:[(0,t.jsx)(s.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,t.jsx)(s.Pm,{data:JSON.stringify(d(c.Z,l.pathname))}),(0,t.jsx)(s.T2,{owner:"db-ui",repo:"mono"})]}),(0,t.jsx)("div",{children:n}),(0,t.jsx)(s.fw,{slot:"footer",copyright:!0})]})})};var b=u},648:function(e,n,l){"use strict";var t=l(2322),s=l(2784);let o=(0,s.forwardRef)(function(e,n){let[l,o]=(0,s.useState)(()=>null);return(0,s.useEffect)(()=>{e.stylePath&&o(e.stylePath)},[]),(0,t.jsxs)("span",{"aria-hidden":"true",ref:n,className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[l?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("link",{rel:"stylesheet",href:l})}):null,e.children]})});n.Z=o},6666:function(e,n,l){"use strict";l.d(n,{Z:function(){return t},e:function(){return s}});let t=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],s=e=>({...e,link:"".concat("/mono/review/fix-alert-issues").concat(e.link)})},3046:function(e,n,l){"use strict";l.r(n);var t=l(2322),s=l(8429),o=l(648);n.default=()=>(0,t.jsxs)(s.Z,{children:[(0,t.jsx)("h1",{children:" DBIcon Examples "}),(0,t.jsxs)("dl",{className:"example-list",children:[(0,t.jsx)("dt",{children:"Default:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(o.Z,{children:"Test"})}),(0,t.jsx)("dt",{children:"icon:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(o.Z,{icon:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"icntxt, icon, id, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(o.Z,{icntxt:!0,icon:"account",id:"account",title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"icntxt, id, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(o.Z,{icntxt:!0,id:"account",title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"id, title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(o.Z,{id:"account",title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"title:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(o.Z,{title:"account",children:"Test"})}),(0,t.jsx)("dt",{children:"icntxt:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(o.Z,{icntxt:!0,children:"Test"})}),(0,t.jsx)("dt",{children:"id:"})," ",(0,t.jsx)("dd",{children:(0,t.jsx)(o.Z,{id:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=5376)}),_N_E=e.O()}]);