(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1302],{83876:function(e,r,n){var l={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,3473],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function t(e){if(!n.o(l,e))return Promise.resolve().then(function(){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r});var r=l[e],t=r[0];return n.e(r[1]).then(function(){return n(t)})}t.keys=function(){return Object.keys(l)},t.id=83876,e.exports=t},23438:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link/examples",function(){return n(26629)}])},70969:function(e,r,n){"use strict";n.d(r,{Z:function(){return j}});var l=n(52322),t=n(77900),c=n(2784);let d=()=>{let e=(0,c.useRef)(null),[r,n]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var r;let l=(null===(r=null==e?void 0:e.current)||void 0===r?void 0:r.innerHTML)==="";l&&n(!0)},[]),[r,e]},a=e=>{let{children:r,element:n="div",...l}=e,[t,a]=d();return t?(0,c.createElement)(n,{...l,children:r}):(0,c.createElement)(n,{...l,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})},i=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],o=e=>({...e,link:"".concat("/mono/review/docs-foundations-components").concat(e.link)});n(60586);var s=n(5632);let h=(e,r)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===r||"/"!==e.link&&r.includes(e.link),children:e.children?h(e.children,r):[]})).map(e=>o(e)):[],u=e=>{let{children:r}=e,[n,d]=(0,c.useState)(!1),[o,u]=(0,c.useState)(!1),[j,b]=(0,c.useState)(!1),f=(0,s.useRouter)();return(0,c.useEffect)(()=>{f.query&&(d("true"===f.query.fullscreen),u("true"===f.query.noh1),b("true"===f.query.properties))},[f]),(0,l.jsxs)(a,{children:[f.isReady&&n&&(0,l.jsx)("div",{className:"".concat(o?"noh1":""," ").concat(j?"is-properties":""),children:r}),f.isReady&&!n&&(0,l.jsxs)(t.rG,{children:[(0,l.jsxs)(t.ff,{slot:"header",children:[(0,l.jsx)(t.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,l.jsx)(t.Pm,{data:JSON.stringify(h(i,f.pathname))}),(0,l.jsx)(t.T2,{owner:"db-ui",repo:"mono"})]}),(0,l.jsx)("div",{children:r}),(0,l.jsx)(t.fw,{slot:"footer",copyright:!0})]})]})};var j=u},87224:function(e,r,n){"use strict";var l=n(52322),t=n(2784);let c=(0,t.forwardRef)(function(e,r){let[n,c]=(0,t.useState)(()=>null);return(0,t.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,l.jsxs)("a",{ref:r,className:"db-link"+(e.className?" "+e.className:""),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:r=>{e.onClick&&e.onClick(r)},children:[n?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("link",{rel:"stylesheet",href:n})}):null,e.children]})});r.Z=c},26629:function(e,r,n){"use strict";n.r(r);var l=n(52322),t=n(70969),c=n(87224);r.default=()=>(0,l.jsxs)(t.Z,{children:[(0,l.jsx)("h1",{children:" DBLink Examples "}),(0,l.jsxs)("dl",{className:"example-list",children:[(0,l.jsx)("dt",{children:"Default:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{children:"Test"})}),(0,l.jsx)("dt",{children:"content:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{content:"internal",children:"Test"})}),(0,l.jsx)("dt",{children:"content, current, disabled, href, hreflang, id, key, label, onClick, referrerpolicy, rel, role, selected, size, target, title, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{content:"internal",current:"time",disabled:!0,href:"account",hreflang:"account",id:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",target:"_blank",title:"account",variant:"primary",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"current, disabled, href, hreflang, id, key, label, onClick, referrerpolicy, rel, role, selected, size, target, title, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",id:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",target:"_blank",title:"account",variant:"primary",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"current, disabled, href, hreflang, key, label, onClick, referrerpolicy, rel, role, selected, size, target, title, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",target:"_blank",title:"account",variant:"primary",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"current, disabled, href, hreflang, key, label, onClick, referrerpolicy, rel, role, selected, target, title, variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",title:"account",variant:"primary",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"current, disabled, href, hreflang, key, label, onClick, referrerpolicy, rel, role, selected, target, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",title:"account",children:"Test"},"account")}),(0,l.jsx)("dt",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, target, title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,l.jsx)("dt",{children:"current, disabled, href, hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,l.jsx)("dt",{children:"disabled, href, hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{disabled:!0,href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,l.jsx)("dt",{children:"href, hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,l.jsx)("dt",{children:"hreflang, label, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,l.jsx)("dt",{children:"label, referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,l.jsx)("dt",{children:"referrerpolicy, rel, role, selected, target:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",children:"Test"})}),(0,l.jsx)("dt",{children:"referrerpolicy, rel, role, selected:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"referrerpolicy, role, selected:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",role:"account",selected:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"referrerpolicy, selected:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",selected:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"selected:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{selected:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"id:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{id:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"size:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{size:"small",children:"Test"})}),(0,l.jsx)("dt",{children:"variant:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{variant:"primary",children:"Test"})}),(0,l.jsx)("dt",{children:"key:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{children:"Test"},"account")}),(0,l.jsx)("dt",{children:"title:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{title:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"onClick:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{onClick:e=>console.log(e),children:"Test"})}),(0,l.jsx)("dt",{children:"current:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{current:"time",children:"Test"})}),(0,l.jsx)("dt",{children:"disabled:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{disabled:!0,children:"Test"})}),(0,l.jsx)("dt",{children:"href:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{href:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"hreflang:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{hreflang:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"label:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{label:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"target:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{target:"_blank",children:"Test"})}),(0,l.jsx)("dt",{children:"rel:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{rel:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"role:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{role:"account",children:"Test"})}),(0,l.jsx)("dt",{children:"referrerpolicy:"})," ",(0,l.jsx)("dd",{children:(0,l.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=23438)}),_N_E=e.O()}]);