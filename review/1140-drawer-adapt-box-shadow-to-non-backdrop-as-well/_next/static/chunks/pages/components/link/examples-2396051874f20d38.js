(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1302],{83876:function(e,r,t){var n={"./db-accordion.entry.js":[23681,3681],"./db-brand.entry.js":[64540,4540],"./db-breadcrumb.entry.js":[80214,214],"./db-button_2.entry.js":[77669,7669],"./db-card.entry.js":[59631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[96713,6713],"./db-chip.entry.js":[85463,5463],"./db-dropdown.entry.js":[53436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[76039,6039],"./db-headline.entry.js":[93870,3870],"./db-image.entry.js":[76934,6934],"./db-input.entry.js":[12164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[86846,6846],"./db-linklist.entry.js":[36339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[38695,8695],"./db-meta.entry.js":[49583,9583],"./db-metanavigation.entry.js":[26148,6148],"./db-notification.entry.js":[86900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[53643,3643],"./db-pagination.entry.js":[87182,7182],"./db-progress.entry.js":[77635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[12574,2574],"./db-sidenavi.entry.js":[70211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[63473,4676],"./db-table.entry.js":[47542,7542],"./db-tag.entry.js":[60195,195],"./db-textarea.entry.js":[80679,679],"./db-toggle.entry.js":[77645,7645],"./github-version-switcher.entry.js":[38308,8308]};function l(e){if(!t.o(n,e))return Promise.resolve().then(function(){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r});var r=n[e],l=r[0];return t.e(r[1]).then(function(){return t(l)})}l.keys=function(){return Object.keys(n)},l.id=83876,e.exports=l},72779:function(e,r){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var c=typeof t;if("string"===c||"number"===c)e.push(t);else if(Array.isArray(t)){if(t.length){var d=l.apply(null,t);d&&e.push(d)}}else if("object"===c){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var a in t)n.call(t,a)&&t[a]&&e.push(a)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0!==(t=(function(){return l}).apply(r,[]))&&(e.exports=t)}()},23438:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link/examples",function(){return t(26629)}])},70969:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(52322),l=t(77900),c=t(2784);let d=()=>{let e=(0,c.useRef)(null),[r,t]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var r;let n=(null===(r=null==e?void 0:e.current)||void 0===r?void 0:r.innerHTML)==="";n&&t(!0)},[]),[r,e]};var a=e=>{let{children:r,element:t="div",...n}=e,[l,a]=d();return l?(0,c.createElement)(t,{...n,children:r}):(0,c.createElement)(t,{...n,ref:a,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};let i=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",name:"card"},{label:"DBDivider",name:"divider"},{label:"DBDrawer",name:"drawer"},{label:"DBHeader",name:"header"},{label:"DBPage",name:"page"},{label:"DBSection",name:"section"}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",name:"button"},{label:"DBLink",name:"link"}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",name:"input"},{label:"DBRadio",name:"radio"},{label:"DBCheckbox",name:"checkbox"},{label:"DBSelect",name:"select"}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",name:"brand"},{label:"DBIcon",name:"icon"},{label:"DBInfotext",name:"infotext"},{label:"DBTag",name:"tag"}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",name:"alert"}]}].map(e=>({...e,children:e.children.map(e=>({label:e.label,link:"/components/".concat(e.name),children:[{label:"Properties",link:"/components/".concat(e.name,"/properties")},{label:"Examples",link:"/components/".concat(e.name,"/examples")},{label:"How to use",link:"/components/".concat(e.name,"/how-to-use")},{label:"Migration",link:"/components/".concat(e.name,"/migration")}]}))}))}],o=e=>({...e,link:"".concat("/mono/review/1140-drawer-adapt-box-shadow-to-non-backdrop-as-well").concat(e.link)});t(60586);var s=t(5632);let h=(e,r)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===r||"/"!==e.link&&r.includes(e.link),children:e.children?h(e.children,r):[]})).map(e=>o(e)):[];var u=e=>{let{children:r}=e,[t,d]=(0,c.useState)(!1),[o,u]=(0,c.useState)(!1),[b,x]=(0,c.useState)(!1),f=(0,s.useRouter)();return(0,c.useEffect)(()=>{f.query&&(d("true"===f.query.fullscreen),u("true"===f.query.noh1),x("true"===f.query.properties))},[f]),(0,n.jsxs)(a,{children:[f.isReady&&t&&(0,n.jsx)("div",{className:"".concat(o?"noh1":""," ").concat(b?"is-properties":""),children:r}),f.isReady&&!t&&(0,n.jsxs)(l.rG,{children:[(0,n.jsxs)(l.ff,{slot:"header",children:[(0,n.jsx)(l.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,n.jsx)(l.Pm,{data:JSON.stringify(h(i,f.pathname))}),(0,n.jsx)(l.T2,{owner:"db-ui",repo:"mono"})]}),(0,n.jsx)("div",{children:r}),(0,n.jsx)(l.fw,{slot:"footer",copyright:!0})]})]})}},87224:function(e,r,t){"use strict";var n=t(52322),l=t(2784),c=t(72779),d=t.n(c);let a=(0,l.forwardRef)(function(e,r){let[t,c]=(0,l.useState)(()=>null);return(0,l.useEffect)(()=>{e.stylePath&&c(e.stylePath)},[]),(0,n.jsxs)("a",{ref:r,className:function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return d()(r)}("db-link",e.className),href:e.href,title:e.title,target:e.target,rel:e.rel,role:e.role,"aria-disabled":e.disabled,tabIndex:e.disabled?-1:0,"aria-selected":e.selected,"aria-label":e.label,hrefLang:e.hreflang,"aria-current":e.current,"data-size":e.size,"data-variant":e.variant,"data-content":e.content||"internal",onClick:r=>{e.onClick&&e.onClick(r)},children:[t?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("link",{rel:"stylesheet",href:t})}):null,e.text?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{children:e.text})}):null,e.children]})});r.Z=a},26629:function(e,r,t){"use strict";t.r(r);var n=t(52322),l=t(70969),c=t(87224);r.default=()=>(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("h1",{children:" DBLink Examples "}),(0,n.jsxs)("dl",{className:"example-list",children:[(0,n.jsx)("dt",{children:"Default:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{children:"Test"})}),(0,n.jsx)("dt",{children:"content:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{content:"internal",children:"Test"})}),(0,n.jsx)("dt",{children:"content, current, describedbyid, disabled, href, hreflang, id, key, label, onClick, referrerpolicy, rel, role, selected, size, tabIndex, target, text, title, variant:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{content:"internal",current:"time",describedbyid:"account",disabled:!0,href:"account",hreflang:"account",id:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",tabIndex:100,target:"_blank",text:"account",title:"account",variant:"primary",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"current, describedbyid, disabled, href, hreflang, id, key, label, onClick, referrerpolicy, rel, role, selected, size, tabIndex, target, text, title, variant:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{current:"time",describedbyid:"account",disabled:!0,href:"account",hreflang:"account",id:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",tabIndex:100,target:"_blank",text:"account",title:"account",variant:"primary",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"current, describedbyid, disabled, href, hreflang, key, label, onClick, referrerpolicy, rel, role, selected, size, tabIndex, target, text, title, variant:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{current:"time",describedbyid:"account",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,size:"small",tabIndex:100,target:"_blank",text:"account",title:"account",variant:"primary",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"current, describedbyid, disabled, href, hreflang, key, label, onClick, referrerpolicy, rel, role, selected, tabIndex, target, text, title, variant:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{current:"time",describedbyid:"account",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,tabIndex:100,target:"_blank",text:"account",title:"account",variant:"primary",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"current, describedbyid, disabled, href, hreflang, key, label, onClick, referrerpolicy, rel, role, selected, tabIndex, target, text, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{current:"time",describedbyid:"account",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,tabIndex:100,target:"_blank",text:"account",title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"current, disabled, href, hreflang, key, label, onClick, referrerpolicy, rel, role, selected, tabIndex, target, text, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,tabIndex:100,target:"_blank",text:"account",title:"account",children:"Test"},"account")}),(0,n.jsx)("dt",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, tabIndex, target, text, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,tabIndex:100,target:"_blank",text:"account",title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, target, text, title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",text:"account",title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"current, disabled, href, hreflang, label, onClick, referrerpolicy, rel, role, selected, target, text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",onClick:e=>console.log(e),referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"current, disabled, href, hreflang, label, referrerpolicy, rel, role, selected, target, text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{current:"time",disabled:!0,href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"disabled, href, hreflang, label, referrerpolicy, rel, role, selected, target, text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{disabled:!0,href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"href, hreflang, label, referrerpolicy, rel, role, selected, target, text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{href:"account",hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"hreflang, label, referrerpolicy, rel, role, selected, target, text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{hreflang:"account",label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"label, referrerpolicy, rel, role, selected, target, text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{label:"account",referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"referrerpolicy, rel, role, selected, target, text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,target:"_blank",text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"referrerpolicy, rel, role, selected, text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",rel:"account",role:"account",selected:!0,text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"referrerpolicy, role, selected, text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",role:"account",selected:!0,text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"referrerpolicy, selected, text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",selected:!0,text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"selected, text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{selected:!0,text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"text:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{text:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"id:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{id:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"size:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{size:"small",children:"Test"})}),(0,n.jsx)("dt",{children:"variant:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{variant:"primary",children:"Test"})}),(0,n.jsx)("dt",{children:"describedbyid:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{describedbyid:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"key:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{children:"Test"},"account")}),(0,n.jsx)("dt",{children:"tabIndex:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{tabIndex:100,children:"Test"})}),(0,n.jsx)("dt",{children:"title:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{title:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"onClick:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{onClick:e=>console.log(e),children:"Test"})}),(0,n.jsx)("dt",{children:"current:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{current:"time",children:"Test"})}),(0,n.jsx)("dt",{children:"disabled:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{disabled:!0,children:"Test"})}),(0,n.jsx)("dt",{children:"href:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{href:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"hreflang:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{hreflang:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"label:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{label:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"target:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{target:"_blank",children:"Test"})}),(0,n.jsx)("dt",{children:"rel:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{rel:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"role:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{role:"account",children:"Test"})}),(0,n.jsx)("dt",{children:"referrerpolicy:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{referrerpolicy:"no-referrer-when-downgrade",children:"Test"})}),(0,n.jsx)("dt",{children:"selected:"})," ",(0,n.jsx)("dd",{children:(0,n.jsx)(c.Z,{selected:!0,children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=23438)}),_N_E=e.O()}]);