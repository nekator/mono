(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5341],{3876:function(e,n,l){var o={"./db-accordion.entry.js":[3681,3681],"./db-brand.entry.js":[4540,4540],"./db-breadcrumb.entry.js":[214,214],"./db-button_2.entry.js":[7669,7669],"./db-card.entry.js":[9631,9631],"./db-cards.entry.js":[2884,2884],"./db-checkbox.entry.js":[6713,6713],"./db-chip.entry.js":[5463,5463],"./db-dropdown.entry.js":[3436,3436],"./db-footer.entry.js":[3573,3573],"./db-header.entry.js":[6039,6039],"./db-headline.entry.js":[3870,3870],"./db-image.entry.js":[6934,6934],"./db-input.entry.js":[2164,2164],"./db-language-switcher.entry.js":[7111,7111],"./db-link.entry.js":[459,6846],"./db-linklist.entry.js":[6339,6339],"./db-logo.entry.js":[4002,4002],"./db-mainnavigation.entry.js":[8695,8695],"./db-meta.entry.js":[9583,9583],"./db-metanavigation.entry.js":[6148,8624],"./db-notification.entry.js":[6900,6900],"./db-notifications.entry.js":[1042,1042],"./db-overflow-menu.entry.js":[7136,7136],"./db-page.entry.js":[3643,3643],"./db-pagination.entry.js":[7182,7182],"./db-progress.entry.js":[7635,7635],"./db-radio.entry.js":[3565,3565],"./db-select.entry.js":[2574,2574],"./db-sidenavi.entry.js":[211,211],"./db-tab-bar.entry.js":[4414,4414],"./db-tab.entry.js":[3473,3473],"./db-table.entry.js":[7542,7542],"./db-tag.entry.js":[195,195],"./db-textarea.entry.js":[679,679],"./db-toggle.entry.js":[7645,7645],"./github-version-switcher.entry.js":[8308,8308]};function a(e){if(!l.o(o,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=o[e],a=n[0];return l.e(n[1]).then(function(){return l(a)})}a.keys=function(){return Object.keys(o)},a.id=3876,e.exports=a},5021:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio/examples",function(){return l(2944)}])},8429:function(e,n,l){"use strict";l.d(n,{Z:function(){return h}});var o=l(2322),a=l(7900),c=l(2784);let s=()=>{let e=(0,c.useRef)(null),[n,l]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{var n;let o=(null===(n=null==e?void 0:e.current)||void 0===n?void 0:n.innerHTML)==="";o&&l(!0)},[]),[n,e]},t=e=>{let{children:n,element:l="div",...o}=e,[a,t]=s();return a?(0,c.createElement)(l,{...o,children:n}):(0,c.createElement)(l,{...o,ref:t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:""}})};var i=l(6666);l(586);var d=l(5632);let r=(e,n)=>e?e.map(e=>({...e,current:"/"===e.link&&"/"===n||"/"!==e.link&&n.includes(e.link),children:e.children?r(e.children,n):[]})).map(e=>(0,i.e)(e)):[],u=e=>{let{children:n}=e,[l,s]=(0,c.useState)(!1),[u,h]=(0,c.useState)(!1),[g,b]=(0,c.useState)(!1),m=(0,d.useRouter)();return(0,c.useEffect)(()=>{m.query&&(s("true"===m.query.fullscreen),h("true"===m.query.noh1),b("true"===m.query.properties))},[m]),(0,o.jsxs)(t,{children:[m.isReady&&l&&(0,o.jsx)("div",{className:"".concat(u?"noh1":""," ").concat(g?"is-properties":""),children:n}),m.isReady&&!l&&(0,o.jsxs)(a.rG,{children:[(0,o.jsxs)(a.ff,{slot:"header",children:[(0,o.jsx)(a.Bl,{src:"https://db-ui.github.io/images/db_logo.svg",children:"DB-UI Mono"}),(0,o.jsx)(a.Pm,{data:JSON.stringify(r(i.Z,m.pathname))}),(0,o.jsx)(a.T2,{owner:"db-ui",repo:"mono"})]}),(0,o.jsx)("div",{children:n}),(0,o.jsx)(a.fw,{slot:"footer",copyright:!0})]})]})};var h=u},3048:function(e,n,l){"use strict";var o=l(2322),a=l(2784),c=l(7070),s=l(8490);let t=(0,a.forwardRef)(function(e,n){let[l,t]=(0,a.useState)(()=>!1),[i,d]=(0,a.useState)(()=>s.IY),[r,u]=(0,a.useState)(()=>!1),[h,g]=(0,a.useState)(()=>void 0),[b,m]=(0,a.useState)(()=>null);return(0,a.useEffect)(()=>{t(!0),d(e.id?e.id:"radio-"+(0,c.V)()),e.stylePath&&m(e.stylePath)},[]),(0,a.useEffect)(()=>{if(e.checked&&l&&document&&i){let e=null==document?void 0:document.getElementById(i);e&&(e.checked=!0,t(!1))}},[l]),(0,o.jsxs)(o.Fragment,{children:[b?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("link",{rel:"stylesheet",href:b})}):null,(0,o.jsx)("input",{type:"radio",ref:n,className:"db-radio"+(e.className?" "+e.className:""),id:i,name:e.name,defaultChecked:e.checked,disabled:e.disabled,"aria-describedby":e.describedbyid,"aria-invalid":e.invalid,"data-size":e.size,required:e.required,onChange:n=>{var l,o,a,c,s,t,i;e.onChange&&e.onChange(n),e.change&&e.change(n),u(null===(l=n.target)||void 0===l?void 0:l.checked),(null===(o=n.target)||void 0===o?void 0:null===(a=o.validity)||void 0===a?void 0:a.valid)!=h&&(g(null===(c=n.target)||void 0===c?void 0:null===(s=c.validity)||void 0===s?void 0:s.valid),e.validityChange&&e.validityChange(!!(null===(t=n.target)||void 0===t?void 0:null===(i=t.validity)||void 0===i?void 0:i.valid)))},onBlur:n=>{e.onBlur&&e.onBlur(n),e.blur&&e.blur(n)},onFocus:n=>{e.onFocus&&e.onFocus(n),e.focus&&e.focus(n)}}),(0,o.jsxs)("label",{htmlFor:i,children:[e.label,e.children]})]})});n.Z=t},8490:function(e,n,l){"use strict";var o,a,c,s,t,i;l.d(n,{$f:function(){return h},DM:function(){return g},IY:function(){return d},SU:function(){return r},ce:function(){return u},iw:function(){return o},r$:function(){return a}});let d="ID_WILL_BE_OVERWRITTEN_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARENT_INITIALIZING_IT_IN_THE_FRONTEND",r="LABEL SHOULD BE SET",u="Close Button";(s=o||(o={})).FUNCTIONAL="functional",s.REGULAR="regular",s.EXPRESSIVE="expressive";let h=Object.entries(o).map(e=>{let[,n]=e;return n});(t=a||(a={})).NEUTRAL_0="neutral-0",t.NEUTRAL_1="neutral-1",t.NEUTRAL_2="neutral-2",t.NEUTRAL_3="neutral-3",t.NEUTRAL_4="neutral-4",t.NEUTRAL_TRANSPARENT_FULL="neutral-transparent-full",t.NEUTRAL_TRANSPARENT_SEMI="neutral-transparent-semi",t.PRIMARY="primary",t.PRIMARY_TRANSPARENT_FULL="primary-transparent-full",t.PRIMARY_TRANSPARENT_SEMI="primary-transparent-semi",t.SECONDARY="secondary",t.SECONDARY_TRANSPARENT_FULL="secondary-transparent-full",t.SECONDARY_TRANSPARENT_SEMI="secondary-transparent-semi",t.SUCCESSFUL="successful",t.SUCCESSFUL_TRANSPARENT_FULL="successful-transparent-full",t.SUCCESSFUL_TRANSPARENT_SEMI="successful-transparent-semi",t.CRITICAL="critical",t.CRITICAL_TRANSPARENT_Full="critical-transparent-full",t.CRITICAL_TRANSPARENT_SEMI="critical-transparent-semi",t.WARNING="warning",t.WARNING_TRANSPARENT_FULL="warning-transparent-full",t.WARNING_TRANSPARENT_SEMI="warning-transparent-semi",t.INFORMATIONAL="informational",t.INFORMATIONAL_TRANSPARENT_FULL="informational-transparent-full",t.INFORMATIONAL_TRANSPARENT_SEMI="informational-transparent-semi";let g=Object.entries(a).map(e=>{let[,n]=e;return n});(i=c||(c={})).CRITICAL="critical",i.INFORMATIONAL="informational",i.WARNING="warning",i.SUCCESSFUL="successful",Object.entries(c).map(e=>{let[,n]=e;return n})},7070:function(e,n,l){"use strict";l.d(n,{V:function(){return o}});let o=()=>{var e;return null===(e=window.crypto)||void 0===e?void 0:e.randomUUID()}},6666:function(e,n,l){"use strict";l.d(n,{Z:function(){return o},e:function(){return a}});let o=[{label:"Home",link:"/"},{label:"Foundations",link:"/foundations",children:[{label:"Colors",link:"/foundations/colors",children:[{label:"Examples",link:"/foundations/colors/examples"}]},{label:"Icons",link:"/foundations/icons"}]},{label:"Components",link:"/components",children:[{label:"01 Layout",link:"/components/01-layout",children:[{label:"DBCard",link:"/components/card",children:[{label:"Examples",link:"/components/card/examples"},{label:"How to use",link:"/components/card/how-to-use"}]},{label:"DBDivider",link:"/components/divider",children:[{label:"Examples",link:"/components/divider/examples"},{label:"How to use",link:"/components/divider/how-to-use"}]},{label:"DBHeader",link:"/components/header",children:[{label:"Examples",link:"/components/header/examples"},{label:"How to use",link:"/components/header/how-to-use"}]},{label:"DBPage",link:"/components/page",children:[{label:"Examples",link:"/components/page/examples"},{label:"How to use",link:"/components/page/how-to-use"}]},{label:"DBSection",link:"/components/section",children:[{label:"Examples",link:"/components/section/examples"},{label:"How to use",link:"/components/section/how-to-use"}]}]},{label:"02 Action",link:"/components/02-action",children:[{label:"DBButton",link:"/components/button",children:[{label:"Examples",link:"/components/button/examples"},{label:"How to use",link:"/components/button/how-to-use"}]},{label:"DBLink",link:"/components/link",children:[{label:"Examples",link:"/components/link/examples"},{label:"How to use",link:"/components/link/how-to-use"}]}]},{label:"03 Data-Input",link:"/components/03-data-input",children:[{label:"DBInput",link:"/components/input",children:[{label:"Examples",link:"/components/input/examples"},{label:"How to use",link:"/components/input/how-to-use"}]},{label:"DBRadio",link:"/components/radio",children:[{label:"Examples",link:"/components/radio/examples"},{label:"How to use",link:"/components/radio/how-to-use"}]}]},{label:"04 Data-Display",link:"/components/04-data-display",children:[{label:"DBBrand",link:"/components/brand",children:[{label:"Examples",link:"/components/brand/examples"},{label:"How to use",link:"/components/brand/how-to-use"}]},{label:"DBIcon",link:"/components/icon",children:[{label:"Examples",link:"/components/icon/examples"},{label:"How to use",link:"/components/icon/how-to-use"}]},{label:"DBInfotext",link:"/components/infotext",children:[{label:"Examples",link:"/components/infotext/examples"},{label:"How to use",link:"/components/infotext/how-to-use"}]}]},{label:"06 Feedback",link:"/components/06-feedback",children:[{label:"DBAlert",link:"/components/alert",children:[{label:"Examples",link:"/components/alert/examples"},{label:"How to use",link:"/components/alert/how-to-use"}]}]}]},{label:"Showcases",link:"/showcases",children:[{label:"Angular",link:"/showcases/angular-current"},{label:"Angular LTS",link:"/showcases/angular-lts"},{label:"HTML",link:"/showcases/html"},{label:"React",link:"/showcases/react"},{label:"Reactwind",link:"/showcases/reactwind"},{label:"Vanilla",link:"/showcases/vanilla"},{label:"Vue",link:"/showcases/vue"}]}],a=e=>({...e,link:"".concat("/mono/review/feat-drawer").concat(e.link)})},2944:function(e,n,l){"use strict";l.r(n);var o=l(2322),a=l(8429),c=l(3048);n.default=()=>(0,o.jsxs)(a.Z,{children:[(0,o.jsx)("h1",{children:" DBRadio Examples "}),(0,o.jsxs)("dl",{className:"example-list",children:[(0,o.jsx)("dt",{children:"Default:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{children:"Test"})}),(0,o.jsx)("dt",{children:"checked:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{checked:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, checked, describedbyid, disabled, focus, id, invalid, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, size, title, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),checked:!0,describedbyid:"account",disabled:!0,focus:e=>console.log(e),id:"account",invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,size:"small",title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, describedbyid, disabled, focus, id, invalid, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, size, title, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),describedbyid:"account",disabled:!0,focus:e=>console.log(e),id:"account",invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,size:"small",title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, id, invalid, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, size, title, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),id:"account",invalid:!0,label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,size:"small",title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, id, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, size, title, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),id:"account",label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,size:"small",title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, id, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, title, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),id:"account",label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, title, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,title:"account",validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, placeholder, required, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",placeholder:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, label, maxLength, minLength, name, onBlur, onChange, onFocus, pattern, required, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),label:"account",maxLength:100,minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, label, minLength, name, onBlur, onChange, onFocus, pattern, required, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),label:"account",minLength:100,name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, label, name, onBlur, onChange, onFocus, pattern, required, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),pattern:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, change, disabled, focus, label, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),change:e=>console.log(e),disabled:!0,focus:e=>console.log(e),label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, disabled, focus, label, name, onBlur, onChange, onFocus, required, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),disabled:!0,focus:e=>console.log(e),label:"account",name:"account",onBlur:e=>console.log(e),onChange:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"blur, disabled, focus, label, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),disabled:!0,focus:e=>console.log(e),label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled, focus, label, name, onBlur, onFocus, required, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,focus:e=>console.log(e),label:"account",name:"account",onBlur:e=>console.log(e),onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled, focus, label, name, onFocus, required, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,focus:e=>console.log(e),label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled, label, name, onFocus, required, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,label:"account",name:"account",onFocus:e=>console.log(e),required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled, label, name, required, validityChange, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,label:"account",name:"account",required:!0,validityChange:e=>console.log(e),value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled, label, name, required, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,label:"account",name:"account",required:!0,value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled, name, required, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,name:"account",required:!0,value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"name, required, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{name:"account",required:!0,value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"name, value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{name:"account",value:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"name:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{name:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"describedbyid:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{describedbyid:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"invalid:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{invalid:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"size:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{size:"small",children:"Test"})}),(0,o.jsx)("dt",{children:"id:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{id:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"title:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{title:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"placeholder:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{placeholder:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"maxLength:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{maxLength:100,children:"Test"})}),(0,o.jsx)("dt",{children:"minLength:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{minLength:100,children:"Test"})}),(0,o.jsx)("dt",{children:"pattern:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{pattern:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"change:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{change:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"onChange:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{onChange:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"blur:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{blur:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"onBlur:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{onBlur:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"focus:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{focus:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"onFocus:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{onFocus:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"validityChange:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{validityChange:e=>console.log(e),children:"Test"})}),(0,o.jsx)("dt",{children:"label:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{label:"account",children:"Test"})}),(0,o.jsx)("dt",{children:"disabled:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{disabled:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"required:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{required:!0,children:"Test"})}),(0,o.jsx)("dt",{children:"value:"})," ",(0,o.jsx)("dd",{children:(0,o.jsx)(c.Z,{value:"account",children:"Test"})})]})]})}},function(e){e.O(0,[9883,9774,2888,179],function(){return e(e.s=5021)}),_N_E=e.O()}]);