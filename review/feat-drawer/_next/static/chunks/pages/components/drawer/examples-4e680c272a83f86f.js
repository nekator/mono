(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3391],{3876:function(e,n,t){var l={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function o(e){if(!t.o(l,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=l[e],o=n[0];return t.e(n[1]).then(function(){return t(o)})}o.keys=function(){return Object.keys(l)},o.id=3876,e.exports=o},6238:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/drawer/examples",function(){return t(263)}])},8429:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var l=t(2322),o=t(7900),s=t(2784);let i=()=>{let e=(0,s.useRef)(null),[n,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{var n;let l=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";l&&t(!0)},[]),[n,e]},r=e=>{let{children:n,element:t="div",...l}=e,[o,r]=i();return o?(0,s.createElement)(t,{...l,children:n}):(0,s.createElement)(t,{...l,ref:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var d=t(6666);t(586);var c=t(5632);let a=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?a(e.children,n):[]})).map(e=>(0,d.e)(e)):[],u=e=>{let{children:n}=e,t=(0,c.useRouter)();return(0,l.jsx)(r,{children:(0,l.jsxs)(o.rG,{children:[(0,l.jsxs)(o.ff,{slot:"header",children:[(0,l.jsx)(o.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(o.Pm,{data:JSON.stringify(a(d.Z,t.pathname))}),(0,l.jsx)(o.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:n}),(0,l.jsx)(o.fw,{slot:"footer",copyright:!0})]})})};var h=u},6889:function(e,n,t){"use strict";var l=t(2322),o=t(2784),s=t(6510);let i=(0,o.forwardRef)(function(e,n){function t(e){return e&&"_"!==e&&"none"!==e}let[i,r]=(0,o.useState)(()=>null);return(0,o.useEffect)(()=>{e.stylePath&&r(e.stylePath)},[]),(0,l.jsxs)("button",{ref:n,type:e.type,disabled:e.disabled,"aria-label":e.label,className:"db-button"+(e.className?" "+e.className:"")+(t(e.icon)&&!e.icntxt?" is-icon-text-replace":""),"data-size":e.size,"data-state":e.state,"data-width":e.width,"data-variant":e.variant,onClick:n=>{e.onClick&&e.onClick(n)},children:[i?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:i})}):null,t(e.icon)?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.P,{icon:e.icon,icntxt:e.icntxt})}):null,e.children,e.text]})});n.Z=i},4938:function(e,n,t){"use strict";t.d(n,{Y:function(){return l.Z}});var l=t(6889)},7008:function(e,n,t){"use strict";var l=t(2322),o=t(2784),s=t(4938);let i=(0,o.forwardRef)(function(e,n){let t=(0,o.useRef)(n),i=(0,o.useRef)(null);function r(n){("close"===n||"DIALOG"===n.target.nodeName&&!e.noBackdrop)&&e.onClose&&e.onClose()}function d(){if(t.current){var n,l;e.open&&!t.current.open&&(null===(n=i.current)||void 0===n||n.classList.remove("hide"),e.noBackdrop?t.current.show():t.current.showModal()),!e.open&&t.current.open&&(null===(l=i.current)||void 0===l||l.classList.add("hide"),setTimeout(()=>{var e,n;null===(e=i.current)||void 0===e||e.classList.remove("hide"),null===(n=t.current)||void 0===n||n.close()},401))}}let[c,a]=(0,o.useState)(()=>null);return(0,o.useEffect)(()=>{e.stylePath&&a(e.stylePath),d()},[]),(0,o.useEffect)(()=>{d()},[e.open]),(0,l.jsxs)("dialog",{className:"db-drawer",ref:t,onClick:e=>{r(e)},"data-backdrop":!e.noBackdrop,children:[c?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:c})}):null,(0,l.jsxs)("article",{ref:i,className:"db-drawer-container"+(e.className?" "+e.className:""),"data-size":e.size,"data-width":e.width,"data-direction":e.direction,"data-rounded":e.rounded,children:[(0,l.jsxs)("header",{className:"db-drawer-header",children:[(0,l.jsx)("div",{children:e.slotDrawerHeader}),e.withCloseButton?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s.Y,{id:"button-close-drawer",icon:"close",variant:"transparent",onClick:()=>r("close"),children:"Close Drawer"})}):null]}),(0,l.jsx)("div",{className:"db-drawer-content",children:e.children})]})]})});n.Z=i},648:function(e,n,t){"use strict";var l=t(2322),o=t(2784);let s=(0,o.forwardRef)(function(e,n){let[t,s]=(0,o.useState)(()=>null);return(0,o.useEffect)(()=>{e.stylePath&&s(e.stylePath)},[]),(0,l.jsxs)("span",{"aria-hidden":"true",ref:n,className:"db-icon"+(e.className?" "+e.className:"")+(e.icntxt?"":" is-icon-text-replace"),"data-icon":e.icon,children:[t?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:t})}):null,e.children]})});n.Z=s},6510:function(e,n,t){"use strict";t.d(n,{P:function(){return l.Z}});var l=t(648)},6666:function(e,n,t){"use strict";t.d(n,{Z:function(){return l},e:function(){return o}});let l=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],o=e=>({...e,link:"".concat("/mono/review/feat-drawer").concat(e.link)})},263:function(e,n,t){"use strict";t.r(n);var l=t(2322),o=t(8429),s=t(7008);n.default=()=>(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("h1",{children:" DBDrawer Examples "}),(0,l.jsxs)("dl",{className:"example-list",children:[(0,l.jsx)("dt",{children:"Default:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{children:"Test"})}),(0,l.jsx)("dt",{children:"open:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{open:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"direction, id, noBackdrop, onClose, open, rounded, size, slotDrawerHeader, title, width, withCloseButton:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),open:!0,rounded:!0,size:"small",slotDrawerHeader:"account",title:"account",width:"full",withCloseButton:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"direction, id, noBackdrop, onClose, rounded, size, slotDrawerHeader, title, width, withCloseButton:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),rounded:!0,size:"small",slotDrawerHeader:"account",title:"account",width:"full",withCloseButton:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"direction, id, noBackdrop, onClose, rounded, size, title, width, withCloseButton:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),rounded:!0,size:"small",title:"account",width:"full",withCloseButton:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"direction, id, noBackdrop, onClose, rounded, title, width, withCloseButton:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),rounded:!0,title:"account",width:"full",withCloseButton:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"direction, id, noBackdrop, onClose, rounded, title, withCloseButton:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),rounded:!0,title:"account",withCloseButton:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"direction, id, noBackdrop, onClose, rounded, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{direction:"right",id:"account",noBackdrop:!0,onClose:()=>console.log("onClose"),rounded:!0,title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"direction, id, onClose, rounded, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{direction:"right",id:"account",onClose:()=>console.log("onClose"),rounded:!0,title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"direction, id, onClose, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{direction:"right",id:"account",onClose:()=>console.log("onClose"),title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"id, onClose, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{id:"account",onClose:()=>console.log("onClose"),title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"onClose, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{onClose:()=>console.log("onClose"),title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"onClose:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{onClose:()=>console.log("onClose"),children:"Test"})}),(0,l.jsx)("dt",{children:"slotDrawerHeader:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{slotDrawerHeader:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"size:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{size:"small",children:"Test"})}),(0,l.jsx)("dt",{children:"width:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{width:"full",children:"Test"})}),(0,l.jsx)("dt",{children:"withCloseButton:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{withCloseButton:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"noBackdrop:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{noBackdrop:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"rounded:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{rounded:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"direction:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{direction:"right",children:"Test"})}),(0,l.jsx)("dt",{children:"id:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{id:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(s.Z,{title:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=6238)}),_N_E=e.O()}]);